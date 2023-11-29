<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M40 22c0-9.941-8.059-18-18-18S4 12.059 4 22s8.059 18 18 18" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.3 30c-1.822 0-3.3 1.722-3.3 3.846 0 3.845 3.9 7.34 6 8.154 2.1-.813 6-4.31 6-8.154C42 31.722 40.523 30 38.7 30c-1.116 0-2.103.646-2.7 1.634-.597-.988-1.584-1.634-2.7-1.634Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 27a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" :stroke="color" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCollectionRecords',
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

    const iconClass = computed(() => [name, `${name}-collection-records`, { [`${name}-spin`]: props.spin }]);

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
