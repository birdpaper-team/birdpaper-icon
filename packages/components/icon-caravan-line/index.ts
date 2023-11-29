import type { App } from 'vue';
import _IconCaravanLine from './icon-caravan-line.vue';

const IconCaravanLine = Object.assign(_IconCaravanLine, {
  install: (app: App) => {
    app.component(_IconCaravanLine.name, _IconCaravanLine);
  }
});

export default IconCaravanLine;