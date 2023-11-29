import type { App } from 'vue';
import _IconClothesBriefs from './icon-clothes-briefs.vue';

const IconClothesBriefs = Object.assign(_IconClothesBriefs, {
  install: (app: App) => {
    app.component(_IconClothesBriefs.name, _IconClothesBriefs);
  }
});

export default IconClothesBriefs;