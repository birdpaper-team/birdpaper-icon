<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M20.556 3.444a4 4 0 0 1 0 5.656l-8.2 8.2a4 4 0 0 1-2.386 1.148l-3.38.374-2.297 2.3a1 1 0 0 1-1.414-1.415l2.298-2.299.375-3.378A4 4 0 0 1 6.7 11.645l8.2-8.2a4 4 0 0 1 5.658 0Zm-9.192 9.192L9.95 14.05l2.121 2.122 1.414-1.415-2.12-2.121Zm2.829-2.828-1.415 1.414 2.122 2.121 1.414-1.414-2.121-2.121Zm2.828-2.829-1.414 1.414 2.121 2.122L19.142 9.1l-2.121-2.12Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconThermometerFill',
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

    const iconClass = computed(() => [name, `${name}-thermometer-fill`, { [`${name}-spin`]: props.spin }]);

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
