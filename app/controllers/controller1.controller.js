const db = require('../config/db.config.js');
const Model1 = db.Model1;

exports.create = (req, res) => {
    let model1 = {};

    try{
        model1.field1 = req.body.field1;
        model1.field2 = req.body.field2;
        model1.field3 = req.body.field3;
        model1.field4 = req.body.field4;
    
        Model1.create(model1).then(result => {    
            res.status(200).json({
                message: "Upload Successfully an entry with id = " + result.id,
                model1: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.retrieveAll = (req, res) => {
    Model1.findAll()
        .then(entries => {
            res.status(200).json({
                message: "Get all entries successfully!",
                model1s: entries
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

exports.getById = (req, res) => {
    let id = req.params.id;
    Model1.findByPk(id)
        .then(entry => {
            res.status(200).json({
                message: "Successfully retrieved entry with id = " + id,
                model1: entry
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

exports.filterByField = (req, res) => {
    let field1 = req.query.field1;

    Model1.findAll({
        attributes: ['id', 'field1', 'field2', 'field3', 'field4'],
        where: { field1: field1 }
    })
    .then(results => {
        res.status(200).json({
            message: "Get all entries with field1 = " + field1,
            model1s: results,
        });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
}

exports.pagination = (req, res) => {
    try {
        let page = parseInt(req.query.page);
        let limit = parseInt(req.query.limit);
      
        const offset = page ? page * limit : 0;
      
        Model1.findAndCountAll({ limit: limit, offset: offset })
          .then(data => {
            const totalPages = Math.ceil(data.count / limit);
            const response = {
              message: "Paginating is completed! Query parameters: page = " + page + ", limit = " + limit,
              data: {
                  "totalItems": data.count,
                  "totalPages": totalPages,
                  "limit": limit,
                  "currentPageNumber": page + 1,
                  "currentPageSize": data.rows.length,
                  "model1s": data.rows
              }
            };
            res.send(response);
          });  
    } catch (error) {
        res.status(500).send({
          message: "Error -> Can NOT complete a paging request!",
          error: error.message,
        });
    }    
}

exports.pagingFilteringSorting = (req, res) => {
    try {
        let page = parseInt(req.query.page);
        let limit = parseInt(req.query.limit);
        let field1 = req.query.field1;
      
        const offset = page ? page * limit : 0;
      
        Model1.findAndCountAll({
            attributes: ['id', 'field1', 'field2', 'field3', 'field4'],
            where: { field1: field1 },
            order: [
                ['field1', 'ASC'],
                ['field2', 'DESC']
            ],
            limit: limit, 
            offset: offset 
        })
        .then(data => {
            const totalPages = Math.ceil(data.count / limit);
            const response = {
                message: "Pagination, Filtering, and Sorting request is completed! Query parameters: page = " + page + ", limit = " + limit + ", field1 = " + field1,
                data: {
                    "totalItems": data.count,
                    "totalPages": totalPages,
                    "limit": limit,
                    "field1-filtering": field1,
                    "currentPageNumber": page + 1,
                    "currentPageSize": data.rows.length,
                    "model1s": data.rows
                }
            };
            res.send(response);
        });  
    } catch (error) {
        res.status(500).send({
          message: "Error -> Can NOT complete a paging request!",
          error: error.message,
        });
    }      
}

exports.updateById = async (req, res) => {
    try {
        let id = req.params.id;
        let model1 = await Model1.findByPk(id);
    
        if(!model1){
            res.status(404).json({
                message: "Not Found for updating an entry with id = " + id,
                model1: "",
                error: "404"
            });
        } else {    
            let updatedObject = {
                field1: req.body.field1,
                field2: req.body.field2,
                field3: req.body.field3,
                field4: req.body.field4
            }
            let result = await Model1.update(updatedObject, { returning: true, where: { id: id } });
            
            if (!result) {
                res.status(500).json({
                    message: "Error -> Cannot update an entry with id = " + req.params.id,
                    error: "Cannot be updated",
                });
            }

            res.status(200).json({
                message: "Update successfully an entry with id = " + id,
                model1: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> Cannot update an entry with id = " + req.params.id,
            error: error.message
        });
    }
}

exports.deleteById = async (req, res) => {
    try {
        let id = req.params.id;
        let model1 = await Model1.findByPk(id);

        if (!model1) {
            res.status(404).json({
                message: "Does not exist an entry with id = " + id,
                error: "404",
            });
        } else {
            await model1.destroy();
            res.status(200).json({
                message: "Delete successfully an entry with id = " + id,
                model1: model1,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> Cannot delete an entry with id = " + req.params.id,
            error: error.message,
        });
    }
}