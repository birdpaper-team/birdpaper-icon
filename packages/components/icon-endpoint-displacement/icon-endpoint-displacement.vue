<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M16 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"></path><path d="M16 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm0 0h11m0 0-4-4m4 4-4 4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32 38a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z"></path><path d="M32 38a5 5 0 1 0 10 0 5 5 0 0 0-10 0Zm0 0H21m0 0 4-4m-4 4 4 4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33 11a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z"></path><path d="M38 16a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0 0v11m0 0 4-4m-4 4-4-4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 37a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"></path><path d="M10 32a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 0V21m0 0 4 4m-4-4-4 4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconEndpointDisplacement',
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

    const iconClass = computed(() => [name, `${name}-endpoint-displacement`, { [`${name}-spin`]: props.spin }]);

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
