<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M21 22V12a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v9M35 21v-7a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v8M28 22V6a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v16" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 18s7 5 17 5 17-5 17-5l-4.818 26H11.818L7 18Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><ellipse cx="24" cy="33" rx="6" ry="3" stroke="#333" stroke-width="4"></ellipse></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFrenchFries',
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

    const iconClass = computed(() => [name, `${name}-french-fries`, { [`${name}-spin`]: props.spin }]);

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
