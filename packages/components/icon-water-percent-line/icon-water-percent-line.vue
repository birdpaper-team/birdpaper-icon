<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M7.05 8.047 12 3.097l4.95 4.95a7 7 0 1 1-9.9 0Zm11.314-1.414L12 .269 5.636 6.633a9 9 0 1 0 12.728 0Zm-2.121 3.538-1.414-1.414-7.072 7.071 1.415 1.415 7.07-7.072ZM8.11 11.232a1.5 1.5 0 1 0 2.121-2.121 1.5 1.5 0 0 0-2.121 2.121Zm7.778 5.657a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.12Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWaterPercentLine',
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

    const iconClass = computed(() => [name, `${name}-water-percent-line`, { [`${name}-spin`]: props.spin }]);

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
