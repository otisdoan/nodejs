const express = require('express');
const route = express.Router();
const dashboardController = require('../../controllers/admin/dashboard/dashboard.controller');

route.get('/', dashboardController.dashboard)

module.exports = route;