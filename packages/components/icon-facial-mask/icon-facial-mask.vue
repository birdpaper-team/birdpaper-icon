<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M10 15.114a3 3 0 0 1 1.991-2.825l11-3.929a3 3 0 0 1 2.018 0l11 3.929A3 3 0 0 1 38 15.114v16.49c0 .885-.39 1.725-1.092 2.264C34.468 35.742 28.434 40 24 40c-4.434 0-10.467-4.258-12.908-6.132A2.838 2.838 0 0 1 10 31.604v-16.49Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M10 28c-3.314 0-6-3.11-6-6.947S6.686 16 10 16M38 28c3.314 0 6-3.11 6-6.947S41.314 16 38 16" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="m16 25 8-4 8 4M19 31l5-2 5 2" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFacialMask',
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

    const iconClass = computed(() => [name, `${name}-facial-mask`, { [`${name}-spin`]: props.spin }]);

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
