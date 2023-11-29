<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M24 4v7M29 17v-6H19v6M31 4H19.8C17.142 4 15 5.2 15 8M38 26.977V26a9 9 0 0 0-9-9H19a9 9 0 0 0-9 9v9a9 9 0 0 0 9 9h5" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40 39.77c0 2.336-2.015 4.23-4.5 4.23S31 42.106 31 39.77c0-2.337 2.94-6.77 4.5-6.77s4.5 4.433 4.5 6.77Z" :stroke="color" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHandwashingFluid',
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

    const iconClass = computed(() => [name, `${name}-handwashing-fluid`, { [`${name}-spin`]: props.spin }]);

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
