import type { App } from 'vue';
import _IconLevelFiveTitle from './icon-level-five-title.vue';

const IconLevelFiveTitle = Object.assign(_IconLevelFiveTitle, {
  install: (app: App) => {
    app.component(_IconLevelFiveTitle.name, _IconLevelFiveTitle);
  }
});

export default IconLevelFiveTitle;