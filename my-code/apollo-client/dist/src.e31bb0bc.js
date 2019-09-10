// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__assign = void 0;

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
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

;

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
},{}],"../node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
var _default = nodejsCustomInspectSymbol;
exports.default = _default;
},{}],"../node_modules/graphql/jsutils/inspect.js":[function(require,module,exports) {
"use strict";

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inspect;

var _nodejsCustomInspectSymbol = _interopRequireDefault(require("./nodejsCustomInspectSymbol"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    // $FlowFixMe(>=0.90.0)
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol.default)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}
},{"./nodejsCustomInspectSymbol":"../node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js"}],"../node_modules/graphql/language/visitor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visit = visit;
exports.visitInParallel = visitInParallel;
exports.visitWithTypeInfo = visitWithTypeInfo;
exports.getVisitFn = getVisitFn;
exports.BREAK = exports.QueryDocumentKeys = void 0;

var _inspect = _interopRequireDefault(require("../jsutils/inspect"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
exports.QueryDocumentKeys = QueryDocumentKeys;
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

exports.BREAK = BREAK;

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;
  /* eslint-disable no-undef-init */

  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + (0, _inspect.default)(node));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return Boolean(maybeNode && typeof maybeNode.kind === 'string');
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */


function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */


function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      false);

      if (fn) {
        var result = fn.apply(visitor, arguments);

        if (result !== undefined) {
          typeInfo.leave(node);

          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }

        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      true);
      var result;

      if (fn) {
        result = fn.apply(visitor, arguments);
      }

      typeInfo.leave(node);
      return result;
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */


function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}
},{"../jsutils/inspect":"../node_modules/graphql/jsutils/inspect.js"}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/ts-invariant/lib/invariant.esm.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invariant = invariant;
exports.process = exports.InvariantError = exports.default = void 0;

var _tslib = require("tslib");

var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf,
    setPrototypeOf = _a === void 0 ? function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
} : _a;

var InvariantError =
/** @class */
function (_super) {
  (0, _tslib.__extends)(InvariantError, _super);

  function InvariantError(message) {
    if (message === void 0) {
      message = genericMessage;
    }

    var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;

    _this.framesToPop = 1;
    _this.name = genericMessage;
    setPrototypeOf(_this, InvariantError.prototype);
    return _this;
  }

  return InvariantError;
}(Error);

exports.InvariantError = InvariantError;

function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}

function wrapConsoleMethod(method) {
  return function () {
    return console[method].apply(console, arguments);
  };
}

(function (invariant) {
  invariant.warn = wrapConsoleMethod("warn");
  invariant.error = wrapConsoleMethod("error");
})(invariant || (exports.invariant = invariant = {})); // Code that uses ts-invariant with rollup-plugin-invariant may want to
// import this process stub to avoid errors evaluating process.env.NODE_ENV.
// However, because most ESM-to-CJS compilers will rewrite the process import
// as tsInvariant.process, which prevents proper replacement by minifiers, we
// also attempt to define the stub globally when it is not already defined.


var processStub = {
  env: {}
};
exports.process = processStub;

if (typeof process === "object") {
  exports.process = processStub = process;
} else try {
  // Using Function to evaluate this assignment in global scope also escapes
  // the strict mode of the current module, thereby allowing the assignment.
  // Inspired by https://github.com/facebook/regenerator/pull/369.
  Function("stub", "process = stub")(processStub);
} catch (atLeastWeTried) {// The assignment can fail if a Content Security Policy heavy-handedly
  // forbids Function usage. In those environments, developers should take
  // extra care to replace process.env.NODE_ENV in their production builds,
  // or define an appropriate global.process polyfill.
}

var invariant$1 = invariant;
var _default = invariant$1;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","process":"../node_modules/process/browser.js"}],"../node_modules/fast-json-stable-stringify/index.js":[function(require,module,exports) {
'use strict';

module.exports = function (data, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (node) {
        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        if (node === undefined) return;
        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
        if (typeof node !== 'object') return JSON.stringify(node);

        var i, out;
        if (Array.isArray(node)) {
            out = '[';
            for (i = 0; i < node.length; i++) {
                if (i) out += ',';
                out += stringify(node[i]) || 'null';
            }
            return out + ']';
        }

        if (node === null) return 'null';

        if (seen.indexOf(node) !== -1) {
            if (cycles) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
        }

        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = '';
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = stringify(node[key]);

            if (!value) continue;
            if (out) out += ',';
            out += JSON.stringify(key) + ':' + value;
        }
        seen.splice(seenIndex, 1);
        return '{' + out + '}';
    })(data);
};

},{}],"../node_modules/@wry/equality/lib/equality.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equal = equal;
exports.default = void 0;
var _a = Object.prototype,
    toString = _a.toString,
    hasOwnProperty = _a.hasOwnProperty;
var previousComparisons = new Map();
/**
 * Performs a deep equality check on two JavaScript values, tolerating cycles.
 */

function equal(a, b) {
  try {
    return check(a, b);
  } finally {
    previousComparisons.clear();
  }
}

function check(a, b) {
  // If the two values are strictly equal, our job is easy.
  if (a === b) {
    return true;
  } // Object.prototype.toString returns a representation of the runtime type of
  // the given value that is considerably more precise than typeof.


  var aTag = toString.call(a);
  var bTag = toString.call(b); // If the runtime types of a and b are different, they could maybe be equal
  // under some interpretation of equality, but for simplicity and performance
  // we just return false instead.

  if (aTag !== bTag) {
    return false;
  }

  switch (aTag) {
    case '[object Array]':
      // Arrays are a lot like other objects, but we can cheaply compare their
      // lengths as a short-cut before comparing their elements.
      if (a.length !== b.length) return false;
    // Fall through to object case...

    case '[object Object]':
      {
        if (previouslyCompared(a, b)) return true;
        var aKeys = Object.keys(a);
        var bKeys = Object.keys(b); // If `a` and `b` have a different number of enumerable keys, they
        // must be different.

        var keyCount = aKeys.length;
        if (keyCount !== bKeys.length) return false; // Now make sure they have the same keys.

        for (var k = 0; k < keyCount; ++k) {
          if (!hasOwnProperty.call(b, aKeys[k])) {
            return false;
          }
        } // Finally, check deep equality of all child properties.


        for (var k = 0; k < keyCount; ++k) {
          var key = aKeys[k];

          if (!check(a[key], b[key])) {
            return false;
          }
        }

        return true;
      }

    case '[object Error]':
      return a.name === b.name && a.message === b.message;

    case '[object Number]':
      // Handle NaN, which is !== itself.
      if (a !== a) return b !== b;
    // Fall through to shared +a === +b case...

    case '[object Boolean]':
    case '[object Date]':
      return +a === +b;

    case '[object RegExp]':
    case '[object String]':
      return a == "" + b;

    case '[object Map]':
    case '[object Set]':
      {
        if (a.size !== b.size) return false;
        if (previouslyCompared(a, b)) return true;
        var aIterator = a.entries();
        var isMap = aTag === '[object Map]';

        while (true) {
          var info = aIterator.next();
          if (info.done) break; // If a instanceof Set, aValue === aKey.

          var _a = info.value,
              aKey = _a[0],
              aValue = _a[1]; // So this works the same way for both Set and Map.

          if (!b.has(aKey)) {
            return false;
          } // However, we care about deep equality of values only when dealing
          // with Map structures.


          if (isMap && !check(aValue, b.get(aKey))) {
            return false;
          }
        }

        return true;
      }
  } // Otherwise the values are not equal.


  return false;
}

function previouslyCompared(a, b) {
  // Though cyclic references can make an object graph appear infinite from the
  // perspective of a depth-first traversal, the graph still contains a finite
  // number of distinct object references. We use the previousComparisons cache
  // to avoid comparing the same pair of object references more than once, which
  // guarantees termination (even if we end up comparing every object in one
  // graph to every object in the other graph, which is extremely unlikely),
  // while still allowing weird isomorphic structures (like rings with different
  // lengths) a chance to pass the equality test.
  var bSet = previousComparisons.get(a);

  if (bSet) {
    // Return true here because we can be sure false will be returned somewhere
    // else if the objects are not equivalent.
    if (bSet.has(b)) return true;
  } else {
    previousComparisons.set(a, bSet = new Set());
  }

  bSet.add(b);
  return false;
}

var _default = equal;
exports.default = _default;
},{}],"../node_modules/apollo-utilities/lib/bundle.esm.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTypenameToDocument = addTypenameToDocument;
exports.argumentsObjectFromField = argumentsObjectFromField;
exports.assign = assign;
exports.buildQueryFromSelectionSet = buildQueryFromSelectionSet;
exports.checkDocument = checkDocument;
exports.cloneDeep = cloneDeep;
exports.createFragmentMap = createFragmentMap;
exports.getDefaultValues = getDefaultValues;
exports.getDirectiveInfoFromField = getDirectiveInfoFromField;
exports.getDirectiveNames = getDirectiveNames;
exports.getDirectivesFromDocument = getDirectivesFromDocument;
exports.getEnv = getEnv;
exports.getFragmentDefinition = getFragmentDefinition;
exports.getFragmentDefinitions = getFragmentDefinitions;
exports.getFragmentQueryDocument = getFragmentQueryDocument;
exports.getInclusionDirectives = getInclusionDirectives;
exports.getMainDefinition = getMainDefinition;
exports.getMutationDefinition = getMutationDefinition;
exports.getOperationDefinition = getOperationDefinition;
exports.getOperationDefinitionOrDie = getOperationDefinitionOrDie;
exports.getOperationName = getOperationName;
exports.getQueryDefinition = getQueryDefinition;
exports.getStoreKeyName = getStoreKeyName;
exports.graphQLResultHasError = graphQLResultHasError;
exports.hasClientExports = hasClientExports;
exports.hasDirectives = hasDirectives;
exports.isDevelopment = isDevelopment;
exports.isEnv = isEnv;
exports.isField = isField;
exports.isIdValue = isIdValue;
exports.isInlineFragment = isInlineFragment;
exports.isJsonValue = isJsonValue;
exports.isNumberValue = isNumberValue;
exports.isProduction = isProduction;
exports.isScalarValue = isScalarValue;
exports.isTest = isTest;
exports.maybeDeepFreeze = maybeDeepFreeze;
exports.mergeDeep = mergeDeep;
exports.mergeDeepArray = mergeDeepArray;
exports.removeArgumentsFromDocument = removeArgumentsFromDocument;
exports.removeClientSetsFromDocument = removeClientSetsFromDocument;
exports.removeConnectionDirectiveFromDocument = removeConnectionDirectiveFromDocument;
exports.removeDirectivesFromDocument = removeDirectivesFromDocument;
exports.removeFragmentSpreadFromDocument = removeFragmentSpreadFromDocument;
exports.resultKeyNameFromField = resultKeyNameFromField;
exports.shouldInclude = shouldInclude;
exports.storeKeyNameFromField = storeKeyNameFromField;
exports.stripSymbols = stripSymbols;
exports.toIdValue = toIdValue;
exports.tryFunctionOrLogError = tryFunctionOrLogError;
exports.valueFromNode = valueFromNode;
exports.valueToObjectRepresentation = valueToObjectRepresentation;
exports.variablesInOperation = variablesInOperation;
exports.warnOnceInDevelopment = warnOnceInDevelopment;
Object.defineProperty(exports, "isEqual", {
  enumerable: true,
  get: function () {
    return _equality.equal;
  }
});
exports.canUseWeakMap = void 0;

var _visitor = require("graphql/language/visitor");

var _tsInvariant = require("ts-invariant");

var _tslib = require("tslib");

var _fastJsonStableStringify = _interopRequireDefault(require("fast-json-stable-stringify"));

var _equality = require("@wry/equality");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isScalarValue(value) {
  return ['StringValue', 'BooleanValue', 'EnumValue'].indexOf(value.kind) > -1;
}

function isNumberValue(value) {
  return ['IntValue', 'FloatValue'].indexOf(value.kind) > -1;
}

function isStringValue(value) {
  return value.kind === 'StringValue';
}

function isBooleanValue(value) {
  return value.kind === 'BooleanValue';
}

function isIntValue(value) {
  return value.kind === 'IntValue';
}

function isFloatValue(value) {
  return value.kind === 'FloatValue';
}

function isVariable(value) {
  return value.kind === 'Variable';
}

function isObjectValue(value) {
  return value.kind === 'ObjectValue';
}

function isListValue(value) {
  return value.kind === 'ListValue';
}

function isEnumValue(value) {
  return value.kind === 'EnumValue';
}

function isNullValue(value) {
  return value.kind === 'NullValue';
}

function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function (obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function (listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw "development" === "production" ? new _tsInvariant.InvariantError(17) : new _tsInvariant.InvariantError("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" + 'is not supported. Use variables instead of inline arguments to ' + 'overcome this limitation.');
  }
}

function storeKeyNameFromField(field, variables) {
  var directivesObj = null;

  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function (directive) {
      directivesObj[directive.name.value] = {};

      if (directive.arguments) {
        directive.arguments.forEach(function (_a) {
          var name = _a.name,
              value = _a.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }

  var argObj = null;

  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function (_a) {
      var name = _a.name,
          value = _a.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }

  return getStoreKeyName(field.name.value, argObj, directivesObj);
}

var KNOWN_DIRECTIVES = ['connection', 'include', 'skip', 'client', 'rest', 'export'];

function getStoreKeyName(fieldName, args, directives) {
  if (directives && directives['connection'] && directives['connection']['key']) {
    if (directives['connection']['filter'] && directives['connection']['filter'].length > 0) {
      var filterKeys = directives['connection']['filter'] ? directives['connection']['filter'] : [];
      filterKeys.sort();
      var queryArgs_1 = args;
      var filteredArgs_1 = {};
      filterKeys.forEach(function (key) {
        filteredArgs_1[key] = queryArgs_1[key];
      });
      return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
    } else {
      return directives['connection']['key'];
    }
  }

  var completeFieldName = fieldName;

  if (args) {
    var stringifiedArgs = (0, _fastJsonStableStringify.default)(args);
    completeFieldName += "(" + stringifiedArgs + ")";
  }

  if (directives) {
    Object.keys(directives).forEach(function (key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1) return;

      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
      } else {
        completeFieldName += "@" + key;
      }
    });
  }

  return completeFieldName;
}

function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function (_a) {
      var name = _a.name,
          value = _a.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }

  return null;
}

function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}

function isField(selection) {
  return selection.kind === 'Field';
}

function isInlineFragment(selection) {
  return selection.kind === 'InlineFragment';
}

function isIdValue(idObject) {
  return idObject && idObject.type === 'id' && typeof idObject.generated === 'boolean';
}

function toIdValue(idConfig, generated) {
  if (generated === void 0) {
    generated = false;
  }

  return (0, _tslib.__assign)({
    type: 'id',
    generated: generated
  }, typeof idConfig === 'string' ? {
    id: idConfig,
    typename: undefined
  } : idConfig);
}

function isJsonValue(jsonObject) {
  return jsonObject != null && typeof jsonObject === 'object' && jsonObject.type === 'json';
}

function defaultValueFromVariable(node) {
  throw "development" === "production" ? new _tsInvariant.InvariantError(18) : new _tsInvariant.InvariantError("Variable nodes are not supported by valueFromNode");
}

function valueFromNode(node, onVariable) {
  if (onVariable === void 0) {
    onVariable = defaultValueFromVariable;
  }

  switch (node.kind) {
    case 'Variable':
      return onVariable(node);

    case 'NullValue':
      return null;

    case 'IntValue':
      return parseInt(node.value, 10);

    case 'FloatValue':
      return parseFloat(node.value);

    case 'ListValue':
      return node.values.map(function (v) {
        return valueFromNode(v, onVariable);
      });

    case 'ObjectValue':
      {
        var value = {};

        for (var _i = 0, _a = node.fields; _i < _a.length; _i++) {
          var field = _a[_i];
          value[field.name.value] = valueFromNode(field.value, onVariable);
        }

        return value;
      }

    default:
      return node.value;
  }
}

function getDirectiveInfoFromField(field, variables) {
  if (field.directives && field.directives.length) {
    var directiveObj_1 = {};
    field.directives.forEach(function (directive) {
      directiveObj_1[directive.name.value] = argumentsObjectFromField(directive, variables);
    });
    return directiveObj_1;
  }

  return null;
}

function shouldInclude(selection, variables) {
  if (variables === void 0) {
    variables = {};
  }

  return getInclusionDirectives(selection.directives).every(function (_a) {
    var directive = _a.directive,
        ifArgument = _a.ifArgument;
    var evaledValue = false;

    if (ifArgument.value.kind === 'Variable') {
      evaledValue = variables[ifArgument.value.name.value];
      "development" === "production" ? (0, _tsInvariant.invariant)(evaledValue !== void 0, 3) : (0, _tsInvariant.invariant)(evaledValue !== void 0, "Invalid variable referenced in @" + directive.name.value + " directive.");
    } else {
      evaledValue = ifArgument.value.value;
    }

    return directive.name.value === 'skip' ? !evaledValue : evaledValue;
  });
}

function getDirectiveNames(doc) {
  var names = [];
  (0, _visitor.visit)(doc, {
    Directive: function (node) {
      names.push(node.name.value);
    }
  });
  return names;
}

function hasDirectives(names, doc) {
  return getDirectiveNames(doc).some(function (name) {
    return names.indexOf(name) > -1;
  });
}

function hasClientExports(document) {
  return document && hasDirectives(['client'], document) && hasDirectives(['export'], document);
}

function isInclusionDirective(_a) {
  var value = _a.name.value;
  return value === 'skip' || value === 'include';
}

function getInclusionDirectives(directives) {
  return directives ? directives.filter(isInclusionDirective).map(function (directive) {
    var directiveArguments = directive.arguments;
    var directiveName = directive.name.value;
    "development" === "production" ? (0, _tsInvariant.invariant)(directiveArguments && directiveArguments.length === 1, 4) : (0, _tsInvariant.invariant)(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.");
    var ifArgument = directiveArguments[0];
    "development" === "production" ? (0, _tsInvariant.invariant)(ifArgument.name && ifArgument.name.value === 'if', 5) : (0, _tsInvariant.invariant)(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @" + directiveName + " directive.");
    var ifValue = ifArgument.value;
    "development" === "production" ? (0, _tsInvariant.invariant)(ifValue && (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), 6) : (0, _tsInvariant.invariant)(ifValue && (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
    return {
      directive: directive,
      ifArgument: ifArgument
    };
  }) : [];
}

function getFragmentQueryDocument(document, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document.definitions.forEach(function (definition) {
    if (definition.kind === 'OperationDefinition') {
      throw "development" === "production" ? new _tsInvariant.InvariantError(1) : new _tsInvariant.InvariantError("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " + 'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
    }

    if (definition.kind === 'FragmentDefinition') {
      fragments.push(definition);
    }
  });

  if (typeof actualFragmentName === 'undefined') {
    "development" === "production" ? (0, _tsInvariant.invariant)(fragments.length === 1, 2) : (0, _tsInvariant.invariant)(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
    actualFragmentName = fragments[0].name.value;
  }

  var query = (0, _tslib.__assign)({}, document, {
    definitions: [{
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{
          kind: 'FragmentSpread',
          name: {
            kind: 'Name',
            value: actualFragmentName
          }
        }]
      }
    }].concat(document.definitions)
  });
  return query;
}

function assign(target) {
  var sources = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    sources[_i - 1] = arguments[_i];
  }

  sources.forEach(function (source) {
    if (typeof source === 'undefined' || source === null) {
      return;
    }

    Object.keys(source).forEach(function (key) {
      target[key] = source[key];
    });
  });
  return target;
}

function getMutationDefinition(doc) {
  checkDocument(doc);
  var mutationDef = doc.definitions.filter(function (definition) {
    return definition.kind === 'OperationDefinition' && definition.operation === 'mutation';
  })[0];
  "development" === "production" ? (0, _tsInvariant.invariant)(mutationDef, 7) : (0, _tsInvariant.invariant)(mutationDef, 'Must contain a mutation definition.');
  return mutationDef;
}

function checkDocument(doc) {
  "development" === "production" ? (0, _tsInvariant.invariant)(doc && doc.kind === 'Document', 8) : (0, _tsInvariant.invariant)(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
  var operations = doc.definitions.filter(function (d) {
    return d.kind !== 'FragmentDefinition';
  }).map(function (definition) {
    if (definition.kind !== 'OperationDefinition') {
      throw "development" === "production" ? new _tsInvariant.InvariantError(9) : new _tsInvariant.InvariantError("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
    }

    return definition;
  });
  "development" === "production" ? (0, _tsInvariant.invariant)(operations.length <= 1, 10) : (0, _tsInvariant.invariant)(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations");
  return doc;
}

function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function (definition) {
    return definition.kind === 'OperationDefinition';
  })[0];
}

function getOperationDefinitionOrDie(document) {
  var def = getOperationDefinition(document);
  "development" === "production" ? (0, _tsInvariant.invariant)(def, 11) : (0, _tsInvariant.invariant)(def, "GraphQL document is missing an operation");
  return def;
}

function getOperationName(doc) {
  return doc.definitions.filter(function (definition) {
    return definition.kind === 'OperationDefinition' && definition.name;
  }).map(function (x) {
    return x.name.value;
  })[0] || null;
}

function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function (definition) {
    return definition.kind === 'FragmentDefinition';
  });
}

function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  "development" === "production" ? (0, _tsInvariant.invariant)(queryDef && queryDef.operation === 'query', 12) : (0, _tsInvariant.invariant)(queryDef && queryDef.operation === 'query', 'Must contain a query definition.');
  return queryDef;
}

function getFragmentDefinition(doc) {
  "development" === "production" ? (0, _tsInvariant.invariant)(doc.kind === 'Document', 13) : (0, _tsInvariant.invariant)(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
  "development" === "production" ? (0, _tsInvariant.invariant)(doc.definitions.length <= 1, 14) : (0, _tsInvariant.invariant)(doc.definitions.length <= 1, 'Fragment must have exactly one definition.');
  var fragmentDef = doc.definitions[0];
  "development" === "production" ? (0, _tsInvariant.invariant)(fragmentDef.kind === 'FragmentDefinition', 15) : (0, _tsInvariant.invariant)(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.');
  return fragmentDef;
}

function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;

  for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
    var definition = _a[_i];

    if (definition.kind === 'OperationDefinition') {
      var operation = definition.operation;

      if (operation === 'query' || operation === 'mutation' || operation === 'subscription') {
        return definition;
      }
    }

    if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }

  if (fragmentDefinition) {
    return fragmentDefinition;
  }

  throw "development" === "production" ? new _tsInvariant.InvariantError(16) : new _tsInvariant.InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
}

function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }

  var symTable = {};
  fragments.forEach(function (fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}

function getDefaultValues(definition) {
  if (definition && definition.variableDefinitions && definition.variableDefinitions.length) {
    var defaultValues = definition.variableDefinitions.filter(function (_a) {
      var defaultValue = _a.defaultValue;
      return defaultValue;
    }).map(function (_a) {
      var variable = _a.variable,
          defaultValue = _a.defaultValue;
      var defaultValueObj = {};
      valueToObjectRepresentation(defaultValueObj, variable.name, defaultValue);
      return defaultValueObj;
    });
    return assign.apply(void 0, [{}].concat(defaultValues));
  }

  return {};
}

function variablesInOperation(operation) {
  var names = new Set();

  if (operation.variableDefinitions) {
    for (var _i = 0, _a = operation.variableDefinitions; _i < _a.length; _i++) {
      var definition = _a[_i];
      names.add(definition.variable.name.value);
    }
  }

  return names;
}

function filterInPlace(array, test, context) {
  var target = 0;
  array.forEach(function (elem, i) {
    if (test.call(this, elem, i, array)) {
      array[target++] = elem;
    }
  }, context);
  array.length = target;
  return array;
}

var TYPENAME_FIELD = {
  kind: 'Field',
  name: {
    kind: 'Name',
    value: '__typename'
  }
};

function isEmpty(op, fragments) {
  return op.selectionSet.selections.every(function (selection) {
    return selection.kind === 'FragmentSpread' && isEmpty(fragments[selection.name.value], fragments);
  });
}

function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}

function getDirectiveMatcher(directives) {
  return function directiveMatcher(directive) {
    return directives.some(function (dir) {
      return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
    });
  };
}

function removeDirectivesFromDocument(directives, doc) {
  var variablesInUse = Object.create(null);
  var variablesToRemove = [];
  var fragmentSpreadsInUse = Object.create(null);
  var fragmentSpreadsToRemove = [];
  var modifiedDoc = nullIfDocIsEmpty((0, _visitor.visit)(doc, {
    Variable: {
      enter: function (node, _key, parent) {
        if (parent.kind !== 'VariableDefinition') {
          variablesInUse[node.name.value] = true;
        }
      }
    },
    Field: {
      enter: function (node) {
        if (directives && node.directives) {
          var shouldRemoveField = directives.some(function (directive) {
            return directive.remove;
          });

          if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
            if (node.arguments) {
              node.arguments.forEach(function (arg) {
                if (arg.value.kind === 'Variable') {
                  variablesToRemove.push({
                    name: arg.value.name.value
                  });
                }
              });
            }

            if (node.selectionSet) {
              getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                fragmentSpreadsToRemove.push({
                  name: frag.name.value
                });
              });
            }

            return null;
          }
        }
      }
    },
    FragmentSpread: {
      enter: function (node) {
        fragmentSpreadsInUse[node.name.value] = true;
      }
    },
    Directive: {
      enter: function (node) {
        if (getDirectiveMatcher(directives)(node)) {
          return null;
        }
      }
    }
  }));

  if (modifiedDoc && filterInPlace(variablesToRemove, function (v) {
    return !variablesInUse[v.name];
  }).length) {
    modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
  }

  if (modifiedDoc && filterInPlace(fragmentSpreadsToRemove, function (fs) {
    return !fragmentSpreadsInUse[fs.name];
  }).length) {
    modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
  }

  return modifiedDoc;
}

function addTypenameToDocument(doc) {
  return (0, _visitor.visit)(checkDocument(doc), {
    SelectionSet: {
      enter: function (node, _key, parent) {
        if (parent && parent.kind === 'OperationDefinition') {
          return;
        }

        var selections = node.selections;

        if (!selections) {
          return;
        }

        var skip = selections.some(function (selection) {
          return isField(selection) && (selection.name.value === '__typename' || selection.name.value.lastIndexOf('__', 0) === 0);
        });

        if (skip) {
          return;
        }

        var field = parent;

        if (isField(field) && field.directives && field.directives.some(function (d) {
          return d.name.value === 'export';
        })) {
          return;
        }

        return (0, _tslib.__assign)({}, node, {
          selections: selections.concat([TYPENAME_FIELD])
        });
      }
    }
  });
}

var connectionRemoveConfig = {
  test: function (directive) {
    var willRemove = directive.name.value === 'connection';

    if (willRemove) {
      if (!directive.arguments || !directive.arguments.some(function (arg) {
        return arg.name.value === 'key';
      })) {
        "development" === "production" || _tsInvariant.invariant.warn('Removing an @connection directive even though it does not have a key. ' + 'You may want to use the key parameter to specify a store key.');
      }
    }

    return willRemove;
  }
};

function removeConnectionDirectiveFromDocument(doc) {
  return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}

function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
  if (nestedCheck === void 0) {
    nestedCheck = true;
  }

  return selectionSet && selectionSet.selections && selectionSet.selections.some(function (selection) {
    return hasDirectivesInSelection(directives, selection, nestedCheck);
  });
}

function hasDirectivesInSelection(directives, selection, nestedCheck) {
  if (nestedCheck === void 0) {
    nestedCheck = true;
  }

  if (!isField(selection)) {
    return true;
  }

  if (!selection.directives) {
    return false;
  }

  return selection.directives.some(getDirectiveMatcher(directives)) || nestedCheck && hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck);
}

function getDirectivesFromDocument(directives, doc) {
  checkDocument(doc);
  var parentPath;
  return nullIfDocIsEmpty((0, _visitor.visit)(doc, {
    SelectionSet: {
      enter: function (node, _key, _parent, path) {
        var currentPath = path.join('-');

        if (!parentPath || currentPath === parentPath || !currentPath.startsWith(parentPath)) {
          if (node.selections) {
            var selectionsWithDirectives = node.selections.filter(function (selection) {
              return hasDirectivesInSelection(directives, selection);
            });

            if (hasDirectivesInSelectionSet(directives, node, false)) {
              parentPath = currentPath;
            }

            return (0, _tslib.__assign)({}, node, {
              selections: selectionsWithDirectives
            });
          } else {
            return null;
          }
        }
      }
    }
  }));
}

function getArgumentMatcher(config) {
  return function argumentMatcher(argument) {
    return config.some(function (aConfig) {
      return argument.value && argument.value.kind === 'Variable' && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
    });
  };
}

