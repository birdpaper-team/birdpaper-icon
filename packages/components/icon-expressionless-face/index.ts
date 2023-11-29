import type { App } from 'vue';
import _IconExpressionlessFace from './icon-expressionless-face.vue';

const IconExpressionlessFace = Object.assign(_IconExpressionlessFace, {
  install: (app: App) => {
    app.component(_IconExpressionlessFace.name, _IconExpressionlessFace);
  }
});

export default IconExpressionlessFace;