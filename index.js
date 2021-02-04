const fsevents = require('fsevents');
const stop = fsevents.watch(`${__dirname}/watched`, (path, flags, id) => {
  const info = fsevents.getInfo(path, flags, id);
  console.log(info)
});
setInterval(() => {
  console.log("tick")
}, 60000);
setTimeout(() => {
  stop();
  console.log('stopped watching');
}, 3600000);
