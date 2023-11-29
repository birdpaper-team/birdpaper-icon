<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M34 4H14c-2 1-5 5-5 15 0 12.5 5 25 8 25 2 0 2-2.5 2-2.5V24c0-5 8-4.5 8 0v11c0 8 7 11 9 9s-2-4-2-7c0-5 4-9 4-22 0-5-2.333-9-4-11Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M10 12h27" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.803 8c-.732 1.696-1.338 3.981-1.624 7M38 15c0-2.228-.464-4.258-1.125-6" stroke="#333" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBabyPants',
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

    const iconClass = computed(() => [name, `${name}-baby-pants`, { [`${name}-spin`]: props.spin }]);

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
