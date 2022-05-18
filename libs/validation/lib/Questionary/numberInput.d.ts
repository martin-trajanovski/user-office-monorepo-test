import * as Yup from 'yup';
export declare const numberInputQuestionValidationSchema: (field: any, NumberValueConstraint: any) => Yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    value: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    unit: import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape> | null>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    value: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    unit: import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape> | null>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    value: Yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    unit: import("yup/lib/object").OptionalObjectSchema<import("yup/lib/object").ObjectShape, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").ObjectShape> | null>;
}>>>;
