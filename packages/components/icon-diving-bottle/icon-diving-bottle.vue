<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m4 40 2.5 1.351c1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0L44 40M14 11V4M31 11V4M21 8V4M38 8V4" :stroke="color" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"></path><path :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M12 6h8M29 6h8"></path><rect x="10" y="11" width="8" height="24" rx="4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="27" y="11" width="8" height="24" rx="4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M27 15a4 4 0 0 1 8 0v4h-8v-4ZM10 15a4 4 0 0 1 8 0v4h-8v-4Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDivingBottle',
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

    const iconClass = computed(() => [name, `${name}-diving-bottle`, { [`${name}-spin`]: props.spin }]);

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
