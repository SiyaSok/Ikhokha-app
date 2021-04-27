const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = (app) => {

    app.use(createProxyMiddleware('/users/sign-up', {
        target: `http://localhost:5000`, headers: {
            accept: "application/json",
            method: "GET",
        }
    })
    );

    app.use(createProxyMiddleware('/products-posts', {
        target: `http://localhost:5000`, headers: {
            accept: "application/json",
            method: "GET",
        }
    })
    );
    app.use(createProxyMiddleware('/products-posts', {
        target: `http://localhost:5000`, headers: {
            accept: "application/json",
            method: "GET",
        }
    })
    );

    app.use(createProxyMiddleware('/blog-posts', {
        target: `http://localhost:5000`, headers: {
            accept: "application/json",
            method: "GET",
        }
    }));
    app.use(createProxyMiddleware('/products-posts', {
        target: `http://localhost:5000`, headers: {
            accept: "application/json",
            method: "PATCH",
        }
    })
    );

    app.use(createProxyMiddleware('/blog-posts', {
        target: `http://localhost:5000`, headers: {
            accept: "application/json",
            method: "PATCH",
        }
    }));
    app.use(createProxyMiddleware('/products-posts', {
        target: `http://localhost:5000`, headers: {
            accept: "application/json",
            method: "DELETE",
        }
    }));
    app.use(createProxyMiddleware('/blog-posts', {
        target: `http://localhost:5000`, headers: {
            accept: "application/json",
            method: "DELETE",
        }
    }));


};