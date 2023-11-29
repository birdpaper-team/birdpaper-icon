<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><ellipse cx="14" cy="10" rx="10" ry="5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></ellipse><path d="M4 10v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 17v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 24v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 31v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><ellipse cx="34" cy="24" rx="10" ry="5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></ellipse><path d="M24 24v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 31v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFunds',
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

    const iconClass = computed(() => [name, `${name}-funds`, { [`${name}-spin`]: props.spin }]);

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
