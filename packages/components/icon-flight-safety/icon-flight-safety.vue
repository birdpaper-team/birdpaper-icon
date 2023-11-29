<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M38.986 23c-.313 10.709-5.866 16.522-13.984 20-4.393-1.881-8.034-4.447-10.502-8.101M39 19v-8.744L25.007 5 11 10.256v11.773c0 2.587.294 4.9.848 6.971" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M9.268 30.632c-1.373-1.257-2.99-3.877-3.587-4.027 0 0-1.798 4.434-1.68 7.395.117 2.96 2.896 4.635 5.824 3.22C12.753 35.806 44 20 44 20l-9-2L9.268 30.632Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m28 21-9-3-2 1 3 6" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFlightSafety',
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

    const iconClass = computed(() => [name, `${name}-flight-safety`, { [`${name}-spin`]: props.spin }]);

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
