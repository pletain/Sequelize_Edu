const models = require('../../models');

exports.get_products = ( _ , res) => {
    // res.render( 'admin/products.html' , 
    //     { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    // );
	models.Products.findAll({
		
	}).then((productList) => { //변수 선언
		res.render('admin/products.html', {productList: productList}) //이제 products반복문을 뿌려주자
	})
}

exports.post_products_write = ( req , res ) => {
	// 
	models.Products.findAll({
		
	}).then((products) =>{
		res.render('admin/products.html', {products : products }) // 내가 이 결과를 이렇게 받겟다.      // DB에서 받은 products를 products변수명으로 내보냄
		});
}
    // models.Products.create({ 	
    //     name : req.body.name, //body-parser로 날아온 name 정보가 들어감
    //     price : req.body.price , //body-parser로 날아온 price 정보가 들어감
    //     description : req.body.description //body-parser로 날아온 description 정보가 들어감
    // }).then( () => { //callback 함수 처리
    //     res.redirect('/admin/products'); // sequelize로 저장 후, 다시 main 페이지로 redirect 시켜준다.
    // });
	
	
// 	   models.Products.create(req.body).then( () => { //callback 함수 처리
//         models.Products.create(req.body).then( () => { //callback 함수 처리
// 			res.redirect('/admin/products'); // sequelize로 저장 후, 다시 main 페이지로 redirect 시켜준다.
//     });
//     });

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}
exports.post_products_write = ( req , res ) => {
    models.Products.create({
        name : req.body.name,
        price : req.body.price ,
        description : req.body.description
    }).then( () => {
        res.redirect('/admin/products');
    });
}