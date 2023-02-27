import { defaultRequest } from '../utils/index'

export async function testApi() {
  return await defaultRequest.put({
    url: '/test',
  })
}
