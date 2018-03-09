'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2;

var _neovim = require('neovim');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var TestPlugin = (_dec = (0, _neovim.Plugin)({ dev: true }), _dec2 = (0, _neovim.Function)('Vsplit', { sync: true }), _dec3 = (0, _neovim.Command)('LongCommand'), _dec4 = (0, _neovim.Command)('UsePromises'), _dec(_class = (_class2 = function () {
  function TestPlugin(nvim) {
    (0, _classCallCheck3.default)(this, TestPlugin);

    this.nvim = nvim;
  }

  (0, _createClass3.default)(TestPlugin, [{
    key: 'splitMe',
    value: function splitMe(args, done) {
      this.nvim.command('vsplit');
    }
  }, {
    key: 'longCommand',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(args) {
        var bufferName;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('Output will be routed to $NVIM_NODE_LOG_FILE');
                _context.next = 3;
                return this.nvim.buffer.name;

              case 3:
                bufferName = _context.sent;
                return _context.abrupt('return', bufferName);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function longCommand(_x) {
        return _ref.apply(this, arguments);
      }

      return longCommand;
    }()
  }, {
    key: 'promiseExample',
    value: function promiseExample() {
      return this.nvim.buffer.name.then(function (name) {
        console.log('Current buffer name is ' + name);
      });
    }
  }]);
  return TestPlugin;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'splitMe', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'splitMe'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'longCommand', [_dec3], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'longCommand'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'promiseExample', [_dec4], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'promiseExample'), _class2.prototype)), _class2)) || _class);
exports.default = TestPlugin;