<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M24 28.63a4.538 4.538 0 0 0 4.546-4.532A4.538 4.538 0 0 0 24 19.567a4.538 4.538 0 0 0-4.545 4.53A4.538 4.538 0 0 0 24 28.63Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M16 15c-5.333 4.97-5.333 13.03 0 18M32 33c5.333-4.97 5.333-13.03 0-18M9.858 10c-7.81 7.786-7.81 20.41 0 28.196M38.142 38.196c7.81-7.786 7.81-20.41 0-28.196" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBroadcast',
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

    const iconClass = computed(() => [name, `${name}-broadcast`, { [`${name}-spin`]: props.spin }]);

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
