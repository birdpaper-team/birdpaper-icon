<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M36 32a11.97 11.97 0 0 0-4-8.944A11.955 11.955 0 0 0 24 20a11.955 11.955 0 0 0-8 3.056A11.97 11.97 0 0 0 12 32c0 6.627 5.373 12 12 12s12-5.373 12-12Z"></path><path d="M16 4h16v19.056A11.955 11.955 0 0 0 24 20a11.955 11.955 0 0 0-8 3.056V4Z"></path><path d="M16 4h16M16 4H8v10l8 6m0-16v16M32 4h8v10l-8 6m0-16v16m-16 3.056A11.955 11.955 0 0 1 24 20c3.073 0 5.877 1.155 8 3.056m-16 0A11.97 11.97 0 0 0 12 32c0 6.627 5.373 12 12 12s12-5.373 12-12a11.97 11.97 0 0 0-4-8.944m-16 0V20m16 3.056V20" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32 4h8v10l-8 6M16 4H8v10l8 6M36 32a11.97 11.97 0 0 0-4-8.944A11.955 11.955 0 0 0 24 20a11.955 11.955 0 0 0-8 3.056A11.97 11.97 0 0 0 12 32c0 6.627 5.373 12 12 12s12-5.373 12-12Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 4h16v19.056A11.955 11.955 0 0 0 24 20a11.955 11.955 0 0 0-8 3.056V4ZM24 37V27l-2 1m2 9h2m-2 0h-2" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconGoldMedalTwo',
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

    const iconClass = computed(() => [name, `${name}-gold-medal-two`, { [`${name}-spin`]: props.spin }]);

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
