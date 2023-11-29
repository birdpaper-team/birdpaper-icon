<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M24.489 8.398c-.243-.04-.215-.398.031-.398H39.5a.5.5 0 0 1 .5.5v14.98c0 .246-.359.274-.398.031l-1.966-12.317a1 1 0 0 0-.83-.83L24.489 8.399ZM6.489 26.398c-.243-.04-.215-.398.032-.398H21.5a.5.5 0 0 1 .5.5v14.98c0 .246-.359.274-.398.031l-1.966-12.317a1 1 0 0 0-.83-.83L6.489 26.398ZM15.489 17.398c-.243-.04-.215-.398.031-.398H30.5a.5.5 0 0 1 .5.5v14.98c0 .246-.359.274-.398.031L28.75 20.91a2 2 0 0 0-1.66-1.66L15.49 17.398Z" fill="#333" stroke="#333" stroke-width="4" stroke-linecap="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFilterOne',
  props: {
    /** 图标尺寸 */
    size: { type: String },
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

    const iconClass = computed(() => [name, `${name}-filter-one`, { [`${name}-spin`]: props.spin }]);

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
