<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M6 20a8 8 0 1 1 16 0v24H6V20Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 44h12l-6-18-6 18Z"></path><path d="m36 26-6 18h12l-6-18Zm0 0v-2c0-7.543 0-11.314-2.343-13.657S27.543 8 20 8h-2m-8 0H6" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="14" cy="8" r="4" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFireExtinguisher',
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

    const iconClass = computed(() => [name, `${name}-fire-extinguisher`, { [`${name}-spin`]: props.spin }]);

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
