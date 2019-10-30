(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-record/add-record.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-record/add-record.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-striped table-bordered\">    \r\n    <tbody>    \r\n         <tr>    \r\n          <td>    \r\n            <label>Date</label>\r\n            <input  class=\"form-control \"\r\n            type=\"date\" \r\n            placeholder=\"Fecha\" \r\n            [(ngModel)]=\"rs.FechaHoy\"\r\n            name = \"fecha\"\r\n            required>\r\n          </td>    \r\n          <td>\r\n            <label>Time</label>\r\n            <input class=\"form-control \"\r\n            type=\"time\" \r\n            [(ngModel)] = \"rs.Hora\"\r\n            name=\"hora\"\r\n            id = \"hora\"\r\n            required >\r\n      </td>\r\n    </tbody>    \r\n</table>    \r\n<div class=\"col\">\r\n    <label>Record Type</label>\r\n    <select \r\n        name=\"rectype\"\r\n        class=\"form-control\"\r\n        required\r\n        [(ngModel)] = \"rs.RecType\"\r\n        (change)=\"onSelectedItemChanged(rs.RecType)\"\r\n        name = \"rectype\">\r\n            <option *ngFor=\"let item of rs.RecTypes\" [selected]=\"item.Id == rs.RecType\" [value]=\"item.Id\">{{item.value}}</option> \r\n        </select>\r\n</div>\r\n\r\n\r\n<div id=\"common row\">\r\n    <h3><span class=\"badge badge-secondary\">{{rs.RecType}}</span></h3>\r\n    <router-outlet></router-outlet>\r\n               \r\n    <div  class =\"row\">\r\n        <!--\r\n        <button \r\n        class=\"btn btn-danger\" \r\n        [disabled]=\"!rs.EnableSave\"\r\n        (click) = \"Save()\"\r\n        type=\"submit\">Save</button>\r\n    \r\n        <button \r\n        class=\"btn btn-primary\" \r\n        [disabled]=\"rs.EnableSave\"\r\n        type=\"Reset\">Clear</button>\r\n        -->\r\n        <!--<input type=\"hidden\" [(ngModel)]=\"rs.message\">-->\r\n    </div>\r\n    <div class=\"footer\">\r\n        <strong>\r\n       <p>{{rs.message}}</p>\r\n    </strong>\r\n    </div>\r\n                \r\n                \r\n               \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-mainmenu (featureSelected)=\"onNavigate($event)\"></app-mainmenu>\n<div class =\"container\">\n    <div class=\"row\">\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/base-record/base-record.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/base-record/base-record.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    Fecha:\n    <input type=\"datetime-local\" placeholder=\"Fecha\" [(ngModel)]=\"fecha\" value={{getDateString()}}>\n</div>\n<div class=\"row\">\n    Record Type:\n    <select id=\"rectype\" name=\"rectype\"\n            (change)=\"onSelectedItemChanged()\"\n            [(ngModel)]=\"rectype\" class=\"form-control\">\n           <option *ngFor=\"let item of items\" [value]=\"item.Id\">{{item.value}}</option> \n        </select>\n</div>\n\n<div id=\"dynamic\" class=\"container\">\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/data-export/data-export.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/data-export/data-export.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<button class=\"btn-danger\"\n    (click)= \"clearData()\"\n>Clear</button>\n<textarea class=\"container\"\n    name=\"data\" cols=60 rows=20\n    [(ngModel)]=\"rs.Data\">\n</textarea>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drug-record/drug-record.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drug-record/drug-record.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit(f3)\" #f3=\"ngForm\">\r\n    <div class=\"form-group\" style=\"margin-top: 5%\">    \r\n    <table class=\"table table-striped table-bordered\">    \r\n        <thead>    \r\n            <tr>    \r\n                <th>X</th>    \r\n                <th>Drug Item</th>    \r\n                <th>Qty</th>    \r\n                <th>Units</th>\r\n                <th>Item</th>    \r\n            </tr>    \r\n        </thead>    \r\n        <tbody>    \r\n             <tr *ngFor=\"let dr of drugRecords; let i = index;\">    \r\n              <td (click)=\"deleteRow(i)\">    \r\n                <i class=\"fa fa-trash fa-1x\"></i>    \r\n              </td>    \r\n              <td>\r\n                <select \r\n                [name]=\"rs.getName('drugItemid',i)\"\r\n                class=\"form-control\"\r\n                required\r\n                [(ngModel)] = \"dr.Id\"\r\n                (change)=\"onItemChanged(dr.Id,i)\">\r\n                   <option *ngFor=\"let item of rs.DrugItems\"  [selected]=\"item.Id == dr.Id\"  [value]=\"item.Id\">{{item.value}}</option> \r\n                </select>                \r\n              </td>\r\n                <td>    \r\n                    {{dr.cant}}\r\n                </td>  \r\n                <td>{{dr.unidad}}</td>\r\n                <td>\r\n                  <img [src]=\"dr.image\" class=\"img-responsive\" style=\"max-height: 40px;\">\r\n                </td>  \r\n            </tr>   \r\n            <!--\r\n            <tr>    \r\n              <td (click)=\"addRow(i)\">    \r\n                <i class=\"fa fa-plus fa-1x\"></i>    \r\n              </td>    \r\n            </tr>    \r\n            --> \r\n        </tbody>    \r\n    </table>    \r\n  </div>    \r\n  <button \r\nclass=\"btn btn-primary\" \r\ntype=\"submit\">Submit</button>\r\n\r\n</form>\r\n<!--\r\n    //todo: never enabling the button, removed temporarluy\r\n    [disabled]=\"!f3.valid\"\r\n\r\n-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercise-record/exercise-record.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exercise-record/exercise-record.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit(f2)\" #f2=\"ngForm\">\r\n\r\n            <div class=\"form-group\">\r\n            <input class=\"form-control input-lg\"\r\n            type=\"number\" \r\n            placeholder=\"Distance\" \r\n            ngModel\r\n            name = \"distance\"\r\n            min=\"500\"\r\n            max=\"4000\"\r\n            required\r\n            #distance=\"ngModel\"><span class=\"help-block\" *ngIf=\"!distance.valid && distance.touched\">Please enter Distance</span>\r\n            </div>\r\n\r\n        <div class=\"form-group\">\r\n        <input \r\n            type=\"number\" \r\n            placeholder=\"HH\" \r\n            ngModel\r\n            name = \"hh\"\r\n            min=\"0\"\r\n            max=\"4\"\r\n            #hh=\"ngModel\">\r\n\r\n\r\n        <input \r\n            type=\"number\" \r\n            placeholder=\"MM\" \r\n            ngModel\r\n            name = mm\r\n            min=\"0\"\r\n            max=\"59\">\r\n    \r\n        <input \r\n            type=\"number\" \r\n            placeholder=\"SS\" \r\n            ngModel\r\n            name = \"ss\"\r\n            min=\"0\"\r\n            max=\"59\">\r\n\r\n        </div>\r\n        \r\n        <div class= \"form-group\">\r\n        <input class=\"form-control input-lg\"\r\n        type=\"number\" \r\n        placeholder=\"Calories\" \r\n        ngModel\r\n        name = \"calories\"\r\n        min=\"0\"\r\n        max=\"2000\"\r\n        required\r\n        #calories=\"ngModel\"><span class=\"help-block\" *ngIf=\"!calories.valid && calories.touched\">Please enter Calory count</span>\r\n        </div>\r\n    <button \r\nclass=\"btn btn-primary\" \r\n[disabled]=\"!f2.valid\"\r\ntype=\"submit\">Submit</button>\r\n    \r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/expenses-record/expenses-record.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expenses-record/expenses-record.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>expenses-record works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>filter works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/food-item/food-item.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-item/food-item.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/food-record/food-record.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-record/food-record.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>food record</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/glucose-record/glucose-record.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/glucose-record/glucose-record.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit(f2)\" #f2=\"ngForm\">\r\n        <div class=\"form-group\">\r\n    <input class=\"form-control input-lg\" \r\n        type=\"number\" \r\n        placeholder=\"Glucose Measure\" \r\n        ngModel\r\n        name = \"glucose\"\r\n        min=\"20\"\r\n        max=\"300\"\r\n        required\r\n        #glucose=\"ngModel\"><span class=\"help-block\" *ngIf=\"!glucose.valid && glucose.touched\">Please enter a Glucose value</span>\r\n</div>\r\n<button \r\nclass=\"btn btn-primary\" \r\n[disabled]=\"!f2.valid\"\r\ntype=\"submit\">Submit</button>\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Cesar's Records</h1>\n<div style=\"background-color:black; color:white\" class=\"d-flex justify-content-start\">\n        <button type=\"button\" class=\"btn btn-success\" >Multi Input\n        </button>\n        <button type=\"button\" class=\"btn btn-dark\" onclick=initRegistrar()>Nuevo\n        </button>\n        <button type=\"button\" class=\"btn btn-dark\" onclick=\"saveRecord()\">Guardar\n        </button>\n        <button type=\"button\" class=\"btn btn-dark\" onclick=\"viewData()\">Data\n        </button>\n     </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>home page dworks!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/incomes-record/incomes-record.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/incomes-record/incomes-record.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>incomes-record works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mainmenu/mainmenu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainmenu/mainmenu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<h3 class=\"container\">Cesar Records</h3>-->\r\n<nav class=\"navbar navbar-default\">\r\n<div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n        <a routerLink=\"/\" class=\"navbar-brand\">Cesar Records</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n            <li><a routerLinkActive=\"active\" routerLink=\"/\">Nuevo</a></li>\r\n            <li><a routerLinkActive=\"active\" routerLink=\"/Data\">Data</a></li>\r\n            <li><a routerLinkActive=\"active\" routerLink=\"/Filter\">Filter</a></li>\r\n            <li><a routerLinkActive=\"active\" routerLink=\"/FoodItems\">Food Items</a></li>\r\n            <li><a routerLinkActive=\"active\" routerLink=\"/DrugItems\">Drug Items</a></li>\r\n            <li><a routerLinkActive=\"active\" routerLink=\"/Settings\">Settings</a></li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li class=\"dropdown\"></li>\r\n            <a class=\"dropdown-toggle\" role=\"button\">Manejar</a>\r\n            <span class=\"caret\"></span>\r\n            <ul class=\"dropdown-menu\">\r\n                <li><a href=\"#\">Save</a></li>\r\n                <li><a href=\"#\">Retreieve</a></li>\r\n            </ul>\r\n        </ul>\r\n    </div>\r\n</div>\r\n</nav>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meal/meal.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meal/meal.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <form (ngSubmit)=\"onSubmit(f2)\" #f2=\"ngForm\">\r\n        <div class=\"form-group\" style=\"margin-top: 5%\">    \r\n            <table class=\"table table-striped table-bordered\">    \r\n        <thead>    \r\n            <tr>    \r\n                <th>X</th>    \r\n                <th>Food Item</th>    \r\n                <th>Qty</th>    \r\n                <th>Units</th>\r\n                <th>Item</th>    \r\n            </tr>    \r\n        </thead>    \r\n        <tbody>    \r\n             <tr *ngFor=\"let fr of foodRecords; let i = index;\">    \r\n              <td (click)=\"deleteRow(i)\">    \r\n                <i class=\"fa fa-trash fa-1x\"></i>    \r\n              </td>    \r\n              <td>\r\n                <select \r\n                [name]=\"rs.getName('foodItemId',i)\"\r\n                class=\"form-control\"\r\n                required\r\n                [(ngModel)] = \"fr.foodItemId\"\r\n                (change)=\"onSelectedFoodItemChanged(fr.foodItemId,i)\">\r\n                   <option *ngFor=\"let item of rs.FoodItems\"  [selected]=\"item.Id == fr.foodItemId\"  [value]=\"item.Id\">{{item.value}}</option> \r\n                </select>                \r\n              </td>\r\n                <td>    \r\n                  <input [disabled]=\"fr.foodItemId==null\" \r\n                    [name]=\"rs.getName('cant',i)\" \r\n                    [(ngModel)]=\"fr.cant\" class=\"form-control\" required type=\"number\" \r\n                    (focusout)=\"calcCant(fr.foodItemId, i, fr.cant)\"/>    \r\n                </td>  \r\n                <td>{{fr.fi.unidad}}</td>\r\n                <td>\r\n                  <img [src]=\"fr.fi.image\" class=\"img-responsive\" style=\"max-height: 40px;\">\r\n                </td>  \r\n            </tr>    \r\n            <!--\r\n            <tr>    \r\n              <td (click)=\"addRow(i)\">    \r\n                <i class=\"fa fa-plus fa-1x\"></i>    \r\n              </td>    \r\n            </tr>    \r\n            -->\r\n        </tbody>    \r\n    </table>    \r\n  </div>    \r\n\r\n  <button \r\nclass=\"btn btn-primary\" \r\n[disabled]=\"false\"\r\ntype=\"submit\">Submit</button>\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pressure-record/pressure-record.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pressure-record/pressure-record.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit(f2)\" #f2=\"ngForm\">\r\n        <div class=\"form-group\">\r\n                <input class=\"form-control input-lg\"\r\n                    type=\"number\" \r\n                    placeholder=\"Dyastolilc\" \r\n                    ngModel\r\n                    name = \"dyastolic\"\r\n                    min=\"0\"\r\n                    max=\"400\"\r\n                    required\r\n                    #dyastolic=\"ngModel\"><span class=\"help-block\" *ngIf=\"!dyastolic.valid && dyastolic.touched\">Please enter Dyastolic</span>\r\n        </div>\r\n        \r\n                <div class=\"form-group\">\r\n                <input class=\"form-control input-lg\"\r\n                    type=\"number\" \r\n                    placeholder=\"Systolic\" \r\n                    ngModel\r\n                    name = \"systolic\"\r\n                    min=\"0\"\r\n                    max=\"200\"\r\n                    required\r\n                    #systolic=\"ngModel\"><span class=\"help-block\" *ngIf=\"!systolic.valid && systolic.touched\">Please enter Systolic</span>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control input-lg\"\r\n                    type=\"number\" \r\n                    placeholder=\"Heart Rate\" \r\n                    ngModel\r\n                    name = heartRate\r\n                    min=\"0\"\r\n                    max=\"200\"\r\n                    required\r\n                    #heartRate=\"ngModel\"><span class=\"help-block\" *ngIf=\"!heartRate.valid && heartRate.touched\">Please enter Heart Rate</span>                    \r\n                </div>\r\n            <button \r\n        class=\"btn btn-primary\" \r\n        [disabled]=\"!f2.valid\"\r\n        type=\"submit\">Submit</button>\r\n            \r\n        </form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/status-bar/status-bar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/status-bar/status-bar.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{rs.message}}</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/weight-record/weight-record.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/weight-record/weight-record.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit(f2)\" #f2=\"ngForm\">\r\n        <div class=\"form-group\">\r\n                <input class=\"form-control input-lg\"\r\n                    type=\"number\" \r\n                    placeholder=\"Weight\" \r\n                    ngModel\r\n                    name = \"weight\"\r\n                    min=\"0\"\r\n                    max=\"400\"\r\n                    required\r\n                    #weight=\"ngModel\"><span class=\"help-block\" *ngIf=\"!weight.valid && weight.touched\">Please enter Weight</span>\r\n        </div>\r\n                <div class=\"form-group\">\r\n                <input class=\"form-control input-lg\"\r\n                    type=\"number\" \r\n                    placeholder=\"Fat\" \r\n                    ngModel\r\n                    name = \"fat\"\r\n                    min=\"0\"\r\n                    max=\"200\"\r\n                    required\r\n                    #fat=\"ngModel\"><span class=\"help-block\" *ngIf=\"!fat.valid && fat.touched\">Please enter Fat</span>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <input class=\"form-control input-lg\"\r\n                    type=\"number\" \r\n                    placeholder=\"non Fat\" \r\n                    ngModel\r\n                    name = nonFat\r\n                    min=\"0\"\r\n                    max=\"200\"\r\n                    required\r\n                    #nonFat=\"ngModel\"><span class=\"help-block\" *ngIf=\"!nonFat.valid && nonFat.touched\">Please enter non Fat</span>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                        <input class=\"form-control input-lg\"\r\n                        type=\"number\" \r\n                        placeholder=\"% FAT\" \r\n                        ngModel\r\n                        name = fatPorc\r\n                        min=\"0\"\r\n                        max=\"200\"\r\n                        disabled\r\n                        >\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                            <input class=\"form-control input-lg\"\r\n                            type=\"number\" \r\n                            placeholder=\"BMI\" \r\n                            ngModel\r\n                            name = bmi\r\n                            min=\"0\"\r\n                            max=\"200\"\r\n                            required\r\n                            #bmi=\"ngModel\"><span class=\"help-block\" *ngIf=\"!bmi.valid && bmi.touched\">Please enter BMI</span>                    \r\n                        </div>\r\n        \r\n    \r\n            <button \r\n        class=\"btn btn-primary\" \r\n        [disabled]=\"!f2.valid\"\r\n        type=\"submit\">Submit</button>\r\n            \r\n        </form>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/CesarRecord.service.ts":
/*!****************************************!*\
  !*** ./src/app/CesarRecord.service.ts ***!
  \****************************************/
/*! exports provided: RecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordService", function() { return RecordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models/SelectItem */ "./src/app/Models/SelectItem.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Models/FoodItem */ "./src/app/Models/FoodItem.ts");
/* harmony import */ var _Models_DrugItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Models/DrugItem */ "./src/app/Models/DrugItem.ts");
/* harmony import */ var _Models_urlItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Models/urlItem */ "./src/app/Models/urlItem.ts");






