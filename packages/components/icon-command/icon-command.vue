<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M9.455 14.91h5.454V9.454a5.455 5.455 0 1 0-5.454 5.454ZM9.455 33.09h5.454v5.455a5.455 5.455 0 1 1-5.454-5.454Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M14.909 14.909h18.182v18.182H14.909z"></path><path d="M38.545 14.91h-5.454V9.454a5.455 5.455 0 1 1 5.454 5.454ZM38.545 33.09a5.455 5.455 0 1 1-5.454 5.455v-5.454h5.454Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCommand',
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

    const iconClass = computed(() => [name, `${name}-command`, { [`${name}-spin`]: props.spin }]);

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
