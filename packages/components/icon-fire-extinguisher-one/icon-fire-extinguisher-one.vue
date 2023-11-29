<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M16 18a8 8 0 1 1 16 0v24a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V18Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M24 24v10" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path stroke="#333" stroke-width="4" stroke-linejoin="round" d="M20 5h9v4h-9zM29 5l9-1v6l-9-1V5Z"></path><path d="M20 7c-3 0-7.5-.5-10 2-2.417 2.416-2 5-2 9" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFireExtinguisherOne',
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

    const iconClass = computed(() => [name, `${name}-fire-extinguisher-one`, { [`${name}-spin`]: props.spin }]);

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
