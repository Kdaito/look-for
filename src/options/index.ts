import { OptionObject as OptionObjectType, Option } from "../data/type";
import { statusOption } from "./list";

class OptionObject {
  protected readonly innervalue: OptionObjectType[];
  protected readonly empty: Option = {
    text: "",
    value: null,
  };

  protected constructor(value: OptionObjectType[]) {
    this.innervalue = [...value];
  }

  static create(value: OptionObjectType[]) {
    return new OptionObject(value);
  }

  getOption(value: number | null): OptionObjectType | Option {
    if (!value) return this.empty;
    const res = this.innervalue.find((opt) => opt.value === value);
    return res || this.empty;
  }

  get options(): OptionObjectType[] {
    return this.innervalue;
  }
}

export const status = OptionObject.create(statusOption);
