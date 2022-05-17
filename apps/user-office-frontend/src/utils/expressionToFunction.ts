import { Unit } from '@user-office-software/shared-types';

const expressionToFunction = (expression: string) =>
  // FIXME: Fix this eslint warning
  // eslint-disable-next-line no-new-func
  new Function('x', `return ${expression}`);

export const convertToSi = (value: number, unit: Unit | null) =>
  unit ? expressionToFunction(unit.siConversionFormula)(value) : value;

export default expressionToFunction;
