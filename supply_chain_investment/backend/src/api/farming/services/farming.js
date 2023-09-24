'use strict';

/**
 * farming service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::farming.farming');
