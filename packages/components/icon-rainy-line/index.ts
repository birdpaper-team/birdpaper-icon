import type { App } from 'vue';
import _IconRainyLine from './icon-rainy-line.vue';

const IconRainyLine = Object.assign(_IconRainyLine, {
  install: (app: App) => {
    app.component(_IconRainyLine.name, _IconRainyLine);
  }
});

export default IconRainyLine;