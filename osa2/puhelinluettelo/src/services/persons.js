import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const getAll = () => {
  const req = axios.get(baseURL);
  return req.then((res) => res.data);
};

const create = (newPerson) => {
  const req = axios.post(baseURL, newPerson);
  return req.then((res) => res.data);
};

const remove = (id) => {
  const req = axios.delete(`${baseURL}/${id}`);
  return req.then(() => {
    return getAll();
  });
};

export default {
  getAll,
  create,
  remove,
};
