'use strict';

/**
 * product.js controller
 *
 * @description: A set of functions called "actions" for managing `product`.
 */

module.exports = {

  /**
   * Retrieve product records.
   *
   * @return {Object|Array}
   */

//   find: async(ctx) => {
//     if (ctx.query._q) {
//       return strapi.services.product.search(ctx.query);
//     }
//     return strapi.services.product.find(ctx.query);
//   },

  /**
   * Retrieve a product record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.product.findOne(ctx.params);
  },

  /**
   * Count product records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    if (ctx.query._q) {
        return strapi.services.product.countSearch(ctx.query);
      }
      return strapi.services.product.count(ctx.query);
    },

  /**
   * Create a/an product record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.product.create(ctx.request.body);
  },

  /**
   * Update a/an product record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.product.update(ctx.params, ctx.request.body);
  },


  /**
   * Destroy a/an product record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.product.remove(ctx.params);
  },

  delete: async (ctx, next) => {
    return strapi.services.product.delete(ctx.params);
  },

  // added content range for data provider
  find: async (ctx) => {
    ctx.set('Content-Range', await strapi.services.product.count(ctx.query));
    if (ctx.query._q) {
        return strapi.services.product.search(ctx.query);
      }
      return strapi.services.product.find(ctx.query);
  }

};
