import type { App } from 'vue';
import _IconClothesPantsShort from './icon-clothes-pants-short.vue';

const IconClothesPantsShort = Object.assign(_IconClothesPantsShort, {
  install: (app: App) => {
    app.component(_IconClothesPantsShort.name, _IconClothesPantsShort);
  }
});

export default IconClothesPantsShort;