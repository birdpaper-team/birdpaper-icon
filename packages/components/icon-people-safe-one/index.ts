import type { App } from 'vue';
import _IconPeopleSafeOne from './icon-people-safe-one.vue';

const IconPeopleSafeOne = Object.assign(_IconPeopleSafeOne, {
  install: (app: App) => {
    app.component(_IconPeopleSafeOne.name, _IconPeopleSafeOne);
  }
});

export default IconPeopleSafeOne;