'use strict';

/**
 * quill service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quill.quill');
