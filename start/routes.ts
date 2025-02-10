/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import ResetPasswordController from '#controllers/reset_password_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'


router.on('/').render('pages/home').as("home")
router.on('/contact').render('pages/contact').as("contact")
router.on('/about').render('pages/about').as("about")

// route à modifier au fur et à mesure de la constructiond du site
// c'était juste le temps que le site soit en construction
router.on('/meetups').render('pages/meetups').as("meetups").use(middleware.auth())
router.on('/pets').render('pages/pets').as("pets").use(middleware.auth())
router.on('/profile').render('pages/profile').as("profile").use(middleware.auth())
router.on('/reviews').render('pages/reviews').as("reviews").use(middleware.auth()) 

// Auth routes
router.get('/register', [AuthController, 'register']).as("auth.register").use(middleware.guest())
router.post('/register', [AuthController, 'handleRegister']).use(middleware.guest())

router.get('/login', [AuthController, 'login']).as("auth.login").use(middleware.guest())
router.post('/login', [AuthController, 'handleLogin']).use(middleware.guest())
router.delete('/login', [AuthController, 'logout']).as("auth.logout").use(middleware.auth())

router.get('/forgot_password', [ResetPasswordController, 'forgotPassword']).as("auth.forgot_password").use(middleware.guest())
router.post('/forgot_password', [ResetPasswordController, 'handleForgotPassword']).use(middleware.guest())

router.get('/reset_password', [ResetPasswordController, 'resetPassword']).as("auth.reset_password").use(middleware.guest())
router.post('/reset_password', [ResetPasswordController, 'handleResetPassword']).as("auth.handle_reset_password").use(middleware.guest())

router.get('/myprofile', [AuthController, 'displayMyProfile']).as("auth.display_my_profile").use(middleware.auth())
router.get('/edit_myprofile', [AuthController, 'editMyProfile']).as("auth.edit_my_profile").use(middleware.auth())
router.post('/edit_myprofile', [AuthController, 'updateMyProfile']).as("auth.update_my_profile").use(middleware.auth())

