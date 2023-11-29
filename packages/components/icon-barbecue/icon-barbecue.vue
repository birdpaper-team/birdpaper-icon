<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><rect x="12" y="4" width="8" height="8" rx="4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="12" y="22" width="8" height="8" rx="4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path :stroke="color" stroke-width="4" stroke-linecap="round" d="M16 31v13"></path><rect x="28" y="4" width="8" height="8" rx="4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="28" y="22" width="8" height="8" rx="4" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path :stroke="color" stroke-width="4" stroke-linecap="round" d="M32 31v13"></path><path d="M13 17h6M29 17h6M13 36h6M29 36h6" :stroke="color" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"></path><path :stroke="color" stroke-width="4" stroke-linecap="round" d="M16 14v6M32 14v6"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBarbecue',
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

    const iconClass = computed(() => [name, `${name}-barbecue`, { [`${name}-spin`]: props.spin }]);

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
