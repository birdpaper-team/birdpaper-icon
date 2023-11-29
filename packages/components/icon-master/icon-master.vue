<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M38 38V6a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v32" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><rect x="10" y="32" width="28" height="12" rx="6" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path d="m20 16 4-4 4 4 4-4-3 11H19l-3-11 4 4Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><circle cx="32" cy="38" r="2" :fill="color"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMaster',
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

    const iconClass = computed(() => [name, `${name}-master`, { [`${name}-spin`]: props.spin }]);

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
