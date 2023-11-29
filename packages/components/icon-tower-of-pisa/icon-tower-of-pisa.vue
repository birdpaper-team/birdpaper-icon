<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><g clip-path="url(#a)" stroke="#333" stroke-width="4"><path d="M4 44h40" stroke-linecap="round" stroke-linejoin="round"></path><path d="m21.25 7.474 15.455 4.142L28 44H11L21.25 7.474Z" stroke-linejoin="round"></path><path d="m19.317 6.957 19.319 5.176M16.21 18.548l19.32 5.176" stroke-linecap="round" stroke-linejoin="round"></path><path d="m25.482 20.932 1.036-3.864" stroke-linecap="round"></path><path d="m13.105 30.14 19.319 5.175" stroke-linecap="round" stroke-linejoin="round"></path><path d="m22.482 31.932 1.036-3.864" stroke-linecap="round"></path><rect x="25.183" y="4.387" width="10" height="4" rx="1" transform="rotate(15 25.183 4.387)" stroke-linecap="round" stroke-linejoin="round"></rect><path d="m19.482 42.932 1.036-3.864" stroke-linecap="round"></path></g><defs><clipPath id="a"><path fill="#333" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTowerOfPisa',
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

    const iconClass = computed(() => [name, `${name}-tower-of-pisa`, { [`${name}-spin`]: props.spin }]);

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
