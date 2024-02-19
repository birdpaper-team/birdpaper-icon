<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3.005 4.003h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1ZM6.5 6H4v2.5A2.5 2.5 0 0 0 6.5 6Zm11 0A2.5 2.5 0 0 0 20 8.5V6h-2.5ZM4 15.5V18h2.5A2.5 2.5 0 0 0 4 15.5ZM17.5 18H20v-2.5a2.5 2.5 0 0 0-2.5 2.5ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCashFill',
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

    const iconClass = computed(() => [name, `${name}-cash-fill`, { [`${name}-spin`]: props.spin }]);

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
