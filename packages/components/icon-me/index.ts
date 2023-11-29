import type { App } from 'vue';
import _IconMe from './icon-me.vue';

const IconMe = Object.assign(_IconMe, {
  install: (app: App) => {
    app.component(_IconMe.name, _IconMe);
  }
});

export default IconMe;