import type { App } from 'vue';
import _IconPresentationFill from './icon-presentation-fill.vue';

const IconPresentationFill = Object.assign(_IconPresentationFill, {
  install: (app: App) => {
    app.component(_IconPresentationFill.name, _IconPresentationFill);
  }
});

export default IconPresentationFill;