let RecordService = class RecordService {
    constructor() {
        this.records = [];
        this.rt = [];
        this.units = [];
        this.brands = [];
        this.foodItems = [];
        this.drugItems = [];
        this.Hora = "";
        this.RecType = "FOOD";
        this.EnableSave = false;
        this.brandItems = [];
        this.initialize();
    }
    get DrugItems() { return this.drugItems; }
    get message() {
        return this._message;
    }
    set message(v) {
        this._message = v;
    }
    get isError() {
        return this._isError;
    }
    set isError(v) {
        this._isError = v;
    }
    //genric finder     
    getUrl(coll, id) {
        return coll.filter(x => x.id == id)[0].url;
    }
    getBrand(brandId) {
        let x = this.brandItems.filter(x => x.id == brandId)[0];
        if (!x)
            x = new _Models_urlItem__WEBPACK_IMPORTED_MODULE_5__["urlItem"]("", "", "");
        return x;
    }
    getName(name, id) {
        return name + id.toString();
    }
    initialize() {
        this.FechaHoy = new Date();
        this.Hora = `${this.FechaHoy.getHours()}:${this.FechaHoy.getMinutes()}`;
        this.Load();
        this.message = "Ready";
        this.loadBrands();
        this.loadDrugItems();
    }
    loadBrands() {
        this.brandItems = [];
        this.brandItems.push(new _Models_urlItem__WEBPACK_IMPORTED_MODULE_5__["urlItem"]("CNP", "Conaprole", ""));
        this.brandItems.push(new _Models_urlItem__WEBPACK_IMPORTED_MODULE_5__["urlItem"]("COK", "Coca Cola", ""));
        this.brandItems.push(new _Models_urlItem__WEBPACK_IMPORTED_MODULE_5__["urlItem"]("PAT", "Patricia", ""));
        this.brandItems.push(new _Models_urlItem__WEBPACK_IMPORTED_MODULE_5__["urlItem"]("LAY", "Lays", ""));
        this.brandItems.push(new _Models_urlItem__WEBPACK_IMPORTED_MODULE_5__["urlItem"]("DISCO", "DISCO", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-cavcNMeRzLdzfFTmbbPVQHAd-KFzRtaQWl99fDZnwPm_2P49Lg&s"));
        this.brandItems.push(new _Models_urlItem__WEBPACK_IMPORTED_MODULE_5__["urlItem"]("CNP", "Conaprole", "data:image/png;base64,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"));
    }
    Add(r) {
        r.Id = this.records.length;
        this.records.push(r);
        this.EnableSave = true;
        this.message = `Record Added:${r.RecType} ${r.Id}`;
        console.log(this.message);
        return r.Id;
    }
    Load() {
        let serialized = localStorage.getItem("data");
        if (serialized != null) {
            this.records = JSON.parse(serialized);
            this.message = `Data Loaded. ${this.records.length} records`;
        }
    }
    GetRecords() {
        return this.records;
    }
    get Brands() {
        return this.brands;
    }
    get RecTypes() {
        this.rt = [];
        this.rt.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("", "Select Record Type"));
        this.rt.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("FOOD", "Food"));
        this.rt.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("DRUG", "Drug"));
        this.rt.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("GLUC", "Glucose"));
        this.rt.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("PRES", "Pressure"));
        this.rt.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("WGT", "Weight"));
        this.rt.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("EXE", "Exercise"));
        //this.rt.push(new SelectItem("$EX","Expenses"));
        //this.rt.push(new SelectItem("$IN","Incomes"));
        return this.rt;
    }
    get Units() {
        this.units = [];
        this.units.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("GR", "Grams"));
        this.units.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("mg", "MiliGrams"));
        this.units.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("ml", "Mililiters"));
        this.units.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("OZ", "Ounces"));
        this.units.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("LT", "Liter"));
        this.units.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("LB", "Pound"));
        this.units.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("uL", "uL"));
        this.units.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"]("U", "Unit"));
        return this.units;
    }
    loadDrugItems() {
        this.drugItems = [];
        this.drugItems.push(new _Models_DrugItem__WEBPACK_IMPORTED_MODULE_4__["DrugItem"]("DIAF", "Diaformina", 850, "ml", "ROEMMERS", "data:image/jpeg;base64,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"));
        this.drugItems.push(new _Models_DrugItem__WEBPACK_IMPORTED_MODULE_4__["DrugItem"]("CORIZAN", "Corizan", 50, "uL", "", "data:image/jpeg;base64,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"));
        this.drugItems.push(new _Models_DrugItem__WEBPACK_IMPORTED_MODULE_4__["DrugItem"]("CRESTOR", "Crestor Rosuvastatina", 10, "mg", "AstraZeneca", "data:image/jpeg;base64,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"));
        this.drugItems.push(new _Models_DrugItem__WEBPACK_IMPORTED_MODULE_4__["DrugItem"]("DIARIS", "DIARIS", 1, "U", "Poen", "data:image/jpeg;base64,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"));
        this.drugItems.push(new _Models_DrugItem__WEBPACK_IMPORTED_MODULE_4__["DrugItem"]("TAROPLEN", "Taroplen (micardis)", 40, "mg", "Lazar", "data:image/jpeg;base64,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"));
        this.drugItems.push(new _Models_DrugItem__WEBPACK_IMPORTED_MODULE_4__["DrugItem"]("NOVONORM", "Novonorm", 1, "mg", "novo nordisk", "data:image/jpeg;base64,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"));
        this.drugItems.push(new _Models_DrugItem__WEBPACK_IMPORTED_MODULE_4__["DrugItem"]("LORATADINA", "Loratadina", 10, "mg", "Urufarma", "data:image/jpeg;base64,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"));
        return this.drugItems;
    }
    get FoodItems() {
        this.foodItems = [];
        //todo: fake list
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"](null, "Select Item"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("EGG", "Huevos", 1, "U", "DISCO", "https://as01.epimg.net/deporteyvida/imagenes/2017/06/23/portada/1498239720_938816_1498240077_noticia_normal.jpg"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("BRD", "Pan frances", 1, "U", "DISCO", "https://img.vixdata.io/pd/webp-large/es/sites/default/files/imj/elgranchef/p/pan-frances.jpg"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("RCE", "Arroz", 100, "GR", "DISCO", "data:image/jpeg;base64,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"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("MET", "Carne", 200, "GR", "DISCO", "https://www.purina.com/sites/g/files/auxxlc196/files/styles/facebook_share/public/purina-can-dogs-eat-real-meat-500x300.jpg?itok=IJ3xiqyx"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("CHK", "Pollo", 200, "GR", "DISCO", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBwYoGxaKZ776G-nkjFu6BcbZcWGpionqP3lDY81NuG8aD-YWRg&s"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("FF", "French Fries", 100, "GR", "DISCO", "data:image/jpeg;base64,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"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("WAT", "Water", 100, "GR", "DISCO", "data:image/jpeg;base64,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"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("TUN", "Tuna", 100, "GR", "DISCO", "data:image/jpeg;base64,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"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("SAL", "Salad", 100, "GR", "DISCO", "data:image/jpeg;base64,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"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("MIC", "Milanesa Carne", 100, "GR", "DISCO", "data:image/jpeg;base64,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"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("CHV", "Chivito", 100, "GR", "DISCO", "data:image/jpeg;base64,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"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("LMY", "Lemeyun", 100, "GR", "DISCO", "data:image/jpeg;base64,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"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("PP1", "Papas Fritas bolsa", 100, "GR", "DISCO", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltZFxWiId2nh1JQAYGKQnOhM4qSZB6wgBuPfz8swyPdRf7afmDA&s"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("PP2", "Papas Fritas Tubo", 100, "GR", "DISCO", "data:image/jpeg;base64,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"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("CRP", "Creps", 100, "GR", "DISCO", "data:image/jpeg;base64,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"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("CAN", "Canelones", 100, "GR", "DISCO", "data:image/jpeg;base64,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"));
        this.foodItems.push(new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("LAS", "Lasagna", 100, "GR", "DISCO", "data:image/jpeg;base64,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"));
        return this.foodItems;
    }
    GetSelectFoodItem(id) {
        this.EnableSave = false;
        return this.foodItems.filter(x => x.Id == id)[0];
    }
    GetSelectDrugItem(id) {
        this.EnableSave = false;
        return this.drugItems.filter(x => x.Id == id)[0];
        // let x = new DrugItem("","")
        // for(let item of this.drugItems )
        // {
        //     if ( item.Id == id )
        //     {
        //         x = item;
        //         console.log('drug item found:', x)
        //         break;
        //     }
        // }
        // return x;
    }
    GetSelectItem(id) {
        //TODO: THIS SHOULD NOT BE NECESARY, SHOULD BE LOADED BY TWO WAY BINDING AND IS NOT DOING SO
        //this.RecType = id;
        console.log(`"GetSelectedItem:${id}"`);
        this.EnableSave = false;
        return this.rt.filter(x => x.Id == id)[0];
    }
    //todo: make load and save async await
    Save() {
        let serialized = JSON.stringify(this.records);
        localStorage.setItem("data", serialized);
        this.message = `Data Saved, total records: ${this.records.length}`;
        console.log(this.message);
        console.log(serialized);
        this.EnableSave = false;
        return this.records.length;
    }
    get Data() {
        return JSON.stringify(this.records);
    }
    clearData() {
        this.records = [];
        this.Save();
        this.message = "Data was cleared.";
    }
};
RecordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], RecordService);



