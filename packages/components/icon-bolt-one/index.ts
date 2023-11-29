import type { App } from 'vue';
import _IconBoltOne from './icon-bolt-one.vue';

const IconBoltOne = Object.assign(_IconBoltOne, {
  install: (app: App) => {
    app.component(_IconBoltOne.name, _IconBoltOne);
  }
});

export default IconBoltOne;