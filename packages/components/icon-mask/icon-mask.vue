<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path clip-rule="evenodd" d="M14 14h20c5.523 0 10 4.477 10 10v3c0 7.18-5.82 13-13 13H17C9.82 40 4 34.18 4 27v-3c0-5.523 4.477-10 10-10Z" stroke="#333" stroke-width="4"></path><path d="M18 27h12M24 21v12" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="M4 25.042V12.014A4.168 4.168 0 0 1 11.047 9c1.6 1.527 2.74 3.194 3.424 5M44 25.042V12.766A4.478 4.478 0 0 0 36 10a111.149 111.149 0 0 0-3 4" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMask',
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

    const iconClass = computed(() => [name, `${name}-mask`, { [`${name}-spin`]: props.spin }]);

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
