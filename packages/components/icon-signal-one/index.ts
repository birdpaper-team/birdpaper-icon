import type { App } from 'vue';
import _IconSignalOne from './icon-signal-one.vue';

const IconSignalOne = Object.assign(_IconSignalOne, {
  install: (app: App) => {
    app.component(_IconSignalOne.name, _IconSignalOne);
  }
});

export default IconSignalOne;