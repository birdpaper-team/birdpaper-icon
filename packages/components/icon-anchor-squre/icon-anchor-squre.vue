<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M42 38c0-9.941-8.059-20-18-20S6 28.059 6 38M20 14H10M38 14H28" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="24" cy="14" r="4" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></circle><path stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M20 10h8v8h-8zM38 11h6v6h-6zM4 11h6v6H4z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconAnchorSqure',
  props: {
    /** 图标尺寸 */
    size: { type: String },
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

    const iconClass = computed(() => [name, `${name}-anchor-squre`, { [`${name}-spin`]: props.spin }]);

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
