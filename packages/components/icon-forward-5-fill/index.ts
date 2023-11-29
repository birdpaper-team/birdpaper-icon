import type { App } from 'vue';
import _IconForward5Fill from './icon-forward-5-fill.vue';

const IconForward5Fill = Object.assign(_IconForward5Fill, {
  install: (app: App) => {
    app.component(_IconForward5Fill.name, _IconForward5Fill);
  }
});

export default IconForward5Fill;