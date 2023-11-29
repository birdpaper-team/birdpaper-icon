<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M11 12.138c0-.079.059-.146.137-.156L32.082 9.28C37.342 8.6 42 12.697 42 18c0 5.303-4.659 9.399-9.918 8.72l-20.945-2.702a.157.157 0 0 1-.137-.156V12.138Z" stroke="#333" stroke-width="4"></path><path d="M11 12 4 8v20l7-4" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m38 25-6.694 15.898A5.07 5.07 0 0 1 26.634 44c-3.625 0-6.078-3.695-4.672-7.036L27 25" stroke="#333" stroke-width="4"></path><circle cx="35" cy="18" r="9" stroke="#333" stroke-width="4"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHairDryerOne',
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

    const iconClass = computed(() => [name, `${name}-hair-dryer-one`, { [`${name}-spin`]: props.spin }]);

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
