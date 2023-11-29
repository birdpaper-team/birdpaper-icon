<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M16 44c-1.462-4.349-1.934-8.016-1.415-11 .518-2.985 2.13-4.935 4.836-5.852-2.013 6.107-1.188 10.568 2.475 13.385 5.495 4.225 18.738 2.282 19.455-12.01.718-14.292-6.156-24.61-16.32-24.61-10.165 0-11.685 11-4.526 14.734-6.334 1.38-10.353 4.214-12.058 8.5C6.742 31.435 6.61 37.053 8.05 44" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.6 15c-2.898 1.727-3.948 3.31-3.15 4.746.797 1.437 2.605 1.437 5.424 0M33.247 26.24c-3.74-.762-5.99-.486-6.748.828-1.137 1.97 3.87 4.826 5.686 5.183" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRenal',
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

    const iconClass = computed(() => [name, `${name}-renal`, { [`${name}-spin`]: props.spin }]);

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
