<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M9 26s-.076.787-1 5c-.98 4.465-4 13-4 13h40s-3.02-8.535-4-13c-.924-4.213-1-5-1-5" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 28c1 9-4 16-4 16M28 28c-1 9 4 16 4 16" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 18s7.592-.055 11-1c2.866-.795 7-3 7-3s3.823 2.194 6.5 3c3.572 1.075 11.5 1 11.5 1l-1 7s-4 2-5 2-3-2-4-2-3.5 3-4 3-3-3-4-3-3 3.5-4 3.5-3-3.5-4-3.5c-.198 0-.474.078-.79.204-2.142.852-4.489 1.284-6.629.428L7 25l-1-7Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 5v10" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M36 11V5s-1.5 3-6 0-6 0-6 0v6s1.5-3 6 0 6 0 6 0Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCircus',
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

    const iconClass = computed(() => [name, `${name}-circus`, { [`${name}-spin`]: props.spin }]);

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
