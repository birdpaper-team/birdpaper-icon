<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M19 16c.196-2.143 1.235-7.143 5-10 1.372 1.667 4.53 6 5 10" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.752 42C15.282 40.545-.3 31.31 5.12 6c7.152 1.636 20.892 11.127 18.633 36Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.248 42C32.718 40.545 48.3 31.31 42.88 6c-7.152 1.636-20.892 11.127-18.633 36Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconLotus',
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

    const iconClass = computed(() => [name, `${name}-lotus`, { [`${name}-spin`]: props.spin }]);

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
