const fs= require ("fs");
fs.writeFileSync("welcome.txt", "hello Node", function (err,data){
    if (err){
        console.error(err);
    }
}
);
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("error");
    };
    console.log(data);
  });
