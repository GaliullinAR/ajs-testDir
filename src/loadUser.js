import httpGet from './http';

export default function loadUser(id) {
  const result = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(result);
}
