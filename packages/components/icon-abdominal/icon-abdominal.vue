<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M7.9 5c2.837 3.02 4.256 6.94 4.256 11.765 0 7.235-6.157 12.773-7.187 16.735-.687 2.641-1.01 5.808-.97 9.5M39.256 5c-2.838 3.02-4.257 6.94-4.257 11.765C35 24 41.156 29.538 42.186 33.5c.687 2.641 1.01 5.808.97 9.5" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M6.244 30.837c6.525 4.13 12.45 6.195 17.777 6.195 5.326 0 10.959-2.065 16.898-6.195" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M24 31a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" :fill="color"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconAbdominal',
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

    const iconClass = computed(() => [name, `${name}-abdominal`, { [`${name}-spin`]: props.spin }]);

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
