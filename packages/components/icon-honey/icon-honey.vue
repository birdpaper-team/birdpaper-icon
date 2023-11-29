<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m14.613 4.843-4.69 4.689a3.316 3.316 0 1 0 4.69 4.689l4.689-4.69a3.316 3.316 0 0 0-4.69-4.688ZM24.773 13.44l-6.252 6.252a3.316 3.316 0 1 0 4.69 4.69l6.252-6.253a3.316 3.316 0 1 0-4.69-4.69Z" :stroke="color" stroke-width="4"></path><path d="m28.68 18.91 13.77 13.77c1.028 1.028.811 2.91-.483 4.206-1.295 1.295-3.178 1.511-4.206.484L23.991 23.6M22.428 6.406 11.487 17.347a3.316 3.316 0 1 0 4.69 4.69l10.94-10.942a3.316 3.316 0 1 0-4.689-4.69Z" :stroke="color" stroke-width="4"></path><path d="M13.854 23.142c1.424 4.437 1.187 7.715-.71 9.834-2.847 3.179-2.405 11.166 4.026 11.166 6.431 0 8.32-7.987 2.872-10.79" :stroke="color" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHoney',
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

    const iconClass = computed(() => [name, `${name}-honey`, { [`${name}-spin`]: props.spin }]);

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
