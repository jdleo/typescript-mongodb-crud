import * as mongoose from 'mongoose';

// make schema object
const Schema = mongoose.Schema;

export const UserModel = new Schema({
    name: {
        type: String,
        required: 'Enter a name',
    },
    username: {
        type: String,
        required: 'Enter a username',
    },
    email: {
        type: String,
        required: 'Enter an email',
    },
});
