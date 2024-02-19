<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M7.05 14.121 4.93 16.243l2.828 2.828L19.071 7.757 16.243 4.93 14.12 7.05l1.415 1.415-1.415 1.414-1.414-1.414-1.414 1.414 1.414 1.414-1.414 1.414-1.414-1.414-1.414 1.414 1.414 1.414-1.414 1.415L7.05 14.12Zm9.9-11.313 4.242 4.242a1 1 0 0 1 0 1.415L8.465 21.192a1 1 0 0 1-1.415 0L2.808 16.95a1 1 0 0 1 0-1.414L15.536 2.808a1 1 0 0 1 1.414 0ZM14.12 18.363l1.415-1.414 2.242 2.243h1.414v-1.414l-2.242-2.243 1.414-1.414L21 16.757V21h-4.242l-2.637-2.637ZM5.636 9.878 2.808 7.05a1 1 0 0 1 0-1.415l2.828-2.828a1 1 0 0 1 1.414 0L9.88 5.635 8.464 7.05l-2.12-2.122-1.415 1.415 2.121 2.12-1.414 1.415Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPencilRuler2Line',
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

    const iconClass = computed(() => [name, `${name}-pencil-ruler-2-line`, { [`${name}-spin`]: props.spin }]);

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
