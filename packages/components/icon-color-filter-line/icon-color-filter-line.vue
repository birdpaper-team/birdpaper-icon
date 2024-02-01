<template>
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 3a4 4 0 0 1 3.696 5.533 5.996 5.996 0 0 0-4.216 2.434A4.002 4.002 0 0 1 8 7a4 4 0 0 1 4-4Zm5.764 5.672a6 6 0 1 0-11.527 0A6 6 0 1 0 12 18.655a6 6 0 1 0 5.764-9.983Zm-4.61 8.262a5.996 5.996 0 0 0 0-4.867 4.001 4.001 0 1 1 0 4.867Zm-1.79-3.967a4.001 4.001 0 1 1-4.214-2.434 5.996 5.996 0 0 0 4.215 2.434Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconColorFilterLine',
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

    const iconClass = computed(() => [name, `${name}-color-filter-line`, { [`${name}-spin`]: props.spin }]);

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
