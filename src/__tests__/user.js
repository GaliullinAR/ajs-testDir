import loadUser from '../loadUser.js';
import { httpGet } from '../http.js';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});
test('Должен вызвать loadUser один раз', () => {
  httpGet.mockReturnValue(JSON.stringify({}));
  loadUser(1);
  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
})