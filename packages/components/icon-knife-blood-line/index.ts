import type { App } from 'vue';
import _IconKnifeBloodLine from './icon-knife-blood-line.vue';

const IconKnifeBloodLine = Object.assign(_IconKnifeBloodLine, {
  install: (app: App) => {
    app.component(_IconKnifeBloodLine.name, _IconKnifeBloodLine);
  }
});

export default IconKnifeBloodLine;