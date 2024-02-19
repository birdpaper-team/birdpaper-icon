<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="m2.808 1.394 18.384 18.384-1.414 1.415-3.746-3.747L12 21.486l-8.478-8.493a6 6 0 0 1 .033-8.023L1.394 2.808l1.414-1.414Zm2.172 10.23 7.02 7.03 2.618-2.622-9.646-9.646a4 4 0 0 0 .008 5.237Zm15.263-6.866a6 6 0 0 1 .236 8.235l-1.635 1.636-1.414-1.414 1.59-1.592a4 4 0 0 0-5.683-5.606l-1.335 1.198-1.336-1.197a3.975 3.975 0 0 0-1.155-.723l-2.25-2.25A5.99 5.99 0 0 1 12 4.53a5.998 5.998 0 0 1 8.242.229Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDislikeLine',
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

    const iconClass = computed(() => [name, `${name}-dislike-line`, { [`${name}-spin`]: props.spin }]);

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
