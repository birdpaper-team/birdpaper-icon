<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M38.142 38.142A19.937 19.937 0 0 0 44 24a19.937 19.937 0 0 0-5.858-14.142M9.858 9.858A19.937 19.937 0 0 0 4 24a19.938 19.938 0 0 0 5.858 14.142M15.1 14.1A13.956 13.956 0 0 0 11 24c0 3.866 1.567 7.366 4.1 9.9M32.9 33.9A13.956 13.956 0 0 0 37 24c0-3.866-1.567-7.366-4.1-9.9" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="M24 44V34M24 4v10" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#333"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSignalOne',
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

    const iconClass = computed(() => [name, `${name}-signal-one`, { [`${name}-spin`]: props.spin }]);

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
