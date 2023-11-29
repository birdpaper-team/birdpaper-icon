<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M5 17C5 12 6 2 17 6c.946 3.782-2 11-12 11ZM43 17c0-5-1-15-12-11-.946 3.782 2 11 12 11Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><rect x="8" y="22" width="32" height="20" rx="10" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M27 22v-4M21 22v-4M43 17c1 3 1 9-3 12M5 17c-1 3 0 8 3 12M30 42h14l-4-9M18 42H4l4-9" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCrab',
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

    const iconClass = computed(() => [name, `${name}-crab`, { [`${name}-spin`]: props.spin }]);

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
