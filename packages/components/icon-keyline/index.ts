import type { App } from 'vue';
import _IconKeyline from './icon-keyline.vue';

const IconKeyline = Object.assign(_IconKeyline, {
  install: (app: App) => {
    app.component(_IconKeyline.name, _IconKeyline);
  }
});

export default IconKeyline;