/***/ }),

/***/ "./src/app/Models/BaseRecord.ts":
/*!**************************************!*\
  !*** ./src/app/Models/BaseRecord.ts ***!
  \**************************************/
/*! exports provided: BaseRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRecord", function() { return BaseRecord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaseRecord {
    get Id() {
        return this._id;
    }
    set Id(v) {
        this._id = v;
    }
    get Date() {
        return this._Date;
    }
    set Date(v) {
        this._Date = v;
    }
    get RecType() {
        return this._RecType;
    }
    set RecType(v) {
        this._RecType = v;
    }
    constructor(fecha, hora, rectype) {
        let hc = hora.split(':');
        this._Date = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDay(), +hc[0], +hc[1], 0);
        this._RecType = rectype;
    }
}


/***/ }),

/***/ "./src/app/Models/DrugItem.ts":
/*!************************************!*\
  !*** ./src/app/Models/DrugItem.ts ***!
  \************************************/
/*! exports provided: DrugItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugItem", function() { return DrugItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _SelectItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectItem */ "./src/app/Models/SelectItem.ts");


class DrugItem extends _SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"] {
    constructor(id, value, cant = 0, unidad = "", brand = "", image = "") {
        super(id, value);
        this.cant = 0;
        this.image = "";
        this.brand = "";
        this.unidad = "";
        this.cant = cant;
        this.image = image;
        this.brand = brand;
        this.unidad = unidad;
    }
}


/***/ }),

/***/ "./src/app/Models/DrugRecord.ts":
/*!**************************************!*\
  !*** ./src/app/Models/DrugRecord.ts ***!
  \**************************************/
/*! exports provided: DrugRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugRecord", function() { return DrugRecord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _BaseRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseRecord */ "./src/app/Models/BaseRecord.ts");


class DrugRecord extends _BaseRecord__WEBPACK_IMPORTED_MODULE_1__["BaseRecord"] {
    constructor(fecha, hora, rectype) {
        super(fecha, hora, rectype);
        this.drugItems = [];
    }
}


/***/ }),

/***/ "./src/app/Models/ExerciseRecotd.ts":
/*!******************************************!*\
  !*** ./src/app/Models/ExerciseRecotd.ts ***!
  \******************************************/
/*! exports provided: ExerciseRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseRecord", function() { return ExerciseRecord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _BaseRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseRecord */ "./src/app/Models/BaseRecord.ts");


class ExerciseRecord extends _BaseRecord__WEBPACK_IMPORTED_MODULE_1__["BaseRecord"] {
    constructor(fecha, hora, rectype, distance, duration, calories) {
        super(fecha, hora, rectype);
        this._hours = 0;
        this._mins = 0;
        this._secs = 0;
        this._distance = distance;
        this._calories = calories;
        let dd = duration.split(':');
        if (dd.length > 0)
            this.hours = +dd[0];
        if (dd.length > 1)
            this.mins = +dd[1];
        if (dd.length > 2)
            this.secs = +dd[2];
    }
    get distance() {
        return this._distance;
    }
    set distance(v) {
        this._distance = v;
    }
    get hours() {
        return this._hours;
    }
    set hours(v) {
        this._hours = v;
    }
    get mins() {
        return this._mins;
    }
    set mins(v) {
        this._mins = v;
    }
    get secs() {
        return this._secs;
    }
    set secs(v) {
        this._secs = v;
    }
    get calories() {
        return this._calories;
    }
    set calories(v) {
        this._calories = v;
    }
}


/***/ }),

/***/ "./src/app/Models/FoodItem.ts":
/*!************************************!*\
  !*** ./src/app/Models/FoodItem.ts ***!
  \************************************/
/*! exports provided: FoodItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItem", function() { return FoodItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _SelectItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectItem */ "./src/app/Models/SelectItem.ts");


