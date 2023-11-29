<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M24 29a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.5 44C16.596 44 11 38.404 11 31.5S16.596 19 23.5 19" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44 23.5C44 30.404 38.404 36 31.5 36S19 30.404 19 23.5" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.5 29C30.404 29 36 23.404 36 16.5S30.404 4 23.5 4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M29 23.5C29 16.596 23.404 11 16.5 11S4 16.596 4 23.5" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWhirlwind',
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

    const iconClass = computed(() => [name, `${name}-whirlwind`, { [`${name}-spin`]: props.spin }]);

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
