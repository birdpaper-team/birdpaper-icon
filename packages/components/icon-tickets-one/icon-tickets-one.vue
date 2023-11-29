<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><rect x="5" y="42" width="26" height="38" rx="2" transform="rotate(-90 5 42)" stroke="#333" stroke-width="4" stroke-linejoin="round"></rect><path d="M9 16 32 5l5 11" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="13" cy="23" r="2" fill="#333"></circle><circle cx="13" cy="29" r="2" fill="#333"></circle><circle cx="13" cy="35" r="2" fill="#333"></circle><path d="M21 35h4l11-12M24 29h6" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTicketsOne',
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

    const iconClass = computed(() => [name, `${name}-tickets-one`, { [`${name}-spin`]: props.spin }]);

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
