import { SkipSelf, Component, Optional } from "@angular/core";

@Component({
  selector: "section",
  template: "<ng-content></ng-content>"
})
export class SectionComponent {
  constructor(
    @SkipSelf()
    @Optional()
    private parent: SectionComponent | null
  ) {}

  get level(): number {
    return this.parent ? this.parent.level + 1 : 1;
  }
}
