<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><g clip-path="url(#a)" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="m30.656 21.585 4.103-4.103a6 6 0 1 0-4.243-4.243l-4.102 4.104"></path><path d="M41.263 32.192 15.807 6.736l-3.889 3.89 7.778 11.313-2.828 4.243 4.596 4.596 4.243-2.828 11.667 8.131 3.889-3.889Z"></path><path d="M19.32 21.885a9.998 9.998 0 0 0-9.877 2.529c-3.905 3.905-3.905 10.237 0 14.142 3.905 3.905 10.237 3.905 14.142 0a9.998 9.998 0 0 0 2.53-9.877"></path></g><defs><clipPath id="a"><path :fill="color" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPacifier',
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

    const iconClass = computed(() => [name, `${name}-pacifier`, { [`${name}-spin`]: props.spin }]);

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
