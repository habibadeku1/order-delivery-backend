'use strict';

/**
 * Order.js controller
 *
 * @description: A set of functions called "actions" for managing `Order`.
 */

module.exports = {

  /**
   * Retrieve order records.
   *
   * @return {Object|Array}
   */

//   find: async(ctx) => {
//     if (ctx.query._q) {
//       return strapi.services.order.search(ctx.query);
//     }
//     return strapi.services.order.find(ctx.query);
//   },

  /**
   * Retrieve a order record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.order.findOne(ctx.params);
  },

  /**
   * Count order records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    if (ctx.query._q) {
        return strapi.services.order.countSearch(ctx.query);
      }
      return strapi.services.order.count(ctx.query);
    },

  /**
   * Create a/an order record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.order.create(ctx.request.body);
  },

  /**
   * Update a/an order record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.order.update(ctx.params, ctx.request.body);
  },

  /**
   * Destroy a/an order record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.order.remove(ctx.params);
  },

  delete: async (ctx, next) => {
    return strapi.services.order.delete(ctx.params);
  },

  // added content range for data provider
  find: async (ctx) => {
    ctx.set('Content-Range', await strapi.services.order.count(ctx.query));
    if (ctx.query._q) {
        return strapi.services.order.search(ctx.query);
      }
      return strapi.services.order.find(ctx.query);
  }

};
