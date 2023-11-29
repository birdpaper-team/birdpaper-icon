import type { App } from 'vue';
import _IconPeopleLeft from './icon-people-left.vue';

const IconPeopleLeft = Object.assign(_IconPeopleLeft, {
  install: (app: App) => {
    app.component(_IconPeopleLeft.name, _IconPeopleLeft);
  }
});

export default IconPeopleLeft;