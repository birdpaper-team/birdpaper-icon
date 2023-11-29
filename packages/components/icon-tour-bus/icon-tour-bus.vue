<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M9 23h30v11a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V23ZM9 8a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v15H9V8Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M15 42a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3ZM33 42a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 12v4M42 12v4" :stroke="color" stroke-width="4" stroke-linecap="round"></path><circle cx="15" cy="30" r="2" :fill="color"></circle><circle cx="33" cy="30" r="2" :fill="color"></circle><path d="m31 6-9 10M38 7l-5 6" :stroke="color" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTourBus',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    color: { type: String, default: "#333" },
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

    const iconClass = computed(() => [name, `${name}-tour-bus`, { [`${name}-spin`]: props.spin }]);

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
