<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M13.2 21a10.442 10.442 0 0 1-1.2-4.861C12 9.987 17.373 5 24 5s12 4.987 12 11.139c0 1.743-.431 3.392-1.2 4.861" stroke="#333" stroke-width="4"></path><ellipse cx="24" cy="31" rx="15" ry="12" stroke="#333" stroke-width="4"></ellipse><path d="M30.518 33.874c-3.67 3.67-9.721 3.566-13.518-.23M12 23c-3.314 0-6-2.239-6-5s2.686-5 6-5M36 23c3.314 0 6-2.239 6-5s-2.686-5-6-5" stroke="#333" stroke-width="4" stroke-linecap="round"></path><circle cx="20" cy="14" r="2" fill="#333"></circle><circle cx="28" cy="14" r="2" fill="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMonkey',
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

    const iconClass = computed(() => [name, `${name}-monkey`, { [`${name}-spin`]: props.spin }]);

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
