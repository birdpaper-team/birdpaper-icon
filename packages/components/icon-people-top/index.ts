import type { App } from 'vue';
import _IconPeopleTop from './icon-people-top.vue';

const IconPeopleTop = Object.assign(_IconPeopleTop, {
  install: (app: App) => {
    app.component(_IconPeopleTop.name, _IconPeopleTop);
  }
});

export default IconPeopleTop;