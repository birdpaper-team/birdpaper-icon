<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m21.619 8.986.476 2.463h3.81l.476-2.463c.476 1.642 1.429 5.223 1.429 6.405 1.746-.164 5.143-1.38 4.762-4.927 0-.493-.382-1.676-1.905-2.464 4.285.986 12.952 5.716 13.333 16.754-2.857-1.807-8.762-3.154-9.524 5.913-1.746-2.957-5.809-7.293-8.095-.986C25.587 32.473 24 38.846 24 42c0-3.154-1.587-9.527-2.381-12.319-2.286-6.307-6.35-1.97-8.095.986-.762-9.067-6.667-7.72-9.524-5.913C4.381 13.716 13.048 8.986 17.333 8c-1.523.788-1.905 1.971-1.905 2.464-.38 3.548 3.016 4.763 4.762 4.927 0-1.182.953-4.763 1.429-6.405Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBat',
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

    const iconClass = computed(() => [name, `${name}-bat`, { [`${name}-spin`]: props.spin }]);

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
