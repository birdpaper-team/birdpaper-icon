<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 4.86c-3.174 0-5.157 1.587-5.95 4.76 1.19-1.587 2.578-2.182 4.165-1.785.905.226 1.552.883 2.268 1.61C13.651 10.63 15 12 17.95 12c3.173 0 5.156-1.587 5.95-4.76-1.19 1.587-2.579 2.182-4.165 1.785-.906-.226-1.552-.883-2.27-1.61C16.3 6.23 14.95 4.86 12 4.86ZM6.05 12C2.876 12 .893 13.587.1 16.76c1.19-1.587 2.578-2.182 4.165-1.785.905.226 1.552.883 2.269 1.61C7.7 17.77 9.05 19.14 12 19.14c3.173 0 5.156-1.587 5.95-4.76-1.19 1.587-2.579 2.182-4.165 1.785-.906-.226-1.552-.883-2.27-1.61C10.35 13.37 9 12 6.05 12Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTailwindCssFill',
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

    const iconClass = computed(() => [name, `${name}-tailwind-css-fill`, { [`${name}-spin`]: props.spin }]);

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
