<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M16.997 3.5v5.149c0 1.75-.964 2.425-4.595 3.358-3.63.932-4.706 1.482-5.554 3.093C6.283 16.172 6 17.83 6 20.072V37.5" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M34.942 21.509c.237 2.876-.25 5.389-1.463 7.537-1.212 2.148-3.353 3.457-6.422 3.926M13.059 21.509c-.239 2.876.25 5.389 1.469 7.537 1.218 2.148 3.376 3.457 6.474 3.926" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 43.512c1.333-1.555 2-3.246 2-5.072v-8.364M35 43.512c-1.333-1.555-2-3.246-2-5.072v-8.364M31 3.5v5.149c0 1.75.964 2.425 4.595 3.358 3.63.932 4.706 1.482 5.554 3.093.565 1.073.848 2.73.848 4.972V37.5" :stroke="color" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconChest',
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

    const iconClass = computed(() => [name, `${name}-chest`, { [`${name}-spin`]: props.spin }]);

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
