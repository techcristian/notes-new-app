import { connect } from 'mongoose';

import { MONGODB_URI } from './config';


(async() => {
    await connect(MONGODB_URI);
    console.log('db is connected');

})();








//connect(MONGODB_URI).then(
// () => { console.log("db connected"); },
//err => { err }
//);