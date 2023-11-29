<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M33 44H13M23 28v16M35 16c0 1.675-.357 3.284-1 4.75C32.148 24.97 27.92 28 23 28a12 12 0 0 1-10.79-6.742A11.953 11.953 0 0 1 11 16c0-2.373.533-4.613 1.21-6.5C13.387 6.217 15 4 15 4h16s1.815 2.496 3 6.112c.574 1.752 1 3.767 1 5.888Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M35 16s-7 3-12 0-12 0-12 0" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M34 10.112c.574 1.752 1 3.767 1 5.888 0 1.675-.357 3.284-1 4.75M12.21 9.5C11.533 11.387 11 13.627 11 16c0 1.886.435 3.67 1.21 5.258" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconGobletFull',
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

    const iconClass = computed(() => [name, `${name}-goblet-full`, { [`${name}-spin`]: props.spin }]);

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
