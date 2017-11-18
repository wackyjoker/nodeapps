var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');

var southpark = [
{name:"eric cartman",image:"http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2fdx2fd5x2fFsjd-dbsunbo.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f261x3fdcx3d31281836256461x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$"},
{name:'stan marsh',image:'http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2fdx2fd7x2fTubo-nbsti-1.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f07x3fdcx3d31281832266969x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$'},
{name:'Kenny McCormick',image:'http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2f7x2f7gx2fLfoozNdDpsnjdl.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f222x3fdcx3d31271510131613x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$'},
{name:'kyle broflovski',image:'http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2f0x2f06x2fLzmf-cspgmpwtlj.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f232x3fdcx3d31281836242035x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$'},
{name:"eric cartman",image:"http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2fdx2fd5x2fFsjd-dbsunbo.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f261x3fdcx3d31281836256461x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$"},
{name:'stan marsh',image:'http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2fdx2fd7x2fTubo-nbsti-1.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f07x3fdcx3d31281832266969x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$'},
{name:'Kenny McCormick',image:'http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2f7x2f7gx2fLfoozNdDpsnjdl.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f222x3fdcx3d31271510131613x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$'},
{name:'kyle broflovski',image:'http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2f0x2f06x2fLzmf-cspgmpwtlj.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f232x3fdcx3d31281836242035x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$'}
];

app.get('/', function(req,res){
	res.render('index');
});


app.get('/southpark', function(req,res){
	res.render('southpark',{southpark: southpark});
});

app.post('/southpark', function(req,res){
	var name = req.body.name;
	var image = req.body.image;
	var newSouthpark = {name: name, image: image};
	southpark.push(newSouthpark);
	// get data from form and add to southpark array
	res.redirect('/southpark');
	//redirect back to southpark page

});

app.get('/southpark/new', function(req,res){
	res.render('new.ejs');
});

app.listen(port, function(){
	console.log('Server Started');
});