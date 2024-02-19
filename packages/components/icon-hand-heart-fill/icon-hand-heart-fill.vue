<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.335 11.502h2.17a4.5 4.5 0 0 1 4.5 4.5H9.004v1h8v-1a5.578 5.578 0 0 0-.885-3h2.886a5 5 0 0 1 4.516 2.852c-2.365 3.12-6.194 5.149-10.516 5.149-2.761 0-5.1-.591-7-1.625v-9.304a6.966 6.966 0 0 1 3.33 1.428Zm-5.33-2.5a1 1 0 0 1 .993.884l.007.116v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h2Zm9.646-5.424.354.354.353-.354a2.5 2.5 0 0 1 3.536 3.535l-3.89 3.89-3.888-3.89a2.5 2.5 0 1 1 3.535-3.535Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconHandHeartFill',
  props: {
    /** 图标尺寸 */
    size: { type: String, default: "18px" },
    /** 颜色 */
    fill: { type: String, default: "#595959" },
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

    const iconClass = computed(() => [name, `${name}-hand-heart-fill`, { [`${name}-spin`]: props.spin }]);

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
