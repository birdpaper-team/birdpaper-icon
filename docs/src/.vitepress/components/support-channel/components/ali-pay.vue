<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-content`">
      <div :class="`${clsBlockName}-qr-code`" @click="openImage('alipay')">
        <img :src="_img.alipay + '?imageMogr2/thumbnail/!40p'" />
        <span :class="`${clsBlockName}-qr-code-inner`">{{ isZh ? "收款码" : "Payment" }}</span>
      </div>
    </div>

    <div class="tip-box">
      <ul>
        <li v-if="isZh">请务必在赞助时留下联系方式/ID/昵称，以便可以及时更新你的支持信息</li>
        <li v-else>Please leave your contact info / ID / nickname when sponsoring so we can update your support info promptly.</li>
        <li v-if="isZh">如果你有任何问题，可以通过 <a href="mailto:my@moya.plus">my@moya.plus</a> 联系作者</li>
        <li v-else>If you have any questions, feel free to contact the author at <a href="mailto:my@moya.plus">my@moya.plus</a></li>
      </ul>
    </div>
  </div>

  <bp-modal :title="isZh ? '图片详情' : 'Image Preview'" v-model="showModal" width="450px" :show-border="false" hide-footer>
    <img :src="_img[imgType] + '?imageMogr2/thumbnail/!80p'" style="width: 100%; height: auto; max-width: 400px" />
  </bp-modal>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{ locale: string }>();
const isZh = computed(() => props.locale === "zh-CN");

const clsBlockName = "support-ali";
const _img: any = {
  alipay: "https://cos.fpo.email/qr/ali-qr-code.png",
};

const imgType = ref<string>("alipay");
const showModal = ref<boolean>(false);
const openImage = (type: string) => {
  imgType.value = type;
  showModal.value = true;
};
</script>
