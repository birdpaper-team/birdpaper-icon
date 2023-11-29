import type { App } from 'vue';
import _IconEraserLine from './icon-eraser-line.vue';

const IconEraserLine = Object.assign(_IconEraserLine, {
  install: (app: App) => {
    app.component(_IconEraserLine.name, _IconEraserLine);
  }
});

export default IconEraserLine;