function removeArgumentsFromDocument(config, doc) {
  var argMatcher = getArgumentMatcher(config);
  return nullIfDocIsEmpty((0, _visitor.visit)(doc, {
    OperationDefinition: {
      enter: function (node) {
        return (0, _tslib.__assign)({}, node, {
          variableDefinitions: node.variableDefinitions.filter(function (varDef) {
            return !config.some(function (arg) {
              return arg.name === varDef.variable.name.value;
            });
          })
        });
      }
    },
    Field: {
      enter: function (node) {
        var shouldRemoveField = config.some(function (argConfig) {
          return argConfig.remove;
        });

        if (shouldRemoveField) {
          var argMatchCount_1 = 0;
          node.arguments.forEach(function (arg) {
            if (argMatcher(arg)) {
              argMatchCount_1 += 1;
            }
          });

          if (argMatchCount_1 === 1) {
            return null;
          }
        }
      }
    },
    Argument: {
      enter: function (node) {
        if (argMatcher(node)) {
          return null;
        }
      }
    }
  }));
}

function removeFragmentSpreadFromDocument(config, doc) {
  function enter(node) {
    if (config.some(function (def) {
      return def.name === node.name.value;
    })) {
      return null;
    }
  }

  return nullIfDocIsEmpty((0, _visitor.visit)(doc, {
    FragmentSpread: {
      enter: enter
    },
    FragmentDefinition: {
      enter: enter
    }
  }));
}

function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
  var allFragments = [];
  selectionSet.selections.forEach(function (selection) {
    if ((isField(selection) || isInlineFragment(selection)) && selection.selectionSet) {
      getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) {
        return allFragments.push(frag);
      });
    } else if (selection.kind === 'FragmentSpread') {
      allFragments.push(selection);
    }
  });
  return allFragments;
}

function buildQueryFromSelectionSet(document) {
  var definition = getMainDefinition(document);
  var definitionOperation = definition.operation;

  if (definitionOperation === 'query') {
    return document;
  }

  var modifiedDoc = (0, _visitor.visit)(document, {
    OperationDefinition: {
      enter: function (node) {
        return (0, _tslib.__assign)({}, node, {
          operation: 'query'
        });
      }
    }
  });
  return modifiedDoc;
}

function removeClientSetsFromDocument(document) {
  checkDocument(document);
  var modifiedDoc = removeDirectivesFromDocument([{
    test: function (directive) {
      return directive.name.value === 'client';
    },
    remove: true
  }], document);

  if (modifiedDoc) {
    modifiedDoc = (0, _visitor.visit)(modifiedDoc, {
      FragmentDefinition: {
        enter: function (node) {
          if (node.selectionSet) {
            var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
              return isField(selection) && selection.name.value === '__typename';
            });

            if (isTypenameOnly) {
              return null;
            }
          }
        }
      }
    });
  }

  return modifiedDoc;
}

var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' && navigator.product === 'ReactNative');
exports.canUseWeakMap = canUseWeakMap;
var toString = Object.prototype.toString;

function cloneDeep(value) {
  return cloneDeepHelper(value, new Map());
}

function cloneDeepHelper(val, seen) {
  switch (toString.call(val)) {
    case "[object Array]":
      {
        if (seen.has(val)) return seen.get(val);
        var copy_1 = val.slice(0);
        seen.set(val, copy_1);
        copy_1.forEach(function (child, i) {
          copy_1[i] = cloneDeepHelper(child, seen);
        });
        return copy_1;
      }

    case "[object Object]":
      {
        if (seen.has(val)) return seen.get(val);
        var copy_2 = Object.create(Object.getPrototypeOf(val));
        seen.set(val, copy_2);
        Object.keys(val).forEach(function (key) {
          copy_2[key] = cloneDeepHelper(val[key], seen);
        });
        return copy_2;
      }

    default:
      return val;
  }
}

function getEnv() {
  if (typeof process !== 'undefined' && "development") {
    return "development";
  }

  return 'development';
}

function isEnv(env) {
  return getEnv() === env;
}

function isProduction() {
  return isEnv('production') === true;
}

function isDevelopment() {
  return isEnv('development') === true;
}

function isTest() {
  return isEnv('test') === true;
}

function tryFunctionOrLogError(f) {
  try {
    return f();
  } catch (e) {
    if (console.error) {
      console.error(e);
    }
  }
}

function graphQLResultHasError(result) {
  return result.errors && result.errors.length;
}

function deepFreeze(o) {
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o[prop] !== null && (typeof o[prop] === 'object' || typeof o[prop] === 'function') && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
  return o;
}

function maybeDeepFreeze(obj) {
  if (isDevelopment() || isTest()) {
    var symbolIsPolyfilled = typeof Symbol === 'function' && typeof Symbol('') === 'string';

    if (!symbolIsPolyfilled) {
      return deepFreeze(obj);
    }
  }

  return obj;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function mergeDeep() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  return mergeDeepArray(sources);
}

function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;

  if (count > 1) {
    var pastCopies = [];
    target = shallowCopyForMerge(target, pastCopies);

    for (var i = 1; i < count; ++i) {
      target = mergeHelper(target, sources[i], pastCopies);
    }
  }

  return target;
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function mergeHelper(target, source, pastCopies) {
  if (isObject(source) && isObject(target)) {
    if (Object.isExtensible && !Object.isExtensible(target)) {
      target = shallowCopyForMerge(target, pastCopies);
    }

    Object.keys(source).forEach(function (sourceKey) {
      var sourceValue = source[sourceKey];

      if (hasOwnProperty.call(target, sourceKey)) {
        var targetValue = target[sourceKey];

        if (sourceValue !== targetValue) {
          target[sourceKey] = mergeHelper(shallowCopyForMerge(targetValue, pastCopies), sourceValue, pastCopies);
        }
      } else {
        target[sourceKey] = sourceValue;
      }
    });
    return target;
  }

  return source;
}

function shallowCopyForMerge(value, pastCopies) {
  if (value !== null && typeof value === 'object' && pastCopies.indexOf(value) < 0) {
    if (Array.isArray(value)) {
      value = value.slice(0);
    } else {
      value = (0, _tslib.__assign)({
        __proto__: Object.getPrototypeOf(value)
      }, value);
    }

    pastCopies.push(value);
  }

  return value;
}

var haveWarned = Object.create({});

function warnOnceInDevelopment(msg, type) {
  if (type === void 0) {
    type = 'warn';
  }

  if (!isProduction() && !haveWarned[msg]) {
    if (!isTest()) {
      haveWarned[msg] = true;
    }

    if (type === 'error') {
      console.error(msg);
    } else {
      console.warn(msg);
    }
  }
}

function stripSymbols(data) {
  return JSON.parse(JSON.stringify(data));
}
},{"graphql/language/visitor":"../node_modules/graphql/language/visitor.js","ts-invariant":"../node_modules/ts-invariant/lib/invariant.esm.js","tslib":"../node_modules/tslib/tslib.es6.js","fast-json-stable-stringify":"../node_modules/fast-json-stable-stringify/index.js","@wry/equality":"../node_modules/@wry/equality/lib/equality.esm.js","process":"../node_modules/process/browser.js"}],"../node_modules/zen-observable/lib/Observable.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// === Symbol Support ===

var hasSymbols = function () {
  return typeof Symbol === 'function';
};
var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species');

// === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];

  if (value == null) return undefined;

  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');

  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== undefined) {
    ctor = ctor[SymbolSpecies];
    if (ctor === null) {
      ctor = undefined;
    }
  }
  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;

  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = undefined;
  subscription._state = 'ready';
  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';

  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);
    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;
      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;
      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({ type: type, value: value });
    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{ type: type, value: value }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription = function () {
  function Subscription(observer, subscriber) {
    _classCallCheck(this, Subscription);

    // ASSERT: observer is an object
    // ASSERT: subscriber is callable

    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';

    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  _createClass(Subscription, [{
    key: 'unsubscribe',
    value: function unsubscribe() {
      if (this._state !== 'closed') {
        closeSubscription(this);
        cleanupSubscription(this);
      }
    }
  }, {
    key: 'closed',
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver = function () {
  function SubscriptionObserver(subscription) {
    _classCallCheck(this, SubscriptionObserver);

    this._subscription = subscription;
  }

  _createClass(SubscriptionObserver, [{
    key: 'next',
    value: function next(value) {
      onNotify(this._subscription, 'next', value);
    }
  }, {
    key: 'error',
    value: function error(value) {
      onNotify(this._subscription, 'error', value);
    }
  }, {
    key: 'complete',
    value: function complete() {
      onNotify(this._subscription, 'complete');
    }
  }, {
    key: 'closed',
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable = exports.Observable = function () {
  function Observable(subscriber) {
    _classCallCheck(this, Observable);

    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');

    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');

    this._subscriber = subscriber;
  }

  _createClass(Observable, [{
    key: 'subscribe',
    value: function subscribe(observer) {
      if (typeof observer !== 'object' || observer === null) {
        observer = {
          next: observer,
          error: arguments[1],
          complete: arguments[2]
        };
      }
      return new Subscription(observer, this._subscriber);
    }
  }, {
    key: 'forEach',
    value: function forEach(fn) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (typeof fn !== 'function') {
          reject(new TypeError(fn + ' is not a function'));
          return;
        }

        function done() {
          subscription.unsubscribe();
          resolve();
        }

        var subscription = _this.subscribe({
          next: function (value) {
            try {
              fn(value, done);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },

          error: reject,
          complete: resolve
        });
      });
    }
  }, {
    key: 'map',
    value: function map(fn) {
      var _this2 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        return _this2.subscribe({
          next: function (value) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'filter',
    value: function filter(fn) {
      var _this3 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        return _this3.subscribe({
          next: function (value) {
            try {
              if (!fn(value)) return;
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'reduce',
    value: function reduce(fn) {
      var _this4 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);
      var hasSeed = arguments.length > 1;
      var hasValue = false;
      var seed = arguments[1];
      var acc = seed;

      return new C(function (observer) {
        return _this4.subscribe({
          next: function (value) {
            var first = !hasValue;
            hasValue = true;

            if (!first || hasSeed) {
              try {
                acc = fn(acc, value);
              } catch (e) {
                return observer.error(e);
              }
            } else {
              acc = value;
            }
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));

            observer.next(acc);
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'concat',
    value: function concat() {
      var _this5 = this;

      for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      var C = getSpecies(this);

      return new C(function (observer) {
        var subscription = void 0;
        var index = 0;

        function startNext(next) {
          subscription = next.subscribe({
            next: function (v) {
              observer.next(v);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              if (index === sources.length) {
                subscription = undefined;
                observer.complete();
              } else {
                startNext(C.from(sources[index++]));
              }
            }
          });
        }

        startNext(_this5);

        return function () {
          if (subscription) {
            subscription.unsubscribe();
            subscription = undefined;
          }
        };
      });
    }
  }, {
    key: 'flatMap',
    value: function flatMap(fn) {
      var _this6 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        var subscriptions = [];

        var outer = _this6.subscribe({
          next: function (value) {
            if (fn) {
              try {
                value = fn(value);
              } catch (e) {
                return observer.error(e);
              }
            }

            var inner = C.from(value).subscribe({
              next: function (value) {
                observer.next(value);
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                var i = subscriptions.indexOf(inner);
                if (i >= 0) subscriptions.splice(i, 1);
                completeIfDone();
              }
            });

            subscriptions.push(inner);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            completeIfDone();
          }
        });

        function completeIfDone() {
          if (outer.closed && subscriptions.length === 0) observer.complete();
        }

        return function () {
          subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
          outer.unsubscribe();
        };
      });
    }
  }, {
    key: SymbolObservable,
    value: function () {
      return this;
    }
  }], [{
    key: 'from',
    value: function from(x) {
      var C = typeof this === 'function' ? this : Observable;

      if (x == null) throw new TypeError(x + ' is not an object');

      var method = getMethod(x, SymbolObservable);
      if (method) {
        var observable = method.call(x);

        if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');

        if (isObservable(observable) && observable.constructor === C) return observable;

        return new C(function (observer) {
          return observable.subscribe(observer);
        });
      }

      if (hasSymbol('iterator')) {
        method = getMethod(x, SymbolIterator);
        if (method) {
          return new C(function (observer) {
            enqueue(function () {
              if (observer.closed) return;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var item = _step.value;

                  observer.next(item);
                  if (observer.closed) return;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              observer.complete();
            });
          });
        }
      }

      if (Array.isArray(x)) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;
            for (var i = 0; i < x.length; ++i) {
              observer.next(x[i]);
              if (observer.closed) return;
            }
            observer.complete();
          });
        });
      }

      throw new TypeError(x + ' is not observable');
    }
  }, {
    key: 'of',
    value: function of() {
      for (var _len2 = arguments.length, items = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }

      var C = typeof this === 'function' ? this : Observable;

      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;
          for (var i = 0; i < items.length; ++i) {
            observer.next(items[i]);
            if (observer.closed) return;
          }
          observer.complete();
        });
      });
    }
  }, {
    key: SymbolSpecies,
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: SymbolObservable,
      hostReportError: hostReportError
    },
    configurable: true
  });
}
},{}],"../node_modules/zen-observable/index.js":[function(require,module,exports) {
module.exports = require('./lib/Observable.js').Observable;

},{"./lib/Observable.js":"../node_modules/zen-observable/lib/Observable.js"}],"../node_modules/zen-observable-ts/lib/bundle.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observable = exports.default = void 0;

var _zenObservable = _interopRequireDefault(require("zen-observable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Observable = _zenObservable.default;
exports.Observable = Observable;
var _default = Observable;
exports.default = _default;
},{"zen-observable":"../node_modules/zen-observable/index.js"}],"../node_modules/apollo-link/lib/bundle.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOperation = createOperation;
exports.empty = empty;
exports.execute = execute;
exports.from = from;
exports.fromError = fromError;
exports.fromPromise = fromPromise;
exports.split = split;
exports.toPromise = toPromise;
Object.defineProperty(exports, "Observable", {
  enumerable: true,
  get: function () {
    return _zenObservableTs.default;
  }
});
Object.defineProperty(exports, "getOperationName", {
  enumerable: true,
  get: function () {
    return _apolloUtilities.getOperationName;
  }
});
exports.makePromise = exports.concat = exports.ApolloLink = void 0;

var _zenObservableTs = _interopRequireDefault(require("zen-observable-ts"));

var _tsInvariant = require("ts-invariant");

var _tslib = require("tslib");

var _apolloUtilities = require("apollo-utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateOperation(operation) {
  var OPERATION_FIELDS = ['query', 'operationName', 'variables', 'extensions', 'context'];

  for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
    var key = _a[_i];

    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw "development" === "production" ? new _tsInvariant.InvariantError(2) : new _tsInvariant.InvariantError("illegal argument: " + key);
    }
  }

  return operation;
}

var LinkError = function (_super) {
  (0, _tslib.__extends)(LinkError, _super);

  function LinkError(message, link) {
    var _this = _super.call(this, message) || this;

    _this.link = link;
    return _this;
  }

  return LinkError;
}(Error);

function isTerminating(link) {
  return link.request.length <= 1;
}

function toPromise(observable) {
  var completed = false;
  return new Promise(function (resolve, reject) {
    observable.subscribe({
      next: function (data) {
        if (completed) {
          "development" === "production" || _tsInvariant.invariant.warn("Promise Wrapper does not support multiple results from Observable");
        } else {
          completed = true;
          resolve(data);
        }
      },
      error: reject
    });
  });
}

var makePromise = toPromise;
exports.makePromise = makePromise;

function fromPromise(promise) {
  return new _zenObservableTs.default(function (observer) {
    promise.then(function (value) {
      observer.next(value);
      observer.complete();
    }).catch(observer.error.bind(observer));
  });
}

function fromError(errorValue) {
  return new _zenObservableTs.default(function (observer) {
    observer.error(errorValue);
  });
}

function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };

  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== 'string' ? (0, _apolloUtilities.getOperationName)(transformedOperation.query) : '';
  }

  return transformedOperation;
}

function createOperation(starting, operation) {
  var context = (0, _tslib.__assign)({}, starting);

  var setContext = function (next) {
    if (typeof next === 'function') {
      context = (0, _tslib.__assign)({}, context, next(context));
    } else {
      context = (0, _tslib.__assign)({}, context, next);
    }
  };

  var getContext = function () {
    return (0, _tslib.__assign)({}, context);
  };

  Object.defineProperty(operation, 'setContext', {
    enumerable: false,
    value: setContext
  });
  Object.defineProperty(operation, 'getContext', {
    enumerable: false,
    value: getContext
  });
  Object.defineProperty(operation, 'toKey', {
    enumerable: false,
    value: function () {
      return getKey(operation);
    }
  });
  return operation;
}

function getKey(operation) {
  var query = operation.query,
      variables = operation.variables,
      operationName = operation.operationName;
  return JSON.stringify([operationName, query, variables]);
}

function passthrough(op, forward) {
  return forward ? forward(op) : _zenObservableTs.default.of();
}

function toLink(handler) {
  return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}

function empty() {
  return new ApolloLink(function () {
    return _zenObservableTs.default.of();
  });
}

function from(links) {
  if (links.length === 0) return empty();
  return links.map(toLink).reduce(function (x, y) {
    return x.concat(y);
  });
}

function split(test, left, right) {
  var leftLink = toLink(left);
  var rightLink = toLink(right || new ApolloLink(passthrough));

  if (isTerminating(leftLink) && isTerminating(rightLink)) {
    return new ApolloLink(function (operation) {
      return test(operation) ? leftLink.request(operation) || _zenObservableTs.default.of() : rightLink.request(operation) || _zenObservableTs.default.of();
    });
  } else {
    return new ApolloLink(function (operation, forward) {
      return test(operation) ? leftLink.request(operation, forward) || _zenObservableTs.default.of() : rightLink.request(operation, forward) || _zenObservableTs.default.of();
    });
  }
}

var concat = function (first, second) {
  var firstLink = toLink(first);

  if (isTerminating(firstLink)) {
    "development" === "production" || _tsInvariant.invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
    return firstLink;
  }

  var nextLink = toLink(second);

  if (isTerminating(nextLink)) {
    return new ApolloLink(function (operation) {
      return firstLink.request(operation, function (op) {
        return nextLink.request(op) || _zenObservableTs.default.of();
      }) || _zenObservableTs.default.of();
    });
  } else {
    return new ApolloLink(function (operation, forward) {
      return firstLink.request(operation, function (op) {
        return nextLink.request(op, forward) || _zenObservableTs.default.of();
      }) || _zenObservableTs.default.of();
    });
  }
};

exports.concat = concat;

var ApolloLink = function () {
  function ApolloLink(request) {
    if (request) this.request = request;
  }

  ApolloLink.prototype.split = function (test, left, right) {
    return this.concat(split(test, left, right || new ApolloLink(passthrough)));
  };

  ApolloLink.prototype.concat = function (next) {
    return concat(this, next);
  };

  ApolloLink.prototype.request = function (operation, forward) {
    throw "development" === "production" ? new _tsInvariant.InvariantError(1) : new _tsInvariant.InvariantError('request is not implemented');
  };

  ApolloLink.empty = empty;
  ApolloLink.from = from;
  ApolloLink.split = split;
  ApolloLink.execute = execute;
  return ApolloLink;
}();

exports.ApolloLink = ApolloLink;

function execute(link, operation) {
  return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || _zenObservableTs.default.of();
}
},{"zen-observable-ts":"../node_modules/zen-observable-ts/lib/bundle.esm.js","ts-invariant":"../node_modules/ts-invariant/lib/invariant.esm.js","tslib":"../node_modules/tslib/tslib.es6.js","apollo-utilities":"../node_modules/apollo-utilities/lib/bundle.esm.js"}],"../node_modules/symbol-observable/es/ponyfill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = symbolObservablePonyfill;

function symbolObservablePonyfill(root) {
  var result;
  var Symbol = root.Symbol;

  if (typeof Symbol === 'function') {
    if (Symbol.observable) {
      result = Symbol.observable;
    } else {
      result = Symbol('observable');
      Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
}

;
},{}],"../node_modules/symbol-observable/es/index.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ponyfill = _interopRequireDefault(require("./ponyfill.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill.default)(root);
var _default = result;
exports.default = _default;
},{"./ponyfill.js":"../node_modules/symbol-observable/es/ponyfill.js"}],"../node_modules/apollo-client/bundle.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isApolloError = isApolloError;
exports.ObservableQuery = exports.NetworkStatus = exports.FetchType = exports.ApolloError = exports.ApolloClient = exports.default = void 0;

var _tslib = require("tslib");

var _apolloUtilities = require("apollo-utilities");

var _apolloLink = require("apollo-link");

var _symbolObservable = _interopRequireDefault(require("symbol-observable"));

var _tsInvariant = require("ts-invariant");

var _visitor = require("graphql/language/visitor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NetworkStatus;
exports.NetworkStatus = NetworkStatus;

(function (NetworkStatus) {
  NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
  NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
  NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
  NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
  NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
  NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
  NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (exports.NetworkStatus = NetworkStatus = {}));

function isNetworkRequestInFlight(networkStatus) {
  return networkStatus < 7;
}

var Observable = function (_super) {
  (0, _tslib.__extends)(Observable, _super);

  function Observable() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Observable.prototype[_symbolObservable.default] = function () {
    return this;
  };

  Observable.prototype['@@observable'] = function () {
    return this;
  };

  return Observable;
}(_apolloLink.Observable);

function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

function isApolloError(err) {
  return err.hasOwnProperty('graphQLErrors');
}

var generateErrorMessage = function (err) {
  var message = '';

  if (isNonEmptyArray(err.graphQLErrors)) {
    err.graphQLErrors.forEach(function (graphQLError) {
      var errorMessage = graphQLError ? graphQLError.message : 'Error message not found.';
      message += "GraphQL error: " + errorMessage + "\n";
    });
  }

  if (err.networkError) {
    message += 'Network error: ' + err.networkError.message + '\n';
  }

  message = message.replace(/\n$/, '');
  return message;
};

var ApolloError = function (_super) {
  (0, _tslib.__extends)(ApolloError, _super);

  function ApolloError(_a) {
    var graphQLErrors = _a.graphQLErrors,
        networkError = _a.networkError,
        errorMessage = _a.errorMessage,
        extraInfo = _a.extraInfo;

    var _this = _super.call(this, errorMessage) || this;

    _this.graphQLErrors = graphQLErrors || [];
    _this.networkError = networkError || null;

    if (!errorMessage) {
      _this.message = generateErrorMessage(_this);
    } else {
      _this.message = errorMessage;
    }

    _this.extraInfo = extraInfo;
    _this.__proto__ = ApolloError.prototype;
    return _this;
  }

  return ApolloError;
}(Error);

exports.ApolloError = ApolloError;
var FetchType;
exports.FetchType = FetchType;

(function (FetchType) {
  FetchType[FetchType["normal"] = 1] = "normal";
  FetchType[FetchType["refetch"] = 2] = "refetch";
  FetchType[FetchType["poll"] = 3] = "poll";
})(FetchType || (exports.FetchType = FetchType = {}));

var hasError = function (storeValue, policy) {
  if (policy === void 0) {
    policy = 'none';
  }

  return storeValue && (storeValue.networkError || policy === 'none' && isNonEmptyArray(storeValue.graphQLErrors));
};

var ObservableQuery = function (_super) {
  (0, _tslib.__extends)(ObservableQuery, _super);

  function ObservableQuery(_a) {
    var queryManager = _a.queryManager,
        options = _a.options,
        _b = _a.shouldSubscribe,
        shouldSubscribe = _b === void 0 ? true : _b;

    var _this = _super.call(this, function (observer) {
      return _this.onSubscribe(observer);
    }) || this;

    _this.observers = new Set();
    _this.subscriptions = new Set();
    _this.isTornDown = false;
    _this.options = options;
    _this.variables = options.variables || {};
    _this.queryId = queryManager.generateQueryId();
    _this.shouldSubscribe = shouldSubscribe;
    var opDef = (0, _apolloUtilities.getOperationDefinition)(options.query);
    _this.queryName = opDef && opDef.name && opDef.name.value;
    _this.queryManager = queryManager;
    return _this;
  }

  ObservableQuery.prototype.result = function () {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var observer = {
        next: function (result) {
          resolve(result);

          _this.observers.delete(observer);

          if (!_this.observers.size) {
            _this.queryManager.removeQuery(_this.queryId);
          }

          setTimeout(function () {
            subscription.unsubscribe();
          }, 0);
        },
        error: reject
      };

      var subscription = _this.subscribe(observer);
    });
  };

  ObservableQuery.prototype.currentResult = function () {
    var result = this.getCurrentResult();

    if (result.data === undefined) {
      result.data = {};
    }

    return result;
  };

  ObservableQuery.prototype.getCurrentResult = function () {
    if (this.isTornDown) {
      var lastResult = this.lastResult;
      return {
        data: !this.lastError && lastResult && lastResult.data || void 0,
        error: this.lastError,
        loading: false,
        networkStatus: NetworkStatus.error
      };
    }

    var _a = this.queryManager.getCurrentQueryResult(this),
        data = _a.data,
        partial = _a.partial;

    var queryStoreValue = this.queryManager.queryStore.get(this.queryId);
    var result;
    var fetchPolicy = this.options.fetchPolicy;
    var isNetworkFetchPolicy = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';

    if (queryStoreValue) {
      var networkStatus = queryStoreValue.networkStatus;

      if (hasError(queryStoreValue, this.options.errorPolicy)) {
        return {
          data: void 0,
          loading: false,
          networkStatus: networkStatus,
          error: new ApolloError({
            graphQLErrors: queryStoreValue.graphQLErrors,
            networkError: queryStoreValue.networkError
          })
        };
      }

      if (queryStoreValue.variables) {
        this.options.variables = (0, _tslib.__assign)({}, this.options.variables, queryStoreValue.variables);
        this.variables = this.options.variables;
      }

      result = {
        data: data,
        loading: isNetworkRequestInFlight(networkStatus),
        networkStatus: networkStatus
      };

      if (queryStoreValue.graphQLErrors && this.options.errorPolicy === 'all') {
        result.errors = queryStoreValue.graphQLErrors;
      }
    } else {
      var loading = isNetworkFetchPolicy || partial && fetchPolicy !== 'cache-only';
      result = {
        data: data,
        loading: loading,
        networkStatus: loading ? NetworkStatus.loading : NetworkStatus.ready
      };
    }

    if (!partial) {
      this.updateLastResult((0, _tslib.__assign)({}, result, {
        stale: false
      }));
    }

    return (0, _tslib.__assign)({}, result, {
      partial: partial
    });
  };

  ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
    var snapshot = this.lastResultSnapshot;
    return !(snapshot && newResult && snapshot.networkStatus === newResult.networkStatus && snapshot.stale === newResult.stale && (0, _apolloUtilities.isEqual)(snapshot.data, newResult.data));
  };

  ObservableQuery.prototype.getLastResult = function () {
    return this.lastResult;
  };

  ObservableQuery.prototype.getLastError = function () {
    return this.lastError;
  };

  ObservableQuery.prototype.resetLastResults = function () {
    delete this.lastResult;
    delete this.lastResultSnapshot;
    delete this.lastError;
    this.isTornDown = false;
  };

  ObservableQuery.prototype.resetQueryStoreErrors = function () {
    var queryStore = this.queryManager.queryStore.get(this.queryId);

    if (queryStore) {
      queryStore.networkError = null;
      queryStore.graphQLErrors = [];
    }
  };

  ObservableQuery.prototype.refetch = function (variables) {
    var fetchPolicy = this.options.fetchPolicy;

    if (fetchPolicy === 'cache-only') {
      return Promise.reject("development" === "production" ? new _tsInvariant.InvariantError(3) : new _tsInvariant.InvariantError('cache-only fetchPolicy option should not be used together with query refetch.'));
    }

    if (fetchPolicy !== 'no-cache' && fetchPolicy !== 'cache-and-network') {
      fetchPolicy = 'network-only';
    }

    if (!(0, _apolloUtilities.isEqual)(this.variables, variables)) {
      this.variables = (0, _tslib.__assign)({}, this.variables, variables);
    }

    if (!(0, _apolloUtilities.isEqual)(this.options.variables, this.variables)) {
      this.options.variables = (0, _tslib.__assign)({}, this.options.variables, this.variables);
    }

    return this.queryManager.fetchQuery(this.queryId, (0, _tslib.__assign)({}, this.options, {
      fetchPolicy: fetchPolicy
    }), FetchType.refetch);
  };

  ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
    var _this = this;

    "development" === "production" ? (0, _tsInvariant.invariant)(fetchMoreOptions.updateQuery, 4) : (0, _tsInvariant.invariant)(fetchMoreOptions.updateQuery, 'updateQuery option is required. This function defines how to update the query data with the new results.');
    var combinedOptions = (0, _tslib.__assign)({}, fetchMoreOptions.query ? fetchMoreOptions : (0, _tslib.__assign)({}, this.options, fetchMoreOptions, {
      variables: (0, _tslib.__assign)({}, this.variables, fetchMoreOptions.variables)
    }), {
      fetchPolicy: 'network-only'
    });
    var qid = this.queryManager.generateQueryId();
    return this.queryManager.fetchQuery(qid, combinedOptions, FetchType.normal, this.queryId).then(function (fetchMoreResult) {
      _this.updateQuery(function (previousResult) {
        return fetchMoreOptions.updateQuery(previousResult, {
          fetchMoreResult: fetchMoreResult.data,
          variables: combinedOptions.variables
        });
      });

      _this.queryManager.stopQuery(qid);

      return fetchMoreResult;
    }, function (error) {
      _this.queryManager.stopQuery(qid);

      throw error;
    });
  };

  ObservableQuery.prototype.subscribeToMore = function (options) {
    var _this = this;

    var subscription = this.queryManager.startGraphQLSubscription({
      query: options.document,
      variables: options.variables
    }).subscribe({
      next: function (subscriptionData) {
        var updateQuery = options.updateQuery;

        if (updateQuery) {
          _this.updateQuery(function (previous, _a) {
            var variables = _a.variables;
            return updateQuery(previous, {
              subscriptionData: subscriptionData,
              variables: variables
            });
          });
        }
      },
      error: function (err) {
        if (options.onError) {
          options.onError(err);
          return;
        }

        "development" === "production" || _tsInvariant.invariant.error('Unhandled GraphQL subscription error', err);
      }
    });
    this.subscriptions.add(subscription);
    return function () {
      if (_this.subscriptions.delete(subscription)) {
        subscription.unsubscribe();
      }
    };
  };

  ObservableQuery.prototype.setOptions = function (opts) {
    var oldFetchPolicy = this.options.fetchPolicy;
    this.options = (0, _tslib.__assign)({}, this.options, opts);

    if (opts.pollInterval) {
      this.startPolling(opts.pollInterval);
    } else if (opts.pollInterval === 0) {
      this.stopPolling();
    }

    var fetchPolicy = opts.fetchPolicy;
    return this.setVariables(this.options.variables, oldFetchPolicy !== fetchPolicy && (oldFetchPolicy === 'cache-only' || oldFetchPolicy === 'standby' || fetchPolicy === 'network-only'), opts.fetchResults);
  };

  ObservableQuery.prototype.setVariables = function (variables, tryFetch, fetchResults) {
    if (tryFetch === void 0) {
      tryFetch = false;
    }

    if (fetchResults === void 0) {
      fetchResults = true;
    }

    this.isTornDown = false;
    variables = variables || this.variables;

    if (!tryFetch && (0, _apolloUtilities.isEqual)(variables, this.variables)) {
      return this.observers.size && fetchResults ? this.result() : Promise.resolve();
    }

    this.variables = this.options.variables = variables;

    if (!this.observers.size) {
      return Promise.resolve();
    }

    return this.queryManager.fetchQuery(this.queryId, this.options);
  };

  ObservableQuery.prototype.updateQuery = function (mapFn) {
    var queryManager = this.queryManager;

    var _a = queryManager.getQueryWithPreviousResult(this.queryId),
        previousResult = _a.previousResult,
        variables = _a.variables,
        document = _a.document;

    var newResult = (0, _apolloUtilities.tryFunctionOrLogError)(function () {
      return mapFn(previousResult, {
        variables: variables
      });
    });

    if (newResult) {
      queryManager.dataStore.markUpdateQueryResult(document, variables, newResult);
      queryManager.broadcastQueries();
    }
  };

  ObservableQuery.prototype.stopPolling = function () {
    this.queryManager.stopPollingQuery(this.queryId);
    this.options.pollInterval = undefined;
  };

  ObservableQuery.prototype.startPolling = function (pollInterval) {
    assertNotCacheFirstOrOnly(this);
    this.options.pollInterval = pollInterval;
    this.queryManager.startPollingQuery(this.options, this.queryId);
  };

  ObservableQuery.prototype.updateLastResult = function (newResult) {
    var previousResult = this.lastResult;
    this.lastResult = newResult;
    this.lastResultSnapshot = this.queryManager.assumeImmutableResults ? newResult : (0, _apolloUtilities.cloneDeep)(newResult);
    return previousResult;
  };

  ObservableQuery.prototype.onSubscribe = function (observer) {
    var _this = this;

    try {
      var subObserver = observer._subscription._observer;

      if (subObserver && !subObserver.error) {
        subObserver.error = defaultSubscriptionObserverErrorCallback;
      }
    } catch (_a) {}

    var first = !this.observers.size;
    this.observers.add(observer);
    if (observer.next && this.lastResult) observer.next(this.lastResult);
    if (observer.error && this.lastError) observer.error(this.lastError);

    if (first) {
      this.setUpQuery();
    }

    return function () {
      if (_this.observers.delete(observer) && !_this.observers.size) {
        _this.tearDownQuery();
      }
    };
  };

  ObservableQuery.prototype.setUpQuery = function () {
    var _this = this;

    var _a = this,
        queryManager = _a.queryManager,
        queryId = _a.queryId;

    if (this.shouldSubscribe) {
      queryManager.addObservableQuery(queryId, this);
    }

    if (this.options.pollInterval) {
      assertNotCacheFirstOrOnly(this);
      queryManager.startPollingQuery(this.options, queryId);
    }

    var onError = function (error) {
      _this.updateLastResult((0, _tslib.__assign)({}, _this.lastResult, {
        errors: error.graphQLErrors,
        networkStatus: NetworkStatus.error,
        loading: false
      }));

      iterateObserversSafely(_this.observers, 'error', _this.lastError = error);
    };

    queryManager.observeQuery(queryId, this.options, {
      next: function (result) {
        if (_this.lastError || _this.isDifferentFromLastResult(result)) {
          var previousResult_1 = _this.updateLastResult(result);

          var _a = _this.options,
              query_1 = _a.query,
              variables = _a.variables,
              fetchPolicy_1 = _a.fetchPolicy;

          if (queryManager.transform(query_1).hasClientExports) {
            queryManager.getLocalState().addExportedVariables(query_1, variables).then(function (variables) {
              var previousVariables = _this.variables;
              _this.variables = _this.options.variables = variables;

              if (!result.loading && previousResult_1 && fetchPolicy_1 !== 'cache-only' && queryManager.transform(query_1).serverQuery && !(0, _apolloUtilities.isEqual)(previousVariables, variables)) {
                _this.refetch();
              } else {
                iterateObserversSafely(_this.observers, 'next', result);
              }
            });
          } else {
            iterateObserversSafely(_this.observers, 'next', result);
          }
        }
      },
      error: onError
    }).catch(onError);
  };

  ObservableQuery.prototype.tearDownQuery = function () {
    var queryManager = this.queryManager;
    this.isTornDown = true;
    queryManager.stopPollingQuery(this.queryId);
    this.subscriptions.forEach(function (sub) {
      return sub.unsubscribe();
    });
    this.subscriptions.clear();
    queryManager.removeObservableQuery(this.queryId);
    queryManager.stopQuery(this.queryId);
    this.observers.clear();
  };

  return ObservableQuery;
}(Observable);

