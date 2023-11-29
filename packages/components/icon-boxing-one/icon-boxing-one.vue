<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M13 26h2c2.76 0 5-2.24 5-5s-2.24-5-5-5h-4c-2.76 0-5 2.24-5 5v9a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6v-4a4 4 0 0 0-4-4H24M34 44H14a2 2 0 0 1-2-2v-6h24v6c0 1.1-.9 2-2 2Z" stroke="#333" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 20c-1 0-2-2-2-4v-4c0-4.42 3.58-8 8-8h24c4.42 0 8 3.58 8 8v4c0 3.31-2.69 6-6 6H19.9" stroke="#333" stroke-width="4" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBoxingOne',
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

    const iconClass = computed(() => [name, `${name}-boxing-one`, { [`${name}-spin`]: props.spin }]);

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
