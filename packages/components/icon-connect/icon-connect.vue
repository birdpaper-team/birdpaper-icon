<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path clip-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM10 42a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM38 44a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM22 28a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM34 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m11 11 4 4M30 12l-2 2M34 33.5 28 26M14 31l4-4" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconConnect',
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

    const iconClass = computed(() => [name, `${name}-connect`, { [`${name}-spin`]: props.spin }]);

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
