/**
 * @swagger
 * resourcePath: /MenuCategories
 * description: All MenuCategories API
 */

var db = require('../models'),
  _ = require('lodash');


/**
 * @swagger
 * path: /api/menucategories
 * operations:
 *   -  httpMethod: GET
 *      summary: Get list of MenuCategories
 *      responseClass: MenuCategories
 *      consumes:
 *        - application/json
 */
 exports.findAll = function(req, res) {
  var q = req.query.q || "",
    sort = req.query.sort || "id",
    order = req.query.order || "asc",
    page = parseInt(req.query.page) || 1,
    limit = parseInt(req.query.limit) || 20,
    group = req.query.group || "",
    offset = ((page - 1) * limit),
    query = {
      order: sort + ' ' + order,
      offset: offset,
      limit: limit
    };

  if (group) {
    query = _.merge({
      group: group
    }, query);
  };

  if (q) {
    query = _.extend({
    where: ["CONCAT(McCategory) LIKE '%" + q + "%'"]
    }, query);
  };

  db.MenuCategories.findAndCountAll(query)
    .then(function(result) {
      res.jsonp({
        total: result.count,
        page: page,
        limit: limit,
        from: offset + 1,
        to: offset + result.rows.length,
        results: result.rows
      });
    })
}

/**
 * @swagger
 * path: /api/menucategories/{id}
 * operations:
 *   -  httpMethod: GET
 *      summary: Find a MenuCategories by ID
 *      responseClass: MenuCategories
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          paramType: path
 *          type: integer
 *          required: true
 *          description: ID of MenuCategories
 */
exports.find = function(req, res) {
  db.MenuCategories.find({
    where: {
      id: req.param('id')
    }
  }).then(function(entity) {
    if (entity) {
      res.json(entity)
    } else {
      res.send(404)
    }
  })
}


/**
 * @swagger
 * path: /api/menucategories
 * operations:
 *   -  httpMethod: POST
 *      summary: Add a new MenuCategories
 *      responseClass: MenuCategories
 *      consumes:
 *        - application/json
 *      produces:
 *        - application/json
 *      responseMessages:
 *        201:
 *          description: "Success"
 *        405:
 *          description: "Invalid input"
 *      parameters:
 *        - name: body
 *          description: object of MenuCategories
 *          paramType: body
 *          required: true
 *          type: MenuCategories
 */
exports.create = function(req, res) {
  db.MenuCategories.create(req.body).then(function(entity) {
    res.statusCode = 201
    res.json(entity)
  })
}


/**
 * @swagger
 * path: /api/menucategories/{id}
 * operations:
 *   -  httpMethod: PUT
 *      summary: Update an existing MenuCategories by ID
 *      responseClass: MenuCategories
 *      consumes:
 *        - application/json
 *      produces:
 *        - application/json
 *      responseMessages:
 *        200:
 *          description: "Success"
 *        404:
 *          description: "Not found"
 *        405:
 *          description: "Invalid input"
 *      parameters:
 *        - name: id
 *          type: integer
 *          required: true
 *          paramType: path
 *          description: ID of MenuCategories
 *        - name: body
 *          description: object of MenuCategories
 *          paramType: body
 *          required: true
 *          type: MenuCategories
 */
exports.update = function(req, res) {
  db.MenuCategories.find({
    where: {
      id: req.param('id')
    }
  }).then(function(entity) {
    if (entity) {
      entity.updateAttributes(req.body).then(function(entity) {
        res.json(entity)
      })
    } else {
      res.send(404)
    }
  })
}


/**
 * @swagger
 * path: /api/menucategories/{id}
 * operations:
 *   -  httpMethod: DELETE
 *      summary: Delete a MenuCategories by ID
 *      consumes:
 *        - application/json
 *      responseMessages:
 *        204:
 *          description: "Success"
 *        404:
 *          description: "Not found"
 *      parameters:
 *        - name: id
 *          type: integer
 *          paramType: path
 *          required: true
 *          description: ID of MenuCategories
 */
exports.destroy = function(req, res) {
  db.MenuCategories.find({
    where: {
      id: req.param('id')
    }
  }).then(function(entity) {
    if (entity) {
      entity.destroy().then(function() {
        res.send(204)
      })
    } else {
      res.send(404)
    }
  })
}

/**
 * @swagger
 * models:
 *   MenuCategories:
 *     type: object
 *     properties:
 *       mc_category:
 *         type: String
 */
