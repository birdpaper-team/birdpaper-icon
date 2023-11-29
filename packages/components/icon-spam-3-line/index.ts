import type { App } from 'vue';
import _IconSpam3Line from './icon-spam-3-line.vue';

const IconSpam3Line = Object.assign(_IconSpam3Line, {
  install: (app: App) => {
    app.component(_IconSpam3Line.name, _IconSpam3Line);
  }
});

export default IconSpam3Line;