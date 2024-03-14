import type { App } from 'vue';
import _IconIdCardLine from './icon-id-card-line.vue';

const IconIdCardLine = Object.assign(_IconIdCardLine, {
  install: (app: App) => {
    app.component(_IconIdCardLine.name, _IconIdCardLine);
  }
});

export default IconIdCardLine;