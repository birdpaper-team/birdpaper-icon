import type { App } from 'vue';
import _IconGopro from './icon-gopro.vue';

const IconGopro = Object.assign(_IconGopro, {
  install: (app: App) => {
    app.component(_IconGopro.name, _IconGopro);
  }
});

export default IconGopro;