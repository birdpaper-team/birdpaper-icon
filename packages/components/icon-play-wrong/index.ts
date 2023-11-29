import type { App } from 'vue';
import _IconPlayWrong from './icon-play-wrong.vue';

const IconPlayWrong = Object.assign(_IconPlayWrong, {
  install: (app: App) => {
    app.component(_IconPlayWrong.name, _IconPlayWrong);
  }
});

export default IconPlayWrong;