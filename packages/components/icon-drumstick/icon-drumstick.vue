<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m14.15 33.82-1.413 9.9-8.486-8.486 9.9-1.414Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m24.05 6.95-9.9 9.9c-4.686 4.686-4.686 12.284 0 16.97v0c4.687 4.687 12.285 4.687 16.97 0l9.9-9.9" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><ellipse cx="32.535" cy="15.435" rx="12" ry="7" transform="rotate(45 32.535 15.435)" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></ellipse><circle cx="30.061" cy="11.398" r="2" transform="rotate(45 30.06 11.398)" :fill="color"></circle><circle cx="37.132" cy="18.469" r="2" transform="rotate(45 37.132 18.47)" :fill="color"></circle><circle cx="31.475" cy="17.055" r="2" transform="rotate(45 31.475 17.055)" :fill="color"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDrumstick',
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

    const iconClass = computed(() => [name, `${name}-drumstick`, { [`${name}-spin`]: props.spin }]);

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
