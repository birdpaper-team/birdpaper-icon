<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M4 43h40" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 24s9-1 19-1 19 1 19 1M6 18s9.053-4 18-4 18 4 18 4M5 30s9 2 19 2 19-2 19-2" :stroke="color" stroke-width="4"></path><path d="M24 6C12.954 6 4 14.954 4 26c0 7.809 3.475 13.706 10 17h20c6.525-3.294 10-9.191 10-17 0-11.046-8.954-20-20-20Z" :stroke="color" stroke-width="4"></path><path d="M24 6c-3.866 0-7 8.954-7 20 0 7.177 1.012 13.472 3 17h8c1.988-3.528 3-9.823 3-17 0-11.046-3.134-20-7-20Z" :stroke="color" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDome',
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

    const iconClass = computed(() => [name, `${name}-dome`, { [`${name}-spin`]: props.spin }]);

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