class FoodItem extends _SelectItem__WEBPACK_IMPORTED_MODULE_1__["SelectItem"] {
    constructor(id, value, cant = 0, unidad = "", brand = "", image = "") {
        super(id, value);
        this._cant = 0;
        this._sugar = 0;
        this._fat = 0;
        this._sodium = 0;
        this._calories = 0;
        this._prot = 0;
        this.cant = cant;
        this.image = image;
        this.brand = brand;
        this.unidad = unidad;
    }
    get cant() {
        return this._cant;
    }
    set cant(v) {
        this._cant = v;
    }
    get unidad() {
        return this._unidad;
    }
    set unidad(v) {
        this._unidad = v;
    }
    get brand() {
        return this._brand;
    }
    set brand(v) {
        this._brand = v;
    }
    get image() {
        return this._image;
    }
    set image(v) {
        this._image = v;
    }
    get sugar() {
        return this._sugar;
    }
    set sugar(v) {
        this._sugar = v;
    }
    get fat() {
        return this._fat;
    }
    set fat(v) {
        this._fat = v;
    }
    get sodium() {
        return this._sodium;
    }
    set sodium(v) {
        this._sodium = v;
    }
    get calories() {
        return this._calories;
    }
    set calories(v) {
        this._calories = v;
    }
    get prot() {
        return this._prot;
    }
    set prot(v) {
        this._prot = v;
    }
}


/***/ }),

/***/ "./src/app/Models/FoodItemRecordSave.ts":
/*!**********************************************!*\
  !*** ./src/app/Models/FoodItemRecordSave.ts ***!
  \**********************************************/
/*! exports provided: FoodItemRecordSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemRecordSave", function() { return FoodItemRecordSave; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FoodItemRecordSave {
    get foodItemId() {
        return this._foodItemId;
    }
    set foodItemId(v) {
        this._foodItemId = v;
    }
    get cant() {
        return this._cant;
    }
    set cant(v) {
        this._cant = v;
    }
    get sugar() {
        return this._sugar;
    }
    set sugar(v) {
        this._sugar = v;
    }
    get fat() {
        return this._fat;
    }
    set fat(v) {
        this._fat = v;
    }
    get sodium() {
        return this._sodium;
    }
    set sodium(v) {
        this._sodium = v;
    }
    get calories() {
        return this._calories;
    }
    set calories(v) {
        this._calories = v;
    }
    constructor(foodItemId, cant, sugar, fat, sodium, calories) {
        this.foodItemId = foodItemId;
        this.cant = cant;
    }
}


/***/ }),

/***/ "./src/app/Models/FoodRecord.ts":
/*!**************************************!*\
  !*** ./src/app/Models/FoodRecord.ts ***!
  \**************************************/
/*! exports provided: FoodRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodRecord", function() { return FoodRecord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FoodRecord {
    constructor() {
        this._sugar = 0;
        this._fat = 0;
        this._sodium = 0;
        this._calories = 0;
        this._prot = 0;
    }
    get cant() {
        return this._cant;
    }
    set cant(v) {
        this._cant = v;
    }
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    get foodItemId() {
        return this._foodItemId;
    }
    set foodItemId(v) {
        this._foodItemId = v;
    }
    get fi() {
        return this._fi;
    }
    set fi(v) {
        this._fi = v;
    }
    get sugar() {
        return this._sugar;
    }
    set sugar(v) {
        this._sugar = v;
    }
    get fat() {
        return this._fat;
    }
    set fat(v) {
        this._fat = v;
    }
    get sodium() {
        return this._sodium;
    }
    set sodium(v) {
        this._sodium = v;
    }
    get calories() {
        return this._calories;
    }
    set calories(v) {
        this._calories = v;
    }
    get prot() {
        return this._prot;
    }
    set prot(v) {
        this._prot = v;
    }
    get brand() {
        return this._brand;
    }
    set brand(v) {
        this._brand = v;
    }
}


/***/ }),

/***/ "./src/app/Models/GlucoseRecord.ts":
/*!*****************************************!*\
  !*** ./src/app/Models/GlucoseRecord.ts ***!
  \*****************************************/
/*! exports provided: GlucoseRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlucoseRecord", function() { return GlucoseRecord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _BaseRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseRecord */ "./src/app/Models/BaseRecord.ts");


class GlucoseRecord extends _BaseRecord__WEBPACK_IMPORTED_MODULE_1__["BaseRecord"] {
    get glucose() {
        return this._glucose;
    }
    set glucose(v) {
        this._glucose = v;
    }
    constructor(fecha, hora, rectype, glucose) {
        super(fecha, hora, rectype);
        this._glucose = glucose;
    }
}


/***/ }),

/***/ "./src/app/Models/MealRecord.ts":
/*!**************************************!*\
  !*** ./src/app/Models/MealRecord.ts ***!
  \**************************************/
/*! exports provided: MealRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealRecord", function() { return MealRecord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _BaseRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseRecord */ "./src/app/Models/BaseRecord.ts");


class MealRecord extends _BaseRecord__WEBPACK_IMPORTED_MODULE_1__["BaseRecord"] {
    constructor(fecha, hora, rectype) {
        super(fecha, hora, rectype);
        this.frs = [];
    }
}


/***/ }),

/***/ "./src/app/Models/PressureRecord.ts":
/*!******************************************!*\
  !*** ./src/app/Models/PressureRecord.ts ***!
  \******************************************/
/*! exports provided: PressureRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressureRecord", function() { return PressureRecord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _BaseRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseRecord */ "./src/app/Models/BaseRecord.ts");


class PressureRecord extends _BaseRecord__WEBPACK_IMPORTED_MODULE_1__["BaseRecord"] {
    get systolic() {
        return this._systolic;
    }
    set systolic(v) {
        this._systolic = v;
    }
    get dyastolic() {
        return this._dyastolic;
    }
    set dyastolic(v) {
        this._dyastolic = v;
    }
    get hertRate() {
        return this._hertRate;
    }
    set hertRate(v) {
        this._hertRate = v;
    }
    constructor(fecha, hora, rectype) {
        super(fecha, hora, rectype);
    }
}


/***/ }),

/***/ "./src/app/Models/SelectItem.ts":
/*!**************************************!*\
  !*** ./src/app/Models/SelectItem.ts ***!
  \**************************************/
/*! exports provided: SelectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectItem", function() { return SelectItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SelectItem {
    get group() {
        return this._group;
    }
    set group(v) {
        this._group = v;
    }
    get Id() {
        return this._Id;
    }
    set Id(v) {
        this._Id = v;
    }
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v;
    }
    constructor(id, value) {
        this._Id = id;
        this._value = value;
    }
}


/***/ }),

/***/ "./src/app/Models/WeightRecord.ts":
/*!****************************************!*\
  !*** ./src/app/Models/WeightRecord.ts ***!
  \****************************************/
/*! exports provided: WeightRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightRecord", function() { return WeightRecord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _BaseRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseRecord */ "./src/app/Models/BaseRecord.ts");


class WeightRecord extends _BaseRecord__WEBPACK_IMPORTED_MODULE_1__["BaseRecord"] {
    constructor(fecha, hora, rectype) {
        super(fecha, hora, rectype);
    }
}


/***/ }),

/***/ "./src/app/Models/urlItem.ts":
/*!***********************************!*\
  !*** ./src/app/Models/urlItem.ts ***!
  \***********************************/
/*! exports provided: urlItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlItem", function() { return urlItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class urlItem {
    constructor(id, description, url) {
        this.id = "";
        this.description = "";
        this.url = "";
        this.id = id;
        this.description = description;
        this.url = url;
    }
}


/***/ }),

/***/ "./src/app/add-record/add-record.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-record/add-record.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.select.ng-invalid.ng-touched {\r\n    border: 1px solid red; \r\n}\r\n\r\n.statusmessge {\r\n    padding:20;\r\n    background-color: lightgreen;\r\n    border: 1px solid green;\r\n}\r\n\r\n.form-group{\r\n  padding:2px;\r\n  border:2px solid;\r\n  border-radius: 10px;\r\n  margin:2px;\r\n}\r\n\r\n.form-group1>label1{\r\n  position:absolute;\r\n  top:-1px;\r\n  left:30px;\r\n  background-color:white;\r\n}\r\n\r\n.form-group>input{\r\n  border:none;\r\n}\r\n\r\nhr.new5 {\r\n  border: 10px solid green;\r\n  border-radius: 5px;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: green;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXJlY29yZC9hZGQtcmVjb3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFHQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZGQtcmVjb3JkL2FkZC1yZWNvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LnNlbGVjdC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkOyBcclxufVxyXG5cclxuLnN0YXR1c21lc3NnZSB7XHJcbiAgICBwYWRkaW5nOjIwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiAgcGFkZGluZzoycHg7XHJcbiAgYm9yZGVyOjJweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjoycHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAxPmxhYmVsMXtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6LTFweDtcclxuICBsZWZ0OjMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXA+aW5wdXR7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcbmhyLm5ldzUge1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCBncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/add-record/add-record.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-record/add-record.component.ts ***!
  \****************************************************/
/*! exports provided: AddRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecordComponent", function() { return AddRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _CesarRecord_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CesarRecord.service */ "./src/app/CesarRecord.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


//import { RecType } from '../Models/RecTypes';


