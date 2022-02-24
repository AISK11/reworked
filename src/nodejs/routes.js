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

/**************************************/
/************** linuces ***************/
/**************************************/
/*********************************** gentoo ***********************************/
router.all("/notes/linuces/gentoo*", (req, res, next) => {
  /* set data accordingly for website template */
  template.header.img = "/svg/gentoo.svg";
  template.header.href = "/notes/linuces/gentoo";
  /* execute next matched express server function */
  next();
});

router.all("/notes/linuces/gentoo", (req, res) => {
  /* set data accordingly for website template */
  template.title = "Gentoo";
  template.view = `${PublicDir}/views/notes/linuces/gentoo/gentoo.html`;
  /* load website template with data */
  res.render(`${PublicDir}/ejs/article.ejs`, { "template": template });
});

/************ installation ************/

router.all("/notes/linuces/gentoo/installation/download", (req, res) => {
  /* set data accordingly for website template */
  template.title = "Gentoo | Download";
  template.view = `${PublicDir}/views/notes/linuces/gentoo/installation/download.html`;
  /* load website template with data */
  res.render(`${PublicDir}/ejs/article.ejs`, { "template": template });
});

router.all("/notes/linuces/gentoo/installation/pre_installation", (req, res) => {
  /* set data accordingly for website template */
  template.title = "Gentoo | Pre-installation";
  template.view = `${PublicDir}/views/notes/linuces/gentoo/installation/pre_installation.html`;
  /* load website template with data */
  res.render(`${PublicDir}/ejs/article.ejs`, { "template": template });
});

router.all("/notes/linuces/gentoo/installation/installation", (req, res) => {
  /* set data accordingly for website template */
  template.title = "Gentoo | Installation";
  template.view = `${PublicDir}/views/notes/linuces/gentoo/installation/installation.html`;
  /* load website template with data */
  res.render(`${PublicDir}/ejs/article.ejs`, { "template": template });
});

/*******************************************************************************
**                                   Tools                                    **
*******************************************************************************/
router.all("/tools*", (req, res, next) => {
  /* set data accordingly for website template */
  template.header.activeSubroute = "tools";
  /* execute next matched express server function */
  next();
});

router.all("/tools", (req, res) => {
  /* set data accordingly for website template */
  template.title = "Tools";
  template.view = `${PublicDir}/views/tools/tools.html`;
  /* load website template with data */
  res.render(`${PublicDir}/ejs/article.ejs`, { "template": template });
});

/*******************************************************************************
**                                 Downloads                                  **
*******************************************************************************/
router.all("/downloads*", (req, res, next) => {
  /* set data accordingly for website template */
  template.header.activeSubroute = "downloads";
  /* execute next matched express server function */
  next();
});

router.all("/downloads", (req, res) => {
  /* set data accordingly for website template */
  template.title = "Downloads";
  template.view = `${PublicDir}/views/downloads/downloads.html`;
  /* load website template with data */
  res.render(`${PublicDir}/ejs/article.ejs`, { "template": template });
});

/*******************************************************************************
**                                   About                                    **
*******************************************************************************/
router.all("/about*", (req, res, next) => {
  /* set data accordingly for website template */
  template.header.activeSubroute = "about";
  /* execute next matched express server function */
  next();
});

router.all("/about", (req, res) => {
  /* set data accordingly for website template */
  template.title = "About";
  template.view = `${PublicDir}/views/about/about.html`;
  /* load website template with data */
  res.render(`${PublicDir}/ejs/article.ejs`, { "template": template });
});




/*************************** export express router ****************************/
module.exports = router
