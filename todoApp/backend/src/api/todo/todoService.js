const Todo = require('./todo');

/**

 * @api {get} /todo/id tasks List all task   
 * @apiGroup Tasks
 * @apiSuccess {Object[]} tasks Task'a list
 * @apiSuccess {Number} tasks.id Task id
 * @apiSuccess {String} tasks.description Task description
 * @apiSuccess {Boolean} tasks.done Task is done?
 * @apiSuccess {Date} taks.created_at Register's date
 * @apiSuccessExample {json} Success
 * 
 *      HTTP/1.1 200 OK
 *      [{
 *           "done": false,
 *            "_id": "60d2b7ff265fe63490c48cbe",
 *            "description": "Estudante",
 *           "createdAt": "2021-06-23T04:26:39.842Z",
 *          }]
 *  @apiErrorExample {json} List error
 *      HTTP/1.1 500 Internal Server Error
 *      
*/     

/**
 * @api {post} /tasks create the tasks
 * @apiGroup Tasks
 * @apiSuccess {String} tasks.description Task description
 * @apiSuccess {Number} tasks.id Task id
 * @apiSuccess {Boolean} tasks.done Task is done?
 * @apiSuccess {Date} taks.created_at Register's date
 * @apiSuccessExample {json} Success
 *         HTTP/1.1 201 Created
 *         [{
 *                    "done": false,
 *                     "_id": "60d2b9274d8b5f3cf4c28616",
 *                    "description": "Teste",
 *                    "createdAt": "2021-06-23T04:31:35.149Z",
 *         }]
 * @apiErrorExample {json} List error
 *      HTTP/1.1 500 Internal Server Error
 *      HTTP/1.1 400  Bad Request
*/

/**
 * 
 * @api {put} /tasks update tasks
 * @apiGroup Tasks
 * @apiSuccess {String} tasks.description Task description
 * @apiSuccess {Boolean} tasks.done Task is done?
 * @apiSuccess {Date} taks.created_at Register's date
 *  @apiSuccess {Number} tasks.id Task id
 * @apiSuccessExample {json} Success
 *         HTTP/1.1 200 OK
 *         [{
 *               "done": false,
 *                "_id": "60d290eae69a102dd021ea84",
 *               "description": "Mercado",
 *                "createdAt": "2021-06-23T01:39:54.469Z",
 *         }]
 * @apiErrorExample {json} List error
 *      HTTP/1.1 500 Internal Server Error
*/

/**
 * 
 * @api {delete} /tasks delete task
 * @apiGroup Tasks
 * @apiSuccess {Object[]} tasks Task'a list
 * @apiSuccess {Number} tasks.id Task id
 * @apiSuccessExample {json} Success
 *         HTTP/1.1 204 No Content
 *        
 * @apiErrorExample {json} List error
 *      HTTP/1.1 500 Internal Server Error
*/
Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({ runValidators: true });
module.exports = Todo;