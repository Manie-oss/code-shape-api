import mongoose from "mongoose";

const CodeSchema = new mongoose.Schema({
    code: String,
}, {
    timestamps: true,
});

export const CodeModel = mongoose.model('codes', CodeSchema);


