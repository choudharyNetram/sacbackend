'use strict';

/**
 * invent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::invent.invent');
