import type { App } from 'vue';
import _IconSeedlingLine from './icon-seedling-line.vue';

const IconSeedlingLine = Object.assign(_IconSeedlingLine, {
  install: (app: App) => {
    app.component(_IconSeedlingLine.name, _IconSeedlingLine);
  }
});

export default IconSeedlingLine;