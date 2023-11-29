import type { App } from 'vue';
import _IconTvOne from './icon-tv-one.vue';

const IconTvOne = Object.assign(_IconTvOne, {
  install: (app: App) => {
    app.component(_IconTvOne.name, _IconTvOne);
  }
});

export default IconTvOne;