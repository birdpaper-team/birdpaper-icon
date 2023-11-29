<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M29.633 4h-7.64v23h22v-6.037" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m29.002 13.003 4.563 4.442L45 6" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.005 44H17.658c-1.702 0-3.742-.568-5.11-2.387-.925-1.23-1.543-3.03-1.543-5.613V25" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="m3 33 8.005-8 8.009 8" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSwitchingDone',
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

    const iconClass = computed(() => [name, `${name}-switching-done`, { [`${name}-spin`]: props.spin }]);

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
