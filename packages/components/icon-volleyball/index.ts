import type { App } from 'vue';
import _IconVolleyball from './icon-volleyball.vue';

const IconVolleyball = Object.assign(_IconVolleyball, {
  install: (app: App) => {
    app.component(_IconVolleyball.name, _IconVolleyball);
  }
});

export default IconVolleyball;