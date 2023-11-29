<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M5 6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v36a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><circle cx="11" cy="35" r="2" :fill="color"></circle><path d="M11 11v14M23.977 9.756l10.06-2.515a1 1 0 0 1 1.211.72l7.5 29.063a1 1 0 0 1-.725 1.22l-10.06 2.515a1 1 0 0 1-1.211-.72l-7.5-29.063a1 1 0 0 1 .726-1.22Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="35" cy="32" r="2" :fill="color"></circle><path d="m31 16 2.5 10" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFolderOne',
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

    const iconClass = computed(() => [name, `${name}-folder-one`, { [`${name}-spin`]: props.spin }]);

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
