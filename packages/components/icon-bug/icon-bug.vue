<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M24 42c12 0 14-10.468 14-14V14H10v14c0 3.45 2 14 14 14Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="m4 8 6 6M44 8l-6 6M4 27h6M44 27h-6M7 44l6-6M41 44l-6-6M24 42V14M14.92 39.04C17.002 40.784 19.924 42 24 42c4.111 0 7.049-1.229 9.134-2.986" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32 12.333C32 7.731 28.418 4 24 4s-8 3.731-8 8.333V14h16v-1.667Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBug',
  props: {
    /** 图标尺寸 */
    size: { type: String },
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

    const iconClass = computed(() => [name, `${name}-bug`, { [`${name}-spin`]: props.spin }]);

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
