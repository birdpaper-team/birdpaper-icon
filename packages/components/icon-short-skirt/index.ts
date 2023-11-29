import type { App } from 'vue';
import _IconShortSkirt from './icon-short-skirt.vue';

const IconShortSkirt = Object.assign(_IconShortSkirt, {
  install: (app: App) => {
    app.component(_IconShortSkirt.name, _IconShortSkirt);
  }
});

export default IconShortSkirt;