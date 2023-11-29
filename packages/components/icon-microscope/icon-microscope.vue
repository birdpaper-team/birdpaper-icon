<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M26 44c4.346-3.008 6.663-6.049 6.95-9.122.286-3.073-.642-5.366-2.784-6.878" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path clip-rule="evenodd" d="M27.655 28.223a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" :stroke="color" stroke-width="4"></path><path d="m24.288 27-5.51 5.577-9.192-9.192L27.97 5l9.192 9.192-6.187 6.187" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m6.558 28.136 7.861 7.678M6 44h36" :stroke="color" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMicroscope',
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

    const iconClass = computed(() => [name, `${name}-microscope`, { [`${name}-spin`]: props.spin }]);

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
