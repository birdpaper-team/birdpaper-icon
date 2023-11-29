<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M11.465 19.923C10.682 12.481 16.517 6 24 6c7.482 0 13.317 6.481 12.534 13.923l-1.488 14.132a11.108 11.108 0 0 1-22.093 0l-1.488-14.132Z" stroke="#333" stroke-width="4"></path><path d="M14 31c3.492-3.125 11.428-7.17 20 0" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="19" cy="18" r="2" fill="#333"></circle><circle cx="21" cy="34" r="2" fill="#333"></circle><circle cx="29" cy="18" r="2" fill="#333"></circle><circle cx="27" cy="34" r="2" fill="#333"></circle><path d="M33 7.913c2.167-2 7.392-5.608 10-3 2.608 2.607 0 5-2 5.5-2.5.625-4.2 2.3-5 3.5M15.096 7.913c-2.166-2-7.392-5.608-10-3-2.608 2.607 0 5 2 5.5 2.5.625 4.2 2.3 5 3.5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m12 25 1 9.5M36 25l-1 9.5" stroke="#333" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconCattle',
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

    const iconClass = computed(() => [name, `${name}-cattle`, { [`${name}-spin`]: props.spin }]);

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
