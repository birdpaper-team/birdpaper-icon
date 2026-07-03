<template>
  <div :class="clsBlockName">
    <img class="qr-code" src="https://cos.fpo.email/qr/bmc_qr.png?imageMogr2/thumbnail/!20p" />

    <a class="bmc-button" href="https://buymeacoffee.com/muyi" target="_blank">
      <img src="https://cos.fpo.email/logo/bmc-logo-yellow.png?imageMogr2/thumbnail/!20p" />
      Buy Me a Coffee
    </a>

    <bp-input v-model="_inputValue" class="bmc-input" readonly size="large">
      <template #suffix>
        <bp-button size="mini" type="plain">复制</bp-button>
      </template>
    </bp-input>

    <div class="tip-box">
      <ul>
        <li>请务必在赞助时留下联系方式/ID/昵称，以便可以及时更新你的支持信息</li>
        <li>如果你有任何问题，可以通过 <a href="mailto:my@moya.plus">my@moya.plus</a> 联系作者</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const clsBlockName = "support-bmac";
const _inputValue = ref<string>("https://buymeacoffee.com/muyi");
</script>
