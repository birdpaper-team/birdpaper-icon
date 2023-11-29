<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M10 18c0-7.732 6.268-14 14-14s14 6.268 14 14v12c0 7.732-6.268 14-14 14s-14-6.268-14-14V18ZM10 17h28M22 11h4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 26s5.4-.6 7 1c1.6 1.6 1 3.369 1 3.369 3 0 6 .158 6 3.631 0 2.5-4 4-6.5 2.369C17.5 38.5 17 40 14 40M38 23s-3.5-2-5-1-1 3-1 3c-1.5-1-4 0-4 2.5s2.5 3.5 5 2.5c1 3 3.5 3 5 2" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25 44v0c7.18 0 13-5.82 13-13V18c0-7.732-6.268-14-14-14v0M23 44v0c-7.18 0-13-5.82-13-13V18c0-7.732 6.268-14 14-14v0" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconAirplaneWindow',
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

    const iconClass = computed(() => [name, `${name}-airplane-window`, { [`${name}-spin`]: props.spin }]);

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
