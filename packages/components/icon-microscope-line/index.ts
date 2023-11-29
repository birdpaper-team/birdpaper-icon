import type { App } from 'vue';
import _IconMicroscopeLine from './icon-microscope-line.vue';

const IconMicroscopeLine = Object.assign(_IconMicroscopeLine, {
  install: (app: App) => {
    app.component(_IconMicroscopeLine.name, _IconMicroscopeLine);
  }
});

export default IconMicroscopeLine;