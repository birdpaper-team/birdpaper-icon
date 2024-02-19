<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M2.809 1.394 20.486 19.07l-1.414 1.414-3.683-3.681L12.001 21 .691 6.997c.914-.74 1.902-1.391 2.95-1.942L1.395 2.808 2.81 1.394Zm.771 5.998L12 17.817l1.967-2.436-8.835-8.836c-.532.253-1.05.536-1.552.847ZM12.001 3c4.284 0 8.22 1.497 11.31 3.996l-5.407 6.693-1.422-1.422 3.939-4.876A15.921 15.921 0 0 0 12 5.001c-.873 0-1.735.07-2.58.206L7.727 3.51c1.37-.334 2.802-.51 4.275-.51Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSignalWifiOffLine',
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

    const iconClass = computed(() => [name, `${name}-signal-wifi-off-line`, { [`${name}-spin`]: props.spin }]);

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
