"use strict"

var React=require('react');
var ReactDom=require('react-dom');
var  reactclass=require('create-react-class') 

var about= reactclass({
    render :function () {
        return(
            <div className="alert alert-info">
              <strong>Info!</strong> MuthuAboutPage.
            </div>
     )
    }}
)

module.exports= about