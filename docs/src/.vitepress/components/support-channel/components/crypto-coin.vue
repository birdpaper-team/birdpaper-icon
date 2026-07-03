<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-title`">
      <div :class="`${clsBlockName}-title-inner`">
        <img src="https://cos.fpo.email/logo/usdt@2x.png?imageMogr2/thumbnail/!60p" alt="" /> {{ isZh ? "USDT 支付" : "USDT Payment" }}
      </div>
      <span class="sub-title" v-if="isZh">
        通过 USDT 加密货币支持项目，推荐选择 TRC20
        链（手续费低、到账快），也可以选择其他链。转账前请仔细核对「链类型」与「地址」的对应关系。
      </span>
      <span class="sub-title" v-else>
        Support the project with USDT cryptocurrency. TRC20 chain is recommended (low fees, fast confirmation). Other chains are also available. Please verify the chain type matches the address before transferring.
      </span>
    </div>
    <div class="crypto-address-list">
      <div v-for="v in chainList" class="crypto-address-item" :key="v.name">
        <div class="chain-info">
          <img class="crypto-logo" :src="v.logo" />
          <span class="crypto-chain">{{ v.name }}</span>
          <div v-if="v.isRecommend" class="recommend-tag">{{ isZh ? "推荐" : "Recommended" }}</div>
        </div>

        <bp-tooltip :content="isZh ? '点击复制' : 'Click to copy'">
          <p class="crypto-addr" @click="handleCopy(v.address)">
            {{ v.address }}
          </p>
        </bp-tooltip>
      </div>
    </div>

    <div class="tip-box">
      <ul>
        <li v-if="isZh">必须确保「链类型」与「地址」完全对应，选错链将导致资产永久丢失</li>
        <li v-else>You must ensure the chain type matches the address exactly. Choosing the wrong chain will result in permanent loss of assets.</li>
        <li v-if="isZh">
          请务必在赞助后通过 <a href="mailto:my@moya.plus">my@moya.plus</a> 联系作者，并附上交易哈希 / TxID，以便可以及时更新你的支持信息
        </li>
        <li v-else>
          After sponsoring, please contact the author at <a href="mailto:my@moya.plus">my@moya.plus</a> with your transaction hash / TxID so we can update your support info promptly.
        </li>
        <li><b>{{ isZh ? "加密货币转账不可逆，请务必仔细核对后再操作！" : "Cryptocurrency transfers are irreversible. Please double-check everything before proceeding!" }}</b></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useClipboard } from "@vueuse/core";
import { Message } from "birdpaper-ui";

const props = defineProps<{ locale: string }>();
const isZh = computed(() => props.locale === "zh-CN");

const clsBlockName = "crypto-coin";

const chainList = [
  {
    name: "Tron (TRC20)",
    logo: "https://cos.fpo.email/logo/tron@2x.png?imageMogr2/thumbnail/!60p",
    address: "TAcAgqwRgHjr2VMNsBST4j39mVqnmjLNc3",
    isRecommend: true,
  },
  {
    name: "X Layer (USDT&USDT0)",
    logo: "https://cos.fpo.email/logo/okb@2x.png?imageMogr2/thumbnail/!60p",
    address: "0x475a69f25446f69cf352d483f18b3ca1b3ac32db",
    isRecommend: false,
  },
  {
    name: "Ethereum (ERC20)",
    logo: "https://cos.fpo.email/logo/eth@2x.png?imageMogr2/thumbnail/!60p",
    address: "0x475a69f25446f69cf352d483f18b3ca1b3ac32db",
    isRecommend: false,
  },
];

const { copy, isSupported } = useClipboard();
const handleCopy = (str: string) => {
  if (!isSupported) {
    return Message.error(isZh ? "当前浏览器不支持复制功能" : "Clipboard not supported in this browser");
  }
  copy(str);
  return Message.success(isZh ? "复制成功" : "Copied successfully");
};
</script>
