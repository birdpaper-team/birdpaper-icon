<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M29 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" :stroke="color" stroke-width="4" stroke-miterlimit="2"></path><path d="M41 24a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" :fill="color"></path><path d="m16 24-2.27 11.26a2 2 0 0 1-2.81 1.5L4 34M38 30 23.76 19.07c-.77-.57-1.83-.51-2.54.13l-4.84 4.43a.996.996 0 0 0 .09 1.55L26 32.15c.72.53 1.01 1.48.69 2.32L23.12 44" :stroke="color" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPlayVolleyball',
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

    const iconClass = computed(() => [name, `${name}-play-volleyball`, { [`${name}-spin`]: props.spin }]);

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
