<template>
  <lafApp />
  <TnTabbar fixed @change="tabbarChangeEvent">
    <TnTabbarItem text="应用列表" icon="menu-list" active-icon="menu-list-fill" />
    <TnTabbarItem text="设置" icon="set" active-icon="set-fill" />
  </TnTabbar>
</template>

<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnTabbar from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar.vue'
import TnTabbarItem from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar-item.vue'
import { useWxShare } from '@/hooks'
import lafApp from './lafApp.vue'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/pages/list/index',
})


</script>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>

<style lang="scss"></style>
