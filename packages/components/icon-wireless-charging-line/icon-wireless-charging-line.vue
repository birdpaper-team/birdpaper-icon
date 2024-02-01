<template>
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="m3.929 4.929 1.414 1.414A7.975 7.975 0 0 0 3 12c0 2.21.895 4.21 2.343 5.657L3.93 19.07A9.969 9.969 0 0 1 1 12.001a9.969 9.969 0 0 1 2.929-7.072Zm16.142 0A9.968 9.968 0 0 1 23 12a9.968 9.968 0 0 1-2.929 7.071l-1.414-1.414A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-2.342-5.656L20.07 4.93ZM13 5v6h3l-5 8v-6H8l5-8ZM6.757 7.757l1.415 1.415A3.987 3.987 0 0 0 7 12c0 1.105.448 2.105 1.172 2.829l-1.415 1.414A5.981 5.981 0 0 1 5 12c0-1.657.672-3.157 1.757-4.243Zm10.487.001A5.981 5.981 0 0 1 19 12a5.981 5.981 0 0 1-1.757 4.243l-1.415-1.414A3.987 3.987 0 0 0 17 12a3.987 3.987 0 0 0-1.17-2.827l1.414-1.415Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWirelessChargingLine',
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

    const iconClass = computed(() => [name, `${name}-wireless-charging-line`, { [`${name}-spin`]: props.spin }]);

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
