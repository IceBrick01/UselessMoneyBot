const fs = require('fs')

let userdata = require('./userdata.json')

async function get_user_data (id) {
  return userdata[id]
}

function save_user_data (id, data) {
  userdata[id.toString()] = data
}

let default_user_data = {
  money: 100
}

let userid = 728496233135603782
let userid2 = userid.toString()

save_user_data(userid2, default_user_data)

console.log(userdata)

fs.writeFileSync('./userdata.json', JSON.stringify(userdata), (error) => {console.log(error)})