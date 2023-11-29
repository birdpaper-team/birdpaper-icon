import type { App } from 'vue';
import _IconHeartAddLine from './icon-heart-add-line.vue';

const IconHeartAddLine = Object.assign(_IconHeartAddLine, {
  install: (app: App) => {
    app.component(_IconHeartAddLine.name, _IconHeartAddLine);
  }
});

export default IconHeartAddLine;