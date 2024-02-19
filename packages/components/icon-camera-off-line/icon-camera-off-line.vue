<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19.587 21H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.586L1.395 2.808l1.414-1.414 19.799 19.798-1.415 1.415L19.587 21Zm-14-14H4v12h13.586l-2.18-2.18a5.5 5.5 0 0 1-7.725-7.725L5.587 7Zm3.524 3.525a3.5 3.5 0 0 0 4.865 4.865l-4.865-4.865Zm12.89 7.261-2-2V7h-3.828l-2-2H9.83l-.308.307-1.414-1.414L9.001 3h6l2 2h4a1 1 0 0 1 1 1v11.786ZM11.264 7.049a5.5 5.5 0 0 1 6.188 6.188l-2.338-2.338a3.516 3.516 0 0 0-1.512-1.512l-2.338-2.338Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCameraOffLine',
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

    const iconClass = computed(() => [name, `${name}-camera-off-line`, { [`${name}-spin`]: props.spin }]);

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
