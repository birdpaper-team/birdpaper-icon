<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="m13.414 10.586.48.486.464.485.46.492c3.458 3.764 5.472 7.218 4.607 8.083-.4.4-1.356.183-2.64-.508a9.007 9.007 0 0 1-10.403-.591l2.98-2.98a2 2 0 1 0-1.45-1.57l.035.156-2.979 2.98a9.007 9.007 0 0 1-.592-10.405c-.692-1.283-.908-2.238-.508-2.639.977-.976 5.25 1.715 9.546 6.01Zm6.364-6.364a2 2 0 0 1-.165 2.976 9.015 9.015 0 0 1 .608 8.47c-1.189-1.955-3.07-4.174-5.393-6.497l-.537-.531c-2.128-2.079-4.156-3.765-5.958-4.861a9.015 9.015 0 0 1 8.471.608 2 2 0 0 1 2.974-.165Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBellFill',
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

    const iconClass = computed(() => [name, `${name}-bell-fill`, { [`${name}-spin`]: props.spin }]);

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
