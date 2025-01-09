<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M2 4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v6.36c-.998-1.42-2.646-2.36-4.5-2.36-2.602 0-4.799 1.853-5.36 4.282A4.743 4.743 0 0 0 10 18.25c0 1.025.325 1.974.877 2.75H3a1 1 0 0 1-1-1V4Zm12.002 11.603A2.751 2.751 0 0 0 14.75 21h5.5a2.75 2.75 0 0 0 .748-5.397C21.055 13.658 19.448 12 17.5 12c-1.948 0-3.555 1.658-3.498 3.603Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFolderCloudFill',
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

    const iconClass = computed(() => [name, `${name}-folder-cloud-fill`, { [`${name}-spin`]: props.spin }]);

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
