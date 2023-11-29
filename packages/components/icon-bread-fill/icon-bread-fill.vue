<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M1 7a4 4 0 0 1 4-4h2a4 4 0 0 0-2 7.465V19a3 3 0 0 0 3 3H6a3 3 0 0 1-3-3v-8.535A3.998 3.998 0 0 1 1 7Zm7 15v-2a1 1 0 0 1-1-1V9.122l-.667-.236A2.001 2.001 0 0 1 7 5V3h12a4 4 0 0 1 2 7.465V19a3 3 0 0 1-3 3H8Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBreadFill',
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

    const iconClass = computed(() => [name, `${name}-bread-fill`, { [`${name}-spin`]: props.spin }]);

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
