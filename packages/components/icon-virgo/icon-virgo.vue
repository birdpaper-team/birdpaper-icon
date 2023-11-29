<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M30 17c4 0 11.088-.112 11.959 6.64C42.417 27.192 39.238 32.674 24 43" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 11a2 2 0 1 0 4 0h-4ZM4 11a2 2 0 1 0 4 0H4Zm4 0a4 4 0 0 1 4-4V3a8 8 0 0 0-8 8h4Zm4-4a4 4 0 0 1 4 4h4a8 8 0 0 0-8-8v4Z" :fill="color"></path><path d="M28 11a2 2 0 1 0 4 0h-4Zm-12 0a2 2 0 1 0 4 0h-4Zm4 0a4 4 0 0 1 4-4V3a8 8 0 0 0-8 8h4Zm4-4a4 4 0 0 1 4 4h4a8 8 0 0 0-8-8v4Z" :fill="color"></path><path d="M6 11v18M18 11v18" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 11v18c0 5 2.5 10 12 10" :stroke="color" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconVirgo',
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

    const iconClass = computed(() => [name, `${name}-virgo`, { [`${name}-spin`]: props.spin }]);

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