let AddRecordComponent = class AddRecordComponent {
    constructor(rs, router, route) {
        this.rs = rs;
        this.router = router;
        this.route = route;
        this.rectype = "GLUC";
        this.defaultRec = this.rectype;
        this.rItems = [];
        this.currentTime = "";
        this.fechaHoy = new Date();
        this.currentTime = this.fechaHoy.getHours() + ":" +
            this.fechaHoy.getMinutes();
    }
    onSelectedItemChanged(rectype) {
        //lect: 165 go to route proghramatifcdally
        console.log('RecType Selected', this.rs.RecType);
        this.rectype = rectype;
        let rt = this.rs.GetSelectItem(this.rs.RecType);
        if (rt != undefined) {
            console.log('onSelectedItemChanged, recType:', rt);
            this.router.navigate([rt.value], { relativeTo: this.route });
        }
        else {
            throw new Error("Invalid record type at add-record-component.ts onSelectedItemChanged");
        }
    }
    clearForm() {
        this.rs.initialize();
    }
    ngOnInit() {
        //this.onSelectedItemChanged(this.rs.RecType);
        //this.router.navigateByUrl(`'/Nuevo/${this.rs.RecType}'`)
    }
    Save() {
        this.rs.Save();
    }
};
AddRecordComponent.ctorParameters = () => [
    { type: _CesarRecord_service__WEBPACK_IMPORTED_MODULE_2__["RecordService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], AddRecordComponent.prototype, "dataForm", void 0);
AddRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-record',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-record.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-record/add-record.component.html")).default,
        providers: [_CesarRecord_service__WEBPACK_IMPORTED_MODULE_2__["RecordService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-record.component.css */ "./src/app/add-record/add-record.component.css")).default]
    })
], AddRecordComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-record/add-record.component */ "./src/app/add-record/add-record.component.ts");
/* harmony import */ var _glucose_record_glucose_record_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glucose-record/glucose-record.component */ "./src/app/glucose-record/glucose-record.component.ts");
/* harmony import */ var _drug_record_drug_record_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drug-record/drug-record.component */ "./src/app/drug-record/drug-record.component.ts");
/* harmony import */ var _pressure_record_pressure_record_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pressure-record/pressure-record.component */ "./src/app/pressure-record/pressure-record.component.ts");
/* harmony import */ var _weight_record_weight_record_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weight-record/weight-record.component */ "./src/app/weight-record/weight-record.component.ts");
/* harmony import */ var _exercise_record_exercise_record_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exercise-record/exercise-record.component */ "./src/app/exercise-record/exercise-record.component.ts");
/* harmony import */ var _expenses_record_expenses_record_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./expenses-record/expenses-record.component */ "./src/app/expenses-record/expenses-record.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _meal_meal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./meal/meal.component */ "./src/app/meal/meal.component.ts");
/* harmony import */ var _data_export_data_export_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data-export/data-export.component */ "./src/app/data-export/data-export.component.ts");













const appRoutes = [
    { path: '', redirectTo: '/Nuevo', pathMatch: 'full' },
    { path: 'Nuevo', component: _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_3__["AddRecordComponent"], children: [
            { path: 'Glucose', component: _glucose_record_glucose_record_component__WEBPACK_IMPORTED_MODULE_4__["GlucoseRecordComponent"] },
            { path: 'Food', component: _meal_meal_component__WEBPACK_IMPORTED_MODULE_11__["MealComponent"] },
            { path: 'Drug', component: _drug_record_drug_record_component__WEBPACK_IMPORTED_MODULE_5__["DrugRecordComponent"] },
            { path: 'Pressure', component: _pressure_record_pressure_record_component__WEBPACK_IMPORTED_MODULE_6__["PressureRecordComponent"] },
            { path: 'Weight', component: _weight_record_weight_record_component__WEBPACK_IMPORTED_MODULE_7__["WeightRecordComponent"] },
            { path: 'Exercise', component: _exercise_record_exercise_record_component__WEBPACK_IMPORTED_MODULE_8__["ExerciseRecordComponent"] },
            { path: 'Expenses', component: _expenses_record_expenses_record_component__WEBPACK_IMPORTED_MODULE_9__["ExpensesRecordComponent"] },
            { path: 'Incomes', component: _exercise_record_exercise_record_component__WEBPACK_IMPORTED_MODULE_8__["ExerciseRecordComponent"] },
        ] },
    { path: 'Filter', component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__["FilterComponent"] },
    { path: 'Data', component: _data_export_data_export_component__WEBPACK_IMPORTED_MODULE_12__["DataExportComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'CesarRegs';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-record/add-record.component */ "./src/app/add-record/add-record.component.ts");
/* harmony import */ var _base_record_base_record_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-record/base-record.component */ "./src/app/base-record/base-record.component.ts");
/* harmony import */ var _mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainmenu/mainmenu.component */ "./src/app/mainmenu/mainmenu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _CesarRecord_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CesarRecord.service */ "./src/app/CesarRecord.service.ts");
/* harmony import */ var _glucose_record_glucose_record_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./glucose-record/glucose-record.component */ "./src/app/glucose-record/glucose-record.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _food_record_food_record_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./food-record/food-record.component */ "./src/app/food-record/food-record.component.ts");
/* harmony import */ var _drug_record_drug_record_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./drug-record/drug-record.component */ "./src/app/drug-record/drug-record.component.ts");
/* harmony import */ var _pressure_record_pressure_record_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pressure-record/pressure-record.component */ "./src/app/pressure-record/pressure-record.component.ts");
/* harmony import */ var _weight_record_weight_record_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./weight-record/weight-record.component */ "./src/app/weight-record/weight-record.component.ts");
/* harmony import */ var _exercise_record_exercise_record_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./exercise-record/exercise-record.component */ "./src/app/exercise-record/exercise-record.component.ts");
/* harmony import */ var _expenses_record_expenses_record_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./expenses-record/expenses-record.component */ "./src/app/expenses-record/expenses-record.component.ts");
/* harmony import */ var _incomes_record_incomes_record_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./incomes-record/incomes-record.component */ "./src/app/incomes-record/incomes-record.component.ts");
/* harmony import */ var _status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./status-bar/status-bar.component */ "./src/app/status-bar/status-bar.component.ts");
/* harmony import */ var _food_item_food_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./food-item/food-item.component */ "./src/app/food-item/food-item.component.ts");
/* harmony import */ var _meal_meal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./meal/meal.component */ "./src/app/meal/meal.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _data_export_data_export_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./data-export/data-export.component */ "./src/app/data-export/data-export.component.ts");

//run locally angular
//https://stackoverflow.com/questions/54143002/run-angular-7-project-locally-on-file-without-server



























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_7__["AddRecordComponent"],
            _base_record_base_record_component__WEBPACK_IMPORTED_MODULE_8__["BaseRecordComponent"],
            _mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_9__["MainmenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _glucose_record_glucose_record_component__WEBPACK_IMPORTED_MODULE_12__["GlucoseRecordComponent"],
            _filter_filter_component__WEBPACK_IMPORTED_MODULE_13__["FilterComponent"],
            _food_record_food_record_component__WEBPACK_IMPORTED_MODULE_14__["FoodRecordComponent"],
            _drug_record_drug_record_component__WEBPACK_IMPORTED_MODULE_15__["DrugRecordComponent"],
            _pressure_record_pressure_record_component__WEBPACK_IMPORTED_MODULE_16__["PressureRecordComponent"],
            _weight_record_weight_record_component__WEBPACK_IMPORTED_MODULE_17__["WeightRecordComponent"],
            _exercise_record_exercise_record_component__WEBPACK_IMPORTED_MODULE_18__["ExerciseRecordComponent"],
            _expenses_record_expenses_record_component__WEBPACK_IMPORTED_MODULE_19__["ExpensesRecordComponent"],
            _incomes_record_incomes_record_component__WEBPACK_IMPORTED_MODULE_20__["IncomesRecordComponent"],
            _status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_21__["StatusBarComponent"],
            _food_item_food_item_component__WEBPACK_IMPORTED_MODULE_22__["FoodItemComponent"],
            _meal_meal_component__WEBPACK_IMPORTED_MODULE_23__["MealComponent"],
            _data_export_data_export_component__WEBPACK_IMPORTED_MODULE_27__["DataExportComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_25__["ToastrModule"].forRoot()
        ],
        providers: [_CesarRecord_service__WEBPACK_IMPORTED_MODULE_11__["RecordService"],
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_26__["APP_BASE_HREF"], useValue: '/' },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_26__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_26__["HashLocationStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/base-record/base-record.component.css":
/*!*******************************************************!*\
  !*** ./src/app/base-record/base-record.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2UtcmVjb3JkL2Jhc2UtcmVjb3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/base-record/base-record.component.ts":
/*!******************************************************!*\
  !*** ./src/app/base-record/base-record.component.ts ***!
  \******************************************************/
/*! exports provided: BaseRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRecordComponent", function() { return BaseRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Models_SelectItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/SelectItem */ "./src/app/Models/SelectItem.ts");



let BaseRecordComponent = class BaseRecordComponent {
    constructor() {
        this.hora = "";
        this.items = [];
        this.fecha = new Date();
        this.hora = "00:00";
        //todo: how to pre initialize the date control in the html.
        this.items.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_2__["SelectItem"]("FOOD", "Food"));
        this.items.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_2__["SelectItem"]("DRUG", "Drugs"));
        this.items.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_2__["SelectItem"]("GLUC", "Glucose"));
        this.items.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_2__["SelectItem"]("PRES", "Presure"));
        this.items.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_2__["SelectItem"]("WGT", "Weight"));
        this.items.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_2__["SelectItem"]("EXE", "Exercise"));
        this.items.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_2__["SelectItem"]("$EX", "Expenses"));
        this.items.push(new _Models_SelectItem__WEBPACK_IMPORTED_MODULE_2__["SelectItem"]("$IN", "Incomes"));
        this.rectype = this.items[0].Id;
    }
    ngOnInit() {
    }
    onSelectedItemChanged() {
        alert(this.rectype);
    }
};
BaseRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base-record',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./base-record.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/base-record/base-record.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./base-record.component.css */ "./src/app/base-record/base-record.component.css")).default]
    })
], BaseRecordComponent);



/***/ }),

/***/ "./src/app/data-export/data-export.component.css":
/*!*******************************************************!*\
  !*** ./src/app/data-export/data-export.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtZXhwb3J0L2RhdGEtZXhwb3J0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/data-export/data-export.component.ts":
/*!******************************************************!*\
  !*** ./src/app/data-export/data-export.component.ts ***!
  \******************************************************/
/*! exports provided: DataExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataExportComponent", function() { return DataExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-record/add-record.component */ "./src/app/add-record/add-record.component.ts");



let DataExportComponent = class DataExportComponent extends _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_2__["AddRecordComponent"] {
    //copy top clipboard
    //https://efficientuser.com/2019/04/04/angular-copy-to-clipboard-feature/
    ngOnInit() {
        super.ngOnInit();
    }
    onSubmit(form) {
        console.log("data submit");
    }
    clearData() {
        let ask = confirm("Are you sure you want to CLEAR ALL the data?");
        if (ask)
            this.rs.clearData();
    }
};
DataExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data-export',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./data-export.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/data-export/data-export.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./data-export.component.css */ "./src/app/data-export/data-export.component.css")).default]
    })
], DataExportComponent);



