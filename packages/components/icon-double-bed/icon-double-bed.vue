<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M8 12a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v11H8V12ZM6 35v4M42 35v4" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 18h-6a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3ZM34 18h-6a3 3 0 0 0-3 3v2h12v-2a3 3 0 0 0-3-3ZM4 26a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4v-9Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDoubleBed',
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

    const iconClass = computed(() => [name, `${name}-double-bed`, { [`${name}-spin`]: props.spin }]);

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
