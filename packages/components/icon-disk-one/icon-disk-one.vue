<template>
  <svg viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M12.778 17.012c0-.559.453-1.012 1.012-1.012h21.976c.559 0 1.012.453 1.012 1.012V32c0 6.627-5.373 12-12 12v0c-6.628 0-12-5.373-12-12V17.012Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path :stroke="color" stroke-width="4" stroke-linejoin="round" d="M15.778 4h18v12h-18z"></path><path d="M21.778 9v2M27.778 9v2M12.778 32h24" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDiskOne',
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

    const iconClass = computed(() => [name, `${name}-disk-one`, { [`${name}-spin`]: props.spin }]);

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