/***/ }),

/***/ "./src/app/drug-record/drug-record.component.css":
/*!*******************************************************!*\
  !*** ./src/app/drug-record/drug-record.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.select.ng-invalid.ng-touched {\r\n    border: 1px solid red; \r\n}\r\n\r\n.statusmessge {\r\n    padding:20;\r\n    background-color: lightgreen;\r\n    border: 1px solid green;\r\n}\r\n\r\n.form-group{\r\n  padding:2px;\r\n  border:2px solid;\r\n  border-radius: 10px;\r\n  margin:2px;\r\n}\r\n\r\n.form-group1>label1{\r\n  position:absolute;\r\n  top:-1px;\r\n  left:30px;\r\n  background-color:white;\r\n}\r\n\r\n.form-group>input{\r\n  border:none;\r\n}\r\n\r\nhr.new5 {\r\n  border: 10px solid green;\r\n  border-radius: 5px;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: green;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJ1Zy1yZWNvcmQvZHJ1Zy1yZWNvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOztBQUdBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2RydWctcmVjb3JkL2RydWctcmVjb3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgXHJcbn1cclxuXHJcbi5zdGF0dXNtZXNzZ2Uge1xyXG4gICAgcGFkZGluZzoyMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gIHBhZGRpbmc6MnB4O1xyXG4gIGJvcmRlcjoycHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46MnB4O1xyXG59XHJcbi5mb3JtLWdyb3VwMT5sYWJlbDF7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOi0xcHg7XHJcbiAgbGVmdDozMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwPmlucHV0e1xyXG4gIGJvcmRlcjpub25lO1xyXG59XHJcblxyXG5oci5uZXc1IHtcclxuICBib3JkZXI6IDEwcHggc29saWQgZ3JlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/drug-record/drug-record.component.ts":
/*!******************************************************!*\
  !*** ./src/app/drug-record/drug-record.component.ts ***!
  \******************************************************/
/*! exports provided: DrugRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugRecordComponent", function() { return DrugRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Models_DrugRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/DrugRecord */ "./src/app/Models/DrugRecord.ts");
/* harmony import */ var _Models_DrugItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/DrugItem */ "./src/app/Models/DrugItem.ts");
/* harmony import */ var _CesarRecord_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CesarRecord.service */ "./src/app/CesarRecord.service.ts");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-record/add-record.component */ "./src/app/add-record/add-record.component.ts");







let DrugRecordComponent = class DrugRecordComponent extends _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_6__["AddRecordComponent"] {
    constructor(rs, router, route) {
        super(rs, router, route);
        this.rs = rs;
        this.router = router;
        this.route = route;
        this.drugRecords = [];
        this.di = null;
    }
    ngOnInit() {
        super.ngOnInit();
        this.addRow(0);
    }
    onSubmit(form) {
        console.log("drug submit");
        let dr = new _Models_DrugRecord__WEBPACK_IMPORTED_MODULE_3__["DrugRecord"](this.rs.FechaHoy, this.rs.Hora, this.rs.RecType);
        dr.drugItems = [];
        //todo: do this with filter and map
        for (let item of this.drugRecords) {
            if (item.cant > 0) {
                dr.drugItems.push(item.Id);
            }
        }
        this.rs.Add(dr);
        let rows = this.rs.Save();
        this.drugRecords = [];
        this.addRow(0);
        this.rs.message = `Saved Complete. ${this.rs.RecType} ${rows} records.`;
    }
    onItemChanged(drugId, id) {
        this.drugRecords[id] = this.rs.GetSelectDrugItem(drugId);
        if (id == this.drugRecords.length - 1)
            this.addRow(id);
    }
    addRow(index) {
        this.di = new _Models_DrugItem__WEBPACK_IMPORTED_MODULE_4__["DrugItem"]("", "");
        this.drugRecords.push(this.di);
        //this.toastr.success('New row added successfully', 'New Row');  
        this.rs.message = 'New row added successfully. ' + this.rs.DrugItems.length.toString();
        //console.log(this.rs.DrugItems);
        return true;
    }
    deleteRow(index) {
        if (this.drugRecords.length == 1) {
            //this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
            this.rs.message = "Can't delete the row when there is only one row";
            return false;
        }
        else {
            this.drugRecords.splice(index, 1);
            //this.toastr.warning('Row deleted successfully', 'Delete row');  
            this.rs.message = 'Row deleted successfully', 'Delete row';
            return true;
        }
    }
};
DrugRecordComponent.ctorParameters = () => [
    { type: _CesarRecord_service__WEBPACK_IMPORTED_MODULE_5__["RecordService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DrugRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drug-record',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drug-record.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drug-record/drug-record.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drug-record.component.css */ "./src/app/drug-record/drug-record.component.css")).default]
    })
], DrugRecordComponent);



/***/ }),

/***/ "./src/app/exercise-record/exercise-record.component.css":
/*!***************************************************************!*\
  !*** ./src/app/exercise-record/exercise-record.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.select.ng-invalid.ng-touched {\r\n    border: 1px solid red; \r\n}\r\n\r\n.statusmessge {\r\n    padding:20;\r\n    background-color: lightgreen;\r\n    border: 1px solid green;\r\n}\r\n\r\n.form-group{\r\n  padding:2px;\r\n  border:2px solid;\r\n  border-radius: 10px;\r\n  margin:2px;\r\n}\r\n\r\n.form-group1>label1{\r\n  position:absolute;\r\n  top:-1px;\r\n  left:30px;\r\n  background-color:white;\r\n}\r\n\r\n.form-group>input{\r\n  border:none;\r\n}\r\n\r\nhr.new5 {\r\n  border: 10px solid green;\r\n  border-radius: 5px;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: green;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpc2UtcmVjb3JkL2V4ZXJjaXNlLXJlY29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qix1QkFBdUI7QUFDM0I7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpc2UtcmVjb3JkL2V4ZXJjaXNlLXJlY29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7IFxyXG59XHJcblxyXG4uc3RhdHVzbWVzc2dlIHtcclxuICAgIHBhZGRpbmc6MjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcblxyXG4uZm9ybS1ncm91cHtcclxuICBwYWRkaW5nOjJweDtcclxuICBib3JkZXI6MnB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOjJweDtcclxufVxyXG4uZm9ybS1ncm91cDE+bGFiZWwxe1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDotMXB4O1xyXG4gIGxlZnQ6MzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cD5pbnB1dHtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG5cclxuaHIubmV3NSB7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGdyZWVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/exercise-record/exercise-record.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/exercise-record/exercise-record.component.ts ***!
  \**************************************************************/
/*! exports provided: ExerciseRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseRecordComponent", function() { return ExerciseRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Models_ExerciseRecotd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/ExerciseRecotd */ "./src/app/Models/ExerciseRecotd.ts");
/* harmony import */ var _CesarRecord_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CesarRecord.service */ "./src/app/CesarRecord.service.ts");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-record/add-record.component */ "./src/app/add-record/add-record.component.ts");






let ExerciseRecordComponent = class ExerciseRecordComponent extends _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_5__["AddRecordComponent"] {
    constructor(rs, router, route) {
        super(rs, router, route);
        this.rs = rs;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    onSubmit(form) {
        console.log("exercise submit");
        console.log(form.value);
        console.log(`fechaHoy:${this.rs.FechaHoy}`);
        console.log(`CurrentTime:${this.rs.Hora}`);
        console.log(`REc Type: [${this.rs.RecType}]`);
        let gr = new _Models_ExerciseRecotd__WEBPACK_IMPORTED_MODULE_3__["ExerciseRecord"](this.rs.FechaHoy, this.rs.Hora, this.rs.RecType, form.value.distance, `${form.value.hh}:${form.value.mm}:${form.value.ss}`, form.value.calories);
        let id = this.rs.Add(gr);
    }
};
ExerciseRecordComponent.ctorParameters = () => [
    { type: _CesarRecord_service__WEBPACK_IMPORTED_MODULE_4__["RecordService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ExerciseRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exercise-record',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercise-record.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercise-record/exercise-record.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercise-record.component.css */ "./src/app/exercise-record/exercise-record.component.css")).default]
    })
], ExerciseRecordComponent);



/***/ }),

/***/ "./src/app/expenses-record/expenses-record.component.css":
/*!***************************************************************!*\
  !*** ./src/app/expenses-record/expenses-record.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2VzLXJlY29yZC9leHBlbnNlcy1yZWNvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/expenses-record/expenses-record.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/expenses-record/expenses-record.component.ts ***!
  \**************************************************************/
/*! exports provided: ExpensesRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesRecordComponent", function() { return ExpensesRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpensesRecordComponent = class ExpensesRecordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExpensesRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expenses-record',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expenses-record.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/expenses-record/expenses-record.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expenses-record.component.css */ "./src/app/expenses-record/expenses-record.component.css")).default]
    })
], ExpensesRecordComponent);



/***/ }),

/***/ "./src/app/filter/filter.component.css":
/*!*********************************************!*\
  !*** ./src/app/filter/filter.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterComponent = class FilterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter.component.css */ "./src/app/filter/filter.component.css")).default]
    })
], FilterComponent);



/***/ }),

/***/ "./src/app/food-item/food-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/food-item/food-item.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb2QtaXRlbS9mb29kLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/food-item/food-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/food-item/food-item.component.ts ***!
  \**************************************************/
/*! exports provided: FoodItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemComponent", function() { return FoodItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _CesarRecord_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CesarRecord.service */ "./src/app/CesarRecord.service.ts");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-record/add-record.component */ "./src/app/add-record/add-record.component.ts");





let FoodItemComponent = class FoodItemComponent extends _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_4__["AddRecordComponent"] {
    constructor(rs, router, route) {
        super(rs, router, route);
        this.rs = rs;
        this.router = router;
        this.route = route;
        this.fi = null;
    }
    get FI() {
        return this.fi;
    }
    ngOnInit() {
    }
};
FoodItemComponent.ctorParameters = () => [
    { type: _CesarRecord_service__WEBPACK_IMPORTED_MODULE_3__["RecordService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FoodItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-food-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/food-item/food-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-item.component.css */ "./src/app/food-item/food-item.component.css")).default]
    })
], FoodItemComponent);



