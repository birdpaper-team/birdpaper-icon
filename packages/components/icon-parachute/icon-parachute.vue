<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M16.727 24c2.424-2.424 4.849-3.636 7.273-3.636 2.424 0 4.849 1.212 7.273 3.636 2.828-2.424 4.95-3.636 6.363-3.636 1.414 0 3.536 1.212 6.364 3.636 0-11.046-8.954-20-20-20S4 12.954 4 24c2.828-2.424 4.95-3.636 6.364-3.636 1.414 0 3.535 1.212 6.363 3.636Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="m4 24 20 20-7.273-20M31.273 24 24 44l20-20" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconParachute',
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

    const iconClass = computed(() => [name, `${name}-parachute`, { [`${name}-spin`]: props.spin }]);

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
