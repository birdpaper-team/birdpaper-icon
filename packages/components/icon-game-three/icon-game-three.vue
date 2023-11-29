<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M19 30v3a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7V19M29 30v3a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7V19" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><rect x="5" y="8" width="38" height="22" rx="11" :stroke="color" stroke-width="4"></rect><path d="M21 19h-8M17 15v8" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><rect x="32" y="15" width="4" height="4" rx="2" :fill="color"></rect><rect x="28" y="20" width="4" height="4" rx="2" :fill="color"></rect></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconGameThree',
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

    const iconClass = computed(() => [name, `${name}-game-three`, { [`${name}-spin`]: props.spin }]);

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
