<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M13.28 42a2 2 0 0 1-1.816-1.162l-5.077-11a2 2 0 0 1 0-1.676l5.077-11A2 2 0 0 1 13.28 16h21.44a2 2 0 0 1 1.816 1.162l5.077 11a2 2 0 0 1 0 1.676l-5.077 11A2 2 0 0 1 34.72 42H13.28Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M9 23h9v10H8M39 23H25v9h15M38 4s-9.5 3.5-17.436 4.394C12.628 9.288 8 9 8 9M26 8v8l-9-7" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m10.615 19-4.228 9.162a2 2 0 0 0 0 1.676L9 35.5M37.385 19l4.228 9.162a2 2 0 0 1 0 1.676L39 35.5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCableCar',
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

    const iconClass = computed(() => [name, `${name}-cable-car`, { [`${name}-spin`]: props.spin }]);

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
