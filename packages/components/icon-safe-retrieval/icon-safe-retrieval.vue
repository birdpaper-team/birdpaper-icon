<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M7 9.127 24.008 4 41 9.127v10.515C41 30.695 34.153 40.506 24.003 44 13.849 40.506 7 30.692 7 19.638V9.128Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M24 30a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="m29 29 6 7" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M41 19.643C41 30.695 34.153 40.507 24.002 44" :stroke="color" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSafeRetrieval',
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

    const iconClass = computed(() => [name, `${name}-safe-retrieval`, { [`${name}-spin`]: props.spin }]);

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
