<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><rect x="6" y="5" width="12" height="38" rx="6" :stroke="color" stroke-width="4" stroke-linejoin="round"></rect><rect x="30" y="5" width="12" height="38" rx="6" :stroke="color" stroke-width="4" stroke-linejoin="round"></rect><path d="M12 43a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM36 43a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M30 21a6 6 0 0 0-12 0M30 31a6 6 0 0 0-12 0" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTelescope',
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

    const iconClass = computed(() => [name, `${name}-telescope`, { [`${name}-spin`]: props.spin }]);

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
