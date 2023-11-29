<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M6 9a3 3 0 0 1 3-3h25.281L42 13.207V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M24.008 6 24 13.385c0 .34-.448.615-1 .615h-8c-.552 0-1-.275-1-.615V6"></path><path d="M24.008 6 24 13.385c0 .34-.448.615-1 .615h-8c-.552 0-1-.275-1-.615V6h10.008Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M9 6h25.281M14 26h20M14 34h10.008" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSave',
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

    const iconClass = computed(() => [name, `${name}-save`, { [`${name}-spin`]: props.spin }]);

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
