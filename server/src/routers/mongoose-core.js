function bindDefaultCreateModel(router, path, mongooseModel) {
    router.post(path, async function(req, res) {
        const book = new mongooseModel(req.body)
        await book.save()
        res.status(201).send(book)
    })
}

function bindDefaultDeleteByKeys(router, path, mongooseModel, possibleKeys) {
    router.delete(path, async function(req, res) {
        const key = Object.keys(req.query).find(key => possibleKeys.includes(key))
        mongooseModel.deleteOne({ [key] : req.query[key] }, (err,result) => {
            if(err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    })
}

function bindDefaultDeleteAll(router, path, mongooseModel) {
    router.delete(path, async (req, res) => {
        mongooseModel.deleteMany({}, (err, result) => {
            if(err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    });
}

function bindDefaultGetAll(router, path, mongooseModel) {
    router.get(path, async function(req, res) {
        res.send(await mongooseModel.find());
    })
}

module.exports = {
    bindDefaultDeleteAll,
    bindDefaultGetAll,
    bindDefaultDeleteByKeys,
    bindDefaultCreateModel
}