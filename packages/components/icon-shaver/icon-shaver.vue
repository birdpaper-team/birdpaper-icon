<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M20.785 18.73a.719.719 0 0 1 1.016 0l7.469 7.469c.28.28.28.735 0 1.016L17.757 38.728a6 6 0 0 1-8.485-8.486L20.785 18.73Z" :stroke="color" stroke-width="4"></path><path d="M42.581 22.389a.894.894 0 0 0 0-1.264L26.874 5.418a.894.894 0 0 0-1.263 0l-.783.783c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.687 12.285 4.687 16.97 0l.783-.782Z" :stroke="color" stroke-width="4"></path><path d="m19.879 28.121-1.415 1.414M27.657 17.515l2.828 2.828" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconShaver',
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

    const iconClass = computed(() => [name, `${name}-shaver`, { [`${name}-spin`]: props.spin }]);

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
