import type { App } from 'vue';
import _IconUser3Line from './icon-user-3-line.vue';

const IconUser3Line = Object.assign(_IconUser3Line, {
  install: (app: App) => {
    app.component(_IconUser3Line.name, _IconUser3Line);
  }
});

export default IconUser3Line;