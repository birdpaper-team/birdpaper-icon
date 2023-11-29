<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M6.544 14.262C11.403 15.23 16.603 18.754 20 23c0 10.63-7.356 13.237-12.771 13.834-1.478.163-2.451-1.401-1.853-2.763C6.826 30.773 8 27.3 8 25c0-2.391-1.906-5.418-3.186-8.573-.49-1.206.453-2.418 1.73-2.165ZM41.456 14.262C36.597 15.23 31.397 18.754 28 23c0 10.63 7.356 13.237 12.771 13.834 1.478.163 2.451-1.401 1.853-2.763C41.174 30.773 40 27.3 40 25c0-2.391 1.906-5.418 3.186-8.573.49-1.206-.453-2.418-1.73-2.165ZM20 21h8v8h-8z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBow',
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

    const iconClass = computed(() => [name, `${name}-bow`, { [`${name}-spin`]: props.spin }]);

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
