import type { App } from 'vue';
import _IconArmchairLine from './icon-armchair-line.vue';

const IconArmchairLine = Object.assign(_IconArmchairLine, {
  install: (app: App) => {
    app.component(_IconArmchairLine.name, _IconArmchairLine);
  }
});

export default IconArmchairLine;