<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><rect x="6" y="22" width="20" height="20" rx="3" :stroke="color" stroke-width="4" stroke-linejoin="round"></rect><path d="M30 6h12v12" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="34" cy="42" r="1.5" :fill="color" :stroke="color"></circle><circle r="1.5" transform="matrix(1 0 0 -1 6 14)" :fill="color" :stroke="color"></circle><circle cx="42" cy="42" r="1.5" :fill="color" :stroke="color"></circle><circle r="1.5" transform="matrix(1 0 0 -1 6 6)" :fill="color" :stroke="color"></circle><circle cx="42" cy="34" r="1.5" :fill="color" :stroke="color"></circle><circle r="1.5" transform="matrix(1 0 0 -1 14 6)" :fill="color" :stroke="color"></circle><circle cx="42" cy="26" r="1.5" :fill="color" :stroke="color"></circle><circle r="1.5" transform="matrix(1 0 0 -1 22 6)" :fill="color" :stroke="color"></circle><path d="m6 34 6.12-4.59a3 3 0 0 1 3.7.078L25 37M42 6 30 18" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMovingPicture',
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

    const iconClass = computed(() => [name, `${name}-moving-picture`, { [`${name}-spin`]: props.spin }]);

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
