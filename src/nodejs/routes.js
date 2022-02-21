#!/usr/bin/env node
"use strict";

/******************************* express setup ********************************/
const express = require('express');
const router = express.Router({ strict: true, caseSensitive: true });

/***************************** EJS template data ******************************/
const template = {
  "title": "",
  "header": {
    "img": "",
    "href": "",
    "activeSubroute": ""
  },
  "view": ""
};

/******************************** static files ********************************/
/* directory containing files targeted at user */
const PublicDir = `${__dirname}/../public`;
/* allow serving static files within specified directory, also acts as root
 * directory ("/") for these static files */
router.use(express.static(PublicDir));

/*******************************************************************************
**                                     /*                                     **
*******************************************************************************/
router.all("/*", (req, res, next) => {
  /* set data accordingly for website template */
  template.header.img = "/svg/logo.svg";
  template.header.href = "/";
  /* execute next matched express server function */
  next();
});

/*******************************************************************************
**                                    Home                                    **
*******************************************************************************/
router.all("/", (req, res) => {
  /* set data accordingly for website template */
  template.title = "Home";
  template.header.activeSubroute = "home";
  template.view = `${PublicDir}/views/home/home.html`;
  /* load website template with data */
  res.render(`${PublicDir}/ejs/article.ejs`, { "template": template });
});

/*******************************************************************************
**                                   Notes                                    **
*******************************************************************************/
router.all("/notes*", (req, res, next) => {
  /* set data accordingly for website template */
  template.header.activeSubroute = "notes";
  /* execute next matched express server function */
  next();
});

router.all("/notes", (req, res) => {
  /* set data accordingly for website template */
  template.title = "Notes";
  template.view = `${PublicDir}/views/notes/notes.html`;
  /* load website template with data */
  res.render(`${PublicDir}/ejs/article.ejs`, { "template": template });
});







/*************************** export express router ****************************/
module.exports = router
