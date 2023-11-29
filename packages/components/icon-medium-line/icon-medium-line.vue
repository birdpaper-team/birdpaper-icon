<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4.001 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm1 2v14h14V5h-14Zm12.3 10.94.955.954v.05h-4.921v-.05l1.004-.954c.1-.1.15-.2.15-.351V9.664c0-.252 0-.603.051-.904l-3.314 8.285h-.05L7.76 9.412c-.05-.2-.1-.2-.15-.3v5.02c-.051.352 0 .653.15.955l1.356 1.807v.05H5.5v-.05l1.356-1.858c.15-.3.2-.652.15-.954V8.56c0-.251-.05-.553-.25-.753L5.851 6.55V6.5h3.516l2.912 6.478L14.841 6.5h3.415v.05l-.954 1.105c-.1.1-.15.251-.15.351v7.633c0 .1.05.251.15.301Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMediumLine',
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

    const iconClass = computed(() => [name, `${name}-medium-line`, { [`${name}-spin`]: props.spin }]);

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
