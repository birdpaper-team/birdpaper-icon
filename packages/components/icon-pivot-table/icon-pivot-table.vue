<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M42 4H6a2 2 0 0 0-2 2l.001 36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" :stroke="color" stroke-width="4"></path><path d="M20.009 34.008H33.5v-14" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.5 38.5 23 37l-3-3 3-3 1.5-1.5M29 24.5l1.5-1.5 3-3 3 3 1.5 1.5" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 4v40M4 14.038 44 14" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M8 4h20M8 44h20" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44 8v10M4 8v10" :stroke="color" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPivotTable',
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

    const iconClass = computed(() => [name, `${name}-pivot-table`, { [`${name}-spin`]: props.spin }]);

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
