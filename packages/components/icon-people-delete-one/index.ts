import type { App } from 'vue';
import _IconPeopleDeleteOne from './icon-people-delete-one.vue';

const IconPeopleDeleteOne = Object.assign(_IconPeopleDeleteOne, {
  install: (app: App) => {
    app.component(_IconPeopleDeleteOne.name, _IconPeopleDeleteOne);
  }
});

export default IconPeopleDeleteOne;