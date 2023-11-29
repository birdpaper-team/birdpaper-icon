<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M40 30V15L27.5 7.969m-7 0L8 15v15m3 4.688L24 42l8-4.5 5-2.813M21 18.75l-3 1.75v7l3 1.75L24 31l3-1.75 3-1.75v-7l-3-1.75L24 17l-3 1.75ZM24 17v-7M30 27l7 4M18 27l-7 4" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="24" cy="7" r="3" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></circle><circle cx="8" cy="33" r="3" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></circle><circle cx="40" cy="33" r="3" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBlockchain',
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

    const iconClass = computed(() => [name, `${name}-blockchain`, { [`${name}-spin`]: props.spin }]);

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
