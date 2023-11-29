<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M32 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="#333" stroke-width="4" stroke-miterlimit="2"></path><path d="m23 40 8.11-2.06c.78-.19 1.02-1.19.42-1.72L23 29l4-8-10.41-3.74c-.5-.18-.9-.54-1.13-1.02L11 8" stroke="#333" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="m23 29-6.97 8.79c-.21.25-.47.45-.77.57L5 42M27 21l9.9 2.79c.47.14.88.44 1.14.85L42 31" stroke="#333" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPlayBasketball',
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

    const iconClass = computed(() => [name, `${name}-play-basketball`, { [`${name}-spin`]: props.spin }]);

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
