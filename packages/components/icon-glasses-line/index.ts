import type { App } from 'vue';
import _IconGlassesLine from './icon-glasses-line.vue';

const IconGlassesLine = Object.assign(_IconGlassesLine, {
  install: (app: App) => {
    app.component(_IconGlassesLine.name, _IconGlassesLine);
  }
});

export default IconGlassesLine;