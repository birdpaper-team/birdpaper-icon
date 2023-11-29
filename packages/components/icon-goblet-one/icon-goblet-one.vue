<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><g clip-path="url(#a)" :stroke="color" stroke-width="4"><path d="m5.736 24.121 4.95 4.95c5.077 5.077 13.308 5.077 18.385 0v0c5.077-5.077 5.077-13.308 0-18.385l-4.95-4.95" stroke-linecap="round" stroke-linejoin="round"></path><path d="m30 30 6 6" stroke-miterlimit="2" stroke-linecap="round" stroke-linejoin="round"></path><ellipse cx="14" cy="14" rx="13" ry="7" transform="rotate(-45 14 14)"></ellipse><ellipse cx="38" cy="38" rx="6" ry="3" transform="rotate(-45 38 38)"></ellipse></g><defs><clipPath id="a"><path :fill="color" d="M0 0h48v48H0z"></path></clipPath></defs></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconGobletOne',
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

    const iconClass = computed(() => [name, `${name}-goblet-one`, { [`${name}-spin`]: props.spin }]);

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
