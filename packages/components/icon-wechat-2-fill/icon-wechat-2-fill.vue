<template>
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5.458 18.185C3.359 16.677 2 14.4 2 11.908c0-4.585 4.475-8.308 10-8.308s10 3.723 10 8.308c0 4.584-4.475 8.307-10 8.307a11.36 11.36 0 0 1-3.272-.461c-.092-.03-.216-.03-.308-.03-.185 0-.37.06-.525.153l-2.191 1.262c-.062.03-.124.061-.186.061a.342.342 0 0 1-.339-.338c0-.093.03-.154.062-.246.03-.031.308-1.047.463-1.662 0-.062.03-.154.03-.215 0-.247-.092-.431-.277-.554Zm3.21-7.673c.717 0 1.285-.569 1.285-1.286 0-.718-.568-1.286-1.285-1.286-.718 0-1.285.568-1.285 1.286 0 .717.567 1.285 1.285 1.285Zm6.666 0c.718 0 1.285-.569 1.285-1.286 0-.718-.567-1.286-1.285-1.286-.717 0-1.285.568-1.285 1.286 0 .717.568 1.285 1.285 1.285Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWechat2Fill',
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
