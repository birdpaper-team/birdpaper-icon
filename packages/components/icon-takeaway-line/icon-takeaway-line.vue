<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M16 1a1 1 0 0 1 1 1v.999L22 3v6l-2.02-.001 2.767 7.596A4 4 0 1 1 15.127 19h-4.253a4.002 4.002 0 0 1-7.8-.227A1.998 1.998 0 0 1 2 17V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v8a1 1 0 0 0 .883.993L12 13h2a1 1 0 0 0 .993-.883L15 12V3h-3V1h4ZM7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12-.001a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-1.148-7H17V12a3 3 0 0 1-3 3h-2a3.001 3.001 0 0 1-2.829-2H4v2.354A4.002 4.002 0 0 1 10.874 17h4.252a4.002 4.002 0 0 1 4.57-2.94l-1.844-5.061ZM9 8H4v3h5V8Zm11-3h-3v2h3V5ZM9 5H4v1h5V5Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTakeawayLine',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    fill: { type: String, default: "#333" },
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

    const iconClass = computed(() => [name, `${name}-takeaway-line`, { [`${name}-spin`]: props.spin }]);

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
