TOKEN="0cf5a60f-0a93-4e2b-964f-1bb2e6e3d5f8"
curl --request POST \
  --url https://28e43bfc-1726-4976-b228-cdbb4770c86f-us-east1.apps.astra.datastax.com/api/rest/v1/keyspaces/blessings/tables/blessings_by_user/rows \
  --header 'accept: */*' \
  --header 'content-type: application/json' \
  --header 'x-cassandra-request-id: 351f6555-66ca-4801-977f-3161a612207d' \
  --header "x-cassandra-token: $TOKEN" \
  --data '{"columns":[{"name":"year","value":2020},{"name":"userid","value":"kiyuzg123"},{"name":"when","value":"2020-07-07T18:45:23.998Z"},{"name":"blessing","value":"These tests are really handy to verify that the code I wrote works as I expect."},{"name":"where_location","value":"from home - could be a lat/lon later"}]}'



# --data '{"columns":[{"name":"userid","value":"kiyuzg11"},{"name":"when","value":"2020-07-07T18:45:23.998Z"},{"name":"year","value":2020},{"name":"where_location","value":"from home"},{"name":"blessing","value":"These tests"}] }'

#  --data '{"columns": [{"name":"userid","value":"kiyuzg8"},{"name":"when","value":"2020-07-07T18:45:23.998Z"},{"name":"year","value":2020},{"name":"blessing","value":"Yeah let us see if this is a length problem"},{"name":"where_location","value":"Home"}] }'
# https://28e43bfc-1726-4976-b228-cdbb4770c86f-us-east1.apps.astra.datastax.com/api/rest
# 351f6555-66ca-4801-977f-3161a612207d
