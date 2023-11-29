<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="m12 13.06 4.47 4.471L12 22l-4.47-4.47L12 13.06Zm-8 3.06L7.879 20H4v-3.88Zm16 0V20h-3.88L20 16.12Zm-2.47-8.59L22 12l-4.469 4.47-4.47-4.47 4.469-4.47Zm-11.06 0L10.94 12l-4.471 4.469L2 12l4.47-4.47ZM12 2l4.469 4.469L12 10.939 7.53 6.47 12 2ZM7.879 4l-3.88 3.879L4 4h3.879ZM20 4v3.879l-3.88-3.88L20 4Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCentosFill',
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

    const iconClass = computed(() => [name, `${name}-centos-fill`, { [`${name}-spin`]: props.spin }]);

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
