<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M40.103 25.817c-.896 2.283-9.672 3.009-18.741.578-9.07-2.43-14.78-6.843-14.1-9.378 1.533-5.724 9.712-14.555 21.41-10.328 11.696 4.226 12.965 13.404 11.431 19.128Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28 7s-4 6.5-7 17-3 18-3 18M28 7S17.794 8.844 15 17M28 7s6 6 3 15" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 43s9-1.5 16-1.5 13 .5 13 .5M28 7c1 0 3-1 3.814-2.58M34 41c0-1.657-1-4-4-4s-4 2.343-4 4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSunshade',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    color: { type: String, default: "#333" },
    /** 旋转角度 */
    rotate: { type: Number },
    /** 是否旋转 */
    spin: { type: Boolean },
  },
  emits: {
    click: (ev: MouseEvent) => true,
  },
  setup(props, { emit }) {
    const name = 'bp-icon';

    const iconClass = computed(() => [name, `${name}-sunshade`, { [`${name}-spin`]: props.spin }]);

    const innerStyle = computed(() => {
      const styles: CSSProperties = {};
        props.size && (styles.width = props.size);
        props.size && (styles.height = props.size);
        props.rotate && (styles.transform = `rotate(${props.rotate}deg)`);

        return styles;
    });

    const onClick = (ev: MouseEvent) => {
      emit('click', ev);
    };

    return {
      iconClass,
      innerStyle,
      onClick,
    };
  }
});
</script>
