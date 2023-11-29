<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M10.064 24.058c3.287-1.073 3.465-5.092 7.797-5.94 3.465-.68 5.547 1.708 6.064 4.243.433 2.122-.866 7.639-7.797 7.639C7.465 30 4.578 24.483 4 22.361c.866.849 3.465 2.546 6.064 1.697Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M37.936 24.058c-3.288-1.073-3.465-5.092-7.797-5.94-3.465-.68-5.547 1.708-6.064 4.243-.433 2.122.866 7.639 7.797 7.639 8.663 0 11.55-5.517 12.128-7.639-.866.849-3.465 2.546-6.064 1.697Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconEnglishMustache',
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

    const iconClass = computed(() => [name, `${name}-english-mustache`, { [`${name}-spin`]: props.spin }]);

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
