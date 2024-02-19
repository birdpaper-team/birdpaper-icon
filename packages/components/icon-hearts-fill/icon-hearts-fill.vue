<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M17.363 11.045a3.614 3.614 0 0 1 5.084 0 3.55 3.55 0 0 1 0 5.047L17 21.5l-5.447-5.408a3.55 3.55 0 0 1 0-5.047 3.614 3.614 0 0 1 5.084 0l.363.36.363-.36Zm1.88-6.288a5.986 5.986 0 0 1 1.689 3.338A5.619 5.619 0 0 0 17 8.808a5.617 5.617 0 0 0-6.856.818 5.55 5.55 0 0 0-.178 7.701l.178.185 2.421 2.404L11 21.485 2.52 12.993a6 6 0 0 1 8.48-8.464 5.998 5.998 0 0 1 8.242.228Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHeartsFill',
  props: {
    /** 图标尺寸 */
    size: { type: String, default: "18px" },
    /** 颜色 */
    fill: { type: String, default: "#595959" },
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

    const iconClass = computed(() => [name, `${name}-hearts-fill`, { [`${name}-spin`]: props.spin }]);

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
