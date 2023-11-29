<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M7.053 10h22V4h-22v6Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M29.053 10c6.52 7.123 10.26 11.251 11.222 12.384 1.443 1.7.837 3.62-2.775 3.62s-5.695-5.285-8.447-5.285c-.016-.003-.017 6.756-.003 20.277a3.001 3.001 0 0 1-2.998 3.005h-.003a3.004 3.004 0 0 1-3.004-3.005v-8.01c-7.973-1.208-12.308-1.875-13.004-2-1.044-.187-2.988-1.184-2.988-4.053V10h22Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHandDown',
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

    const iconClass = computed(() => [name, `${name}-hand-down`, { [`${name}-spin`]: props.spin }]);

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
