<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M4 18.313V7h40v11.313a5.5 5.5 0 0 0-3.636 5.187A5.5 5.5 0 0 0 44 28.687V40H4V28.687A5.5 5.5 0 0 0 7.636 23.5 5.5 5.5 0 0 0 4 18.313Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M13 18v11M18 18v11" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 18h3a3 3 0 1 1 0 6h-3v-6Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><ellipse cx="32" cy="24" rx="3" ry="5" :stroke="color" stroke-width="4" stroke-linejoin="round"></ellipse></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconIpo',
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

    const iconClass = computed(() => [name, `${name}-ipo`, { [`${name}-spin`]: props.spin }]);

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
