<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M14.34 21.412 24 24l9.66 2.588 9.659 2.588c2.338-8.725-1.471-17.65-8.773-22.176a20 20 0 0 0-5.37-2.318A19.97 19.97 0 0 0 22.5 4.05c-8.237.62-15.56 6.342-17.818 14.773l9.659 2.588Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M29.176 4.681s-5.64 3.665-8.866 7.977-4.037 9.271-4.037 9.271M29.177 4.681s3.052 5.995 3.69 11.342c.638 5.347-1.14 10.047-1.14 10.047M4.682 18.824l9.659 2.588L24 24l9.658 2.588 9.66 2.588M4 44h40M24 24l-5.5 20" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.5 4.051a19.97 19.97 0 0 1 6.676.63 20 20 0 0 1 5.37 2.32" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBeachUmbrella',
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

    const iconClass = computed(() => [name, `${name}-beach-umbrella`, { [`${name}-spin`]: props.spin }]);

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
