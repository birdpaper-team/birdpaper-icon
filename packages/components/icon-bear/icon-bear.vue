<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M5 13.06c0 2.48 1.292 4.461 3 5.94-1.076 2.146-2 4.474-2 7 0 9.221 8.124 17 18 17s18-7.779 18-17c0-2.526-.924-4.854-2-7 1.708-1.479 3-3.521 3-6 0-4.452-3.68-8-8-8-3.273 0-5.833 2.06-7 5a19.831 19.831 0 0 0-4-.394c-1.351 0-2.735.129-4 .394-1.167-2.94-3.727-5-7-5-4.32 0-8 3.609-8 8.06Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><circle cx="20" cy="19" r="2" :fill="color"></circle><circle cx="28" cy="19" r="2" :fill="color"></circle><circle cx="24" cy="26" r="3" :fill="color"></circle><path d="M24 26v8" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28 33c-2.276 2.276-5.724 2.276-8 0" :stroke="color" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBear',
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

    const iconClass = computed(() => [name, `${name}-bear`, { [`${name}-spin`]: props.spin }]);

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
