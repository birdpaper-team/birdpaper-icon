<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.283 14.71A19.859 19.859 0 0 0 4.4 20M14.71 6.283A19.86 19.86 0 0 1 20 4.4M38 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.29 6.283A19.86 19.86 0 0 0 28 4.4M41.716 14.71A19.857 19.857 0 0 1 43.6 20M38 44a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M41.716 33.29A19.859 19.859 0 0 0 43.6 28M33.29 41.716A19.859 19.859 0 0 1 28 43.6M10 44a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.71 41.716A19.859 19.859 0 0 0 20 43.6M6.283 33.29A19.86 19.86 0 0 1 4.4 28M24 30V18m-6 6h12-12Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFourRoundPointConnection',
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

    const iconClass = computed(() => [name, `${name}-four-round-point-connection`, { [`${name}-spin`]: props.spin }]);

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
