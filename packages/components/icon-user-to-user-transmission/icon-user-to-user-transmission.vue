<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M14 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM34 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M4 44v-9c0-5.523 3.77-10 8.421-10h5.053C21.559 25 24 29.027 24 29.027" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44 44v-9c0-5.523-3.815-10-8.521-10h-5.113c-3.961 0-6.374 4.027-6.366 4.027M11 40h27" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m34.295 36.258 1.24 1.247L38.015 40l-2.48 2.561-1.24 1.281M14.33 36.232l-1.26 1.254-2.518 2.507 2.518 2.548 1.26 1.275" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconUserToUserTransmission',
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

    const iconClass = computed(() => [name, `${name}-user-to-user-transmission`, { [`${name}-spin`]: props.spin }]);

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
