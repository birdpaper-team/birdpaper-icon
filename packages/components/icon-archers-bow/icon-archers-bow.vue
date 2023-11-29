<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><g clip-path="url(#a)" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="m40.85 43.92-1.574-.314c-2.35-.47-3.42-3.607-2.673-5.884 1.954-5.96.522-13.61-.27-16.913-.246-1.024-1.058-1.794-2.08-2.05l-2.263-.565a3 3 0 0 1-2.183-2.183l-.565-2.262c-.256-1.023-1.025-1.834-2.05-2.08-3.302-.792-10.954-2.225-16.913-.27-2.276.747-5.413-.324-5.883-2.674L4.08 7.151M6 11l32 32M12 36 43 5"></path></g><defs><clipPath id="a"><path :fill="color" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconArchersBow',
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

    const iconClass = computed(() => [name, `${name}-archers-bow`, { [`${name}-spin`]: props.spin }]);

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
