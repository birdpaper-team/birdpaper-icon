<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M27 6h-6l-1.25 4.5L18.5 15 16 24l-2.5 9-1.25 4.5L11 42h26l-1.5-5.4L32 24l-2.5-9-1.25-4.5L27 6Z"></path><path d="m37 42-1.5-5.4L32 24l-2.5-9-1.25-4.5L27 6h-6l-1.25 4.5L18.5 15 16 24l-2.5 9-1.25 4.5L11 42m26 0H11h26Zm0 0H6h31Zm0 0h5-5ZM13.5 33h21M32 24H16M29.5 15h-11M28.25 10.5l7.25 26.1M12.25 37.5l7.5-27" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRoadCone',
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

    const iconClass = computed(() => [name, `${name}-road-cone`, { [`${name}-spin`]: props.spin }]);

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
