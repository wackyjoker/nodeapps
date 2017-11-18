var express 	 = require('express'),
	 app		 = express(),
	 bodyParser  = require('body-parser'),
	 mongoose    = require('mongoose');


mongoose.connect('mongodb://localhost/South_Park');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
// Schema set up
var SouthSchema= new mongoose.Schema({
	name:String,
	image:String,
	description:String
});

var Southpark = mongoose.model('Southpark',SouthSchema);

// Southpark.create(
// {
// 	name:'Stan Marsh',
// 	image:'http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2fdx2fd7x2fTubo-nbsti-1.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f07x3fdcx3d31281832266969x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$',
// 	description:'This is a New shit'
// },function(err,southpark){
// 	if(err){
// 		console.log(err);
// 	} else{
// 		console.log('New Character Created');
// 		console.log(southpark);
// 	}
// });

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
}); // Landing Page


app.get('/southpark', function(req,res){
	//Get all southpark from DataBase
	Southpark.find({}, function(err,allSouthparks){
		if(err){
			console.log(err);
		} else {
			res.render('southpark',{southpark: allSouthparks});
		}
										});
});// INDEX route  - show all southparks
	


app.post('/southpark', function(req,res){
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newSouthpark = {name: name, image: image , description : desc};
	//Create a new southpark and save to DataBase
	Southpark.create(newSouthpark, function(err,newsp){
		if(err){
			console.log(err);
		} else {
			res.redirect('/southpark');
			//redirect back to southpark page
		}
	}); 
	// get data from form and add to southpark array
}); // Create route - add new southpark

app.get('/southpark/new', function(req,res){
	res.render('new');
}); // New - show form to create new southpark

app.get('/southpark/:id',function(req,res){ // Show - Provide All info of this One Object
	//find the southpark with provided ID
	Southpark.findById(req.params.id, function(err,foundSouthpark){
		if(err){
			console.log(err);
		} else{
			res.render('show',{southpark: foundSouthpark});
		}
	});
});

app.listen(3000, function(err){
	if(err){
		console.log(err);
			} else {
	console.log('Server Started');
					}

								});