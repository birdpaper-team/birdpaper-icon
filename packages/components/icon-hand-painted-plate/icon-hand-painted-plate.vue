<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M18 10h24a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H18M4 12a2 2 0 0 1 2-2h12v30H6a2 2 0 0 1-2-2V12Z" :stroke="color" stroke-width="4"></path><path d="M11 17v4M37 16 25 33" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><rect x="9" y="25" width="4" height="4" rx="2" :fill="color"></rect><rect x="9" y="31" width="4" height="4" rx="2" :fill="color"></rect></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHandPaintedPlate',
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

    const iconClass = computed(() => [name, `${name}-hand-painted-plate`, { [`${name}-spin`]: props.spin }]);

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
