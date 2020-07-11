var {TableMultiAPI} = require('./table_multi_api')

let users = new TableMultiAPI( 'users', 'Users' )
let blessings = new TableMultiAPI('user_blessings', 'Blessings')
let audit = new TableMultiAPI('audit', 'Audit')

function validate_or_create_user(){
// {userid:"kiyuzg15", name:"Kiyu Gabriel", email:"q@qzg.us", auth_platform:"GOOGLE", last_ip:"1.2.3.4", last_login: (new Date()).toISOString(), session:""}
}


async function get_blessings( userid ){
  //console.log(`called get_blessings with ${userid}`)
  // this needs to issue queries for 3 years (in reverse) at a time and keep 
  // requesting blocks of 3 until one returns no results
  return await blessings.cql_read({ userid, year:2020})
}

function add_blessing( userid, blessing_data ){
  let year = new Date( Date.parse( blessing_data.when ) ).getFullYear()
  blessings.cql_create( { ...blessing_data, userid, year })
  return {result:"added"} // need to make this more robust; catch exceptions from cql_create and communicate the error to the client
}

function update_blessing( userid, blessing_data ){
  let year = new Date( Date.parse( blessing_data.when ) ).getFullYear()
  blessings.cql_update({ ...blessing_data, userid, year })
  return {result:"updated"}
}

function delete_blessing( userid, blessing_data ){
  let year = new Date( Date.parse( blessing_data.when ) ).getFullYear()
  blessings.cql_delete({ userid, year, when:blessing_data.when})
  return {result:"deleted"}
}

apis = {
  validate_or_create_user,
  get_blessings,
  add_blessing,
  update_blessing,
  delete_blessing
}

module.exports = apis
