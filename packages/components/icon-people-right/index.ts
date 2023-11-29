import type { App } from 'vue';
import _IconPeopleRight from './icon-people-right.vue';

const IconPeopleRight = Object.assign(_IconPeopleRight, {
  install: (app: App) => {
    app.component(_IconPeopleRight.name, _IconPeopleRight);
  }
});

export default IconPeopleRight;