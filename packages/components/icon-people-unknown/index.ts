import type { App } from 'vue';
import _IconPeopleUnknown from './icon-people-unknown.vue';

const IconPeopleUnknown = Object.assign(_IconPeopleUnknown, {
  install: (app: App) => {
    app.component(_IconPeopleUnknown.name, _IconPeopleUnknown);
  }
});

export default IconPeopleUnknown;