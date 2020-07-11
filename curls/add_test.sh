TOKEN="0cf5a60f-0a93-4e2b-964f-1bb2e6e3d5f8"
curl --request POST \
  --url https://28e43bfc-1726-4976-b228-cdbb4770c86f-us-east1.apps.astra.datastax.com/api/rest/v1/keyspaces/blessings/tables/mytest/rows \
  --header 'accept: */*' \
  --header 'content-type: application/json' \
  --header 'x-cassandra-request-id: 351f6555-66ca-4801-977f-3161a612207d' \
  --header "x-cassandra-token: $TOKEN" \
  --data '{"columns": [{"name":"col1","value":9},{"name":"col2","value":5},{"name":"col3","value":6},{"name":"col5","value":8},{"name":"col4","value":1}] }'