exports.ObservableQuery = ObservableQuery;

function defaultSubscriptionObserverErrorCallback(error) {
  "development" === "production" || _tsInvariant.invariant.error('Unhandled error', error.message, error.stack);
}

function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function (obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function (obs) {
    return obs[method](argument);
  });
}

function assertNotCacheFirstOrOnly(obsQuery) {
  var fetchPolicy = obsQuery.options.fetchPolicy;
  "development" === "production" ? (0, _tsInvariant.invariant)(fetchPolicy !== 'cache-first' && fetchPolicy !== 'cache-only', 5) : (0, _tsInvariant.invariant)(fetchPolicy !== 'cache-first' && fetchPolicy !== 'cache-only', 'Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
}

var MutationStore = function () {
  function MutationStore() {
    this.store = {};
  }

  MutationStore.prototype.getStore = function () {
    return this.store;
  };

  MutationStore.prototype.get = function (mutationId) {
    return this.store[mutationId];
  };

  MutationStore.prototype.initMutation = function (mutationId, mutation, variables) {
    this.store[mutationId] = {
      mutation: mutation,
      variables: variables || {},
      loading: true,
      error: null
    };
  };

  MutationStore.prototype.markMutationError = function (mutationId, error) {
    var mutation = this.store[mutationId];

    if (mutation) {
      mutation.loading = false;
      mutation.error = error;
    }
  };

  MutationStore.prototype.markMutationResult = function (mutationId) {
    var mutation = this.store[mutationId];

    if (mutation) {
      mutation.loading = false;
      mutation.error = null;
    }
  };

  MutationStore.prototype.reset = function () {
    this.store = {};
  };

  return MutationStore;
}();

var QueryStore = function () {
  function QueryStore() {
    this.store = {};
  }

  QueryStore.prototype.getStore = function () {
    return this.store;
  };

  QueryStore.prototype.get = function (queryId) {
    return this.store[queryId];
  };

  QueryStore.prototype.initQuery = function (query) {
    var previousQuery = this.store[query.queryId];
    "development" === "production" ? (0, _tsInvariant.invariant)(!previousQuery || previousQuery.document === query.document || (0, _apolloUtilities.isEqual)(previousQuery.document, query.document), 19) : (0, _tsInvariant.invariant)(!previousQuery || previousQuery.document === query.document || (0, _apolloUtilities.isEqual)(previousQuery.document, query.document), 'Internal Error: may not update existing query string in store');
    var isSetVariables = false;
    var previousVariables = null;

    if (query.storePreviousVariables && previousQuery && previousQuery.networkStatus !== NetworkStatus.loading) {
      if (!(0, _apolloUtilities.isEqual)(previousQuery.variables, query.variables)) {
        isSetVariables = true;
        previousVariables = previousQuery.variables;
      }
    }

    var networkStatus;

    if (isSetVariables) {
      networkStatus = NetworkStatus.setVariables;
    } else if (query.isPoll) {
      networkStatus = NetworkStatus.poll;
    } else if (query.isRefetch) {
      networkStatus = NetworkStatus.refetch;
    } else {
      networkStatus = NetworkStatus.loading;
    }

    var graphQLErrors = [];

    if (previousQuery && previousQuery.graphQLErrors) {
      graphQLErrors = previousQuery.graphQLErrors;
    }

    this.store[query.queryId] = {
      document: query.document,
      variables: query.variables,
      previousVariables: previousVariables,
      networkError: null,
      graphQLErrors: graphQLErrors,
      networkStatus: networkStatus,
      metadata: query.metadata
    };

    if (typeof query.fetchMoreForQueryId === 'string' && this.store[query.fetchMoreForQueryId]) {
      this.store[query.fetchMoreForQueryId].networkStatus = NetworkStatus.fetchMore;
    }
  };

  QueryStore.prototype.markQueryResult = function (queryId, result, fetchMoreForQueryId) {
    if (!this.store || !this.store[queryId]) return;
    this.store[queryId].networkError = null;
    this.store[queryId].graphQLErrors = isNonEmptyArray(result.errors) ? result.errors : [];
    this.store[queryId].previousVariables = null;
    this.store[queryId].networkStatus = NetworkStatus.ready;

    if (typeof fetchMoreForQueryId === 'string' && this.store[fetchMoreForQueryId]) {
      this.store[fetchMoreForQueryId].networkStatus = NetworkStatus.ready;
    }
  };

  QueryStore.prototype.markQueryError = function (queryId, error, fetchMoreForQueryId) {
    if (!this.store || !this.store[queryId]) return;
    this.store[queryId].networkError = error;
    this.store[queryId].networkStatus = NetworkStatus.error;

    if (typeof fetchMoreForQueryId === 'string') {
      this.markQueryResultClient(fetchMoreForQueryId, true);
    }
  };

  QueryStore.prototype.markQueryResultClient = function (queryId, complete) {
    var storeValue = this.store && this.store[queryId];

    if (storeValue) {
      storeValue.networkError = null;
      storeValue.previousVariables = null;

      if (complete) {
        storeValue.networkStatus = NetworkStatus.ready;
      }
    }
  };

  QueryStore.prototype.stopQuery = function (queryId) {
    delete this.store[queryId];
  };

  QueryStore.prototype.reset = function (observableQueryIds) {
    var _this = this;

    Object.keys(this.store).forEach(function (queryId) {
      if (observableQueryIds.indexOf(queryId) < 0) {
        _this.stopQuery(queryId);
      } else {
        _this.store[queryId].networkStatus = NetworkStatus.loading;
      }
    });
  };

  return QueryStore;
}();

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var LocalState = function () {
  function LocalState(_a) {
    var cache = _a.cache,
        client = _a.client,
        resolvers = _a.resolvers,
        fragmentMatcher = _a.fragmentMatcher;
    this.cache = cache;

    if (client) {
      this.client = client;
    }

    if (resolvers) {
      this.addResolvers(resolvers);
    }

    if (fragmentMatcher) {
      this.setFragmentMatcher(fragmentMatcher);
    }
  }

  LocalState.prototype.addResolvers = function (resolvers) {
    var _this = this;

    this.resolvers = this.resolvers || {};

    if (Array.isArray(resolvers)) {
      resolvers.forEach(function (resolverGroup) {
        _this.resolvers = (0, _apolloUtilities.mergeDeep)(_this.resolvers, resolverGroup);
      });
    } else {
      this.resolvers = (0, _apolloUtilities.mergeDeep)(this.resolvers, resolvers);
    }
  };

  LocalState.prototype.setResolvers = function (resolvers) {
    this.resolvers = {};
    this.addResolvers(resolvers);
  };

  LocalState.prototype.getResolvers = function () {
    return this.resolvers || {};
  };

  LocalState.prototype.runResolvers = function (_a) {
    var document = _a.document,
        remoteResult = _a.remoteResult,
        context = _a.context,
        variables = _a.variables,
        _b = _a.onlyRunForcedResolvers,
        onlyRunForcedResolvers = _b === void 0 ? false : _b;
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (_c) {
        if (document) {
          return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) {
            return (0, _tslib.__assign)({}, remoteResult, {
              data: localResult.result
            });
          })];
        }

        return [2, remoteResult];
      });
    });
  };

  LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
    this.fragmentMatcher = fragmentMatcher;
  };

  LocalState.prototype.getFragmentMatcher = function () {
    return this.fragmentMatcher;
  };

  LocalState.prototype.clientQuery = function (document) {
    if ((0, _apolloUtilities.hasDirectives)(['client'], document)) {
      if (this.resolvers) {
        return document;
      }

      "development" === "production" || _tsInvariant.invariant.warn('Found @client directives in a query but no ApolloClient resolvers ' + 'were specified. This means ApolloClient local resolver handling ' + 'has been disabled, and @client directives will be passed through ' + 'to your link chain.');
    }

    return null;
  };

  LocalState.prototype.serverQuery = function (document) {
    return this.resolvers ? (0, _apolloUtilities.removeClientSetsFromDocument)(document) : document;
  };

  LocalState.prototype.prepareContext = function (context) {
    if (context === void 0) {
      context = {};
    }

    var cache = this.cache;
    var newContext = (0, _tslib.__assign)({}, context, {
      cache: cache,
      getCacheKey: function (obj) {
        if (cache.config) {
          return cache.config.dataIdFromObject(obj);
        } else {
          "development" === "production" ? (0, _tsInvariant.invariant)(false, 6) : (0, _tsInvariant.invariant)(false, 'To use context.getCacheKey, you need to use a cache that has ' + 'a configurable dataIdFromObject, like apollo-cache-inmemory.');
        }
      }
    });
    return newContext;
  };

  LocalState.prototype.addExportedVariables = function (document, variables, context) {
    if (variables === void 0) {
      variables = {};
    }

    if (context === void 0) {
      context = {};
    }

    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (_a) {
        if (document) {
          return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) {
            return (0, _tslib.__assign)({}, variables, data.exportedVariables);
          })];
        }

        return [2, (0, _tslib.__assign)({}, variables)];
      });
    });
  };

  LocalState.prototype.shouldForceResolvers = function (document) {
    var forceResolvers = false;
    (0, _visitor.visit)(document, {
      Directive: {
        enter: function (node) {
          if (node.name.value === 'client' && node.arguments) {
            forceResolvers = node.arguments.some(function (arg) {
              return arg.name.value === 'always' && arg.value.kind === 'BooleanValue' && arg.value.value === true;
            });

            if (forceResolvers) {
              return _visitor.BREAK;
            }
          }
        }
      }
    });
    return forceResolvers;
  };

  LocalState.prototype.buildRootValueFromCache = function (document, variables) {
    return this.cache.diff({
      query: (0, _apolloUtilities.buildQueryFromSelectionSet)(document),
      variables: variables,
      returnPartialData: true,
      optimistic: false
    }).result;
  };

  LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
    if (context === void 0) {
      context = {};
    }

    if (variables === void 0) {
      variables = {};
    }

    if (fragmentMatcher === void 0) {
      fragmentMatcher = function () {
        return true;
      };
    }

    if (onlyRunForcedResolvers === void 0) {
      onlyRunForcedResolvers = false;
    }

    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;

      return (0, _tslib.__generator)(this, function (_b) {
        mainDefinition = (0, _apolloUtilities.getMainDefinition)(document);
        fragments = (0, _apolloUtilities.getFragmentDefinitions)(document);
        fragmentMap = (0, _apolloUtilities.createFragmentMap)(fragments);
        definitionOperation = mainDefinition.operation;
        defaultOperationType = definitionOperation ? capitalizeFirstLetter(definitionOperation) : 'Query';
        _a = this, cache = _a.cache, client = _a.client;
        execContext = {
          fragmentMap: fragmentMap,
          context: (0, _tslib.__assign)({}, context, {
            cache: cache,
            client: client
          }),
          variables: variables,
          fragmentMatcher: fragmentMatcher,
          defaultOperationType: defaultOperationType,
          exportedVariables: {},
          onlyRunForcedResolvers: onlyRunForcedResolvers
        };
        return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) {
          return {
            result: result,
            exportedVariables: execContext.exportedVariables
          };
        })];
      });
    });
  };

  LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var fragmentMap, context, variables, resultsToMerge, execute;

      var _this = this;

      return (0, _tslib.__generator)(this, function (_a) {
        fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
        resultsToMerge = [rootValue];

        execute = function (selection) {
          return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
            var fragment, typeCondition;
            return (0, _tslib.__generator)(this, function (_a) {
              if (!(0, _apolloUtilities.shouldInclude)(selection, variables)) {
                return [2];
              }

              if ((0, _apolloUtilities.isField)(selection)) {
                return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
                  var _a;

                  if (typeof fieldResult !== 'undefined') {
                    resultsToMerge.push((_a = {}, _a[(0, _apolloUtilities.resultKeyNameFromField)(selection)] = fieldResult, _a));
                  }
                })];
              }

              if ((0, _apolloUtilities.isInlineFragment)(selection)) {
                fragment = selection;
              } else {
                fragment = fragmentMap[selection.name.value];
                "development" === "production" ? (0, _tsInvariant.invariant)(fragment, 7) : (0, _tsInvariant.invariant)(fragment, "No fragment named " + selection.name.value);
              }

              if (fragment && fragment.typeCondition) {
                typeCondition = fragment.typeCondition.name.value;

                if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                  return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
                    resultsToMerge.push(fragmentResult);
                  })];
                }
              }

              return [2];
            });
          });
        };

        return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
          return (0, _apolloUtilities.mergeDeepArray)(resultsToMerge);
        })];
      });
    });
  };

  LocalState.prototype.resolveField = function (field, rootValue, execContext) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;

      var _this = this;

      return (0, _tslib.__generator)(this, function (_a) {
        variables = execContext.variables;
        fieldName = field.name.value;
        aliasedFieldName = (0, _apolloUtilities.resultKeyNameFromField)(field);
        aliasUsed = fieldName !== aliasedFieldName;
        defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
        resultPromise = Promise.resolve(defaultResult);

        if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
          resolverType = rootValue.__typename || execContext.defaultOperationType;
          resolverMap = this.resolvers && this.resolvers[resolverType];

          if (resolverMap) {
            resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];

            if (resolve) {
              resultPromise = Promise.resolve(resolve(rootValue, (0, _apolloUtilities.argumentsObjectFromField)(field, variables), execContext.context, {
                field: field
              }));
            }
          }
        }

        return [2, resultPromise.then(function (result) {
          if (result === void 0) {
            result = defaultResult;
          }

          if (field.directives) {
            field.directives.forEach(function (directive) {
              if (directive.name.value === 'export' && directive.arguments) {
                directive.arguments.forEach(function (arg) {
                  if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                    execContext.exportedVariables[arg.value.value] = result;
                  }
                });
              }
            });
          }

          if (!field.selectionSet) {
            return result;
          }

          if (result == null) {
            return result;
          }

          if (Array.isArray(result)) {
            return _this.resolveSubSelectedArray(field, result, execContext);
          }

          if (field.selectionSet) {
            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
          }
        })];
      });
    });
  };

  LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
    var _this = this;

    return Promise.all(result.map(function (item) {
      if (item === null) {
        return null;
      }

      if (Array.isArray(item)) {
        return _this.resolveSubSelectedArray(field, item, execContext);
      }

      if (field.selectionSet) {
        return _this.resolveSelectionSet(field.selectionSet, item, execContext);
      }
    }));
  };

  return LocalState;
}();

function multiplex(inner) {
  var observers = new Set();
  var sub = null;
  return new Observable(function (observer) {
    observers.add(observer);
    sub = sub || inner.subscribe({
      next: function (value) {
        observers.forEach(function (obs) {
          return obs.next && obs.next(value);
        });
      },
      error: function (error) {
        observers.forEach(function (obs) {
          return obs.error && obs.error(error);
        });
      },
      complete: function () {
        observers.forEach(function (obs) {
          return obs.complete && obs.complete();
        });
      }
    });
    return function () {
      if (observers.delete(observer) && !observers.size && sub) {
        sub.unsubscribe();
        sub = null;
      }
    };
  });
}

