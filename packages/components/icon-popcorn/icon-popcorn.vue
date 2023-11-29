<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M33.696 40.868 39 17H7l5.304 23.868c.334 1.501.5 2.252 1.049 2.692.548.44 1.317.44 2.856.44H29.79c1.539 0 2.308 0 2.856-.44.549-.44.715-1.19 1.05-2.692ZM27 44l1-27M19 44l-1-27M31 44H15M31 17H15M11 17s-1-3 .5-4.5 4.5-1 4.5-1 0-3 2-4 5 .5 5 .5 2-3.357 5-2.5c3 .857 3 4.5 3 4.5s2.5 0 4 2 0 5 0 5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPopcorn',
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

    const iconClass = computed(() => [name, `${name}-popcorn`, { [`${name}-spin`]: props.spin }]);

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
