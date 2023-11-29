<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M5 7h13v34H5z"></path><rect x="24" y="13" width="19" height="22" rx="3" stroke="#333" stroke-width="4"></rect><circle cx="33.5" cy="24.5" r="3.5" stroke="#333" stroke-width="4"></circle><path d="M18 24h6" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><rect x="9" y="15" width="5" height="5" rx="2.5" fill="#333"></rect></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconGopro',
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

    const iconClass = computed(() => [name, `${name}-gopro`, { [`${name}-spin`]: props.spin }]);

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