/***/ }),

/***/ "./src/app/food-record/food-record.component.css":
/*!*******************************************************!*\
  !*** ./src/app/food-record/food-record.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb2QtcmVjb3JkL2Zvb2QtcmVjb3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/food-record/food-record.component.ts":
/*!******************************************************!*\
  !*** ./src/app/food-record/food-record.component.ts ***!
  \******************************************************/
/*! exports provided: FoodRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodRecordComponent", function() { return FoodRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _CesarRecord_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CesarRecord.service */ "./src/app/CesarRecord.service.ts");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-record/add-record.component */ "./src/app/add-record/add-record.component.ts");





let FoodRecordComponent = class FoodRecordComponent extends _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_4__["AddRecordComponent"] {
    constructor(rs, router, route) {
        super(rs, router, route);
        this.rs = rs;
        this.router = router;
        this.route = route;
        this.foodItem = null;
        this.foodElements = [];
    }
    ngOnInit() {
    }
};
FoodRecordComponent.ctorParameters = () => [
    { type: _CesarRecord_service__WEBPACK_IMPORTED_MODULE_3__["RecordService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FoodRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-food-record',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-record.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/food-record/food-record.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-record.component.css */ "./src/app/food-record/food-record.component.css")).default]
    })
], FoodRecordComponent);



/***/ }),

/***/ "./src/app/glucose-record/glucose-record.component.css":
/*!*************************************************************!*\
  !*** ./src/app/glucose-record/glucose-record.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.select.ng-invalid.ng-touched {\r\n    border: 1px solid red; \r\n}\r\n\r\n.statusmessge {\r\n    padding:20;\r\n    background-color: lightgreen;\r\n    border: 1px solid green;\r\n}\r\n\r\n.form-group{\r\n  padding:2px;\r\n  border:2px solid;\r\n  border-radius: 10px;\r\n  margin:2px;\r\n}\r\n\r\n.form-group1>label1{\r\n  position:absolute;\r\n  top:-1px;\r\n  left:30px;\r\n  background-color:white;\r\n}\r\n\r\n.form-group>input{\r\n  border:none;\r\n}\r\n\r\nhr.new5 {\r\n  border: 10px solid green;\r\n  border-radius: 5px;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: green;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2x1Y29zZS1yZWNvcmQvZ2x1Y29zZS1yZWNvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOztBQUdBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2dsdWNvc2UtcmVjb3JkL2dsdWNvc2UtcmVjb3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgXHJcbn1cclxuXHJcbi5zdGF0dXNtZXNzZ2Uge1xyXG4gICAgcGFkZGluZzoyMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gIHBhZGRpbmc6MnB4O1xyXG4gIGJvcmRlcjoycHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46MnB4O1xyXG59XHJcbi5mb3JtLWdyb3VwMT5sYWJlbDF7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOi0xcHg7XHJcbiAgbGVmdDozMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwPmlucHV0e1xyXG4gIGJvcmRlcjpub25lO1xyXG59XHJcblxyXG5oci5uZXc1IHtcclxuICBib3JkZXI6IDEwcHggc29saWQgZ3JlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/glucose-record/glucose-record.component.ts":
/*!************************************************************!*\
  !*** ./src/app/glucose-record/glucose-record.component.ts ***!
  \************************************************************/
/*! exports provided: GlucoseRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlucoseRecordComponent", function() { return GlucoseRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _CesarRecord_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CesarRecord.service */ "./src/app/CesarRecord.service.ts");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-record/add-record.component */ "./src/app/add-record/add-record.component.ts");
/* harmony import */ var _Models_GlucoseRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/GlucoseRecord */ "./src/app/Models/GlucoseRecord.ts");






let GlucoseRecordComponent = class GlucoseRecordComponent extends _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_4__["AddRecordComponent"] {
    //lect 165 programatic navigation
    constructor(rs, router, route) {
        super(rs, router, route);
        this.rs = rs;
        this.router = router;
        this.route = route;
        this.editMode = false;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    onSubmit(form) {
        console.log("glucose submit");
        console.log(form.value);
        console.log(`fechaHoy:${this.rs.FechaHoy}`);
        console.log(`CurrentTime:${this.rs.Hora}`);
        console.log(`REc Type: [${this.rs.RecType}]`);
        let gr = new _Models_GlucoseRecord__WEBPACK_IMPORTED_MODULE_5__["GlucoseRecord"](this.rs.FechaHoy, this.rs.Hora, this.rs.RecType, form.value.glucose);
        let id = this.rs.Add(gr);
    }
    clearForm() {
        super.clearForm();
        this.parentForm.value.glucose = 0;
    }
};
GlucoseRecordComponent.ctorParameters = () => [
    { type: _CesarRecord_service__WEBPACK_IMPORTED_MODULE_3__["RecordService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
GlucoseRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-glucose-record',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./glucose-record.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/glucose-record/glucose-record.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./glucose-record.component.css */ "./src/app/glucose-record/glucose-record.component.css")).default]
    })
], GlucoseRecordComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/incomes-record/incomes-record.component.css":
/*!*************************************************************!*\
  !*** ./src/app/incomes-record/incomes-record.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY29tZXMtcmVjb3JkL2luY29tZXMtcmVjb3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/incomes-record/incomes-record.component.ts":
/*!************************************************************!*\
  !*** ./src/app/incomes-record/incomes-record.component.ts ***!
  \************************************************************/
/*! exports provided: IncomesRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomesRecordComponent", function() { return IncomesRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IncomesRecordComponent = class IncomesRecordComponent {
    constructor() { }
    ngOnInit() {
    }
};
IncomesRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-incomes-record',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incomes-record.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/incomes-record/incomes-record.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incomes-record.component.css */ "./src/app/incomes-record/incomes-record.component.css")).default]
    })
], IncomesRecordComponent);



/***/ }),

/***/ "./src/app/mainmenu/mainmenu.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainmenu/mainmenu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5tZW51L21haW5tZW51LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/mainmenu/mainmenu.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainmenu/mainmenu.component.ts ***!
  \************************************************/
/*! exports provided: MainmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainmenuComponent", function() { return MainmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainmenuComponent = class MainmenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mainmenu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mainmenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mainmenu/mainmenu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mainmenu.component.css */ "./src/app/mainmenu/mainmenu.component.css")).default]
    })
], MainmenuComponent);



/***/ }),

/***/ "./src/app/meal/meal.component.css":
/*!*****************************************!*\
  !*** ./src/app/meal/meal.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.select.ng-invalid.ng-touched {\r\n    border: 1px solid red; \r\n}\r\n\r\n.statusmessge {\r\n    padding:20;\r\n    background-color: lightgreen;\r\n    border: 1px solid green;\r\n}\r\n\r\n.form-group{\r\n  padding:2px;\r\n  border:2px solid;\r\n  border-radius: 10px;\r\n  margin:2px;\r\n}\r\n\r\n.form-group1>label1{\r\n  position:absolute;\r\n  top:-1px;\r\n  left:30px;\r\n  background-color:white;\r\n}\r\n\r\n.form-group>input{\r\n  border:none;\r\n}\r\n\r\nhr.new5 {\r\n  border: 10px solid green;\r\n  border-radius: 5px;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: green;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhbC9tZWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFHQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZWFsL21lYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LnNlbGVjdC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkOyBcclxufVxyXG5cclxuLnN0YXR1c21lc3NnZSB7XHJcbiAgICBwYWRkaW5nOjIwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiAgcGFkZGluZzoycHg7XHJcbiAgYm9yZGVyOjJweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjoycHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAxPmxhYmVsMXtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6LTFweDtcclxuICBsZWZ0OjMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXA+aW5wdXR7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcbmhyLm5ldzUge1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCBncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/meal/meal.component.ts":
/*!****************************************!*\
  !*** ./src/app/meal/meal.component.ts ***!
  \****************************************/
/*! exports provided: MealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealComponent", function() { return MealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/FoodItem */ "./src/app/Models/FoodItem.ts");
/* harmony import */ var _CesarRecord_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CesarRecord.service */ "./src/app/CesarRecord.service.ts");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-record/add-record.component */ "./src/app/add-record/add-record.component.ts");
/* harmony import */ var _Models_FoodRecord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Models/FoodRecord */ "./src/app/Models/FoodRecord.ts");
/* harmony import */ var _Models_MealRecord__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Models/MealRecord */ "./src/app/Models/MealRecord.ts");
/* harmony import */ var _Models_FoodItemRecordSave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Models/FoodItemRecordSave */ "./src/app/Models/FoodItemRecordSave.ts");









