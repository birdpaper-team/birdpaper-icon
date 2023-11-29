import type { App } from 'vue';
import _IconGolfCourse from './icon-golf-course.vue';

const IconGolfCourse = Object.assign(_IconGolfCourse, {
  install: (app: App) => {
    app.component(_IconGolfCourse.name, _IconGolfCourse);
  }
});

export default IconGolfCourse;