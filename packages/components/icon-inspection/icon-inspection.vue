<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M43 33V19H5v22a2 2 0 0 0 2 2h17" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 10a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v9H5v-9Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M16 5v8M32 5v8" :stroke="color" stroke-width="4" stroke-linecap="round"></path><circle cx="30" cy="32" r="7" :stroke="color" stroke-width="4"></circle><path d="m36 37 6 5" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconInspection',
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

    const iconClass = computed(() => [name, `${name}-inspection`, { [`${name}-spin`]: props.spin }]);

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
