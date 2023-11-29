<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path clip-rule="evenodd" d="m22.219 7.378 11.668 9.244L36.177 24l-10.915 2.085L12.59 14.531l2.692-5.53 6.938-1.623Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="m15.28 9.001 11.206 9.6" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="m25.263 26.085 1.224-7.953 7.4-1.51M24.993 31.023l2.286 7.08-11.678 2.276L4 29.014l2.57-6.389 5.458-1.271" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m6.57 22.625 10.714 10.133" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="m15.601 39.865 1.885-7.733 7.505-1.088" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M34.887 29.608 34 36.8l9.236-1.801-1.955-6.812-6.394 1.42Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHeavyMetal',
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

    const iconClass = computed(() => [name, `${name}-heavy-metal`, { [`${name}-spin`]: props.spin }]);

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
