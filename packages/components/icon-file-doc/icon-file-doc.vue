<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M10 38v6h28v-6M38 20v-6L30 4H10v16" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28 4v10h10" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 12h4" :stroke="color" stroke-width="4" stroke-linecap="round"></path><rect x="4" y="20" width="40" height="18" rx="2" :stroke="color" stroke-width="4" stroke-linejoin="round"></rect><path d="M10 25v8" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M10 25h2a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-2" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><ellipse cx="24" cy="29" rx="3" ry="4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></ellipse><path d="M38 25h-2a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h2" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFileDoc',
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

    const iconClass = computed(() => [name, `${name}-file-doc`, { [`${name}-spin`]: props.spin }]);

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
