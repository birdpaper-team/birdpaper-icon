import type { App } from 'vue';
import _IconLevelFourTitle from './icon-level-four-title.vue';

const IconLevelFourTitle = Object.assign(_IconLevelFourTitle, {
  install: (app: App) => {
    app.component(_IconLevelFourTitle.name, _IconLevelFourTitle);
  }
});

export default IconLevelFourTitle;