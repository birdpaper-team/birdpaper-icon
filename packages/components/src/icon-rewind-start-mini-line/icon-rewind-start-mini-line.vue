<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1Zm4.968 6L11 9.86v4.28L7.968 12Zm4.244 5.443a.5.5 0 0 0 .788-.408V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0 0 .817l7.133 5.035ZM16.968 12 20 9.86v4.28L16.968 12Zm-3.01.288a.5.5 0 0 0 .12.12l7.134 5.035a.5.5 0 0 0 .788-.408V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0-.12.697Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRewindStartMiniLine',
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

    const iconClass = computed(() => [name, `${name}-rewind-start-mini-line`, { [`${name}-spin`]: props.spin }]);

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
