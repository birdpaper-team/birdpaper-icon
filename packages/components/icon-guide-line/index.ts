import type { App } from 'vue';
import _IconGuideLine from './icon-guide-line.vue';

const IconGuideLine = Object.assign(_IconGuideLine, {
  install: (app: App) => {
    app.component(_IconGuideLine.name, _IconGuideLine);
  }
});

export default IconGuideLine;