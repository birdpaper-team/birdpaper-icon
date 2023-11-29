<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path clip-rule="evenodd" d="M24 41.996c13.333.103 20-.989 20-3.275 0-3.428-15.586-20.718-20-20.718S4 35.65 4 38.72c0 2.048 6.667 3.139 20 3.275Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="m21.06 29.661-3.62 4.34" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="M24.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM34 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconAntiCorrosion',
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

    const iconClass = computed(() => [name, `${name}-anti-corrosion`, { [`${name}-spin`]: props.spin }]);

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
