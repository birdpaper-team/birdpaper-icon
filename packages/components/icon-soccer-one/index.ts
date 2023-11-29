import type { App } from 'vue';
import _IconSoccerOne from './icon-soccer-one.vue';

const IconSoccerOne = Object.assign(_IconSoccerOne, {
  install: (app: App) => {
    app.component(_IconSoccerOne.name, _IconSoccerOne);
  }
});

export default IconSoccerOne;