import type { App } from 'vue';
import _IconPlayVolleyball from './icon-play-volleyball.vue';

const IconPlayVolleyball = Object.assign(_IconPlayVolleyball, {
  install: (app: App) => {
    app.component(_IconPlayVolleyball.name, _IconPlayVolleyball);
  }
});

export default IconPlayVolleyball;