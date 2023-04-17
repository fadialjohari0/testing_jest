const axios = require("axios");

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const filterByAge = (people, age) =>
  people.filter((person) => person.age === age);

const getUserData = async (userId) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.data;
};

module.exports = { capitalize, filterByAge, getUserData };
