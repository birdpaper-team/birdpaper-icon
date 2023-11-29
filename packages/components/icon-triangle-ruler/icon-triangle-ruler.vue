<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M44 44 4 4v40h40Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M13 35h12L13 23v12Z"></path><path clip-rule="evenodd" d="M13 35h12L13 23v12Z"></path><path clip-rule="evenodd" d="M13 35h12L13 23v12Z"></path><path clip-rule="evenodd" d="M13 35h12L13 23v12Z"></path><path clip-rule="evenodd" d="M13 35h12L13 23v12Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M13 35h12L13 23v12Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M13 35h12L13 23v12Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M13 35h12L13 23v12Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 44v-3M24 44v-3M18 44v-3M12 44v-3M4 36h3M4 30h3M4 24h3M4 18h3" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTriangleRuler',
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

    const iconClass = computed(() => [name, `${name}-triangle-ruler`, { [`${name}-spin`]: props.spin }]);

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
