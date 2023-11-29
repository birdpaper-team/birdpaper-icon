import type { App } from 'vue';
import _IconVideoOne from './icon-video-one.vue';

const IconVideoOne = Object.assign(_IconVideoOne, {
  install: (app: App) => {
    app.component(_IconVideoOne.name, _IconVideoOne);
  }
});

export default IconVideoOne;