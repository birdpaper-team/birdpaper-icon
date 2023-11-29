<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M4 8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v34H6a2 2 0 0 1-2-2V8Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M21 42v-9a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v9M28 24h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H28V24Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M12 18h8M34 30h4M34 36h4M16 14v8M7 42h18" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHospitalFour',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    color: { type: String, default: "#333" },
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

    const iconClass = computed(() => [name, `${name}-hospital-four`, { [`${name}-spin`]: props.spin }]);

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
