export type ArgsDynamicFilterType = {
    show: boolean;
    enable?: boolean;
    filters: ADFFilteresType[];
  };
  
  export type ADFFilteresType = {
    label: string;
    code: EADFFArgsCode;
    args: ADFFArgsType;
  };
  
  export type ADFFArgsType = {
    default_value: string;
    target_type?: string;
    target_category?: string;
    input_type?: EInputDate;
  };
  // types.ts

export enum EInputDate {
    date = "date",
    datetime = "datetime",
  }
  export enum EADFFArgsCode {
    target_filter = "target_filter",
    period_filter = "period_filter",
  }