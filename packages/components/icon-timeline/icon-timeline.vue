<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><g clip-path="url(#a)" stroke="#333" stroke-width="4"><path d="M13 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM31 24a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM13 36a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" stroke-linejoin="round"></path><path d="M4 36h9M21 36h23M4 12h9M21 12h23" stroke-linecap="round"></path><path d="M4 4v40" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 24h27M39 24h5" stroke-linecap="round"></path></g><defs><clipPath id="a"><path fill="#333" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTimeline',
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

    const iconClass = computed(() => [name, `${name}-timeline`, { [`${name}-spin`]: props.spin }]);

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
