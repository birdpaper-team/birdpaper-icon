import type { App } from 'vue';
import _IconSpam3Fill from './icon-spam-3-fill.vue';

const IconSpam3Fill = Object.assign(_IconSpam3Fill, {
  install: (app: App) => {
    app.component(_IconSpam3Fill.name, _IconSpam3Fill);
  }
});

export default IconSpam3Fill;