<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.001 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .691 6.997A17.925 17.925 0 0 1 12 3Zm0 9c-1.42 0-2.764.33-3.959.915l3.959 4.902 3.958-4.902A8.963 8.963 0 0 0 12.001 12Zm0-7c-3.028 0-5.923.842-8.42 2.392l3.178 3.935A10.95 10.95 0 0 1 12.001 10c1.898 0 3.683.48 5.242 1.327L20.42 7.39A15.921 15.921 0 0 0 12 5Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSignalWifi2Line',
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

    const iconClass = computed(() => [name, `${name}-signal-wifi-2-line`, { [`${name}-spin`]: props.spin }]);

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
