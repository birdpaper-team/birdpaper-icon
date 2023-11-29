<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M10 38v6h28v-6M38 20v-6L30 4H10v16" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28 4v10h10" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 12h4" :stroke="color" stroke-width="4" stroke-linecap="round"></path><rect x="4" y="20" width="40" height="18" rx="2" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path d="m21 25 6 8M27 25l-6 8M13 25v8M10 25h6M35 25v8M32 25h6" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFileTxtOne',
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

    const iconClass = computed(() => [name, `${name}-file-txt-one`, { [`${name}-spin`]: props.spin }]);

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
