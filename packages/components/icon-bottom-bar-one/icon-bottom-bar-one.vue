<template>
  <svg viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M13.777 20h4s7 7.28 7 14-6 10-6 10h-6s-6-3.28-6-10c0-6.72 7-14 7-14ZM15.777 4c2.084 0 5 1.52 5 6s-3.333 10-3.333 10h-3.333s-3.334-5.52-3.334-10 2.917-6 5-6ZM31.777 20h4s7 7.28 7 14-6 10-6 10h-6s-6-3.28-6-10c0-6.72 7-14 7-14ZM33.777 4c2.084 0 5 1.52 5 6s-3.333 10-3.333 10h-3.333s-3.334-5.52-3.334-10 2.917-6 5-6Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBottomBarOne',
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

    const iconClass = computed(() => [name, `${name}-bottom-bar-one`, { [`${name}-spin`]: props.spin }]);

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
