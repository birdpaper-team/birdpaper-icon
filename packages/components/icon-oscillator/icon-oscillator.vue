<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M7 9v15a6 6 0 0 0 6 6h22a6 6 0 0 0 6-6V9" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 10a6 6 0 0 1 6-6h22a6 6 0 0 1 0 12H13a6 6 0 0 1-6-6Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="15" cy="10" r="2" :fill="color"></circle><circle cx="21" cy="10" r="2" :fill="color"></circle><circle cx="27" cy="10" r="2" :fill="color"></circle><circle cx="33" cy="10" r="2" :fill="color"></circle><path d="M19 30v14M29 30v14" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconOscillator',
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

    const iconClass = computed(() => [name, `${name}-oscillator`, { [`${name}-spin`]: props.spin }]);

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
