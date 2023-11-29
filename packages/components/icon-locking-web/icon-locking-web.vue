<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M24 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v12.059" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4v-9Z" stroke="#333" stroke-width="4"></path><rect x="32" y="33" width="12" height="8" rx="3" stroke="#333" stroke-width="4" stroke-linejoin="round"></rect><path d="M38 27a3 3 0 0 1 3 3v3h-6v-3a3 3 0 0 1 3-3Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><circle r="2" transform="matrix(0 -1 -1 0 10 14)" fill="#333"></circle><circle r="2" transform="matrix(0 -1 -1 0 16 14)" fill="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconLockingWeb',
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

    const iconClass = computed(() => [name, `${name}-locking-web`, { [`${name}-spin`]: props.spin }]);

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
