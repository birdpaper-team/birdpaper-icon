<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="m4.929 2.929 1.414 1.414A7.975 7.975 0 0 0 4 10c0 2.209.895 4.209 2.343 5.657L4.93 17.07A9.969 9.969 0 0 1 2 10a9.969 9.969 0 0 1 2.929-7.071Zm14.142 0A9.969 9.969 0 0 1 22 9.999a9.969 9.969 0 0 1-2.929 7.072l-1.414-1.414A7.975 7.975 0 0 0 20 10c0-2.21-.895-4.21-2.343-5.657l1.414-1.414ZM7.757 5.757l1.415 1.414A3.987 3.987 0 0 0 8 10c0 1.104.448 2.104 1.172 2.828l-1.415 1.414A5.981 5.981 0 0 1 6 10c0-1.657.672-3.157 1.757-4.243Zm8.486 0A5.981 5.981 0 0 1 18 10a5.981 5.981 0 0 1-1.757 4.242l-1.415-1.414A3.987 3.987 0 0 0 16 10a3.987 3.987 0 0 0-1.172-2.829l1.415-1.414ZM12 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-1 2h2v8h-2v-8Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconBroadcastLine',
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

    const iconClass = computed(() => [name, `${name}-broadcast-line`, { [`${name}-spin`]: props.spin }]);

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
