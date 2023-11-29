<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M10.464 8.597c.265 0 .48 2.106.48 4.704l-.001.35c-.019 2.435-.226 4.354-.479 4.354-.256 0-.465-1.965-.48-4.44v-.353c.005-2.557.218-4.615.48-4.615Zm-1.664.96c.259 0 .47 1.8.48 4.054v.34c-.01 2.253-.221 4.053-.48 4.053-.255 0-.464-1.755-.48-3.97v-.339l.002-.34c.025-2.133.23-3.798.478-3.798Zm-1.664 0c.255 0 .464 1.755.48 3.97v.339l-.002.34c-.025 2.133-.23 3.799-.478 3.799-.259 0-.47-1.8-.48-4.055v-.34c.01-2.253.221-4.053.48-4.053Zm-1.664.575c.265 0 .48 1.763.48 3.937l-.002.335c-.02 2.017-.227 3.6-.478 3.6-.262 0-.474-1.716-.48-3.851v-.169c.006-2.135.218-3.851.48-3.851Zm-1.664 1.729c.265 0 .48 1.375.48 3.071v.159c-.013 1.623-.223 2.914-.48 2.914-.265 0-.48-1.376-.48-3.072v-.159c.013-1.623.223-2.913.48-2.913Zm10.784-4.8c2.58 0 4.72 1.885 5.118 4.354a3.36 3.36 0 1 1 .993 6.589H12.48a.768.768 0 0 1-.768-.768V7.933a5.16 5.16 0 0 1 2.88-.872ZM2.144 11.668c.265 0 .48 1.333.48 2.977v.155c-.014 1.571-.223 2.82-.48 2.82-.26 0-.473-1.29-.48-2.897v-.079c0-1.643.215-2.976.48-2.976Zm-1.664.96c.265 0 .48.946.48 2.113v.13c-.016 1.106-.225 1.981-.48 1.981-.265 0-.48-.945-.48-2.111v-.131c.016-1.106.225-1.981.48-1.981Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSoundcloudFill',
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

    const iconClass = computed(() => [name, `${name}-soundcloud-fill`, { [`${name}-spin`]: props.spin }]);

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
