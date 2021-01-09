export function replaceAt<A>(i: number, fn: (x: A) => A, xs: A[]): A[] {
  return xs.map((x, j) => (i === j ? fn(x) : x));
}

export function firsts<A>(xs: A[], eq: (x: A, y: A) => boolean = refEq): A[] {
  const result = [];
  for (let x of xs) {
    if (!result.find(y => eq(x, y))) {
      result.push(x);
    }
  }
  return result;
}

export function lasts<A>(xs: A[], eq: (x: A, y: A) => boolean = refEq): A[] {
  const reversed = [...xs];
  reversed.reverse();
  const result = firsts(reversed, eq);
  result.reverse();
  return result;
}

function refEq(x: any, y: any): boolean {
  return x === y;
}
