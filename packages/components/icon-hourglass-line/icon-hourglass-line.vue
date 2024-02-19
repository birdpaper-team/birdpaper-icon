<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M6 4H4V2h16v2h-2v2c0 1.615-.816 2.915-1.844 3.977-.703.726-1.558 1.395-2.425 2.023.867.628 1.722 1.297 2.425 2.023C17.184 15.085 18 16.385 18 18v2h2v2H4v-2h2v-2c0-1.615.816-2.915 1.844-3.977.703-.726 1.558-1.395 2.425-2.023-.867-.628-1.722-1.297-2.425-2.023C6.816 8.915 6 7.615 6 6V4Zm2 0v2c0 .885.434 1.71 1.281 2.586.727.751 1.674 1.454 2.719 2.192 1.045-.738 1.992-1.441 2.719-2.192C15.566 7.71 16 6.885 16 6V4H8Zm4 9.222c-1.045.738-1.992 1.441-2.719 2.192C8.434 16.29 8 17.115 8 18v2h8v-2c0-.885-.434-1.71-1.281-2.586-.727-.751-1.674-1.454-2.719-2.192Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHourglassLine',
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

    const iconClass = computed(() => [name, `${name}-hourglass-line`, { [`${name}-spin`]: props.spin }]);

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
