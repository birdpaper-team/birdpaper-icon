<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path clip-rule="evenodd" d="M24 43a15.95 15.95 0 0 0 11.314-4.686A15.95 15.95 0 0 0 40 27a15.95 15.95 0 0 0-4.686-11.314A15.95 15.95 0 0 0 24 11a15.95 15.95 0 0 0-11.314 4.686A15.95 15.95 0 0 0 8 27a15.95 15.95 0 0 0 4.686 11.314A15.95 15.95 0 0 0 24 43Z" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="M39.557 11.444A21.931 21.931 0 0 0 24 5a21.931 21.931 0 0 0-15.556 6.444" stroke="#333" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDropShadowUp',
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

    const iconClass = computed(() => [name, `${name}-drop-shadow-up`, { [`${name}-spin`]: props.spin }]);

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
