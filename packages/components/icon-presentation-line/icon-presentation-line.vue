<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M8 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5 16v6H3V10a3 3 0 0 1 5.106-2.137l2.374 2.243 2.313-2.313 1.414 1.414-3.687 3.687L9 11.46V22H7v-6H5Zm1-7a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-1-1Zm13-4h-9V3h10a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3.424l2.823 6h-2.21l-2.824-6H10v-2h9V5Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPresentationLine',
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

    const iconClass = computed(() => [name, `${name}-presentation-line`, { [`${name}-spin`]: props.spin }]);

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
