<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M10.007 2.104a3 3 0 0 0-3.595 1.489L5.606 5.17a1 1 0 0 1-.436.436l-1.577.805a3 3 0 0 0-1.489 3.596l.545 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.596-1.49l.806-1.576a1 1 0 0 1 .435-.436l1.577-.806a3 3 0 0 0 1.49-3.595l-.546-1.685a1 1 0 0 1 0-.616l.546-1.685a3 3 0 0 0-1.49-3.596l-1.577-.805a1 1 0 0 1-.435-.436l-.806-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0l-1.685-.545ZM8.193 4.503a1 1 0 0 1 1.198-.497l1.685.546a3 3 0 0 0 1.848 0l1.685-.546a1 1 0 0 1 1.199.497l.805 1.577a3 3 0 0 0 1.307 1.307l1.577.805a1 1 0 0 1 .497 1.199l-.546 1.685a2.999 2.999 0 0 0 0 1.848l.546 1.685a1 1 0 0 1-.497 1.198l-1.577.806a3 3 0 0 0-1.307 1.307l-.805 1.577a1 1 0 0 1-1.199.496l-1.685-.545a3 3 0 0 0-1.848 0l-1.685.545a1 1 0 0 1-1.198-.496l-.806-1.577a3 3 0 0 0-1.307-1.307l-1.577-.806a1 1 0 0 1-.496-1.198l.545-1.685a3 3 0 0 0 0-1.848l-.545-1.685a1 1 0 0 1 .496-1.199l1.577-.805A3 3 0 0 0 7.387 6.08l.806-1.577ZM6.76 11.757 11.002 16l7.072-7.071-1.415-1.414-5.656 5.657-2.829-2.829-1.414 1.414Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconVerifiedBadgeLine',
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

    const iconClass = computed(() => [name, `${name}-verified-badge-line`, { [`${name}-spin`]: props.spin }]);

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
