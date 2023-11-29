<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M8.52 13.846c-1.04 0-1.888-.945-1.888-2.102 0-1.156.827-2.1 1.889-2.1 1.05 0 1.91.944 1.889 2.1 0 1.157-.839 2.102-1.89 2.102Zm6.974 0c-1.04 0-1.89-.945-1.89-2.102 0-1.156.829-2.1 1.89-2.1 1.05 0 1.91.944 1.89 2.1 0 1.157-.829 2.102-1.89 2.102Zm-5.369-9.523-.308-.563-.634.105a16.353 16.353 0 0 0-4.158 1.28l-.228.106-.142.209c-2.613 3.854-3.33 7.648-2.975 11.376l.039.406.33.24a16.909 16.909 0 0 0 5.078 2.543l.79.242L9.03 17.55c1.91.472 4.03.473 5.939 0l1.107 2.718.79-.243a16.822 16.822 0 0 0 5.08-2.544l.327-.238.04-.402c.436-4.32-.697-8.084-2.958-11.385l-.142-.207-.228-.104a16.575 16.575 0 0 0-4.154-1.28l-.618-.103-.314.541c-.088.151-.177.321-.263.494a15.878 15.878 0 0 0-3.263 0 14.12 14.12 0 0 0-.248-.474ZM6.715 16.61c.197.114.405.226.61.328l-.449 1.096a15.022 15.022 0 0 1-3.428-1.778c-.225-3.139.413-6.305 2.564-9.57a14.551 14.551 0 0 1 2.824-.913c.06.125.116.247.162.356l.273.643.692-.101a14.107 14.107 0 0 1 4.09 0l.69.1.272-.642c.047-.112.102-.234.16-.356.977.21 1.923.519 2.828.915 1.875 2.82 2.821 5.966 2.546 9.567a14.905 14.905 0 0 1-3.43 1.778l-.445-1.094c.206-.103.414-.215.613-.329.49-.282 1.017-.634 1.353-.97l-1.28-1.28c-.163.164-.523.42-.977.682-.444.256-.885.463-1.167.556-2.003.663-4.428.663-6.432 0-.281-.093-.722-.3-1.166-.556-.454-.261-.814-.518-.978-.682l-1.28 1.28c.337.336.864.688 1.354.97Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDiscordLine',
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

    const iconClass = computed(() => [name, `${name}-discord-line`, { [`${name}-spin`]: props.spin }]);

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
