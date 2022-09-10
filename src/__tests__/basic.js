import calculateTotal from '../calculate';

test('basic test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test('calculateTotal sum', () => {
  const list = [
    {
      id: 45,
      name: 'Война и мир',
      count: 3,
      price: 400,
    },
    {
      id: 77,
      name: 'Java Script для разработчиков',
      count: 1,
      price: 1300,
    },
  ];
  const result = calculateTotal(list);
  expect(result).toBe(2500);
});

test('calculateTotal sum with discount', () => {
  const list = [
    {
      id: 45,
      name: 'Война и мир',
      count: 3,
      price: 400,
    },
    {
      id: 77,
      name: 'Java Script для разработчиков',
      count: 1,
      price: 1300,
    },
  ];
  const result = calculateTotal(list, true);
  expect(result).toBe(1250);
});
