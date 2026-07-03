<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-title`">
      <div :class="`${clsBlockName}-title-inner`">
        <img src="https://cos.fpo.email/logo/usdt@2x.png?imageMogr2/thumbnail/!60p" alt="" /> USDT 支付
      </div>
      <span class="sub-title">
        通过 USDT 加密货币支持项目，推荐选择 TRC20
        链（手续费低、到账快），也可以选择其他链。转账前请仔细核对「链类型」与「地址」的对应关系。
      </span>
    </div>
    <div class="crypto-address-list">
      <div v-for="v in chainList" class="crypto-address-item" :key="v.name">
        <div class="chain-info">
          <img class="crypto-logo" :src="v.logo" />
          <span class="crypto-chain">{{ v.name }}</span>
          <div v-if="v.isRecommend" class="recommend-tag">推荐</div>
        </div>

        <bp-tooltip content="点击复制">
          <p class="crypto-addr" @click="handleCopy(v.address)">
            {{ v.address }}
          </p>
        </bp-tooltip>
      </div>
    </div>

    <div class="tip-box">
      <ul>
        <li>必须确保「链类型」与「地址」完全对应，选错链将导致资产永久丢失</li>
        <li>
          请务必在赞助后通过 <a href="mailto:my@moya.plus">my@moya.plus</a> 联系作者，并附上交易哈希 / TxID，以便可以及时更新你的支持信息
        </li>
        <li><b>加密货币转账不可逆，请务必仔细核对后再操作！</b></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { Message } from "birdpaper-ui";
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
    return Message.error("当前浏览器不支持复制功能");
  }
  copy(str);
  return Message.success("复制成功");
};
</script>
