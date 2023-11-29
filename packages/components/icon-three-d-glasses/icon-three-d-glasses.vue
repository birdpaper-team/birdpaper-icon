<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M19.6 34.5h8.8" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M2.303 27.39 9.958 9.563 14.949 7M45.804 27.633 38.05 9.562 33.059 7" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M3.4 26.8h15.317a1.294 1.294 0 0 1 1.29 1.396l-.927 11.712a1.294 1.294 0 0 1-1.29 1.192H4.328a1.294 1.294 0 0 1-1.29-1.192l-.927-11.712A1.294 1.294 0 0 1 3.4 26.8ZM29.284 26.8H44.6a1.294 1.294 0 0 1 1.29 1.396l-.928 11.712a1.294 1.294 0 0 1-1.29 1.192H30.212a1.294 1.294 0 0 1-1.29-1.192l-.928-11.712a1.294 1.294 0 0 1 1.29-1.396Z" :stroke="color" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconThreeDGlasses',
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

    const iconClass = computed(() => [name, `${name}-three-d-glasses`, { [`${name}-spin`]: props.spin }]);

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
