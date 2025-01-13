export const getIconVueComponent = ({ name, componentName, svgHtml }: { name: string; componentName: string; svgHtml: string }) =>
  // language=Vue
  // prettier-ignore
  `<template>
  ${svgHtml}
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: '${componentName}',
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

    const iconClass = computed(() => [name, \`\${name}-${name.replace('icon-', '')}\`, { [\`\${name}-spin\`]: props.spin }]);

    const innerStyle = computed(() => {
      const styles: CSSProperties = {};
        props.size && (styles.width = props.size);
        props.size && (styles.height = props.size);
        props.rotate && (styles.transform = \`rotate(\${props.rotate}deg)\`);

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
`;

export const getComponentIndex = ({ name, componentName }: { name: string; componentName: string }) => {
  return `import _${componentName} from './${name}.vue';
  
  export const ${componentName} = _${componentName}
  
  export type ${componentName}Instance = InstanceType<typeof ${componentName}>;
  export default ${componentName};`;
};

export const getType = ({ exports }: { exports: string[] }) =>
  `// @ts-nocheck

declare module 'vue' {
  export interface GlobalComponents {
${exports.map((item) => `${" ".repeat(4)}${item}`).join("\n")}
  }
}

export {};
`;
