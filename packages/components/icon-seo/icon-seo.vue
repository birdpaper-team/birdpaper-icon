<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><rect x="4" y="8" width="40" height="32" rx="1.633" :stroke="color" stroke-width="4"></rect><path d="M16 18.948c-2-2.948-5.502-1.01-5.251 2.02C11 24 15 24 15.249 27.032 15.5 30.062 12 32 10 29.051M26 18h-4v13h4M22 25h4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><rect x="32" y="18" width="6" height="13" rx="3" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSeo',
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

    const iconClass = computed(() => [name, `${name}-seo`, { [`${name}-spin`]: props.spin }]);

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
