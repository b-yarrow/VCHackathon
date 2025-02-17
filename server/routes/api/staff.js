const express = require('express');
const app = express();
const router = express.Router();

const helper = require(__dirname + '/../../helper/helper.js');

const staffList = __dirname + '/../../model/staff.json';
const staffListData = require(staffList);

router.get("/", (req, res) => {
    console.log("i am in the staff route")
    res.json(staffListData)
})

// router.get("/staff", (req, res) => {
//     res.json(productListData)
// })





router.post('/', (req, res) => {
    const { id, date, item, city, quantity, status, description } = req.body
    const warehouse = locationListData.filter(location => {
        return id === location.id
    })

    let newProduct = {
        id: helper.getNewId(),
        name: item,
        refNumber: "JK2020FD7811208",
        location: city,
        descriptionBrief: description,
        descriptionDetail: description,
        orderedBy: warehouse[0].contact.name,
        dateOrdered: date,
        quantity: quantity,
        status: "",
        categories: warehouse[0].categories
    }
    newProduct.status = status ? "In Stock" : "Out of Stock"
    let warehouseIndex = locationListData.findIndex(location => {
        return id === location.id
    })
    locationListData[warehouseIndex].staff.push(newProduct);
    helper.writeJSONFile(locationList, locationListData)
    productListData.push(newProduct);
    helper.writeJSONFile(productList, productListData);
    // res.status(200).json(productListData)
    res.status(200).json(newProduct)
    console.log(newProduct)

})

//  Get product with :id
app.get("/staff/id/:id", (req, res) => {
    // res.send(req.params.id);
    const found = products.some(product => product.id === req.params.id);
    if (found) {
        // res.json(Object(videos.filter(video => video.id === req.params.id)));
        res.json(products.find(product => product.id === req.params.id));
    } else {
        res
            .status(400)
            .json({ errorMessage: `Product with ID:${req.params.id} not found` });
    }
});



module.exports = router