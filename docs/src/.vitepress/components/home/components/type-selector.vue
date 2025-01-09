<template>
  <div :class="`${name}`">
    <bp-trigger v-model:popupVisible="triggerVisible" position="bottom" :popup-offset="20">
      <div :class="[`${name}-container`, { 'trigger-active': triggerVisible }]">
        <span>{{ model }}</span>
        <IconArrowDownSLine v-if="!triggerVisible" size="20" />
        <IconSubtractLine v-else size="20" />
      </div>
      <template #content>
        <div class="icon-select-trigger">
          <ul>
            <li v-for="v in typeList" :class="['icon-select-trigger-item', { active: model === v.name }]" @click="handleSelect(v.name)">
              <p class="icon-select-trigger-item-inner">
                <span>{{ v.name }}</span>
                <span v-if="v.list.length" class="icons-length">{{ v.list.length }}</span>
              </p>
            </li>
          </ul>
        </div>
      </template>
    </bp-trigger>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { iconInfo, IconArrowDownSLine, IconSubtractLine } from "birdpaper-icon";
import { useThrottleFn } from "@vueuse/core";

const model = defineModel({ type: String, default: "" });

const name = "home-page-search-select";
const triggerVisible = ref<boolean>(false);
const typeList = [
  {
    name: "All Icons",
    list: [],
  },
  ...iconInfo,
];

const handleSelect = (name: string) => {
  cancelListenScroll();
  model.value = name;
  var targetElement = document.getElementById(name);

  // 判断目标元素是否存在
  if (targetElement) {
    // 将页面滚动到目标元素位置
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  triggerVisible.value = false;

  setTimeout(() => {
    listenScroll();
  }, 200);
};

const setCurrentType = () => {
  const rect = document.getElementById("All Icons")?.getBoundingClientRect() || null;
  if (rect && rect.top >= 0) {
    model.value = "All Icons";
    return;
  }
  for (let i = 0; i < typeList.length; i++) {
    const element = typeList[i];
    const el = document.getElementById(`${element.name}-container`);
    if (el) {
      if (isInViewport(el)) {
        model.value = element.name;
        return;
      }
    }
  }
};

const isInViewport = (element: Element | any) => {
  var rect = element.getBoundingClientRect();

  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const offsetTop = element.offsetTop;
  const scollTop = document.documentElement.scrollTop;
  const top = offsetTop - scollTop;
  return top <= viewPortHeight && rect.bottom > 0;
};

const throttleFn = useThrottleFn(setCurrentType, 100);
const listenScroll = () => {
  window.addEventListener("scroll", throttleFn);
};

const cancelListenScroll = () => {
  window.removeEventListener("scroll", throttleFn);
};

onMounted(() => {
  listenScroll();
});

onBeforeMount(() => {
  cancelListenScroll;
});
</script>
