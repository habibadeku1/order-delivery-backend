'use strict';

/**
 * itemized.js controller
 *
 * @description: A set of functions called "actions" for managing `itemized`.
 */

module.exports = {

  /**
   * Retrieve itemized records.
   *
   * @return {Object|Array}
   */

//   find: async(ctx) => {
//     if (ctx.query._q) {
//       return strapi.services.itemized.search(ctx.query);
//     }
//     return strapi.services.itemized.find(ctx.query);
//   },

  /**
   * Retrieve a itemized record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.itemized.findOne(ctx.params);
  },

  /**
   * Count itemized records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    if (ctx.query._q) {
        return strapi.services.itemized.countSearch(ctx.query);
      }
      return strapi.services.itemized.count(ctx.query);
    },

  /**
   * Create a/an itemized record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.itemized.create(ctx.request.body);
  },

  /**
   * Update a/an itemized record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.itemized.update(ctx.params, ctx.request.body);
  },

  /**
   * Destroy a/an itemized record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.itemized.remove(ctx.params);
  },

  delete: async (ctx, next) => {
    return strapi.services.itemized.delete(ctx.params);
  },

  // added content range for data provider
  find: async (ctx) => {
    ctx.set('Content-Range', await strapi.services.itemized.count(ctx.query));
    if (ctx.query._q) {
        return strapi.services.itemized.search(ctx.query);
      }
      return strapi.services.itemized.find(ctx.query);
  }

};
