const db = require( '../db/index.cjs' );

exports.getStatus = async function () {
    const connection = await db.getConnection();
    const result = await connection.execute( 'select 1 from dual' );
    await connection.close();

    return {
        status: 'ok',
    }
};
