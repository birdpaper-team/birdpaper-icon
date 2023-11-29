import type { App } from 'vue';
import _IconMailVolumeLine from './icon-mail-volume-line.vue';

const IconMailVolumeLine = Object.assign(_IconMailVolumeLine, {
  install: (app: App) => {
    app.component(_IconMailVolumeLine.name, _IconMailVolumeLine);
  }
});

export default IconMailVolumeLine;