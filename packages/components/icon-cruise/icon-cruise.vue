<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m38 42 3.39-9.325a2 2 0 0 0-.984-2.472l-15.512-7.756a2 2 0 0 0-1.788 0L7.594 30.203a2 2 0 0 0-.985 2.472L10 42" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M35 14H13a2 2 0 0 0-2 2v12l12.162-5.613a2 2 0 0 1 1.676 0L37 28V16a2 2 0 0 0-2-2ZM29 14V6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v8" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 32v8" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="M4 44c4 0 4-2 7-2s3 2 6 2 3.5-2 7-2 4 2 7 2 3-2 6-2 3 2 7 2" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCruise',
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

    const iconClass = computed(() => [name, `${name}-cruise`, { [`${name}-spin`]: props.spin }]);

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
