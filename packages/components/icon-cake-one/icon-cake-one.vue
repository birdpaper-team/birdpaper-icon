<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M27 14 9 21.9h30L34 15" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="31" cy="13" r="4" :fill="color" :stroke="color" stroke-width="4"></circle><path d="m33 9 2-5" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M9.5 26.957c-.602.3-1.162.62-1.678.956C5.418 29.481 4 31.412 4 33.5c0 5.247 8.954 9.5 20 9.5s20-4.253 20-9.5c0-2.14-1.488-4.113-4-5.701" :stroke="color" stroke-width="4"></path><path :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M9 22h30v12H9z"></path><path d="M9 22h31" :stroke="color" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCakeOne',
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

    const iconClass = computed(() => [name, `${name}-cake-one`, { [`${name}-spin`]: props.spin }]);

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
