const { getListMusic, updateListMusic } = require("../services/music.services");

// Show list music
const showList = function () {
  const listMusic = getListMusic();
  listMusic.forEach((item) => {
    console.log("ID: ", item.id);
    console.log("Bài hát: ", item.name);
    console.log("Ca sĩ: ", item.author);
    console.log("Lượt like: ", item.like);
    console.log("---------------------------");
  });
};

// Add music
const addList = function (id, name, author, like) {
  const listMusic = getListMusic();

  const founder = listMusic.find((item) => {
    return item.name === name && item.author === author;
  });
  const founderID = listMusic.find((item) => {
    return item.id === id;
  });
  if (founder) {
    return console.log(`Đã tồn tại ${name} của ${name}, vui lòng thêm lại!`);
  }
  if (founderID) {
    return console.log(
      `Đã tồn tại ID ${id}, vui lòng nhập ID khác hoặc xóa ID trên!`
    );
  }
  const music = { id, name, author, like };
  listMusic.push(music);
  updateListMusic(listMusic);
  console.log("Thêm thành công");
};

// Remove music
const removeList = function (id) {
  const listMusic = getListMusic();
  // Cách 1:
  // listMusic = listMusic.filter((music) => music.id !== id);
  // Cách 2:
  const idMusic = listMusic.findIndex((item) => {
    return item.id === id;
  });
  if (idMusic !== -1) {
    listMusic.splice((idMusic, 1));
    updateListMusic(listMusic);
    console.log("Xóa thành công!");
  } else {
    return console.log("ID không tồn tại! Xóa không thành công.");
  }
};


// Update music
const updateMusic = function (id, name, author, like) {
  const listMusic = getListMusic();
  const index = listMusic.findIndex((item) => item.id === id);

  if (index !== -1) {
    const oldMusic = listMusic[index];

    const newMusic = { ...oldMusic, name , author, like };

    listMusic[index] = newMusic;

    updateListMusic(listMusic);
    console.log("Update thành công");
  } else {
    console.log("ID không tồn tại");
  }
};

// Get detail music
const detailMusic = function(id){
  const listMusic = getListMusic();
  const music = listMusic.find((music) => music.id === id);
  console.log("ID : ", music.id);
  console.log("Bài hát : ", music.name);
  console.log("Ca sĩ : ", music.author);
  console.log("Lượt like : ", music.like);
  console.log("---------------------------");
}
module.exports = { getAll: showList, addList, removeList, updateMusic,detailMusic };
