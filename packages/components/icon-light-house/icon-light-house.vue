<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M6 44h36M17 20h14" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 20h10l3 24H16l3-24Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="m19 9 2 11h6l2-11" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m32 12-3-3-5-5-5 5-3 3M37 7l3-3M11 7 8 4M37 19l3 3M11 19l-3 3M38 13h4M10 13H6M18 28h12M17 36h14" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m29 20 3 24M19 20l-3 24" stroke="#333" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconLightHouse',
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

    const iconClass = computed(() => [name, `${name}-light-house`, { [`${name}-spin`]: props.spin }]);

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
