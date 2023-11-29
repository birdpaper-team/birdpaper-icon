<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><circle cx="24" cy="26" r="15" :stroke="color" stroke-width="4"></circle><path d="M21 31.563C21 29.663 24 24 24 24s3 5.664 3 7.563C27 33.46 25.657 35 24 35s-3-1.539-3-3.438Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><circle cx="17.039" cy="23.493" r="2" :fill="color"></circle><circle cx="31.039" cy="23.493" r="2" :fill="color"></circle><path d="M17 11.927C15.621 9.524 8.495 6.093 5.35 9.306 4.014 10.418 2.986 15.45 5.727 23L10 19.98M31 11.927c1.379-2.403 8.505-5.834 11.65-2.621 1.336 1.112 2.364 6.144-.377 13.694L38 19.98" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconKoalaBear',
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

    const iconClass = computed(() => [name, `${name}-koala-bear`, { [`${name}-spin`]: props.spin }]);

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
