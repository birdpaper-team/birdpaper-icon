import type { App } from 'vue';
import _IconBriefcase5Line from './icon-briefcase-5-line.vue';

const IconBriefcase5Line = Object.assign(_IconBriefcase5Line, {
  install: (app: App) => {
    app.component(_IconBriefcase5Line.name, _IconBriefcase5Line);
  }
});

export default IconBriefcase5Line;