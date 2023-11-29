<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5.378 4.514a9.962 9.962 0 0 1 6.627-2.511c5.523 0 10 4.477 10 10a9.954 9.954 0 0 1-1.793 5.715l-2.707-5.715h2.5A8 8 0 0 0 6.279 6.416l-.9-1.902Zm13.253 14.978a9.962 9.962 0 0 1-6.626 2.51c-5.523 0-10-4.476-10-10 0-2.124.663-4.094 1.793-5.714l2.707 5.715h-2.5A8 8 0 0 0 17.73 17.59l.901 1.902Zm-5.626-5.954h3v2h-3v2h-2v-2h-3v-2h3v-1h-3v-2h2.586l-2.122-2.12 1.415-1.415 2.12 2.121 2.122-2.121 1.414 1.414-2.12 2.122h2.585v2h-3v1Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconExchangeCnyFill',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    fill: { type: String, default: "#333" },
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

    const iconClass = computed(() => [name, `${name}-exchange-cny-fill`, { [`${name}-spin`]: props.spin }]);

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
