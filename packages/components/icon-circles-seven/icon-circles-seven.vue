<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path clip-rule="evenodd" d="M24 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM34.392 18a4 4 0 1 0 6.929-4 4 4 0 0 0-6.928 4ZM34.392 30a4 4 0 1 0 6.929 4 4 4 0 0 0-6.928-4ZM24 36a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM13.608 30a4 4 0 1 0-6.928 4 4 4 0 0 0 6.928-4ZM13.608 18a4 4 0 1 0-6.928-4 4 4 0 0 0 6.928 4Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCirclesSeven',
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

    const iconClass = computed(() => [name, `${name}-circles-seven`, { [`${name}-spin`]: props.spin }]);

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
