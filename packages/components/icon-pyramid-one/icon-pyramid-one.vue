<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path clip-rule="evenodd" d="m19 14 14 28H5l14-28Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="m24 25-9 17M33 42h10.5L35 28l-4.5 8" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.984 26.396c6.228-1.582 9.994-7.914 8.412-14.142-1.582-6.228-7.914-9.995-14.142-8.412-6.229 1.582-9.995 7.913-8.413 14.142a11.604 11.604 0 0 0 1.937 4.078" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M20 42H10M22.5 21l5 10" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPyramidOne',
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

    const iconClass = computed(() => [name, `${name}-pyramid-one`, { [`${name}-spin`]: props.spin }]);

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
