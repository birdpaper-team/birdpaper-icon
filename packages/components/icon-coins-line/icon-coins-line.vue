<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M14.005 2.003a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.711 6.71a8.003 8.003 0 0 1 7.294-4.707Zm-4 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm1 1v1h2v2h-4a.5.5 0 0 0-.09.992l.09.008h2a2.5 2.5 0 0 1 0 5v1h-2v-1h-2v-2h4a.5.5 0 0 0 .09-.992l-.09-.008h-2a2.5 2.5 0 0 1 0-5v-1h2Zm3-5A5.985 5.985 0 0 0 9.52 6.016a8 8 0 0 1 8.47 8.471 6 6 0 0 0-3.986-10.484Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCoinsLine',
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

    const iconClass = computed(() => [name, `${name}-coins-line`, { [`${name}-spin`]: props.spin }]);

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
