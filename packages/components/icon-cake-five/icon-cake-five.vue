<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M9 27h30l-4.688 17H13.689L9 27ZM39 27H9c0-5.5 5.5-8 5.5-8 0-2 2-8 9.5-8s9.5 6 9.5 8c0 0 5.5 2.5 5.5 8Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 27h36" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M28 12a4 4 0 0 0-8 0" :stroke="color" stroke-width="4"></path><path d="m24 8 4-4" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path :stroke="color" stroke-width="4" d="M20 27v17M28 27v17"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCakeFive',
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

    const iconClass = computed(() => [name, `${name}-cake-five`, { [`${name}-spin`]: props.spin }]);

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
