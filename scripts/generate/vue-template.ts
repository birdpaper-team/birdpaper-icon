export const getVue3Component = ({ name, componentName, svgHtml }: { name: string; componentName: string; svgHtml: string }) =>
  // language=Vue
  // prettier-ignore
  `<template>
  ${svgHtml}
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "${componentName}"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, \`\${name}-${componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}\`, { [\`\${name}-spin\`]: props.spin }]);

const innerStyle = computed(() => {
  const styles: CSSProperties = {
    width: props.size,
    height: props.size,
    transform: props.rotate ? \`rotate(\${props.rotate}deg)\` : undefined,
  };

  return styles;
});

const onClick = (ev: MouseEvent) => emits("click", ev);
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
