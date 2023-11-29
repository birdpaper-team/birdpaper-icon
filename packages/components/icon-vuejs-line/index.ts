import type { App } from 'vue';
import _IconVuejsLine from './icon-vuejs-line.vue';

const IconVuejsLine = Object.assign(_IconVuejsLine, {
  install: (app: App) => {
    app.component(_IconVuejsLine.name, _IconVuejsLine);
  }
});

export default IconVuejsLine;