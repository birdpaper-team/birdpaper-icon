<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 4c6.075 0 11 4.925 11 11v5h-3v-5a8 8 0 0 0-7.75-7.996L12 7a8 8 0 0 0-7.996 7.75L4 15v5H1v-5C1 8.925 5.925 4 12 4Zm0 4a7 7 0 0 1 7 7v5h-3v-5a4 4 0 0 0-3.8-3.995L12 11a4 4 0 0 0-3.995 3.8L8 15v5H5v-5a7 7 0 0 1 7-7Zm0 4a3 3 0 0 1 3 3v5H9v-5a3 3 0 0 1 3-3Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRainbowFill',
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

    const iconClass = computed(() => [name, `${name}-rainbow-fill`, { [`${name}-spin`]: props.spin }]);

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
