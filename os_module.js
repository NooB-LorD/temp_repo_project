const os = require('os')

// Architecture of OS x64
console.log(os.arch());
// User info
console.log(os.userInfo());
// System Uptime
console.log('OS uptime is: ',os.uptime(),' Seconds');
const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);
