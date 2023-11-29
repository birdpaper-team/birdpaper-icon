<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><circle cx="24" cy="10" r="5" :stroke="color" stroke-width="4"></circle><path d="M24 21C14 21 11 6 11 6L6 8l3 16.5c1.167.667 5.5 3 8 6.5s2 7 7.5 7 6-4.5 7.5-7 5.667-6 7-6.5L42 8l-5-2s-3 15-13 15Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M34 29s7 4 7 13h-5c0-6-5-9-5-9M15 29s-7 4-7 13h5c0-6 5-9 5-9" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBabySling',
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

    const iconClass = computed(() => [name, `${name}-baby-sling`, { [`${name}-spin`]: props.spin }]);

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
