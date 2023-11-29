<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><g clip-path="url(#a)" stroke="#333" stroke-width="4" stroke-linecap="round"><path d="m35.786 39.083 2.828-2.828a6 6 0 0 0 0-8.486v0a6 6 0 0 0-8.485 0l-2.462 2.462M17.401 23.526l7.071-7.07a6 6 0 0 0 0-8.486v0a6 6 0 0 0-8.485 0l-7.071 7.071"></path><path d="m18.283 22.645-8.66 8.66a6 6 0 0 0 0 8.486v0a6 6 0 0 0 8.485 0l9.9-9.9"></path><path d="M15 9H7" stroke-linejoin="round"></path></g><defs><clipPath id="a"><path fill="#333" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSnakeZodiac',
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

    const iconClass = computed(() => [name, `${name}-snake-zodiac`, { [`${name}-spin`]: props.spin }]);

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
