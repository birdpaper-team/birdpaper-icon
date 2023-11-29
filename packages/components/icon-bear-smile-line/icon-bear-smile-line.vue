<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 17a4 4 0 0 0 4-4h-2a2 2 0 1 1-4 0H8a4 4 0 0 0 4 4ZM6.5 2a4.5 4.5 0 0 0-2.95 7.898 9 9 0 1 0 16.901 0 4.5 4.5 0 1 0-6.79-5.745 9.044 9.044 0 0 0-3.321 0A4.496 4.496 0 0 0 6.5 2ZM4 6.5a2.5 2.5 0 0 1 4.852-.851l.318.878.898-.257A7.004 7.004 0 0 1 12 6c.672 0 1.32.094 1.932.27l.898.257.318-.878a2.501 2.501 0 1 1 3.58 3.03l-.814.46.404.842a7 7 0 1 1-12.635 0l.403-.843-.814-.46A2.499 2.499 0 0 1 4 6.5Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBearSmileLine',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    fill: { type: String, default: "#333" },
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

    const iconClass = computed(() => [name, `${name}-bear-smile-line`, { [`${name}-spin`]: props.spin }]);

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
