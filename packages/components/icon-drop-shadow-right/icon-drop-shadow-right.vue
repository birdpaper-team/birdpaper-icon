<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path clip-rule="evenodd" d="M21 40a15.95 15.95 0 0 0 11.314-4.686A15.95 15.95 0 0 0 37 24a15.95 15.95 0 0 0-4.686-11.314A15.95 15.95 0 0 0 21 8a15.95 15.95 0 0 0-11.314 4.686A15.95 15.95 0 0 0 5 24a15.95 15.95 0 0 0 4.686 11.314A15.95 15.95 0 0 0 21 40Z" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="M36.557 39.556A21.932 21.932 0 0 0 43 24a21.932 21.932 0 0 0-6.443-15.556" stroke="#333" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDropShadowRight',
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

    const iconClass = computed(() => [name, `${name}-drop-shadow-right`, { [`${name}-spin`]: props.spin }]);

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
