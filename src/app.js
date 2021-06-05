
const yargs = require("yargs");
const chalk = require("chalk");

const tasks = require("./tasks/tasks");

// Get all list nhạc: node src/app.js get-all
yargs.command({
  command: "get-all",
  handler: () => {
    tasks.getAll();
  },
});

// Thêm nhạc: node src/app.js add --id="" --name="Aaaa" --author="" --like=""
yargs.command({
  command: "add",
  builder: {
    id: {
      type: "number",
      demandOption: true,
    },
    name: {
      type: "string",
      demandOption: true,
    },
    author: {
      type: "string",
      demandOption: true,
    },
    like: {
      type: "number",
      demandOption: false,
    },
  },
  handler: (args) => {
    tasks.addList(args.id, args.name, args.author, args.like);
  },
});

// Xóa nhạc theo ID:  node src/app.js remove --id=""
yargs.command({
  command: "remove",
  builder: {
    id: {
      type: "number",
      demandOption: true,
    },
  },
  handler: (args) => {
    tasks.removeList(args.id);
  },
});

// Update data nhạc: node src/app.js update --id="" --name="" --author="" --like=""
yargs.command({
  command: "update",
  builder: {
    id: {
      type: "number",
      demandOption: true,
    },
    name: {
      type: "string",
      demandOption: true,
    },
    author: {
      type: "string",
      demandOption: true,
    },
    like: {
      type: "number",
      demandOption: true,
    },
  },
  handler: (args) => {
    tasks.updateMusic(args.id, args.name, args.author, args.like);
  },
});

// Get detail music: node src/app.js get-detail --id=""
yargs.command({
  command: "get-detail",
  builder: {
    id: {
      type: "number",
      demandOption: true,
    },
  },
  handler: (args) => {
    tasks.detailMusic(args.id);
  },
});

// Lưu lại các câu lệnh tao ra ở trên
yargs.parse();
