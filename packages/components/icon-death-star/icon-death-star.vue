<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><circle cx="24" cy="24" r="20" stroke="#333" stroke-width="4"></circle><path d="M5 25h39" stroke="#333" stroke-width="4" stroke-linecap="round"></path><circle cx="19" cy="15" r="4" stroke="#333" stroke-width="4"></circle><path d="M31 31h12M34 17h8M25 37h14" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="M40 11.998c2.512 3.343 4 7.499 4 12.002 0 7.808-4.475 14.572-11 17.865M4.4 20c-.262 1.292-.4 2.63-.4 4 0 1.727.219 3.402.63 5" stroke="#333" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDeathStar',
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

    const iconClass = computed(() => [name, `${name}-death-star`, { [`${name}-spin`]: props.spin }]);

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
