<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M44 42H31l-2.956-13.793a2.002 2.002 0 0 1-.044-.419V15l-7.43-5.964a1.962 1.962 0 0 1 2.19-3.24L32 11l3.947 14.803c.035.131.084.258.144.38L44 42ZM36 26l-8 2" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m19.379 25.52.064.054a2 2 0 0 0 3-.508L24 22.463v-4.693L20.32 15l-6.36.846-4.145 8.096c-.05.096-.092.197-.125.3L4 42h11.96V29L17 24.087 17.5 22H19l-.304 1.617a2 2 0 0 0 .683 1.904ZM10 25l6 3" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRespect',
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

    const iconClass = computed(() => [name, `${name}-respect`, { [`${name}-spin`]: props.spin }]);

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
