const fs = require("fs");

const data = fs.readFileSync("miranda.txt", { encoding: "utf8" });

const data_split = data.split(/\n/);

const obj_result = {
  judul: null,
  penulis: [null, null, null, null],
  genre: null,
  url: null,
  img: null,
};

const obj_list = [];
data_split.forEach((data) => {
  const obj = {
    type: "paragraf",
    value: data,
  };
  obj_list.push(obj);
});

obj_result.isi = obj_list;

// console.log(obj_result);

fs.writeFileSync("./miranda.json", JSON.stringify(obj_result, null, 2));
