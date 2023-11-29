<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M44 41V19h-6v22h6Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M38 19C30.895 12.43 26.776 8.664 25.643 7.7c-1.7-1.446-3.62-.839-3.62 2.779s5.263 5.765 5.263 8.521c.004.017-6.757.018-20.282.003A3 3 0 0 0 4 22.002v.003a3.004 3.004 0 0 0 3.004 3.005h7.013c1.206 7.968 1.872 12.301 1.997 12.998C16.202 39.054 17.2 41 20.068 41H38V19Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHandLeft',
  props: {
    /** 图标尺寸 */
    size: { type: String },
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

    const iconClass = computed(() => [name, `${name}-hand-left`, { [`${name}-spin`]: props.spin }]);

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
