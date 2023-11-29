import type { App } from 'vue';
import _IconBadOne from './icon-bad-one.vue';

const IconBadOne = Object.assign(_IconBadOne, {
  install: (app: App) => {
    app.component(_IconBadOne.name, _IconBadOne);
  }
});

export default IconBadOne;