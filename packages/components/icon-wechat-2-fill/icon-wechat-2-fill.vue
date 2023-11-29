<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5.458 18.184C3.359 16.676 2 14.4 2 11.907c0-4.584 4.475-8.307 10-8.307s10 3.723 10 8.307c0 4.585-4.475 8.308-10 8.308-1.142 0-2.253-.154-3.272-.462-.092-.03-.216-.03-.308-.03-.185 0-.37.061-.525.154l-2.191 1.261c-.062.03-.124.062-.186.062a.342.342 0 0 1-.339-.339c0-.092.03-.154.062-.246.03-.03.308-1.046.463-1.662 0-.061.03-.153.03-.215 0-.246-.092-.43-.277-.554Zm3.21-7.673c.717 0 1.285-.568 1.285-1.286 0-.717-.568-1.286-1.285-1.286-.718 0-1.285.569-1.285 1.286 0 .718.567 1.286 1.285 1.286Zm6.666 0c.718 0 1.285-.568 1.285-1.286 0-.717-.567-1.286-1.285-1.286-.717 0-1.285.569-1.285 1.286 0 .718.568 1.286 1.285 1.286Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWechat2Fill',
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

    const iconClass = computed(() => [name, `${name}-wechat-2-fill`, { [`${name}-spin`]: props.spin }]);

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
