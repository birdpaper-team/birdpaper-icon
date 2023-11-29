import type { App } from 'vue';
import _IconPeoplePlus from './icon-people-plus.vue';

const IconPeoplePlus = Object.assign(_IconPeoplePlus, {
  install: (app: App) => {
    app.component(_IconPeoplePlus.name, _IconPeoplePlus);
  }
});

export default IconPeoplePlus;