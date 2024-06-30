<script lang="ts" setup>
import { computed, ref, toRef } from 'vue'
import { useComponentColor } from '@tuniao/tnui-vue3-uniapp/hooks'
import { formatDomSizeValue } from '@tuniao/tnui-vue3-uniapp/utils'

import { customPageProps } from './custom-page'

import type { CSSProperties } from 'vue'

const props = defineProps(customPageProps)

// 解析颜色
const [pageBgClass, pageBgStyle] = useComponentColor(
  toRef(props, 'pageBgColor'),
  'bg'
)

// 页面容器的类
const containerClass = computed<string>(() => {
  const cls: string[] = ['custom-page__container']

  if (pageBgClass.value) cls.push(pageBgClass.value)

  return cls.join(' ')
})
// 页面容器样式
const containerStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {}
  style.height = '100vh' // 高度全屏
  style.width = '100vw'
  if (props.padding) {
    style.padding = formatDomSizeValue(props.padding)
  }

  if (pageBgStyle.value) style.backgroundColor = pageBgStyle.value

  if (props.contentFullWidth) {
    style.overflowX = 'hidden'
  }

  if (props.bottomMoreSpace) {
    style.paddingBottom = '80rpx'
  }

  return style
})
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近 Vue 组件的表现 (不会出现 shadow 节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<template>
  <view class="custom-page">
    <view :class="[containerClass]" :style="containerStyle">
      <slot />
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import '../styles/index.scss';
</style>
