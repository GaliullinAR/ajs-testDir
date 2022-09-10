// export function calculateTotal(purchases) {
//   let result = 0;
//   for (let i = 0; i < purchases.length; i++) {
//     result += purchases[i].count * purchases[i].price;
//   }
//   return result;
// }

export default function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((acc, item) => acc + (item.count * item.price), 0);

  if (applyDiscount) {
    return sum * 0.5;
  }

  return sum;
}
