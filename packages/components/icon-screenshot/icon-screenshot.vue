<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M10 42a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M40.062 8C24 28.433 15.805 38.68 14.242 40.243a6 6 0 0 1-8.485 0" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M38 42a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M42.242 40.243a6 6 0 0 1-8.485 0C32.195 38.68 24 28.446 8 8" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconScreenshot',
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

    const iconClass = computed(() => [name, `${name}-screenshot`, { [`${name}-spin`]: props.spin }]);

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