//view grid dynamically add delete rows
//https://www.c-sharpcorner.com/article/dynamically-add-and-remove-row-in-angular-7/
let MealComponent = class MealComponent extends _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_5__["AddRecordComponent"] {
    constructor(rs, router, route) {
        super(rs, router, route);
        this.rs = rs;
        this.router = router;
        this.route = route;
        this.cant = 0;
        this.fi = new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("", "");
        this.foodItemId = "";
        this.foodRecords = [];
        this.newItem = null;
        this.foodItemType = "";
        this.brandName = "";
        this.unitName = "";
    }
    ngOnInit() {
        super.ngOnInit();
        this.addRow(0);
    }
    onSubmit(form) {
        console.log("meal submit:", form);
        let mr = new _Models_MealRecord__WEBPACK_IMPORTED_MODULE_7__["MealRecord"](this.rs.FechaHoy, this.rs.Hora, this.rs.RecType);
        for (let it of this.foodRecords) {
            if (it.cant > 0)
                mr.frs.push(new _Models_FoodItemRecordSave__WEBPACK_IMPORTED_MODULE_8__["FoodItemRecordSave"](it.foodItemId, it.cant, it.sugar, it.fat, it.sodium, it.calories));
        }
        let id = this.rs.Add(mr);
        let rows = this.rs.Save();
        this.foodRecords = [];
        this.addRow(0);
        this.rs.message = `Saved Complete. ${this.rs.RecType} ${rows} records.`;
    }
    clearForm() {
        super.clearForm();
    }
    showRecords() {
        let sm = "";
        let rec = "";
        let count = 0;
        for (let it of this.foodRecords) {
            rec = `${count} ${it.id} ${it.foodItemId} ${it.fi.value} ${it.fi.cant} ${it.cant} ${it.fi.brand}`;
            sm += rec + "\r\n";
            count++;
            //console.log(rec);
        }
        console.log(sm);
        // this.rs.message = sm;
        // for (let it of this.foodRecords )
        // {
        //   console.log(it.foodItemId,  it.fi);
        // }
    }
    //todo: if the id is typed it always comes in 0, must be left any
    onSelectedFoodItemChanged(foodId, id) {
        this.fi = this.rs.GetSelectFoodItem(foodId);
        this.foodRecords[id].fi = this.fi;
        this.foodRecords[id].foodItemId = foodId;
        this.foodRecords[id].cant = this.fi.cant;
        this.foodRecords[id].brand = this.fi.brand;
        this.rs.message = `onSelectedFoodItemChanged() ${id} ${this.foodRecords[id].id} ${this.foodRecords[id].foodItemId} ${this.foodRecords[id].fi.value} ${this.foodRecords[id].fi.cant} ${this.foodRecords[id].fi.brand}`;
        if (id == this.foodRecords.length - 1)
            this.addRow(id + 1);
    }
    addRow(index) {
        this.newItem = new _Models_FoodRecord__WEBPACK_IMPORTED_MODULE_6__["FoodRecord"]();
        this.newItem.fi = new _Models_FoodItem__WEBPACK_IMPORTED_MODULE_3__["FoodItem"]("", "");
        this.newItem.id = this.foodRecords.length;
        this.foodRecords.push(this.newItem);
        //this.toastr.success('New row added successfully', 'New Row');  
        this.rs.message = 'New row added successfully', 'New Row';
        return true;
    }
    deleteRow(index) {
        console.log("delete row " + index);
        if (this.foodRecords.length == 1) {
            //this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
            this.rs.message = "Can't delete the row when there is only one row";
            return false;
        }
        else {
            this.foodRecords.splice(index, 1);
            //this.toastr.warning('Row deleted successfully', 'Delete row');  
            this.rs.message = 'Row deleted successfully', 'Delete row';
            return true;
        }
    }
    calcCant(foodItemId, index, cant) {
        console.log('cant item:', this.foodRecords[index].fi.cant);
        this.foodRecords[index].sugar = this.foodRecords[index].fi.sugar * (cant / this.foodRecords[index].fi.cant);
        this.foodRecords[index].sodium = this.foodRecords[index].fi.sodium * (cant / this.foodRecords[index].fi.cant);
        this.foodRecords[index].fat = this.foodRecords[index].fi.fat * (cant / this.foodRecords[index].fi.cant);
        this.foodRecords[index].calories = this.foodRecords[index].fi.calories * (cant / this.foodRecords[index].fi.cant);
        this.foodRecords[index].prot = this.foodRecords[index].fi.prot * (cant / this.foodRecords[index].fi.cant);
    }
};
MealComponent.ctorParameters = () => [
    { type: _CesarRecord_service__WEBPACK_IMPORTED_MODULE_4__["RecordService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meal/meal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meal.component.css */ "./src/app/meal/meal.component.css")).default]
    })
], MealComponent);



/***/ }),

/***/ "./src/app/pressure-record/pressure-record.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pressure-record/pressure-record.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.select.ng-invalid.ng-touched {\r\n    border: 1px solid red; \r\n}\r\n\r\n.statusmessge {\r\n    padding:20;\r\n    background-color: lightgreen;\r\n    border: 1px solid green;\r\n}\r\n\r\n.form-group{\r\n  padding:2px;\r\n  border:2px solid;\r\n  border-radius: 10px;\r\n  margin:2px;\r\n}\r\n\r\n.form-group1>label1{\r\n  position:absolute;\r\n  top:-1px;\r\n  left:30px;\r\n  background-color:white;\r\n}\r\n\r\n.form-group>input{\r\n  border:none;\r\n}\r\n\r\nhr.new5 {\r\n  border: 10px solid green;\r\n  border-radius: 5px;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: green;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlc3N1cmUtcmVjb3JkL3ByZXNzdXJlLXJlY29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qix1QkFBdUI7QUFDM0I7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcHJlc3N1cmUtcmVjb3JkL3ByZXNzdXJlLXJlY29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7IFxyXG59XHJcblxyXG4uc3RhdHVzbWVzc2dlIHtcclxuICAgIHBhZGRpbmc6MjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcblxyXG4uZm9ybS1ncm91cHtcclxuICBwYWRkaW5nOjJweDtcclxuICBib3JkZXI6MnB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOjJweDtcclxufVxyXG4uZm9ybS1ncm91cDE+bGFiZWwxe1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDotMXB4O1xyXG4gIGxlZnQ6MzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cD5pbnB1dHtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG5cclxuaHIubmV3NSB7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGdyZWVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pressure-record/pressure-record.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pressure-record/pressure-record.component.ts ***!
  \**************************************************************/
/*! exports provided: PressureRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressureRecordComponent", function() { return PressureRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Models_PressureRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/PressureRecord */ "./src/app/Models/PressureRecord.ts");
/* harmony import */ var _CesarRecord_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CesarRecord.service */ "./src/app/CesarRecord.service.ts");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-record/add-record.component */ "./src/app/add-record/add-record.component.ts");






let PressureRecordComponent = class PressureRecordComponent extends _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_5__["AddRecordComponent"] {
    constructor(rs, router, route) {
        super(rs, router, route);
        this.rs = rs;
        this.router = router;
        this.route = route;
        this.systolic = 0;
        this.dyastolic = 0;
        this.heartRate = 0;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        console.log("presure submit");
        let pr = new _Models_PressureRecord__WEBPACK_IMPORTED_MODULE_3__["PressureRecord"](this.rs.FechaHoy, this.rs.Hora, this.rs.RecType);
        pr.systolic = this.systolic;
        pr.dyastolic = this.dyastolic;
        pr.hertRate = this.heartRate;
        this.rs.Add(pr);
        this.rs.Save();
    }
};
PressureRecordComponent.ctorParameters = () => [
    { type: _CesarRecord_service__WEBPACK_IMPORTED_MODULE_4__["RecordService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PressureRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pressure-record',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pressure-record.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pressure-record/pressure-record.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pressure-record.component.css */ "./src/app/pressure-record/pressure-record.component.css")).default]
    })
], PressureRecordComponent);



/***/ }),

/***/ "./src/app/status-bar/status-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/status-bar/status-bar.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\r\n    padding:20;\r\n    background-color: lightgreen;\r\n    border: 1px solid green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHVzLWJhci9zdGF0dXMtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy1iYXIvc3RhdHVzLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBwYWRkaW5nOjIwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/status-bar/status-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/status-bar/status-bar.component.ts ***!
  \****************************************************/
/*! exports provided: StatusBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBarComponent", function() { return StatusBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _CesarRecord_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CesarRecord.service */ "./src/app/CesarRecord.service.ts");



let StatusBarComponent = class StatusBarComponent {
    constructor(rs) {
        this.rs = rs;
    }
    ngOnInit() {
    }
};
StatusBarComponent.ctorParameters = () => [
    { type: _CesarRecord_service__WEBPACK_IMPORTED_MODULE_2__["RecordService"] }
];
StatusBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-status-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./status-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/status-bar/status-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./status-bar.component.css */ "./src/app/status-bar/status-bar.component.css")).default]
    })
], StatusBarComponent);



/***/ }),

/***/ "./src/app/weight-record/weight-record.component.css":
/*!***********************************************************!*\
  !*** ./src/app/weight-record/weight-record.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.select.ng-invalid.ng-touched {\r\n    border: 1px solid red; \r\n}\r\n\r\n.statusmessge {\r\n    padding:20;\r\n    background-color: lightgreen;\r\n    border: 1px solid green;\r\n}\r\n\r\n.form-group{\r\n  padding:2px;\r\n  border:2px solid;\r\n  border-radius: 10px;\r\n  margin:2px;\r\n}\r\n\r\n.form-group1>label1{\r\n  position:absolute;\r\n  top:-1px;\r\n  left:30px;\r\n  background-color:white;\r\n}\r\n\r\n.form-group>input{\r\n  border:none;\r\n}\r\n\r\nhr.new5 {\r\n  border: 10px solid green;\r\n  border-radius: 5px;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: green;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VpZ2h0LXJlY29yZC93ZWlnaHQtcmVjb3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFHQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC93ZWlnaHQtcmVjb3JkL3dlaWdodC1yZWNvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LnNlbGVjdC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkOyBcclxufVxyXG5cclxuLnN0YXR1c21lc3NnZSB7XHJcbiAgICBwYWRkaW5nOjIwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiAgcGFkZGluZzoycHg7XHJcbiAgYm9yZGVyOjJweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjoycHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAxPmxhYmVsMXtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6LTFweDtcclxuICBsZWZ0OjMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXA+aW5wdXR7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcbmhyLm5ldzUge1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCBncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/weight-record/weight-record.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/weight-record/weight-record.component.ts ***!
  \**********************************************************/
/*! exports provided: WeightRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightRecordComponent", function() { return WeightRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Models_WeightRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/WeightRecord */ "./src/app/Models/WeightRecord.ts");
/* harmony import */ var _CesarRecord_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CesarRecord.service */ "./src/app/CesarRecord.service.ts");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-record/add-record.component */ "./src/app/add-record/add-record.component.ts");






let WeightRecordComponent = class WeightRecordComponent extends _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_5__["AddRecordComponent"] {
    constructor(rs, router, route) {
        super(rs, router, route);
        this.rs = rs;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        console.log("presure submit");
        let wr = new _Models_WeightRecord__WEBPACK_IMPORTED_MODULE_3__["WeightRecord"](this.rs.FechaHoy, this.rs.Hora, this.rs.RecType);
        wr.weight = this.weight;
        wr.fat = this.fat;
        wr.nonFat = this.nonFat;
        wr.bmi = this.bmi;
        this.rs.Add(wr);
        this.rs.Save();
    }
};
WeightRecordComponent.ctorParameters = () => [
    { type: _CesarRecord_service__WEBPACK_IMPORTED_MODULE_4__["RecordService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
WeightRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weight-record',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weight-record.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/weight-record/weight-record.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weight-record.component.css */ "./src/app/weight-record/weight-record.component.css")).default]
    })
], WeightRecordComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MyWorks\Angular\AngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map