function asyncMap(observable, mapFn) {
  return new Observable(function (observer) {
    var next = observer.next,
        error = observer.error,
        complete = observer.complete;
    var activeNextCount = 0;
    var completed = false;
    var handler = {
      next: function (value) {
        ++activeNextCount;
        new Promise(function (resolve) {
          resolve(mapFn(value));
        }).then(function (result) {
          --activeNextCount;
          next && next.call(observer, result);
          completed && handler.complete();
        }, function (e) {
          --activeNextCount;
          error && error.call(observer, e);
        });
      },
      error: function (e) {
        error && error.call(observer, e);
      },
      complete: function () {
        completed = true;

        if (!activeNextCount) {
          complete && complete.call(observer);
        }
      }
    };
    var sub = observable.subscribe(handler);
    return function () {
      return sub.unsubscribe();
    };
  });
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var QueryManager = function () {
  function QueryManager(_a) {
    var link = _a.link,
        _b = _a.queryDeduplication,
        queryDeduplication = _b === void 0 ? false : _b,
        store = _a.store,
        _c = _a.onBroadcast,
        onBroadcast = _c === void 0 ? function () {
      return undefined;
    } : _c,
        _d = _a.ssrMode,
        ssrMode = _d === void 0 ? false : _d,
        _e = _a.clientAwareness,
        clientAwareness = _e === void 0 ? {} : _e,
        localState = _a.localState,
        assumeImmutableResults = _a.assumeImmutableResults;
    this.mutationStore = new MutationStore();
    this.queryStore = new QueryStore();
    this.clientAwareness = {};
    this.idCounter = 1;
    this.queries = new Map();
    this.fetchQueryRejectFns = new Map();
    this.transformCache = new (_apolloUtilities.canUseWeakMap ? WeakMap : Map)();
    this.inFlightLinkObservables = new Map();
    this.pollingInfoByQueryId = new Map();
    this.link = link;
    this.queryDeduplication = queryDeduplication;
    this.dataStore = store;
    this.onBroadcast = onBroadcast;
    this.clientAwareness = clientAwareness;
    this.localState = localState || new LocalState({
      cache: store.getCache()
    });
    this.ssrMode = ssrMode;
    this.assumeImmutableResults = !!assumeImmutableResults;
  }

  QueryManager.prototype.stop = function () {
    var _this = this;

    this.queries.forEach(function (_info, queryId) {
      _this.stopQueryNoBroadcast(queryId);
    });
    this.fetchQueryRejectFns.forEach(function (reject) {
      reject("development" === "production" ? new _tsInvariant.InvariantError(8) : new _tsInvariant.InvariantError('QueryManager stopped while query was in flight'));
    });
  };

  QueryManager.prototype.mutate = function (_a) {
    var mutation = _a.mutation,
        variables = _a.variables,
        optimisticResponse = _a.optimisticResponse,
        updateQueriesByName = _a.updateQueries,
        _b = _a.refetchQueries,
        refetchQueries = _b === void 0 ? [] : _b,
        _c = _a.awaitRefetchQueries,
        awaitRefetchQueries = _c === void 0 ? false : _c,
        updateWithProxyFn = _a.update,
        _d = _a.errorPolicy,
        errorPolicy = _d === void 0 ? 'none' : _d,
        fetchPolicy = _a.fetchPolicy,
        _e = _a.context,
        context = _e === void 0 ? {} : _e;
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var mutationId, generateUpdateQueriesInfo, self;

      var _this = this;

      return (0, _tslib.__generator)(this, function (_f) {
        switch (_f.label) {
          case 0:
            "development" === "production" ? (0, _tsInvariant.invariant)(mutation, 9) : (0, _tsInvariant.invariant)(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.');
            "development" === "production" ? (0, _tsInvariant.invariant)(!fetchPolicy || fetchPolicy === 'no-cache', 10) : (0, _tsInvariant.invariant)(!fetchPolicy || fetchPolicy === 'no-cache', "fetchPolicy for mutations currently only supports the 'no-cache' policy");
            mutationId = this.generateQueryId();
            mutation = this.transform(mutation).document;
            this.setQuery(mutationId, function () {
              return {
                document: mutation
              };
            });
            variables = this.getVariables(mutation, variables);
            if (!this.transform(mutation).hasClientExports) return [3, 2];
            return [4, this.localState.addExportedVariables(mutation, variables, context)];

          case 1:
            variables = _f.sent();
            _f.label = 2;

          case 2:
            generateUpdateQueriesInfo = function () {
              var ret = {};

              if (updateQueriesByName) {
                _this.queries.forEach(function (_a, queryId) {
                  var observableQuery = _a.observableQuery;

                  if (observableQuery) {
                    var queryName = observableQuery.queryName;

                    if (queryName && hasOwnProperty.call(updateQueriesByName, queryName)) {
                      ret[queryId] = {
                        updater: updateQueriesByName[queryName],
                        query: _this.queryStore.get(queryId)
                      };
                    }
                  }
                });
              }

              return ret;
            };

            this.mutationStore.initMutation(mutationId, mutation, variables);
            this.dataStore.markMutationInit({
              mutationId: mutationId,
              document: mutation,
              variables: variables,
              updateQueries: generateUpdateQueriesInfo(),
              update: updateWithProxyFn,
              optimisticResponse: optimisticResponse
            });
            this.broadcastQueries();
            self = this;
            return [2, new Promise(function (resolve, reject) {
              var storeResult;
              var error;
              self.getObservableFromLink(mutation, (0, _tslib.__assign)({}, context, {
                optimisticResponse: optimisticResponse
              }), variables, false).subscribe({
                next: function (result) {
                  if ((0, _apolloUtilities.graphQLResultHasError)(result) && errorPolicy === 'none') {
                    error = new ApolloError({
                      graphQLErrors: result.errors
                    });
                    return;
                  }

                  self.mutationStore.markMutationResult(mutationId);

                  if (fetchPolicy !== 'no-cache') {
                    self.dataStore.markMutationResult({
                      mutationId: mutationId,
                      result: result,
                      document: mutation,
                      variables: variables,
                      updateQueries: generateUpdateQueriesInfo(),
                      update: updateWithProxyFn
                    });
                  }

                  storeResult = result;
                },
                error: function (err) {
                  self.mutationStore.markMutationError(mutationId, err);
                  self.dataStore.markMutationComplete({
                    mutationId: mutationId,
                    optimisticResponse: optimisticResponse
                  });
                  self.broadcastQueries();
                  self.setQuery(mutationId, function () {
                    return {
                      document: null
                    };
                  });
                  reject(new ApolloError({
                    networkError: err
                  }));
                },
                complete: function () {
                  if (error) {
                    self.mutationStore.markMutationError(mutationId, error);
                  }

                  self.dataStore.markMutationComplete({
                    mutationId: mutationId,
                    optimisticResponse: optimisticResponse
                  });
                  self.broadcastQueries();

                  if (error) {
                    reject(error);
                    return;
                  }

                  if (typeof refetchQueries === 'function') {
                    refetchQueries = refetchQueries(storeResult);
                  }

                  var refetchQueryPromises = [];

                  if (isNonEmptyArray(refetchQueries)) {
                    refetchQueries.forEach(function (refetchQuery) {
                      if (typeof refetchQuery === 'string') {
                        self.queries.forEach(function (_a) {
                          var observableQuery = _a.observableQuery;

                          if (observableQuery && observableQuery.queryName === refetchQuery) {
                            refetchQueryPromises.push(observableQuery.refetch());
                          }
                        });
                      } else {
                        var queryOptions = {
                          query: refetchQuery.query,
                          variables: refetchQuery.variables,
                          fetchPolicy: 'network-only'
                        };

                        if (refetchQuery.context) {
                          queryOptions.context = refetchQuery.context;
                        }

                        refetchQueryPromises.push(self.query(queryOptions));
                      }
                    });
                  }

                  Promise.all(awaitRefetchQueries ? refetchQueryPromises : []).then(function () {
                    self.setQuery(mutationId, function () {
                      return {
                        document: null
                      };
                    });

                    if (errorPolicy === 'ignore' && storeResult && (0, _apolloUtilities.graphQLResultHasError)(storeResult)) {
                      delete storeResult.errors;
                    }

                    resolve(storeResult);
                  });
                }
              });
            })];
        }
      });
    });
  };

  QueryManager.prototype.fetchQuery = function (queryId, options, fetchType, fetchMoreForQueryId) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var _a, metadata, _b, fetchPolicy, _c, context, query, variables, storeResult, isNetworkOnly, needToFetch, _d, complete, result, shouldFetch, requestId, cancel, networkResult;

      var _this = this;

      return (0, _tslib.__generator)(this, function (_e) {
        switch (_e.label) {
          case 0:
            _a = options.metadata, metadata = _a === void 0 ? null : _a, _b = options.fetchPolicy, fetchPolicy = _b === void 0 ? 'cache-first' : _b, _c = options.context, context = _c === void 0 ? {} : _c;
            query = this.transform(options.query).document;
            variables = this.getVariables(query, options.variables);
            if (!this.transform(query).hasClientExports) return [3, 2];
            return [4, this.localState.addExportedVariables(query, variables, context)];

          case 1:
            variables = _e.sent();
            _e.label = 2;

          case 2:
            options = (0, _tslib.__assign)({}, options, {
              variables: variables
            });
            isNetworkOnly = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';
            needToFetch = isNetworkOnly;

            if (!isNetworkOnly) {
              _d = this.dataStore.getCache().diff({
                query: query,
                variables: variables,
                returnPartialData: true,
                optimistic: false
              }), complete = _d.complete, result = _d.result;
              needToFetch = !complete || fetchPolicy === 'cache-and-network';
              storeResult = result;
            }

            shouldFetch = needToFetch && fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby';
            if ((0, _apolloUtilities.hasDirectives)(['live'], query)) shouldFetch = true;
            requestId = this.idCounter++;
            cancel = fetchPolicy !== 'no-cache' ? this.updateQueryWatch(queryId, query, options) : undefined;
            this.setQuery(queryId, function () {
              return {
                document: query,
                lastRequestId: requestId,
                invalidated: true,
                cancel: cancel
              };
            });
            this.invalidate(fetchMoreForQueryId);
            this.queryStore.initQuery({
              queryId: queryId,
              document: query,
              storePreviousVariables: shouldFetch,
              variables: variables,
              isPoll: fetchType === FetchType.poll,
              isRefetch: fetchType === FetchType.refetch,
              metadata: metadata,
              fetchMoreForQueryId: fetchMoreForQueryId
            });
            this.broadcastQueries();

            if (shouldFetch) {
              networkResult = this.fetchRequest({
                requestId: requestId,
                queryId: queryId,
                document: query,
                options: options,
                fetchMoreForQueryId: fetchMoreForQueryId
              }).catch(function (error) {
                if (isApolloError(error)) {
                  throw error;
                } else {
                  if (requestId >= _this.getQuery(queryId).lastRequestId) {
                    _this.queryStore.markQueryError(queryId, error, fetchMoreForQueryId);

                    _this.invalidate(queryId);

                    _this.invalidate(fetchMoreForQueryId);

                    _this.broadcastQueries();
                  }

                  throw new ApolloError({
                    networkError: error
                  });
                }
              });

              if (fetchPolicy !== 'cache-and-network') {
                return [2, networkResult];
              }

              networkResult.catch(function () {});
            }

            this.queryStore.markQueryResultClient(queryId, !shouldFetch);
            this.invalidate(queryId);
            this.invalidate(fetchMoreForQueryId);

            if (this.transform(query).hasForcedResolvers) {
              return [2, this.localState.runResolvers({
                document: query,
                remoteResult: {
                  data: storeResult
                },
                context: context,
                variables: variables,
                onlyRunForcedResolvers: true
              }).then(function (result) {
                _this.markQueryResult(queryId, result, options, fetchMoreForQueryId);

                _this.broadcastQueries();

                return result;
              })];
            }

            this.broadcastQueries();
            return [2, {
              data: storeResult
            }];
        }
      });
    });
  };

  QueryManager.prototype.markQueryResult = function (queryId, result, _a, fetchMoreForQueryId) {
    var fetchPolicy = _a.fetchPolicy,
        variables = _a.variables,
        errorPolicy = _a.errorPolicy;

    if (fetchPolicy === 'no-cache') {
      this.setQuery(queryId, function () {
        return {
          newData: {
            result: result.data,
            complete: true
          }
        };
      });
    } else {
      this.dataStore.markQueryResult(result, this.getQuery(queryId).document, variables, fetchMoreForQueryId, errorPolicy === 'ignore' || errorPolicy === 'all');
    }
  };

  QueryManager.prototype.queryListenerForObserver = function (queryId, options, observer) {
    var _this = this;

    function invoke(method, argument) {
      if (observer[method]) {
        try {
          observer[method](argument);
        } catch (e) {
          "development" === "production" || _tsInvariant.invariant.error(e);
        }
      } else if (method === 'error') {
        "development" === "production" || _tsInvariant.invariant.error(argument);
      }
    }

    return function (queryStoreValue, newData) {
      _this.invalidate(queryId, false);

      if (!queryStoreValue) return;

      var _a = _this.getQuery(queryId),
          observableQuery = _a.observableQuery,
          document = _a.document;

      var fetchPolicy = observableQuery ? observableQuery.options.fetchPolicy : options.fetchPolicy;
      if (fetchPolicy === 'standby') return;
      var loading = isNetworkRequestInFlight(queryStoreValue.networkStatus);
      var lastResult = observableQuery && observableQuery.getLastResult();
      var networkStatusChanged = !!(lastResult && lastResult.networkStatus !== queryStoreValue.networkStatus);
      var shouldNotifyIfLoading = options.returnPartialData || !newData && queryStoreValue.previousVariables || networkStatusChanged && options.notifyOnNetworkStatusChange || fetchPolicy === 'cache-only' || fetchPolicy === 'cache-and-network';

      if (loading && !shouldNotifyIfLoading) {
        return;
      }

      var hasGraphQLErrors = isNonEmptyArray(queryStoreValue.graphQLErrors);
      var errorPolicy = observableQuery && observableQuery.options.errorPolicy || options.errorPolicy || 'none';

      if (errorPolicy === 'none' && hasGraphQLErrors || queryStoreValue.networkError) {
        return invoke('error', new ApolloError({
          graphQLErrors: queryStoreValue.graphQLErrors,
          networkError: queryStoreValue.networkError
        }));
      }

      try {
        var data = void 0;
        var isMissing = void 0;

        if (newData) {
          if (fetchPolicy !== 'no-cache' && fetchPolicy !== 'network-only') {
            _this.setQuery(queryId, function () {
              return {
                newData: null
              };
            });
          }

          data = newData.result;
          isMissing = !newData.complete;
        } else {
          var lastError = observableQuery && observableQuery.getLastError();
          var errorStatusChanged = errorPolicy !== 'none' && (lastError && lastError.graphQLErrors) !== queryStoreValue.graphQLErrors;

          if (lastResult && lastResult.data && !errorStatusChanged) {
            data = lastResult.data;
            isMissing = false;
          } else {
            var diffResult = _this.dataStore.getCache().diff({
              query: document,
              variables: queryStoreValue.previousVariables || queryStoreValue.variables,
              returnPartialData: true,
              optimistic: true
            });

            data = diffResult.result;
            isMissing = !diffResult.complete;
          }
        }

        var stale = isMissing && !(options.returnPartialData || fetchPolicy === 'cache-only');
        var resultFromStore = {
          data: stale ? lastResult && lastResult.data : data,
          loading: loading,
          networkStatus: queryStoreValue.networkStatus,
          stale: stale
        };

        if (errorPolicy === 'all' && hasGraphQLErrors) {
          resultFromStore.errors = queryStoreValue.graphQLErrors;
        }

        invoke('next', resultFromStore);
      } catch (networkError) {
        invoke('error', new ApolloError({
          networkError: networkError
        }));
      }
    };
  };

  QueryManager.prototype.transform = function (document) {
    var transformCache = this.transformCache;

    if (!transformCache.has(document)) {
      var cache = this.dataStore.getCache();
      var transformed = cache.transformDocument(document);
      var forLink = (0, _apolloUtilities.removeConnectionDirectiveFromDocument)(cache.transformForLink(transformed));
      var clientQuery = this.localState.clientQuery(transformed);
      var serverQuery = this.localState.serverQuery(forLink);
      var cacheEntry_1 = {
        document: transformed,
        hasClientExports: (0, _apolloUtilities.hasClientExports)(transformed),
        hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
        clientQuery: clientQuery,
        serverQuery: serverQuery,
        defaultVars: (0, _apolloUtilities.getDefaultValues)((0, _apolloUtilities.getOperationDefinition)(transformed))
      };

      var add = function (doc) {
        if (doc && !transformCache.has(doc)) {
          transformCache.set(doc, cacheEntry_1);
        }
      };

      add(document);
      add(transformed);
      add(clientQuery);
      add(serverQuery);
    }

    return transformCache.get(document);
  };

  QueryManager.prototype.getVariables = function (document, variables) {
    return (0, _tslib.__assign)({}, this.transform(document).defaultVars, variables);
  };

  QueryManager.prototype.watchQuery = function (options, shouldSubscribe) {
    if (shouldSubscribe === void 0) {
      shouldSubscribe = true;
    }

    "development" === "production" ? (0, _tsInvariant.invariant)(options.fetchPolicy !== 'standby', 11) : (0, _tsInvariant.invariant)(options.fetchPolicy !== 'standby', 'client.watchQuery cannot be called with fetchPolicy set to "standby"');
    options.variables = this.getVariables(options.query, options.variables);

    if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
      options.notifyOnNetworkStatusChange = false;
    }

    var transformedOptions = (0, _tslib.__assign)({}, options);
    return new ObservableQuery({
      queryManager: this,
      options: transformedOptions,
      shouldSubscribe: shouldSubscribe
    });
  };

  QueryManager.prototype.query = function (options) {
    var _this = this;

    "development" === "production" ? (0, _tsInvariant.invariant)(options.query, 12) : (0, _tsInvariant.invariant)(options.query, 'query option is required. You must specify your GraphQL document ' + 'in the query option.');
    "development" === "production" ? (0, _tsInvariant.invariant)(options.query.kind === 'Document', 13) : (0, _tsInvariant.invariant)(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.');
    "development" === "production" ? (0, _tsInvariant.invariant)(!options.returnPartialData, 14) : (0, _tsInvariant.invariant)(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.');
    "development" === "production" ? (0, _tsInvariant.invariant)(!options.pollInterval, 15) : (0, _tsInvariant.invariant)(!options.pollInterval, 'pollInterval option only supported on watchQuery.');
    return new Promise(function (resolve, reject) {
      var watchedQuery = _this.watchQuery(options, false);

      _this.fetchQueryRejectFns.set("query:" + watchedQuery.queryId, reject);

      watchedQuery.result().then(resolve, reject).then(function () {
        return _this.fetchQueryRejectFns.delete("query:" + watchedQuery.queryId);
      });
    });
  };

  QueryManager.prototype.generateQueryId = function () {
    return String(this.idCounter++);
  };

  QueryManager.prototype.stopQueryInStore = function (queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.broadcastQueries();
  };

  QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
    this.stopPollingQuery(queryId);
    this.queryStore.stopQuery(queryId);
    this.invalidate(queryId);
  };

  QueryManager.prototype.addQueryListener = function (queryId, listener) {
    this.setQuery(queryId, function (_a) {
      var listeners = _a.listeners;
      listeners.add(listener);
      return {
        invalidated: false
      };
    });
  };

  QueryManager.prototype.updateQueryWatch = function (queryId, document, options) {
    var _this = this;

    var cancel = this.getQuery(queryId).cancel;
    if (cancel) cancel();

    var previousResult = function () {
      var previousResult = null;

      var observableQuery = _this.getQuery(queryId).observableQuery;

      if (observableQuery) {
        var lastResult = observableQuery.getLastResult();

        if (lastResult) {
          previousResult = lastResult.data;
        }
      }

      return previousResult;
    };

    return this.dataStore.getCache().watch({
      query: document,
      variables: options.variables,
      optimistic: true,
      previousResult: previousResult,
      callback: function (newData) {
        _this.setQuery(queryId, function () {
          return {
            invalidated: true,
            newData: newData
          };
        });
      }
    });
  };

  QueryManager.prototype.addObservableQuery = function (queryId, observableQuery) {
    this.setQuery(queryId, function () {
      return {
        observableQuery: observableQuery
      };
    });
  };

  QueryManager.prototype.removeObservableQuery = function (queryId) {
    var cancel = this.getQuery(queryId).cancel;
    this.setQuery(queryId, function () {
      return {
        observableQuery: null
      };
    });
    if (cancel) cancel();
  };

  QueryManager.prototype.clearStore = function () {
    this.fetchQueryRejectFns.forEach(function (reject) {
      reject("development" === "production" ? new _tsInvariant.InvariantError(16) : new _tsInvariant.InvariantError('Store reset while query was in flight (not completed in link chain)'));
    });
    var resetIds = [];
    this.queries.forEach(function (_a, queryId) {
      var observableQuery = _a.observableQuery;
      if (observableQuery) resetIds.push(queryId);
    });
    this.queryStore.reset(resetIds);
    this.mutationStore.reset();
    return this.dataStore.reset();
  };

  QueryManager.prototype.resetStore = function () {
    var _this = this;

    return this.clearStore().then(function () {
      return _this.reFetchObservableQueries();
    });
  };

  QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
    var _this = this;

    if (includeStandby === void 0) {
      includeStandby = false;
    }

    var observableQueryPromises = [];
    this.queries.forEach(function (_a, queryId) {
      var observableQuery = _a.observableQuery;

      if (observableQuery) {
        var fetchPolicy = observableQuery.options.fetchPolicy;
        observableQuery.resetLastResults();

        if (fetchPolicy !== 'cache-only' && (includeStandby || fetchPolicy !== 'standby')) {
          observableQueryPromises.push(observableQuery.refetch());
        }

        _this.setQuery(queryId, function () {
          return {
            newData: null
          };
        });

        _this.invalidate(queryId);
      }
    });
    this.broadcastQueries();
    return Promise.all(observableQueryPromises);
  };

  QueryManager.prototype.observeQuery = function (queryId, options, observer) {
    this.addQueryListener(queryId, this.queryListenerForObserver(queryId, options, observer));
    return this.fetchQuery(queryId, options);
  };

  QueryManager.prototype.startQuery = function (queryId, options, listener) {
    "development" === "production" || _tsInvariant.invariant.warn("The QueryManager.startQuery method has been deprecated");
    this.addQueryListener(queryId, listener);
    this.fetchQuery(queryId, options).catch(function () {
      return undefined;
    });
    return queryId;
  };

  QueryManager.prototype.startGraphQLSubscription = function (_a) {
    var _this = this;

    var query = _a.query,
        fetchPolicy = _a.fetchPolicy,
        variables = _a.variables;
    query = this.transform(query).document;
    variables = this.getVariables(query, variables);

    var makeObservable = function (variables) {
      return _this.getObservableFromLink(query, {}, variables, false).map(function (result) {
        if (!fetchPolicy || fetchPolicy !== 'no-cache') {
          _this.dataStore.markSubscriptionResult(result, query, variables);

          _this.broadcastQueries();
        }

        if ((0, _apolloUtilities.graphQLResultHasError)(result)) {
          throw new ApolloError({
            graphQLErrors: result.errors
          });
        }

        return result;
      });
    };

    if (this.transform(query).hasClientExports) {
      var observablePromise_1 = this.localState.addExportedVariables(query, variables).then(makeObservable);
      return new Observable(function (observer) {
        var sub = null;
        observablePromise_1.then(function (observable) {
          return sub = observable.subscribe(observer);
        }, observer.error);
        return function () {
          return sub && sub.unsubscribe();
        };
      });
    }

    return makeObservable(variables);
  };

  QueryManager.prototype.stopQuery = function (queryId) {
    this.stopQueryNoBroadcast(queryId);
    this.broadcastQueries();
  };

  QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.removeQuery(queryId);
  };

  QueryManager.prototype.removeQuery = function (queryId) {
    this.fetchQueryRejectFns.delete("query:" + queryId);
    this.fetchQueryRejectFns.delete("fetchRequest:" + queryId);
    this.getQuery(queryId).subscriptions.forEach(function (x) {
      return x.unsubscribe();
    });
    this.queries.delete(queryId);
  };

  QueryManager.prototype.getCurrentQueryResult = function (observableQuery, optimistic) {
    if (optimistic === void 0) {
      optimistic = true;
    }

    var _a = observableQuery.options,
        variables = _a.variables,
        query = _a.query,
        fetchPolicy = _a.fetchPolicy,
        returnPartialData = _a.returnPartialData;
    var lastResult = observableQuery.getLastResult();
    var newData = this.getQuery(observableQuery.queryId).newData;

    if (newData && newData.complete) {
      return {
        data: newData.result,
        partial: false
      };
    }

    if (fetchPolicy === 'no-cache' || fetchPolicy === 'network-only') {
      return {
        data: undefined,
        partial: false
      };
    }

    var _b = this.dataStore.getCache().diff({
      query: query,
      variables: variables,
      previousResult: lastResult ? lastResult.data : undefined,
      returnPartialData: true,
      optimistic: optimistic
    }),
        result = _b.result,
        complete = _b.complete;

    return {
      data: complete || returnPartialData ? result : void 0,
      partial: !complete
    };
  };

  QueryManager.prototype.getQueryWithPreviousResult = function (queryIdOrObservable) {
    var observableQuery;

    if (typeof queryIdOrObservable === 'string') {
      var foundObserveableQuery = this.getQuery(queryIdOrObservable).observableQuery;
      "development" === "production" ? (0, _tsInvariant.invariant)(foundObserveableQuery, 17) : (0, _tsInvariant.invariant)(foundObserveableQuery, "ObservableQuery with this id doesn't exist: " + queryIdOrObservable);
      observableQuery = foundObserveableQuery;
    } else {
      observableQuery = queryIdOrObservable;
    }

    var _a = observableQuery.options,
        variables = _a.variables,
        query = _a.query;
    return {
      previousResult: this.getCurrentQueryResult(observableQuery, false).data,
      variables: variables,
      document: query
    };
  };

  QueryManager.prototype.broadcastQueries = function () {
    var _this = this;

    this.onBroadcast();
    this.queries.forEach(function (info, id) {
      if (info.invalidated) {
        info.listeners.forEach(function (listener) {
          if (listener) {
            listener(_this.queryStore.get(id), info.newData);
          }
        });
      }
    });
  };

  QueryManager.prototype.getLocalState = function () {
    return this.localState;
  };

  QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
    var _this = this;

    if (deduplication === void 0) {
      deduplication = this.queryDeduplication;
    }

    var observable;
    var serverQuery = this.transform(query).serverQuery;

    if (serverQuery) {
      var _a = this,
          inFlightLinkObservables_1 = _a.inFlightLinkObservables,
          link = _a.link;

      var operation = {
        query: serverQuery,
        variables: variables,
        operationName: (0, _apolloUtilities.getOperationName)(serverQuery) || void 0,
        context: this.prepareContext((0, _tslib.__assign)({}, context, {
          forceFetch: !deduplication
        }))
      };
      context = operation.context;

      if (deduplication) {
        var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
        inFlightLinkObservables_1.set(serverQuery, byVariables_1);
        var varJson_1 = JSON.stringify(variables);
        observable = byVariables_1.get(varJson_1);

        if (!observable) {
          byVariables_1.set(varJson_1, observable = multiplex((0, _apolloLink.execute)(link, operation)));

          var cleanup = function () {
            byVariables_1.delete(varJson_1);
            if (!byVariables_1.size) inFlightLinkObservables_1.delete(serverQuery);
            cleanupSub_1.unsubscribe();
          };

          var cleanupSub_1 = observable.subscribe({
            next: cleanup,
            error: cleanup,
            complete: cleanup
          });
        }
      } else {
        observable = multiplex((0, _apolloLink.execute)(link, operation));
      }
    } else {
      observable = Observable.of({
        data: {}
      });
      context = this.prepareContext(context);
    }

    var clientQuery = this.transform(query).clientQuery;

    if (clientQuery) {
      observable = asyncMap(observable, function (result) {
        return _this.localState.runResolvers({
          document: clientQuery,
          remoteResult: result,
          context: context,
          variables: variables
        });
      });
    }

    return observable;
  };

  QueryManager.prototype.fetchRequest = function (_a) {
    var _this = this;

    var requestId = _a.requestId,
        queryId = _a.queryId,
        document = _a.document,
        options = _a.options,
        fetchMoreForQueryId = _a.fetchMoreForQueryId;
    var variables = options.variables,
        _b = options.errorPolicy,
        errorPolicy = _b === void 0 ? 'none' : _b,
        fetchPolicy = options.fetchPolicy;
    var resultFromStore;
    var errorsFromStore;
    return new Promise(function (resolve, reject) {
      var observable = _this.getObservableFromLink(document, options.context, variables);

      var fqrfId = "fetchRequest:" + queryId;

      _this.fetchQueryRejectFns.set(fqrfId, reject);

      var cleanup = function () {
        _this.fetchQueryRejectFns.delete(fqrfId);

        _this.setQuery(queryId, function (_a) {
          var subscriptions = _a.subscriptions;
          subscriptions.delete(subscription);
        });
      };

      var subscription = observable.map(function (result) {
        if (requestId >= _this.getQuery(queryId).lastRequestId) {
          _this.markQueryResult(queryId, result, options, fetchMoreForQueryId);

          _this.queryStore.markQueryResult(queryId, result, fetchMoreForQueryId);

          _this.invalidate(queryId);

          _this.invalidate(fetchMoreForQueryId);

          _this.broadcastQueries();
        }

        if (errorPolicy === 'none' && isNonEmptyArray(result.errors)) {
          return reject(new ApolloError({
            graphQLErrors: result.errors
          }));
        }

        if (errorPolicy === 'all') {
          errorsFromStore = result.errors;
        }

        if (fetchMoreForQueryId || fetchPolicy === 'no-cache') {
          resultFromStore = result.data;
        } else {
          var _a = _this.dataStore.getCache().diff({
            variables: variables,
            query: document,
            optimistic: false,
            returnPartialData: true
          }),
              result_1 = _a.result,
              complete = _a.complete;

          if (complete || options.returnPartialData) {
            resultFromStore = result_1;
          }
        }
      }).subscribe({
        error: function (error) {
          cleanup();
          reject(error);
        },
        complete: function () {
          cleanup();
          resolve({
            data: resultFromStore,
            errors: errorsFromStore,
            loading: false,
            networkStatus: NetworkStatus.ready,
            stale: false
          });
        }
      });

      _this.setQuery(queryId, function (_a) {
        var subscriptions = _a.subscriptions;
        subscriptions.add(subscription);
      });
    });
  };

  QueryManager.prototype.getQuery = function (queryId) {
    return this.queries.get(queryId) || {
      listeners: new Set(),
      invalidated: false,
      document: null,
      newData: null,
      lastRequestId: 1,
      observableQuery: null,
      subscriptions: new Set()
    };
  };

  QueryManager.prototype.setQuery = function (queryId, updater) {
    var prev = this.getQuery(queryId);
    var newInfo = (0, _tslib.__assign)({}, prev, updater(prev));
    this.queries.set(queryId, newInfo);
  };

  QueryManager.prototype.invalidate = function (queryId, invalidated) {
    if (invalidated === void 0) {
      invalidated = true;
    }

    if (queryId) {
      this.setQuery(queryId, function () {
        return {
          invalidated: invalidated
        };
      });
    }
  };

  QueryManager.prototype.prepareContext = function (context) {
    if (context === void 0) {
      context = {};
    }

    var newContext = this.localState.prepareContext(context);
    return (0, _tslib.__assign)({}, newContext, {
      clientAwareness: this.clientAwareness
    });
  };

  QueryManager.prototype.checkInFlight = function (queryId) {
    var query = this.queryStore.get(queryId);
    return query && query.networkStatus !== NetworkStatus.ready && query.networkStatus !== NetworkStatus.error;
  };

  QueryManager.prototype.startPollingQuery = function (options, queryId, listener) {
    var _this = this;

    var pollInterval = options.pollInterval;
    "development" === "production" ? (0, _tsInvariant.invariant)(pollInterval, 18) : (0, _tsInvariant.invariant)(pollInterval, 'Attempted to start a polling query without a polling interval.');

    if (!this.ssrMode) {
      var info = this.pollingInfoByQueryId.get(queryId);

      if (!info) {
        this.pollingInfoByQueryId.set(queryId, info = {});
      }

      info.interval = pollInterval;
      info.options = (0, _tslib.__assign)({}, options, {
        fetchPolicy: 'network-only'
      });

      var maybeFetch_1 = function () {
        var info = _this.pollingInfoByQueryId.get(queryId);

        if (info) {
          if (_this.checkInFlight(queryId)) {
            poll_1();
          } else {
            _this.fetchQuery(queryId, info.options, FetchType.poll).then(poll_1, poll_1);
          }
        }
      };

      var poll_1 = function () {
        var info = _this.pollingInfoByQueryId.get(queryId);

        if (info) {
          clearTimeout(info.timeout);
          info.timeout = setTimeout(maybeFetch_1, info.interval);
        }
      };

      if (listener) {
        this.addQueryListener(queryId, listener);
      }

      poll_1();
    }

    return queryId;
  };

  QueryManager.prototype.stopPollingQuery = function (queryId) {
    this.pollingInfoByQueryId.delete(queryId);
  };

  return QueryManager;
}();

var DataStore = function () {
  function DataStore(initialCache) {
    this.cache = initialCache;
  }

  DataStore.prototype.getCache = function () {
    return this.cache;
  };

  DataStore.prototype.markQueryResult = function (result, document, variables, fetchMoreForQueryId, ignoreErrors) {
    if (ignoreErrors === void 0) {
      ignoreErrors = false;
    }

    var writeWithErrors = !(0, _apolloUtilities.graphQLResultHasError)(result);

    if (ignoreErrors && (0, _apolloUtilities.graphQLResultHasError)(result) && result.data) {
      writeWithErrors = true;
    }

    if (!fetchMoreForQueryId && writeWithErrors) {
      this.cache.write({
        result: result.data,
        dataId: 'ROOT_QUERY',
        query: document,
        variables: variables
      });
    }
  };

  DataStore.prototype.markSubscriptionResult = function (result, document, variables) {
    if (!(0, _apolloUtilities.graphQLResultHasError)(result)) {
      this.cache.write({
        result: result.data,
        dataId: 'ROOT_SUBSCRIPTION',
        query: document,
        variables: variables
      });
    }
  };

  DataStore.prototype.markMutationInit = function (mutation) {
    var _this = this;

    if (mutation.optimisticResponse) {
      var optimistic_1;

      if (typeof mutation.optimisticResponse === 'function') {
        optimistic_1 = mutation.optimisticResponse(mutation.variables);
      } else {
        optimistic_1 = mutation.optimisticResponse;
      }

      this.cache.recordOptimisticTransaction(function (c) {
        var orig = _this.cache;
        _this.cache = c;

        try {
          _this.markMutationResult({
            mutationId: mutation.mutationId,
            result: {
              data: optimistic_1
            },
            document: mutation.document,
            variables: mutation.variables,
            updateQueries: mutation.updateQueries,
            update: mutation.update
          });
        } finally {
          _this.cache = orig;
        }
      }, mutation.mutationId);
    }
  };

  DataStore.prototype.markMutationResult = function (mutation) {
    var _this = this;

    if (!(0, _apolloUtilities.graphQLResultHasError)(mutation.result)) {
      var cacheWrites_1 = [{
        result: mutation.result.data,
        dataId: 'ROOT_MUTATION',
        query: mutation.document,
        variables: mutation.variables
      }];
      var updateQueries_1 = mutation.updateQueries;

      if (updateQueries_1) {
        Object.keys(updateQueries_1).forEach(function (id) {
          var _a = updateQueries_1[id],
              query = _a.query,
              updater = _a.updater;

          var _b = _this.cache.diff({
            query: query.document,
            variables: query.variables,
            returnPartialData: true,
            optimistic: false
          }),
              currentQueryResult = _b.result,
              complete = _b.complete;

          if (complete) {
            var nextQueryResult = (0, _apolloUtilities.tryFunctionOrLogError)(function () {
              return updater(currentQueryResult, {
                mutationResult: mutation.result,
                queryName: (0, _apolloUtilities.getOperationName)(query.document) || undefined,
                queryVariables: query.variables
              });
            });

            if (nextQueryResult) {
              cacheWrites_1.push({
                result: nextQueryResult,
                dataId: 'ROOT_QUERY',
                query: query.document,
                variables: query.variables
              });
            }
          }
        });
      }

      this.cache.performTransaction(function (c) {
        cacheWrites_1.forEach(function (write) {
          return c.write(write);
        });
        var update = mutation.update;

        if (update) {
          (0, _apolloUtilities.tryFunctionOrLogError)(function () {
            return update(c, mutation.result);
          });
        }
      });
    }
  };

  DataStore.prototype.markMutationComplete = function (_a) {
    var mutationId = _a.mutationId,
        optimisticResponse = _a.optimisticResponse;

    if (optimisticResponse) {
      this.cache.removeOptimistic(mutationId);
    }
  };

  DataStore.prototype.markUpdateQueryResult = function (document, variables, newResult) {
    this.cache.write({
      result: newResult,
      dataId: 'ROOT_QUERY',
      variables: variables,
      query: document
    });
  };

  DataStore.prototype.reset = function () {
    return this.cache.reset();
  };

  return DataStore;
}();

