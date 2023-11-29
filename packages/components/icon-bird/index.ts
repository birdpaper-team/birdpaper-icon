import type { App } from 'vue';
import _IconBird from './icon-bird.vue';

const IconBird = Object.assign(_IconBird, {
  install: (app: App) => {
    app.component(_IconBird.name, _IconBird);
  }
});

export default IconBird;