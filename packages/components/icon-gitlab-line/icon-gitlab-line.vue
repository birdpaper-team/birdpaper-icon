<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5.544 2.673a1.549 1.549 0 0 1 1.8.098c.246.198.426.466.515.769l1.446 4.428h5.39L16.14 3.54c.089-.303.268-.571.515-.769l.004-.003a1.554 1.554 0 0 1 1.795-.096l.002.002c.274.173.486.43.605.73l.004.011 2.473 6.451a5.45 5.45 0 0 1-1.813 6.303l-6.73 5.064h-.002a1.659 1.659 0 0 1-2 0l-6.731-5.065a5.452 5.452 0 0 1-1.806-6.294l2.48-6.469c.12-.302.333-.558.607-.732Zm.811 2.063L4.16 10.464c-.28.737-.337 1.604-.12 2.362.217.755.671 1.42 1.295 1.896l6.66 5.01 6.653-5.005a3.65 3.65 0 0 0 1.308-1.904c.22-.76.159-1.638-.123-2.378l-2.189-5.71L16 9.769H8L6.355 4.736Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconGitlabLine',
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

    const iconClass = computed(() => [name, `${name}-gitlab-line`, { [`${name}-spin`]: props.spin }]);

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
