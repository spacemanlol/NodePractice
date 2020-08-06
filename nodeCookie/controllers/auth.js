const User = require('../models/user');


exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req
  //     .get('Cookie')
  //     .split(';')[1]
  //     .trim()
  //     .split('=')[1] === 'true';
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};


exports.postLogin = (req, res, next) => {
  // Lost after a response
  // req.isLoggedIn = true;
  User.findById('5f2b3ae9611d84d646c2150c')
      .then(user => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        res.redirect('/');
      })
      .catch(err => console.log(err))
};

// exports.postLogin = (req, res, next) => {
//   // Lost after a response
//   // req.isLoggedIn = true;
//
//   req.session.isLoggedIn = true;
//   res.redirect('/');
// };

exports.postLogout = (req, res, next) => {

  req.session.destroy(err => {
    console.log(err)
    res.redirect('/')
  })

};
