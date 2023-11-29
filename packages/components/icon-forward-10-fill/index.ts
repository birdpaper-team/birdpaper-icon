import type { App } from 'vue';
import _IconForward10Fill from './icon-forward-10-fill.vue';

const IconForward10Fill = Object.assign(_IconForward10Fill, {
  install: (app: App) => {
    app.component(_IconForward10Fill.name, _IconForward10Fill);
  }
});

export default IconForward10Fill;