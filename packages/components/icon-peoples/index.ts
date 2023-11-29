import type { App } from 'vue';
import _IconPeoples from './icon-peoples.vue';

const IconPeoples = Object.assign(_IconPeoples, {
  install: (app: App) => {
    app.component(_IconPeoples.name, _IconPeoples);
  }
});

export default IconPeoples;