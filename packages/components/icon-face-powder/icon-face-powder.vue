<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><ellipse cx="24" cy="30" rx="16" ry="6" :stroke="color" stroke-width="4" stroke-linejoin="round"></ellipse><ellipse cx="24" cy="14" rx="16" ry="10" :stroke="color" stroke-width="4" stroke-linejoin="round"></ellipse><path d="m23 10-5 3M30 14l-5 3M40 38c0 3.314-7.163 6-16 6S8 41.314 8 38M40 38v-8M8 38v-8" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><ellipse cx="24" cy="30" rx="7" ry="2" :fill="color"></ellipse></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFacePowder',
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

    const iconClass = computed(() => [name, `${name}-face-powder`, { [`${name}-spin`]: props.spin }]);

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
