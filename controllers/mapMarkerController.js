const MapMarker = require('../models/mapMarkerModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllMapMarkers = catchAsync(async (req, res) => {
  const mapMarkers = await MapMarker.find();
  res.status(200).json({
    status: 'success',
    results: mapMarkers.length,
    data: {
      mapMarkers,
    },
  });
});

exports.getMapMarker = catchAsync(async (req, res) => {
  const mapMarker = await MapMarker.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      mapMarker,
    },
  });
});

exports.createMapMarker = catchAsync(async (req, res) => {
  const newMapMarker = await MapMarker.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      mapMarker: newMapMarker,
    },
  });
});

exports.updateMapMarker = catchAsync(async (req, res) => {
  const mapMarker = await MapMarker.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: 'success',
    data: {
      mapMarker,
    },
  });
});

exports.deleteMapMarker = catchAsync(async (req, res) => {
  await MapMarker.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: 'success',
    data: null,
  });
});


