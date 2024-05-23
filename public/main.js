export async function updateDatabaseStatus() {
    const lElement = document.querySelector( '#response' );
    lElement.textContent = 'Checking database connection...';

    try {
        const lResponse = await fetch( './api/connection/status' );
        if ( !lResponse.ok ) throw new Error( `Unexpected server response. ${ lResponse.status }: ${ lResponse.statusText }` );
        const lJson = await lResponse.json();
        if ( lJson.status !== 'ok' ) throw new Error( `Unexpected database status "${ lJson.status }"` );

        lElement.textContent = 'Database is working!';
    } catch ( error ) {
        // eslint-disable-next-line no-console
        console.error( 'Error fetching connection status:', error );
        lElement.textContent = 'Something is wrong with the database!';
    }
}

await updateDatabaseStatus();
