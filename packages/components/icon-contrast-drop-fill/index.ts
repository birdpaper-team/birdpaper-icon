import type { App } from 'vue';
import _IconContrastDropFill from './icon-contrast-drop-fill.vue';

const IconContrastDropFill = Object.assign(_IconContrastDropFill, {
  install: (app: App) => {
    app.component(_IconContrastDropFill.name, _IconContrastDropFill);
  }
});

export default IconContrastDropFill;