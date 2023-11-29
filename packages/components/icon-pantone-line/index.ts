import type { App } from 'vue';
import _IconPantoneLine from './icon-pantone-line.vue';

const IconPantoneLine = Object.assign(_IconPantoneLine, {
  install: (app: App) => {
    app.component(_IconPantoneLine.name, _IconPantoneLine);
  }
});

export default IconPantoneLine;