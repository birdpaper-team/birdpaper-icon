<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M9 20v10a8 8 0 0 0 8 8h14a8 8 0 0 0 8-8V20M34 38v4M14 38v4M20 44h8" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 16.36C9 13 15 4 24 4s15 9 15 12.36V20H9v-3.64Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M20.5 32a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM30.5 32a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#333" stroke="#333"></path><path d="M22 11h4" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHighSpeedRail',
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

    const iconClass = computed(() => [name, `${name}-high-speed-rail`, { [`${name}-spin`]: props.spin }]);

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
