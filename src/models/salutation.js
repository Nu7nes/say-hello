import mongoose from 'mongoose';

let salutationSchema = new mongoose.Schema({
       
    message: {type: String, required: true},
    createdAt: { type: Date, default: Date.now }
    
})

const Salutation = mongoose.model('Salutation', salutationSchema);

export default Salutation;