<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="m5.765 8-.295-.73a1 1 0 0 1 .553-1.302l9.271-3.746a1 1 0 0 1 1.302.552l5.62 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553l-.088-.218v.04H7a1 1 0 0 1-1-1v-.269l-3.35-1.353a1 1 0 0 1-.553-1.302L5.765 8Zm2.236 11h2.208l-2.208-5.467V19Zm-2-6.244-1.674 4.141 1.674.711v-4.852Zm1.698-5.309 4.87 12.054 7.417-2.997-4.87-12.054L7.7 7.447Zm2.978 2.033a1 1 0 1 1-.75-1.855 1 1 0 0 1 .75 1.855Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPantoneLine',
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

    const iconClass = computed(() => [name, `${name}-pantone-line`, { [`${name}-spin`]: props.spin }]);

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
