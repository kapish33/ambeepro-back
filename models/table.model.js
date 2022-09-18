const { model, Schema } = require('mongoose');
const tableSchema = new Schema(
  {
    user: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    changes: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model('Table', tableSchema);
