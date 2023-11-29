import type { App } from 'vue';
import _IconPeopleSearchOne from './icon-people-search-one.vue';

const IconPeopleSearchOne = Object.assign(_IconPeopleSearchOne, {
  install: (app: App) => {
    app.component(_IconPeopleSearchOne.name, _IconPeopleSearchOne);
  }
});

export default IconPeopleSearchOne;