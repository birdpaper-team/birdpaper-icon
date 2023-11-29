<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M19.999 10h8v12h-8V10ZM17 35l-5 9H12h24L31 35" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.999 22V5a1 1 0 0 0-1-1h-18a1 1 0 0 0-1 1v17" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.08 22.364A.3.3 0 0 1 6.372 22h35.254a.3.3 0 0 1 .292.364c-1.224 5.508-4.635 10.452-10 12.2C29.436 35.374 26.656 36 24 36c-2.655 0-5.436-.627-7.92-1.436-5.365-1.749-8.776-6.692-10-12.2Z" :stroke="color" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconToilet',
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

    const iconClass = computed(() => [name, `${name}-toilet`, { [`${name}-spin`]: props.spin }]);

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
