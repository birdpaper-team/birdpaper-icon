<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M21.188 10h5.625L33 21.18V44H15V21.18L21.188 10ZM20 4h8v6h-8z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><rect x="21" y="23" width="6" height="12" rx="3" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBottleThree',
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

    const iconClass = computed(() => [name, `${name}-bottle-three`, { [`${name}-spin`]: props.spin }]);

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
