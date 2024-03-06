import type { App } from 'vue';
import _IconPoliceBadgeFill from './icon-police-badge-fill.vue';

const IconPoliceBadgeFill = Object.assign(_IconPoliceBadgeFill, {
  install: (app: App) => {
    app.component(_IconPoliceBadgeFill.name, _IconPoliceBadgeFill);
  }
});

export default IconPoliceBadgeFill;