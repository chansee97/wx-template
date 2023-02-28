import { mobxBehavior } from './behavior'
import { ComponentWithComputed } from 'miniprogram-computed'
import { setActiveTab } from '../../utils/index'
import { testApi } from '../../apis/index'

ComponentWithComputed({
  behaviors: [mobxBehavior],
  data: {
    someData: 'string1',
  },
  computed: {
    allSum(data) {
      if (data.numA) {
        // TODO: 等待ComponentWithComputed修复：#84
        return data.numA + data.numB + data.global.numA + data.global.numB
      }
    },
  },

  methods: {
    onLoad: async function () {
      console.log(await testApi())
    },
    onShow() {
      setActiveTab(this, 0)
    },
  },
})
