"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readByName = readByName;
exports.readAll = readAll;
exports.read = read;
exports.getCharacterName = getCharacterName;
var fs = require("node:fs");
var index_js_1 = require("../node_modules/@inquirer/prompts/dist/commonjs/index.js");
var talentType_js_1 = require("./talentType.js");
function readAll(consoleLogOrNot) {
    var dataRead = fs.readFileSync('./characters.json', 'utf8');
    var readDataParsed = JSON.parse(dataRead);
    var readDataParsedArray = __spreadArray([], readDataParsed, true);
    if (consoleLogOrNot === true) {
        console.log(readDataParsedArray);
    }
    else if (consoleLogOrNot === false) {
        return readDataParsedArray;
    }
    else {
        console.log("[ERROR] \nWhen calling 'readAll()' function, your parameter should be either true or false. \nYou got this error because you either forgot to inform your parameter or you entered an invalid parameter.");
    }
}
function readByName(data, value) {
    return data.find(function (character) { return character['name'] === value; });
}
function getCharacterName(data) {
    return __awaiter(this, void 0, void 0, function () {
        var provideCharacterName, characterFound;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, index_js_1.input)({ message: 'Enter the characters name: ' })];
                case 1:
                    provideCharacterName = _a.sent();
                    characterFound = readByName(data, provideCharacterName);
                    console.log(characterFound);
                    return [2 /*return*/, characterFound];
            }
        });
    });
}
function read() {
    return __awaiter(this, void 0, void 0, function () {
        var chooseReadOption;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, index_js_1.select)({
                        message: 'Select a package manager',
                        choices: [
                            {
                                name: 'Check all characters data',
                                value: 'first',
                                description: 'Check all characters data',
                            },
                            {
                                name: 'Check character by name',
                                value: 'second',
                                description: 'Check character by name',
                            },
                            {
                                name: 'Check characters by talent type',
                                value: 'third',
                                description: 'Check characters by talent type',
                            },
                            new index_js_1.Separator(),
                            {
                                name: 'fourth',
                                value: 'fourth',
                                disabled: 'Check characters by weekly boos material (coming soon)',
                            },
                        ],
                    })];
                case 1:
                    chooseReadOption = _a.sent();
                    if (!(chooseReadOption === 'first')) return [3 /*break*/, 2];
                    readAll(true);
                    return [3 /*break*/, 7];
                case 2:
                    if (!(chooseReadOption === 'second')) return [3 /*break*/, 4];
                    return [4 /*yield*/, getCharacterName(readAll(false))];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 4:
                    if (!(chooseReadOption === 'third')) return [3 /*break*/, 6];
                    // const charactersData = readAll(false);
                    return [4 /*yield*/, (0, talentType_js_1.default)(index_js_1.input, readAll(false))];
                case 5:
                    // const charactersData = readAll(false);
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    console.log('Invalid option. Please type an option between 1 and 3');
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
