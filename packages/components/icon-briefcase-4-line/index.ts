import type { App } from 'vue';
import _IconBriefcase4Line from './icon-briefcase-4-line.vue';

const IconBriefcase4Line = Object.assign(_IconBriefcase4Line, {
  install: (app: App) => {
    app.component(_IconBriefcase4Line.name, _IconBriefcase4Line);
  }
});

export default IconBriefcase4Line;