<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="m17 1.208 1.32 2.473L20.792 5 18.32 6.319 17.002 8.79 15.68 6.32l-2.472-1.32 2.473-1.318L17 1.208Zm-6.333 8.125 5 2.667-5 2.666-2.666 5-2.667-5-5-2.666 5-2.667 2.667-5 2.666 5Zm.75 2.667L9.19 10.81 8.001 8.583l-1.189 2.228L4.584 12l2.228 1.188 1.189 2.228 1.188-2.228L11.417 12Zm8.25 4.333-1.666-3.125-1.667 3.125L13.209 18l3.125 1.666 1.667 3.125 1.666-3.125L22.792 18l-3.125-1.667Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSparkling2Line',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    fill: { type: String, default: "#333" },
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

    const iconClass = computed(() => [name, `${name}-sparkling-2-line`, { [`${name}-spin`]: props.spin }]);

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
