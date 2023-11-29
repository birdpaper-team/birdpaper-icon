import type { App } from 'vue';
import _IconLung from './icon-lung.vue';

const IconLung = Object.assign(_IconLung, {
  install: (app: App) => {
    app.component(_IconLung.name, _IconLung);
  }
});

export default IconLung;