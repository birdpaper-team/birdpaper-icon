import type { App } from 'vue';
import _IconBoxingLine from './icon-boxing-line.vue';

const IconBoxingLine = Object.assign(_IconBoxingLine, {
  install: (app: App) => {
    app.component(_IconBoxingLine.name, _IconBoxingLine);
  }
});

export default IconBoxingLine;