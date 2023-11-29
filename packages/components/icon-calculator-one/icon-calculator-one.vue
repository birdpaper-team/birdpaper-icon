<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><rect x="8" y="4" width="32" height="40" rx="2" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M14 11h20v9H14z"></path><circle cx="17" cy="26" r="2" fill="#333"></circle><circle cx="17" cy="32" r="2" fill="#333"></circle><circle cx="17" cy="38" r="2" fill="#333"></circle><circle cx="24" cy="26" r="2" fill="#333"></circle><circle cx="24" cy="32" r="2" fill="#333"></circle><circle cx="24" cy="38" r="2" fill="#333"></circle><circle cx="31" cy="26" r="2" fill="#333"></circle><circle cx="31" cy="32" r="2" fill="#333"></circle><circle cx="31" cy="38" r="2" fill="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCalculatorOne',
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

    const iconClass = computed(() => [name, `${name}-calculator-one`, { [`${name}-spin`]: props.spin }]);

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
