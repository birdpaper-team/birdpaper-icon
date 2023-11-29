<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M17 12c0-3.314-2.239-6-5-6s-5 2.686-5 6 2.239 6 5 6 5-2.686 5-6Zm-6.237 3.645 3.562-6.173c.422.69.675 1.57.675 2.528 0 2.21-1.343 4-3 4-.441 0-.86-.127-1.237-.355ZM9 12c0-2.21 1.343-4 3-4 .441 0 .86.127 1.237.355l-3.562 6.173C9.253 13.838 9 12.958 9 12Zm3-10a9.971 9.971 0 0 0-7.07 2.93A9.971 9.971 0 0 0 2 12a9.971 9.971 0 0 0 2.93 7.07A9.971 9.971 0 0 0 12 22a9.97 9.97 0 0 0 7.07-2.93A9.97 9.97 0 0 0 22 12a9.971 9.971 0 0 0-2.93-7.07A9.971 9.971 0 0 0 12 2ZM6.344 6.344A7.972 7.972 0 0 1 12 4c2.208 0 4.206.895 5.656 2.344A7.972 7.972 0 0 1 20 12a7.972 7.972 0 0 1-2.344 5.656A7.972 7.972 0 0 1 12 20a7.972 7.972 0 0 1-5.656-2.344A7.972 7.972 0 0 1 4 12c0-2.208.895-4.206 2.344-5.656Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCreativeCommonsZeroLine',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    fill: { type: String, default: "#333" },
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

    const iconClass = computed(() => [name, `${name}-creative-commons-zero-line`, { [`${name}-spin`]: props.spin }]);

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
