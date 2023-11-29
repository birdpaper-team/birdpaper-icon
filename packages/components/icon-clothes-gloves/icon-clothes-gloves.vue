<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M27 4H15c-3.771 0-5.657 0-6.828 1.172C7 6.343 7 8.229 7 12v32h28v-7s7 0 7-6v-8c0-6-7-6-7-6v-5c0-3.771 0-5.657-1.172-6.828C32.657 4 30.771 4 27 4Z"></path><path d="M35 27V17m0 0v-5c0-3.771 0-5.657-1.172-6.828C32.657 4 30.771 4 27 4H15c-3.771 0-5.657 0-6.828 1.172C7 6.343 7 8.229 7 12v32h28v-7s7 0 7-6v-8c0-6-7-6-7-6ZM14 22V4M21 22V4M28 22V4M12 4h18" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconClothesGloves',
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

    const iconClass = computed(() => [name, `${name}-clothes-gloves`, { [`${name}-spin`]: props.spin }]);

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
