const express = require( 'express' );
const router = express.Router();

// Require controller module
const connectionController = require( '../utils/rest-services/connection.cjs' );

// Get connection status
router.get( '/status', async ( req, res, next ) => {
    try {
        const connectionStatus = await connectionController.getStatus();
        res.send( connectionStatus );
        next();
    } catch ( error ) {
        next( error );
    }
} );

module.exports = router;
