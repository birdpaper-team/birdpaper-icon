<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M43 9v30h-9v-8h9V17h-9V9h9ZM5 17V9h9v8H5v14h9v8H5V17Z"></path><path d="M43 17V9h-9m9 8v14m0-14h-9M5 17V9h9m-9 8v14m0-14h9M5 31v8h9m-9-8h9m29 0v8h-9m9-8h-9m0-22v8m0-8h-4m4 30v-8m0 8h-4M14 9v8m0-8h4m-4 30v-8m0 8h4m-4-22h4m16 0h-4m4 14h-4m-16 0h4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 7v4M24 17v4M24 27v4M24 37v4" :stroke="color" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconEditMovie',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    color: { type: String, default: "#333" },
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

    const iconClass = computed(() => [name, `${name}-edit-movie`, { [`${name}-spin`]: props.spin }]);

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
