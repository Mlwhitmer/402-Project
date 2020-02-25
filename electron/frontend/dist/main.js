(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");




var routes = [
    {
        path: '',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-drawer-container class=\"drawer-container\" autosize>\n\n  <mat-drawer #drawer class=\"drawer-column\" mode=\"side\">\n\n    <div class=\"drawer-header-container\">\n      <div class=\"text\">Title</div>\n    </div>\n\n    <div class=\"navigator\">\n      <button mat-button class=\"nav-btn\">\n        <mat-icon class=\"icon\">apps</mat-icon>Menu\n      </button>\n\n      <button mat-button class=\"nav-btn\">\n        <mat-icon class=\"icon\">dvr</mat-icon>Machines\n      </button>\n\n      <button mat-button class=\"nav-btn\">\n        <mat-icon class=\"icon\">help</mat-icon>Documentation\n      </button>\n\n      <button mat-button class=\"nav-btn\">\n        <mat-icon class=\"icon\">school</mat-icon>iX University\n      </button>\n\n      <button mat-button class=\"nav-btn\">\n        <mat-icon class=\"icon\">person</mat-icon>My Settings\n      </button>\n    </div>\n\n  </mat-drawer>\n\n  <router-outlet></router-outlet>\n</mat-drawer-container>\n\n<!-- Loading Spinner -->\n<div class=\"spinner-wrapper\" *ngIf=\"commonService?.showSpinner\">\n  <div class=\"spinner-overlay\"></div>\n  <mat-spinner [diameter]=\"50\" [strokeWidth]=\"3\"></mat-spinner>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-wrapper {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .spinner-wrapper .spinner-overlay {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background-color: rgba(255, 255, 255, 0.5);\n    z-index: 10; }\n  ::ng-deep .mat-progress-spinner circle {\n  stroke: #00b2ff; }\n  mat-spinner {\n  z-index: 11; }\n  .drawer-container {\n  height: 100%; }\n  .drawer-container ::ng-deep .mat-dialog-container {\n    padding: 0px; }\n  .drawer-container ::ng-deep .mat-dialog-container .add-machine-card {\n      padding: 0px;\n      height: 100%; }\n  .drawer-container ::ng-deep .mat-dialog-container .add-machine-card .header {\n        background-color: #0095d5;\n        height: 50px;\n        line-height: 50px;\n        color: #ffffff;\n        font-family: \"Roboto\", sans-serif;\n        font-size: 20px; }\n  .drawer-container ::ng-deep .mat-dialog-container ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline {\n      background-color: #00b5ff;\n      height: 1px; }\n  .drawer-container .logo {\n    width: 300px; }\n  .drawer-container .drawer-column {\n    display: flex;\n    flex-direction: column;\n    width: 340px; }\n  .drawer-container .drawer-column .drawer-header-container {\n      background-color: #ebebeb;\n      display: flex;\n      flex-direction: column;\n      padding: 20px;\n      height: 170px; }\n  .drawer-container .drawer-column .drawer-header-container .text {\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 10px;\n        font-family: \"Roboto\", sans-serif; }\n  .drawer-container .drawer-column .navigator {\n      display: flex;\n      flex-direction: column;\n      text-align: left; }\n  .drawer-container .drawer-column .navigator .nav-btn {\n        padding: 20px;\n        text-align: left;\n        display: flex;\n        flex-direction: row;\n        height: 70px;\n        font-family: \"Roboto\", sans-serif;\n        font-size: 20px; }\n  .drawer-container .drawer-column .navigator .nav-btn .icon {\n          color: #0095d5;\n          font-size: 30px;\n          margin-right: 20px;\n          margin-bottom: auto;\n          margin-bottom: 13px; }\n  .drawer-container .drawer-column .navigator .nav-btn .label {\n          padding-left: 20px;\n          margin-top: auto;\n          margin-bottom: auto;\n          line-height: 100%;\n          font-size: 20px; }\n  .drawer-container .drawer-column .navigator .nav-btn:hover {\n        color: #3e6dff; }\n  .drawer-container .drawer-column .navigator .nav-btn:hover .icon {\n        color: #00b5ff; }\n  ::ng-deep mat-dialog-container {\n  padding: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pY2hhZWwvV2Vic3Rvcm1Qcm9qZWN0cy9lbGVjdHJvbi9mcm9udGVuZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9ob21lL21pY2hhZWwvV2Vic3Rvcm1Qcm9qZWN0cy9lbGVjdHJvbi9mcm9udGVuZC9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFNBQVE7RUFDUixVQUFTO0VBQ1QsUUFBTztFQUNQLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBV3hCO0VBbkJEO0lBV0ksbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixVQUFTO0lBQ1QsU0FBUTtJQUNSLFFBQU87SUFDUCwyQ0FBeUM7SUFDekMsWUFBVyxFQUNaO0VBR0g7RUFDRSxnQkFBZSxFQUNoQjtFQUVEO0VBQ0UsWUFBVyxFQUNaO0VBRUQ7RUFDRSxhQUFZLEVBMEZiO0VBM0ZEO0lBSUksYUFBWSxFQW9CYjtFQXhCSDtNQU9NLGFBQVk7TUFDWixhQUFZLEVBVWI7RUFsQkw7UUFXUSwwQkFBeUI7UUFDekIsYUFBWTtRQUNaLGtCQUFpQjtRQUNqQixlQUFjO1FBQ2Qsa0NDOUMwQjtRRCtDMUIsZ0JBQWUsRUFDaEI7RUFqQlA7TUFxQk0sMEJBQXlCO01BQ3pCLFlBQVcsRUFDWjtFQXZCTDtJQTJCSSxhQUFZLEVBQ2I7RUE1Qkg7SUErQkksY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixhQUFZLEVBeURiO0VBMUZIO01Bb0NNLDBCQUF5QjtNQUN6QixjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLGNBQWE7TUFDYixjQUFhLEVBUWQ7RUFoREw7UUEyQ1Esa0JBQWlCO1FBQ2pCLG1CQUFrQjtRQUNsQixpQkFBZ0I7UUFDaEIsa0NDN0UwQixFRDhFM0I7RUEvQ1A7TUFtRE0sY0FBYTtNQUNiLHVCQUFzQjtNQUN0QixpQkFBZ0IsRUFvQ2pCO0VBekZMO1FBd0RRLGNBQWE7UUFDYixpQkFBZ0I7UUFDaEIsY0FBYTtRQUNiLG9CQUFtQjtRQUNuQixhQUFZO1FBQ1osa0NDNUYwQjtRRDZGMUIsZ0JBQWUsRUFpQmhCO0VBL0VQO1VBaUVVLGVBQWM7VUFDZCxnQkFBZTtVQUNmLG1CQUFrQjtVQUNsQixvQkFBbUI7VUFDbkIsb0JBQW1CLEVBQ3BCO0VBdEVUO1VBeUVVLG1CQUFrQjtVQUNsQixpQkFBZ0I7VUFDaEIsb0JBQW1CO1VBQ25CLGtCQUFpQjtVQUNqQixnQkFBZSxFQUNoQjtFQTlFVDtRQWtGUSxlQUFjLEVBQ2Y7RUFuRlA7UUFzRlEsZUFBYyxFQUNmO0VBTVA7RUFDRSxzQkFBcUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzaGVldHMvZm9udHMuc2Nzcyc7XG5cbi5zcGlubmVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLnNwaW5uZXItb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxufVxuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSB7XG4gIHN0cm9rZTogIzAwYjJmZjtcbn1cblxubWF0LXNwaW5uZXIge1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMHB4O1xuXG4gICAgLmFkZC1tYWNoaW5lLWNhcmQge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTVkNTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZ2xvYmFsLWZvbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjVmZjtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgIH1cbiAgfVxuXG4gIC5sb2dvIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cblxuICAuZHJhd2VyLWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAzNDBweDtcblxuICAgIC5kcmF3ZXItaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAxNzBweDtcblxuICAgICAgLnRleHQge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJGdsb2JhbC1mb250O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZpZ2F0b3Ige1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAubmF2LWJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRnbG9iYWwtZm9udDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBjb2xvcjogIzAwOTVkNTtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm5hdi1idG46aG92ZXIge1xuICAgICAgICBjb2xvcjogIzNlNmRmZjtcbiAgICAgIH1cblxuICAgICAgLm5hdi1idG46aG92ZXIgLmljb257XG4gICAgICAgIGNvbG9yOiAjMDBiNWZmO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbiIsIiRnbG9iYWwtZm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4kc3ViLWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyAvL1JvYm90byBmb3IgYm90aCB1bnRpbCBmdXJ0aGVyIHN0YXRlZFxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(commonService, router) {
        this.commonService = commonService;
        this.router = router;
        this.title = 'frontend';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.commonService.drawer = this.drawer;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], AppComponent.prototype, "drawer", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.module */ "./src/app/menu/menu.module.ts");
/* harmony import */ var _ngmaterial_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngmaterial.module */ "./src/app/ngmaterial.module.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.module */ "./src/app/header/header.module.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"],
                _ngmaterial_module__WEBPACK_IMPORTED_MODULE_6__["MaterialAppModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ],
            providers: [
                _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"header-container\">\n\n  <div class=\"left-action-div\">\n    <button mat-icon-button class=\"header-icon-button\" (click)=\"toggleDrawer()\"><i class=\"material-icons\">menu</i></button>\n  </div>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container {\n  background-color: #5fc5ff;\n  font-size: 30px;\n  height: 90px;\n  font-weight: bold;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0px;\n  font-family: \"Roboto\", sans-serif;\n  z-index: 1; }\n  .header-container ::ng-deep .mat-icon-button {\n    height: 50px !important;\n    width: 50px !important; }\n  .header-container ::ng-deep .mat-icon-button ::ng-deep .material-icons {\n      font-size: 30px; }\n  .header-container .left-action-div {\n    display: flex;\n    flex-direction: row;\n    width: 330px; }\n  .header-container .left-action-div .header-icon-button {\n      margin-left: 40px;\n      margin-top: auto;\n      margin-bottom: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pY2hhZWwvV2Vic3Rvcm1Qcm9qZWN0cy9lbGVjdHJvbi9mcm9udGVuZC9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9taWNoYWVsL1dlYnN0b3JtUHJvamVjdHMvZWxlY3Ryb24vZnJvbnRlbmQvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsMEJBQXlCO0VBQ3hCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwrQkFBOEI7RUFDOUIsYUFBWTtFQUNaLGtDQ1pnQztFRGFoQyxXQUFVLEVBdUJYO0VBbENEO0lBY0ksd0JBQXVCO0lBQ3ZCLHVCQUFzQixFQUt2QjtFQXBCSDtNQWtCTSxnQkFBZSxFQUNoQjtFQW5CTDtJQXVCSSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLGFBQVksRUFRYjtFQWpDSDtNQTRCTSxrQkFBaUI7TUFDakIsaUJBQWdCO01BQ2hCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzaGVldHMvZm9udHMuc2Nzcyc7XG5cbi5oZWFkZXItY29udGFpbmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzVmYzVmZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LWZhbWlseTogJGdsb2JhbC1mb250O1xuICB6LWluZGV4OiAxO1xuXG4gIDo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuXG4gICAgOjpuZy1kZWVwIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICB9XG5cbiAgLmxlZnQtYWN0aW9uLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAzMzBweDtcblxuICAgIC5oZWFkZXItaWNvbi1idXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICB9XG5cbiAgfVxufVxuIiwiJGdsb2JhbC1mb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiRzdWItZm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7IC8vUm9ib3RvIGZvciBib3RoIHVudGlsIGZ1cnRoZXIgc3RhdGVkXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(commonService) {
        this.commonService = commonService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleDrawer = function () {
        this.commonService.drawer.toggle();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ngmaterial.module */ "./src/app/ngmaterial.module.ts");





var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngmaterial_module__WEBPACK_IMPORTED_MODULE_4__["MaterialAppModule"]
            ],
            declarations: [
                _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
            ],
            exports: [
                _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n  Menu\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n  display: flex;\n  justify-content: center;\n  min-height: calc(100vh - 199px);\n  margin: 50px 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pY2hhZWwvV2Vic3Rvcm1Qcm9qZWN0cy9lbGVjdHJvbi9mcm9udGVuZC9zcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsZ0NBQStCO0VBQy9CLGtCQUFpQixFQUVsQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTk5cHgpO1xuICBtYXJnaW46IDUwcHggMjBweDtcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngmaterial_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ngmaterial.module */ "./src/app/ngmaterial.module.ts");






var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngmaterial_module__WEBPACK_IMPORTED_MODULE_5__["MaterialAppModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"]
            ],
            declarations: [
                _menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]
            ]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/ngmaterial.module.ts":
/*!**************************************!*\
  !*** ./src/app/ngmaterial.module.ts ***!
  \**************************************/
/*! exports provided: MaterialAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialAppModule", function() { return MaterialAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");











var MaterialAppModule = /** @class */ (function () {
    function MaterialAppModule() {
    }
    MaterialAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"]
            ],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"]
            ]
        })
    ], MaterialAppModule);
    return MaterialAppModule;
}());



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CommonService = /** @class */ (function () {
    function CommonService(snackBar, router, dialog) {
        this.snackBar = snackBar;
        this.router = router;
        this.dialog = dialog;
        this.showSpinner = false;
    }
    CommonService.prototype.setSpinnerFlag = function (value) {
        var _this = this;
        Promise.resolve(null).then(function () { return _this.showSpinner = value; });
    };
    CommonService.prototype.showNotification = function (message) {
        this.snackBar.open(message, null, {
            duration: 3000,
        });
    };
    CommonService.prototype.showNotificationAndTime = function (message, duration) {
        this.snackBar.open(message, null, {
            duration: duration,
        });
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CommonService);
    return CommonService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/michael/WebstormProjects/electron/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map