var version = "2.6.4";
var hasSuggestedDevtools = false;

var ApolloClient = function () {
  function ApolloClient(options) {
    var _this = this;

    this.defaultOptions = {};
    this.resetStoreCallbacks = [];
    this.clearStoreCallbacks = [];
    var cache = options.cache,
        _a = options.ssrMode,
        ssrMode = _a === void 0 ? false : _a,
        _b = options.ssrForceFetchDelay,
        ssrForceFetchDelay = _b === void 0 ? 0 : _b,
        connectToDevTools = options.connectToDevTools,
        _c = options.queryDeduplication,
        queryDeduplication = _c === void 0 ? true : _c,
        defaultOptions = options.defaultOptions,
        _d = options.assumeImmutableResults,
        assumeImmutableResults = _d === void 0 ? false : _d,
        resolvers = options.resolvers,
        typeDefs = options.typeDefs,
        fragmentMatcher = options.fragmentMatcher,
        clientAwarenessName = options.name,
        clientAwarenessVersion = options.version;
    var link = options.link;

    if (!link && resolvers) {
      link = _apolloLink.ApolloLink.empty();
    }

    if (!link || !cache) {
      throw "development" === "production" ? new _tsInvariant.InvariantError(1) : new _tsInvariant.InvariantError("In order to initialize Apollo Client, you must specify 'link' and 'cache' properties in the options object.\n" + "These options are part of the upgrade requirements when migrating from Apollo Client 1.x to Apollo Client 2.x.\n" + "For more information, please visit: https://www.apollographql.com/docs/tutorial/client.html#apollo-client-setup");
    }

    this.link = link;
    this.cache = cache;
    this.store = new DataStore(cache);
    this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
    this.queryDeduplication = queryDeduplication;
    this.defaultOptions = defaultOptions || {};
    this.typeDefs = typeDefs;

    if (ssrForceFetchDelay) {
      setTimeout(function () {
        return _this.disableNetworkFetches = false;
      }, ssrForceFetchDelay);
    }

    this.watchQuery = this.watchQuery.bind(this);
    this.query = this.query.bind(this);
    this.mutate = this.mutate.bind(this);
    this.resetStore = this.resetStore.bind(this);
    this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
    var defaultConnectToDevTools = "development" !== 'production' && typeof window !== 'undefined' && !window.__APOLLO_CLIENT__;

    if (typeof connectToDevTools === 'undefined' ? defaultConnectToDevTools : connectToDevTools && typeof window !== 'undefined') {
      window.__APOLLO_CLIENT__ = this;
    }

    if (!hasSuggestedDevtools && "development" !== 'production') {
      hasSuggestedDevtools = true;

      if (typeof window !== 'undefined' && window.document && window.top === window.self) {
        if (typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
          if (window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('Chrome') > -1) {
            console.debug('Download the Apollo DevTools ' + 'for a better development experience: ' + 'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm');
          }
        }
      }
    }

    this.version = version;
    this.localState = new LocalState({
      cache: cache,
      client: this,
      resolvers: resolvers,
      fragmentMatcher: fragmentMatcher
    });
    this.queryManager = new QueryManager({
      link: this.link,
      store: this.store,
      queryDeduplication: queryDeduplication,
      ssrMode: ssrMode,
      clientAwareness: {
        name: clientAwarenessName,
        version: clientAwarenessVersion
      },
      localState: this.localState,
      assumeImmutableResults: assumeImmutableResults,
      onBroadcast: function () {
        if (_this.devToolsHookCb) {
          _this.devToolsHookCb({
            action: {},
            state: {
              queries: _this.queryManager.queryStore.getStore(),
              mutations: _this.queryManager.mutationStore.getStore()
            },
            dataWithOptimisticResults: _this.cache.extract(true)
          });
        }
      }
    });
  }

  ApolloClient.prototype.stop = function () {
    this.queryManager.stop();
  };

  ApolloClient.prototype.watchQuery = function (options) {
    if (this.defaultOptions.watchQuery) {
      options = (0, _tslib.__assign)({}, this.defaultOptions.watchQuery, options);
    }

    if (this.disableNetworkFetches && (options.fetchPolicy === 'network-only' || options.fetchPolicy === 'cache-and-network')) {
      options = (0, _tslib.__assign)({}, options, {
        fetchPolicy: 'cache-first'
      });
    }

    return this.queryManager.watchQuery(options);
  };

  ApolloClient.prototype.query = function (options) {
    if (this.defaultOptions.query) {
      options = (0, _tslib.__assign)({}, this.defaultOptions.query, options);
    }

    "development" === "production" ? (0, _tsInvariant.invariant)(options.fetchPolicy !== 'cache-and-network', 2) : (0, _tsInvariant.invariant)(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' + 'client.query can only return a single result. Please use client.watchQuery ' + 'to receive multiple results from the cache and the network, or consider ' + 'using a different fetchPolicy, such as cache-first or network-only.');

    if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
      options = (0, _tslib.__assign)({}, options, {
        fetchPolicy: 'cache-first'
      });
    }

    return this.queryManager.query(options);
  };

  ApolloClient.prototype.mutate = function (options) {
    if (this.defaultOptions.mutate) {
      options = (0, _tslib.__assign)({}, this.defaultOptions.mutate, options);
    }

    return this.queryManager.mutate(options);
  };

  ApolloClient.prototype.subscribe = function (options) {
    return this.queryManager.startGraphQLSubscription(options);
  };

  ApolloClient.prototype.readQuery = function (options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }

    return this.cache.readQuery(options, optimistic);
  };

  ApolloClient.prototype.readFragment = function (options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }

    return this.cache.readFragment(options, optimistic);
  };

  ApolloClient.prototype.writeQuery = function (options) {
    var result = this.cache.writeQuery(options);
    this.queryManager.broadcastQueries();
    return result;
  };

  ApolloClient.prototype.writeFragment = function (options) {
    var result = this.cache.writeFragment(options);
    this.queryManager.broadcastQueries();
    return result;
  };

  ApolloClient.prototype.writeData = function (options) {
    var result = this.cache.writeData(options);
    this.queryManager.broadcastQueries();
    return result;
  };

  ApolloClient.prototype.__actionHookForDevTools = function (cb) {
    this.devToolsHookCb = cb;
  };

  ApolloClient.prototype.__requestRaw = function (payload) {
    return (0, _apolloLink.execute)(this.link, payload);
  };

  ApolloClient.prototype.initQueryManager = function () {
    "development" === "production" || _tsInvariant.invariant.warn('Calling the initQueryManager method is no longer necessary, ' + 'and it will be removed from ApolloClient in version 3.0.');
    return this.queryManager;
  };

  ApolloClient.prototype.resetStore = function () {
    var _this = this;

    return Promise.resolve().then(function () {
      return _this.queryManager.clearStore();
    }).then(function () {
      return Promise.all(_this.resetStoreCallbacks.map(function (fn) {
        return fn();
      }));
    }).then(function () {
      return _this.reFetchObservableQueries();
    });
  };

  ApolloClient.prototype.clearStore = function () {
    var _this = this;

    return Promise.resolve().then(function () {
      return _this.queryManager.clearStore();
    }).then(function () {
      return Promise.all(_this.clearStoreCallbacks.map(function (fn) {
        return fn();
      }));
    });
  };

  ApolloClient.prototype.onResetStore = function (cb) {
    var _this = this;

    this.resetStoreCallbacks.push(cb);
    return function () {
      _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) {
        return c !== cb;
      });
    };
  };

  ApolloClient.prototype.onClearStore = function (cb) {
    var _this = this;

    this.clearStoreCallbacks.push(cb);
    return function () {
      _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) {
        return c !== cb;
      });
    };
  };

  ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
    return this.queryManager.reFetchObservableQueries(includeStandby);
  };

  ApolloClient.prototype.extract = function (optimistic) {
    return this.cache.extract(optimistic);
  };

  ApolloClient.prototype.restore = function (serializedState) {
    return this.cache.restore(serializedState);
  };

  ApolloClient.prototype.addResolvers = function (resolvers) {
    this.localState.addResolvers(resolvers);
  };

  ApolloClient.prototype.setResolvers = function (resolvers) {
    this.localState.setResolvers(resolvers);
  };

  ApolloClient.prototype.getResolvers = function () {
    return this.localState.getResolvers();
  };

  ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
    this.localState.setFragmentMatcher(fragmentMatcher);
  };

  return ApolloClient;
}();

exports.ApolloClient = ApolloClient;
var _default = ApolloClient;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","apollo-utilities":"../node_modules/apollo-utilities/lib/bundle.esm.js","apollo-link":"../node_modules/apollo-link/lib/bundle.esm.js","symbol-observable":"../node_modules/symbol-observable/es/index.js","ts-invariant":"../node_modules/ts-invariant/lib/invariant.esm.js","graphql/language/visitor":"../node_modules/graphql/language/visitor.js"}],"../node_modules/apollo-cache/lib/bundle.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cache = exports.ApolloCache = void 0;

var _apolloUtilities = require("apollo-utilities");

function queryFromPojo(obj) {
  var op = {
    kind: 'OperationDefinition',
    operation: 'query',
    name: {
      kind: 'Name',
      value: 'GeneratedClientQuery'
    },
    selectionSet: selectionSetFromObj(obj)
  };
  var out = {
    kind: 'Document',
    definitions: [op]
  };
  return out;
}

function fragmentFromPojo(obj, typename) {
  var frag = {
    kind: 'FragmentDefinition',
    typeCondition: {
      kind: 'NamedType',
      name: {
        kind: 'Name',
        value: typename || '__FakeType'
      }
    },
    name: {
      kind: 'Name',
      value: 'GeneratedClientQuery'
    },
    selectionSet: selectionSetFromObj(obj)
  };
  var out = {
    kind: 'Document',
    definitions: [frag]
  };
  return out;
}

function selectionSetFromObj(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'string' || typeof obj === 'undefined' || obj === null) {
    return null;
  }

  if (Array.isArray(obj)) {
    return selectionSetFromObj(obj[0]);
  }

  var selections = [];
  Object.keys(obj).forEach(function (key) {
    var nestedSelSet = selectionSetFromObj(obj[key]);
    var field = {
      kind: 'Field',
      name: {
        kind: 'Name',
        value: key
      },
      selectionSet: nestedSelSet || undefined
    };
    selections.push(field);
  });
  var selectionSet = {
    kind: 'SelectionSet',
    selections: selections
  };
  return selectionSet;
}

var justTypenameQuery = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'query',
    name: null,
    variableDefinitions: null,
    directives: [],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field',
        alias: null,
        name: {
          kind: 'Name',
          value: '__typename'
        },
        arguments: [],
        directives: [],
        selectionSet: null
      }]
    }
  }]
};

var ApolloCache = function () {
  function ApolloCache() {}

  ApolloCache.prototype.transformDocument = function (document) {
    return document;
  };

  ApolloCache.prototype.transformForLink = function (document) {
    return document;
  };

  ApolloCache.prototype.readQuery = function (options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }

    return this.read({
      query: options.query,
      variables: options.variables,
      optimistic: optimistic
    });
  };

  ApolloCache.prototype.readFragment = function (options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }

    return this.read({
      query: (0, _apolloUtilities.getFragmentQueryDocument)(options.fragment, options.fragmentName),
      variables: options.variables,
      rootId: options.id,
      optimistic: optimistic
    });
  };

  ApolloCache.prototype.writeQuery = function (options) {
    this.write({
      dataId: 'ROOT_QUERY',
      result: options.data,
      query: options.query,
      variables: options.variables
    });
  };

  ApolloCache.prototype.writeFragment = function (options) {
    this.write({
      dataId: options.id,
      result: options.data,
      variables: options.variables,
      query: (0, _apolloUtilities.getFragmentQueryDocument)(options.fragment, options.fragmentName)
    });
  };

  ApolloCache.prototype.writeData = function (_a) {
    var id = _a.id,
        data = _a.data;

    if (typeof id !== 'undefined') {
      var typenameResult = null;

      try {
        typenameResult = this.read({
          rootId: id,
          optimistic: false,
          query: justTypenameQuery
        });
      } catch (e) {}

      var __typename = typenameResult && typenameResult.__typename || '__ClientData';

      var dataToWrite = Object.assign({
        __typename: __typename
      }, data);
      this.writeFragment({
        id: id,
        fragment: fragmentFromPojo(dataToWrite, __typename),
        data: dataToWrite
      });
    } else {
      this.writeQuery({
        query: queryFromPojo(data),
        data: data
      });
    }
  };

  return ApolloCache;
}();

exports.ApolloCache = ApolloCache;
var Cache;
exports.Cache = Cache;

(function (Cache) {})(Cache || (exports.Cache = Cache = {}));
},{"apollo-utilities":"../node_modules/apollo-utilities/lib/bundle.esm.js"}],"../node_modules/@wry/context/lib/context.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncFromGen = asyncFromGen;
exports.setTimeout = setTimeoutWithContext;
exports.wrapYieldingFiberMethods = wrapYieldingFiberMethods;
exports.noContext = exports.bind = exports.Slot = void 0;
// This currentContext variable will only be used if the makeSlotClass
// function is called, which happens only if this is the first copy of the
// @wry/context package to be imported.
var currentContext = null; // This unique internal object is used to denote the absence of a value
// for a given Slot, and is never exposed to outside code.

var MISSING_VALUE = {};
var idCounter = 1; // Although we can't do anything about the cost of duplicated code from
// accidentally bundling multiple copies of the @wry/context package, we can
// avoid creating the Slot class more than once using makeSlotClass.

var makeSlotClass = function () {
  return (
    /** @class */
    function () {
      function Slot() {
        // If you have a Slot object, you can find out its slot.id, but you cannot
        // guess the slot.id of a Slot you don't have access to, thanks to the
        // randomized suffix.
        this.id = ["slot", idCounter++, Date.now(), Math.random().toString(36).slice(2)].join(":");
      }

      Slot.prototype.hasValue = function () {
        for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
          // We use the Slot object iself as a key to its value, which means the
          // value cannot be obtained without a reference to the Slot object.
          if (this.id in context_1.slots) {
            var value = context_1.slots[this.id];
            if (value === MISSING_VALUE) break;

            if (context_1 !== currentContext) {
              // Cache the value in currentContext.slots so the next lookup will
              // be faster. This caching is safe because the tree of contexts and
              // the values of the slots are logically immutable.
              currentContext.slots[this.id] = value;
            }

            return true;
          }
        }

        if (currentContext) {
          // If a value was not found for this Slot, it's never going to be found
          // no matter how many times we look it up, so we might as well cache
          // the absence of the value, too.
          currentContext.slots[this.id] = MISSING_VALUE;
        }

        return false;
      };

      Slot.prototype.getValue = function () {
        if (this.hasValue()) {
          return currentContext.slots[this.id];
        }
      };

      Slot.prototype.withValue = function (value, callback, // Given the prevalence of arrow functions, specifying arguments is likely
      // to be much more common than specifying `this`, hence this ordering:
      args, thisArg) {
        var _a;

        var slots = (_a = {
          __proto__: null
        }, _a[this.id] = value, _a);
        var parent = currentContext;
        currentContext = {
          parent: parent,
          slots: slots
        };

        try {
          // Function.prototype.apply allows the arguments array argument to be
          // omitted or undefined, so args! is fine here.
          return callback.apply(thisArg, args);
        } finally {
          currentContext = parent;
        }
      }; // Capture the current context and wrap a callback function so that it
      // reestablishes the captured context when called.


      Slot.bind = function (callback) {
        var context = currentContext;
        return function () {
          var saved = currentContext;

          try {
            currentContext = context;
            return callback.apply(this, arguments);
          } finally {
            currentContext = saved;
          }
        };
      }; // Immediately run a callback function without any captured context.


      Slot.noContext = function (callback, // Given the prevalence of arrow functions, specifying arguments is likely
      // to be much more common than specifying `this`, hence this ordering:
      args, thisArg) {
        if (currentContext) {
          var saved = currentContext;

          try {
            currentContext = null; // Function.prototype.apply allows the arguments array argument to be
            // omitted or undefined, so args! is fine here.

            return callback.apply(thisArg, args);
          } finally {
            currentContext = saved;
          }
        } else {
          return callback.apply(thisArg, args);
        }
      };

      return Slot;
    }()
  );
}; // We store a single global implementation of the Slot class as a permanent
// non-enumerable symbol property of the Array constructor. This obfuscation
// does nothing to prevent access to the Slot class, but at least it ensures
// the implementation (i.e. currentContext) cannot be tampered with, and all
// copies of the @wry/context package (hopefully just one) will share the
// same Slot implementation. Since the first copy of the @wry/context package
// to be imported wins, this technique imposes a very high cost for any
// future breaking changes to the Slot class.


var globalKey = "@wry/context:Slot";
var host = Array;

var Slot = host[globalKey] || function () {
  var Slot = makeSlotClass();

  try {
    Object.defineProperty(host, globalKey, {
      value: host[globalKey] = Slot,
      enumerable: false,
      writable: false,
      configurable: false
    });
  } finally {
    return Slot;
  }
}();

exports.Slot = Slot;
var bind = Slot.bind,
    noContext = Slot.noContext;
exports.noContext = noContext;
exports.bind = bind;

function setTimeoutWithContext(callback, delay) {
  return setTimeout(bind(callback), delay);
} // Turn any generator function into an async function (using yield instead
// of await), with context automatically preserved across yields.


function asyncFromGen(genFn) {
  return function () {
    var gen = genFn.apply(this, arguments);
    var boundNext = bind(gen.next);
    var boundThrow = bind(gen.throw);
    return new Promise(function (resolve, reject) {
      function invoke(method, argument) {
        try {
          var result = method.call(gen, argument);
        } catch (error) {
          return reject(error);
        }

        var next = result.done ? resolve : invokeNext;

        if (isPromiseLike(result.value)) {
          result.value.then(next, result.done ? reject : invokeThrow);
        } else {
          next(result.value);
        }
      }

      var invokeNext = function (value) {
        return invoke(boundNext, value);
      };

      var invokeThrow = function (error) {
        return invoke(boundThrow, error);
      };

      invokeNext();
    });
  };
}

function isPromiseLike(value) {
  return value && typeof value.then === "function";
} // If you use the fibers npm package to implement coroutines in Node.js,
// you should call this function at least once to ensure context management
// remains coherent across any yields.


var wrappedFibers = [];

function wrapYieldingFiberMethods(Fiber) {
  // There can be only one implementation of Fiber per process, so this array
  // should never grow longer than one element.
  if (wrappedFibers.indexOf(Fiber) < 0) {
    var wrap = function (obj, method) {
      var fn = obj[method];

      obj[method] = function () {
        return noContext(fn, arguments, this);
      };
    }; // These methods can yield, according to
    // https://github.com/laverdet/node-fibers/blob/ddebed9b8ae3883e57f822e2108e6943e5c8d2a8/fibers.js#L97-L100


    wrap(Fiber, "yield");
    wrap(Fiber.prototype, "run");
    wrap(Fiber.prototype, "throwInto");
    wrappedFibers.push(Fiber);
  }

  return Fiber;
}
},{}],"../node_modules/optimism/lib/bundle.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultMakeCacheKey = defaultMakeCacheKey;
exports.wrap = wrap;
Object.defineProperty(exports, "asyncFromGen", {
  enumerable: true,
  get: function () {
    return _context.asyncFromGen;
  }
});
Object.defineProperty(exports, "bindContext", {
  enumerable: true,
  get: function () {
    return _context.bind;
  }
});
Object.defineProperty(exports, "noContext", {
  enumerable: true,
  get: function () {
    return _context.noContext;
  }
});
Object.defineProperty(exports, "setTimeout", {
  enumerable: true,
  get: function () {
    return _context.setTimeout;
  }
});
exports.KeyTrie = void 0;

var _context = require("@wry/context");

function defaultDispose() {}

var Cache =
/** @class */
function () {
  function Cache(max, dispose) {
    if (max === void 0) {
      max = Infinity;
    }

    if (dispose === void 0) {
      dispose = defaultDispose;
    }

    this.max = max;
    this.dispose = dispose;
    this.map = new Map();
    this.newest = null;
    this.oldest = null;
  }

  Cache.prototype.has = function (key) {
    return this.map.has(key);
  };

  Cache.prototype.get = function (key) {
    var entry = this.getEntry(key);
    return entry && entry.value;
  };

  Cache.prototype.getEntry = function (key) {
    var entry = this.map.get(key);

    if (entry && entry !== this.newest) {
      var older = entry.older,
          newer = entry.newer;

      if (newer) {
        newer.older = older;
      }

      if (older) {
        older.newer = newer;
      }

      entry.older = this.newest;
      entry.older.newer = entry;
      entry.newer = null;
      this.newest = entry;

      if (entry === this.oldest) {
        this.oldest = newer;
      }
    }

    return entry;
  };

  Cache.prototype.set = function (key, value) {
    var entry = this.getEntry(key);

    if (entry) {
      return entry.value = value;
    }

    entry = {
      key: key,
      value: value,
      newer: null,
      older: this.newest
    };

    if (this.newest) {
      this.newest.newer = entry;
    }

    this.newest = entry;
    this.oldest = this.oldest || entry;
    this.map.set(key, entry);
    return entry.value;
  };

  Cache.prototype.clean = function () {
    while (this.oldest && this.map.size > this.max) {
      this.delete(this.oldest.key);
    }
  };

  Cache.prototype.delete = function (key) {
    var entry = this.map.get(key);

    if (entry) {
      if (entry === this.newest) {
        this.newest = entry.older;
      }

      if (entry === this.oldest) {
        this.oldest = entry.newer;
      }

      if (entry.newer) {
        entry.newer.older = entry.older;
      }

      if (entry.older) {
        entry.older.newer = entry.newer;
      }

      this.map.delete(key);
      this.dispose(entry.value, key);
      return true;
    }

    return false;
  };

  return Cache;
}();

var parentEntrySlot = new _context.Slot();
var reusableEmptyArray = [];
var emptySetPool = [];
var POOL_TARGET_SIZE = 100; // Since this package might be used browsers, we should avoid using the
// Node built-in assert module.

function assert(condition, optionalMessage) {
  if (!condition) {
    throw new Error(optionalMessage || "assertion failure");
  }
}

function valueIs(a, b) {
  var len = a.length;
  return (// Unknown values are not equal to each other.
    len > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    len === b.length && // The underlying value or exception must be the same.
    a[len - 1] === b[len - 1]
  );
}

function valueGet(value) {
  switch (value.length) {
    case 0:
      throw new Error("unknown value");

    case 1:
      return value[0];

    case 2:
      throw value[1];
  }
}

function valueCopy(value) {
  return value.slice(0);
}

var Entry =
/** @class */
function () {
  function Entry(fn, args) {
    this.fn = fn;
    this.args = args;
    this.parents = new Set();
    this.childValues = new Map(); // When this Entry has children that are dirty, this property becomes
    // a Set containing other Entry objects, borrowed from emptySetPool.
    // When the set becomes empty, it gets recycled back to emptySetPool.

    this.dirtyChildren = null;
    this.dirty = true;
    this.recomputing = false;
    this.value = [];
    ++Entry.count;
  } // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.


  Entry.prototype.recompute = function () {
    assert(!this.recomputing, "already recomputing");

    if (!rememberParent(this) && maybeReportOrphan(this)) {
      // The recipient of the entry.reportOrphan callback decided to dispose
      // of this orphan entry by calling entry.dispose(), so we don't need to
      // (and should not) proceed with the recomputation.
      return void 0;
    }

    return mightBeDirty(this) ? reallyRecompute(this) : valueGet(this.value);
  };

  Entry.prototype.setDirty = function () {
    if (this.dirty) return;
    this.dirty = true;
    this.value.length = 0;
    reportDirty(this); // We can go ahead and unsubscribe here, since any further dirty
    // notifications we receive will be redundant, and unsubscribing may
    // free up some resources, e.g. file watchers.

    maybeUnsubscribe(this);
  };

  Entry.prototype.dispose = function () {
    var _this = this;

    forgetChildren(this).forEach(maybeReportOrphan);
    maybeUnsubscribe(this); // Because this entry has been kicked out of the cache (in index.js),
    // we've lost the ability to find out if/when this entry becomes dirty,
    // whether that happens through a subscription, because of a direct call
    // to entry.setDirty(), or because one of its children becomes dirty.
    // Because of this loss of future information, we have to assume the
    // worst (that this entry might have become dirty very soon), so we must
    // immediately mark this entry's parents as dirty. Normally we could
    // just call entry.setDirty() rather than calling parent.setDirty() for
    // each parent, but that would leave this entry in parent.childValues
    // and parent.dirtyChildren, which would prevent the child from being
    // truly forgotten.

    this.parents.forEach(function (parent) {
      parent.setDirty();
      forgetChild(parent, _this);
    });
  };

  Entry.count = 0;
  return Entry;
}();

function rememberParent(child) {
  var parent = parentEntrySlot.getValue();

  if (parent) {
    child.parents.add(parent);

    if (!parent.childValues.has(child)) {
      parent.childValues.set(child, []);
    }

    if (mightBeDirty(child)) {
      reportDirtyChild(parent, child);
    } else {
      reportCleanChild(parent, child);
    }

    return parent;
  }
}

function reallyRecompute(entry) {
  // Since this recomputation is likely to re-remember some of this
  // entry's children, we forget our children here but do not call
  // maybeReportOrphan until after the recomputation finishes.
  var originalChildren = forgetChildren(entry); // Set entry as the parent entry while calling recomputeNewValue(entry).

  parentEntrySlot.withValue(entry, recomputeNewValue, [entry]);

  if (maybeSubscribe(entry)) {
    // If we successfully recomputed entry.value and did not fail to
    // (re)subscribe, then this Entry is no longer explicitly dirty.
    setClean(entry);
  } // Now that we've had a chance to re-remember any children that were
  // involved in the recomputation, we can safely report any orphan
  // children that remain.


  originalChildren.forEach(maybeReportOrphan);
  return valueGet(entry.value);
}

function recomputeNewValue(entry) {
  entry.recomputing = true; // Set entry.value as unknown.

  entry.value.length = 0;

  try {
    // If entry.fn succeeds, entry.value will become a normal Value.
    entry.value[0] = entry.fn.apply(null, entry.args);
  } catch (e) {
    // If entry.fn throws, entry.value will become exceptional.
    entry.value[1] = e;
  } // Either way, this line is always reached.


  entry.recomputing = false;
}

function mightBeDirty(entry) {
  return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}

function setClean(entry) {
  entry.dirty = false;

  if (mightBeDirty(entry)) {
    // This Entry may still have dirty children, in which case we can't
    // let our parents know we're clean just yet.
    return;
  }

  reportClean(entry);
}

function reportDirty(child) {
  child.parents.forEach(function (parent) {
    return reportDirtyChild(parent, child);
  });
}

function reportClean(child) {
  child.parents.forEach(function (parent) {
    return reportCleanChild(parent, child);
  });
} // Let a parent Entry know that one of its children may be dirty.


function reportDirtyChild(parent, child) {
  // Must have called rememberParent(child) before calling
  // reportDirtyChild(parent, child).
  assert(parent.childValues.has(child));
  assert(mightBeDirty(child));

  if (!parent.dirtyChildren) {
    parent.dirtyChildren = emptySetPool.pop() || new Set();
  } else if (parent.dirtyChildren.has(child)) {
    // If we already know this child is dirty, then we must have already
    // informed our own parents that we are dirty, so we can terminate
    // the recursion early.
    return;
  }

  parent.dirtyChildren.add(child);
  reportDirty(parent);
} // Let a parent Entry know that one of its children is no longer dirty.


