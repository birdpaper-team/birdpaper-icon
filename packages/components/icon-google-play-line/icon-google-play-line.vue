<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4.001 1.734a1 1 0 0 1 .501.135l16.004 9.265a1 1 0 0 1 0 1.731L4.502 22.131a1 1 0 0 1-1.501-.866V2.735a1 1 0 0 1 1-1Zm8.292 11.68-4.498 4.498 5.699-3.299-1.2-1.2ZM5 6.118v11.76l5.88-5.88L5 6.12Zm10.284 4.302L13.707 12l1.578 1.577L18.009 12l-2.725-1.579Zm-7.49-4.336 4.5 4.5 1.199-1.2-5.699-3.3Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconGooglePlayLine',
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

    const iconClass = computed(() => [name, `${name}-google-play-line`, { [`${name}-spin`]: props.spin }]);

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
