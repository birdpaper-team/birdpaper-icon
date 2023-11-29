import type { App } from 'vue';
import _IconEraserFill from './icon-eraser-fill.vue';

const IconEraserFill = Object.assign(_IconEraserFill, {
  install: (app: App) => {
    app.component(_IconEraserFill.name, _IconEraserFill);
  }
});

export default IconEraserFill;