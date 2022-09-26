var SampleNameSpace;
(function (SampleNameSpace) {
  var Utils;
  (function (Utils) {
    Utils.getPrefixedName = function (value) {
      return "SamplePrefix_" + value;
    };
    Utils.isString = function (value) {
      return typeof value === "string";
    }
  })(Utils = SampleNameSpace.Utils || (SampleNameSpace.Utils = {}));
})(SampleNameSpace || (SampleNameSpace = {}));
