<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M24 44c5.96 0 2.336-8.864 6-13 3.126-3.53 14-1.914 14-7 0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M28 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 34a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPlatte',
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

    const iconClass = computed(() => [name, `${name}-platte`, { [`${name}-spin`]: props.spin }]);

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
