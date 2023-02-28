Component({
  data: {
    activeIndex: 0,
    list: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
        icon: 'home',
        badge: {},
      },
      {
        pagePath: '/pages/user/index',
        text: '我的',
        icon: 'user',
        badge: {},
      },
    ],
  },

  methods: {
    onChange(e: WechatMiniprogram.CustomEvent) {
      const activeIndex = e.detail.value
      this.setData({
        activeIndex,
      })
      const path = this.data.list[activeIndex].pagePath
      wx.switchTab({ url: path })
    },
  },
})
