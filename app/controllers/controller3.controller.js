const db = require('../config/db.config.js');
const Model2 = db.Model2;

exports.create = (req, res) => {
    let model2 = {};

    try{
        model2.field1 = req.body.field1;
        model2.field2 = req.body.field2;
        model2.field3 = req.body.field3;
        model2.field4 = req.body.field4;
    
        Model2.create(model2).then(result => {    
            res.status(200).json({
                message: "Upload Successfully an entry with id = " + result.id,
                model2: result,
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
    Model2.findAll()
        .then(entries => {
            res.status(200).json({
                message: "Get all entries successfully!",
                model2s: entries
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
    Model2.findByPk(id)
        .then(entry => {
            res.status(200).json({
                message: "Successfully retrieved entry with id = " + id,
                model2: entry
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

    Model2.findAll({
        attributes: ['id', 'field1', 'field2', 'field3', 'field4'],
        where: { field1: field1 }
    })
    .then(results => {
        res.status(200).json({
            message: "Get all entries with field1 = " + field1,
            model2s: results,
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
      
        Model2.findAndCountAll({ limit: limit, offset: offset })
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
                  "model2s": data.rows
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
      
        Model2.findAndCountAll({
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
                    "model2s": data.rows
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
        let model2 = await Model2.findByPk(id);
    
        if(!model2){
            res.status(404).json({
                message: "Not Found for updating an entry with id = " + id,
                model2: "",
                error: "404"
            });
        } else {    
            let updatedObject = {
                field1: req.body.field1,
                field2: req.body.field2,
                field3: req.body.field3,
                field4: req.body.field4
            }
            let result = await Model2.update(updatedObject, { returning: true, where: { id: id } });
            
            if (!result) {
                res.status(500).json({
                    message: "Error -> Cannot update an entry with id = " + req.params.id,
                    error: "Cannot be updated",
                });
            }

            res.status(200).json({
                message: "Update successfully an entry with id = " + id,
                model2: updatedObject,
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
        let model2 = await Model2.findByPk(id);

        if (!model2) {
            res.status(404).json({
                message: "Does not exist an entry with id = " + id,
                error: "404",
            });
        } else {
            await model2.destroy();
            res.status(200).json({
                message: "Delete successfully an entry with id = " + id,
                model2: model2,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> Cannot delete an entry with id = " + req.params.id,
            error: error.message,
        });
    }
}