import type { App } from 'vue';
import _IconFireExtinguisherOne from './icon-fire-extinguisher-one.vue';

const IconFireExtinguisherOne = Object.assign(_IconFireExtinguisherOne, {
  install: (app: App) => {
    app.component(_IconFireExtinguisherOne.name, _IconFireExtinguisherOne);
  }
});

export default IconFireExtinguisherOne;