function reportCleanChild(parent, child) {
  // Must have called rememberChild(child) before calling
  // reportCleanChild(parent, child).
  assert(parent.childValues.has(child));
  assert(!mightBeDirty(child));
  var childValue = parent.childValues.get(child);

  if (childValue.length === 0) {
    parent.childValues.set(child, valueCopy(child.value));
  } else if (!valueIs(childValue, child.value)) {
    parent.setDirty();
  }

  removeDirtyChild(parent, child);

  if (mightBeDirty(parent)) {
    return;
  }

  reportClean(parent);
}

function removeDirtyChild(parent, child) {
  var dc = parent.dirtyChildren;

  if (dc) {
    dc.delete(child);

    if (dc.size === 0) {
      if (emptySetPool.length < POOL_TARGET_SIZE) {
        emptySetPool.push(dc);
      }

      parent.dirtyChildren = null;
    }
  }
} // If the given entry has a reportOrphan method, and no remaining parents,
// call entry.reportOrphan and return true iff it returns true. The
// reportOrphan function should return true to indicate entry.dispose()
// has been called, and the entry has been removed from any other caches
// (see index.js for the only current example).


function maybeReportOrphan(entry) {
  return entry.parents.size === 0 && typeof entry.reportOrphan === "function" && entry.reportOrphan() === true;
} // Removes all children from this entry and returns an array of the
// removed children.


function forgetChildren(parent) {
  var children = reusableEmptyArray;

  if (parent.childValues.size > 0) {
    children = [];
    parent.childValues.forEach(function (_value, child) {
      forgetChild(parent, child);
      children.push(child);
    });
  } // After we forget all our children, this.dirtyChildren must be empty
  // and therefore must have been reset to null.


  assert(parent.dirtyChildren === null);
  return children;
}

function forgetChild(parent, child) {
  child.parents.delete(parent);
  parent.childValues.delete(child);
  removeDirtyChild(parent, child);
}

function maybeSubscribe(entry) {
  if (typeof entry.subscribe === "function") {
    try {
      maybeUnsubscribe(entry); // Prevent double subscriptions.

      entry.unsubscribe = entry.subscribe.apply(null, entry.args);
    } catch (e) {
      // If this Entry has a subscribe function and it threw an exception
      // (or an unsubscribe function it previously returned now throws),
      // return false to indicate that we were not able to subscribe (or
      // unsubscribe), and this Entry should remain dirty.
      entry.setDirty();
      return false;
    }
  } // Returning true indicates either that there was no entry.subscribe
  // function or that it succeeded.


  return true;
}

function maybeUnsubscribe(entry) {
  var unsubscribe = entry.unsubscribe;

  if (typeof unsubscribe === "function") {
    entry.unsubscribe = void 0;
    unsubscribe();
  }
} // A trie data structure that holds object keys weakly, yet can also hold
// non-object keys, unlike the native `WeakMap`.


var KeyTrie =
/** @class */
function () {
  function KeyTrie(weakness) {
    this.weakness = weakness;
  }

  KeyTrie.prototype.lookup = function () {
    var array = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      array[_i] = arguments[_i];
    }

    return this.lookupArray(array);
  };

  KeyTrie.prototype.lookupArray = function (array) {
    var node = this;
    array.forEach(function (key) {
      return node = node.getChildTrie(key);
    });
    return node.data || (node.data = Object.create(null));
  };

  KeyTrie.prototype.getChildTrie = function (key) {
    var map = this.weakness && isObjRef(key) ? this.weak || (this.weak = new WeakMap()) : this.strong || (this.strong = new Map());
    var child = map.get(key);
    if (!child) map.set(key, child = new KeyTrie(this.weakness));
    return child;
  };

  return KeyTrie;
}();

exports.KeyTrie = KeyTrie;

function isObjRef(value) {
  switch (typeof value) {
    case "object":
      if (value === null) break;
    // Fall through to return true...

    case "function":
      return true;
  }

  return false;
} // The defaultMakeCacheKey function is remarkably powerful, because it gives
// a unique object for any shallow-identical list of arguments. If you need
// to implement a custom makeCacheKey function, you may find it helpful to
// delegate the final work to defaultMakeCacheKey, which is why we export it
// here. However, you may want to avoid defaultMakeCacheKey if your runtime
// does not support WeakMap, or you have the ability to return a string key.
// In those cases, just write your own custom makeCacheKey functions.


var keyTrie = new KeyTrie(typeof WeakMap === "function");

function defaultMakeCacheKey() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return keyTrie.lookupArray(args);
}

var caches = new Set();

function wrap(originalFunction, options) {
  if (options === void 0) {
    options = Object.create(null);
  }

  var cache = new Cache(options.max || Math.pow(2, 16), function (entry) {
    return entry.dispose();
  });
  var disposable = !!options.disposable;
  var makeCacheKey = options.makeCacheKey || defaultMakeCacheKey;

  function optimistic() {
    if (disposable && !parentEntrySlot.hasValue()) {
      // If there's no current parent computation, and this wrapped
      // function is disposable (meaning we don't care about entry.value,
      // just dependency tracking), then we can short-cut everything else
      // in this function, because entry.recompute() is going to recycle
      // the entry object without recomputing anything, anyway.
      return void 0;
    }

    var key = makeCacheKey.apply(null, arguments);

    if (!key) {
      return originalFunction.apply(null, arguments);
    }

    var args = Array.prototype.slice.call(arguments);
    var entry = cache.get(key);

    if (entry) {
      entry.args = args;
    } else {
      entry = new Entry(originalFunction, args);
      cache.set(key, entry);
      entry.subscribe = options.subscribe;

      if (disposable) {
        entry.reportOrphan = function () {
          return cache.delete(key);
        };
      }
    }

    var value = entry.recompute(); // Move this entry to the front of the least-recently used queue,
    // since we just finished computing its value.

    cache.set(key, entry);
    caches.add(cache); // Clean up any excess entries in the cache, but only if there is no
    // active parent entry, meaning we're not in the middle of a larger
    // computation that might be flummoxed by the cleaning.

    if (!parentEntrySlot.hasValue()) {
      caches.forEach(function (cache) {
        return cache.clean();
      });
      caches.clear();
    } // If options.disposable is truthy, the caller of wrap is telling us
    // they don't care about the result of entry.recompute(), so we should
    // avoid returning the value, so it won't be accidentally used.


    return disposable ? void 0 : value;
  }

  optimistic.dirty = function () {
    var key = makeCacheKey.apply(null, arguments);
    var child = key && cache.get(key);

    if (child) {
      child.setDirty();
    }
  };

  return optimistic;
}
},{"@wry/context":"../node_modules/@wry/context/lib/context.esm.js"}],"../node_modules/apollo-cache-inmemory/lib/bundle.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertIdValue = assertIdValue;
exports.defaultDataIdFromObject = defaultDataIdFromObject;
exports.defaultNormalizedCacheFactory = defaultNormalizedCacheFactory$1;
exports.enhanceErrorWithDocument = enhanceErrorWithDocument;
exports.WriteError = exports.StoreWriter = exports.StoreReader = exports.ObjectCache = exports.IntrospectionFragmentMatcher = exports.InMemoryCache = exports.HeuristicFragmentMatcher = void 0;

var _tslib = require("tslib");

var _apolloCache = require("apollo-cache");

var _apolloUtilities = require("apollo-utilities");

var _optimism = require("optimism");

var _tsInvariant = require("ts-invariant");

var haveWarned = false;

function shouldWarn() {
  var answer = !haveWarned;

  if (!(0, _apolloUtilities.isTest)()) {
    haveWarned = true;
  }

  return answer;
}

var HeuristicFragmentMatcher = function () {
  function HeuristicFragmentMatcher() {}

  HeuristicFragmentMatcher.prototype.ensureReady = function () {
    return Promise.resolve();
  };

  HeuristicFragmentMatcher.prototype.canBypassInit = function () {
    return true;
  };

  HeuristicFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
    var obj = context.store.get(idValue.id);
    var isRootQuery = idValue.id === 'ROOT_QUERY';

    if (!obj) {
      return isRootQuery;
    }

    var _a = obj.__typename,
        __typename = _a === void 0 ? isRootQuery && 'Query' : _a;

    if (!__typename) {
      if (shouldWarn()) {
        "development" === "production" || _tsInvariant.invariant.warn("You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments.");
        "development" === "production" || _tsInvariant.invariant.warn('Could not find __typename on Fragment ', typeCondition, obj);
        "development" === "production" || _tsInvariant.invariant.warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior " + "and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.");
      }

      return 'heuristic';
    }

    if (__typename === typeCondition) {
      return true;
    }

    if (shouldWarn()) {
      "development" === "production" || _tsInvariant.invariant.error('You are using the simple (heuristic) fragment matcher, but your ' + 'queries contain union or interface types. Apollo Client will not be ' + 'able to accurately map fragments. To make this error go away, use ' + 'the `IntrospectionFragmentMatcher` as described in the docs: ' + 'https://www.apollographql.com/docs/react/advanced/fragments.html#fragment-matcher');
    }

    return 'heuristic';
  };

  return HeuristicFragmentMatcher;
}();

exports.HeuristicFragmentMatcher = HeuristicFragmentMatcher;

var IntrospectionFragmentMatcher = function () {
  function IntrospectionFragmentMatcher(options) {
    if (options && options.introspectionQueryResultData) {
      this.possibleTypesMap = this.parseIntrospectionResult(options.introspectionQueryResultData);
      this.isReady = true;
    } else {
      this.isReady = false;
    }

    this.match = this.match.bind(this);
  }

  IntrospectionFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
    "development" === "production" ? (0, _tsInvariant.invariant)(this.isReady, 6) : (0, _tsInvariant.invariant)(this.isReady, 'FragmentMatcher.match() was called before FragmentMatcher.init()');
    var obj = context.store.get(idValue.id);
    var isRootQuery = idValue.id === 'ROOT_QUERY';

    if (!obj) {
      return isRootQuery;
    }

    var _a = obj.__typename,
        __typename = _a === void 0 ? isRootQuery && 'Query' : _a;

    "development" === "production" ? (0, _tsInvariant.invariant)(__typename, 7) : (0, _tsInvariant.invariant)(__typename, "Cannot match fragment because __typename property is missing: " + JSON.stringify(obj));

    if (__typename === typeCondition) {
      return true;
    }

    var implementingTypes = this.possibleTypesMap[typeCondition];

    if (__typename && implementingTypes && implementingTypes.indexOf(__typename) > -1) {
      return true;
    }

    return false;
  };

  IntrospectionFragmentMatcher.prototype.parseIntrospectionResult = function (introspectionResultData) {
    var typeMap = {};

    introspectionResultData.__schema.types.forEach(function (type) {
      if (type.kind === 'UNION' || type.kind === 'INTERFACE') {
        typeMap[type.name] = type.possibleTypes.map(function (implementingType) {
          return implementingType.name;
        });
      }
    });

    return typeMap;
  };

  return IntrospectionFragmentMatcher;
}();

exports.IntrospectionFragmentMatcher = IntrospectionFragmentMatcher;
var hasOwn = Object.prototype.hasOwnProperty;

var DepTrackingCache = function () {
  function DepTrackingCache(data) {
    var _this = this;

    if (data === void 0) {
      data = Object.create(null);
    }

    this.data = data;
    this.depend = (0, _optimism.wrap)(function (dataId) {
      return _this.data[dataId];
    }, {
      disposable: true,
      makeCacheKey: function (dataId) {
        return dataId;
      }
    });
  }

  DepTrackingCache.prototype.toObject = function () {
    return this.data;
  };

  DepTrackingCache.prototype.get = function (dataId) {
    this.depend(dataId);
    return this.data[dataId];
  };

  DepTrackingCache.prototype.set = function (dataId, value) {
    var oldValue = this.data[dataId];

    if (value !== oldValue) {
      this.data[dataId] = value;
      this.depend.dirty(dataId);
    }
  };

  DepTrackingCache.prototype.delete = function (dataId) {
    if (hasOwn.call(this.data, dataId)) {
      delete this.data[dataId];
      this.depend.dirty(dataId);
    }
  };

  DepTrackingCache.prototype.clear = function () {
    this.replace(null);
  };

  DepTrackingCache.prototype.replace = function (newData) {
    var _this = this;

    if (newData) {
      Object.keys(newData).forEach(function (dataId) {
        _this.set(dataId, newData[dataId]);
      });
      Object.keys(this.data).forEach(function (dataId) {
        if (!hasOwn.call(newData, dataId)) {
          _this.delete(dataId);
        }
      });
    } else {
      Object.keys(this.data).forEach(function (dataId) {
        _this.delete(dataId);
      });
    }
  };

  return DepTrackingCache;
}();

function defaultNormalizedCacheFactory(seed) {
  return new DepTrackingCache(seed);
}

var StoreReader = function () {
  function StoreReader(_a) {
    var _this = this;

    var _b = _a === void 0 ? {} : _a,
        _c = _b.cacheKeyRoot,
        cacheKeyRoot = _c === void 0 ? new _optimism.KeyTrie(_apolloUtilities.canUseWeakMap) : _c,
        _d = _b.freezeResults,
        freezeResults = _d === void 0 ? false : _d;

    var _e = this,
        executeStoreQuery = _e.executeStoreQuery,
        executeSelectionSet = _e.executeSelectionSet,
        executeSubSelectedArray = _e.executeSubSelectedArray;

    this.freezeResults = freezeResults;
    this.executeStoreQuery = (0, _optimism.wrap)(function (options) {
      return executeStoreQuery.call(_this, options);
    }, {
      makeCacheKey: function (_a) {
        var query = _a.query,
            rootValue = _a.rootValue,
            contextValue = _a.contextValue,
            variableValues = _a.variableValues,
            fragmentMatcher = _a.fragmentMatcher;

        if (contextValue.store instanceof DepTrackingCache) {
          return cacheKeyRoot.lookup(contextValue.store, query, fragmentMatcher, JSON.stringify(variableValues), rootValue.id);
        }
      }
    });
    this.executeSelectionSet = (0, _optimism.wrap)(function (options) {
      return executeSelectionSet.call(_this, options);
    }, {
      makeCacheKey: function (_a) {
        var selectionSet = _a.selectionSet,
            rootValue = _a.rootValue,
            execContext = _a.execContext;

        if (execContext.contextValue.store instanceof DepTrackingCache) {
          return cacheKeyRoot.lookup(execContext.contextValue.store, selectionSet, execContext.fragmentMatcher, JSON.stringify(execContext.variableValues), rootValue.id);
        }
      }
    });
    this.executeSubSelectedArray = (0, _optimism.wrap)(function (options) {
      return executeSubSelectedArray.call(_this, options);
    }, {
      makeCacheKey: function (_a) {
        var field = _a.field,
            array = _a.array,
            execContext = _a.execContext;

        if (execContext.contextValue.store instanceof DepTrackingCache) {
          return cacheKeyRoot.lookup(execContext.contextValue.store, field, array, JSON.stringify(execContext.variableValues));
        }
      }
    });
  }

  StoreReader.prototype.readQueryFromStore = function (options) {
    return this.diffQueryAgainstStore((0, _tslib.__assign)({}, options, {
      returnPartialData: false
    })).result;
  };

  StoreReader.prototype.diffQueryAgainstStore = function (_a) {
    var store = _a.store,
        query = _a.query,
        variables = _a.variables,
        previousResult = _a.previousResult,
        _b = _a.returnPartialData,
        returnPartialData = _b === void 0 ? true : _b,
        _c = _a.rootId,
        rootId = _c === void 0 ? 'ROOT_QUERY' : _c,
        fragmentMatcherFunction = _a.fragmentMatcherFunction,
        config = _a.config;
    var queryDefinition = (0, _apolloUtilities.getQueryDefinition)(query);
    variables = (0, _apolloUtilities.assign)({}, (0, _apolloUtilities.getDefaultValues)(queryDefinition), variables);
    var context = {
      store: store,
      dataIdFromObject: config && config.dataIdFromObject,
      cacheRedirects: config && config.cacheRedirects || {}
    };
    var execResult = this.executeStoreQuery({
      query: query,
      rootValue: {
        type: 'id',
        id: rootId,
        generated: true,
        typename: 'Query'
      },
      contextValue: context,
      variableValues: variables,
      fragmentMatcher: fragmentMatcherFunction
    });
    var hasMissingFields = execResult.missing && execResult.missing.length > 0;

    if (hasMissingFields && !returnPartialData) {
      execResult.missing.forEach(function (info) {
        if (info.tolerable) return;
        throw "development" === "production" ? new _tsInvariant.InvariantError(8) : new _tsInvariant.InvariantError("Can't find field " + info.fieldName + " on object " + JSON.stringify(info.object, null, 2) + ".");
      });
    }

    if (previousResult) {
      if ((0, _apolloUtilities.isEqual)(previousResult, execResult.result)) {
        execResult.result = previousResult;
      }
    }

    return {
      result: execResult.result,
      complete: !hasMissingFields
    };
  };

  StoreReader.prototype.executeStoreQuery = function (_a) {
    var query = _a.query,
        rootValue = _a.rootValue,
        contextValue = _a.contextValue,
        variableValues = _a.variableValues,
        _b = _a.fragmentMatcher,
        fragmentMatcher = _b === void 0 ? defaultFragmentMatcher : _b;
    var mainDefinition = (0, _apolloUtilities.getMainDefinition)(query);
    var fragments = (0, _apolloUtilities.getFragmentDefinitions)(query);
    var fragmentMap = (0, _apolloUtilities.createFragmentMap)(fragments);
    var execContext = {
      query: query,
      fragmentMap: fragmentMap,
      contextValue: contextValue,
      variableValues: variableValues,
      fragmentMatcher: fragmentMatcher
    };
    return this.executeSelectionSet({
      selectionSet: mainDefinition.selectionSet,
      rootValue: rootValue,
      execContext: execContext
    });
  };

  StoreReader.prototype.executeSelectionSet = function (_a) {
    var _this = this;

    var selectionSet = _a.selectionSet,
        rootValue = _a.rootValue,
        execContext = _a.execContext;
    var fragmentMap = execContext.fragmentMap,
        contextValue = execContext.contextValue,
        variables = execContext.variableValues;
    var finalResult = {
      result: null
    };
    var objectsToMerge = [];
    var object = contextValue.store.get(rootValue.id);
    var typename = object && object.__typename || rootValue.id === 'ROOT_QUERY' && 'Query' || void 0;

    function handleMissing(result) {
      var _a;

      if (result.missing) {
        finalResult.missing = finalResult.missing || [];

        (_a = finalResult.missing).push.apply(_a, result.missing);
      }

      return result.result;
    }

    selectionSet.selections.forEach(function (selection) {
      var _a;

      if (!(0, _apolloUtilities.shouldInclude)(selection, variables)) {
        return;
      }

      if ((0, _apolloUtilities.isField)(selection)) {
        var fieldResult = handleMissing(_this.executeField(object, typename, selection, execContext));

        if (typeof fieldResult !== 'undefined') {
          objectsToMerge.push((_a = {}, _a[(0, _apolloUtilities.resultKeyNameFromField)(selection)] = fieldResult, _a));
        }
      } else {
        var fragment = void 0;

        if ((0, _apolloUtilities.isInlineFragment)(selection)) {
          fragment = selection;
        } else {
          fragment = fragmentMap[selection.name.value];

          if (!fragment) {
            throw "development" === "production" ? new _tsInvariant.InvariantError(9) : new _tsInvariant.InvariantError("No fragment named " + selection.name.value);
          }
        }

        var typeCondition = fragment.typeCondition && fragment.typeCondition.name.value;
        var match = !typeCondition || execContext.fragmentMatcher(rootValue, typeCondition, contextValue);

        if (match) {
          var fragmentExecResult = _this.executeSelectionSet({
            selectionSet: fragment.selectionSet,
            rootValue: rootValue,
            execContext: execContext
          });

          if (match === 'heuristic' && fragmentExecResult.missing) {
            fragmentExecResult = (0, _tslib.__assign)({}, fragmentExecResult, {
              missing: fragmentExecResult.missing.map(function (info) {
                return (0, _tslib.__assign)({}, info, {
                  tolerable: true
                });
              })
            });
          }

          objectsToMerge.push(handleMissing(fragmentExecResult));
        }
      }
    });
    finalResult.result = (0, _apolloUtilities.mergeDeepArray)(objectsToMerge);

    if (this.freezeResults && "development" !== 'production') {
      Object.freeze(finalResult.result);
    }

    return finalResult;
  };

  StoreReader.prototype.executeField = function (object, typename, field, execContext) {
    var variables = execContext.variableValues,
        contextValue = execContext.contextValue;
    var fieldName = field.name.value;
    var args = (0, _apolloUtilities.argumentsObjectFromField)(field, variables);
    var info = {
      resultKey: (0, _apolloUtilities.resultKeyNameFromField)(field),
      directives: (0, _apolloUtilities.getDirectiveInfoFromField)(field, variables)
    };
    var readStoreResult = readStoreResolver(object, typename, fieldName, args, contextValue, info);

    if (Array.isArray(readStoreResult.result)) {
      return this.combineExecResults(readStoreResult, this.executeSubSelectedArray({
        field: field,
        array: readStoreResult.result,
        execContext: execContext
      }));
    }

    if (!field.selectionSet) {
      assertSelectionSetForIdValue(field, readStoreResult.result);

      if (this.freezeResults && "development" !== 'production') {
        (0, _apolloUtilities.maybeDeepFreeze)(readStoreResult);
      }

      return readStoreResult;
    }

    if (readStoreResult.result == null) {
      return readStoreResult;
    }

    return this.combineExecResults(readStoreResult, this.executeSelectionSet({
      selectionSet: field.selectionSet,
      rootValue: readStoreResult.result,
      execContext: execContext
    }));
  };

  StoreReader.prototype.combineExecResults = function () {
    var execResults = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      execResults[_i] = arguments[_i];
    }

    var missing;
    execResults.forEach(function (execResult) {
      if (execResult.missing) {
        missing = missing || [];
        missing.push.apply(missing, execResult.missing);
      }
    });
    return {
      result: execResults.pop().result,
      missing: missing
    };
  };

  StoreReader.prototype.executeSubSelectedArray = function (_a) {
    var _this = this;

    var field = _a.field,
        array = _a.array,
        execContext = _a.execContext;
    var missing;

    function handleMissing(childResult) {
      if (childResult.missing) {
        missing = missing || [];
        missing.push.apply(missing, childResult.missing);
      }

      return childResult.result;
    }

    array = array.map(function (item) {
      if (item === null) {
        return null;
      }

      if (Array.isArray(item)) {
        return handleMissing(_this.executeSubSelectedArray({
          field: field,
          array: item,
          execContext: execContext
        }));
      }

      if (field.selectionSet) {
        return handleMissing(_this.executeSelectionSet({
          selectionSet: field.selectionSet,
          rootValue: item,
          execContext: execContext
        }));
      }

      assertSelectionSetForIdValue(field, item);
      return item;
    });

    if (this.freezeResults && "development" !== 'production') {
      Object.freeze(array);
    }

    return {
      result: array,
      missing: missing
    };
  };

  return StoreReader;
}();

exports.StoreReader = StoreReader;

function assertSelectionSetForIdValue(field, value) {
  if (!field.selectionSet && (0, _apolloUtilities.isIdValue)(value)) {
    throw "development" === "production" ? new _tsInvariant.InvariantError(10) : new _tsInvariant.InvariantError("Missing selection set for object of type " + value.typename + " returned for query field " + field.name.value);
  }
}

function defaultFragmentMatcher() {
  return true;
}

function assertIdValue(idValue) {
  "development" === "production" ? (0, _tsInvariant.invariant)((0, _apolloUtilities.isIdValue)(idValue), 11) : (0, _tsInvariant.invariant)((0, _apolloUtilities.isIdValue)(idValue), "Encountered a sub-selection on the query, but the store doesn't have an object reference. This should never happen during normal use unless you have custom code that is directly manipulating the store; please file an issue.");
}

function readStoreResolver(object, typename, fieldName, args, context, _a) {
  var resultKey = _a.resultKey,
      directives = _a.directives;
  var storeKeyName = fieldName;

  if (args || directives) {
    storeKeyName = (0, _apolloUtilities.getStoreKeyName)(storeKeyName, args, directives);
  }

  var fieldValue = void 0;

  if (object) {
    fieldValue = object[storeKeyName];

    if (typeof fieldValue === 'undefined' && context.cacheRedirects && typeof typename === 'string') {
      var type = context.cacheRedirects[typename];

      if (type) {
        var resolver = type[fieldName];

        if (resolver) {
          fieldValue = resolver(object, args, {
            getCacheKey: function (storeObj) {
              var id = context.dataIdFromObject(storeObj);
              return id && (0, _apolloUtilities.toIdValue)({
                id: id,
                typename: storeObj.__typename
              });
            }
          });
        }
      }
    }
  }

  if (typeof fieldValue === 'undefined') {
    return {
      result: fieldValue,
      missing: [{
        object: object,
        fieldName: storeKeyName,
        tolerable: false
      }]
    };
  }

  if ((0, _apolloUtilities.isJsonValue)(fieldValue)) {
    fieldValue = fieldValue.json;
  }

  return {
    result: fieldValue
  };
}

var ObjectCache = function () {
  function ObjectCache(data) {
    if (data === void 0) {
      data = Object.create(null);
    }

    this.data = data;
  }

  ObjectCache.prototype.toObject = function () {
    return this.data;
  };

  ObjectCache.prototype.get = function (dataId) {
    return this.data[dataId];
  };

  ObjectCache.prototype.set = function (dataId, value) {
    this.data[dataId] = value;
  };

  ObjectCache.prototype.delete = function (dataId) {
    this.data[dataId] = void 0;
  };

  ObjectCache.prototype.clear = function () {
    this.data = Object.create(null);
  };

  ObjectCache.prototype.replace = function (newData) {
    this.data = newData || Object.create(null);
  };

  return ObjectCache;
}();

exports.ObjectCache = ObjectCache;

function defaultNormalizedCacheFactory$1(seed) {
  return new ObjectCache(seed);
}

var WriteError = function (_super) {
  (0, _tslib.__extends)(WriteError, _super);

  function WriteError() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.type = 'WriteError';
    return _this;
  }

  return WriteError;
}(Error);

exports.WriteError = WriteError;

function enhanceErrorWithDocument(error, document) {
  var enhancedError = new WriteError("Error writing result to store for query:\n " + JSON.stringify(document));
  enhancedError.message += '\n' + error.message;
  enhancedError.stack = error.stack;
  return enhancedError;
}

