<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M23.049 9.789c1.626-.436 3.291.508 3.72 2.109.429 1.6-.541 3.25-2.167 3.686C22.976 16.02 6.708 17 6.708 17s14.715-6.776 16.34-7.211ZM23.107 38.447c1.625.435 3.291-.509 3.72-2.11.429-1.6-.542-3.25-2.168-3.686-1.625-.436-17.893-1.647-17.893-1.647s14.715 7.007 16.34 7.443Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M34 16.004a5 5 0 1 1 4 8H16" :stroke="color" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconGas',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    color: { type: String, default: "#333" },
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

    const iconClass = computed(() => [name, `${name}-gas`, { [`${name}-spin`]: props.spin }]);

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
