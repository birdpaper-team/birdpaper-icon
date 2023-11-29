<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path stroke="#333" stroke-width="4" stroke-linecap="round" d="M14 8h20M14 8h20M14 40h20"></path><rect x="36" y="4" width="8" height="8" rx="2" stroke="#333" stroke-width="4" stroke-linejoin="round"></rect><rect x="4" y="4" width="8" height="8" rx="2" stroke="#333" stroke-width="4" stroke-linejoin="round"></rect><rect x="36" y="36" width="8" height="8" rx="2" stroke="#333" stroke-width="4" stroke-linejoin="round"></rect><rect x="4" y="36" width="8" height="8" rx="2" stroke="#333" stroke-width="4" stroke-linejoin="round"></rect><path stroke="#333" stroke-width="4" stroke-linecap="round" d="M40 14v20M8 14v20"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconAnchor',
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

    const iconClass = computed(() => [name, `${name}-anchor`, { [`${name}-spin`]: props.spin }]);

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
