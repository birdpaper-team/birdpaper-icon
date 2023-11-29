<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M24 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM24 44a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM40 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M12 24h24M24 12v24M37.305 15.11a16.073 16.073 0 0 0-4.415-4.415m-17.78 0a16.074 16.074 0 0 0-4.415 4.415l4.415-4.415ZM10.696 32.89a16.08 16.08 0 0 0 4.415 4.415l-4.415-4.415Zm22.195 4.415a16.079 16.079 0 0 0 4.415-4.415l-4.415 4.415Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCrossRing',
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

    const iconClass = computed(() => [name, `${name}-cross-ring`, { [`${name}-spin`]: props.spin }]);

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
