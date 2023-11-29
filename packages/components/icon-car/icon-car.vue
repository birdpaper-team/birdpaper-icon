<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 32a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM34.5 32a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="#333"></path><path d="M7 37a3 3 0 0 1-3-3v-9.29a6 6 0 0 1 3.319-5.368l.682-.34 2.31-9.91A4 4 0 0 1 14.205 6h19.688a4 4 0 0 1 3.904 3.128l2.205 9.873.68.34A6 6 0 0 1 44 24.709V34a3 3 0 0 1-3 3h-1.997v1A4.001 4.001 0 0 1 31 38v-1H17v1a4 4 0 1 1-8 0v-1H7Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M14 22h20l-1.652-7.434A2 2 0 0 0 30.396 13H17.604a2 2 0 0 0-1.952 1.566L14 22Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCar',
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

    const iconClass = computed(() => [name, `${name}-car`, { [`${name}-spin`]: props.spin }]);

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
