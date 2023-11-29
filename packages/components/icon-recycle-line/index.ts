import type { App } from 'vue';
import _IconRecycleLine from './icon-recycle-line.vue';

const IconRecycleLine = Object.assign(_IconRecycleLine, {
  install: (app: App) => {
    app.component(_IconRecycleLine.name, _IconRecycleLine);
  }
});

export default IconRecycleLine;