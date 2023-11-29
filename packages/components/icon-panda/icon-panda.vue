<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><ellipse cx="24" cy="27" rx="18" ry="17" :stroke="color" stroke-width="4"></ellipse><ellipse cx="16.933" cy="24.64" rx="3" ry="4" transform="rotate(15 16.933 24.64)" :stroke="color" stroke-width="4"></ellipse><ellipse rx="3" ry="4" transform="scale(-1 1) rotate(15 -109.047 -105.16)" :stroke="color" stroke-width="4"></ellipse><path d="M41 20.999c3.124-3.124 3.438-8.219.313-11.343C38.19 6.532 32.124 6.876 29 10M7 21c-3.124-3.125-3.468-8.22-.344-11.343C9.781 6.532 15.876 6.875 19 10" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M20 35c.5 1.294 2.2 3.277 5 .862 2.8 2.415 4.5.431 5-.862" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPanda',
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

    const iconClass = computed(() => [name, `${name}-panda`, { [`${name}-spin`]: props.spin }]);

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
