<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M1 11v2s2 0 2 4v1a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1c0-4 2-4 2-4v-2s-2 0-2-4V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1c0 4-2 4-2 4Zm19.674 1c-.03.028-.059.056-.088.086C19.578 13.093 19 14.692 19 17v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1c0-2.308-.578-3.907-1.586-4.914A3.887 3.887 0 0 0 3.326 12c.03-.028.059-.056.088-.086C4.422 10.907 5 9.308 5 7V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1c0 2.308.578 3.907 1.586 4.914l.088.086ZM8.5 7v10h5a3 3 0 0 0 1.615-5.529A3 3 0 0 0 12.5 7h-4Zm2 4V9h2a1 1 0 1 1 0 2h-2Zm0 2h3a1 1 0 1 1 0 2h-3v-2Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBootstrapLine',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    fill: { type: String, default: "#333" },
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

    const iconClass = computed(() => [name, `${name}-bootstrap-line`, { [`${name}-spin`]: props.spin }]);

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
