<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11.998 2a4 4 0 0 1 4 4v9h1c.55 0 1-.45 1-1V8a1 1 0 0 1 2 0v6c0 1.66-1.34 3-3 3h-1v3h2v2h-12v-2h2v-6h-1a3 3 0 0 1-3-3V9a1 1 0 1 1 2 0v2c0 .55.45 1 1 1h1V6a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v14h4V6a2 2 0 0 0-2-2Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCactusLine',
  props: {
    /** 图标尺寸 */
    size: { type: String, default: "18px" },
    /** 颜色 */
    fill: { type: String, default: "#595959" },
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

    const iconClass = computed(() => [name, `${name}-cactus-line`, { [`${name}-spin`]: props.spin }]);

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
