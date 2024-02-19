<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="m4.256 5.672 3.58 3.577A2.5 2.5 0 0 0 10 13h3.999l.09.008A.5.5 0 0 1 14 14H8.5v2H11v2h2v-2h1c.182 0 .359-.02.53-.056l3.798 3.8A9.958 9.958 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.4.846-4.604 2.256-6.328ZM12 2c5.523 0 10 4.477 10 10 0 2.4-.846 4.604-2.256 6.328l-3.579-3.577A2.5 2.5 0 0 0 14 11h-4l-.09-.01A.5.5 0 0 1 10 10h5.5V8H13V6h-2v2h-1c-.181 0-.358.02-.529.056l-3.799-3.8A9.959 9.959 0 0 1 12 2Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCreativeCommonsNcFill',
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

    const iconClass = computed(() => [name, `${name}-creative-commons-nc-fill`, { [`${name}-spin`]: props.spin }]);

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
