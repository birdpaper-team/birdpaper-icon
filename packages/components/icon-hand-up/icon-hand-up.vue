<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M41 38H19v6h22v-6Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M19 38C12.481 30.877 8.74 26.75 7.778 25.616c-1.443-1.7-.837-3.62 2.775-3.62s5.695 5.285 8.447 5.285c.017.004.018-6.755.003-20.277A3 3 0 0 1 22.001 4h.003a3.004 3.004 0 0 1 3.005 3.004v8.01c7.972 1.208 12.307 1.875 13.003 2C39.057 17.202 41 18.2 41 21.068V38H19Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHandUp',
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

    const iconClass = computed(() => [name, `${name}-hand-up`, { [`${name}-spin`]: props.spin }]);

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
