const fsevents = require('fsevents');
fsevents.watch(`${__dirname}/watched`, (path, flags, id) => {
  const info = fsevents.getInfo(path, flags, id);
  console.log(info)
});
setInterval(() => {
  console.log("tick")
}, 60000);