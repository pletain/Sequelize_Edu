const models = require('../../models');

exports.get_products = ( _ , res) => {
    res.render( 'admin/products.html' , 
        { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    );
}

exports.post_products_write = ( req , res ) => {
    models.Products.create({ 
        name : req.body.name, //body-parser로 날아온 name 정보가 들어감
        price : req.body.price , //body-parser로 날아온 price 정보가 들어감
        description : req.body.description //body-parser로 날아온 description 정보가 들어감
    }).then( () => { //callback 함수 처리
        res.redirect('/admin/products');
    });
	
}