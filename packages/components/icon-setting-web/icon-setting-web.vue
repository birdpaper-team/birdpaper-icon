<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M24 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v12.059" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4v-9Z" :stroke="color" stroke-width="4"></path><circle r="2" transform="matrix(0 -1 -1 0 10 14)" :fill="color"></circle><circle r="2" transform="matrix(0 -1 -1 0 16 14)" :fill="color"></circle><circle cx="37" cy="34" r="3" :stroke="color" stroke-width="4"></circle><path d="M37 41v-4M37 31v-4M30.938 37.5l3.464-2M39.598 32.5l3.464-2M30.938 30.5l3.464 2M39.598 35.5l3.464 2" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSettingWeb',
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

    const iconClass = computed(() => [name, `${name}-setting-web`, { [`${name}-spin`]: props.spin }]);

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
