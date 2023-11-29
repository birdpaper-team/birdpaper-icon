<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><rect x="14" y="44" width="36" height="20" rx="2" transform="rotate(-90 14 44)" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M20 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h-8Z" fill="#333"></path><path d="M24 30v-3c2.21 0 4-2.015 4-4.5S26.21 18 24 18s-4 2.015-4 4.5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26 35.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#333" stroke="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBatteryFailure',
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

    const iconClass = computed(() => [name, `${name}-battery-failure`, { [`${name}-spin`]: props.spin }]);

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
