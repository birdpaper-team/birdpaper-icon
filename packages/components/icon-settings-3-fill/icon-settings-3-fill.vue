<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.954 2.21a9.99 9.99 0 0 1 4.09-.002A3.993 3.993 0 0 0 16 5.07a3.992 3.992 0 0 0 3.457.261A9.988 9.988 0 0 1 21.5 8.877a3.992 3.992 0 0 0-1.5 3.122c0 1.264.586 2.391 1.501 3.124a10.042 10.042 0 0 1-2.045 3.543 3.992 3.992 0 0 0-3.456.261 3.993 3.993 0 0 0-1.955 2.86 9.99 9.99 0 0 1-4.09.004A3.993 3.993 0 0 0 8 18.927a3.992 3.992 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.992 3.992 0 0 0 4 11.999c0-1.264-.587-2.39-1.502-3.124a10.043 10.043 0 0 1 2.045-3.542A3.993 3.993 0 0 0 8 5.07a3.993 3.993 0 0 0 1.954-2.86ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSettings3Fill',
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

    const iconClass = computed(() => [name, `${name}-settings-3-fill`, { [`${name}-spin`]: props.spin }]);

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
