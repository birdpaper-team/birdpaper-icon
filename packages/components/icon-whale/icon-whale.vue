<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M16.07 13c-9.817.35-11.394 8.006-10.956 11.791-1.753 3.145-1.218 3.93.096 5.24 6.574 6.115 18.843 5.678 24.54 3.495 5.96-2.446 8.999-7.051 9.29-9.526 5.26-3.494 5.366-9.399 4.636-11-.78 1.31-3.029 2.272-4.635 3-1.753.35-4.275-.962-5.005-2.127-.502 2.627 0 4.627 1.314 5.678 2.288 1.747 1.125 3.512.687 3.949-1.896 1.89-5.506.99-7.26-1.766C24.053 14.31 18.99 13 16.07 13Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 28c2.833.532 8.4 1.554 12-1" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="20" r="2" :fill="color"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWhale',
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

    const iconClass = computed(() => [name, `${name}-whale`, { [`${name}-spin`]: props.spin }]);

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
