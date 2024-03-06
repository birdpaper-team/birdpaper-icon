import type { App } from 'vue';
import _IconGoblet2Fill from './icon-goblet-2-fill.vue';

const IconGoblet2Fill = Object.assign(_IconGoblet2Fill, {
  install: (app: App) => {
    app.component(_IconGoblet2Fill.name, _IconGoblet2Fill);
  }
});

export default IconGoblet2Fill;