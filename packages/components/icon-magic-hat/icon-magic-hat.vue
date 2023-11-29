<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M10 10c.5 3 1 4.5 1.5 8 .4 2.8.5 7.167.5 9-2.167 1-7 3-7 7s5 9 19 9 19-5 19-9-7-7-7-7 0-5.5.5-9 1-5 1.5-8" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M36 27c0 4-1 8-12.5 8" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><ellipse cx="24" cy="10" rx="14" ry="5" :stroke="color" stroke-width="4"></ellipse></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMagicHat',
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

    const iconClass = computed(() => [name, `${name}-magic-hat`, { [`${name}-spin`]: props.spin }]);

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
