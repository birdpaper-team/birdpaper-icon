import type { App } from 'vue';
import _IconBowlOne from './icon-bowl-one.vue';

const IconBowlOne = Object.assign(_IconBowlOne, {
  install: (app: App) => {
    app.component(_IconBowlOne.name, _IconBowlOne);
  }
});

export default IconBowlOne;