var StoreWriter = function () {
  function StoreWriter() {}

  StoreWriter.prototype.writeQueryToStore = function (_a) {
    var query = _a.query,
        result = _a.result,
        _b = _a.store,
        store = _b === void 0 ? defaultNormalizedCacheFactory() : _b,
        variables = _a.variables,
        dataIdFromObject = _a.dataIdFromObject,
        fragmentMatcherFunction = _a.fragmentMatcherFunction;
    return this.writeResultToStore({
      dataId: 'ROOT_QUERY',
      result: result,
      document: query,
      store: store,
      variables: variables,
      dataIdFromObject: dataIdFromObject,
      fragmentMatcherFunction: fragmentMatcherFunction
    });
  };

  StoreWriter.prototype.writeResultToStore = function (_a) {
    var dataId = _a.dataId,
        result = _a.result,
        document = _a.document,
        _b = _a.store,
        store = _b === void 0 ? defaultNormalizedCacheFactory() : _b,
        variables = _a.variables,
        dataIdFromObject = _a.dataIdFromObject,
        fragmentMatcherFunction = _a.fragmentMatcherFunction;
    var operationDefinition = (0, _apolloUtilities.getOperationDefinition)(document);

    try {
      return this.writeSelectionSetToStore({
        result: result,
        dataId: dataId,
        selectionSet: operationDefinition.selectionSet,
        context: {
          store: store,
          processedData: {},
          variables: (0, _apolloUtilities.assign)({}, (0, _apolloUtilities.getDefaultValues)(operationDefinition), variables),
          dataIdFromObject: dataIdFromObject,
          fragmentMap: (0, _apolloUtilities.createFragmentMap)((0, _apolloUtilities.getFragmentDefinitions)(document)),
          fragmentMatcherFunction: fragmentMatcherFunction
        }
      });
    } catch (e) {
      throw enhanceErrorWithDocument(e, document);
    }
  };

  StoreWriter.prototype.writeSelectionSetToStore = function (_a) {
    var _this = this;

    var result = _a.result,
        dataId = _a.dataId,
        selectionSet = _a.selectionSet,
        context = _a.context;
    var variables = context.variables,
        store = context.store,
        fragmentMap = context.fragmentMap;
    selectionSet.selections.forEach(function (selection) {
      var _a;

      if (!(0, _apolloUtilities.shouldInclude)(selection, variables)) {
        return;
      }

      if ((0, _apolloUtilities.isField)(selection)) {
        var resultFieldKey = (0, _apolloUtilities.resultKeyNameFromField)(selection);
        var value = result[resultFieldKey];

        if (typeof value !== 'undefined') {
          _this.writeFieldToStore({
            dataId: dataId,
            value: value,
            field: selection,
            context: context
          });
        } else {
          var isDefered = false;
          var isClient = false;

          if (selection.directives && selection.directives.length) {
            isDefered = selection.directives.some(function (directive) {
              return directive.name && directive.name.value === 'defer';
            });
            isClient = selection.directives.some(function (directive) {
              return directive.name && directive.name.value === 'client';
            });
          }

          if (!isDefered && !isClient && context.fragmentMatcherFunction) {
            "development" === "production" || _tsInvariant.invariant.warn("Missing field " + resultFieldKey + " in " + JSON.stringify(result, null, 2).substring(0, 100));
          }
        }
      } else {
        var fragment = void 0;

        if ((0, _apolloUtilities.isInlineFragment)(selection)) {
          fragment = selection;
        } else {
          fragment = (fragmentMap || {})[selection.name.value];
          "development" === "production" ? (0, _tsInvariant.invariant)(fragment, 2) : (0, _tsInvariant.invariant)(fragment, "No fragment named " + selection.name.value + ".");
        }

        var matches = true;

        if (context.fragmentMatcherFunction && fragment.typeCondition) {
          var id = dataId || 'self';
          var idValue = (0, _apolloUtilities.toIdValue)({
            id: id,
            typename: undefined
          });
          var fakeContext = {
            store: new ObjectCache((_a = {}, _a[id] = result, _a)),
            cacheRedirects: {}
          };
          var match = context.fragmentMatcherFunction(idValue, fragment.typeCondition.name.value, fakeContext);

          if (!(0, _apolloUtilities.isProduction)() && match === 'heuristic') {
            "development" === "production" || _tsInvariant.invariant.error('WARNING: heuristic fragment matching going on!');
          }

          matches = !!match;
        }

        if (matches) {
          _this.writeSelectionSetToStore({
            result: result,
            selectionSet: fragment.selectionSet,
            dataId: dataId,
            context: context
          });
        }
      }
    });
    return store;
  };

  StoreWriter.prototype.writeFieldToStore = function (_a) {
    var _b;

    var field = _a.field,
        value = _a.value,
        dataId = _a.dataId,
        context = _a.context;
    var variables = context.variables,
        dataIdFromObject = context.dataIdFromObject,
        store = context.store;
    var storeValue;
    var storeObject;
    var storeFieldName = (0, _apolloUtilities.storeKeyNameFromField)(field, variables);

    if (!field.selectionSet || value === null) {
      storeValue = value != null && typeof value === 'object' ? {
        type: 'json',
        json: value
      } : value;
    } else if (Array.isArray(value)) {
      var generatedId = dataId + "." + storeFieldName;
      storeValue = this.processArrayValue(value, generatedId, field.selectionSet, context);
    } else {
      var valueDataId = dataId + "." + storeFieldName;
      var generated = true;

      if (!isGeneratedId(valueDataId)) {
        valueDataId = '$' + valueDataId;
      }

      if (dataIdFromObject) {
        var semanticId = dataIdFromObject(value);
        "development" === "production" ? (0, _tsInvariant.invariant)(!semanticId || !isGeneratedId(semanticId), 3) : (0, _tsInvariant.invariant)(!semanticId || !isGeneratedId(semanticId), 'IDs returned by dataIdFromObject cannot begin with the "$" character.');

        if (semanticId || typeof semanticId === 'number' && semanticId === 0) {
          valueDataId = semanticId;
          generated = false;
        }
      }

      if (!isDataProcessed(valueDataId, field, context.processedData)) {
        this.writeSelectionSetToStore({
          dataId: valueDataId,
          result: value,
          selectionSet: field.selectionSet,
          context: context
        });
      }

      var typename = value.__typename;
      storeValue = (0, _apolloUtilities.toIdValue)({
        id: valueDataId,
        typename: typename
      }, generated);
      storeObject = store.get(dataId);
      var escapedId = storeObject && storeObject[storeFieldName];

      if (escapedId !== storeValue && (0, _apolloUtilities.isIdValue)(escapedId)) {
        var hadTypename = escapedId.typename !== undefined;
        var hasTypename = typename !== undefined;
        var typenameChanged = hadTypename && hasTypename && escapedId.typename !== typename;
        "development" === "production" ? (0, _tsInvariant.invariant)(!generated || escapedId.generated || typenameChanged, 4) : (0, _tsInvariant.invariant)(!generated || escapedId.generated || typenameChanged, "Store error: the application attempted to write an object with no provided id but the store already contains an id of " + escapedId.id + " for this object. The selectionSet that was trying to be written is:\n" + JSON.stringify(field));
        "development" === "production" ? (0, _tsInvariant.invariant)(!hadTypename || hasTypename, 5) : (0, _tsInvariant.invariant)(!hadTypename || hasTypename, "Store error: the application attempted to write an object with no provided typename but the store already contains an object with typename of " + escapedId.typename + " for the object of id " + escapedId.id + ". The selectionSet that was trying to be written is:\n" + JSON.stringify(field));

        if (escapedId.generated) {
          if (typenameChanged) {
            if (!generated) {
              store.delete(escapedId.id);
            }
          } else {
            mergeWithGenerated(escapedId.id, storeValue.id, store);
          }
        }
      }
    }

    storeObject = store.get(dataId);

    if (!storeObject || !(0, _apolloUtilities.isEqual)(storeValue, storeObject[storeFieldName])) {
      store.set(dataId, (0, _tslib.__assign)({}, storeObject, (_b = {}, _b[storeFieldName] = storeValue, _b)));
    }
  };

  StoreWriter.prototype.processArrayValue = function (value, generatedId, selectionSet, context) {
    var _this = this;

    return value.map(function (item, index) {
      if (item === null) {
        return null;
      }

      var itemDataId = generatedId + "." + index;

      if (Array.isArray(item)) {
        return _this.processArrayValue(item, itemDataId, selectionSet, context);
      }

      var generated = true;

      if (context.dataIdFromObject) {
        var semanticId = context.dataIdFromObject(item);

        if (semanticId) {
          itemDataId = semanticId;
          generated = false;
        }
      }

      if (!isDataProcessed(itemDataId, selectionSet, context.processedData)) {
        _this.writeSelectionSetToStore({
          dataId: itemDataId,
          result: item,
          selectionSet: selectionSet,
          context: context
        });
      }

      return (0, _apolloUtilities.toIdValue)({
        id: itemDataId,
        typename: item.__typename
      }, generated);
    });
  };

  return StoreWriter;
}();

exports.StoreWriter = StoreWriter;

function isGeneratedId(id) {
  return id[0] === '$';
}

function mergeWithGenerated(generatedKey, realKey, cache) {
  if (generatedKey === realKey) {
    return false;
  }

  var generated = cache.get(generatedKey);
  var real = cache.get(realKey);
  var madeChanges = false;
  Object.keys(generated).forEach(function (key) {
    var value = generated[key];
    var realValue = real[key];

    if ((0, _apolloUtilities.isIdValue)(value) && isGeneratedId(value.id) && (0, _apolloUtilities.isIdValue)(realValue) && !(0, _apolloUtilities.isEqual)(value, realValue) && mergeWithGenerated(value.id, realValue.id, cache)) {
      madeChanges = true;
    }
  });
  cache.delete(generatedKey);
  var newRealValue = (0, _tslib.__assign)({}, generated, real);

  if ((0, _apolloUtilities.isEqual)(newRealValue, real)) {
    return madeChanges;
  }

  cache.set(realKey, newRealValue);
  return true;
}

function isDataProcessed(dataId, field, processedData) {
  if (!processedData) {
    return false;
  }

  if (processedData[dataId]) {
    if (processedData[dataId].indexOf(field) >= 0) {
      return true;
    } else {
      processedData[dataId].push(field);
    }
  } else {
    processedData[dataId] = [field];
  }

  return false;
}

var defaultConfig = {
  fragmentMatcher: new HeuristicFragmentMatcher(),
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: true,
  resultCaching: true,
  freezeResults: false
};

function defaultDataIdFromObject(result) {
  if (result.__typename) {
    if (result.id !== undefined) {
      return result.__typename + ":" + result.id;
    }

    if (result._id !== undefined) {
      return result.__typename + ":" + result._id;
    }
  }

  return null;
}

var hasOwn$1 = Object.prototype.hasOwnProperty;

var OptimisticCacheLayer = function (_super) {
  (0, _tslib.__extends)(OptimisticCacheLayer, _super);

  function OptimisticCacheLayer(optimisticId, parent, transaction) {
    var _this = _super.call(this, Object.create(null)) || this;

    _this.optimisticId = optimisticId;
    _this.parent = parent;
    _this.transaction = transaction;
    return _this;
  }

  OptimisticCacheLayer.prototype.toObject = function () {
    return (0, _tslib.__assign)({}, this.parent.toObject(), this.data);
  };

  OptimisticCacheLayer.prototype.get = function (dataId) {
    return hasOwn$1.call(this.data, dataId) ? this.data[dataId] : this.parent.get(dataId);
  };

  return OptimisticCacheLayer;
}(ObjectCache);

var InMemoryCache = function (_super) {
  (0, _tslib.__extends)(InMemoryCache, _super);

  function InMemoryCache(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this) || this;

    _this.watches = new Set();
    _this.typenameDocumentCache = new Map();
    _this.cacheKeyRoot = new _optimism.KeyTrie(_apolloUtilities.canUseWeakMap);
    _this.silenceBroadcast = false;
    _this.config = (0, _tslib.__assign)({}, defaultConfig, config);

    if (_this.config.customResolvers) {
      "development" === "production" || _tsInvariant.invariant.warn('customResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating customResolvers in the next major version.');
      _this.config.cacheRedirects = _this.config.customResolvers;
    }

    if (_this.config.cacheResolvers) {
      "development" === "production" || _tsInvariant.invariant.warn('cacheResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating cacheResolvers in the next major version.');
      _this.config.cacheRedirects = _this.config.cacheResolvers;
    }

    _this.addTypename = !!_this.config.addTypename;
    _this.data = _this.config.resultCaching ? new DepTrackingCache() : new ObjectCache();
    _this.optimisticData = _this.data;
    _this.storeWriter = new StoreWriter();
    _this.storeReader = new StoreReader({
      cacheKeyRoot: _this.cacheKeyRoot,
      freezeResults: config.freezeResults
    });
    var cache = _this;
    var maybeBroadcastWatch = cache.maybeBroadcastWatch;
    _this.maybeBroadcastWatch = (0, _optimism.wrap)(function (c) {
      return maybeBroadcastWatch.call(_this, c);
    }, {
      makeCacheKey: function (c) {
        if (c.optimistic) {
          return;
        }

        if (c.previousResult) {
          return;
        }

        if (cache.data instanceof DepTrackingCache) {
          return cache.cacheKeyRoot.lookup(c.query, JSON.stringify(c.variables));
        }
      }
    });
    return _this;
  }

  InMemoryCache.prototype.restore = function (data) {
    if (data) this.data.replace(data);
    return this;
  };

  InMemoryCache.prototype.extract = function (optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }

    return (optimistic ? this.optimisticData : this.data).toObject();
  };

  InMemoryCache.prototype.read = function (options) {
    if (typeof options.rootId === 'string' && typeof this.data.get(options.rootId) === 'undefined') {
      return null;
    }

    var fragmentMatcher = this.config.fragmentMatcher;
    var fragmentMatcherFunction = fragmentMatcher && fragmentMatcher.match;
    return this.storeReader.readQueryFromStore({
      store: options.optimistic ? this.optimisticData : this.data,
      query: this.transformDocument(options.query),
      variables: options.variables,
      rootId: options.rootId,
      fragmentMatcherFunction: fragmentMatcherFunction,
      previousResult: options.previousResult,
      config: this.config
    }) || null;
  };

  InMemoryCache.prototype.write = function (write) {
    var fragmentMatcher = this.config.fragmentMatcher;
    var fragmentMatcherFunction = fragmentMatcher && fragmentMatcher.match;
    this.storeWriter.writeResultToStore({
      dataId: write.dataId,
      result: write.result,
      variables: write.variables,
      document: this.transformDocument(write.query),
      store: this.data,
      dataIdFromObject: this.config.dataIdFromObject,
      fragmentMatcherFunction: fragmentMatcherFunction
    });
    this.broadcastWatches();
  };

  InMemoryCache.prototype.diff = function (query) {
    var fragmentMatcher = this.config.fragmentMatcher;
    var fragmentMatcherFunction = fragmentMatcher && fragmentMatcher.match;
    return this.storeReader.diffQueryAgainstStore({
      store: query.optimistic ? this.optimisticData : this.data,
      query: this.transformDocument(query.query),
      variables: query.variables,
      returnPartialData: query.returnPartialData,
      previousResult: query.previousResult,
      fragmentMatcherFunction: fragmentMatcherFunction,
      config: this.config
    });
  };

  InMemoryCache.prototype.watch = function (watch) {
    var _this = this;

    this.watches.add(watch);
    return function () {
      _this.watches.delete(watch);
    };
  };

  InMemoryCache.prototype.evict = function (query) {
    throw "development" === "production" ? new _tsInvariant.InvariantError(1) : new _tsInvariant.InvariantError("eviction is not implemented on InMemory Cache");
  };

  InMemoryCache.prototype.reset = function () {
    this.data.clear();
    this.broadcastWatches();
    return Promise.resolve();
  };

  InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
    var toReapply = [];
    var removedCount = 0;
    var layer = this.optimisticData;

    while (layer instanceof OptimisticCacheLayer) {
      if (layer.optimisticId === idToRemove) {
        ++removedCount;
      } else {
        toReapply.push(layer);
      }

      layer = layer.parent;
    }

    if (removedCount > 0) {
      this.optimisticData = layer;

      while (toReapply.length > 0) {
        var layer_1 = toReapply.pop();
        this.performTransaction(layer_1.transaction, layer_1.optimisticId);
      }

      this.broadcastWatches();
    }
  };

  InMemoryCache.prototype.performTransaction = function (transaction, optimisticId) {
    var _a = this,
        data = _a.data,
        silenceBroadcast = _a.silenceBroadcast;

    this.silenceBroadcast = true;

    if (typeof optimisticId === 'string') {
      this.data = this.optimisticData = new OptimisticCacheLayer(optimisticId, this.optimisticData, transaction);
    }

    try {
      transaction(this);
    } finally {
      this.silenceBroadcast = silenceBroadcast;
      this.data = data;
    }

    this.broadcastWatches();
  };

  InMemoryCache.prototype.recordOptimisticTransaction = function (transaction, id) {
    return this.performTransaction(transaction, id);
  };

  InMemoryCache.prototype.transformDocument = function (document) {
    if (this.addTypename) {
      var result = this.typenameDocumentCache.get(document);

      if (!result) {
        result = (0, _apolloUtilities.addTypenameToDocument)(document);
        this.typenameDocumentCache.set(document, result);
        this.typenameDocumentCache.set(result, result);
      }

      return result;
    }

    return document;
  };

  InMemoryCache.prototype.broadcastWatches = function () {
    var _this = this;

    if (!this.silenceBroadcast) {
      this.watches.forEach(function (c) {
        return _this.maybeBroadcastWatch(c);
      });
    }
  };

  InMemoryCache.prototype.maybeBroadcastWatch = function (c) {
    c.callback(this.diff({
      query: c.query,
      variables: c.variables,
      previousResult: c.previousResult && c.previousResult(),
      optimistic: c.optimistic
    }));
  };

  return InMemoryCache;
}(_apolloCache.ApolloCache);

exports.InMemoryCache = InMemoryCache;
},{"tslib":"../node_modules/tslib/tslib.es6.js","apollo-cache":"../node_modules/apollo-cache/lib/bundle.esm.js","apollo-utilities":"../node_modules/apollo-utilities/lib/bundle.esm.js","optimism":"../node_modules/optimism/lib/bundle.esm.js","ts-invariant":"../node_modules/ts-invariant/lib/invariant.esm.js"}],"../node_modules/graphql/language/blockString.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dedentBlockStringValue = dedentBlockStringValue;
exports.getBlockStringIndentation = getBlockStringIndentation;
exports.printBlockString = printBlockString;
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */

function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(lines);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }

  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  } // Return a string of the lines joined with U+000A.


  return lines.join('\n');
} // @internal


function getBlockStringIndentation(lines) {
  var commonIndent = null;

  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);

    if (indent === line.length) {
      continue; // skip empty lines
    }

    if (commonIndent === null || indent < commonIndent) {
      commonIndent = indent;

      if (commonIndent === 0) {
        break;
      }
    }
  }

  return commonIndent === null ? 0 : commonIndent;
}

function leadingWhitespace(str) {
  var i = 0;

  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }

  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 */


function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}
},{}],"../node_modules/graphql/language/printer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;

var _visitor = require("./visitor");

var _blockString = require("./blockString");
/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */


function print(ast) {
  return (0, _visitor.visit)(ast, {
    leave: printDocASTReducer
  });
} // TODO: provide better type coverage in future


var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? (0, _blockString.printBlockString)(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return array && array.length !== 0 ? '{\n' + indent(join(array, '\n')) + '\n}' : '';
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */


function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
}

function isMultiline(string) {
  return string.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray && maybeArray.some(isMultiline);
}
},{"./visitor":"../node_modules/graphql/language/visitor.js","./blockString":"../node_modules/graphql/language/blockString.js"}],"../node_modules/apollo-link-http-common/lib/bundle.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwServerError = exports.serializeFetchParameter = exports.selectURI = exports.selectHttpOptionsAndBody = exports.parseAndCheckHttpResponse = exports.fallbackHttpConfig = exports.createSignalIfSupported = exports.checkFetcher = void 0;

var _tslib = require("tslib");

var _printer = require("graphql/language/printer");

var _tsInvariant = require("ts-invariant");

var defaultHttpOptions = {
  includeQuery: true,
  includeExtensions: false
};
var defaultHeaders = {
  accept: '*/*',
  'content-type': 'application/json'
};
var defaultOptions = {
  method: 'POST'
};
var fallbackHttpConfig = {
  http: defaultHttpOptions,
  headers: defaultHeaders,
  options: defaultOptions
};
exports.fallbackHttpConfig = fallbackHttpConfig;

var throwServerError = function (response, result, message) {
  var error = new Error(message);
  error.name = 'ServerError';
  error.response = response;
  error.statusCode = response.status;
  error.result = result;
  throw error;
};

exports.throwServerError = throwServerError;

var parseAndCheckHttpResponse = function (operations) {
  return function (response) {
    return response.text().then(function (bodyText) {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        var parseError = err;
        parseError.name = 'ServerParseError';
        parseError.response = response;
        parseError.statusCode = response.status;
        parseError.bodyText = bodyText;
        return Promise.reject(parseError);
      }
    }).then(function (result) {
      if (response.status >= 300) {
        throwServerError(response, result, "Response not successful: Received status code " + response.status);
      }

      if (!Array.isArray(result) && !result.hasOwnProperty('data') && !result.hasOwnProperty('errors')) {
        throwServerError(response, result, "Server response was missing for query '" + (Array.isArray(operations) ? operations.map(function (op) {
          return op.operationName;
        }) : operations.operationName) + "'.");
      }

      return result;
    });
  };
};

exports.parseAndCheckHttpResponse = parseAndCheckHttpResponse;

var checkFetcher = function (fetcher) {
  if (!fetcher && typeof fetch === 'undefined') {
    var library = 'unfetch';
    if (typeof window === 'undefined') library = 'node-fetch';
    throw "development" === "production" ? new _tsInvariant.InvariantError(1) : new _tsInvariant.InvariantError("\nfetch is not found globally and no fetcher passed, to fix pass a fetch for\nyour environment like https://www.npmjs.com/package/" + library + ".\n\nFor example:\nimport fetch from '" + library + "';\nimport { createHttpLink } from 'apollo-link-http';\n\nconst link = createHttpLink({ uri: '/graphql', fetch: fetch });");
  }
};

exports.checkFetcher = checkFetcher;

var createSignalIfSupported = function () {
  if (typeof AbortController === 'undefined') return {
    controller: false,
    signal: false
  };
  var controller = new AbortController();
  var signal = controller.signal;
  return {
    controller: controller,
    signal: signal
  };
};

exports.createSignalIfSupported = createSignalIfSupported;

var selectHttpOptionsAndBody = function (operation, fallbackConfig) {
  var configs = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }

  var options = (0, _tslib.__assign)({}, fallbackConfig.options, {
    headers: fallbackConfig.headers,
    credentials: fallbackConfig.credentials
  });
  var http = fallbackConfig.http;
  configs.forEach(function (config) {
    options = (0, _tslib.__assign)({}, options, config.options, {
      headers: (0, _tslib.__assign)({}, options.headers, config.headers)
    });
    if (config.credentials) options.credentials = config.credentials;
    http = (0, _tslib.__assign)({}, http, config.http);
  });
  var operationName = operation.operationName,
      extensions = operation.extensions,
      variables = operation.variables,
      query = operation.query;
  var body = {
    operationName: operationName,
    variables: variables
  };
  if (http.includeExtensions) body.extensions = extensions;
  if (http.includeQuery) body.query = (0, _printer.print)(query);
  return {
    options: options,
    body: body
  };
};

exports.selectHttpOptionsAndBody = selectHttpOptionsAndBody;

var serializeFetchParameter = function (p, label) {
  var serialized;

  try {
    serialized = JSON.stringify(p);
  } catch (e) {
    var parseError = "development" === "production" ? new _tsInvariant.InvariantError(2) : new _tsInvariant.InvariantError("Network request failed. " + label + " is not serializable: " + e.message);
    parseError.parseError = e;
    throw parseError;
  }

  return serialized;
};

exports.serializeFetchParameter = serializeFetchParameter;

var selectURI = function (operation, fallbackURI) {
  var context = operation.getContext();
  var contextURI = context.uri;

  if (contextURI) {
    return contextURI;
  } else if (typeof fallbackURI === 'function') {
    return fallbackURI(operation);
  } else {
    return fallbackURI || '/graphql';
  }
};

exports.selectURI = selectURI;
},{"tslib":"../node_modules/tslib/tslib.es6.js","graphql/language/printer":"../node_modules/graphql/language/printer.js","ts-invariant":"../node_modules/ts-invariant/lib/invariant.esm.js"}],"../node_modules/apollo-link-http/lib/bundle.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHttpLink = exports.HttpLink = void 0;

var _tslib = require("tslib");

var _apolloLink = require("apollo-link");

var _apolloLinkHttpCommon = require("apollo-link-http-common");

var createHttpLink = function (linkOptions) {
  if (linkOptions === void 0) {
    linkOptions = {};
  }

  var _a = linkOptions.uri,
      uri = _a === void 0 ? '/graphql' : _a,
      fetcher = linkOptions.fetch,
      includeExtensions = linkOptions.includeExtensions,
      useGETForQueries = linkOptions.useGETForQueries,
      requestOptions = (0, _tslib.__rest)(linkOptions, ["uri", "fetch", "includeExtensions", "useGETForQueries"]);
  (0, _apolloLinkHttpCommon.checkFetcher)(fetcher);

  if (!fetcher) {
    fetcher = fetch;
  }

  var linkConfig = {
    http: {
      includeExtensions: includeExtensions
    },
    options: requestOptions.fetchOptions,
    credentials: requestOptions.credentials,
    headers: requestOptions.headers
  };
  return new _apolloLink.ApolloLink(function (operation) {
    var chosenURI = (0, _apolloLinkHttpCommon.selectURI)(operation, uri);
    var context = operation.getContext();
    var clientAwarenessHeaders = {};

    if (context.clientAwareness) {
      var _a = context.clientAwareness,
          name_1 = _a.name,
          version = _a.version;

      if (name_1) {
        clientAwarenessHeaders['apollographql-client-name'] = name_1;
      }

      if (version) {
        clientAwarenessHeaders['apollographql-client-version'] = version;
      }
    }

    var contextHeaders = (0, _tslib.__assign)({}, clientAwarenessHeaders, context.headers);
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: contextHeaders
    };

    var _b = (0, _apolloLinkHttpCommon.selectHttpOptionsAndBody)(operation, _apolloLinkHttpCommon.fallbackHttpConfig, linkConfig, contextConfig),
        options = _b.options,
        body = _b.body;

    var controller;

    if (!options.signal) {
      var _c = (0, _apolloLinkHttpCommon.createSignalIfSupported)(),
          _controller = _c.controller,
          signal = _c.signal;

      controller = _controller;
      if (controller) options.signal = signal;
    }

    var definitionIsMutation = function (d) {
      return d.kind === 'OperationDefinition' && d.operation === 'mutation';
    };

    if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
      options.method = 'GET';
    }

    if (options.method === 'GET') {
      var _d = rewriteURIForGET(chosenURI, body),
          newURI = _d.newURI,
          parseError = _d.parseError;

      if (parseError) {
        return (0, _apolloLink.fromError)(parseError);
      }

      chosenURI = newURI;
    } else {
      try {
        options.body = (0, _apolloLinkHttpCommon.serializeFetchParameter)(body, 'Payload');
      } catch (parseError) {
        return (0, _apolloLink.fromError)(parseError);
      }
    }

    return new _apolloLink.Observable(function (observer) {
      fetcher(chosenURI, options).then(function (response) {
        operation.setContext({
          response: response
        });
        return response;
      }).then((0, _apolloLinkHttpCommon.parseAndCheckHttpResponse)(operation)).then(function (result) {
        observer.next(result);
        observer.complete();
        return result;
      }).catch(function (err) {
        if (err.name === 'AbortError') return;

        if (err.result && err.result.errors && err.result.data) {
          observer.next(err.result);
        }

        observer.error(err);
      });
      return function () {
        if (controller) controller.abort();
      };
    });
  });
};

exports.createHttpLink = createHttpLink;

function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];

  var addQueryParam = function (key, value) {
    queryParams.push(key + "=" + encodeURIComponent(value));
  };

  if ('query' in body) {
    addQueryParam('query', body.query);
  }

  if (body.operationName) {
    addQueryParam('operationName', body.operationName);
  }

  if (body.variables) {
    var serializedVariables = void 0;

    try {
      serializedVariables = (0, _apolloLinkHttpCommon.serializeFetchParameter)(body.variables, 'Variables map');
    } catch (parseError) {
      return {
        parseError: parseError
      };
    }

    addQueryParam('variables', serializedVariables);
  }

  if (body.extensions) {
    var serializedExtensions = void 0;

    try {
      serializedExtensions = (0, _apolloLinkHttpCommon.serializeFetchParameter)(body.extensions, 'Extensions map');
    } catch (parseError) {
      return {
        parseError: parseError
      };
    }

    addQueryParam('extensions', serializedExtensions);
  }

  var fragment = '',
      preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf('#');

  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }

  var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
  var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
  return {
    newURI: newURI
  };
}

var HttpLink = function (_super) {
  (0, _tslib.__extends)(HttpLink, _super);

  function HttpLink(opts) {
    return _super.call(this, createHttpLink(opts).request) || this;
  }

  return HttpLink;
}(_apolloLink.ApolloLink);

exports.HttpLink = HttpLink;
},{"tslib":"../node_modules/tslib/tslib.es6.js","apollo-link":"../node_modules/apollo-link/lib/bundle.esm.js","apollo-link-http-common":"../node_modules/apollo-link-http-common/lib/bundle.esm.js"}],"../node_modules/apollo-link-error/lib/bundle.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onError = onError;
exports.ErrorLink = void 0;

var _tslib = require("tslib");

var _apolloLink = require("apollo-link");

function onError(errorHandler) {
  return new _apolloLink.ApolloLink(function (operation, forward) {
    return new _apolloLink.Observable(function (observer) {
      var sub;
      var retriedSub;
      var retriedResult;

      try {
        sub = forward(operation).subscribe({
          next: function (result) {
            if (result.errors) {
              retriedResult = errorHandler({
                graphQLErrors: result.errors,
                response: result,
                operation: operation,
                forward: forward
              });

              if (retriedResult) {
                retriedSub = retriedResult.subscribe({
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer)
                });
                return;
              }
            }

            observer.next(result);
          },
          error: function (networkError) {
            retriedResult = errorHandler({
              operation: operation,
              networkError: networkError,
              graphQLErrors: networkError && networkError.result && networkError.result.errors,
              forward: forward
            });

            if (retriedResult) {
              retriedSub = retriedResult.subscribe({
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer)
              });
              return;
            }

            observer.error(networkError);
          },
          complete: function () {
            if (!retriedResult) {
              observer.complete.bind(observer)();
            }
          }
        });
      } catch (e) {
        errorHandler({
          networkError: e,
          operation: operation,
          forward: forward
        });
        observer.error(e);
      }

      return function () {
        if (sub) sub.unsubscribe();
        if (retriedSub) sub.unsubscribe();
      };
    });
  });
}

var ErrorLink = function (_super) {
  (0, _tslib.__extends)(ErrorLink, _super);

  function ErrorLink(errorHandler) {
    var _this = _super.call(this) || this;

    _this.link = onError(errorHandler);
    return _this;
  }

  ErrorLink.prototype.request = function (operation, forward) {
    return this.link.request(operation, forward);
  };

  return ErrorLink;
}(_apolloLink.ApolloLink);

