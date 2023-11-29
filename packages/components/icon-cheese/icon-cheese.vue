<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M43 20c0-2.172-18.108-11.888-22.866-14.404a1.974 1.974 0 0 0-2.149.201L5 16" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 17.652c0-1.329 1.269-2.298 2.555-1.964 6.407 1.662 23.305 5.645 32.606 4.07 1.395-.235 2.839.779 2.839 2.193v16.151a2 2 0 0 1-1.895 1.998l-34 1.79A2 2 0 0 1 5 39.891v-22.24Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="25" r="2" fill="#333"></circle><circle cx="25" cy="27" r="2" fill="#333"></circle><circle cx="34" cy="32" r="2" fill="#333"></circle><circle cx="18" cy="32" r="2" fill="#333" stroke="#333" stroke-width="4"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCheese',
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

    const iconClass = computed(() => [name, `${name}-cheese`, { [`${name}-spin`]: props.spin }]);

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
