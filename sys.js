const fs = require("fs");

const sys = (txt, cb) => {
  const data = fs.readFileSync(`${txt}.txt`, { encoding: "utf8" });

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

  fs.writeFileSync(
    `./../result/${txt}.json`,
    JSON.stringify(obj_result, null, 2)
  );

  return cb("finish bro");
};

sys("miranda", (cb) => {
  console.log(cb);
});
