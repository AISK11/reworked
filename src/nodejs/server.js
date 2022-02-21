#!/usr/bin/env node
"use strict";

/* listening host address:
 * IPv4 & IPv6: ""
 * IPv4:        "0.0.0.0" OR "127.0.0.1"
 * IPv6:        "::0" OR "::1" */
const L_HOST = "";
/* listening port number:
 * 0:             assigend by OS
 * 1 to 1023:     root permission
 * 1024 to 65535: OK */
const L_PORT = 80;

/******************************* express setup ********************************/
const express = require("express");
const server = express();
/* enabled: display "X-Powered-By: Express" HTTP header */
server.set('x-powered-by', false);
/* enabled: "/Foo" and "/foo" are NOT the same */
server.set('case sensitive routing', true);
/* enabled: "/foo" and "/foo/" are NOT the same */
server.set('strict routing', true);

/* logger */
//server.use((req, res, next) => {
//  console.log(`${req.method} ${req.headers.host}${req.url}`);
//  /* execute next matched express server function */
//  next();
//});

/****************************** express routing *******************************/
const router = require('./routes.js');
server.use("/", router);

/***************************** express listening ******************************/
server.listen(L_PORT, L_HOST, () => {
  console.log(`Listening on ${L_HOST}:${L_PORT}`);
});
