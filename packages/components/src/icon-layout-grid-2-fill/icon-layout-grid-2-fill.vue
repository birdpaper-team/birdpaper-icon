<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3 3a1 1 0 0 0-1 1v4h5.5V3H3Zm6.5 0v5h5V3h-5Zm7 0v5H22V4a1 1 0 0 0-1-1h-4.5Zm5.5 7h-5.5v4H22v-4Zm0 6h-5.5v5H21a1 1 0 0 0 1-1v-4Zm-7.5 5v-5h-5v5h5Zm-7 0v-5H2v4a1 1 0 0 0 1 1h4.5ZM2 14h5.5v-4H2v4Zm7.5-4h5v4h-5v-4Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconLayoutGrid2Fill',
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

    const iconClass = computed(() => [name, `${name}-layout-grid-2-fill`, { [`${name}-spin`]: props.spin }]);

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
