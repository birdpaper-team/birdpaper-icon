<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="m12 2.076.455.233a12.05 12.05 0 0 1 4.402 3.846 11.92 11.92 0 0 1 2.962-.957L21 4.98V13a9 9 0 0 1-18 0V4.98l1.18.218c1.041.19 2.035.516 2.963.957a12.05 12.05 0 0 1 4.402-3.846L12 2.076Zm-3.122 5.09A12.06 12.06 0 0 1 12 10.363a12.066 12.066 0 0 1 3.122-3.199A10.055 10.055 0 0 0 12 4.337a10.056 10.056 0 0 0-3.122 2.828Zm2.021 5.268a10.05 10.05 0 0 0-3.908-4.102A9.939 9.939 0 0 0 5 7.457V13c0 3.29 2.27 6.05 5.329 6.8A12.032 12.032 0 0 1 10 17c0-1.617.32-3.159.9-4.566Zm1.554 7.552A7 7 0 0 0 19 13V7.457A9.996 9.996 0 0 0 12 17c0 1.042.159 2.045.453 2.987Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFlowerLine',
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

    const iconClass = computed(() => [name, `${name}-flower-line`, { [`${name}-spin`]: props.spin }]);

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
