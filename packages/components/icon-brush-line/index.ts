import type { App } from 'vue';
import _IconBrushLine from './icon-brush-line.vue';

const IconBrushLine = Object.assign(_IconBrushLine, {
  install: (app: App) => {
    app.component(_IconBrushLine.name, _IconBrushLine);
  }
});

export default IconBrushLine;