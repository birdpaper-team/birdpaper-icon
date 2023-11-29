import type { App } from 'vue';
import _IconLandscapeLine from './icon-landscape-line.vue';

const IconLandscapeLine = Object.assign(_IconLandscapeLine, {
  install: (app: App) => {
    app.component(_IconLandscapeLine.name, _IconLandscapeLine);
  }
});

export default IconLandscapeLine;