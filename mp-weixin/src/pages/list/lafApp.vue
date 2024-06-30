<template>
  <CustomPage title="列表" page-bg-color="tn-gray-light">
    <DemoContainer title="你的 Laf 应用列表">
      <view class="list-container">
        <view class="list-item">
          <TnListItem bottom-border>
            <view class="tn-flex justify-between">
              <view class="flex-item">应用名称</view>
              <view class="flex-item">App ID</view>
              <view class="flex-item">状态</view>
            </view>
          </TnListItem>
        </view>

        <view v-for="(item, index) in collapseData" :key="index">
          <TnCollapse :show-arrow="false" class="list-item tn-white_bg tn-my-2">
            <TnCollapseItem :title="item.title">
              {{ item.content }}
              <view class="progress-container">
                <TnCircleProgress :percent="0.01" show-percent />
                <text class="cpu-text ">CPU</text>
              </view>
            </TnCollapseItem>
          </TnCollapse>
        </view>

      </view>
    </DemoContainer>
  </CustomPage>
</template>

<script lang="ts" setup>
import TnListItem from '@tuniao/tnui-vue3-uniapp/components/list/src/list-item.vue'
import CustomPage from '@/components/custom-page-laf/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import TnCollapseItem from '@tuniao/tnui-vue3-uniapp/components/collapse/src/collapse-item.vue'
import TnCollapse from '@tuniao/tnui-vue3-uniapp/components/collapse/src/collapse.vue'
import TnCircleProgress from '@tuniao/tnui-vue3-uniapp/components/circle-progress/src/circle-progress.vue'
import TnLineProgress from '@tuniao/tnui-vue3-uniapp/components/line-progress/src/line-progress.vue'

const collapseData = [
  {
    title: '关雎',
    content:
      '关关雎鸠，在河之洲。窈窕淑女，君子好逑。',

    progressPercent: 30
  },
  {
    title: '长歌行',
    content:
      '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？少壮不努力，老大徒伤悲！',
  },
  {
    title: '秋风辞',
    content:
      '秋风起兮白云飞，草木黄落兮雁南归。兰有秀兮菊有芳，怀佳人兮不能忘。泛楼船兮济汾河，横中流兮扬素波。少壮几时兮奈老何！',
  },
]
</script>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>

<style lang="scss">
.tn-my-2 {
  margin-top: 20rpx; //调整这个值来控制上间距大小
  margin-bottom: 20rpx; // 调整这个值来控制下间距大小
}

.cpu-text {
  margin-top: 8px;
  /* 调整文字与进度条之间的间距 */
  font-size: 14px;
  /* 调整文字大小 */
}
</style>
