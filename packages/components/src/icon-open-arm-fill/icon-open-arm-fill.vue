<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm6 5v5h-2v-5c0-4.451 2.644-8.285 6.448-10.016l.827 1.82A9.002 9.002 0 0 0 18 17ZM8 17v5H6v-5A9.002 9.002 0 0 0 .726 8.805l.827-1.821A11.002 11.002 0 0 1 8 17Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconOpenArmFill',
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

    const iconClass = computed(() => [name, `${name}-open-arm-fill`, { [`${name}-spin`]: props.spin }]);

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
