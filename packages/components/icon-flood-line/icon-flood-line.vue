<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M16 17.472A5.978 5.978 0 0 0 20 19h2v2h-2a7.964 7.964 0 0 1-4-1.07A7.96 7.96 0 0 1 12 21a7.964 7.964 0 0 1-4-1.07A7.96 7.96 0 0 1 4 21H2v-2h2c1.537 0 2.94-.578 4-1.528A5.978 5.978 0 0 0 12 19c1.537 0 2.94-.578 4-1.528Zm-3.427-15.94.1.08L23 11h-3v6c-.701 0-1.374-.12-2-.341V9.157l-6-5.455-6 5.454.001 7.502a5.98 5.98 0 0 1-1.702.335L4 17v-6H1l10.327-9.388a1 1 0 0 1 1.246-.08Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFloodLine',
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

    const iconClass = computed(() => [name, `${name}-flood-line`, { [`${name}-spin`]: props.spin }]);

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
