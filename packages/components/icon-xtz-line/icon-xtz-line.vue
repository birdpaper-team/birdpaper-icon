<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9 6V2H7v4H4.5v2H7v5a4 4 0 0 0 6.667 2.981l-1.334-1.49A2 2 0 0 1 9 13V8h6.625L11.5 11.975V13.5h1c3.067 0 5 2.18 5 4 0 1.883-1.627 3.5-3.75 3.5-1.823 0-3.293-1.202-3.66-2.733l-1.945.466C8.74 21.21 11.051 23 13.75 23c3.124 0 5.75-2.412 5.75-5.5 0-2.565-2.034-4.932-4.914-5.722L19 7.525V6H9Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconXtzLine',
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

    const iconClass = computed(() => [name, `${name}-xtz-line`, { [`${name}-spin`]: props.spin }]);

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
