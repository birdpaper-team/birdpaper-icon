<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="m12.507 3.623-1.024 1.772c-2.91-.879-5.513-.45-6.41 1.105-1.178 2.04.79 5.653 4.677 7.897 3.888 2.245 8.001 2.142 9.178.103.898-1.555-.032-4.024-2.248-6.105l1.023-1.772c3.082 2.71 4.462 6.27 2.957 8.877-1.86 3.222-7.188 3.355-11.91.63C4.03 13.403 1.48 8.721 3.34 5.5c1.505-2.606 5.28-3.191 9.166-1.877Zm3.377-1.85 1.732 1-5 8.66-1.732-1 5-8.66ZM6.732 20H17v2H5.018a.998.998 0 0 1-1.015-.922.995.995 0 0 1 .131-.578l2.25-3.897 1.732 1L6.732 20Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRadarLine',
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

    const iconClass = computed(() => [name, `${name}-radar-line`, { [`${name}-spin`]: props.spin }]);

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
