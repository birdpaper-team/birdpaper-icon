import type { App } from 'vue';
import _IconGlobeLine from './icon-globe-line.vue';

const IconGlobeLine = Object.assign(_IconGlobeLine, {
  install: (app: App) => {
    app.component(_IconGlobeLine.name, _IconGlobeLine);
  }
});

export default IconGlobeLine;