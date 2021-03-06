module.exports = function () {
    var faker = require("faker");
    faker.locale = "zh_CN";
    var _ = require("lodash");
    return {
    people: _.times(100, function (n) {
    return {
    id: n,
    name: faker.name.findName(),
    avatar: faker.internet.avatar()
    }
    }),
    address: _.times(100, function (n) {
    return {
    id: faker.random.number(),
    city: faker.address.city(),
    county: faker.address.county()
    }
    }),
    "tableData": [{
    "id":1,
    "date": "2016-05-03",
    "name": "王小虎",
    "province": "上海",
    "city": "普陀区",
    "address": "上海市普陀区金沙江路 1518 弄",
    "zip": 200333
    }, {
    "id":2,
    "date": "2016-05-02",
    "name": "王小虎",
    "province": "上海",
    "city": "普陀区",
    "address": "上海市普陀区金沙江路 1518 弄",
    "zip": 200333
    }, {
    "id":3,
    "date": "2016-05-04",
    "name": "王小虎",
    "province": "上海",
    "city": "普陀区",
    "address": "上海市普陀区金沙江路 1518 弄",
    "zip": 200333
    }, {
    "id":4,
    "date": "2016-05-01",
    "name": "王小虎",
    "province": "上海",
    "city": "普陀区",
    "address": "上海市普陀区金沙江路 1518 弄",
    "zip": 200333
    }]
    }
    }
    