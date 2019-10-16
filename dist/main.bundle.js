/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  s1: ["Proszę zwrócić uwagę, że", "I tak mam trzy razy mniej czasu, więc proszę mi pozwolić powiedzieć:", "Państwo się się śmieją, ale", "Ja nie potrzebowałem edukacji seksualnej, żeby wiedzieć, że", "No niestety:", "Gdzie leży przyczyna problemu? Ja państwu powiem:", "Państwo chyba nie widzą, że", "Oświadczam kategorycznie:", "Powtarzam", "Powiedzmy to z całą mocą:", "W Polsce dzisiaj", "Państwo sobie nie zdają sprawy, że", "To ja przepraszam bardzo:", "Otóż nie wiem, czy pan wie, że", "Yyyyy...", "Ja chcę powiedzieć jedną rzecz:", "Trzeba powiedzieć jasno:", "Jak powiedział wybitny krakowianin Stanisław Lem:", "Proszę mnie dobrze zrozumieć:", "Ja chciałem państwu przypomnieć, że", "Niech państwo nie mają złudzeń", "Powiedzmy to wyraźnie:"],
  s2: ["właściciele niewolników", "związkowcy", "trockiści", "tak zwane dzieci kwiaty", "rozmaici urzędnicy", "federaści", "etatyści", "ci durnie i złodzieje", "ludzie wybrani głosami meneli spod budki z piwem", "socjaliści pobożni", "socjaliści bezbożni", "komuniści z krzeżem w zębach", "agenci obcych służb", "członkowie Bandy Czworga", "pseudo-masoni z Wielkiego Wschodu Francji", "przedstawiciele czerwnoego hołoty", "ci wszyscy (tfu!) geje", "funkcjonariusze reżymowej telewizji", "tak zwani ekolodzy", "ci wszyscy (tfu!) demokraci", "agenci bezpieki", "feminazistki"],
  s3: ["po przeczytaniu Manifestu komunistycznego", "którymi się brzydzę", "których nienawidzę", "z okolic Gazety Wyborczej", "czyli taka żydokomuna", "odkąd zniesiono karę śmierci", "którymi pogardzam", "których miejsce w normalnym kraju jest w więzieniu", "na polecenie Brukseli", "posłusznie", "bezmyślnie", "z nieprawdopodobną pogardą dla człowieka", "za pieniądze podatników", "zgodnie z ideologią LGBTQZ", "za wszelką cenę", "zupełnie bezkarne", "całkowicie bezczelnie", "o poglądach na lewo od komunizmu", "celowo i świadomie", "z premedytacją", "od czasów Okrągłego Stołu", "w ramach postępu"],
  s4: ["udają homoseksualistów", "niszczą rodzinę", "Idą do polityki", "zakazują góralom robienia oscypków", "organizują paraolimpiady", "wprowadzają ustrój, w którym raz na cztery lata można wybrać sobie pana", "ustawiają fotoradary", "wprowadzają dotacje", "wydzielają burspasy", "podnoszą wiek emerytalny", "rżną głupa", "odbierają dzieci rodzicom", "wprowadzają absurdalne przepisy", "umieszczają dzieci w szkołach koedukacyjnych", "wprowadzają parytety", "nawołują do podniesienia podatków", "próbują wyrzucić kierowców z miast", "próbują skłócić Polskę z Rosją", "głoszą brednię o globalnym ociepleniu", "zakazują posiadania broni", "nie dopuszczają prawicy do władzy", " uczą dzieci homoseksualizmu"],
  s5: ["żeby poddawać wszystkich tresurze", "bo taka jest ich natura", "bo chcą niszczyć cywilizację białego człowieka", "bo chcą tworzyć raj na ziemi", "bo głupich jest więcej niż mądrych", "bo bez tego (tfu!) demokracja nie może istnieć", "bo tak się uczy w państwowej szkole", "bo dostaną za to pieniądze", "bo dzięki temu mogą kraść", "bo dzięki temu mogą brać łapówki", "żeby męszczyźni przestali być agresywni", "bo nie rozumieją, że selekcja naturalna jest czymś dobrym", "zamiast obniżyć podatki", "żeby nie opłacało się mieć dzieci", "zamiast pozwolić decydować konsumentowi", "bo to jest w interesie tak zwanych ludzi pracy", "żeby wyrwać kobiety z domu", "zamiast pozwolić ludziom zarabiać", "dokładnie tak jak towarzysz Janosik", "żeby wreszcie zapanował socjalizm", "bo nie rozumieją, że socjalizm nie działa", "bo chcą wszystko kontrolować"],
  s6: ["co lat temu sto nikomu nie przyszłoby nawet do głowy", ", proszę zobaczyć, co się dzieje na Zachodzie, jeśli mi państwo nie wierzą.", "ale przyjdą muzułmanie i zrobią porządek.", ", tak samo zresztą jak za Hitlera.", "i właśnie bdlatego Europa umiera.", "przez kolejne kadencje.", "ale w wolnej Polsce pójdą siedzieć.", ", dlatego trzeba przywrócić normalność.", "co prowadzi Polskę do katastrofy.", ", dlatego w społeczeństwie jest równość, a powinno być rozwarstwienie.", "co w wieku XIX po prostu by wyśmiano.", "podczas gdy normalni ludzie uważani są za dziwaków.", "a wystarczyłoby przestać wypłacać zasiłki.", "dlatego trzeba zlikwidować koryto, a nie zmieniać świenie.", "cóż: chcieliście(tfu!) demokracji, to macie.", "a zwykłym ludziom wmawiają, że im coś dadzą.", "co dowodzi, że wyskrobano nie tych, co trzeba.", "ale nawet ja jeszcze dożyję normalnych czasów.", "i trzeba być idiotą, żeby ten system popierać.", "co zostało dokładnie zaplanowane w Magdalence przez śp. generała Kiszczaka", "co ma zresztą tyle samo sensu, co zawody w szachach dla debili."]
});

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Generator =
/*#__PURE__*/
function () {
  function Generator() {
    _classCallCheck(this, Generator);

    this.btn = document.querySelector("#generate");
    this.bubbleText = document.querySelector(".bubble-text");
    this.bubbleImg = document.querySelector(".bubble-img");
    this.bubble = document.querySelector(".bubble");
    this.init();
  }

  _createClass(Generator, [{
    key: "random",
    value: function random(arrSize) {
      return Math.floor(Math.random() * arrSize);
    }
  }, {
    key: "generateText",
    value: function generateText() {
      return "".concat(_data__WEBPACK_IMPORTED_MODULE_0__["default"].s1[this.random(_data__WEBPACK_IMPORTED_MODULE_0__["default"].s1.length)], " ").concat(_data__WEBPACK_IMPORTED_MODULE_0__["default"].s2[this.random(_data__WEBPACK_IMPORTED_MODULE_0__["default"].s2.length)], " ").concat(_data__WEBPACK_IMPORTED_MODULE_0__["default"].s3[this.random(_data__WEBPACK_IMPORTED_MODULE_0__["default"].s3.length)], " ").concat(_data__WEBPACK_IMPORTED_MODULE_0__["default"].s4[this.random(_data__WEBPACK_IMPORTED_MODULE_0__["default"].s4.length)], " ").concat(_data__WEBPACK_IMPORTED_MODULE_0__["default"].s5[this.random(_data__WEBPACK_IMPORTED_MODULE_0__["default"].s5.length)], "!");
    }
  }, {
    key: "animate",
    value: function animate(text) {
      if (text.length > 150) this.bubble.classList.add("bubble-bigger");else this.bubble.classList.remove("bubble-bigger");
      this.bubbleText.innerHTML = text;
      this.bubble.classList.add("bubble--active");
    }
  }, {
    key: "prepare",
    value: function prepare() {
      var _this = this;

      var text = this.generateText();

      if (this.bubble.classList.contains("bubble--active")) {
        this.bubble.classList.remove("bubble--active");
        setTimeout(function () {
          _this.animate(text);
        }, 500);
      } else {
        this.animate(text);
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.btn.addEventListener("click", function () {
        _this2.prepare();
      });
    }
  }]);

  return Generator;
}();

new Generator();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map