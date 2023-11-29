<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><g clip-path="url(#a)" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M33.9 33.9c9.372-9.373 12.538-21.403 7.07-26.87-5.467-5.468-17.497-2.302-26.87 7.07-9.372 9.373-12.538 21.403-7.07 26.87 5.467 5.468 17.497 2.302 26.87-7.07ZM21.171 21.172l5.657 5.656M25.414 16.929l5.657 5.657M16.93 25.414l5.656 5.657M12.692 35.32 35.32 12.692M5.615 28.243l14.142 14.142M28.243 5.615l14.142 14.142"></path></g><defs><clipPath id="a"><path :fill="color" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRugby',
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

    const iconClass = computed(() => [name, `${name}-rugby`, { [`${name}-spin`]: props.spin }]);

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
