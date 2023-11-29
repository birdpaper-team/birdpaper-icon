<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><circle cx="24" cy="24" r="10" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M44 24c0 2.633-.508 5.146-1.433 7.448-.936 2.331-4.129.071-7.346 3.521-3.216 3.45-.71 6.267-3.204 7.36A19.931 19.931 0 0 1 24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20Z" :stroke="color" stroke-width="4"></path><path d="M20 25s.21 1.21 1 2 2 1 2 1" :stroke="color" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconEgg',
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

    const iconClass = computed(() => [name, `${name}-egg`, { [`${name}-spin`]: props.spin }]);

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
