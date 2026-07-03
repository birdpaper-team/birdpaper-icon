<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-content`">
      <div :class="`${clsBlockName}-qr-code`" @click="openImage('wxPay')">
        <img :src="_img.wxPay + '?imageMogr2/thumbnail/!40p'" />
        <span :class="`${clsBlockName}-qr-code-inner`">收款码</span>
      </div>
      <div :class="`${clsBlockName}-qr-code`" @click="openImage('wxSupport')">
        <img :src="_img.wxSupport + '?imageMogr2/thumbnail/!40p'" />
        <span :class="`${clsBlockName}-qr-code-inner`">赞赏码</span>
      </div>
    </div>

    <div class="tip-box">
      <ul>
        <li>请务必在赞助时留下联系方式/ID/昵称，以便可以及时更新你的支持信息</li>
        <li>如果你有任何问题，可以通过 <a href="mailto:my@moya.plus">my@moya.plus</a> 联系作者</li>
      </ul>
    </div>
  </div>

  <bp-modal title="图片详情" v-model="showModal" width="450px" :show-border="false" hide-footer>
    <img :src="_img[imgType] + '?imageMogr2/thumbnail/!80p'" style="width: 100%; height: auto; max-width: 400px" />
  </bp-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

const clsBlockName = "support-wx";
const _img: any = {
  wxPay: "https://cos.fpo.email/qr/wx-qr-code.jpg",
  wxSupport: "https://cos.fpo.email/qr/wx-support-code.jpg",
};

const imgType = ref<string>("wxPay");
const showModal = ref<boolean>(false);
const openImage = (type: string) => {
  imgType.value = type;
  showModal.value = true;
};
</script>
