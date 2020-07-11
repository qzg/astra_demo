TOKEN="8dbe7590-2e37-4890-b8b6-03fee549ab90"
URL=https://28e43bfc-1726-4976-b228-cdbb4770c86f-us-east1.apps.astra.datastax.com/api/graphql/ 
curl --location --request POST \
  --url $URL \
  --header 'accept: */*' \
  --header 'content-type: application/json' \
  --header 'x-cassandra-request-id: 351f6555-66ca-4801-977f-3161a612207d' \
  --header "x-cassandra-token: $TOKEN" \
  --data-raw '{"query":"mutation {insertBlessingsByUser(value: {userid:\"kiyuzg\", year:2020, when:\"2020-07-08T02:40:51.123Z\", whereLocation:\"Home Office\", blessing:\"I am thankful for this alternate way to access and change my data.\"}) { value { userid }}}"}'

#--data-raw '{"query":"query {blessingsByUser { values {userid year when blessing whereLocation}}}"}'


# --data '{"columns":[{"name":"userid","value":"kiyuzg11"},{"name":"when","value":"2020-07-07T18:45:23.998Z"},{"name":"year","value":2020},{"name":"where_location","value":"from home"},{"name":"blessing","value":"These tests"}] }'

#  --data '{"columns": [{"name":"userid","value":"kiyuzg8"},{"name":"when","value":"2020-07-07T18:45:23.998Z"},{"name":"year","value":2020},{"name":"blessing","value":"Yeah let us see if this is a length problem"},{"name":"where_location","value":"Home"}] }'
# https://28e43bfc-1726-4976-b228-cdbb4770c86f-us-east1.apps.astra.datastax.com/api/rest
# 351f6555-66ca-4801-977f-3161a612207d
