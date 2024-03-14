<template>
  <bp-modal v-model="modalShow" title="ICON." width="600px">
    <div class="icon-modal-body">
      <div class="icon-area">
        <component :is="allIcons[`Icon${toPascalCase(icon)}`]" size="40px" :fill="color"></component>
      </div>
      <div class="icon-info">
        <div class="icon-info-title">
          <p>{{ icon }}</p>
          <component :is="allIcons[`IconFileCopyLine`]" size="18" @click="handleCopy(icon)"></component>
        </div>
        <div class="icon-info-component">
          <div class="icon-info-component-left">
            <component :is="allIcons[`IconCodeSLine`]" size="16"></component>
            <span class="component-tag-inner">{{ componentTag }}</span>
          </div>
          <div class="icon-info-component-right">
            <component :is="allIcons[`IconFileCopyLine`]" size="14" @click="handleCopy(componentTag)"></component>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="icon-modal-footer">
        <div class="footer-option">
          <color-picker v-model:pureColor="color" format="hex" disableHistory />
        </div>
        <div class="footer-copyright">
          <span class="footer-copyright-inner">Design By Remix Icon.</span>
        </div>
      </div>
    </template>
  </bp-modal>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { toPascalCase } from "@/utils/helper";
import * as allIcons from "birdpaper-icon";
import { Message } from "birdpaper-ui";
import * as useClipboard from "vue-clipboard3/dist/esm/index";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import { useScroll } from "@/hooks/useScroll";

const icon = ref<string>("");
const color = ref<string>("");

const componentTag = computed<string>(() => {
  return `<Icon${toPascalCase(icon.value)} ${color.value ? 'fill="' + color.value + '"' : ""} />`;
});

/** 复制到剪贴板 */
const { toClipboard } = useClipboard.default();
const handleCopy = async (str: string) => {
  try {
    await toClipboard(str);
    Message.success(`已复制到剪贴板: ${str}`);
  } catch (err) {
    Message.error((err as Error).message);
  }
};

const modalShow = ref<boolean>(false);
const open = (str: string) => {
  icon.value = str;
  modalShow.value = true;
};

const { move, stop } = useScroll();
watch(
  () => modalShow.value,
  () => {
    modalShow.value ? stop() : move();
  }
);

defineExpose({
  open,
});
</script>
