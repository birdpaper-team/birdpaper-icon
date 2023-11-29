<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M42 35h-8M31 42h-4" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="m14 22-6-5H4s5.486 10 8 10h32l-6-5H14Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m30 22-11.34-8H16l3 8M30 27 17.2 39H14l4.267-12M32 11c0 1-3 2-3 2h10s2.886 0 3.745-2.286C43.63 8.36 42.045 5 39.022 5 36 5 36 8 36 8s-1.855-.571-3 0-1 2-1 3Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconAcceleration',
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

    const iconClass = computed(() => [name, `${name}-acceleration`, { [`${name}-spin`]: props.spin }]);

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
