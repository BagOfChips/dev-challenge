let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { TITLE: '<title> here' });
});

router.post('/submitEmail', (req, res) => {
	let email = req && req.body && req.body.email;
	let response = email ? "THANKS! WELCOME TO OUR COMMUNITY" : "SOMETHING WENT WRONG! :(";
	res.send(response);
});


module.exports = router;
