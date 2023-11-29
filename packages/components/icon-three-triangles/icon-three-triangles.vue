<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m17 7 7 12.124L29.99 29.5H4.01L17 7Z"></path><path d="m31 7 12.99 22.5H18.01L24 19.124 31 7ZM11.01 41.5h25.98l-7-12H18.01l-7 12Z"></path><path d="M29.99 29.5 24 19.124M18.01 29.5l-7 12h25.98l-7-12H18.01Zm0 0h25.98L31 7l-7 12.124L18.01 29.5Zm0 0L24 19.124 18.01 29.5Zm0 0h11.98-11.98Zm11.98 0H4.01L17 7l7 12.124L29.99 29.5Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconThreeTriangles',
  props: {
    /** 图标尺寸 */
    size: { type: String },
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

    const iconClass = computed(() => [name, `${name}-three-triangles`, { [`${name}-spin`]: props.spin }]);

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
