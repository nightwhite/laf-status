<template>
  <CustomPage title="列表" page-bg-color="tn-gray-light" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="你的 Laf 应用列表">

      <view class="list-container">
        <view class="list-item">
          <TnListItem bottom-border>
            <view class="tn-w-full tn-flex tn-flex-row justify-between items-center">
              <view class="flex-item">应用名称</view>
              <view class="flex-item">App ID</view>
              <view class="flex-item">状态</view>
            </view>
          </TnListItem>
        </view>
        <view class=" list-item">
          <TnListItem bottom-border bottom-border-indent>关于图鸟</TnListItem>
          <!-- 这里去循环 -->
        </view>

        <view class=" list-item">
          <TnListItem bottom-border bottom-border-indent>关于图鸟</TnListItem>
          <!-- 这里去循环 -->
        </view>

        <view class=" list-item">
          <TnListItem bottom-border bottom-border-indent>关于图鸟</TnListItem>
          <!-- 这里去循环 -->
        </view>

      </view>
    </DemoContainer>
  </CustomPage>
</template>

<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnListItem from '@tuniao/tnui-vue3-uniapp/components/list/src/list-item.vue'
import CustomPage from '@/components/custom-page-laf/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/list/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>

<style lang="scss">
.list-first-item {
  border-radius: 15rpx 15rpx 0rpx 0rpx;
}

.list-last-item {
  border-radius: 0rpx 0rpx 15rpx 15rpx;
}
</style>
