import type { App } from 'vue';
import _IconPeopleMinus from './icon-people-minus.vue';

const IconPeopleMinus = Object.assign(_IconPeopleMinus, {
  install: (app: App) => {
    app.component(_IconPeopleMinus.name, _IconPeopleMinus);
  }
});

export default IconPeopleMinus;