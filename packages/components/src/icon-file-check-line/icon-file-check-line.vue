<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 20v2H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.998 2H16l5 5v7h-2V8h-4V4H5v16h7Zm2.465-.535L18 23l4.95-4.95-1.414-1.414L18 20.172 15.88 18.05l-1.414 1.415Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFileCheckLine',
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

    const iconClass = computed(() => [name, `${name}-file-check-line`, { [`${name}-spin`]: props.spin }]);

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
