USERNAME=blessings
PASSWORD=blessme!
URL=https://28e43bfc-1726-4976-b228-cdbb4770c86f-us-east1.apps.astra.datastax.com/api/rest/v1/auth 
curl --request POST \
  --url $URL \
  --header 'accept: */*' \
  --header 'content-type: application/json' \
  --header 'x-cassandra-request-id: 351f6555-66ca-4801-977f-3161a612207d' \
  --data "{\"username\":\"$USERNAME\",\"password\":\"$PASSWORD\"}"


# https://28e43bfc-1726-4976-b228-cdbb4770c86f-us-east1.apps.astra.datastax.com/api/rest
# 351f6555-66ca-4801-977f-3161a612207d
