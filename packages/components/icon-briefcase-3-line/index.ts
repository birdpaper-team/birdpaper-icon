import type { App } from 'vue';
import _IconBriefcase3Line from './icon-briefcase-3-line.vue';

const IconBriefcase3Line = Object.assign(_IconBriefcase3Line, {
  install: (app: App) => {
    app.component(_IconBriefcase3Line.name, _IconBriefcase3Line);
  }
});

export default IconBriefcase3Line;