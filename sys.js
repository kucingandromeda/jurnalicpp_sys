const fs = require("fs");

const sys = (txt, cb) => {
  console.log("pemisahan paragraf dijalankan...");
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

  console.log("pemisahan paragraf selesai");

  // console.log(obj_list);

  console.log("pendeteksian italic dijalankan...");

  const italicDetchArray = [];
  obj_list.forEach((data) => {
    if (data.value.includes("<it>")) {
      data.prop = { italic: true };
      const newValue = data.value.replace("<it>", "");
      obj = {
        type: "paragraf",
        value: newValue,
        prop: {
          italic: true,
        },
      };
    } else {
      obj = {
        type: "paragraf",
        value: data.value,
        prop: null,
      };
    }
    italicDetchArray.push(obj);
    // console.log(data);
  });
  console.log("pendeteksian italic selesai");

  obj_result.isi = italicDetchArray;

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
