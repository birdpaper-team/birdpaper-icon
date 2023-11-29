import type { App } from 'vue';
import _IconKeynoteLine from './icon-keynote-line.vue';

const IconKeynoteLine = Object.assign(_IconKeynoteLine, {
  install: (app: App) => {
    app.component(_IconKeynoteLine.name, _IconKeynoteLine);
  }
});

export default IconKeynoteLine;