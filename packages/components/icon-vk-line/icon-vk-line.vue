<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5.827 5.828c-.344.35-.57.84-.696 1.77-.129.965-.13 2.243-.13 4.082v.64c0 1.836.001 3.113.13 4.078.125.931.352 1.424.697 1.776.35.343.84.57 1.77.695.965.13 2.243.131 4.082.131h.64c1.836 0 3.113-.002 4.078-.13.931-.126 1.424-.353 1.776-.698.343-.349.57-.839.695-1.77.13-.965.131-2.243.131-4.082v-.64c0-1.836-.002-3.113-.13-4.077-.126-.932-.353-1.424-.698-1.776-.349-.344-.839-.57-1.77-.696-.965-.129-2.243-.13-4.082-.13h-.64c-1.836 0-3.113.001-4.077.13-.932.125-1.424.352-1.776.697ZM11.68 3h.64c1.445 0 2.912-.043 4.347.15 1.156.154 2.135.486 2.917 1.26l.008.008c.773.784 1.105 1.763 1.26 2.92.191 1.434.148 2.9.148 4.342v.64c0 1.445.044 2.912-.149 4.347-.154 1.156-.486 2.135-1.26 2.917l-.009.008c-.783.773-1.762 1.105-2.92 1.26-1.433.191-2.899.148-4.342.148h-.64c-1.444 0-2.911.044-4.346-.149-1.157-.154-2.136-.486-2.917-1.26l-.009-.009c-.772-.783-1.104-1.762-1.259-2.92C2.957 15.23 3 13.764 3 12.32v-.64c0-1.444-.043-2.911.15-4.346.154-1.157.486-2.136 1.26-2.917l.008-.009c.784-.772 1.763-1.104 2.92-1.259C8.772 2.957 10.238 3 11.68 3ZM6.036 8.478c.096 4.68 2.436 7.488 6.54 7.488H12.816V13.29c1.506.15 2.646 1.254 3.102 2.676h2.13a5.924 5.924 0 0 0-3.078-3.756 5.718 5.718 0 0 0 2.628-3.738h-1.932c-.42 1.488-1.668 2.838-2.85 2.964V8.478h-1.938v5.184c-1.2-.3-2.712-1.752-2.778-5.184H6.036Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconVkLine',
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

    const iconClass = computed(() => [name, `${name}-vk-line`, { [`${name}-spin`]: props.spin }]);

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
