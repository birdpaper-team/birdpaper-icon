import type { App } from 'vue';
import _IconDumbbelLine from './icon-dumbbel-line.vue';

const IconDumbbelLine = Object.assign(_IconDumbbelLine, {
  install: (app: App) => {
    app.component(_IconDumbbelLine.name, _IconDumbbelLine);
  }
});

export default IconDumbbelLine;