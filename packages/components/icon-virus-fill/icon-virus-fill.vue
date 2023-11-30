<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="m13.716 1.947 3.735 1.434-.717 1.867-.934-.359-.746 1.945a6.03 6.03 0 0 1 1.945 1.846l1.902-.848-.406-.913 1.827-.814 1.627 3.655-1.827.813-.407-.914-1.902.848a6.012 6.012 0 0 1 .07 2.68l1.944.745.358-.932 1.867.716-1.433 3.735-1.867-.717.357-.933-1.944-.747a6.03 6.03 0 0 1-1.846 1.945l.848 1.902.914-.406.813 1.827-3.654 1.627-.813-1.827.913-.407-.847-1.902a6.012 6.012 0 0 1-2.68.07l-.747 1.944.934.358-.717 1.867L6.55 20.62l.717-1.867.932.358.748-1.945A6.032 6.032 0 0 1 7 15.32l-1.903.848.407.914-1.827.813L2.05 14.24l1.827-.813.406.914 1.903-.848a6.01 6.01 0 0 1-.07-2.68l-1.945-.746-.358.933-1.867-.717L3.381 6.55l1.867.717-.36.932 1.946.748A6.031 6.031 0 0 1 8.68 7l-.848-1.903-.913.407-.814-1.827L9.76 2.05l.813 1.827-.914.407.848 1.902a6.01 6.01 0 0 1 2.68-.07l.745-1.945L13 3.814l.716-1.867Zm-3.582 11.285a1 1 0 1 0 1.732 1 1 1 0 0 0-1.732-1ZM14 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3.5-1.598a1 1 0 1 0 1 1.732 1 1 0 0 0-1-1.732Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconVirusFill',
  props: {
    /** 图标尺寸 */
    size: { type: String, default: "18px" },
    /** 颜色 */
    fill: { type: String, default: "#595959" },
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

    const iconClass = computed(() => [name, `${name}-virus-fill`, { [`${name}-spin`]: props.spin }]);

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
