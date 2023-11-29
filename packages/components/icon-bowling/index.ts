import type { App } from 'vue';
import _IconBowling from './icon-bowling.vue';

const IconBowling = Object.assign(_IconBowling, {
  install: (app: App) => {
    app.component(_IconBowling.name, _IconBowling);
  }
});

export default IconBowling;