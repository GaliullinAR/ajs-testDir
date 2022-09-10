import loadUser from '../loadUser';
import httpGet from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});
test('Должен вызвать loadUser один раз', () => {
  httpGet.mockReturnValue(JSON.stringify({}));
  loadUser(1);
  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});
