<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M28.312 27.832c3.374-3.375 1.246-10.972-4.752-16.97-5.998-6-13.596-8.127-16.97-4.753-3.375 3.374-1.247 10.973 4.751 16.97 5.999 6 13.597 8.127 16.97 4.753Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.312 19.262c3.374 3.374 1.246 10.972-4.752 16.97-5.998 6-13.596 8.127-16.97 4.752-3.375-3.374-1.247-10.972 4.751-16.97 5.999-5.999 13.597-8.126 16.97-4.752Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.688 27.832c-3.374-3.375-1.246-10.972 4.752-16.97 5.998-6 13.596-8.127 16.97-4.753 3.375 3.374 1.247 10.973-4.751 16.97-5.999 6-13.597 8.127-16.97 4.753Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.688 19.262c-3.374 3.374-1.246 10.972 4.752 16.97 5.998 6 13.596 8.127 16.97 4.752 3.375-3.374 1.247-10.972-4.751-16.97-5.999-5.999-13.597-8.126-16.97-4.752Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconGeometricFlowers',
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

    const iconClass = computed(() => [name, `${name}-geometric-flowers`, { [`${name}-spin`]: props.spin }]);

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
