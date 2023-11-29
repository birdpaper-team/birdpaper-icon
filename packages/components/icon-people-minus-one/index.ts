import type { App } from 'vue';
import _IconPeopleMinusOne from './icon-people-minus-one.vue';

const IconPeopleMinusOne = Object.assign(_IconPeopleMinusOne, {
  install: (app: App) => {
    app.component(_IconPeopleMinusOne.name, _IconPeopleMinusOne);
  }
});

export default IconPeopleMinusOne;