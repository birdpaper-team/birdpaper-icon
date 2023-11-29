import type { App } from 'vue';
import _IconLifebuoyLine from './icon-lifebuoy-line.vue';

const IconLifebuoyLine = Object.assign(_IconLifebuoyLine, {
  install: (app: App) => {
    app.component(_IconLifebuoyLine.name, _IconLifebuoyLine);
  }
});

export default IconLifebuoyLine;