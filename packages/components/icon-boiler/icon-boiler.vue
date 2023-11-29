<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><rect x="5" y="6" width="38" height="8" rx="2" :stroke="color" stroke-width="4" stroke-linejoin="round"></rect><path d="M8 14v26a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M31 29.067C31 32.896 27.866 36 24 36s-7-3.104-7-6.933c0-3.83 2.692-5.334 3.77-9.067 4.307 1.867 4.307 7.467 4.307 7.467s1.077-3.2 4.308-4C29.654 26.4 31 27.432 31 29.067Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBoiler',
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

    const iconClass = computed(() => [name, `${name}-boiler`, { [`${name}-spin`]: props.spin }]);

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
