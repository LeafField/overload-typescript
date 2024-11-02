const testObj = {
  test1: "hoge1",
  test2: "hoge2",
  test3: "hoge3",
} as const;

type Property = keyof typeof testObj;

function getStrictKeys<T extends Record<string, unknown>>(obj: T): (keyof T)[] {
  return Object.keys(obj);
}

export function returnNumber(): Record<Property, number>;
export function returnNumber(property: Property): number;
export function returnNumber(property?: Property) {
  if (property) {
    return Math.ceil(Math.random() * 20 + 1);
  } else {
    return getStrictKeys(testObj).reduce<Record<Property, number>>(
      (prev, curr) => {
        prev[curr] = Math.ceil(Math.random() * 10 + 1);
        return prev;
      },
      { test1: 0, test2: 0, test3: 0 }
    );
  }
}
