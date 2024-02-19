<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM8.823 15.343l-.79 1.37a.823.823 0 1 1-1.428-.822l.589-1.016c.66-.206 1.201-.048 1.629.468ZM13.21 8.66l2.423 4.194h2.141c.456 0 .823.367.823.822a.82.82 0 0 1-.823.823h-1.19l.803 1.391a.824.824 0 0 1-1.427.823l-3.04-5.266c-.69-1.19-.198-2.383.29-2.787Zm.278-3.044c.395.226.528.73.302 1.125l-3.528 6.109h2.553c.826 0 1.29.972.931 1.645h-7.48a.82.82 0 0 1-.822-.823.82.82 0 0 1 .822-.822h2.097l2.685-4.653-.838-1.456a.824.824 0 0 1 1.427-.823l.359.633.367-.633a.823.823 0 0 1 1.125-.302Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconAppStoreLine',
  props: {
    /** 图标尺寸 */
    size: { type: String, default: "18px" },
    /** 颜色 */
    fill: { type: String, default: "#595959" },
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

    const iconClass = computed(() => [name, `${name}-app-store-line`, { [`${name}-spin`]: props.spin }]);

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
