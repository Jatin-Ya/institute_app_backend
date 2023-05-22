const express = require('express');

const router = express.Router();

const mapMarkerController = require('../controllers/mapMarkerController');

router
  .route('/')
  .get(mapMarkerController.getAllMapMarkers)
  .post(mapMarkerController.createMapMarker);
router
  .route('/:id')
  .get(mapMarkerController.getMapMarker)
  .patch(mapMarkerController.updateMapMarker)
  .delete(mapMarkerController.deleteMapMarker);

module.exports = router;