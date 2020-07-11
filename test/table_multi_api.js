var expect = require('chai').expect
var {TableMultiAPI} = require('../apis/table_multi_api')

let test_user = {userid:"kiyuzg15", name:"Kiyu Gabriel", email:"q@qzg.us", auth_platform:"GOOGLE", last_ip:"1.2.3.4", last_login: (new Date()).toISOString(), session:""}
let test_blessing = {userid:"kiyuzg15", year:2020, when:(new Date()).toISOString(), where_location:"Home", blessing:"I'm thankful for these tests" }

let users = new TableMultiAPI( 'users', 'Users' )
let blessings = new TableMultiAPI('user_blessings', 'Blessings')

// GRAPHQL FUNCTIONS
describe('GraphQL user CRUD functions', function(){
    this.timeout( 5000 )
    describe('#gql_create()', function(){
        it('should create a user through the GraphQL API', async function(){
            const result = await users.gql_create( test_user, ['userid'] )
            expect( result ).to.have.property('data')
            expect( result ).to.not.have.property('errors') })

        it('should create a blessing through the GraphQL API', async function(){
            const result = await blessings.gql_create( test_blessing, ['userid'] )
            expect( result ).to.have.property('data')
            expect( result ).to.not.have.property('errors') })
    })


    describe('#gql_read()', function(){
        it('should read the previously created user through the GraphQL API', async function(){
            const result = await users.gql_read( {userid: test_user.userid}, ['userid','name','email'] )
            expect( result[0] ).to.have.property( "email", test_user.email ) })

        it('should read the previously created blessing through the GraphQL API', async function(){
            const result = await blessings.gql_read( {userid: test_blessing.userid, year: test_user.year, when: test_user.when }, ['userid','year','when','where_location','blessing'] )
            expect( result[0] ).to.have.property( "where_location", test_blessing.where_location ) })

    })


    describe('#gql_update()', function(){
        it('should update the previously created user through the GraphQL API', async function(){
            const result = await users.gql_update( { ...test_user, last_ip:"2.3.4.5" }, ['userid'] )
            expect( result.data.updateUsers.value ).to.have.property( "userid", test_user.userid ) })

        it('should update the previously created blessing through the GraphQL API', async function(){
            const result = await blessings.gql_update( { ...test_blessing, where_location:"Office" }, ['userid'] )
            expect( result.data.updateUserBlessings.value ).to.have.property( "userid", test_blessing.userid ) })
    })


    describe('#gql_delete()', function(){
        it('should delete the previously created user through the GraphQL API', async function(){
            const result = await users.gql_delete( {userid:test_user.userid}, ['userid'] )
            expect( result.data.deleteUsers.value ).to.have.property( "userid", test_user.userid ) })

        it('should delete the previously created blessing through the GraphQL API', async function(){
            const result = await blessings.gql_delete({userid: test_blessing.userid, year: test_user.year, when: test_user.when }, ['userid'] )
            expect( result.data.deleteUsers.value ).to.have.property( "userid", test_user.userid ) })
    })
})


// REST FUNCTIONS
describe('REST user CRUD functions', function(){
    this.timeout( 5000 )
    describe('#rest_create()', function(){
        it('should create a user through REST API', async function(){
            const result = await users.rest_create( test_user )
            expect( result ).to.have.property('success', true) })

        it('should create a blessing through REST API', async function(){
            const result = await blessings.rest_create( test_blessing )
            expect( result ).to.have.property('success', true) })
    })


    describe('#rest_read()', function(){
        it('should read a user through the REST API', async function(){
            const result = await users.rest_read( [test_user.userid] )
            expect( result[0] ).to.have.property( "email", test_user.email ) })

        it('should read a blessing through the REST API', async function(){
            const result = await blessings.rest_read( [test_blessing.userid, test_blessing.year, test_blessing.when] )
            expect( result[0] ).to.have.property( "where_location", test_blessing.where_location ) })
    })


    describe('#rest_update()', function(){
        it('should update a user through the REST API', async function(){
            const result = await users.rest_update({ last_ip:"2.3.4.5" }, [test_user.userid] )
            expect( result ).to.have.property( "success", true ) })

        it('should update a blessing through the REST API', async function(){
            const result = await blessings.rest_update({ where_location:"Home Office" }, [test_blessing.userid, test_blessing.year, test_blessing.when ] )
            expect( result ).to.have.property( "success", true ) })
    })


    describe('#rest_delete()', function(){
        it('should delete a user through the REST API', async function(){
            const result = await users.rest_delete( [test_user.userid] )
            expect( result ).to.have.property( "statusCode", 204 ) })

        it('should delete a blessing through the REST API', async function(){
            const result = await blessings.rest_delete( [test_blessing.userid, test_blessing.year, test_blessing.when] )
            expect( result ).to.have.property( "statusCode", 204 ) })
    })
})



// CQL MAPPER FUNCTIONS
describe('CQL Mapper user CRUD functions', function(){
    this.timeout( 5000 )
    describe('#cql_create()', function(){
        it('should create a user through CQL API', async function(){
            const result = await users.cql_create( test_user )
            expect( result ).to.have.property('length') }) // need a better success test but I'm not sure what property to watch for other than just not throwing an exception

        it('should create a blessing through CQL API', async function(){
            const result = await blessings.cql_create( test_blessing )
            expect( result ).to.have.property('length') }) // need a better success test but I'm not sure what property to watch for other than just not throwing an exception
    })

    describe('#cql_read()', function(){
        it('should read a user through the CQL API', async function(){
            const result = await users.cql_read( {userid: test_user.userid} )
            expect( result ).to.have.property('length') })

        it('should read a blessing through the CQL API', async function(){
            const result = await blessings.cql_read( {userid: test_blessing.userid, year: test_blessing.year, when:test_blessing.when } )
            expect( result ).to.have.property('length') })
    })

    describe('#cql_update()', function(){
        it('should update a user through the CQL API', async function(){
            const result = await users.cql_update( { ...test_user, last_ip:"2.3.4.5" } )
            expect( result ).to.have.property('length') })

        it('should update a blessing through the CQL API', async function(){
            const result = await blessings.cql_update( { ...test_blessing, where_location:"At Home" } )
            expect( result ).to.have.property('length') })
    })

    describe('#cql_delete()', function(){
        it('should delete a user through the CQL API', async function(){
            const result = await users.cql_delete( {userid: test_user.userid} )
            expect( result ).to.have.property('length') })

        it('should delete a blessing through the CQL API', async function(){
            const result = await blessings.cql_delete( {userid: test_blessing.userid, year: test_blessing.year, when:test_blessing.when } )
            expect( result ).to.have.property('length') })
    })
})


