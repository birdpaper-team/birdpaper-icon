import type { App } from 'vue';
import _IconEnquire from './icon-enquire.vue';

const IconEnquire = Object.assign(_IconEnquire, {
  install: (app: App) => {
    app.component(_IconEnquire.name, _IconEnquire);
  }
});

export default IconEnquire;