<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M30 18h11a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H19a1 1 0 0 1-1-1V30M9.97 6H6v4.034M9.997 30H6v-3.988" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26 30h3.997v-3.988M26.002 6H30v3.998" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.028 6h3.98" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M6 16v4.015M30 16v4.015M15.992 30H20" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSentToBack',
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

    const iconClass = computed(() => [name, `${name}-sent-to-back`, { [`${name}-spin`]: props.spin }]);

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
