<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M10 32V11a7 7 0 1 1 14 0v26a7 7 0 1 0 14 0V16" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M41 4v12h-6V4h6Z"></path><path d="M32 16h3m9 0h-3m0 0V4h-6v12m6 0h-6" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 44V32h6v12H7Z"></path><path d="M16 32h-3m-9 0h3m0 0v12h6V32m-6 0h6" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRopeSkipping',
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

    const iconClass = computed(() => [name, `${name}-rope-skipping`, { [`${name}-spin`]: props.spin }]);

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
