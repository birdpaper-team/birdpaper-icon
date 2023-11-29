<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m26.829 37.172 10.343-10.343M21.172 26.829 10.829 37.172M26.829 21.172l10.343-10.343M10.829 21.172l10.343-10.343M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM28 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM44 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM44 24a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM44 40a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM28 40a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 40a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 24a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM28 24a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconNinePointsConnected',
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

    const iconClass = computed(() => [name, `${name}-nine-points-connected`, { [`${name}-spin`]: props.spin }]);

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
