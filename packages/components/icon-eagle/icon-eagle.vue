<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M6 23c-4.04-7.043 3.624-11.136 8-12 14.541-12.844 26.485-.287 28 8 1.514 8.287 1.158 14.893 2 18-6.463-8.7-10.877-7.159-12-5-2.02 4.144-5.314 4.252-7 3-4.04-3.314-10.476 3.202-13 7 4.847-8.7 5.505-14.273 5-16-2.02-8.286-8.307-5.416-11-3Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="23" cy="16" r="2" :fill="color"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconEagle',
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

    const iconClass = computed(() => [name, `${name}-eagle`, { [`${name}-spin`]: props.spin }]);

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
