<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><rect x="7" y="25" width="34" height="18" rx="6" :stroke="color" stroke-width="4" stroke-linejoin="round"></rect><circle cx="17" cy="34" r="3" :stroke="color" stroke-width="4"></circle><circle cx="31" cy="34" r="3" :stroke="color" stroke-width="4"></circle><path d="M11 19a6 6 0 0 1 6-6h14a6 6 0 0 1 6 6v6H11v-6Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><circle cx="20" cy="19" r="2" :fill="color"></circle><circle cx="28" cy="19" r="2" :fill="color"></circle><path d="M18 5a3 3 0 0 1 3 3v5h-6V8a3 3 0 0 1 3-3ZM30 5a3 3 0 0 1 3 3v5h-6V8a3 3 0 0 1 3-3Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHippo',
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

    const iconClass = computed(() => [name, `${name}-hippo`, { [`${name}-spin`]: props.spin }]);

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
