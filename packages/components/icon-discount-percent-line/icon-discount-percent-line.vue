<template>
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M10.054 2.094a3 3 0 0 1 3.892 0l1.348 1.149a1 1 0 0 0 .57.236l1.765.14a3 3 0 0 1 2.752 2.752l.14 1.766a1 1 0 0 0 .236.569l1.149 1.348a3 3 0 0 1 0 3.892l-1.149 1.348a1 1 0 0 0-.236.569l-.14 1.765a3 3 0 0 1-2.752 2.752l-1.766.14a1 1 0 0 0-.569.237l-1.348 1.148a3 3 0 0 1-3.892 0l-1.348-1.148a1 1 0 0 0-.569-.236l-1.765-.141a3 3 0 0 1-2.752-2.752l-.14-1.765a1 1 0 0 0-.237-.57l-1.148-1.348a3 3 0 0 1 0-3.891l1.148-1.348a1 1 0 0 0 .236-.57l.141-1.765A3 3 0 0 1 6.372 3.62l1.765-.14a1 1 0 0 0 .57-.236l1.347-1.149Zm2.595 1.522a1 1 0 0 0-1.297 0l-1.348 1.15a3 3 0 0 1-1.708.706l-1.765.141a1 1 0 0 0-.917.917l-.141 1.766a3 3 0 0 1-.707 1.707l-1.15 1.348a1 1 0 0 0 0 1.297l1.15 1.348a3 3 0 0 1 .707 1.707l.14 1.766a1 1 0 0 0 .918.917l1.765.141a3 3 0 0 1 1.708.707l1.348 1.15a1 1 0 0 0 1.297 0l1.348-1.15a3 3 0 0 1 1.707-.707l1.765-.14a1 1 0 0 0 .918-.918l.14-1.766c.05-.629.298-1.226.708-1.707l1.149-1.348a1 1 0 0 0 0-1.297l-1.15-1.348a3 3 0 0 1-.706-1.707l-.141-1.766a1 1 0 0 0-.918-.917l-1.765-.14a3 3 0 0 1-1.707-.708l-1.348-1.149Zm2.18 4.141 1.414 1.414-7.071 7.072-1.415-1.415 7.071-7.07Zm-4.597 2.475a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.121Zm3.536 5.657a1.5 1.5 0 1 0 2.121-2.121 1.5 1.5 0 0 0-2.121 2.12Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDiscountPercentLine',
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

    const iconClass = computed(() => [name, `${name}-discount-percent-line`, { [`${name}-spin`]: props.spin }]);

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
