import type { App } from 'vue';
import _IconGoblet from './icon-goblet.vue';

const IconGoblet = Object.assign(_IconGoblet, {
  install: (app: App) => {
    app.component(_IconGoblet.name, _IconGoblet);
  }
});

export default IconGoblet;