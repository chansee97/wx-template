interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo
    svgs?: Record<string, string>
    test: string
  }
}

type IAnyObject = WechatMiniprogram.IAnyObject
