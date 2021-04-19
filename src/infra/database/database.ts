import pgPromise from 'pg-promise'

const pgp = pgPromise({})

const db = pgp({
    user: 'user',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'app'
})

export default db