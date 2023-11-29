import type { App } from 'vue';
import _IconOutlet2Fill from './icon-outlet-2-fill.vue';

const IconOutlet2Fill = Object.assign(_IconOutlet2Fill, {
  install: (app: App) => {
    app.component(_IconOutlet2Fill.name, _IconOutlet2Fill);
  }
});

export default IconOutlet2Fill;