<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M20.005 13.003v7a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-7h16Zm-5.5-11a3.5 3.5 0 0 1 3.163 5.001l3.337-.001a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1l3.337.001a3.5 3.5 0 0 1 5.664-3.95 3.48 3.48 0 0 1 2.499-1.051Zm-5 2a1.5 1.5 0 0 0-.145 2.993l.145.007h1.5v-1.5A1.5 1.5 0 0 0 9.649 4.01l-.144-.007Zm5 0-.145.007a1.5 1.5 0 0 0-1.348 1.348l-.007.145v1.5h1.5l.144-.007a1.5 1.5 0 0 0 0-2.986l-.144-.007Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconGift2Fill',
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

    const iconClass = computed(() => [name, `${name}-gift-2-fill`, { [`${name}-spin`]: props.spin }]);

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
