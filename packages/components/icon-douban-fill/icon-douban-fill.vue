<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M16.314 19.138h4.065a.62.62 0 0 1 .621.62v.621a.62.62 0 0 1-.62.621H3.62a.62.62 0 0 1-.62-.62v-.621a.62.62 0 0 1 .62-.621h3.754l-.96-3.104h2.19a.62.62 0 0 1 .59.425l.892 2.679H13.6l1.225-4.035H5.172a.62.62 0 0 1-.62-.62V7.345a.62.62 0 0 1 .62-.62h13.656a.62.62 0 0 1 .62.62v7.138a.62.62 0 0 1-.62.62h-1.289l-1.225 4.035ZM3.931 3h16.138a.62.62 0 0 1 .62.62v.621a.62.62 0 0 1-.62.621H3.931a.62.62 0 0 1-.62-.62V3.62A.62.62 0 0 1 3.93 3ZM7.19 8.586a.155.155 0 0 0-.156.155v4.035c0 .086.07.155.156.155h9.62c.086 0 .155-.07.155-.155V8.74a.155.155 0 0 0-.155-.155H7.19Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDoubanFill',
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

    const iconClass = computed(() => [name, `${name}-douban-fill`, { [`${name}-spin`]: props.spin }]);

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
