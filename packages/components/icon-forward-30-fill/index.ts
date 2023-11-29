import type { App } from 'vue';
import _IconForward30Fill from './icon-forward-30-fill.vue';

const IconForward30Fill = Object.assign(_IconForward30Fill, {
  install: (app: App) => {
    app.component(_IconForward30Fill.name, _IconForward30Fill);
  }
});

export default IconForward30Fill;