<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M33 5h8a2 2 0 0 1 2 2v8m0 18v8a2 2 0 0 1-2 2h-8m-18 0H7a2 2 0 0 1-2-2v-8m0-18V7a2 2 0 0 1 2-2h8" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 38c6.627 0 12-6.268 12-14s-5.373-14-12-14-12 6.268-12 14 5.373 14 12 14Z" stroke="#333" stroke-width="4"></path><path d="M6 24h36M20.07 30.106c1.267.937 2.577 1.405 3.93 1.405 1.352 0 2.698-.468 4.038-1.405" stroke="#333" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFaceRecognition',
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

    const iconClass = computed(() => [name, `${name}-face-recognition`, { [`${name}-spin`]: props.spin }]);

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
