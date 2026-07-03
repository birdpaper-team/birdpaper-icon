import { describe, it, expect } from "vitest";
import { getVue3Component, getComponentIndex, getType } from "../vue-template";

describe("getVue3Component", () => {
  it("generates a valid Vue SFC template", () => {
    const result = getVue3Component({
      name: "icon-arrow-down",
      componentName: "IconArrowDown",
      svgHtml: '<svg viewBox="0 0 24 24"><path d="M12 4v16"/></svg>',
    });

    expect(result).toContain("<template>");
    expect(result).toContain("</template>");
    expect(result).toContain('viewBox="0 0 24 24"');
    expect(result).toContain(':class="cls"');
    expect(result).toContain(':style="innerStyle"');
    expect(result).toContain(':fill="fill"');
    expect(result).toContain('@click="onClick"');
    expect(result).toContain('<path d="M12 4v16"/>');
  });

  it("includes correct component name in defineOptions", () => {
    const result = getVue3Component({
      name: "icon-arrow-down",
      componentName: "IconArrowDown",
      svgHtml: "<svg></svg>",
    });

    expect(result).toContain('defineOptions({ name: "IconArrowDown"})');
  });

  it("includes all required props", () => {
    const result = getVue3Component({
      name: "icon-test",
      componentName: "IconTest",
      svgHtml: "<svg></svg>",
    });

    expect(result).toContain("size");
    expect(result).toContain("fill");
    expect(result).toContain("spin");
    expect(result).toContain("rotate");
  });

  it("includes click event emit", () => {
    const result = getVue3Component({
      name: "icon-test",
      componentName: "IconTest",
      svgHtml: "<svg></svg>",
    });

    expect(result).toContain('emits("click", ev)');
  });

  it("includes computed class with kebab-case name", () => {
    const result = getVue3Component({
      name: "icon-arrow-down",
      componentName: "IconArrowDown",
      svgHtml: "<svg></svg>",
    });

    expect(result).toContain("${name}-icon-arrow-down");
  });
});

describe("getComponentIndex", () => {
  it("generates correct export and import", () => {
    const result = getComponentIndex({
      name: "icon-arrow-down",
      componentName: "IconArrowDown",
    });

    expect(result).toContain("import _IconArrowDown from './icon-arrow-down.vue'");
    expect(result).toContain("export const IconArrowDown = _IconArrowDown");
    expect(result).toContain("export default IconArrowDown");
  });

  it("generates instance type export", () => {
    const result = getComponentIndex({
      name: "icon-test",
      componentName: "IconTest",
    });

    expect(result).toContain("export type IconTestInstance = InstanceType<typeof IconTest>");
  });
});

describe("getType", () => {
  it("generates valid GlobalComponents declaration", () => {
    const result = getType({
      exports: [
        "IconArrowDown: typeof import('birdpaper-icon')['IconArrowDown'];",
        "IconArrowUp: typeof import('birdpaper-icon')['IconArrowUp'];",
      ],
    });

    expect(result).toContain("declare module 'vue'");
    expect(result).toContain("interface GlobalComponents");
    expect(result).toContain("IconArrowDown");
    expect(result).toContain("IconArrowUp");
    expect(result).toContain("export {}");
  });

  it("handles empty exports", () => {
    const result = getType({ exports: [] });

    expect(result).toContain("declare module 'vue'");
    expect(result).toContain("interface GlobalComponents");
  });
});
