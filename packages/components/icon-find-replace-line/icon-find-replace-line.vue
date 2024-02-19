<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="m18.033 16.618 4.28 4.282-1.413 1.414-4.282-4.281A8.963 8.963 0 0 1 11 20a8.998 8.998 0 0 1-8.065-5H9l-1.304 2.173A6.972 6.972 0 0 0 11 18a6.977 6.977 0 0 0 4.875-1.975l.15-.15A6.977 6.977 0 0 0 18 11c0-.695-.101-1.366-.29-2h2.067c.146.643.223 1.313.223 2a8.963 8.963 0 0 1-1.967 5.618ZM19.065 7H13l1.304-2.173A6.972 6.972 0 0 0 11 4c-3.867 0-7 3.133-7 7 0 .695.101 1.366.29 2H2.223A9.038 9.038 0 0 1 2 11c0-4.973 4.027-9 9-9a8.997 8.997 0 0 1 8.065 5Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFindReplaceLine',
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

    const iconClass = computed(() => [name, `${name}-find-replace-line`, { [`${name}-spin`]: props.spin }]);

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
