<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M10 38v6h28v-6M38 20v-6L30 4H10v16" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28 4v10h10" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><rect x="4" y="20" width="40" height="18" rx="2" stroke="#333" stroke-width="4" stroke-linejoin="round"></rect><path d="M21 25v8M10 25v8" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="M32 33v-8h5M32 30h5M10 25h3.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5H10M21 25h2a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-2" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 12h4" stroke="#333" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFilePdfOne',
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

    const iconClass = computed(() => [name, `${name}-file-pdf-one`, { [`${name}-spin`]: props.spin }]);

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
