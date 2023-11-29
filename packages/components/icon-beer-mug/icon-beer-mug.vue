<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M16 37.241C16 39.172 16.857 44 28 44s12-4.828 12-6.759V16H16v21.241Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M25 23v14M31 23v14" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.998 16s-1.999-4.5 1-7C19.999 6.5 23 8 23 8s1-4 5-4C32 4 33 8 33 8S36.5 6.5 39 9c2.5 2.5.998 7 .998 7M16 19H6s1 10 2 13c.998 3 8 2 8 2" stroke="#333" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBeerMug',
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

    const iconClass = computed(() => [name, `${name}-beer-mug`, { [`${name}-spin`]: props.spin }]);

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
