import https from 'https'
import fs from 'fs'
import { resolve } from 'path'
type jsonDefine = {
  iconList: string[]
}
const rootPath: string = resolve(process.cwd())
const fromPath = `${rootPath}/iconify.json`
const distPath = `${rootPath}/src/assets/svg/iconify.ts`

const json = require(fromPath) as jsonDefine

// 代码模板
const tepmlate = `// 该文件由脚本自动生成，请勿手动修改
export default {code
}`

// 代码生成逻辑
async function genCode() {
  if (!json.iconList || !json.iconList.length) {
    console.log('请正确设置iconList')
    return
  }
  const iconSvgMap: Record<string, string> = {}
  for (let index = 0; index < json.iconList.length; index++) {
    const iconName = json.iconList[index]
    const res = await new Promise<string>((resolve) => {
      https.get(`https://api.iconify.design/${iconName}.svg`, (res: any) => {
        let data = ''
        res.on('data', (chunk: string) => {
          data += chunk
        })
        res.on('end', () => {
          resolve(data)
        })
      })
    })
    iconSvgMap[iconName] = res
  }
  let code = ''
  for (const [name, svg] of Object.entries(iconSvgMap)) {
    code += `\n'${name}': '${svg}',`
  }
  code = tepmlate.replace('code', code)
  fs.writeFileSync(distPath, code, {
    encoding: 'utf8',
  })
  console.log('代码已生成在：' + distPath)
}

genCode()
