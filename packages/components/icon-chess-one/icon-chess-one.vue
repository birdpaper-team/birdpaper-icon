<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M40 44H8v-4l6-3h20l6 3v4ZM14 19h20" :stroke="color" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.74 19 33 37H15l5.26-18"></path><path d="M27.74 19 33 37H15l5.26-18" :stroke="color" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 4a8 8 0 0 0-3.876 15h7.752A8 8 0 0 0 24 4Z" :stroke="color" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconChessOne',
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

    const iconClass = computed(() => [name, `${name}-chess-one`, { [`${name}-spin`]: props.spin }]);

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
