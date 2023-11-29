<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path clip-rule="evenodd" d="M4.629 12.749 24 5l19.371 7.749a1 1 0 0 1 .629.928V42a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13.677a1 1 0 0 1 .629-.928Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M24 22v10" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path clip-rule="evenodd" d="M33 27c1.657 0 3-1.12 3-2.5S34.657 22 33 22h-2.7a.3.3 0 0 0-.3.3v2.2c0 1.38 1.343 2.5 3 2.5Z" stroke="#333" stroke-width="4"></path><path d="M30 22v10" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="M12 22h6.005L12 32h6.005" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconZip',
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

    const iconClass = computed(() => [name, `${name}-zip`, { [`${name}-spin`]: props.spin }]);

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
