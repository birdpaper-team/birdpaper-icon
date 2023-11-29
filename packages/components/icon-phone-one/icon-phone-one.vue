<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><rect x="5" y="5" width="38" height="38" rx="3" stroke="#333" stroke-width="4"></rect><path stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M11 12h8v24h-8zM25 12h12v6H25z"></path><circle cx="25" cy="24" r="2" fill="#333"></circle><circle cx="25" cy="30" r="2" fill="#333"></circle><circle cx="25" cy="36" r="2" fill="#333"></circle><circle cx="31" cy="24" r="2" fill="#333"></circle><circle cx="31" cy="30" r="2" fill="#333"></circle><circle cx="31" cy="36" r="2" fill="#333"></circle><circle cx="37" cy="24" r="2" fill="#333"></circle><circle cx="37" cy="30" r="2" fill="#333"></circle><circle cx="37" cy="36" r="2" fill="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPhoneOne',
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

    const iconClass = computed(() => [name, `${name}-phone-one`, { [`${name}-spin`]: props.spin }]);

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
