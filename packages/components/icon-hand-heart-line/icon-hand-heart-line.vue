<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5.005 9.003a1 1 0 0 1 1 1 6.97 6.97 0 0 1 4.33 1.5h2.17c1.332 0 2.529.578 3.353 1.498l3.147.002a5 5 0 0 1 4.516 2.851c-2.365 3.12-6.194 5.149-10.516 5.149-2.79 0-5.15-.604-7.061-1.658a.998.998 0 0 1-.94.658h-3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3Zm1 3v5.02l.045.034c1.794 1.26 4.133 1.946 6.955 1.946 3.004 0 5.798-1.156 7.835-3.13l.133-.133-.12-.1a2.994 2.994 0 0 0-1.643-.63l-.205-.007-2.112-.001c.073.321.112.656.112 1v1h-9v-2h6.79l-.034-.079a2.5 2.5 0 0 0-2.092-1.415l-.164-.005h-2.93a4.984 4.984 0 0 0-3.57-1.5Zm-2-1h-1v7h1v-7Zm9.646-7.425.354.354.353-.354a2.5 2.5 0 0 1 3.536 3.535l-3.89 3.89-3.888-3.89a2.5 2.5 0 1 1 3.535-3.535ZM11.53 4.992a.5.5 0 0 0-.059.637l.058.07 2.475 2.475 2.476-2.475a.5.5 0 0 0 .058-.638l-.058-.069a.5.5 0 0 0-.638-.058l-.07.058-1.769 1.769-1.767-1.77-.068-.057a.5.5 0 0 0-.638.058Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHandHeartLine',
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

    const iconClass = computed(() => [name, `${name}-hand-heart-line`, { [`${name}-spin`]: props.spin }]);

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
