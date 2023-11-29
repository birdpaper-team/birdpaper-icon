<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><circle cx="14" cy="29" r="5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></circle><circle cx="34" cy="29" r="5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></circle><circle cx="24" cy="9" r="5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M24 44c0-5.523-4.477-10-10-10S4 38.477 4 44M44 44c0-5.523-4.477-10-10-10s-10 4.477-10 10M34 24c0-5.523-4.477-10-10-10s-10 4.477-10 10" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconEveryUser',
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

    const iconClass = computed(() => [name, `${name}-every-user`, { [`${name}-spin`]: props.spin }]);

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
