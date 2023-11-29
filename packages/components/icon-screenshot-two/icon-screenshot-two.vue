<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M4 24V4h40v20" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M10 44a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M36 12C20.39 33.266 15.805 40.68 14.243 42.243a6 6 0 0 1-8.486 0" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M38 44a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M42.243 42.243a6 6 0 0 1-8.486 0C32.195 40.68 27.61 33.266 12 12" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconScreenshotTwo',
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

    const iconClass = computed(() => [name, `${name}-screenshot-two`, { [`${name}-spin`]: props.spin }]);

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
