TOKEN="879683e2-3cac-4795-80fb-402327b2fe6c"
curl --request GET \
  --url https://28e43bfc-1726-4976-b228-cdbb4770c86f-us-east1.apps.astra.datastax.com/api/rest/v1/keyspaces/blessings/tables/blessings_by_user/rows/kiyuzg%3B2020 \
  --header 'accept: application/json' \
  --header 'x-cassandra-request-id: 351f6555-66ca-4801-977f-3161a612207d' \
  --header "x-cassandra-token: $TOKEN" \



# --data '{"columns":[{"name":"userid","value":"kiyuzg11"},{"name":"when","value":"2020-07-07T18:45:23.998Z"},{"name":"year","value":2020},{"name":"where_location","value":"from home"},{"name":"blessing","value":"These tests"}] }'

#  --data '{"columns": [{"name":"userid","value":"kiyuzg8"},{"name":"when","value":"2020-07-07T18:45:23.998Z"},{"name":"year","value":2020},{"name":"blessing","value":"Yeah let us see if this is a length problem"},{"name":"where_location","value":"Home"}] }'
# https://28e43bfc-1726-4976-b228-cdbb4770c86f-us-east1.apps.astra.datastax.com/api/rest
# 351f6555-66ca-4801-977f-3161a612207d
