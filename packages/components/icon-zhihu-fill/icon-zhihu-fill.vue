<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M13.373 18.897h1.453l.478 1.637 2.604-1.637h3.071V5.395h-7.605v13.502ZM14.92 6.861h4.515v10.57h-1.732l-1.73 1.088-.315-1.085-.738-.002V6.86Zm-2.83 4.712H8.846a70.3 70.3 0 0 0 .136-4.56h3.172s.122-1.4-.532-1.383H6.135c.217-.815.488-1.655.814-2.525 0 0-1.493 0-2.001 1.34-.21.551-.82 2.677-1.903 4.848.365-.04 1.573-.074 2.284-1.379.13-.365.156-.413.318-.902h1.79c0 .652-.074 4.152-.105 4.559h-3.24c-.728 0-.964 1.466-.964 1.466h4.065c-.272 3.094-1.737 5.702-4.392 7.764 1.27.363 2.536-.058 3.162-.615 0 0 1.425-1.297 2.206-4.298l3.345 4.03s.491-1.668-.076-2.481c-.47-.554-1.74-2.052-2.281-2.595l-.907.72c.27-.867.433-1.71.488-2.524h3.822s-.005-1.466-.47-1.466v.001Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconZhihuFill',
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

    const iconClass = computed(() => [name, `${name}-zhihu-fill`, { [`${name}-spin`]: props.spin }]);

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
