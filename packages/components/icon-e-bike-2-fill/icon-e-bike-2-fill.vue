<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M16 1a1 1 0 0 1 1 1v1h5v6h-2.019l2.746 7.545A4 4 0 1 1 15.126 19h-4.252a4.002 4.002 0 0 1-7.8-.226A2 2 0 0 1 2 17V7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3h-3V1h4Zm3 15a2 2 0 1 0 1.88 1.316l-.017-.044A2 2 0 0 0 19 16ZM7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm2-8H4v2h5V8Zm11-3h-3v2h3V5Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconEBike2Fill',
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

    const iconClass = computed(() => [name, `${name}-e-bike-2-fill`, { [`${name}-spin`]: props.spin }]);

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
