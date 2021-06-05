const fs = require("fs");

const getListMusic = () => {
  // đọc data từ file
  let result = fs.readFileSync("./src/music.json");
  // chuyển buffer sang json
  result = JSON.parse(result);
  return result;
};

const updateListMusic = (data) => {
  fs.writeFileSync("./src/music.json", JSON.stringify(data));
};

module.exports = {
  getListMusic,
  updateListMusic,
};
