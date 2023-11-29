<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M19 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M32 22h12-12Z"></path><path d="M32 22h12" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M32 16h12-12Z"></path><path d="M32 16h12" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M35 13v12-12Z"></path><path d="M35 13v12" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path clip-rule="evenodd" d="M41 13v12-12Z"></path><path d="M41 13v12M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8Z" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconPeopleUnknown',
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

    const iconClass = computed(() => [name, `${name}-people-unknown`, { [`${name}-spin`]: props.spin }]);

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
