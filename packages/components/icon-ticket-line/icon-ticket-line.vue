<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M21.005 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5V4a1 1 0 0 1 1-1h18Zm-1 2h-16v2.968l.156.081A4.5 4.5 0 0 1 6.5 11.79l.005.211a4.499 4.499 0 0 1-2.344 3.95l-.156.081V19h16v-2.969l-.156-.08a4.5 4.5 0 0 1-2.34-3.74L17.506 12c0-1.704.947-3.187 2.344-3.95l.156-.082V5Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTicketLine',
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

    const iconClass = computed(() => [name, `${name}-ticket-line`, { [`${name}-spin`]: props.spin }]);

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
