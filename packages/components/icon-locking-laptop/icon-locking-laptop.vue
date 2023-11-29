<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M24 9H11a3 3 0 0 0-3 3v21h32v-5" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-2Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><rect x="30" y="13" width="12" height="8" rx="3" :stroke="color" stroke-width="4" stroke-linejoin="round"></rect><path d="M36 7a3 3 0 0 1 3 3v3h-6v-3a3 3 0 0 1 3-3Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconLockingLaptop',
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

    const iconClass = computed(() => [name, `${name}-locking-laptop`, { [`${name}-spin`]: props.spin }]);

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
