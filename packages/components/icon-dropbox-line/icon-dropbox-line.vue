<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="m8.65 17.26 3.392 2.161 3.392-2.16 1.86 1.184-5.252 3.346-5.252-3.346 1.86-1.184Zm-.876-8.28 2.393-1.553L7.74 5.853 5.286 7.37l2.488 1.61Zm1.84 1.19 2.39 1.548 2.391-1.547-2.39-1.552-2.392 1.551Zm4.231 2.74 2.424 1.568 2.45-1.502-2.486-1.613-2.388 1.546Zm-1.84-6.675 4.236-2.749 6.225 3.844-4.393 2.843 4.394 2.85-6.227 3.819-4.235-2.742-4.236 2.742-6.229-3.818 4.395-2.852L1.543 7.33l6.225-3.844 4.236 2.75Zm1.836 1.192 2.394 1.553 2.488-1.61-2.455-1.517-2.427 1.574Zm-3.677 5.482-2.39-1.546-2.485 1.613 2.451 1.502 2.424-1.569Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDropboxLine',
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

    const iconClass = computed(() => [name, `${name}-dropbox-line`, { [`${name}-spin`]: props.spin }]);

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
