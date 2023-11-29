<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path :stroke="color" stroke-width="4" stroke-linecap="round" d="M10 16h28"></path><path d="M14.153 18.142A2 2 0 0 1 16.148 16h15.704a2 2 0 0 1 1.995 2.142l-1.714 24A2 2 0 0 1 30.138 44H17.862a2 2 0 0 1-1.995-1.858l-1.714-24Z" :stroke="color" stroke-width="4"></path><path d="M24 10V6a2 2 0 0 1 2-2h3" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M14.722 11.671A2 2 0 0 1 16.694 10h14.612a2 2 0 0 1 1.973 1.671L34 16H14l.722-4.329Z" :stroke="color" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDrink',
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

    const iconClass = computed(() => [name, `${name}-drink`, { [`${name}-spin`]: props.spin }]);

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
