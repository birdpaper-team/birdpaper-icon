<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M9 15V9.564c0-.892.087-1.215.25-1.54.164-.327.404-.583.71-.757.305-.174.608-.267 1.444-.267h25.192c.836 0 1.14.093 1.445.267.305.174.545.43.709.756.163.326.25.65.25 1.54V15" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 15h38v26H5V15Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 26a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#333"></path><path d="M5.57 40.39 15 30l5 4 6-7 16.394 13.39" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMaterialThree',
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

    const iconClass = computed(() => [name, `${name}-material-three`, { [`${name}-spin`]: props.spin }]);

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
