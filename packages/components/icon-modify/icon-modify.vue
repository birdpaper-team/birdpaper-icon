<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m20.07 9.586-4.242-4.243a2 2 0 0 0-2.828 0L7.343 11a2 2 0 0 0 0 2.829l4.243 4.242M28.929 37.414l4.242 4.243a2 2 0 0 0 2.829 0L41.657 36a2 2 0 0 0 0-2.828l-4.243-4.243" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><rect x="34.606" y="4.908" width="12" height="42" rx="2" transform="rotate(45 34.606 4.908)" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><circle cx="24" cy="24" r="2" :fill="color"></circle><circle cx="20" cy="28" r="2" :fill="color"></circle><circle cx="28" cy="20" r="2" :fill="color"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconModify',
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

    const iconClass = computed(() => [name, `${name}-modify`, { [`${name}-spin`]: props.spin }]);

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
