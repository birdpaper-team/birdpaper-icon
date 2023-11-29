<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M18 4C13 4 4 8 4 18.298V25M35 30v14M18.014 22c.486 1.5 1.986 4.5 6.382 3.738C26.98 25.427 33.082 26.14 36 31c1.5 2.5 5.447 2.496 8-3.86" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m26 16-2-2.5s-1.617-1.755-3-2.5c-1.383-.744-4-1.5-7 0-1.297.815-4 2-4 6.943V44" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27 44v-3a5 5 0 0 0-5-5v0a5 5 0 0 0-5 5v3" :stroke="color" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHorseZodiac',
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

    const iconClass = computed(() => [name, `${name}-horse-zodiac`, { [`${name}-spin`]: props.spin }]);

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
