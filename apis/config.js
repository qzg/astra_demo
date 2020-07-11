/** globally shared configuration values **/

const baseURL = "https://28e43bfc-1726-4976-b228-cdbb4770c86f-us-east1.apps.astra.datastax.com"
const restURL = baseURL + "/api/rest"
const gqlURL =  baseURL + "/api/graphql"
const secure_bundle_path = "/Users/kgabriel/Development/blessingsApp/apiserver/data/secure-connect-blessingsapp.zip"

const keyspace = "blessings"
const username = "blessings"
const password = "blessme!"


// this is consumed by the Mapper in utility.js
// See https://docs.datastax.com/en/developer/nodejs-driver/4.5/features/mapper/
// for complete information on how to use the mapper in Node.js
const mapper_model = {
  models: {
    'Users': { tables: ['users'], keyspace },
    'Audit': { tables: ['audit'], keyspace },
    'Blessings': { tables: ['user_blessings'], keyspace }
  }
}

config = { baseURL, restURL, gqlURL, keyspace, username, password, secure_bundle_path, mapper_model }
module.exports = config
