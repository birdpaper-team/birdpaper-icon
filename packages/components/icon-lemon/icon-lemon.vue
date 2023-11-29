<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M36 26c0-6.408-4.383-12.811-9-14.473L24 8l-3 3.527c-4.617 1.662-9 8.065-9 14.473 0 6.408 4.383 12.811 9 14.473.954.343 1.96 3.527 3 3.527s2.046-3.184 3-3.527c4.617-1.662 9-8.065 9-14.473Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M35.142 4.232c1.011.13 1.586 1.124 1.192 2.065-.534 1.275-1.505 2.957-3.138 3.9-1.632.942-3.575.942-4.946.767-1.011-.13-1.586-1.124-1.192-2.065.534-1.274 1.506-2.956 3.138-3.899 1.633-.943 3.575-.943 4.946-.768Z" :stroke="color" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconLemon',
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

    const iconClass = computed(() => [name, `${name}-lemon`, { [`${name}-spin`]: props.spin }]);

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
