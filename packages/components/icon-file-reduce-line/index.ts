import type { App } from 'vue';
import _IconFileReduceLine from './icon-file-reduce-line.vue';

const IconFileReduceLine = Object.assign(_IconFileReduceLine, {
  install: (app: App) => {
    app.component(_IconFileReduceLine.name, _IconFileReduceLine);
  }
});

export default IconFileReduceLine;