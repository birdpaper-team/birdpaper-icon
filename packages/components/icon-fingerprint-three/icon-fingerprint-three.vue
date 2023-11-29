<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M42.43 12.04C37.703 7.382 31.155 4.5 23.919 4.5c-7.193 0-13.706 2.849-18.428 7.457M6.667 29.474v-.057c0-9.573 7.76-17.334 17.333-17.334M31.17 13.63c5.995 2.728 10.163 8.77 10.163 15.787v.013M14.25 37v-7.584c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75V37" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.526 43.5c1.963-.485 3.224-2.554 3.224-4.304V30.5a3.25 3.25 0 0 1 6.5 0v8.696" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFingerprintThree',
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

    const iconClass = computed(() => [name, `${name}-fingerprint-three`, { [`${name}-spin`]: props.spin }]);

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
