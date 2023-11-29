import type { App } from 'vue';
import _IconPeoplePlusOne from './icon-people-plus-one.vue';

const IconPeoplePlusOne = Object.assign(_IconPeoplePlusOne, {
  install: (app: App) => {
    app.component(_IconPeoplePlusOne.name, _IconPeoplePlusOne);
  }
});

export default IconPeoplePlusOne;