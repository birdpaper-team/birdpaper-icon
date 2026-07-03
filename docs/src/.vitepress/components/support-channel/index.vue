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
      <component :is="_componentsMap[currentChannel]"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import * as allIcons from "birdpaper-icon";
import bmac from "./components/bmac.vue";
import wxPay from "./components/wx-pay.vue";
import aliPay from "./components/ali-pay.vue";
import cryptoCoin from "./components/crypto-coin.vue";
import githubSponsors from "./components/github-sponsors.vue";

const clsBlockName = "support-channel";
const _componentsMap: Record<string, any> = {
  bmac,
  "wx-pay": wxPay,
  "ali-pay": aliPay,
  "crypto-coin": cryptoCoin,
  "github-sponsors": githubSponsors,
};

const channelList = [
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
    name: "微信",
    value: "wx-pay",
    icon: "IconWechatPayLine",
  },
  {
    name: "支付宝",
    value: "ali-pay",
    icon: "IconAlipayLine",
  },
  {
    name: "USDT 支付",
    value: "crypto-coin",
    icon: "IconBtcLine",
  },
];

const currentChannel = ref(channelList[0].value);
const handleSelectChannel = (value: string) => {
  currentChannel.value = value;
};
</script>
