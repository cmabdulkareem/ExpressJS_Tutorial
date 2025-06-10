const sessionOptions = {
    secret: 'yourStrongSecretHere', // use a secure secret in production (from env)
    resave: false,                  // don't save session if unmodified (ex: user doesn't make any changes)
    saveUninitialized: false,       // don't create session until something stored (ex: login - create session when user logs in)
    name: 'session.id',             // optional: rename the session cookie
    rolling: true,                  // refresh expiration on each request (ex: renewal of session cookie on each request)
    cookie: {
        httpOnly: true,               // protects from client-side JS access (protects from XSS attacks)
        secure: false, // only HTTPS in production
        sameSite: 'lax',              // CSRF protection. ('strict', 'lax', 'none')
        maxAge: 1000 * 60 * 60        // 1 hour
    }
}

export default sessionOptions