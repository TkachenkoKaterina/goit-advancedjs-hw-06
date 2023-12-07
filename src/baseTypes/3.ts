let some: unknown;
some = 'Text';
let str: string;

// Type Assertion
// str = some as string;

if (typeof some === 'string') {
  str = some;
}

export {};
