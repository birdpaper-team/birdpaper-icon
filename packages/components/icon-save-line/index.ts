import type { App } from 'vue';
import _IconSaveLine from './icon-save-line.vue';

const IconSaveLine = Object.assign(_IconSaveLine, {
  install: (app: App) => {
    app.component(_IconSaveLine.name, _IconSaveLine);
  }
});

export default IconSaveLine;