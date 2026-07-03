<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-selector`">
      <div
        :class="[`${clsBlockName}-selector-item`, { active: currentChannel === channel.value }]"
        v-for="channel in channelList"
        :key="channel.value"
        @click="handleSelectChannel(channel.value)">
        <img v-if="channel.logo" class="item-image" :src="channel.logo" :alt="channel.name" />
        <!-- @vue-ignore -->
        <component v-if="channel.icon" :is="allIcons[`${channel.icon}`]" size="15"></component>
        <span :class="channel.value === 'bmac' ? 'font-quick' : ''">{{ channel.name }}</span>
      </div>
    </div>
    <div :class="`${clsBlockName}-content`">
      <component :is="_componentsMap[currentChannel]" :locale="locale"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useData } from "vitepress";
import * as allIcons from "birdpaper-icon";
import bmac from "./components/bmac.vue";
import wxPay from "./components/wx-pay.vue";
import aliPay from "./components/ali-pay.vue";
import cryptoCoin from "./components/crypto-coin.vue";
import githubSponsors from "./components/github-sponsors.vue";

const clsBlockName = "support-channel";
const { lang } = useData();
const locale = computed(() => (lang.value === "zh-CN" ? "zh-CN" : "en"));

const _componentsMap: Record<string, any> = {
  bmac,
  "wx-pay": wxPay,
  "ali-pay": aliPay,
  "crypto-coin": cryptoCoin,
  "github-sponsors": githubSponsors,
};

const channelList = computed(() => {
  const isZh = locale.value === "zh-CN";
  return [
    {
      name: "Buymeacoffee",
      value: "bmac",
      logo: "https://cos.fpo.email/logo/bmc-logo.svg",
    },
    {
      name: "Github Sponsors",
      value: "github-sponsors",
      icon: "IconGithubFill",
    },
    {
      name: isZh ? "微信" : "WeChat",
      value: "wx-pay",
      icon: "IconWechatPayLine",
    },
    {
      name: isZh ? "支付宝" : "Alipay",
      value: "ali-pay",
      icon: "IconAlipayLine",
    },
    {
      name: isZh ? "USDT 支付" : "USDT",
      value: "crypto-coin",
      icon: "IconBtcLine",
    },
  ];
});

const currentChannel = ref(channelList.value[0].value);
const handleSelectChannel = (value: string) => {
  currentChannel.value = value;
};
</script>
