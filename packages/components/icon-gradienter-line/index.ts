import type { App } from 'vue';
import _IconGradienterLine from './icon-gradienter-line.vue';

const IconGradienterLine = Object.assign(_IconGradienterLine, {
  install: (app: App) => {
    app.component(_IconGradienterLine.name, _IconGradienterLine);
  }
});

export default IconGradienterLine;