<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m6 42 8.674-24.736L31 34.038 6 42Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="m23 19 5-5c2.667-2.667 3-5 1-7M29 25l5-5c3.333-3.333 6.667-3.333 10 0" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM42 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM42 29a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM39 38a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFireworks',
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

    const iconClass = computed(() => [name, `${name}-fireworks`, { [`${name}-spin`]: props.spin }]);

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
