import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "upper"
})
export class UppercasePipe {
  transform(value: string): string {
    const transformedValue = value.toUpperCase();

    return transformedValue;
  }
}
