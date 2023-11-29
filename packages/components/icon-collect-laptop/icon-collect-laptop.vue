<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M21 9H11a3 3 0 0 0-3 3v21h32V23" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-2Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M32.3 7C30.478 7 29 8.435 29 10.205c0 3.204 3.9 6.117 6 6.795 2.1-.678 6-3.59 6-6.795C41 8.435 39.523 7 37.7 7A3.326 3.326 0 0 0 35 8.362 3.326 3.326 0 0 0 32.3 7Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCollectLaptop',
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

    const iconClass = computed(() => [name, `${name}-collect-laptop`, { [`${name}-spin`]: props.spin }]);

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
