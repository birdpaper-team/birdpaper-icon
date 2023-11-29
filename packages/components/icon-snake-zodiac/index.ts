import type { App } from 'vue';
import _IconSnakeZodiac from './icon-snake-zodiac.vue';

const IconSnakeZodiac = Object.assign(_IconSnakeZodiac, {
  install: (app: App) => {
    app.component(_IconSnakeZodiac.name, _IconSnakeZodiac);
  }
});

export default IconSnakeZodiac;