exports.ErrorLink = ErrorLink;
},{"tslib":"../node_modules/tslib/tslib.es6.js","apollo-link":"../node_modules/apollo-link/lib/bundle.esm.js"}],"../node_modules/graphql/jsutils/devAssert.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = devAssert;

function devAssert(condition, message) {
  var booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message);
  }
}
},{}],"../node_modules/graphql/jsutils/defineToJSON.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defineToJSON;

var _nodejsCustomInspectSymbol = _interopRequireDefault(require("./nodejsCustomInspectSymbol"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * The `defineToJSON()` function defines toJSON() and inspect() prototype
 * methods, if no function provided they become aliases for toString().
 */


function defineToJSON(classObject) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : classObject.prototype.toString;
  classObject.prototype.toJSON = fn;
  classObject.prototype.inspect = fn;

  if (_nodejsCustomInspectSymbol.default) {
    classObject.prototype[_nodejsCustomInspectSymbol.default] = fn;
  }
}
},{"./nodejsCustomInspectSymbol":"../node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js"}],"../node_modules/graphql/jsutils/isObjectLike.js":[function(require,module,exports) {
"use strict";

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObjectLike;

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */


function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}
},{}],"../node_modules/graphql/language/location.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = getLocation;
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */

function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}
},{}],"../node_modules/graphql/language/printLocation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printLocation = printLocation;
exports.printSourceLocation = printSourceLocation;

var _location = require("../language/location");
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */


function printLocation(location) {
  return printSourceLocation(location.source, (0, _location.getLocation)(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */


function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var sublineIndex = Math.floor(columnNum / 80);
    var sublineColumnNum = columnNum % 80;
    var sublines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      sublines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), sublines[0]]].concat(sublines.slice(1, sublineIndex + 1).map(function (subline) {
      return ['', subline];
    }), [[' ', whitespace(sublineColumnNum - 1) + '^'], ['', sublines[sublineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return lpad(padLen, prefix) + ' | ' + line;
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}
},{"../language/location":"../node_modules/graphql/language/location.js"}],"../node_modules/graphql/error/GraphQLError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLError = GraphQLError;
exports.printError = printError;

var _isObjectLike = _interopRequireDefault(require("../jsutils/isObjectLike"));

var _location = require("../language/location");

var _printLocation = require("../language/printLocation");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


  var _source = source;

  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;

  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }

      return list;
    }, []);
  }

  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations;

  if (positions && source) {
    _locations = positions.map(function (pos) {
      return (0, _location.getLocation)(source, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push((0, _location.getLocation)(node.loc.source, node.loc.start));
      }

      return list;
    }, []);
  }

  var _extensions = extensions;

  if (_extensions == null && originalError != null) {
    var originalExtensions = originalError.extensions;

    if ((0, _isObjectLike.default)(originalExtensions)) {
      _extensions = originalExtensions;
    }
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_locations)
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(path)
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _extensions || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_extensions)
    }
  }); // Include (non-enumerable) stack trace.

  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}

GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: GraphQLError
  },
  name: {
    value: 'GraphQLError'
  },
  toString: {
    value: function toString() {
      return printError(this);
    }
  }
});
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + (0, _printLocation.printLocation)(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + (0, _printLocation.printSourceLocation)(error.source, location);
    }
  }

  return output;
}
},{"../jsutils/isObjectLike":"../node_modules/graphql/jsutils/isObjectLike.js","../language/location":"../node_modules/graphql/language/location.js","../language/printLocation":"../node_modules/graphql/language/printLocation.js"}],"../node_modules/graphql/error/syntaxError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntaxError = syntaxError;

var _GraphQLError = require("./GraphQLError");
/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */


function syntaxError(source, position, description) {
  return new _GraphQLError.GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
}
},{"./GraphQLError":"../node_modules/graphql/error/GraphQLError.js"}],"../node_modules/graphql/language/kinds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Kind = void 0;
/**
 * The set of allowed kind values for AST nodes.
 */

var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */

exports.Kind = Kind;
},{}],"../node_modules/graphql/jsutils/defineToStringTag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defineToStringTag;
/**
 * The `defineToStringTag()` function checks first to see if the runtime
 * supports the `Symbol` class and then if the `Symbol.toStringTag` constant
 * is defined as a `Symbol` instance. If both conditions are met, the
 * Symbol.toStringTag property is defined as a getter that returns the
 * supplied class constructor's name.
 *
 * @method defineToStringTag
 *
 * @param {Class<any>} classObject a class such as Object, String, Number but
 * typically one of your own creation through the class keyword; `class A {}`,
 * for example.
 */

function defineToStringTag(classObject) {
  if (typeof Symbol === 'function' && Symbol.toStringTag) {
    Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
      get: function get() {
        return this.constructor.name;
      }
    });
  }
}
},{}],"../node_modules/graphql/language/source.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = void 0;

var _devAssert = _interopRequireDefault(require("../jsutils/devAssert"));

var _defineToStringTag = _interopRequireDefault(require("../jsutils/defineToStringTag"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */


var Source = function Source(body, name, locationOffset) {
  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || {
    line: 1,
    column: 1
  };
  this.locationOffset.line > 0 || (0, _devAssert.default)(0, 'line in locationOffset is 1-indexed and must be positive');
  this.locationOffset.column > 0 || (0, _devAssert.default)(0, 'column in locationOffset is 1-indexed and must be positive');
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


exports.Source = Source;
(0, _defineToStringTag.default)(Source);
},{"../jsutils/devAssert":"../node_modules/graphql/jsutils/devAssert.js","../jsutils/defineToStringTag":"../node_modules/graphql/jsutils/defineToStringTag.js"}],"../node_modules/graphql/language/tokenKind.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenKind = void 0;
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */

var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */

exports.TokenKind = TokenKind;
},{}],"../node_modules/graphql/language/lexer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLexer = createLexer;
exports.isPunctuatorToken = isPunctuatorToken;

var _defineToJSON = _interopRequireDefault(require("../jsutils/defineToJSON"));

var _syntaxError = require("../error/syntaxError");

var _blockString = require("./blockString");

var _tokenKind = require("./tokenKind");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */


function createLexer(source, options) {
  var startOfFileToken = new Tok(_tokenKind.TokenKind.SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  };
  return lexer;
}

function advanceLexer() {
  this.lastToken = this.token;
  var token = this.token = this.lookahead();
  return token;
}

function lookahead() {
  var token = this.token;

  if (token.kind !== _tokenKind.TokenKind.EOF) {
    do {
      // Note: next is only mutable during parsing, so we cast to allow this.
      token = token.next || (token.next = readToken(this, token));
    } while (token.kind === _tokenKind.TokenKind.COMMENT);
  }

  return token;
}
/**
 * The return type of createLexer.
 */
// @internal


function isPunctuatorToken(token) {
  var kind = token.kind;
  return kind === _tokenKind.TokenKind.BANG || kind === _tokenKind.TokenKind.DOLLAR || kind === _tokenKind.TokenKind.AMP || kind === _tokenKind.TokenKind.PAREN_L || kind === _tokenKind.TokenKind.PAREN_R || kind === _tokenKind.TokenKind.SPREAD || kind === _tokenKind.TokenKind.COLON || kind === _tokenKind.TokenKind.EQUALS || kind === _tokenKind.TokenKind.AT || kind === _tokenKind.TokenKind.BRACKET_L || kind === _tokenKind.TokenKind.BRACKET_R || kind === _tokenKind.TokenKind.BRACE_L || kind === _tokenKind.TokenKind.PIPE || kind === _tokenKind.TokenKind.BRACE_R;
}
/**
 * Helper function for constructing the Token object.
 */


function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
} // Print a simplified form when appearing in JSON/util.inspect.


(0, _defineToJSON.default)(Tok, function () {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
});

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? _tokenKind.TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;

  if (pos >= bodyLength) {
    return new Tok(_tokenKind.TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = body.charCodeAt(pos); // SourceCharacter

  switch (code) {
    // !
    case 33:
      return new Tok(_tokenKind.TokenKind.BANG, pos, pos + 1, line, col, prev);
    // #

    case 35:
      return readComment(source, pos, line, col, prev);
    // $

    case 36:
      return new Tok(_tokenKind.TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
    // &

    case 38:
      return new Tok(_tokenKind.TokenKind.AMP, pos, pos + 1, line, col, prev);
    // (

    case 40:
      return new Tok(_tokenKind.TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
    // )

    case 41:
      return new Tok(_tokenKind.TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
    // .

    case 46:
      if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
        return new Tok(_tokenKind.TokenKind.SPREAD, pos, pos + 3, line, col, prev);
      }

      break;
    // :

    case 58:
      return new Tok(_tokenKind.TokenKind.COLON, pos, pos + 1, line, col, prev);
    // =

    case 61:
      return new Tok(_tokenKind.TokenKind.EQUALS, pos, pos + 1, line, col, prev);
    // @

    case 64:
      return new Tok(_tokenKind.TokenKind.AT, pos, pos + 1, line, col, prev);
    // [

    case 91:
      return new Tok(_tokenKind.TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
    // ]

    case 93:
      return new Tok(_tokenKind.TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
    // {

    case 123:
      return new Tok(_tokenKind.TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
    // |

    case 124:
      return new Tok(_tokenKind.TokenKind.PIPE, pos, pos + 1, line, col, prev);
    // }

    case 125:
      return new Tok(_tokenKind.TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
    // A-Z _ a-z

    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, pos, line, col, prev);
    // - 0-9

    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, pos, code, line, col, prev);
    // "

    case 34:
      if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
        return readBlockString(source, pos, line, col, prev, lexer);
      }

      return readString(source, pos, line, col, prev);
  }

  throw (0, _syntaxError.syntaxError)(source, pos, unexpectedCharacterMessage(code));
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * character, then returns the position of that character for lexing.
 */


function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;

  while (position < bodyLength) {
    var code = body.charCodeAt(position); // tab | space | comma | BOM

    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }

  return position;
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Tok(_tokenKind.TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw (0, _syntaxError.syntaxError)(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
  }

  return new Tok(isFloat ? _tokenKind.TokenKind.FLOAT : _tokenKind.TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw (0, _syntaxError.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new Tok(_tokenKind.TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw (0, _syntaxError.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw (0, _syntaxError.syntaxError)(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw (0, _syntaxError.syntaxError)(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw (0, _syntaxError.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new Tok(_tokenKind.TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, (0, _blockString.dedentBlockStringValue)(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw (0, _syntaxError.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw (0, _syntaxError.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new Tok(_tokenKind.TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
}
},{"../jsutils/defineToJSON":"../node_modules/graphql/jsutils/defineToJSON.js","../error/syntaxError":"../node_modules/graphql/error/syntaxError.js","./blockString":"../node_modules/graphql/language/blockString.js","./tokenKind":"../node_modules/graphql/language/tokenKind.js"}],"../node_modules/graphql/language/directiveLocation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectiveLocation = void 0;
/**
 * The set of allowed directive location values.
 */

var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */

exports.DirectiveLocation = DirectiveLocation;
},{}],"../node_modules/graphql/language/parser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.parseValue = parseValue;
exports.parseType = parseType;

var _inspect = _interopRequireDefault(require("../jsutils/inspect"));

var _devAssert = _interopRequireDefault(require("../jsutils/devAssert"));

var _defineToJSON = _interopRequireDefault(require("../jsutils/defineToJSON"));

var _syntaxError = require("../error/syntaxError");

var _kinds = require("./kinds");

var _source = require("./source");

var _lexer = require("./lexer");

var _directiveLocation = require("./directiveLocation");

var _tokenKind = require("./tokenKind");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */


function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */


function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind.TokenKind.SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(_tokenKind.TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */


function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind.TokenKind.SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(_tokenKind.TokenKind.EOF);
  return type;
}

var Parser =
/*#__PURE__*/
function () {
  function Parser(source, options) {
    var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
    sourceObj instanceof _source.Source || (0, _devAssert.default)(0, "Must provide Source. Received: ".concat((0, _inspect.default)(sourceObj)));
    this._lexer = (0, _lexer.createLexer)(sourceObj);
    this._options = options || {};
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(_tokenKind.TokenKind.NAME);
    return {
      kind: _kinds.Kind.NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: _kinds.Kind.DOCUMENT,
      definitions: this.many(_tokenKind.TokenKind.SOF, this.parseDefinition, _tokenKind.TokenKind.EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(_tokenKind.TokenKind.NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
      return {
        kind: _kinds.Kind.OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(_tokenKind.TokenKind.NAME)) {
      name = this.parseName();
    }

    return {
      kind: _kinds.Kind.OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(_tokenKind.TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseVariableDefinition, _tokenKind.TokenKind.PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: _kinds.Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind.TokenKind.DOLLAR);
    return {
      kind: _kinds.Kind.VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: _kinds.Kind.SELECTION_SET,
      selections: this.many(_tokenKind.TokenKind.BRACE_L, this.parseSelection, _tokenKind.TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(_tokenKind.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(_tokenKind.TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: _kinds.Kind.FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(_tokenKind.TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(_tokenKind.TokenKind.PAREN_L, item, _tokenKind.TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind.TokenKind.COLON);
    return {
      kind: _kinds.Kind.ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: _kinds.Kind.ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind.TokenKind.SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(_tokenKind.TokenKind.NAME)) {
      return {
        kind: _kinds.Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds.Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (this._options.experimentalFragmentVariables) {
      return {
        kind: _kinds.Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds.Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case _tokenKind.TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case _tokenKind.TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case _tokenKind.TokenKind.INT:
        this._lexer.advance();

        return {
          kind: _kinds.Kind.INT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind.TokenKind.FLOAT:
        this._lexer.advance();

        return {
          kind: _kinds.Kind.FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind.TokenKind.STRING:
      case _tokenKind.TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case _tokenKind.TokenKind.NAME:
        if (token.value === 'true' || token.value === 'false') {
          this._lexer.advance();

          return {
            kind: _kinds.Kind.BOOLEAN,
            value: token.value === 'true',
            loc: this.loc(token)
          };
        } else if (token.value === 'null') {
          this._lexer.advance();

          return {
            kind: _kinds.Kind.NULL,
            loc: this.loc(token)
          };
        }

        this._lexer.advance();

        return {
          kind: _kinds.Kind.ENUM,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind.TokenKind.DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: _kinds.Kind.STRING,
      value: token.value,
      block: token.kind === _tokenKind.TokenKind.BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: _kinds.Kind.LIST,
      values: this.any(_tokenKind.TokenKind.BRACKET_L, item, _tokenKind.TokenKind.BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: _kinds.Kind.OBJECT,
      fields: this.any(_tokenKind.TokenKind.BRACE_L, item, _tokenKind.TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind.TokenKind.COLON);
    return {
      kind: _kinds.Kind.OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(_tokenKind.TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(_tokenKind.TokenKind.AT);
    return {
      kind: _kinds.Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(_tokenKind.TokenKind.BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(_tokenKind.TokenKind.BRACKET_R);
      type = {
        kind: _kinds.Kind.LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(_tokenKind.TokenKind.BANG)) {
      return {
        kind: _kinds.Kind.NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: _kinds.Kind.NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(_tokenKind.TokenKind.STRING) || this.peek(_tokenKind.TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);
    return {
      kind: _kinds.Kind.SCHEMA_DEFINITION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(_tokenKind.TokenKind.COLON);
    var type = this.parseNamedType();
    return {
      kind: _kinds.Kind.OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds.Kind.SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds.Kind.OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var types = [];

    if (this.expectOptionalKeyword('implements')) {
      // Optional leading ampersand
      this.expectOptionalToken(_tokenKind.TokenKind.AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind.TokenKind.AMP) || // Legacy support for the SDL?
      this._options.allowLegacySDLImplementsInterfaces && this.peek(_tokenKind.TokenKind.NAME));
    }

    return types;
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    // Legacy support for the SDL?
    if (this._options.allowLegacySDLEmptyFields && this.peek(_tokenKind.TokenKind.BRACE_L) && this._lexer.lookahead().kind === _tokenKind.TokenKind.BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseFieldDefinition, _tokenKind.TokenKind.BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(_tokenKind.TokenKind.COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds.Kind.FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseInputValueDef, _tokenKind.TokenKind.PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(_tokenKind.TokenKind.COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(_tokenKind.TokenKind.EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: _kinds.Kind.INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds.Kind.INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: _kinds.Kind.UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    var types = [];

    if (this.expectOptionalToken(_tokenKind.TokenKind.EQUALS)) {
      // Optional leading pipe
      this.expectOptionalToken(_tokenKind.TokenKind.PIPE);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind.TokenKind.PIPE));
    }

    return types;
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: _kinds.Kind.ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseEnumValueDefinition, _tokenKind.TokenKind.BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds.Kind.ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseInputValueDef, _tokenKind.TokenKind.BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *   - extend interface Name Directives[Const]? FieldsDefinition
   *   - extend interface Name Directives[Const]
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(_tokenKind.TokenKind.AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: _kinds.Kind.DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    // Optional leading pipe
    this.expectOptionalToken(_tokenKind.TokenKind.PIPE);
    var locations = [];

    do {
      locations.push(this.parseDirectiveLocation());
    } while (this.expectOptionalToken(_tokenKind.TokenKind.PIPE));

    return locations;
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (_directiveLocation.DirectiveLocation[name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in
   * the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    if (!this._options.noLocation) {
      return new Loc(startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing
   * the lexer. Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Expected ".concat(kind, ", found ").concat(getTokenDesc(token)));
  }
  /**
   * If the next token is of the given kind, return that token after advancing
   * the lexer. Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token)));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing
   * the lexer. Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token
   * is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken || this._lexer.token;
    return (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token)));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by
   * the parseFn. This list begins with a lex token of openKind
   * and ends with a lex token of closeKind. Advances the parser
   * to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always
   * return non-empty list that begins with a lex token of openKind and ends
   * with a lex token of closeKind. Advances the parser to the next lex token
   * after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by
   * the parseFn. This list begins with a lex token of openKind
   * and ends with a lex token of closeKind. Advances the parser
   * to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  };

  return Parser;
}();

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
} // Print a simplified form when appearing in JSON/util.inspect.


(0, _defineToJSON.default)(Loc, function () {
  return {
    start: this.start,
    end: this.end
  };
});
/**
 * A helper function to describe a token as a string for debugging
 */

function getTokenDesc(token) {
  var value = token.value;
  return value ? "".concat(token.kind, " \"").concat(value, "\"") : token.kind;
}
},{"../jsutils/inspect":"../node_modules/graphql/jsutils/inspect.js","../jsutils/devAssert":"../node_modules/graphql/jsutils/devAssert.js","../jsutils/defineToJSON":"../node_modules/graphql/jsutils/defineToJSON.js","../error/syntaxError":"../node_modules/graphql/error/syntaxError.js","./kinds":"../node_modules/graphql/language/kinds.js","./source":"../node_modules/graphql/language/source.js","./lexer":"../node_modules/graphql/language/lexer.js","./directiveLocation":"../node_modules/graphql/language/directiveLocation.js","./tokenKind":"../node_modules/graphql/language/tokenKind.js"}],"../node_modules/graphql-tag/src/index.js":[function(require,module,exports) {
var parser = require('graphql/language/parser');

var parse = parser.parse;

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

// A map docString -> graphql document
var docCache = {};

// A map fragmentName -> [normalized source]
var fragmentSourceMap = {};

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

// For testing.
function resetCaches() {
  docCache = {};
  fragmentSourceMap = {};
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
var printFragmentWarnings = true;
function processFragments(ast) {
  var astFragmentMap = {};
  var definitions = [];

  for (var i = 0; i < ast.definitions.length; i++) {
    var fragmentDefinition = ast.definitions[i];

    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

      // We know something about this fragment
      if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }

        fragmentSourceMap[fragmentName][sourceKey] = true;

      } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
        fragmentSourceMap[fragmentName] = {};
        fragmentSourceMap[fragmentName][sourceKey] = true;
      }

      if (!astFragmentMap[sourceKey]) {
        astFragmentMap[sourceKey] = true;
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  }

  ast.definitions = definitions;
  return ast;
}

function disableFragmentWarnings() {
  printFragmentWarnings = false;
}

function stripLoc(doc, removeLocAtThisLevel) {
  var docType = Object.prototype.toString.call(doc);

  if (docType === '[object Array]') {
    return doc.map(function (d) {
      return stripLoc(d, removeLocAtThisLevel);
    });
  }

  if (docType !== '[object Object]') {
    throw new Error('Unexpected input.');
  }

  // We don't want to remove the root loc field so we can use it
  // for fragment substitution (see below)
  if (removeLocAtThisLevel && doc.loc) {
    delete doc.loc;
  }

  // https://github.com/apollographql/graphql-tag/issues/40
  if (doc.loc) {
    delete doc.loc.startToken;
    delete doc.loc.endToken;
  }

  var keys = Object.keys(doc);
  var key;
  var value;
  var valueType;

  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      value = doc[keys[key]];
      valueType = Object.prototype.toString.call(value);

      if (valueType === '[object Object]' || valueType === '[object Array]') {
        doc[keys[key]] = stripLoc(value, true);
      }
    }
  }

  return doc;
}

var experimentalFragmentVariables = false;
function parseDocument(doc) {
  var cacheKey = normalize(doc);

  if (docCache[cacheKey]) {
    return docCache[cacheKey];
  }

  var parsed = parse(doc, { experimentalFragmentVariables: experimentalFragmentVariables });
  if (!parsed || parsed.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  // check that all "new" fragments inside the documents are consistent with
  // existing fragments of the same name
  parsed = processFragments(parsed);
  parsed = stripLoc(parsed, false);
  docCache[cacheKey] = parsed;

  return parsed;
}

function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}

function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
function gql(/* arguments */) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];

  // We always get literals[0] and then matching post literals for each arg given
  var result = (typeof(literals) === "string") ? literals : literals[0];

  for (var i = 1; i < args.length; i++) {
    if (args[i] && args[i].kind && args[i].kind === 'Document') {
      result += args[i].loc.source.body;
    } else {
      result += args[i];
    }

    result += literals[i];
  }

  return parseDocument(result);
}

// Support typescript, which isn't as nice as Babel about default exports
gql.default = gql;
gql.resetCaches = resetCaches;
gql.disableFragmentWarnings = disableFragmentWarnings;
gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

module.exports = gql;

},{"graphql/language/parser":"../node_modules/graphql/language/parser.js"}],"../node_modules/apollo-boost/lib/bundle.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  HttpLink: true,
  gql: true
};
Object.defineProperty(exports, "HttpLink", {
  enumerable: true,
  get: function () {
    return _apolloLinkHttp.HttpLink;
  }
});
Object.defineProperty(exports, "gql", {
  enumerable: true,
  get: function () {
    return _graphqlTag.default;
  }
});
exports.default = void 0;

var _tslib = require("tslib");

var _apolloClient = _interopRequireWildcard(require("apollo-client"));

Object.keys(_apolloClient).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _apolloClient[key];
    }
  });
});

var _apolloLink = require("apollo-link");

Object.keys(_apolloLink).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _apolloLink[key];
    }
  });
});

var _apolloCacheInmemory = require("apollo-cache-inmemory");

Object.keys(_apolloCacheInmemory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _apolloCacheInmemory[key];
    }
  });
});

var _apolloLinkHttp = require("apollo-link-http");

var _apolloLinkError = require("apollo-link-error");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _tsInvariant = require("ts-invariant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PRESET_CONFIG_KEYS = ['request', 'uri', 'credentials', 'headers', 'fetch', 'fetchOptions', 'clientState', 'onError', 'cacheRedirects', 'cache', 'name', 'version', 'resolvers', 'typeDefs', 'fragmentMatcher'];

var DefaultClient = function (_super) {
  (0, _tslib.__extends)(DefaultClient, _super);

  function DefaultClient(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = this;

    if (config) {
      var diff = Object.keys(config).filter(function (key) {
        return PRESET_CONFIG_KEYS.indexOf(key) === -1;
      });

      if (diff.length > 0) {
        "development" === "production" || _tsInvariant.invariant.warn('ApolloBoost was initialized with unsupported options: ' + ("" + diff.join(' ')));
      }
    }

    var request = config.request,
        uri = config.uri,
        credentials = config.credentials,
        headers = config.headers,
        fetch = config.fetch,
        fetchOptions = config.fetchOptions,
        clientState = config.clientState,
        cacheRedirects = config.cacheRedirects,
        errorCallback = config.onError,
        name = config.name,
        version = config.version,
        resolvers = config.resolvers,
        typeDefs = config.typeDefs,
        fragmentMatcher = config.fragmentMatcher;
    var cache = config.cache;
    "development" === "production" ? (0, _tsInvariant.invariant)(!cache || !cacheRedirects, 1) : (0, _tsInvariant.invariant)(!cache || !cacheRedirects, 'Incompatible cache configuration. When not providing `cache`, ' + 'configure the provided instance with `cacheRedirects` instead.');

    if (!cache) {
      cache = cacheRedirects ? new _apolloCacheInmemory.InMemoryCache({
        cacheRedirects: cacheRedirects
      }) : new _apolloCacheInmemory.InMemoryCache();
    }

    var errorLink = errorCallback ? (0, _apolloLinkError.onError)(errorCallback) : (0, _apolloLinkError.onError)(function (_a) {
      var graphQLErrors = _a.graphQLErrors,
          networkError = _a.networkError;

      if (graphQLErrors) {
        graphQLErrors.map(function (_a) {
          var message = _a.message,
              locations = _a.locations,
              path = _a.path;
          return "development" === "production" || _tsInvariant.invariant.warn("[GraphQL error]: Message: " + message + ", Location: " + (locations + ", Path: " + path));
        });
      }

      if (networkError) {
        "development" === "production" || _tsInvariant.invariant.warn("[Network error]: " + networkError);
      }
    });
    var requestHandler = request ? new _apolloLink.ApolloLink(function (operation, forward) {
      return new _apolloLink.Observable(function (observer) {
        var handle;
        Promise.resolve(operation).then(function (oper) {
          return request(oper);
        }).then(function () {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          });
        }).catch(observer.error.bind(observer));
        return function () {
          if (handle) {
            handle.unsubscribe();
          }
        };
      });
    }) : false;
    var httpLink = new _apolloLinkHttp.HttpLink({
      uri: uri || '/graphql',
      fetch: fetch,
      fetchOptions: fetchOptions || {},
      credentials: credentials || 'same-origin',
      headers: headers || {}
    });

    var link = _apolloLink.ApolloLink.from([errorLink, requestHandler, httpLink].filter(function (x) {
      return !!x;
    }));

    var activeResolvers = resolvers;
    var activeTypeDefs = typeDefs;
    var activeFragmentMatcher = fragmentMatcher;

    if (clientState) {
      if (clientState.defaults) {
        cache.writeData({
          data: clientState.defaults
        });
      }

      activeResolvers = clientState.resolvers;
      activeTypeDefs = clientState.typeDefs;
      activeFragmentMatcher = clientState.fragmentMatcher;
    }

    _this = _super.call(this, {
      cache: cache,
      link: link,
      name: name,
      version: version,
      resolvers: activeResolvers,
      typeDefs: activeTypeDefs,
      fragmentMatcher: activeFragmentMatcher
    }) || this;
    return _this;
  }

  return DefaultClient;
}(_apolloClient.default);

var _default = DefaultClient;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","apollo-client":"../node_modules/apollo-client/bundle.esm.js","apollo-link":"../node_modules/apollo-link/lib/bundle.esm.js","apollo-cache-inmemory":"../node_modules/apollo-cache-inmemory/lib/bundle.esm.js","apollo-link-http":"../node_modules/apollo-link-http/lib/bundle.esm.js","apollo-link-error":"../node_modules/apollo-link-error/lib/bundle.esm.js","graphql-tag":"../node_modules/graphql-tag/src/index.js","ts-invariant":"../node_modules/ts-invariant/lib/invariant.esm.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _apolloBoost = _interopRequireWildcard(require("apollo-boost"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    query {\n        posts {\n            title\n            author {\n                name\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query {\n        users {\n            id\n            name\n            email\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var client = new _apolloBoost.default({
  uri: 'http://localhost:4000'
});
var getUsers = (0, _apolloBoost.gql)(_templateObject());
client.query({
  query: getUsers
}).then(function (response) {
  console.log(response.data);
  var html = '<h1>Users</h1>';
  response.data.users.forEach(function (user) {
    html += "\n            <div>\n                <h3>".concat(user.name, "</h3>\n            </div>\n        ");
  });
  document.querySelector('#users').innerHTML = html;
});
var getPosts = (0, _apolloBoost.gql)(_templateObject2());
client.query({
  query: getPosts
}).then(function (response) {
  console.log(response.data);
  var html = '<h1>Posts</h1>';
  response.data.posts.forEach(function (post) {
    html += "\n            <div>\n                <h3>".concat(post.title, ", by: ").concat(post.author.name, "</h3>\n            </div>\n        ");
  });
  document.querySelector('#posts').innerHTML = html;
});
},{"apollo-boost":"../node_modules/apollo-boost/lib/bundle.esm.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50874" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map