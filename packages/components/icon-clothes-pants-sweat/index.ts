import type { App } from 'vue';
import _IconClothesPantsSweat from './icon-clothes-pants-sweat.vue';

const IconClothesPantsSweat = Object.assign(_IconClothesPantsSweat, {
  install: (app: App) => {
    app.component(_IconClothesPantsSweat.name, _IconClothesPantsSweat);
  }
});

export default IconClothesPantsSweat;