<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M42 26c0 8.837-8.059 16-18 16S6 34.837 6 26m9-13.86c2.648-1.36 5.721-2.14 9-2.14s6.352.78 9 2.14" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M6 26V8.488c0-1.731 2.05-2.645 3.337-1.487L15 12.093M42 26V8.488c0-1.731-2.05-2.645-3.337-1.487L33 12.093" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="30" cy="22" r="2" :fill="color"></circle><circle cx="18" cy="22" r="2" :fill="color"></circle><circle cx="24" cy="28" r="2" :fill="color"></circle><path d="M16 30 4 31M19 35 7 41M32 30l12 1M29 35l12 6" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCat',
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

    const iconClass = computed(() => [name, `${name}-cat`, { [`${name}-spin`]: props.spin }]);

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
