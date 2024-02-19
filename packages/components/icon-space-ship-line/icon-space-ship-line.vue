<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M2.879 18.05A35.897 35.897 0 0 1 11.41 1.728a.8.8 0 0 1 1.178 0 35.897 35.897 0 0 1 8.531 16.32c-2.141.452-4.34.747-6.584.875L12.446 23.1a.5.5 0 0 1-.894 0l-2.089-4.177a44.027 44.027 0 0 1-6.584-.875Zm6.697-1.123 1.158.066 1.265 2.53 1.265-2.53 1.157-.066a42.139 42.139 0 0 0 4.227-.454 33.912 33.912 0 0 0-6.649-12.387A33.912 33.912 0 0 0 5.35 16.473a42.14 42.14 0 0 0 4.226.454ZM12 14.996a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSpaceShipLine',
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

    const iconClass = computed(() => [name, `${name}-space-ship-line`, { [`${name}-spin`]: props.spin }]);

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
