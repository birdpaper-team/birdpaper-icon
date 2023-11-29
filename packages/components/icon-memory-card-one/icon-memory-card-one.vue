<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M6 9a3 3 0 0 1 3-3h21.336a3 3 0 0 1 2.122.879l3.858 3.858 4.805 4.805A3 3 0 0 1 42 17.664V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M31 26H17a3 3 0 0 0-3 3v13h20V29a3 3 0 0 0-3-3Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M29 16H17a3 3 0 0 1-3-3V6" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMemoryCardOne',
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

    const iconClass = computed(() => [name, `${name}-memory-card-one`, { [`${name}-spin`]: props.spin }]);

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
