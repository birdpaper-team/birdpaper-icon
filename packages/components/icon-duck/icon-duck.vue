<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M12 8c-3.052 4.517-5.987 5.81-8 5 .543 1.833 4.443 4.375 6.927 5.838 1.07.63 1.383 2.065.638 3.059C10.202 23.717 8.315 26.289 8 27 .954 39.79 16.482 44.648 24 44c22.144-1.908 21.355-19.197 18-26-8.052 13.994-20.481 5.915-20 3 .481-2.915 3.792-2.335 5-7C29.013 4.768 16.374.399 12 8Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 31c2.5 3.5 10 7 16 2" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="17" cy="12" r="2" :fill="color"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDuck',
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

    const iconClass = computed(() => [name, `${name}-duck`, { [`${name}-spin`]: props.spin }]);

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
