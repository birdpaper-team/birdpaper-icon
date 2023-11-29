<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M13 27c2.073-.542 6.014-3.167 7-4v-7l-6-2c-.41-1.62-1.685-4.889-3-6l-1.448 4.514C6.95 13.67 2.7 18.889 5 25c1 2 3.077 9 6 14M24 13.206c4.391-.727 13.525.072 14.93 9.08.292 1.332-.176 7.723-4.391 10.629C33.689 33.5 33 36 33 39" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26 40a4 4 0 0 0-8 0" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M39 24c.5 1 2.699 1.67 4.228.102.89-.913 1.619-3.768-.63-5.102" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPigZodiac',
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

    const iconClass = computed(() => [name, `${name}-pig-zodiac`, { [`${name}-spin`]: props.spin }]);

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
