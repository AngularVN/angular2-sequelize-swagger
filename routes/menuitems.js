/**
 * @swagger
 * resourcePath: /MenuItems
 * description: All MenuItems API
 */

var db = require('../models'),
  _ = require('lodash');


/**
 * @swagger
 * path: /api/menuitems
 * operations:
 *   -  httpMethod: GET
 *      summary: Get list of MenuItems
 *      responseClass: MenuItems
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
    where: ["CONCAT(MiMenuName, MiMenuDescription, MiPrice) LIKE '%" + q + "%'"]
    }, query);
  };

  db.MenuItems.findAndCountAll(query)
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
 * path: /api/menuitems/{id}
 * operations:
 *   -  httpMethod: GET
 *      summary: Find a MenuItems by ID
 *      responseClass: MenuItems
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          paramType: path
 *          type: integer
 *          required: true
 *          description: ID of MenuItems
 */
exports.find = function(req, res) {
  db.MenuItems.find({
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
 * path: /api/menuitems
 * operations:
 *   -  httpMethod: POST
 *      summary: Add a new MenuItems
 *      responseClass: MenuItems
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
 *          description: object of MenuItems
 *          paramType: body
 *          required: true
 *          type: MenuItems
 */
exports.create = function(req, res) {
  db.MenuItems.create(req.body).then(function(entity) {
    res.statusCode = 201
    res.json(entity)
  })
}


/**
 * @swagger
 * path: /api/menuitems/{id}
 * operations:
 *   -  httpMethod: PUT
 *      summary: Update an existing MenuItems by ID
 *      responseClass: MenuItems
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
 *          description: ID of MenuItems
 *        - name: body
 *          description: object of MenuItems
 *          paramType: body
 *          required: true
 *          type: MenuItems
 */
exports.update = function(req, res) {
  db.MenuItems.find({
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
 * path: /api/menuitems/{id}
 * operations:
 *   -  httpMethod: DELETE
 *      summary: Delete a MenuItems by ID
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
 *          description: ID of MenuItems
 */
exports.destroy = function(req, res) {
  db.MenuItems.find({
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
 *   MenuItems:
 *     type: object
 *     properties:
 *       MiMenuName:
 *         type: String
 *       MiMenuDescription:
 *         type: Text
 *       MiImage:
 *         type: Integer
 *       MiPrice:
 *         type: String
 *       MiCategoryId:
 *         type: Integer
 */
