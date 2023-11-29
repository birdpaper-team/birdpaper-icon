import type { App } from 'vue';
import _IconBezierCurve from './icon-bezier-curve.vue';

const IconBezierCurve = Object.assign(_IconBezierCurve, {
  install: (app: App) => {
    app.component(_IconBezierCurve.name, _IconBezierCurve);
  }
});

export default IconBezierCurve;