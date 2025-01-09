<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M6 7a6 6 0 1 1 12 0v1h1.5A1.5 1.5 0 0 1 21 9.5V13h-2v-3H5v10h8v2H4.5A1.5 1.5 0 0 1 3 20.5v-11A1.5 1.5 0 0 1 4.5 8H6V7Zm10 0a4 4 0 0 0-8 0v1h8V7Zm4.64 13.195.505 2.946L18.5 21.75l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L18.5 15l1.323 2.68 2.957.43-2.14 2.085Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconLockStarLine',
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

    const iconClass = computed(() => [name, `${name}-lock-star-line`, { [`${name}-spin`]: props.spin }]);

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
