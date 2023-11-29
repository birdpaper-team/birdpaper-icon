<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M44 24H30c0-3.31-2.69-6-6-6s-6 2.69-6 6H4C4 12.95 12.95 4 24 4s20 8.95 20 20Z" :stroke="color" stroke-width="4" stroke-miterlimit="2" stroke-linejoin="round"></path><path d="M18 24H4c0 11.05 8.95 20 20 20s20-8.95 20-20H30" :stroke="color" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 30a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" :stroke="color" stroke-width="4" stroke-miterlimit="2" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBaokemeng',
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

    const iconClass = computed(() => [name, `${name}-baokemeng`, { [`${name}-spin`]: props.spin }]);

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
