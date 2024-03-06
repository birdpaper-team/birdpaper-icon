import type { App } from 'vue';
import _IconPoliceBadgeLine from './icon-police-badge-line.vue';

const IconPoliceBadgeLine = Object.assign(_IconPoliceBadgeLine, {
  install: (app: App) => {
    app.component(_IconPoliceBadgeLine.name, _IconPoliceBadgeLine);
  }
});

export default IconPoliceBadgeLine;