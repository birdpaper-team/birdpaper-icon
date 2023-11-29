<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M15 24s-.5 3 1 9" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="M37.567 12C38.727 14.81 40 18.642 40 21.938c0 3.877-1.345 11.412-2.315 16.339-.544 2.765-2.982 4.723-5.8 4.723H16.042c-2.785 0-5.203-1.914-5.762-4.642C9.314 33.638 8 26.402 8 21.938c0-3.679 1.444-7.306 2.827-9.938" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.587 6.457a1 1 0 0 1 .84-.457h23.147a1 1 0 0 1 .84.457l2.587 4a1 1 0 0 1-.84 1.543H9.839a1 1 0 0 1-.84-1.543l2.589-4Z" stroke="#333" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCannedFruit',
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

    const iconClass = computed(() => [name, `${name}-canned-fruit`, { [`${name}-spin`]: props.spin }]);

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
