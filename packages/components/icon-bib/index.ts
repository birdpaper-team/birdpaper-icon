import type { App } from 'vue';
import _IconBib from './icon-bib.vue';

const IconBib = Object.assign(_IconBib, {
  install: (app: App) => {
    app.component(_IconBib.name, _IconBib);
  }
});

export default IconBib;