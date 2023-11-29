<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M11 26v18h26V26L24 13 11 26Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M3.586 21.586a2 2 0 1 0 2.828 2.828l-2.828-2.828ZM24 4l1.414-1.414a2 2 0 0 0-2.828 0L24 4Zm17.586 20.414a2 2 0 1 0 2.828-2.828l-2.828 2.828Zm-35.172 0 19-19-2.828-2.828-19 19 2.828 2.828Zm16.172-19 19 19 2.828-2.828-19-19-2.828 2.828Z" fill="#333"></path><path d="M19 31h10M24 26v10" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHospitalThree',
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

    const iconClass = computed(() => [name, `${name}-hospital-three`, { [`${name}-spin`]: props.spin }]);

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
