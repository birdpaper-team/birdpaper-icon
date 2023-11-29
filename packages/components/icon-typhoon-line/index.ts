import type { App } from 'vue';
import _IconTyphoonLine from './icon-typhoon-line.vue';

const IconTyphoonLine = Object.assign(_IconTyphoonLine, {
  install: (app: App) => {
    app.component(_IconTyphoonLine.name, _IconTyphoonLine);
  }
});

export default IconTyphoonLine;