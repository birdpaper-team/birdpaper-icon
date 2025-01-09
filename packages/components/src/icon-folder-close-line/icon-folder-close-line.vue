<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10v-2H4V5h5.586l2 2H20v5h2V6a1 1 0 0 0-1-1h-8.586l-2-2H3Zm17.414 15 2.122 2.121-1.415 1.414-2.12-2.12-2.122 2.12-1.414-1.414L17.585 18l-2.12-2.121 1.414-1.415L19 16.586l2.121-2.122 1.415 1.415-2.122 2.12Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFolderCloseLine',
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

    const iconClass = computed(() => [name, `${name}-folder-close-line`, { [`${name}-spin`]: props.spin }]);

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
