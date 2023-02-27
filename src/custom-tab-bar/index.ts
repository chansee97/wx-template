Component({
  data: {
    value: '/pages/home/index',
    list: [
      { value: '/pages/home/index', label: '首页', icon: 'home', badge: { count: 16 } },
      // { value: 'pages/home/index', label: '应用', icon: 'app', badge: { dot: true } },
      { value: '/pages/index/index', label: '我的', icon: 'user', badge: { count: '···' } },
    ],
  },

  methods: {
    onChange(e: WechatMiniprogram.CustomEvent) {
      this.setData({
        value: e.detail.value,
      })
      wx.switchTab({ url: e.detail.value })
    },
  },
})
