const mongoose = require('mongoose');

const mapMarkerSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'A mapMarker must have a name'] },
  description: {
    type: String,
    required: [true, 'A mapMarker must have a description'],
  },
  image: { type: String },
  location: {
    type: {
      latitude: {
        type: Number,
        required: [true, 'A mapMarker must have a latitude'],
      },
      longitude: {
        type: Number,
        required: [true, 'A mapMarker must have a longitude'],
      },
    },
    required: [true, 'A mapMarker must have a location'],
  },
});

const MapMarker = mongoose.model('MapMarker', mapMarkerSchema);

module.exports = MapMarker;