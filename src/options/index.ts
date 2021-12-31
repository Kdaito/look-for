import { Option } from "../types";
import { statusOption } from "./list";

class OptionObject {
  protected readonly innervalue: Option[];
  protected readonly empty: Option = {
    text: "",
    value: null,
  };

  protected constructor(value: Option[]) {
    this.innervalue = [...value];
  }

  static create(value: Option[]) {
    return new OptionObject(value);
  }

  getOption(value: number | null): Option {
    if (!value) return this.empty;
    const res = this.innervalue.find((opt) => opt.value === value);
    return res || this.empty;
  }

  get options(): Option[] {
    return this.innervalue;
  }
}

export const status = OptionObject.create(statusOption);
