<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><g clip-path="url(#a)"><path d="M27 12s7 7 7 16-4.445 16.223-8 16c-3.556-.223-7-7-6-16s7-16 7-16ZM27 12S28 7.876 31 5.938C34 4 39.89 9 39 12c-.89 3-4 3-5 0s4-6.5 7-6.062c3 .438 3.257 5.242 3 8.062-.501 5.5-2 10-2 10" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27 12s0 8-7 16-13.675 9.7-16 7c-2.325-2.7 0-10 7-17s16-6 16-6Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="27.243" cy="27.408" r="2.5" :fill="color"></circle><circle cx="26.243" cy="34.408" r="2.5" :fill="color"></circle></g><defs><clipPath id="a"><path :fill="color" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPeas',
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

    const iconClass = computed(() => [name, `${name}-peas`, { [`${name}-spin`]: props.spin }]);

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
