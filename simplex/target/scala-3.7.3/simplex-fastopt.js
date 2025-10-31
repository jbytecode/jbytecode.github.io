(function(){
'use strict';
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
var $L0;
function $Char(c) {
  this.c = c;
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c);
});
function $valueDescription(arg0) {
  return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))));
}
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException((($valueDescription(arg0) + " cannot be cast to ") + arg1)));
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1);
  }
  $throwClassCastException(arg0, arg1);
}
function $throwArrayIndexOutOFBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))));
}
function $throwArrayStoreException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))));
}
function $throwNegativeArraySizeException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException());
}
function $throwNullPointerException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NullPointerException());
}
function $n(arg0) {
  if ((arg0 === null)) {
    $throwNullPointerException();
  }
  return arg0;
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf();
        } else {
          return $d_jl_Integer.getClassOf();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf();
      } else {
        return $d_jl_Double.getClassOf();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf();
    }
    case "undefined": {
      return $d_jl_Void.getClassOf();
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name;
      } else {
        return $throwNullPointerException();
      }
    }
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.codePointAt__I__I(x0);
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0);
      }
    }
  }
}
function $dp_getChars__I__I__AC__I__V(instance, x0, x1, x2, x3) {
  if (((typeof instance) === "string")) {
    return $f_T__getChars__I__I__AC__I__V(instance, x0, x1, x2, x3);
  } else {
    return instance.getChars__I__I__AC__I__V(x0, x1, x2, x3);
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.hashCode__I.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.indexOf__I__I(x0);
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.repeat__I__T(x0);
  }
}
function $dp_split__T__I__AT(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__split__T__I__AT(instance, x0, x1);
  } else {
    return instance.split__T__I__AT(x0, x1);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $dp_trim__T(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__trim__T(instance);
  } else {
    return instance.trim__T();
  }
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
function $charAt(arg0, arg1) {
  var r = arg0.charCodeAt(arg1);
  if ((r !== r)) {
    throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_StringIndexOutOfBoundsException__I__(new $c_jl_StringIndexOutOfBoundsException(), arg1));
  } else {
    return r;
  }
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__RTLong(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__RTLong__O__D(arg0, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOFBoundsException(null);
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
function $systemArraycopy(arg0, arg1, arg2, arg3, arg4) {
  arg0.copyTo(arg1, arg2, arg3, arg4);
}
function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
  if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
    $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4);
  } else {
    var srcArray = arg0.u;
    $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)]);
    }
  }
}
function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
  var srcData = (arg0 && arg0.$classData);
  if ((srcData === (arg2 && arg2.$classData))) {
    if ((srcData && srcData.isArrayClass)) {
      $systemArraycopy(arg0, arg1, arg2, arg3, arg4);
    } else {
      $throwArrayStoreException(null);
    }
  } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
    $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4);
  } else {
    $throwArrayStoreException(null);
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"));
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"));
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"));
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"));
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"));
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"));
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"));
}
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"));
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"));
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"));
}
/** @constructor */
function $c_O() {
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that);
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T((i >>> 0.0).toString(16)));
});
$c_O.prototype.toString = (function() {
  return this.toString__T();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null;
    }
  } else {
    this.u = arg;
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice());
});
function $ah_O() {
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false;
    }
  } else {
    this.u = arg;
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Uint16Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int8Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int16Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int32Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0;
    }
  } else {
    this.u = arg;
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float32Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float64Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice());
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0);
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = ({});
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass);
  }
  return this;
});
$TypeData.prototype.initClass = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (kindOrCtor === 2);
  this.name = fullName;
  this.isInterface = (kindOrCtor === 1);
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this;
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      if ((arg < 0)) {
        $throwNegativeArraySizeException();
      }
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null;
      }
    } else {
      this.u = arg;
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOFBoundsException(i);
    }
    if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
      $throwArrayStoreException(v);
    }
    this.u[i] = v;
  });
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice());
  });
  ArrayClass.prototype.$classData = this;
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this);
  }
  return this._arrayOf;
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this);
  }
  return this._classOf;
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that));
});
$TypeData.prototype.cast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name);
  }
  return obj;
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null);
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null);
});
$TypeData.prototype.newArray = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.getArrayOf().constr)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))));
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth);
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Z", depth);
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "C", depth);
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "B", depth);
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "S", depth);
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "I", depth);
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "J", depth);
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "F", depth);
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "D", depth);
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = ({});
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_jl_System$Streams$() {
  this.jl_System$Streams$__f_out = null;
  this.jl_System$Streams$__f_err = null;
  $n_jl_System$Streams$ = this;
  this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
  this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true);
}
$c_jl_System$Streams$.prototype = new $h_O();
$c_jl_System$Streams$.prototype.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $c_jl_System$Streams$.prototype;
var $d_jl_System$Streams$ = new $TypeData().initClass($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  jl_System$Streams$: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.20.1";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.jl_System$SystemProperties$__f_dict = null;
  this.jl_System$SystemProperties$__f_properties = null;
  $n_jl_System$SystemProperties$ = this;
  this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jl_System$SystemProperties$__f_properties = null;
}
$c_jl_System$SystemProperties$.prototype = new $h_O();
$c_jl_System$SystemProperties$.prototype.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $c_jl_System$SystemProperties$.prototype;
$c_jl_System$SystemProperties$.prototype.getProperty__T__T__T = (function(key, default$1) {
  if ((this.jl_System$SystemProperties$__f_dict !== null)) {
    var dict = this.jl_System$SystemProperties$__f_dict;
    return $as_T(($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1));
  } else {
    return $n(this.jl_System$SystemProperties$__f_properties).getProperty__T__T__T(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().initClass($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  jl_System$SystemProperties$: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
  $n_jl_Utils$Cache$ = this;
  this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty;
}
$c_jl_Utils$Cache$.prototype = new $h_O();
$c_jl_Utils$Cache$.prototype.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $c_jl_Utils$Cache$.prototype;
var $d_jl_Utils$Cache$ = new $TypeData().initClass($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  jl_Utils$Cache$: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
function $as_jl_Void(obj) {
  return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"));
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)));
}
function $asArrayOf_jl_Void(obj, depth) {
  return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth));
}
var $d_jl_Void = new $TypeData().initClass(0, "java.lang.Void", ({
  jl_Void: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  $n(array);
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
function $p_jl_reflect_Array$__rec$1__jl_Class__I__AI__O($thiz, componentType, offset, dimensions$1) {
  var length = $n(dimensions$1).get(offset);
  var result = $n(componentType).data.newArray(length);
  var innerOffset = ((1 + offset) | 0);
  if ((innerOffset < $n(dimensions$1).u.length)) {
    var result2 = $asArrayOf_O(result, 1);
    var this$1 = $n(componentType);
    var innerComponentType = this$1.data.getComponentType();
    var i = 0;
    while ((i !== length)) {
      $n(result2).set(i, $p_jl_reflect_Array$__rec$1__jl_Class__I__AI__O($thiz, innerComponentType, innerOffset, dimensions$1));
      i = ((1 + i) | 0);
    }
  }
  return result;
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$c_jl_reflect_Array$.prototype = new $h_O();
$c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $c_jl_reflect_Array$.prototype;
$c_jl_reflect_Array$.prototype.newInstance__jl_Class__AI__O = (function(componentType, dimensions) {
  var len = $n(dimensions).u.length;
  if ((len === 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  var outermostComponentType = componentType;
  var i = 1;
  while ((i !== len)) {
    var componentType$1 = outermostComponentType;
    var this$1 = $n(componentType$1).data.newArray(0);
    outermostComponentType = $objectGetClass(this$1);
    i = ((1 + i) | 0);
  }
  return $p_jl_reflect_Array$__rec$1__jl_Class__I__AI__O(this, outermostComponentType, 0, dimensions);
});
$c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
  if ((array instanceof $ac_O)) {
    var x2 = $asArrayOf_O(array, 1);
    return $n(x2).u.length;
  } else if ((array instanceof $ac_Z)) {
    var x3 = $asArrayOf_Z(array, 1);
    return $n(x3).u.length;
  } else if ((array instanceof $ac_C)) {
    var x4 = $asArrayOf_C(array, 1);
    return $n(x4).u.length;
  } else if ((array instanceof $ac_B)) {
    var x5 = $asArrayOf_B(array, 1);
    return $n(x5).u.length;
  } else if ((array instanceof $ac_S)) {
    var x6 = $asArrayOf_S(array, 1);
    return $n(x6).u.length;
  } else if ((array instanceof $ac_I)) {
    var x7 = $asArrayOf_I(array, 1);
    return $n(x7).u.length;
  } else if ((array instanceof $ac_J)) {
    var x8 = $asArrayOf_J(array, 1);
    return $n(x8).u.length;
  } else if ((array instanceof $ac_F)) {
    var x9 = $asArrayOf_F(array, 1);
    return $n(x9).u.length;
  } else if ((array instanceof $ac_D)) {
    var x10 = $asArrayOf_D(array, 1);
    return $n(x10).u.length;
  } else {
    $p_jl_reflect_Array$__mismatch__O__E(this, array);
  }
});
var $d_jl_reflect_Array$ = new $TypeData().initClass($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  jl_reflect_Array$: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$c_ju_Arrays$.prototype = new $h_O();
$c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $c_ju_Arrays$.prototype;
$c_ju_Arrays$.prototype.binarySearch__AI__I__I = (function(a, key) {
  var startIndex = 0;
  var endIndex = $n(a).u.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = $n(a).get(mid);
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
$c_ju_Arrays$.prototype.equals__AJ__AJ__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var t = $n(a).get(i$1);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var i$2 = i;
    var t$1 = $n(b).get(i$2);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AI__AI__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AS__AS__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AC__AC__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AB__AB__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AZ__AZ__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AD__AD__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!Object.is(a$1, b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.equals__AF__AF__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!Object.is(a$1, b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.fill__AO__O__V = (function(a, value) {
  var toIndex = $n(a).u.length;
  var i = 0;
  while ((i !== toIndex)) {
    var i$1 = i;
    $n(a).set(i$1, value);
    i = ((1 + i) | 0);
  }
});
$c_ju_Arrays$.prototype.copyOf__AO__I__AO = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var this$3 = $n(original);
  var clazz = $objectGetClass(this$3);
  var componentType = clazz.data.getComponentType();
  var ret = $asArrayOf_O($n(componentType).data.newArray(newLength), 1);
  $systemArraycopyRefs($n(original), 0, $n(ret), 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOf__AO__I__jl_Class__AO = (function(original, newLength, newType) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var this$4 = $n(newType);
  var componentType = this$4.data.getComponentType();
  var ret = $asArrayOf_O($n(componentType).data.newArray(newLength), 1);
  $systemArraycopyRefs($n(original), 0, $n(ret), 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOf__AB__I__AB = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_B(newLength);
  $systemArraycopy($n(original), 0, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOf__AS__I__AS = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_S(newLength);
  $systemArraycopy($n(original), 0, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOf__AI__I__AI = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_I(newLength);
  $systemArraycopy($n(original), 0, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOf__AJ__I__AJ = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_J(newLength);
  $systemArraycopy($n(original), 0, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOf__AC__I__AC = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_C(newLength);
  $systemArraycopy($n(original), 0, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOf__AF__I__AF = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_F(newLength);
  $systemArraycopy($n(original), 0, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOf__AD__I__AD = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_D(newLength);
  $systemArraycopy($n(original), 0, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOf__AZ__I__AZ = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_Z(newLength);
  $systemArraycopy($n(original), 0, ret, 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOfRange__AO__I__I__AO = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = $n(original).u.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var this$3 = $n(original);
  var clazz = $objectGetClass(this$3);
  var componentType = clazz.data.getComponentType();
  var ret = $asArrayOf_O($n(componentType).data.newArray(retLength), 1);
  $systemArraycopyRefs($n(original), from, $n(ret), 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().initClass($c_ju_Arrays$, "java.util.Arrays$", ({
  ju_Arrays$: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $is_ju_Formattable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.ju_Formattable)));
}
function $as_ju_Formattable(obj) {
  return (($is_ju_Formattable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.util.Formattable"));
}
function $isArrayOf_ju_Formattable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_Formattable)));
}
function $asArrayOf_ju_Formattable(obj, depth) {
  return (($isArrayOf_ju_Formattable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.util.Formattable;", depth));
}
/** @constructor */
function $c_ju_Formatter$() {
  this.ju_Formatter$__f_java$util$Formatter$$FormatSpecifier = null;
  this.ju_Formatter$__f_java$util$Formatter$$ConversionsIllegalFlags = null;
  $n_ju_Formatter$ = this;
  this.ju_Formatter$__f_java$util$Formatter$$FormatSpecifier = new RegExp("(?:(\\d+)\\$)?([-#+ 0,\\(<]*)(\\d+)?(?:\\.(\\d+))?[%A-Za-z]", "g");
  this.ju_Formatter$__f_java$util$Formatter$$ConversionsIllegalFlags = new $ac_I(new Int32Array([96, 126, 638, 770, 32, 256, 2, 126, (-1), (-1), (-1), (-1), (-1), (-1), 800, (-1), (-1), (-1), 124, (-1), (-1), (-1), (-1), 544, (-1), (-1)]));
}
$c_ju_Formatter$.prototype = new $h_O();
$c_ju_Formatter$.prototype.constructor = $c_ju_Formatter$;
/** @constructor */
function $h_ju_Formatter$() {
}
$h_ju_Formatter$.prototype = $c_ju_Formatter$.prototype;
$c_ju_Formatter$.prototype.java$util$Formatter$$strOfZeros__I__T = (function(count) {
  if ((count <= 20)) {
    if ((count > 20)) {
      $charAt("00000000000000000000", count);
    }
    if ((count < 0)) {
      $charAt("00000000000000000000", (-1));
    }
    return $as_T("00000000000000000000".substring(0, count));
  } else {
    var result = "";
    var remaining = count;
    while ((remaining > 20)) {
      result = (result + "00000000000000000000");
      remaining = (((-20) + remaining) | 0);
    }
    var $x_1 = result;
    var endIndex = remaining;
    if ((endIndex > 20)) {
      $charAt("00000000000000000000", endIndex);
    }
    if ((endIndex < 0)) {
      $charAt("00000000000000000000", (-1));
    }
    return (("" + $x_1) + $as_T("00000000000000000000".substring(0, endIndex)));
  }
});
$c_ju_Formatter$.prototype.java$util$Formatter$$numberToDecimal__D__ju_Formatter$Decimal = (function(x) {
  if ((x === 0.0)) {
    var negative = ((1.0 / x) < 0.0);
    return new $c_ju_Formatter$Decimal(negative, "0", 0);
  } else {
    var negative$2 = (x < 0.0);
    var d = (negative$2 ? (-x) : x);
    var s = ("" + d);
    var ePos = $f_T__indexOf__I__I(s, 101);
    if ((ePos < 0)) {
      var e = 0;
    } else {
      var $x_2 = parseInt;
      var beginIndex = ((1 + ePos) | 0);
      if (((beginIndex < 0) || (beginIndex > s.length))) {
        $charAt(s, beginIndex);
      }
      var $x_1 = $x_2($as_T(s.substring(beginIndex)));
      var e = $uI($x_1);
    }
    var significandEnd = ((ePos < 0) ? s.length : ePos);
    var dotPos = $f_T__indexOf__I__I(s, 46);
    if ((dotPos < 0)) {
      if ((significandEnd > s.length)) {
        $charAt(s, significandEnd);
      }
      if ((significandEnd < 0)) {
        $charAt(s, (-1));
      }
      var unscaledValue = $as_T(s.substring(0, significandEnd));
      var scale = ((-e) | 0);
      return new $c_ju_Formatter$Decimal(negative$2, unscaledValue, scale);
    } else {
      if ((dotPos > s.length)) {
        $charAt(s, dotPos);
      }
      if ((dotPos < 0)) {
        $charAt(s, (-1));
      }
      var $x_3 = $as_T(s.substring(0, dotPos));
      var beginIndex$1 = ((1 + dotPos) | 0);
      if ((beginIndex$1 < 0)) {
        $charAt(s, beginIndex$1);
      }
      if ((significandEnd > s.length)) {
        $charAt(s, significandEnd);
      }
      if ((significandEnd < beginIndex$1)) {
        $charAt(s, (-1));
      }
      var digits = (("" + $x_3) + $as_T(s.substring(beginIndex$1, significandEnd)));
      var digitsLen = digits.length;
      var i = 0;
      while (true) {
        if ((i < digitsLen)) {
          var index = i;
          var $x_4 = ($charAt(digits, index) === 48);
        } else {
          var $x_4 = false;
        }
        if ($x_4) {
          i = ((1 + i) | 0);
        } else {
          break;
        }
      }
      var beginIndex$2 = i;
      if (((beginIndex$2 < 0) || (beginIndex$2 > digits.length))) {
        $charAt(digits, beginIndex$2);
      }
      var unscaledValue$2 = $as_T(digits.substring(beginIndex$2));
      var scale$2 = ((((-e) | 0) + ((significandEnd - ((1 + dotPos) | 0)) | 0)) | 0);
      return new $c_ju_Formatter$Decimal(negative$2, unscaledValue$2, scale$2);
    }
  }
});
$c_ju_Formatter$.prototype.java$util$Formatter$$bigDecimalToDecimal__Ljava_math_BigDecimal__ju_Formatter$Decimal = (function(x) {
  var unscaledValueWithSign = $n($n(x).unscaledValue__Ljava_math_BigInteger()).toString__T();
  if ((unscaledValueWithSign === "0")) {
    return new $c_ju_Formatter$Decimal(false, "0", 0);
  } else {
    var this$2 = $n(unscaledValueWithSign);
    var negative = ($charAt(this$2, 0) === 45);
    if (negative) {
      var this$3 = $n(unscaledValueWithSign);
      if ((this$3.length < 1)) {
        $charAt(this$3, 1);
      }
      var unscaledValue = $as_T(this$3.substring(1));
    } else {
      var unscaledValue = unscaledValueWithSign;
    }
    var scale = $n(x).scale__I();
    return new $c_ju_Formatter$Decimal(negative, unscaledValue, scale);
  }
});
var $d_ju_Formatter$ = new $TypeData().initClass($c_ju_Formatter$, "java.util.Formatter$", ({
  ju_Formatter$: 1
}));
var $n_ju_Formatter$;
function $m_ju_Formatter$() {
  if ((!$n_ju_Formatter$)) {
    $n_ju_Formatter$ = new $c_ju_Formatter$();
  }
  return $n_ju_Formatter$;
}
function $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal($thiz, roundingPos) {
  var digits = $thiz.ju_Formatter$Decimal__f_unscaledValue;
  var this$1 = $n(digits);
  var digitsLen = this$1.length;
  if ((roundingPos < 0)) {
    var negative = $thiz.ju_Formatter$Decimal__f_negative;
    return new $c_ju_Formatter$Decimal(negative, "0", 0);
  } else if ((roundingPos >= digitsLen)) {
    return $thiz;
  } else {
    var this$3 = $n(digits);
    if (($charAt(this$3, roundingPos) < 53)) {
      if ((roundingPos === 0)) {
        var negative$1 = $thiz.ju_Formatter$Decimal__f_negative;
        return new $c_ju_Formatter$Decimal(negative$1, "0", 0);
      } else {
        var $x_1 = $thiz.ju_Formatter$Decimal__f_negative;
        var this$5 = $n(digits);
        if ((roundingPos > this$5.length)) {
          $charAt(this$5, roundingPos);
        }
        if ((roundingPos < 0)) {
          $charAt(this$5, (-1));
        }
        return new $c_ju_Formatter$Decimal($x_1, $as_T(this$5.substring(0, roundingPos)), (($thiz.ju_Formatter$Decimal__f_scale - ((digitsLen - roundingPos) | 0)) | 0));
      }
    } else {
      var lastNonNinePos = (((-1) + roundingPos) | 0);
      while (true) {
        if ((lastNonNinePos >= 0)) {
          var this$6 = $n(digits);
          var index = lastNonNinePos;
          var $x_2 = ($charAt(this$6, index) === 57);
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          lastNonNinePos = (((-1) + lastNonNinePos) | 0);
        } else {
          break;
        }
      }
      if ((lastNonNinePos < 0)) {
        var newUnscaledValue = "1";
      } else {
        var this$7 = $n(digits);
        var endIndex = lastNonNinePos;
        if ((endIndex > this$7.length)) {
          $charAt(this$7, endIndex);
        }
        if ((endIndex < 0)) {
          $charAt(this$7, (-1));
        }
        var $x_3 = $as_T(this$7.substring(0, endIndex));
        var this$8 = $n(digits);
        var index$1 = lastNonNinePos;
        var newUnscaledValue = ($x_3 + $cToS((65535 & ((1 + $charAt(this$8, index$1)) | 0))));
      }
      var pos = ((1 + lastNonNinePos) | 0);
      var newScale = (($thiz.ju_Formatter$Decimal__f_scale - ((digitsLen - pos) | 0)) | 0);
      return new $c_ju_Formatter$Decimal($thiz.ju_Formatter$Decimal__f_negative, newUnscaledValue, newScale);
    }
  }
}
/** @constructor */
function $c_ju_Formatter$Decimal(negative, unscaledValue, scale) {
  this.ju_Formatter$Decimal__f_negative = false;
  this.ju_Formatter$Decimal__f_unscaledValue = null;
  this.ju_Formatter$Decimal__f_scale = 0;
  this.ju_Formatter$Decimal__f_negative = negative;
  this.ju_Formatter$Decimal__f_unscaledValue = unscaledValue;
  this.ju_Formatter$Decimal__f_scale = scale;
}
$c_ju_Formatter$Decimal.prototype = new $h_O();
$c_ju_Formatter$Decimal.prototype.constructor = $c_ju_Formatter$Decimal;
/** @constructor */
function $h_ju_Formatter$Decimal() {
}
$h_ju_Formatter$Decimal.prototype = $c_ju_Formatter$Decimal.prototype;
$c_ju_Formatter$Decimal.prototype.isZero__Z = (function() {
  return (this.ju_Formatter$Decimal__f_unscaledValue === "0");
});
$c_ju_Formatter$Decimal.prototype.round__I__ju_Formatter$Decimal = (function(precision) {
  $m_ju_Formatter$();
  var condition = (precision > 0);
  if ((!condition)) {
    throw new $c_jl_AssertionError("Decimal.round() called with non-positive precision");
  }
  return $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, precision);
});
$c_ju_Formatter$Decimal.prototype.setScale__I__ju_Formatter$Decimal = (function(newScale) {
  var this$1 = $n(this.ju_Formatter$Decimal__f_unscaledValue);
  var roundingPos = ((((this$1.length + newScale) | 0) - this.ju_Formatter$Decimal__f_scale) | 0);
  var rounded = $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, roundingPos);
  $m_ju_Formatter$();
  var condition = ($n(rounded).isZero__Z() || ($n(rounded).ju_Formatter$Decimal__f_scale <= newScale));
  if ((!condition)) {
    throw new $c_jl_AssertionError("roundAtPos returned a non-zero value with a scale too large");
  }
  return (($n(rounded).isZero__Z() || ($n(rounded).ju_Formatter$Decimal__f_scale === newScale)) ? rounded : new $c_ju_Formatter$Decimal(this.ju_Formatter$Decimal__f_negative, (("" + $n(rounded).ju_Formatter$Decimal__f_unscaledValue) + $m_ju_Formatter$().java$util$Formatter$$strOfZeros__I__T(((newScale - $n(rounded).ju_Formatter$Decimal__f_scale) | 0))), newScale));
});
$c_ju_Formatter$Decimal.prototype.toString__T = (function() {
  return (((((("Decimal(" + this.ju_Formatter$Decimal__f_negative) + ", ") + this.ju_Formatter$Decimal__f_unscaledValue) + ", ") + this.ju_Formatter$Decimal__f_scale) + ")");
});
var $d_ju_Formatter$Decimal = new $TypeData().initClass($c_ju_Formatter$Decimal, "java.util.Formatter$Decimal", ({
  ju_Formatter$Decimal: 1
}));
/** @constructor */
function $c_ju_Formatter$LocaleInfo() {
}
$c_ju_Formatter$LocaleInfo.prototype = new $h_O();
$c_ju_Formatter$LocaleInfo.prototype.constructor = $c_ju_Formatter$LocaleInfo;
/** @constructor */
function $h_ju_Formatter$LocaleInfo() {
}
$h_ju_Formatter$LocaleInfo.prototype = $c_ju_Formatter$LocaleInfo.prototype;
function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.ju_regex_PatternCompiler__f_pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp.exec($thiz.ju_regex_PatternCompiler__f_pattern);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var t = $as_T(x);
      var this$3 = $n(t);
      var end = this$3.length;
      var i = 0;
      while ((i < end)) {
        var value = i;
        var $x_2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
        var $x_1 = $m_ju_regex_PatternCompiler$();
        var this$5 = $n(t);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_2 | $x_1.java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$5, value)));
        i = ((1 + i) | 0);
      }
    }
    if (((256 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags);
    }
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var t$1 = $as_T(x$1);
      var this$8 = $n(t$1);
      var end$1 = this$8.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var value$1 = i$1;
        var $x_4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
        var $x_3 = $m_ju_regex_PatternCompiler$();
        var this$10 = $n(t$1);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_4 & (~$x_3.java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$10, value$1))));
        i$1 = ((1 + i$1) | 0);
      }
    }
    var $x_5 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var x$2 = m[0];
    var this$12 = $n($as_T(x$2));
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($x_5 + this$12.length) | 0);
  }
}
function $p_ju_regex_PatternCompiler__literal__T__T($thiz, s) {
  var result = "";
  var this$1 = $n(s);
  var len = this$1.length;
  var i = 0;
  while ((i !== len)) {
    var cp = $f_T__codePointAt__I__I($n(s), i);
    result = (("" + result) + $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp));
    i = ((i + ((cp >= 65536) ? 2 : 1)) | 0);
  }
  return result;
}
function $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp) {
  var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(cp);
  if ((cp < 128)) {
    switch (cp) {
      case 94:
      case 36:
      case 92:
      case 46:
      case 42:
      case 43:
      case 63:
      case 40:
      case 41:
      case 91:
      case 93:
      case 123:
      case 125:
      case 124: {
        return ("\\" + s);
        break;
      }
      default: {
        return (((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 2) ? s : (((cp >= 65) && (cp <= 90)) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + cp) | 0))) + "]") : (((cp >= 97) && (cp <= 122)) ? ((("[" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + cp) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  while (true) {
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var x1 = $charAt(this$2, index);
      switch (x1) {
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          continue;
          break;
        }
        case 35: {
          $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V();
          continue;
          break;
        }
      }
    }
    break;
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((startOfRepeater === len)) {
    var repeaterDispatchChar = 46;
  } else {
    var this$2 = $n(pattern);
    var repeaterDispatchChar = $charAt(this$2, startOfRepeater);
  }
  if (((((repeaterDispatchChar === 63) || (repeaterDispatchChar === 42)) || (repeaterDispatchChar === 43)) || (repeaterDispatchChar === 123))) {
    var this$3 = $n(compiledToken);
    var x1 = $charAt(this$3, 0);
    switch (x1) {
      case 94:
      case 36: {
        var isTokenAnAssertion = true;
        break;
      }
      case 40: {
        var this$4 = $n(compiledToken);
        if (($charAt(this$4, 1) === 63)) {
          var this$5 = $n(compiledToken);
          var isTokenAnAssertion = ($charAt(this$5, 2) !== 58);
        } else {
          var isTokenAnAssertion = false;
        }
        break;
      }
      case 92: {
        var this$6 = $n(compiledToken);
        var c = $charAt(this$6, 1);
        var isTokenAnAssertion = ((c === 98) || (c === 66));
        break;
      }
      default: {
        var isTokenAnAssertion = false;
      }
    }
    var wrappedToken = (isTokenAnAssertion ? (("(?:" + compiledToken) + ")") : compiledToken);
    var baseRepeater = $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar);
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$7 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var x1$2 = $charAt(this$7, index);
      switch (x1$2) {
        case 43: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, wrappedToken, baseRepeater);
          break;
        }
        case 63: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return ((("" + wrappedToken) + baseRepeater) + "?");
          break;
        }
        default: {
          return (("" + wrappedToken) + baseRepeater);
        }
      }
    } else {
      return (("" + wrappedToken) + baseRepeater);
    }
  } else {
    return compiledToken;
  }
}
function $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if ((repeaterDispatchChar === 123)) {
    var this$1 = $n(pattern);
    var len = this$1.length;
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      var $x_1 = true;
    } else {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = (!((c >= 48) && (c <= 57)));
    }
    if ($x_1) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    while (true) {
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
        var this$4 = $n(pattern);
        var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var c$1 = $charAt(this$4, index$1);
        var $x_2 = ((c$1 >= 48) && (c$1 <= 57));
      } else {
        var $x_2 = false;
      }
      if ($x_2) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      } else {
        break;
      }
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    var this$6 = $n(pattern);
    var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    if (($charAt(this$6, index$2) === 44)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      while (true) {
        if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
          var this$7 = $n(pattern);
          var index$3 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c$2 = $charAt(this$7, index$3);
          var $x_3 = ((c$2 >= 48) && (c$2 <= 57));
        } else {
          var $x_3 = false;
        }
        if ($x_3) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        } else {
          break;
        }
      }
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      var $x_4 = true;
    } else {
      var this$9 = $n(pattern);
      var index$4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var $x_4 = ($charAt(this$9, index$4) !== 125);
    }
    if ($x_4) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  }
  return $as_T(pattern.substring(startOfRepeater, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex));
}
function $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken, baseRepeater) {
  var end = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length);
  var i = 0;
  while ((i < end)) {
    var value = i;
    var mapped = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[value]);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[value] = ((1 + mapped) | 0);
    }
    i = ((1 + i) | 0);
  }
  var amendedToken = $as_T(compiledToken.replace($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp, ((arg1$2, arg2$2, arg3$2) => {
    var arg1 = $as_T(arg1$2);
    var arg2 = $as_T(arg2$2);
    var arg3 = $as_T(arg3$2);
    var this$3 = $n(arg2);
    if ((((this$3.length % 2) | 0) === 0)) {
      return arg1;
    } else {
      var groupNumber = $uI(parseInt(arg3, 10));
      return ((groupNumber > compiledGroupCountBeforeThisToken) ? (("" + arg2) + ((1 + groupNumber) | 0)) : arg1);
    }
  })));
  $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
}
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  if ((((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0) === len)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\ at end of pattern");
  }
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  var this$2 = $n(pattern);
  var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  var dispatchChar = $charAt(this$2, index);
  switch (dispatchChar) {
    case 100:
    case 68:
    case 104:
    case 72:
    case 115:
    case 83:
    case 118:
    case 86:
    case 119:
    case 87:
    case 112:
    case 80: {
      var cls = $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar);
      var x1$2 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
          break;
        }
        case 1: {
          return (("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
          break;
        }
        case 2: {
          return (("[" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "]");
          break;
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
          break;
        }
        default: {
          throw new $c_jl_AssertionError(x1$2);
        }
      }
      break;
    }
    case 98: {
      if (($as_T(pattern.substring($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "b{g}")) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\b{g} is not supported");
      } else if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\B with UNICODE_CASE", "2018");
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return "\\B";
      }
      break;
    }
    case 65: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "^";
      break;
    }
    case 71: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\G in the middle of a pattern is not supported");
      break;
    }
    case 90: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var lineTerminator = (((1 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])");
      return (("(?=" + lineTerminator) + "?$)");
      break;
    }
    case 122: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "$";
      break;
    }
    case 82: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "(?:\r\n|[\n-\r\u0085\u2028\u2029])";
      break;
    }
    case 88: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\X is not supported");
      break;
    }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57: {
      var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var end = ((1 + start) | 0);
      while (true) {
        if ((end !== len)) {
          var this$7 = $n(pattern);
          var index$1 = end;
          var c = $charAt(this$7, index$1);
          var $x_2 = ((c >= 48) && (c <= 57));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          var s = $as_T(pattern.substring(start, ((1 + end) | 0)));
          var $x_1 = ($uI(parseInt(s, 10)) <= (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          end = ((1 + end) | 0);
        } else {
          break;
        }
      }
      var groupString = $as_T(pattern.substring(start, end));
      var groupNumber = $uI(parseInt(groupString, 10));
      if ((groupNumber > (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
      }
      var compiledGroupNumber = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber]);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
      return (("(?:\\" + compiledGroupNumber) + ")");
      break;
    }
    case 107: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
        var $x_3 = true;
      } else {
        var this$11 = $n(pattern);
        var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var $x_3 = ($charAt(this$11, index$2) !== 60);
      }
      if ($x_3) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\k is not followed by '<' for named capturing group");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var groupName = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
      var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
      if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, groupName)))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
      }
      var groupNumber$2 = $uI(dict[groupName]);
      var compiledGroupNumber$2 = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber$2]);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (("(?:\\" + compiledGroupNumber$2) + ")");
      break;
    }
    case 81: {
      var start$2 = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var this$13 = $n(pattern);
      var end$2 = $uI(this$13.indexOf("\\E", start$2));
      if ((end$2 < 0)) {
        var this$14 = $n(pattern);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = this$14.length;
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2)));
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end$2) | 0);
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2, end$2)));
      }
      break;
    }
    default: {
      return $p_ju_regex_PatternCompiler__literal__I__T($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz));
    }
  }
}
function $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
  switch (x1) {
    case 48: {
      return $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz);
      break;
    }
    case 120: {
      return $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz);
      break;
    }
    case 117: {
      return $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz);
      break;
    }
    case 78: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\N is not supported");
      break;
    }
    case 97: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 7;
      break;
    }
    case 116: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 9;
      break;
    }
    case 110: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 10;
      break;
    }
    case 102: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 12;
      break;
    }
    case 114: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 13;
      break;
    }
    case 101: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 27;
      break;
    }
    case 99: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var $x_1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var this$1 = $n(pattern);
      if (($x_1 === this$1.length)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal control escape sequence");
      }
      var cp = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cp >= 65536) ? 2 : 1)) | 0);
      return (64 ^ cp);
      break;
    }
    default: {
      if ((((x1 >= 65) && (x1 <= 90)) || ((x1 >= 97) && (x1 <= 122)))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal/unsupported escape sequence");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
      return x1;
    }
  }
}
function $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((((1 + start) | 0) < len)) {
    var this$2 = $n(pattern);
    var index = ((1 + start) | 0);
    var d1 = (((-48) + $charAt(this$2, index)) | 0);
  } else {
    var d1 = (-1);
  }
  if (((d1 < 0) || (d1 > 7))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal octal escape sequence");
  }
  if ((((2 + start) | 0) < len)) {
    var this$3 = $n(pattern);
    var index$1 = ((2 + start) | 0);
    var d2 = (((-48) + $charAt(this$3, index$1)) | 0);
  } else {
    var d2 = (-1);
  }
  if (((d2 < 0) || (d2 > 7))) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    return d1;
  } else if ((d1 > 3)) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    return (((d1 << 3) + d2) | 0);
  } else {
    if ((((3 + start) | 0) < len)) {
      var this$4 = $n(pattern);
      var index$2 = ((3 + start) | 0);
      var d3 = (((-48) + $charAt(this$4, index$2)) | 0);
    } else {
      var d3 = (-1);
    }
    if (((d3 < 0) || (d3 > 7))) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (((d1 << 3) + d2) | 0);
    } else {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (((((d1 << 6) + (d2 << 3)) | 0) + d3) | 0);
    }
  }
}
function $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if ((start !== len)) {
    var this$2 = $n(pattern);
    var $x_1 = ($charAt(this$2, start) === 123);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    var innerStart = ((1 + start) | 0);
    var this$3 = $n(pattern);
    var innerEnd = $uI(this$3.indexOf("}", innerStart));
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed hexadecimal escape sequence");
    }
    var cp = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, innerStart, innerEnd, "hexadecimal");
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + innerEnd) | 0);
    return cp;
  } else {
    var cp$2 = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, ((2 + start) | 0), "hexadecimal");
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + start) | 0);
    return cp$2;
  }
}
function $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  var end = ((4 + start) | 0);
  var codeUnit = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, "Unicode");
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
  var lowStart = ((2 + end) | 0);
  var lowEnd = ((4 + lowStart) | 0);
  if (((((-1024) & codeUnit) === 55296) && ($as_T(pattern.substring(end, lowStart)) === "\\u"))) {
    var low = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, lowStart, lowEnd, "Unicode");
    if ((((-1024) & low) === 56320)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = lowEnd;
      return ((((64 + (1023 & codeUnit)) | 0) << 10) | (1023 & low));
    } else {
      return codeUnit;
    }
  } else {
    return codeUnit;
  }
}
function $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, nameForError) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  if (((start === end) || (end > len))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
  }
  var i = start;
  while ((i < end)) {
    var value = i;
    var this$4 = $n(pattern);
    var c = $charAt(this$4, value);
    if ((!((((c >= 48) && (c <= 57)) || ((c >= 65) && (c <= 70))) || ((c >= 97) && (c <= 102))))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
    }
    i = ((1 + i) | 0);
  }
  if ((((end - start) | 0) > 6)) {
    var cp = 1114112;
  } else {
    var s = $as_T(pattern.substring(start, end));
    var cp = $uI(parseInt(s, 16));
  }
  if ((cp > 1114111)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Hexadecimal codepoint is too big");
  }
  return cp;
}
function $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar) {
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  switch (dispatchChar) {
    case 100:
    case 68: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar;
      break;
    }
    case 112:
    case 80: {
      var positive = $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz);
      break;
    }
    default: {
      var positive;
      throw new $c_jl_AssertionError($bC(dispatchChar));
    }
  }
  return ((dispatchChar >= 97) ? positive : $n(positive).negated__ju_regex_PatternCompiler$CompiledCharClass());
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((start === len)) {
    var property = "?";
  } else {
    var this$2 = $n(pattern);
    if (($charAt(this$2, start) === 123)) {
      var innerStart = ((1 + start) | 0);
      var this$3 = $n(pattern);
      var innerEnd = $uI(this$3.indexOf("}", innerStart));
      if ((innerEnd < 0)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character family");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = innerEnd;
      var property = $as_T(pattern.substring(innerStart, innerEnd));
    } else {
      var property = $as_T(pattern.substring(start, ((1 + start) | 0)));
    }
  }
  var dict = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
  if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, property)))) {
    $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
  var result = $as_ju_regex_PatternCompiler$CompiledCharClass(dict$1[property2]);
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  return result;
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var this$2 = $n(pattern);
    var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var isNegated = ($charAt(this$2, index) === 94);
  } else {
    var isNegated = false;
  }
  if (isNegated) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  }
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2), isNegated);
  while (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return builder.finish__T();
          break;
        }
        case 38: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
            var this$3 = $n(pattern);
            var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
            var $x_1 = ($charAt(this$3, index$1) === 38);
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            builder.startNewConjunct__V();
            break matchResult;
          } else {
            $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, 38, len, pattern, builder);
            break matchResult;
          }
          break;
        }
        case 91: {
          var cls = $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz);
          $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(builder, cls);
          break matchResult;
          break;
        }
        case 92: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal escape sequence");
          }
          var this$4 = $n(pattern);
          var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c2 = $charAt(this$4, index$2);
          switch (c2) {
            case 100:
            case 68:
            case 104:
            case 72:
            case 115:
            case 83:
            case 118:
            case 86:
            case 119:
            case 87:
            case 112:
            case 80: {
              builder.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
              break matchResult;
              break;
            }
            case 81: {
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              var this$5 = $n(pattern);
              var fromIndex = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
              var end = $uI(this$5.indexOf("\\E", fromIndex));
              if ((end < 0)) {
                $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
              }
              builder.addCodePointsInString__T__I__I__V(pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, end);
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end) | 0);
              break matchResult;
              break;
            }
            default: {
              $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz), len, pattern, builder);
              break matchResult;
            }
          }
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V();
            break matchResult;
          }
          break;
        }
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
      $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, x1, len, pattern, builder);
    }
  }
  $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
}
function $p_ju_regex_PatternCompiler__compileGroup__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((((1 + start) | 0) === len)) {
    var $x_1 = true;
  } else {
    var this$2 = $n(pattern);
    var index = ((1 + start) | 0);
    var $x_1 = ($charAt(this$2, index) !== 63);
  }
  if ($x_1) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + start) | 0);
    $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
    return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var this$3 = $n(pattern);
    var index$1 = ((2 + start) | 0);
    var c1 = $charAt(this$3, index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
      return ((("" + $as_T(pattern.substring(start, ((3 + start) | 0)))) + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
      }
      var this$4 = $n(pattern);
      var index$2 = ((3 + start) | 0);
      var c2 = $charAt(this$4, index$2);
      if ((((c2 >= 65) && (c2 <= 90)) || ((c2 >= 97) && (c2 <= 122)))) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
        if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, name))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
        var dict$1 = $thiz.ju_regex_PatternCompiler__f_namedGroups;
        var value = (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0);
        dict$1[name] = value;
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
      } else {
        if (((c2 !== 61) && (c2 !== 33))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
      $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
      var groupNumber = $thiz.ju_regex_PatternCompiler__f_compiledGroupCount;
      return (((("(?:(?=(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  while (true) {
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = ((((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122))) || ((c >= 48) && (c <= 57)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    } else {
      break;
    }
  }
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
    var $x_2 = true;
  } else {
    var this$4 = $n(pattern);
    var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var $x_2 = ($charAt(this$4, index$1) !== 62);
  }
  if ($x_2) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "named capturing group is missing trailing '>'");
  }
  return $as_T(pattern.substring(start, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex));
}
function $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, startCodePoint, len$2, pattern$3, builder$1) {
  if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz);
  }
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len$2)) {
    var this$1 = $n(pattern$3);
    var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var $x_1 = ($charAt(this$1, index) === 45);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz);
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    var cpEnd = $f_T__codePointAt__I__I($n(pattern$3), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      $n(builder$1).addSingleCodePoint__I__V(startCodePoint);
      $n(builder$1).addSingleCodePoint__I__V(45);
    } else {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      $n(builder$1).addCodePointRange__I__I__V(startCodePoint, endCodePoint);
    }
  } else {
    $n(builder$1).addSingleCodePoint__I__V(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.ju_regex_PatternCompiler__f_pattern = null;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = 0;
  this.ju_regex_PatternCompiler__f_sticky = false;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
  this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = null;
  this.ju_regex_PatternCompiler__f_namedGroups = null;
  this.ju_regex_PatternCompiler__f_pattern = pattern;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = flags;
  this.ju_regex_PatternCompiler__f_sticky = false;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
  this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = [0];
  this.ju_regex_PatternCompiler__f_namedGroups = ({});
}
$c_ju_regex_PatternCompiler.prototype = new $h_O();
$c_ju_regex_PatternCompiler.prototype.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $c_ju_regex_PatternCompiler.prototype;
$c_ju_regex_PatternCompiler.prototype.compile__ju_regex_Pattern = (function() {
  if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags);
  }
  var isLiteral = ((16 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
  }
  if (((128 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
  }
  if (((8 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("MULTILINE", "2018");
  }
  if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.ju_regex_PatternCompiler__f_pattern);
  } else {
    if (($as_T(this.ju_regex_PatternCompiler__f_pattern.substring(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "\\G")) {
      this.ju_regex_PatternCompiler__f_sticky = true;
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    }
    var jsPattern = this.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "us" : "u");
  var jsFlags = (((66 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.ju_regex_PatternCompiler__f_pattern, this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags, jsPattern, jsFlags, this.ju_regex_PatternCompiler__f_sticky, (((-1) + $uI(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap, this.ju_regex_PatternCompiler__f_namedGroups);
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T = (function(insideGroup) {
  var pattern = this.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var result = "";
  while ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var dispatchCP = $f_T__codePointAt__I__I($n(pattern), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    matchResult: {
      switch (dispatchCP) {
        case 41: {
          if ((!insideGroup)) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unmatched closing ')'");
          }
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return result;
          break;
        }
        case 124: {
          if ((this.ju_regex_PatternCompiler__f_sticky && (!insideGroup))) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "\\G is not supported when there is an alternative at the top level");
          }
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          result = (result + "|");
          break matchResult;
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            this.java$util$regex$PatternCompiler$$skipSharpComment__V();
            break matchResult;
          }
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(dispatchCP)) + "'"));
          break;
        }
      }
      var compiledGroupCountBeforeThisToken = this.ju_regex_PatternCompiler__f_compiledGroupCount;
      switch (dispatchCP) {
        case 92: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileEscape__T(this);
          break;
        }
        case 91: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileCharacterClass__T(this);
          break;
        }
        case 40: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileGroup__T(this);
          break;
        }
        case 94: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var compiledToken = "^";
          break;
        }
        case 36: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var compiledToken = "$";
          break;
        }
        case 46: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var rejected = (((32 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "" : (((1 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T(rejected);
          break;
        }
        default: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((dispatchCP >= 65536) ? 2 : 1)) | 0);
          var compiledToken = $p_ju_regex_PatternCompiler__literal__I__T(this, dispatchCP);
        }
      }
      result = (("" + result) + $p_ju_regex_PatternCompiler__compileRepeater__I__T__T(this, compiledGroupCountBeforeThisToken, compiledToken));
    }
  }
  if (insideGroup) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unclosed group");
  }
  return result;
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$skipSharpComment__V = (function() {
  var pattern = this.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  while (true) {
    if ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = (!(((((c === 10) || (c === 13)) || (c === 133)) || (c === 8232)) || (c === 8233)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    } else {
      break;
    }
  }
});
var $d_ju_regex_PatternCompiler = new $TypeData().initClass($c_ju_regex_PatternCompiler, "java.util.regex.PatternCompiler", ({
  ju_regex_PatternCompiler: 1
}));
function $p_ju_regex_PatternCompiler$__featureTest__T__Z($thiz, flags) {
  try {
    new RegExp("", flags);
    return true;
  } catch (e) {
    return false;
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler$() {
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = new RegExp("(\\\\+)(\\d+)", "g");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = true;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = true;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
  var r = ({});
  var value = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-z");
  r.Lower = value;
  var value$1 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Z");
  r.Upper = value$1;
  var value$2 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u007f");
  r.ASCII = value$2;
  var value$3 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Za-z");
  r.Alpha = value$3;
  var value$4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  r.Digit = value$4;
  var value$5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Za-z");
  r.Alnum = value$5;
  var value$6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-/:-@[-`{-~");
  r.Punct = value$6;
  var value$7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-~");
  r.Graph = value$7;
  var value$8 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, " -~");
  r.Print = value$8;
  var value$9 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t ");
  r.Blank = value$9;
  var value$10 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u001f\u007f");
  r.Cntrl = value$10;
  var value$11 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Fa-f");
  r.XDigit = value$11;
  var value$12 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  r.Space = value$12;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = r;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = new RegExp("(?:^|_)[a-z]", "g");
}
$c_ju_regex_PatternCompiler$.prototype = new $h_O();
$c_ju_regex_PatternCompiler$.prototype.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $c_ju_regex_PatternCompiler$.prototype;
$c_ju_regex_PatternCompiler$.prototype.compile__T__I__ju_regex_Pattern = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).compile__ju_regex_Pattern();
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$charToFlag__C__I = (function(c) {
  switch (c) {
    case 105: {
      return 2;
      break;
    }
    case 100: {
      return 1;
      break;
    }
    case 109: {
      return 8;
      break;
    }
    case 115: {
      return 32;
      break;
    }
    case 117: {
      return 64;
      break;
    }
    case 120: {
      return 4;
      break;
    }
    case 85: {
      return 256;
      break;
    }
    default: {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag");
    }
  }
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointNotAmong__T__T = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "." : "[\\d\\D]"));
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointToString__I__T = (function(codePoint) {
  return $as_T(String.fromCodePoint(codePoint));
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().initClass($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  ju_regex_PatternCompiler$: 1
}));
var $n_ju_regex_PatternCompiler$;
function $m_ju_regex_PatternCompiler$() {
  if ((!$n_ju_regex_PatternCompiler$)) {
    $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$();
  }
  return $n_ju_regex_PatternCompiler$;
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
  if (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "")) {
    $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = alt;
  } else {
    $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct + "|") + alt);
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
  if ($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
    return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? negThisSegment : (((("(?:(?!" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment === "") ? (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? "[^\\d\\D]" : (("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")")) : (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? (("[" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "]") : (((("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + "|[") + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "])")));
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(codePoint);
  return (((((codePoint === 93) || (codePoint === 92)) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = false;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = false;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = asciiCaseInsensitive;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = isNegated;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = "";
}
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype;
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.finish__T = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction === "") ? conjunct : ((("(?:" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction) + conjunct) + ")"));
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.startNewConjunct__V = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction + (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = "";
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V = (function(cls) {
  var x1 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
  switch (x1) {
    case 0: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
      break;
    }
    case 1: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
      break;
    }
    case 2: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
      break;
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointsInString__T__I__I__V = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I($n(str), i);
    this.addSingleCodePoint__I__V(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addSingleCodePoint__I__V = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + s) + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
  } else {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + s);
  }
  if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
    if (((codePoint >= 65) && (codePoint <= 90))) {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + codePoint) | 0)));
    } else if (((codePoint >= 97) && (codePoint <= 122))) {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + codePoint) | 0)));
    }
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointRange__I__I__V = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (s + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
  } else {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + s);
  }
  if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
    var start = ((startCodePoint > 65) ? startCodePoint : 65);
    var end = ((endCodePoint < 90) ? endCodePoint : 90);
    if ((start <= end)) {
      var $x_1 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
      var start$1 = ((32 + start) | 0);
      var end$1 = ((32 + end) | 0);
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)));
    }
    var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
    var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
    if ((start$2 <= end$2)) {
      var $x_2 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
      var start$3 = (((-32) + start$2) | 0);
      var end$3 = (((-32) + end$2) | 0);
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)));
    }
  }
});
var $d_ju_regex_PatternCompiler$CharacterClassBuilder = new $TypeData().initClass($c_ju_regex_PatternCompiler$CharacterClassBuilder, "java.util.regex.PatternCompiler$CharacterClassBuilder", ({
  ju_regex_PatternCompiler$CharacterClassBuilder: 1
}));
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0)) {
    $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_kind), $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_data);
    $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = true;
  }
  return $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.ju_regex_PatternCompiler$CompiledCharClass__f_negated = null;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = 0;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_data = null;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = false;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = kind;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_data = data;
}
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype;
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype.negated__ju_regex_PatternCompiler$CompiledCharClass = (function() {
  return ((!this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.ju_regex_PatternCompiler$CompiledCharClass__f_negated);
});
function $as_ju_regex_PatternCompiler$CompiledCharClass(obj) {
  return (((obj instanceof $c_ju_regex_PatternCompiler$CompiledCharClass) || (obj === null)) ? obj : $throwClassCastException(obj, "java.util.regex.PatternCompiler$CompiledCharClass"));
}
function $isArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_regex_PatternCompiler$CompiledCharClass)));
}
function $asArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) {
  return (($isArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.util.regex.PatternCompiler$CompiledCharClass;", depth));
}
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().initClass($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  ju_regex_PatternCompiler$CompiledCharClass: 1
}));
/** @constructor */
function $c_Lorg_expr_simplex_Main$package$() {
  this.Lorg_expr_simplex_Main$package$__f_simpleproblem = null;
  this.Lorg_expr_simplex_Main$package$__f_document = null;
  this.Lorg_expr_simplex_Main$package$__f_objectivetype = null;
  this.Lorg_expr_simplex_Main$package$__f_objectivecoefs = null;
  this.Lorg_expr_simplex_Main$package$__f_lhs = null;
  this.Lorg_expr_simplex_Main$package$__f_rhs = null;
  this.Lorg_expr_simplex_Main$package$__f_directions = null;
  this.Lorg_expr_simplex_Main$package$__f_solvebutton = null;
  this.Lorg_expr_simplex_Main$package$__f_cleanbutton = null;
  this.Lorg_expr_simplex_Main$package$__f_buildbutton = null;
  this.Lorg_expr_simplex_Main$package$__f_mathproblemOutput = null;
  this.Lorg_expr_simplex_Main$package$__f_solutionOutput = null;
  $n_Lorg_expr_simplex_Main$package$ = this;
  var $x_1 = $m_Lorg_expr_simplex_Simplex$();
  var xs = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_D.getArrayOf().getArrayOf().constr)([new $ac_D(new Float64Array([1.0, 4.0])), new $ac_D(new Float64Array([3.0, 2.0]))]));
  var len = $n(xs).length__I();
  var array = new ($d_D.getArrayOf().getArrayOf().constr)(len);
  var iterator = $n(xs).iterator__sc_Iterator();
  var i = 0;
  while ($n(iterator).hasNext__Z()) {
    array.set(i, $asArrayOf_D($n(iterator).next__O(), 1));
    i = ((1 + i) | 0);
  }
  this.Lorg_expr_simplex_Main$package$__f_simpleproblem = $x_1.createsimplexproblem__AD__AAD__AD__ALorg_expr_simplex_Simplex$Direction__Lorg_expr_simplex_Simplex$OptimizationType__Lorg_expr_simplex_Simplex$SimplexProblem(new $ac_D(new Float64Array([3.0, 4.0])), array, new $ac_D(new Float64Array([300.0, 500.0])), new ($d_Lorg_expr_simplex_Simplex$Direction.getArrayOf().constr)([$s_Lorg_expr_simplex_Simplex$Direction$__LE__Lorg_expr_simplex_Simplex$Direction(), $s_Lorg_expr_simplex_Simplex$Direction$__LE__Lorg_expr_simplex_Simplex$Direction()]), $s_Lorg_expr_simplex_Simplex$OptimizationType$__Maximize__Lorg_expr_simplex_Simplex$OptimizationType());
  this.Lorg_expr_simplex_Main$package$__f_document = document;
  window;
  $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_document.body;
  this.Lorg_expr_simplex_Main$package$__f_objectivetype = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_document.getElementById("objectivetype");
  this.Lorg_expr_simplex_Main$package$__f_objectivecoefs = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_document.getElementById("objectivecoefs");
  this.Lorg_expr_simplex_Main$package$__f_lhs = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_document.getElementById("lhs");
  this.Lorg_expr_simplex_Main$package$__f_rhs = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_document.getElementById("rhs");
  this.Lorg_expr_simplex_Main$package$__f_directions = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_document.getElementById("directions");
  this.Lorg_expr_simplex_Main$package$__f_solvebutton = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_document.getElementById("solveBtn");
  this.Lorg_expr_simplex_Main$package$__f_cleanbutton = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_document.getElementById("cleanBtn");
  this.Lorg_expr_simplex_Main$package$__f_buildbutton = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_document.getElementById("buildBtn");
  this.Lorg_expr_simplex_Main$package$__f_mathproblemOutput = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_document.getElementById("mathProblemOutput");
  this.Lorg_expr_simplex_Main$package$__f_solutionOutput = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_document.getElementById("solutionOutput");
}
$c_Lorg_expr_simplex_Main$package$.prototype = new $h_O();
$c_Lorg_expr_simplex_Main$package$.prototype.constructor = $c_Lorg_expr_simplex_Main$package$;
/** @constructor */
function $h_Lorg_expr_simplex_Main$package$() {
}
$h_Lorg_expr_simplex_Main$package$.prototype = $c_Lorg_expr_simplex_Main$package$.prototype;
$c_Lorg_expr_simplex_Main$package$.prototype.showSimpleDefaultProblem__V = (function() {
  var p = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_simpleproblem;
  var $x_1 = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_objectivecoefs;
  var this$1 = $n($m_s_Predef$().wrapDoubleArray__AD__scm_ArraySeq$ofDouble($n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_z));
  $x_1.value = $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, "", ", ", "");
  var $x_12 = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_lhs;
  var $x_11 = $m_s_Predef$();
  var xs = $n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var f = ((row) => {
    var row$1 = $asArrayOf_D(row, 1);
    var this$3 = $n($m_s_Predef$().wrapDoubleArray__AD__scm_ArraySeq$ofDouble(row$1));
    return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$3, "", ", ", "");
  });
  var len = $n(xs).u.length;
  var ys = new ($d_T.getArrayOf().constr)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_2 = i;
        var x0 = $n(xs).get(i);
        ys.set($x_2, $as_T(f(x0)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_I)) {
      var x3 = $asArrayOf_I(xs, 1);
      while ((i < len)) {
        var $x_3 = i;
        var x0$1 = $n(x3).get(i);
        ys.set($x_3, $as_T(f(x0$1)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_D)) {
      var x4 = $asArrayOf_D(xs, 1);
      while ((i < len)) {
        var $x_4 = i;
        var x0$2 = $n(x4).get(i);
        ys.set($x_4, $as_T(f(x0$2)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_J)) {
      var x5 = $asArrayOf_J(xs, 1);
      while ((i < len)) {
        var $x_5 = i;
        var t = $n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($x_5, $as_T(f(new $c_RTLong(lo, hi))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_F)) {
      var x6 = $asArrayOf_F(xs, 1);
      while ((i < len)) {
        var $x_6 = i;
        var x0$3 = $n(x6).get(i);
        ys.set($x_6, $as_T(f(x0$3)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_C)) {
      var x7 = $asArrayOf_C(xs, 1);
      while ((i < len)) {
        var $x_7 = i;
        var x0$4 = $n(x7).get(i);
        ys.set($x_7, $as_T(f($bC(x0$4))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_B)) {
      var x8 = $asArrayOf_B(xs, 1);
      while ((i < len)) {
        var $x_8 = i;
        var x0$5 = $n(x8).get(i);
        ys.set($x_8, $as_T(f(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_S)) {
      var x9 = $asArrayOf_S(xs, 1);
      while ((i < len)) {
        var $x_9 = i;
        var x0$6 = $n(x9).get(i);
        ys.set($x_9, $as_T(f(x0$6)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_Z)) {
      var x10 = $asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var $x_10 = i;
        var x0$7 = $n(x10).get(i);
        ys.set($x_10, $as_T(f(x0$7)));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs);
    }
  }
  var this$7 = $n($x_11.wrapRefArray__AO__scm_ArraySeq$ofRef(ys));
  $x_12.value = $f_sc_IterableOnceOps__mkString__T__T__T__T(this$7, "", "\n", "");
  var $x_13 = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_rhs;
  var this$8 = $n($m_s_Predef$().wrapDoubleArray__AD__scm_ArraySeq$ofDouble($n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs));
  $x_13.value = $f_sc_IterableOnceOps__mkString__T__T__T__T(this$8, "", ", ", "");
  var $x_27 = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_directions;
  var $x_26 = $m_s_Predef$();
  var xs$1 = $n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var f$1 = ((x$1) => {
    var x$1$1 = $as_Lorg_expr_simplex_Simplex$Direction(x$1);
    var x = $s_Lorg_expr_simplex_Simplex$Direction$__LE__Lorg_expr_simplex_Simplex$Direction();
    if ((x === null)) {
      var $x_14 = (x$1$1 === null);
    } else {
      var this$10 = $n(x);
      var $x_14 = (this$10 === x$1$1);
    }
    if ($x_14) {
      return "<=";
    }
    var x$3 = $s_Lorg_expr_simplex_Simplex$Direction$__GE__Lorg_expr_simplex_Simplex$Direction();
    if ((x$3 === null)) {
      var $x_15 = (x$1$1 === null);
    } else {
      var this$11 = $n(x$3);
      var $x_15 = (this$11 === x$1$1);
    }
    if ($x_15) {
      return ">=";
    }
    var x$5 = $s_Lorg_expr_simplex_Simplex$Direction$__EQ__Lorg_expr_simplex_Simplex$Direction();
    if ((x$5 === null)) {
      var $x_16 = (x$1$1 === null);
    } else {
      var this$12 = $n(x$5);
      var $x_16 = (this$12 === x$1$1);
    }
    if ($x_16) {
      return "=";
    }
    throw new $c_s_MatchError(x$1$1);
  });
  var len$1 = $n(xs$1).u.length;
  var ys$1 = new ($d_T.getArrayOf().constr)(len$1);
  if ((len$1 > 0)) {
    var i$1 = 0;
    if ((xs$1 !== null)) {
      while ((i$1 < len$1)) {
        var $x_17 = i$1;
        var x0$8 = $n(xs$1).get(i$1);
        ys$1.set($x_17, $as_T(f$1(x0$8)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_I)) {
      var x3$1 = $asArrayOf_I(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_18 = i$1;
        var x0$9 = $n(x3$1).get(i$1);
        ys$1.set($x_18, $as_T(f$1(x0$9)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_D)) {
      var x4$1 = $asArrayOf_D(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_19 = i$1;
        var x0$10 = $n(x4$1).get(i$1);
        ys$1.set($x_19, $as_T(f$1(x0$10)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_J)) {
      var x5$1 = $asArrayOf_J(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_20 = i$1;
        var t$1 = $n(x5$1).get(i$1);
        var lo$1 = t$1.RTLong__f_lo;
        var hi$1 = t$1.RTLong__f_hi;
        ys$1.set($x_20, $as_T(f$1(new $c_RTLong(lo$1, hi$1))));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_F)) {
      var x6$1 = $asArrayOf_F(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_21 = i$1;
        var x0$11 = $n(x6$1).get(i$1);
        ys$1.set($x_21, $as_T(f$1(x0$11)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_C)) {
      var x7$1 = $asArrayOf_C(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_22 = i$1;
        var x0$12 = $n(x7$1).get(i$1);
        ys$1.set($x_22, $as_T(f$1($bC(x0$12))));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_B)) {
      var x8$1 = $asArrayOf_B(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_23 = i$1;
        var x0$13 = $n(x8$1).get(i$1);
        ys$1.set($x_23, $as_T(f$1(x0$13)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_S)) {
      var x9$1 = $asArrayOf_S(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_24 = i$1;
        var x0$14 = $n(x9$1).get(i$1);
        ys$1.set($x_24, $as_T(f$1(x0$14)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_Z)) {
      var x10$1 = $asArrayOf_Z(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_25 = i$1;
        var x0$15 = $n(x10$1).get(i$1);
        ys$1.set($x_25, $as_T(f$1(x0$15)));
        i$1 = ((1 + i$1) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs$1);
    }
  }
  var this$16 = $n($x_26.wrapRefArray__AO__scm_ArraySeq$ofRef(ys$1));
  $x_27.value = $f_sc_IterableOnceOps__mkString__T__T__T__T(this$16, "", ", ", "");
  var $x_31 = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_objectivetype;
  matchResult2: {
    var $x_28;
    var x2 = $n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
    var x$2 = $s_Lorg_expr_simplex_Simplex$OptimizationType$__Maximize__Lorg_expr_simplex_Simplex$OptimizationType();
    if ((x$2 === null)) {
      var $x_29 = (x2 === null);
    } else {
      var this$17 = $n(x$2);
      var $x_29 = (this$17 === x2);
    }
    if ($x_29) {
      $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_objectivetype.selectedIndex = 0;
      var $x_28 = "Maximize";
      break matchResult2;
    }
    var x$3$1 = $s_Lorg_expr_simplex_Simplex$OptimizationType$__Minimize__Lorg_expr_simplex_Simplex$OptimizationType();
    if ((x$3$1 === null)) {
      var $x_30 = (x2 === null);
    } else {
      var this$18 = $n(x$3$1);
      var $x_30 = (this$18 === x2);
    }
    if ($x_30) {
      $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_objectivetype.selectedIndex = 1;
      var $x_28 = "Minimize";
      break matchResult2;
    }
    throw new $c_s_MatchError(x2);
  }
  $x_31.value = $x_28;
});
$c_Lorg_expr_simplex_Main$package$.prototype.cleanProblem__V = (function() {
  $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_objectivecoefs.value = "";
  $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_lhs.value = "";
  $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_rhs.value = "";
  $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_directions.value = "";
  $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_objectivetype.value = "Maximize";
  $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_solutionOutput.innerHTML = "";
  $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_mathproblemOutput.innerHTML = "";
});
$c_Lorg_expr_simplex_Main$package$.prototype.buildproblem__V = (function() {
  var p = $m_Lorg_expr_simplex_Main$package$().createProblemFromInput__Lorg_expr_simplex_Simplex$SimplexProblem();
  $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_mathproblemOutput.innerHTML = $m_Lorg_expr_simplex_Main$package$().toMathJax__Lorg_expr_simplex_Simplex$SimplexProblem__T(p);
  MathJax.typeset();
});
$c_Lorg_expr_simplex_Main$package$.prototype.solveproblem__V = (function() {
  var p = $m_Lorg_expr_simplex_Main$package$().createProblemFromInput__Lorg_expr_simplex_Simplex$SimplexProblem();
  var result = $m_Lorg_expr_simplex_Simplex$().simplexiterations__Lorg_expr_simplex_Simplex$SimplexProblem__ALorg_expr_simplex_Simplex$SimplexProblem(p);
  var sb = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
  var totaliters = $n(result).u.length;
  var f = ((currentstep) => {
    var currentstep$1 = $as_Lorg_expr_simplex_Simplex$SimplexProblem(currentstep);
    sb.append__T__scm_StringBuilder("<h3>Simplex Iteration Step</h3>\n");
    sb.append__T__scm_StringBuilder($m_Lorg_expr_simplex_Main$package$().problemToHtmlTable__Lorg_expr_simplex_Simplex$SimplexProblem__T(currentstep$1));
    return sb.append__T__scm_StringBuilder("<br/>\n");
  });
  var len = $n(result).u.length;
  var i = 0;
  if ((result !== null)) {
    while ((i < len)) {
      var x0 = $n(result).get(i);
      f(x0);
      i = ((1 + i) | 0);
    }
  } else if ((result instanceof $ac_I)) {
    var x3 = $asArrayOf_I(result, 1);
    while ((i < len)) {
      var x0$1 = $n(x3).get(i);
      f(x0$1);
      i = ((1 + i) | 0);
    }
  } else if ((result instanceof $ac_D)) {
    var x4 = $asArrayOf_D(result, 1);
    while ((i < len)) {
      var x0$2 = $n(x4).get(i);
      f(x0$2);
      i = ((1 + i) | 0);
    }
  } else if ((result instanceof $ac_J)) {
    var x5 = $asArrayOf_J(result, 1);
    while ((i < len)) {
      var t = $n(x5).get(i);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      f(new $c_RTLong(lo, hi));
      i = ((1 + i) | 0);
    }
  } else if ((result instanceof $ac_F)) {
    var x6 = $asArrayOf_F(result, 1);
    while ((i < len)) {
      var x0$3 = $n(x6).get(i);
      f(x0$3);
      i = ((1 + i) | 0);
    }
  } else if ((result instanceof $ac_C)) {
    var x7 = $asArrayOf_C(result, 1);
    while ((i < len)) {
      var x0$4 = $n(x7).get(i);
      f($bC(x0$4));
      i = ((1 + i) | 0);
    }
  } else if ((result instanceof $ac_B)) {
    var x8 = $asArrayOf_B(result, 1);
    while ((i < len)) {
      var x0$5 = $n(x8).get(i);
      f(x0$5);
      i = ((1 + i) | 0);
    }
  } else if ((result instanceof $ac_S)) {
    var x9 = $asArrayOf_S(result, 1);
    while ((i < len)) {
      var x0$6 = $n(x9).get(i);
      f(x0$6);
      i = ((1 + i) | 0);
    }
  } else if ((result instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(result, 1);
    while ((i < len)) {
      var x0$7 = $n(x10).get(i);
      f(x0$7);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $c_s_MatchError(result);
  }
  sb.append__T__scm_StringBuilder((("<h3>Total Iterations: " + totaliters) + "</h3>\n"));
  sb.append__T__scm_StringBuilder((("<h3>Final Objective Value: " + $n($as_Lorg_expr_simplex_Simplex$SimplexProblem($m_sc_ArrayOps$().last$extension__O__O(result))).Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value) + "</h3>\n"));
  sb.append__T__scm_StringBuilder("<h3>Final Basic Variable Values:</h3>\n");
  var xs = $n($as_Lorg_expr_simplex_Simplex$SimplexProblem($m_sc_ArrayOps$().last$extension__O__O(result))).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$6 = $n($m_sc_ArrayOps$().indices$extension__O__sci_Range(xs));
  if ((!this$6.sci_Range__f_isEmpty)) {
    var i$1 = this$6.sci_Range__f_start;
    while (true) {
      var x0$8 = i$1;
      var basicvarindex = $n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem($m_sc_ArrayOps$().last$extension__O__O(result))).Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex).get(x0$8);
      var basicvarname = ((basicvarindex >= 0) ? ("x" + basicvarindex) : " - ");
      sb.append__T__scm_StringBuilder($m_sc_StringOps$().format$extension__T__sci_Seq__T("%s: %.4f<br/>\n", $m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new $ac_O([basicvarname, $n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem($m_sc_ArrayOps$().last$extension__O__O(result))).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).get(x0$8)]))));
      if ((i$1 === this$6.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i$1 = ((i$1 + this$6.sci_Range__f_step) | 0);
    }
  }
  sb.append__T__scm_StringBuilder("<h3>Slack variables:</h3>\n");
  var xs$1 = $n($as_Lorg_expr_simplex_Simplex$SimplexProblem($m_sc_ArrayOps$().last$extension__O__O(result))).Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var f$1 = ((i$2) => {
    var i$3 = $uI(i$2);
    var varname = (("x" + "") + i$3);
    return sb.append__T__scm_StringBuilder((("Slack variable: " + varname) + "<br/>\n"));
  });
  var len$1 = $n(xs$1).u.length;
  var i$4 = 0;
  if ((xs$1 instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs$1, 1);
    while ((i$4 < len$1)) {
      var x0$9 = $n(x2).get(i$4);
      f$1(x0$9);
      i$4 = ((1 + i$4) | 0);
    }
  } else if ((xs$1 !== null)) {
    while ((i$4 < len$1)) {
      var x0$10 = $n(xs$1).get(i$4);
      f$1(x0$10);
      i$4 = ((1 + i$4) | 0);
    }
  } else if ((xs$1 instanceof $ac_D)) {
    var x4$1 = $asArrayOf_D(xs$1, 1);
    while ((i$4 < len$1)) {
      var x0$11 = $n(x4$1).get(i$4);
      f$1(x0$11);
      i$4 = ((1 + i$4) | 0);
    }
  } else if ((xs$1 instanceof $ac_J)) {
    var x5$1 = $asArrayOf_J(xs$1, 1);
    while ((i$4 < len$1)) {
      var t$1 = $n(x5$1).get(i$4);
      var lo$1 = t$1.RTLong__f_lo;
      var hi$1 = t$1.RTLong__f_hi;
      f$1(new $c_RTLong(lo$1, hi$1));
      i$4 = ((1 + i$4) | 0);
    }
  } else if ((xs$1 instanceof $ac_F)) {
    var x6$1 = $asArrayOf_F(xs$1, 1);
    while ((i$4 < len$1)) {
      var x0$12 = $n(x6$1).get(i$4);
      f$1(x0$12);
      i$4 = ((1 + i$4) | 0);
    }
  } else if ((xs$1 instanceof $ac_C)) {
    var x7$1 = $asArrayOf_C(xs$1, 1);
    while ((i$4 < len$1)) {
      var x0$13 = $n(x7$1).get(i$4);
      f$1($bC(x0$13));
      i$4 = ((1 + i$4) | 0);
    }
  } else if ((xs$1 instanceof $ac_B)) {
    var x8$1 = $asArrayOf_B(xs$1, 1);
    while ((i$4 < len$1)) {
      var x0$14 = $n(x8$1).get(i$4);
      f$1(x0$14);
      i$4 = ((1 + i$4) | 0);
    }
  } else if ((xs$1 instanceof $ac_S)) {
    var x9$1 = $asArrayOf_S(xs$1, 1);
    while ((i$4 < len$1)) {
      var x0$15 = $n(x9$1).get(i$4);
      f$1(x0$15);
      i$4 = ((1 + i$4) | 0);
    }
  } else if ((xs$1 instanceof $ac_Z)) {
    var x10$1 = $asArrayOf_Z(xs$1, 1);
    while ((i$4 < len$1)) {
      var x0$16 = $n(x10$1).get(i$4);
      f$1(x0$16);
      i$4 = ((1 + i$4) | 0);
    }
  } else {
    throw new $c_s_MatchError(xs$1);
  }
  sb.append__T__scm_StringBuilder("<br/>\n");
  sb.append__T__scm_StringBuilder("<h3>Surplus variables:</h3>\n");
  var xs$2 = $n($as_Lorg_expr_simplex_Simplex$SimplexProblem($m_sc_ArrayOps$().last$extension__O__O(result))).Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var f$2 = ((i$3$1) => {
    var i$5 = $uI(i$3$1);
    var varname$1 = (("x" + "") + i$5);
    return sb.append__T__scm_StringBuilder((("Surplus variable: " + varname$1) + "<br/>\n"));
  });
  var len$2 = $n(xs$2).u.length;
  var i$6 = 0;
  if ((xs$2 instanceof $ac_O)) {
    var x2$1 = $asArrayOf_O(xs$2, 1);
    while ((i$6 < len$2)) {
      var x0$17 = $n(x2$1).get(i$6);
      f$2(x0$17);
      i$6 = ((1 + i$6) | 0);
    }
  } else if ((xs$2 !== null)) {
    while ((i$6 < len$2)) {
      var x0$18 = $n(xs$2).get(i$6);
      f$2(x0$18);
      i$6 = ((1 + i$6) | 0);
    }
  } else if ((xs$2 instanceof $ac_D)) {
    var x4$2 = $asArrayOf_D(xs$2, 1);
    while ((i$6 < len$2)) {
      var x0$19 = $n(x4$2).get(i$6);
      f$2(x0$19);
      i$6 = ((1 + i$6) | 0);
    }
  } else if ((xs$2 instanceof $ac_J)) {
    var x5$2 = $asArrayOf_J(xs$2, 1);
    while ((i$6 < len$2)) {
      var t$2 = $n(x5$2).get(i$6);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      f$2(new $c_RTLong(lo$2, hi$2));
      i$6 = ((1 + i$6) | 0);
    }
  } else if ((xs$2 instanceof $ac_F)) {
    var x6$2 = $asArrayOf_F(xs$2, 1);
    while ((i$6 < len$2)) {
      var x0$20 = $n(x6$2).get(i$6);
      f$2(x0$20);
      i$6 = ((1 + i$6) | 0);
    }
  } else if ((xs$2 instanceof $ac_C)) {
    var x7$2 = $asArrayOf_C(xs$2, 1);
    while ((i$6 < len$2)) {
      var x0$21 = $n(x7$2).get(i$6);
      f$2($bC(x0$21));
      i$6 = ((1 + i$6) | 0);
    }
  } else if ((xs$2 instanceof $ac_B)) {
    var x8$2 = $asArrayOf_B(xs$2, 1);
    while ((i$6 < len$2)) {
      var x0$22 = $n(x8$2).get(i$6);
      f$2(x0$22);
      i$6 = ((1 + i$6) | 0);
    }
  } else if ((xs$2 instanceof $ac_S)) {
    var x9$2 = $asArrayOf_S(xs$2, 1);
    while ((i$6 < len$2)) {
      var x0$23 = $n(x9$2).get(i$6);
      f$2(x0$23);
      i$6 = ((1 + i$6) | 0);
    }
  } else if ((xs$2 instanceof $ac_Z)) {
    var x10$2 = $asArrayOf_Z(xs$2, 1);
    while ((i$6 < len$2)) {
      var x0$24 = $n(x10$2).get(i$6);
      f$2(x0$24);
      i$6 = ((1 + i$6) | 0);
    }
  } else {
    throw new $c_s_MatchError(xs$2);
  }
  sb.append__T__scm_StringBuilder("<br/>\n");
  sb.append__T__scm_StringBuilder("<h3>Artificial variables:</h3>\n");
  var xs$3 = $n($as_Lorg_expr_simplex_Simplex$SimplexProblem($m_sc_ArrayOps$().last$extension__O__O(result))).Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var f$3 = ((i$4$1) => {
    var i$7 = $uI(i$4$1);
    var varname$2 = (("x" + "") + i$7);
    return sb.append__T__scm_StringBuilder((("Artificial variable: " + varname$2) + "<br/>\n"));
  });
  var len$3 = $n(xs$3).u.length;
  var i$8 = 0;
  if ((xs$3 instanceof $ac_O)) {
    var x2$2 = $asArrayOf_O(xs$3, 1);
    while ((i$8 < len$3)) {
      var x0$25 = $n(x2$2).get(i$8);
      f$3(x0$25);
      i$8 = ((1 + i$8) | 0);
    }
  } else if ((xs$3 !== null)) {
    while ((i$8 < len$3)) {
      var x0$26 = $n(xs$3).get(i$8);
      f$3(x0$26);
      i$8 = ((1 + i$8) | 0);
    }
  } else if ((xs$3 instanceof $ac_D)) {
    var x4$3 = $asArrayOf_D(xs$3, 1);
    while ((i$8 < len$3)) {
      var x0$27 = $n(x4$3).get(i$8);
      f$3(x0$27);
      i$8 = ((1 + i$8) | 0);
    }
  } else if ((xs$3 instanceof $ac_J)) {
    var x5$3 = $asArrayOf_J(xs$3, 1);
    while ((i$8 < len$3)) {
      var t$3 = $n(x5$3).get(i$8);
      var lo$3 = t$3.RTLong__f_lo;
      var hi$3 = t$3.RTLong__f_hi;
      f$3(new $c_RTLong(lo$3, hi$3));
      i$8 = ((1 + i$8) | 0);
    }
  } else if ((xs$3 instanceof $ac_F)) {
    var x6$3 = $asArrayOf_F(xs$3, 1);
    while ((i$8 < len$3)) {
      var x0$28 = $n(x6$3).get(i$8);
      f$3(x0$28);
      i$8 = ((1 + i$8) | 0);
    }
  } else if ((xs$3 instanceof $ac_C)) {
    var x7$3 = $asArrayOf_C(xs$3, 1);
    while ((i$8 < len$3)) {
      var x0$29 = $n(x7$3).get(i$8);
      f$3($bC(x0$29));
      i$8 = ((1 + i$8) | 0);
    }
  } else if ((xs$3 instanceof $ac_B)) {
    var x8$3 = $asArrayOf_B(xs$3, 1);
    while ((i$8 < len$3)) {
      var x0$30 = $n(x8$3).get(i$8);
      f$3(x0$30);
      i$8 = ((1 + i$8) | 0);
    }
  } else if ((xs$3 instanceof $ac_S)) {
    var x9$3 = $asArrayOf_S(xs$3, 1);
    while ((i$8 < len$3)) {
      var x0$31 = $n(x9$3).get(i$8);
      f$3(x0$31);
      i$8 = ((1 + i$8) | 0);
    }
  } else if ((xs$3 instanceof $ac_Z)) {
    var x10$3 = $asArrayOf_Z(xs$3, 1);
    while ((i$8 < len$3)) {
      var x0$32 = $n(x10$3).get(i$8);
      f$3(x0$32);
      i$8 = ((1 + i$8) | 0);
    }
  } else {
    throw new $c_s_MatchError(xs$3);
  }
  $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_solutionOutput.innerHTML = $n(sb.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_Lorg_expr_simplex_Main$package$.prototype.registerEvents__V = (function() {
  $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_cleanbutton.onclick = ((_$1) => {
    $m_Lorg_expr_simplex_Main$package$().cleanProblem__V();
    $m_Lorg_expr_simplex_Main$package$().status__T__V("Problem cleared.");
  });
  $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_solvebutton.onclick = ((_$2) => {
    $m_Lorg_expr_simplex_Main$package$().solveproblem__V();
  });
  $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_buildbutton.onclick = ((_$3) => {
    $m_Lorg_expr_simplex_Main$package$().buildproblem__V();
  });
});
$c_Lorg_expr_simplex_Main$package$.prototype.problemToHtmlTable__Lorg_expr_simplex_Simplex$SimplexProblem__T = (function(p) {
  var sb = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
  sb.append__T__scm_StringBuilder("<table border='1'><tr><th></th>");
  var xs = $n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$2 = $n($m_sc_ArrayOps$().indices$extension__O__sci_Range(xs));
  if ((!this$2.sci_Range__f_isEmpty)) {
    var i = this$2.sci_Range__f_start;
    while (true) {
      var x0 = i;
      sb.append__T__scm_StringBuilder((("<th>x" + x0) + "</th>"));
      if ((i === this$2.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((i + this$2.sci_Range__f_step) | 0);
    }
  }
  sb.append__T__scm_StringBuilder("<th>RHS</th></tr>");
  sb.append__T__scm_StringBuilder("<tr><td>z</td>");
  var xs$1 = $n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$4 = $n($m_sc_ArrayOps$().indices$extension__O__sci_Range(xs$1));
  if ((!this$4.sci_Range__f_isEmpty)) {
    var i$1 = this$4.sci_Range__f_start;
    while (true) {
      var x0$1 = i$1;
      sb.append__T__scm_StringBuilder($m_sc_StringOps$().format$extension__T__sci_Seq__T("<td>%.2f</td>", $m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new $ac_O([(-$n($n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_z).get(x0$1))]))));
      if ((i$1 === this$4.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i$1 = ((i$1 + this$4.sci_Range__f_step) | 0);
    }
  }
  sb.append__T__scm_StringBuilder($m_sc_StringOps$().format$extension__T__sci_Seq__T("<td>%.2f</td></tr>", $m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new $ac_O([$n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value]))));
  var xs$2 = $n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$6 = $n($m_sc_ArrayOps$().indices$extension__O__sci_Range(xs$2));
  if ((!this$6.sci_Range__f_isEmpty)) {
    var i$2 = this$6.sci_Range__f_start;
    while (true) {
      var x0$2 = i$2;
      var basicvarindex = $n($n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex).get(x0$2);
      var basicvarname = ((basicvarindex >= 0) ? ("x" + basicvarindex) : " - ");
      sb.append__T__scm_StringBuilder((("<tr><td>" + basicvarname) + "</td>"));
      var xs$3 = $n($n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0$2);
      var this$8 = $n($m_sc_ArrayOps$().indices$extension__O__sci_Range(xs$3));
      if ((!this$8.sci_Range__f_isEmpty)) {
        var i$3 = this$8.sci_Range__f_start;
        while (true) {
          var x0$3 = i$3;
          sb.append__T__scm_StringBuilder($m_sc_StringOps$().format$extension__T__sci_Seq__T("<td>%.2f</td>", $m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new $ac_O([$n($n($n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0$2)).get(x0$3)]))));
          if ((i$3 === this$8.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
            break;
          }
          i$3 = ((i$3 + this$8.sci_Range__f_step) | 0);
        }
      }
      sb.append__T__scm_StringBuilder($m_sc_StringOps$().format$extension__T__sci_Seq__T("<td>%.2f</td></tr>", $m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new $ac_O([$n($n(p).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).get(x0$2)]))));
      if ((i$2 === this$6.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i$2 = ((i$2 + this$6.sci_Range__f_step) | 0);
    }
  }
  sb.append__T__scm_StringBuilder("</table>");
  return $n(sb.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_Lorg_expr_simplex_Main$package$.prototype.status__T__V = (function(txt) {
  var p = $m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_document.getElementById("status");
  p.innerText = txt;
});
$c_Lorg_expr_simplex_Main$package$.prototype.createProblemFromInput__Lorg_expr_simplex_Simplex$SimplexProblem = (function() {
  var this$1 = $n($as_T($m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_objectivecoefs.value));
  var xs = $f_T__split__T__I__AT(this$1, ",", 0);
  var f = ((_$4) => {
    var _$4$1 = $as_T(_$4);
    var x = $f_T__trim__T($n(_$4$1));
    return $m_jl_Double$().parseDouble__T__D(x);
  });
  var len = $n(xs).u.length;
  var ys = new $ac_D(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_1 = i;
        var x0 = $n(xs).get(i);
        ys.set($x_1, $uD(f(x0)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_I)) {
      var x3 = $asArrayOf_I(xs, 1);
      while ((i < len)) {
        var $x_2 = i;
        var x0$1 = $n(x3).get(i);
        ys.set($x_2, $uD(f(x0$1)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_D)) {
      var x4 = $asArrayOf_D(xs, 1);
      while ((i < len)) {
        var $x_3 = i;
        var x0$2 = $n(x4).get(i);
        ys.set($x_3, $uD(f(x0$2)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_J)) {
      var x5 = $asArrayOf_J(xs, 1);
      while ((i < len)) {
        var $x_4 = i;
        var t = $n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($x_4, $uD(f(new $c_RTLong(lo, hi))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_F)) {
      var x6 = $asArrayOf_F(xs, 1);
      while ((i < len)) {
        var $x_5 = i;
        var x0$3 = $n(x6).get(i);
        ys.set($x_5, $uD(f(x0$3)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_C)) {
      var x7 = $asArrayOf_C(xs, 1);
      while ((i < len)) {
        var $x_6 = i;
        var x0$4 = $n(x7).get(i);
        ys.set($x_6, $uD(f($bC(x0$4))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_B)) {
      var x8 = $asArrayOf_B(xs, 1);
      while ((i < len)) {
        var $x_7 = i;
        var x0$5 = $n(x8).get(i);
        ys.set($x_7, $uD(f(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_S)) {
      var x9 = $asArrayOf_S(xs, 1);
      while ((i < len)) {
        var $x_8 = i;
        var x0$6 = $n(x9).get(i);
        ys.set($x_8, $uD(f(x0$6)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_Z)) {
      var x10 = $asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var $x_9 = i;
        var x0$7 = $n(x10).get(i);
        ys.set($x_9, $uD(f(x0$7)));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs);
    }
  }
  var this$7 = $n($as_T($m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_lhs.value));
  var xs$1 = $f_T__split__T__I__AT(this$7, "\n", 0);
  var f$1 = ((_$5) => {
    var _$5$1 = $as_T(_$5);
    return $f_T__trim__T($n(_$5$1));
  });
  var len$1 = $n(xs$1).u.length;
  var ys$1 = new ($d_T.getArrayOf().constr)(len$1);
  if ((len$1 > 0)) {
    var i$1 = 0;
    if ((xs$1 !== null)) {
      while ((i$1 < len$1)) {
        var $x_10 = i$1;
        var x0$8 = $n(xs$1).get(i$1);
        ys$1.set($x_10, $as_T(f$1(x0$8)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_I)) {
      var x3$1 = $asArrayOf_I(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_11 = i$1;
        var x0$9 = $n(x3$1).get(i$1);
        ys$1.set($x_11, $as_T(f$1(x0$9)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_D)) {
      var x4$1 = $asArrayOf_D(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_12 = i$1;
        var x0$10 = $n(x4$1).get(i$1);
        ys$1.set($x_12, $as_T(f$1(x0$10)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_J)) {
      var x5$1 = $asArrayOf_J(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_13 = i$1;
        var t$1 = $n(x5$1).get(i$1);
        var lo$1 = t$1.RTLong__f_lo;
        var hi$1 = t$1.RTLong__f_hi;
        ys$1.set($x_13, $as_T(f$1(new $c_RTLong(lo$1, hi$1))));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_F)) {
      var x6$1 = $asArrayOf_F(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_14 = i$1;
        var x0$11 = $n(x6$1).get(i$1);
        ys$1.set($x_14, $as_T(f$1(x0$11)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_C)) {
      var x7$1 = $asArrayOf_C(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_15 = i$1;
        var x0$12 = $n(x7$1).get(i$1);
        ys$1.set($x_15, $as_T(f$1($bC(x0$12))));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_B)) {
      var x8$1 = $asArrayOf_B(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_16 = i$1;
        var x0$13 = $n(x8$1).get(i$1);
        ys$1.set($x_16, $as_T(f$1(x0$13)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_S)) {
      var x9$1 = $asArrayOf_S(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_17 = i$1;
        var x0$14 = $n(x9$1).get(i$1);
        ys$1.set($x_17, $as_T(f$1(x0$14)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_Z)) {
      var x10$1 = $asArrayOf_Z(xs$1, 1);
      while ((i$1 < len$1)) {
        var $x_18 = i$1;
        var x0$15 = $n(x10$1).get(i$1);
        ys$1.set($x_18, $as_T(f$1(x0$15)));
        i$1 = ((1 + i$1) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs$1);
    }
  }
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  capacity = 0;
  size = 0;
  jsElems = [];
  var i$2 = 0;
  while ((i$2 < ys$1.u.length)) {
    var x$1 = ys$1.get(i$2);
    var this$20 = $n(x$1);
    if ((!(this$20 === ""))) {
      var unboxedElem = ((x$1 === null) ? null : x$1);
      jsElems.push(unboxedElem);
    }
    i$2 = ((1 + i$2) | 0);
  }
  var lhsRows = new ($d_T.getArrayOf().constr)(jsElems);
  var len$2 = lhsRows.u.length;
  var ys$2 = new ($d_D.getArrayOf().getArrayOf().constr)(len$2);
  if ((len$2 > 0)) {
    var i$3 = 0;
    while ((i$3 < len$2)) {
      var $x_28 = i$3;
      var x0$16 = lhsRows.get(i$3);
      var this$29 = $n(x0$16);
      var xs$2 = $f_T__split__T__I__AT(this$29, ",", 0);
      var f$2 = ((_$7) => {
        var _$7$1 = $as_T(_$7);
        var x$2 = $f_T__trim__T($n(_$7$1));
        return $m_jl_Double$().parseDouble__T__D(x$2);
      });
      var len$3 = $n(xs$2).u.length;
      var ys$3 = new $ac_D(len$3);
      if ((len$3 > 0)) {
        var i$4 = 0;
        if ((xs$2 !== null)) {
          while ((i$4 < len$3)) {
            var $x_19 = i$4;
            var x0$17 = $n(xs$2).get(i$4);
            ys$3.set($x_19, $uD(f$2(x0$17)));
            i$4 = ((1 + i$4) | 0);
          }
        } else if ((xs$2 instanceof $ac_I)) {
          var x3$2 = $asArrayOf_I(xs$2, 1);
          while ((i$4 < len$3)) {
            var $x_20 = i$4;
            var x0$18 = $n(x3$2).get(i$4);
            ys$3.set($x_20, $uD(f$2(x0$18)));
            i$4 = ((1 + i$4) | 0);
          }
        } else if ((xs$2 instanceof $ac_D)) {
          var x4$2 = $asArrayOf_D(xs$2, 1);
          while ((i$4 < len$3)) {
            var $x_21 = i$4;
            var x0$19 = $n(x4$2).get(i$4);
            ys$3.set($x_21, $uD(f$2(x0$19)));
            i$4 = ((1 + i$4) | 0);
          }
        } else if ((xs$2 instanceof $ac_J)) {
          var x5$2 = $asArrayOf_J(xs$2, 1);
          while ((i$4 < len$3)) {
            var $x_22 = i$4;
            var t$2 = $n(x5$2).get(i$4);
            var lo$2 = t$2.RTLong__f_lo;
            var hi$2 = t$2.RTLong__f_hi;
            ys$3.set($x_22, $uD(f$2(new $c_RTLong(lo$2, hi$2))));
            i$4 = ((1 + i$4) | 0);
          }
        } else if ((xs$2 instanceof $ac_F)) {
          var x6$2 = $asArrayOf_F(xs$2, 1);
          while ((i$4 < len$3)) {
            var $x_23 = i$4;
            var x0$20 = $n(x6$2).get(i$4);
            ys$3.set($x_23, $uD(f$2(x0$20)));
            i$4 = ((1 + i$4) | 0);
          }
        } else if ((xs$2 instanceof $ac_C)) {
          var x7$2 = $asArrayOf_C(xs$2, 1);
          while ((i$4 < len$3)) {
            var $x_24 = i$4;
            var x0$21 = $n(x7$2).get(i$4);
            ys$3.set($x_24, $uD(f$2($bC(x0$21))));
            i$4 = ((1 + i$4) | 0);
          }
        } else if ((xs$2 instanceof $ac_B)) {
          var x8$2 = $asArrayOf_B(xs$2, 1);
          while ((i$4 < len$3)) {
            var $x_25 = i$4;
            var x0$22 = $n(x8$2).get(i$4);
            ys$3.set($x_25, $uD(f$2(x0$22)));
            i$4 = ((1 + i$4) | 0);
          }
        } else if ((xs$2 instanceof $ac_S)) {
          var x9$2 = $asArrayOf_S(xs$2, 1);
          while ((i$4 < len$3)) {
            var $x_26 = i$4;
            var x0$23 = $n(x9$2).get(i$4);
            ys$3.set($x_26, $uD(f$2(x0$23)));
            i$4 = ((1 + i$4) | 0);
          }
        } else if ((xs$2 instanceof $ac_Z)) {
          var x10$2 = $asArrayOf_Z(xs$2, 1);
          while ((i$4 < len$3)) {
            var $x_27 = i$4;
            var x0$24 = $n(x10$2).get(i$4);
            ys$3.set($x_27, $uD(f$2(x0$24)));
            i$4 = ((1 + i$4) | 0);
          }
        } else {
          throw new $c_s_MatchError(xs$2);
        }
      }
      ys$2.set($x_28, ys$3);
      i$3 = ((1 + i$3) | 0);
    }
  }
  var this$35 = $n($as_T($m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_rhs.value));
  var xs$3 = $f_T__split__T__I__AT(this$35, ",", 0);
  var f$3 = ((_$8) => {
    var _$8$1 = $as_T(_$8);
    var x$3 = $f_T__trim__T($n(_$8$1));
    return $m_jl_Double$().parseDouble__T__D(x$3);
  });
  var len$4 = $n(xs$3).u.length;
  var ys$4 = new $ac_D(len$4);
  if ((len$4 > 0)) {
    var i$5 = 0;
    if ((xs$3 !== null)) {
      while ((i$5 < len$4)) {
        var $x_29 = i$5;
        var x0$25 = $n(xs$3).get(i$5);
        ys$4.set($x_29, $uD(f$3(x0$25)));
        i$5 = ((1 + i$5) | 0);
      }
    } else if ((xs$3 instanceof $ac_I)) {
      var x3$3 = $asArrayOf_I(xs$3, 1);
      while ((i$5 < len$4)) {
        var $x_30 = i$5;
        var x0$26 = $n(x3$3).get(i$5);
        ys$4.set($x_30, $uD(f$3(x0$26)));
        i$5 = ((1 + i$5) | 0);
      }
    } else if ((xs$3 instanceof $ac_D)) {
      var x4$3 = $asArrayOf_D(xs$3, 1);
      while ((i$5 < len$4)) {
        var $x_31 = i$5;
        var x0$27 = $n(x4$3).get(i$5);
        ys$4.set($x_31, $uD(f$3(x0$27)));
        i$5 = ((1 + i$5) | 0);
      }
    } else if ((xs$3 instanceof $ac_J)) {
      var x5$3 = $asArrayOf_J(xs$3, 1);
      while ((i$5 < len$4)) {
        var $x_32 = i$5;
        var t$3 = $n(x5$3).get(i$5);
        var lo$3 = t$3.RTLong__f_lo;
        var hi$3 = t$3.RTLong__f_hi;
        ys$4.set($x_32, $uD(f$3(new $c_RTLong(lo$3, hi$3))));
        i$5 = ((1 + i$5) | 0);
      }
    } else if ((xs$3 instanceof $ac_F)) {
      var x6$3 = $asArrayOf_F(xs$3, 1);
      while ((i$5 < len$4)) {
        var $x_33 = i$5;
        var x0$28 = $n(x6$3).get(i$5);
        ys$4.set($x_33, $uD(f$3(x0$28)));
        i$5 = ((1 + i$5) | 0);
      }
    } else if ((xs$3 instanceof $ac_C)) {
      var x7$3 = $asArrayOf_C(xs$3, 1);
      while ((i$5 < len$4)) {
        var $x_34 = i$5;
        var x0$29 = $n(x7$3).get(i$5);
        ys$4.set($x_34, $uD(f$3($bC(x0$29))));
        i$5 = ((1 + i$5) | 0);
      }
    } else if ((xs$3 instanceof $ac_B)) {
      var x8$3 = $asArrayOf_B(xs$3, 1);
      while ((i$5 < len$4)) {
        var $x_35 = i$5;
        var x0$30 = $n(x8$3).get(i$5);
        ys$4.set($x_35, $uD(f$3(x0$30)));
        i$5 = ((1 + i$5) | 0);
      }
    } else if ((xs$3 instanceof $ac_S)) {
      var x9$3 = $asArrayOf_S(xs$3, 1);
      while ((i$5 < len$4)) {
        var $x_36 = i$5;
        var x0$31 = $n(x9$3).get(i$5);
        ys$4.set($x_36, $uD(f$3(x0$31)));
        i$5 = ((1 + i$5) | 0);
      }
    } else if ((xs$3 instanceof $ac_Z)) {
      var x10$3 = $asArrayOf_Z(xs$3, 1);
      while ((i$5 < len$4)) {
        var $x_37 = i$5;
        var x0$32 = $n(x10$3).get(i$5);
        ys$4.set($x_37, $uD(f$3(x0$32)));
        i$5 = ((1 + i$5) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs$3);
    }
  }
  var this$41 = $n($as_T($m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_directions.value));
  var xs$4 = $f_T__split__T__I__AT(this$41, ",", 0);
  var f$4 = ((_$9) => {
    var _$9$1 = $as_T(_$9);
    return $f_T__trim__T($n(_$9$1));
  });
  var len$5 = $n(xs$4).u.length;
  var ys$5 = new ($d_T.getArrayOf().constr)(len$5);
  if ((len$5 > 0)) {
    var i$6 = 0;
    if ((xs$4 !== null)) {
      while ((i$6 < len$5)) {
        var $x_38 = i$6;
        var x0$33 = $n(xs$4).get(i$6);
        ys$5.set($x_38, $as_T(f$4(x0$33)));
        i$6 = ((1 + i$6) | 0);
      }
    } else if ((xs$4 instanceof $ac_I)) {
      var x3$4 = $asArrayOf_I(xs$4, 1);
      while ((i$6 < len$5)) {
        var $x_39 = i$6;
        var x0$34 = $n(x3$4).get(i$6);
        ys$5.set($x_39, $as_T(f$4(x0$34)));
        i$6 = ((1 + i$6) | 0);
      }
    } else if ((xs$4 instanceof $ac_D)) {
      var x4$4 = $asArrayOf_D(xs$4, 1);
      while ((i$6 < len$5)) {
        var $x_40 = i$6;
        var x0$35 = $n(x4$4).get(i$6);
        ys$5.set($x_40, $as_T(f$4(x0$35)));
        i$6 = ((1 + i$6) | 0);
      }
    } else if ((xs$4 instanceof $ac_J)) {
      var x5$4 = $asArrayOf_J(xs$4, 1);
      while ((i$6 < len$5)) {
        var $x_41 = i$6;
        var t$4 = $n(x5$4).get(i$6);
        var lo$4 = t$4.RTLong__f_lo;
        var hi$4 = t$4.RTLong__f_hi;
        ys$5.set($x_41, $as_T(f$4(new $c_RTLong(lo$4, hi$4))));
        i$6 = ((1 + i$6) | 0);
      }
    } else if ((xs$4 instanceof $ac_F)) {
      var x6$4 = $asArrayOf_F(xs$4, 1);
      while ((i$6 < len$5)) {
        var $x_42 = i$6;
        var x0$36 = $n(x6$4).get(i$6);
        ys$5.set($x_42, $as_T(f$4(x0$36)));
        i$6 = ((1 + i$6) | 0);
      }
    } else if ((xs$4 instanceof $ac_C)) {
      var x7$4 = $asArrayOf_C(xs$4, 1);
      while ((i$6 < len$5)) {
        var $x_43 = i$6;
        var x0$37 = $n(x7$4).get(i$6);
        ys$5.set($x_43, $as_T(f$4($bC(x0$37))));
        i$6 = ((1 + i$6) | 0);
      }
    } else if ((xs$4 instanceof $ac_B)) {
      var x8$4 = $asArrayOf_B(xs$4, 1);
      while ((i$6 < len$5)) {
        var $x_44 = i$6;
        var x0$38 = $n(x8$4).get(i$6);
        ys$5.set($x_44, $as_T(f$4(x0$38)));
        i$6 = ((1 + i$6) | 0);
      }
    } else if ((xs$4 instanceof $ac_S)) {
      var x9$4 = $asArrayOf_S(xs$4, 1);
      while ((i$6 < len$5)) {
        var $x_45 = i$6;
        var x0$39 = $n(x9$4).get(i$6);
        ys$5.set($x_45, $as_T(f$4(x0$39)));
        i$6 = ((1 + i$6) | 0);
      }
    } else if ((xs$4 instanceof $ac_Z)) {
      var x10$4 = $asArrayOf_Z(xs$4, 1);
      while ((i$6 < len$5)) {
        var $x_46 = i$6;
        var x0$40 = $n(x10$4).get(i$6);
        ys$5.set($x_46, $as_T(f$4(x0$40)));
        i$6 = ((1 + i$6) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs$4);
    }
  }
  var len$6 = ys$5.u.length;
  var ys$6 = new ($d_Lorg_expr_simplex_Simplex$Direction.getArrayOf().constr)(len$6);
  if ((len$6 > 0)) {
    var i$7 = 0;
    while ((i$7 < len$6)) {
      var $x_48 = i$7;
      var x0$41 = ys$5.get(i$7);
      var $x_47;
      switch (x0$41) {
        case "<=": {
          var $x_47 = $s_Lorg_expr_simplex_Simplex$Direction$__LE__Lorg_expr_simplex_Simplex$Direction();
          break;
        }
        case ">=": {
          var $x_47 = $s_Lorg_expr_simplex_Simplex$Direction$__GE__Lorg_expr_simplex_Simplex$Direction();
          break;
        }
        case "=": {
          var $x_47 = $s_Lorg_expr_simplex_Simplex$Direction$__EQ__Lorg_expr_simplex_Simplex$Direction();
          break;
        }
        default: {
          throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Unknown direction: " + x0$41));
        }
      }
      ys$6.set($x_48, $x_47);
      i$7 = ((1 + i$7) | 0);
    }
  }
  matchResult4: {
    var opttype;
    var x4$5 = $as_T($m_Lorg_expr_simplex_Main$package$().Lorg_expr_simplex_Main$package$__f_objectivetype.value);
    if ((x4$5 === "Maximize")) {
      var opttype = $s_Lorg_expr_simplex_Simplex$OptimizationType$__Maximize__Lorg_expr_simplex_Simplex$OptimizationType();
      break matchResult4;
    }
    if ((x4$5 === "Minimize")) {
      var opttype = $s_Lorg_expr_simplex_Simplex$OptimizationType$__Minimize__Lorg_expr_simplex_Simplex$OptimizationType();
      break matchResult4;
    }
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Unknown optimization type: " + x4$5));
  }
  return $m_Lorg_expr_simplex_Simplex$().createsimplexproblem__AD__AAD__AD__ALorg_expr_simplex_Simplex$Direction__Lorg_expr_simplex_Simplex$OptimizationType__Lorg_expr_simplex_Simplex$SimplexProblem(ys, ys$2, ys$4, ys$6, opttype);
});
$c_Lorg_expr_simplex_Main$package$.prototype.toMathJax__Lorg_expr_simplex_Simplex$SimplexProblem__T = (function(s) {
  var sb = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
  sb.append__T__scm_StringBuilder("\\(\n");
  sb.append__T__scm_StringBuilder("\\begin{split}\n");
  matchResult5: {
    var x5 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
    var x = $s_Lorg_expr_simplex_Simplex$OptimizationType$__Maximize__Lorg_expr_simplex_Simplex$OptimizationType();
    if ((x === null)) {
      var $x_1 = (x5 === null);
    } else {
      var this$1 = $n(x);
      var $x_1 = (this$1 === x5);
    }
    if ($x_1) {
      sb.append__T__scm_StringBuilder(" \\text{Maximize } Z = &");
      break matchResult5;
    }
    var x$3 = $s_Lorg_expr_simplex_Simplex$OptimizationType$__Minimize__Lorg_expr_simplex_Simplex$OptimizationType();
    if ((x$3 === null)) {
      var $x_2 = (x5 === null);
    } else {
      var this$2 = $n(x$3);
      var $x_2 = (this$2 === x5);
    }
    if ($x_2) {
      sb.append__T__scm_StringBuilder(" \\text{Minimize } Z = &");
      break matchResult5;
    }
    throw new $c_s_MatchError(x5);
  }
  var xs = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$4 = $n($m_sc_ArrayOps$().indices$extension__O__sci_Range(xs));
  if ((!this$4.sci_Range__f_isEmpty)) {
    var i = this$4.sci_Range__f_start;
    while (true) {
      var x0 = i;
      var coef = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z).get(x0);
      var varname = ((("x_{" + "") + x0) + "}");
      if (((x0 > 0) && (coef >= 0.0))) {
        sb.append__T__scm_StringBuilder(" + ");
      } else if ((coef < 0.0)) {
        sb.append__T__scm_StringBuilder(" - ");
      }
      sb.append__T__scm_StringBuilder($m_sc_StringOps$().format$extension__T__sci_Seq__T("%-1.2f %s", $m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new $ac_O([$uD(Math.abs(coef)), varname]))));
      if ((i === this$4.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((i + this$4.sci_Range__f_step) | 0);
    }
  }
  sb.append__T__scm_StringBuilder(" \\\\\n");
  sb.append__T__scm_StringBuilder("\\text{Subject to:} & \\\\\n");
  var xs$1 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$11 = $n($m_sc_ArrayOps$().indices$extension__O__sci_Range(xs$1));
  if ((!this$11.sci_Range__f_isEmpty)) {
    var i$1 = this$11.sci_Range__f_start;
    while (true) {
      var x0$1 = i$1;
      sb.append__T__scm_StringBuilder(" & ");
      var xs$2 = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0$1);
      var this$13 = $n($m_sc_ArrayOps$().indices$extension__O__sci_Range(xs$2));
      if ((!this$13.sci_Range__f_isEmpty)) {
        var i$2 = this$13.sci_Range__f_start;
        while (true) {
          var x0$2 = i$2;
          var coef$1 = $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0$1)).get(x0$2);
          var varname$1 = ((("x_{" + "") + x0$2) + "}");
          if (((x0$2 > 0) && (coef$1 >= 0.0))) {
            sb.append__T__scm_StringBuilder(" + ");
          } else if ((coef$1 < 0.0)) {
            sb.append__T__scm_StringBuilder(" - ");
          }
          sb.append__T__scm_StringBuilder($m_sc_StringOps$().format$extension__T__sci_Seq__T("%-1.2f %s", $m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new $ac_O([$uD(Math.abs(coef$1)), varname$1]))));
          if ((i$2 === this$13.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
            break;
          }
          i$2 = ((i$2 + this$13.sci_Range__f_step) | 0);
        }
      }
      matchResult6: {
        var x6 = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_directions).get(x0$1);
        var x$1 = $s_Lorg_expr_simplex_Simplex$Direction$__LE__Lorg_expr_simplex_Simplex$Direction();
        if ((x$1 === null)) {
          var $x_3 = (x6 === null);
        } else {
          var this$19 = $n(x$1);
          var $x_3 = (this$19 === x6);
        }
        if ($x_3) {
          sb.append__T__scm_StringBuilder(" \\leq ");
          break matchResult6;
        }
        var x$3$1 = $s_Lorg_expr_simplex_Simplex$Direction$__GE__Lorg_expr_simplex_Simplex$Direction();
        if ((x$3$1 === null)) {
          var $x_4 = (x6 === null);
        } else {
          var this$20 = $n(x$3$1);
          var $x_4 = (this$20 === x6);
        }
        if ($x_4) {
          sb.append__T__scm_StringBuilder(" \\geq ");
          break matchResult6;
        }
        var x$5 = $s_Lorg_expr_simplex_Simplex$Direction$__EQ__Lorg_expr_simplex_Simplex$Direction();
        if ((x$5 === null)) {
          var $x_5 = (x6 === null);
        } else {
          var this$21 = $n(x$5);
          var $x_5 = (this$21 === x6);
        }
        if ($x_5) {
          sb.append__T__scm_StringBuilder(" = ");
          break matchResult6;
        }
        throw new $c_s_MatchError(x6);
      }
      sb.append__T__scm_StringBuilder($m_sc_StringOps$().format$extension__T__sci_Seq__T("%-1.2f", $m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new $ac_O([$n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).get(x0$1)]))));
      if ((x0$1 < (((-1) + $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).u.length) | 0))) {
        sb.append__T__scm_StringBuilder(" \\\\\n");
      }
      if ((i$1 === this$11.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i$1 = ((i$1 + this$11.sci_Range__f_step) | 0);
    }
  }
  sb.append__T__scm_StringBuilder("\\\\& x_j \\geq 0 \\quad \\text{for all } j \\\\\n");
  sb.append__T__scm_StringBuilder("\n\\end{split}\n");
  sb.append__T__scm_StringBuilder("\\)\n");
  return $n(sb.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_Lorg_expr_simplex_Main$package$.prototype.hello__V = (function() {
  var this$2 = $m_s_Console$();
  var this$3 = $n(this$2.out__Ljava_io_PrintStream());
  this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Simplex routines for real valued linear programming problems.\n");
  var this$5 = $m_s_Console$();
  var this$6 = $n(this$5.out__Ljava_io_PrintStream());
  this$6.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Educational purpose only. Not for production use.\n");
  var this$8 = $m_s_Console$();
  var this$9 = $n(this$8.out__Ljava_io_PrintStream());
  this$9.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Routines are not optimized for performance or numerical stability.\n");
  $m_Lorg_expr_simplex_Main$package$().showSimpleDefaultProblem__V();
  $m_Lorg_expr_simplex_Main$package$().registerEvents__V();
  $m_Lorg_expr_simplex_Main$package$().status__T__V("Ready.");
});
var $d_Lorg_expr_simplex_Main$package$ = new $TypeData().initClass($c_Lorg_expr_simplex_Main$package$, "org.expr.simplex.Main$package$", ({
  Lorg_expr_simplex_Main$package$: 1
}));
var $n_Lorg_expr_simplex_Main$package$;
function $m_Lorg_expr_simplex_Main$package$() {
  if ((!$n_Lorg_expr_simplex_Main$package$)) {
    $n_Lorg_expr_simplex_Main$package$ = new $c_Lorg_expr_simplex_Main$package$();
  }
  return $n_Lorg_expr_simplex_Main$package$;
}
/** @constructor */
function $c_Lorg_expr_simplex_Simplex$() {
}
$c_Lorg_expr_simplex_Simplex$.prototype = new $h_O();
$c_Lorg_expr_simplex_Simplex$.prototype.constructor = $c_Lorg_expr_simplex_Simplex$;
/** @constructor */
function $h_Lorg_expr_simplex_Simplex$() {
}
$h_Lorg_expr_simplex_Simplex$.prototype = $c_Lorg_expr_simplex_Simplex$.prototype;
$c_Lorg_expr_simplex_Simplex$.prototype.createEmptySimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem = (function() {
  var dimensions = new $ac_I(new Int32Array([0, 0]));
  var lhs = $asArrayOf_D($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_D.getClassOf(), dimensions), 2);
  var rhs = new $ac_D(0);
  var z = new $ac_D(0);
  var opttype = $s_Lorg_expr_simplex_Simplex$OptimizationType$__Maximize__Lorg_expr_simplex_Simplex$OptimizationType();
  var directions = new ($d_Lorg_expr_simplex_Simplex$Direction.getArrayOf().constr)(0);
  var varnames = new ($d_T.getArrayOf().constr)(0);
  var slackvariableindices = new $ac_I(0);
  var surplusvariableindices = new $ac_I(0);
  var artificialvariableindices = new $ac_I(0);
  var basicvariableindex = new $ac_I(0);
  return new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs, rhs, z, opttype, directions, varnames, slackvariableindices, surplusvariableindices, artificialvariableindices, basicvariableindex, (-Infinity), false, false, 0.0);
});
$c_Lorg_expr_simplex_Simplex$.prototype.updatebiggestvalue__Lorg_expr_simplex_Simplex$SimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem = (function(s) {
  $n(s);
  var this$1 = $n(s);
  var lhs = this$1.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$2 = $n(s);
  var rhs = this$2.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$3 = $n(s);
  var z = this$3.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$4 = $n(s);
  var opttype = this$4.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$5 = $n(s);
  var directions = this$5.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var this$6 = $n(s);
  var varnames = this$6.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var this$7 = $n(s);
  var slackvariableindices = this$7.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$8 = $n(s);
  var surplusvariableindices = this$8.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$9 = $n(s);
  var artificialvariableindices = this$9.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$10 = $n(s);
  var basicvariableindex = this$10.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$11 = $n(s);
  var biggestvalue = this$11.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$12 = $n(s);
  var isinstandardform = this$12.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$13 = $n(s);
  var converged = this$13.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$14 = $n(s);
  var objective_value = this$14.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  var newproblem = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs, rhs, z, opttype, directions, varnames, slackvariableindices, surplusvariableindices, artificialvariableindices, basicvariableindex, biggestvalue, isinstandardform, converged, objective_value);
  var this$16 = $m_scm_ArrayBuffer$();
  var elems = $m_sr_ScalaRunTime$().wrapDoubleArray__AD__sci_ArraySeq(new $ac_D(new Float64Array([])));
  var ms = this$16.from__sc_IterableOnce__scm_ArrayBuffer(elems);
  var xs = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  if (($n(xs).u.length !== 0)) {
    var this$33 = $n(ms);
    var $x_2 = $m_s_Predef$();
    var xs$1 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    var len = $n(xs$1).u.length;
    var size$1 = 0;
    var i = 0;
    while ((i < len)) {
      var x1 = i;
      var x1$1 = $n(xs$1).get(x1);
      if ($is_sc_IterableOnce(x1$1)) {
        var x2 = $as_sc_IterableOnce(x1$1);
        var k = $n(x2).knownSize__I();
        if ((k > 0)) {
          size$1 = ((size$1 + k) | 0);
        }
      } else if ($m_sr_ScalaRunTime$().isArray__O__I__Z(x1$1, 1)) {
        size$1 = ((size$1 + $n(x1$1).u.length) | 0);
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < len)) {
      var x1$2 = i;
      var x0 = $n(xs$1).get(x1$2);
      var elems$1 = $m_s_Predef$().wrapDoubleArray__AD__scm_ArraySeq$ofDouble(x0);
      var this$24 = $n(elems$1);
      var it = new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this$24.scm_ArraySeq$ofDouble__f_array);
      while (it.hasNext__Z()) {
        var elem = it.next$mcD$sp__D();
        jsElems.push(elem);
      }
      i = ((1 + i) | 0);
    }
    var xs$2 = new $ac_D(new Float64Array(jsElems));
    var len$1 = xs$2.u.length;
    var ys = new $ac_D(len$1);
    if ((len$1 > 0)) {
      var i$1 = 0;
      while ((i$1 < len$1)) {
        var $x_1 = i$1;
        var x0$1 = xs$2.get(i$1);
        ys.set($x_1, $uD(Math.abs(x0$1)));
        i$1 = ((1 + i$1) | 0);
      }
    }
    var this$32 = $n($x_2.wrapDoubleArray__AD__scm_ArraySeq$ofDouble(ys));
    var ord = $m_s_math_Ordering$DeprecatedDoubleOrdering$();
    var elem$1 = $f_sc_IterableOnceOps__max__s_math_Ordering__O(this$32, ord);
    this$33.addOne__O__scm_ArrayBuffer(elem$1);
  }
  var xs$3 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  if (($n(xs$3).u.length !== 0)) {
    var this$44 = $n(ms);
    var $x_12 = $m_s_Predef$();
    var xs$4 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
    var f = ((_$2) => {
      var _$2$1 = $uD(_$2);
      return $uD(Math.abs(_$2$1));
    });
    var len$2 = $n(xs$4).u.length;
    var ys$1 = new $ac_D(len$2);
    if ((len$2 > 0)) {
      var i$2 = 0;
      if ((xs$4 instanceof $ac_O)) {
        var x2$1 = $asArrayOf_O(xs$4, 1);
        while ((i$2 < len$2)) {
          var $x_3 = i$2;
          var x0$2 = $n(x2$1).get(i$2);
          ys$1.set($x_3, $uD(f(x0$2)));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$4 instanceof $ac_I)) {
        var x3 = $asArrayOf_I(xs$4, 1);
        while ((i$2 < len$2)) {
          var $x_4 = i$2;
          var x0$3 = $n(x3).get(i$2);
          ys$1.set($x_4, $uD(f(x0$3)));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$4 !== null)) {
        while ((i$2 < len$2)) {
          var $x_5 = i$2;
          var x0$4 = $n(xs$4).get(i$2);
          ys$1.set($x_5, $uD(f(x0$4)));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$4 instanceof $ac_J)) {
        var x5 = $asArrayOf_J(xs$4, 1);
        while ((i$2 < len$2)) {
          var $x_6 = i$2;
          var t = $n(x5).get(i$2);
          var lo = t.RTLong__f_lo;
          var hi = t.RTLong__f_hi;
          ys$1.set($x_6, $uD(f(new $c_RTLong(lo, hi))));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$4 instanceof $ac_F)) {
        var x6 = $asArrayOf_F(xs$4, 1);
        while ((i$2 < len$2)) {
          var $x_7 = i$2;
          var x0$5 = $n(x6).get(i$2);
          ys$1.set($x_7, $uD(f(x0$5)));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$4 instanceof $ac_C)) {
        var x7 = $asArrayOf_C(xs$4, 1);
        while ((i$2 < len$2)) {
          var $x_8 = i$2;
          var x0$6 = $n(x7).get(i$2);
          ys$1.set($x_8, $uD(f($bC(x0$6))));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$4 instanceof $ac_B)) {
        var x8 = $asArrayOf_B(xs$4, 1);
        while ((i$2 < len$2)) {
          var $x_9 = i$2;
          var x0$7 = $n(x8).get(i$2);
          ys$1.set($x_9, $uD(f(x0$7)));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$4 instanceof $ac_S)) {
        var x9 = $asArrayOf_S(xs$4, 1);
        while ((i$2 < len$2)) {
          var $x_10 = i$2;
          var x0$8 = $n(x9).get(i$2);
          ys$1.set($x_10, $uD(f(x0$8)));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$4 instanceof $ac_Z)) {
        var x10 = $asArrayOf_Z(xs$4, 1);
        while ((i$2 < len$2)) {
          var $x_11 = i$2;
          var x0$9 = $n(x10).get(i$2);
          ys$1.set($x_11, $uD(f(x0$9)));
          i$2 = ((1 + i$2) | 0);
        }
      } else {
        throw new $c_s_MatchError(xs$4);
      }
    }
    var this$43 = $n($x_12.wrapDoubleArray__AD__scm_ArraySeq$ofDouble(ys$1));
    var ord$1 = $m_s_math_Ordering$DeprecatedDoubleOrdering$();
    var elem$2 = $f_sc_IterableOnceOps__max__s_math_Ordering__O(this$43, ord$1);
    this$44.addOne__O__scm_ArrayBuffer(elem$2);
  }
  var xs$5 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  if (($n(xs$5).u.length !== 0)) {
    var this$55 = $n(ms);
    var $x_22 = $m_s_Predef$();
    var xs$6 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
    var f$1 = ((_$3) => {
      var _$3$1 = $uD(_$3);
      return $uD(Math.abs(_$3$1));
    });
    var len$3 = $n(xs$6).u.length;
    var ys$2 = new $ac_D(len$3);
    if ((len$3 > 0)) {
      var i$3 = 0;
      if ((xs$6 instanceof $ac_O)) {
        var x2$2 = $asArrayOf_O(xs$6, 1);
        while ((i$3 < len$3)) {
          var $x_13 = i$3;
          var x0$10 = $n(x2$2).get(i$3);
          ys$2.set($x_13, $uD(f$1(x0$10)));
          i$3 = ((1 + i$3) | 0);
        }
      } else if ((xs$6 instanceof $ac_I)) {
        var x3$1 = $asArrayOf_I(xs$6, 1);
        while ((i$3 < len$3)) {
          var $x_14 = i$3;
          var x0$11 = $n(x3$1).get(i$3);
          ys$2.set($x_14, $uD(f$1(x0$11)));
          i$3 = ((1 + i$3) | 0);
        }
      } else if ((xs$6 !== null)) {
        while ((i$3 < len$3)) {
          var $x_15 = i$3;
          var x0$12 = $n(xs$6).get(i$3);
          ys$2.set($x_15, $uD(f$1(x0$12)));
          i$3 = ((1 + i$3) | 0);
        }
      } else if ((xs$6 instanceof $ac_J)) {
        var x5$1 = $asArrayOf_J(xs$6, 1);
        while ((i$3 < len$3)) {
          var $x_16 = i$3;
          var t$1 = $n(x5$1).get(i$3);
          var lo$1 = t$1.RTLong__f_lo;
          var hi$1 = t$1.RTLong__f_hi;
          ys$2.set($x_16, $uD(f$1(new $c_RTLong(lo$1, hi$1))));
          i$3 = ((1 + i$3) | 0);
        }
      } else if ((xs$6 instanceof $ac_F)) {
        var x6$1 = $asArrayOf_F(xs$6, 1);
        while ((i$3 < len$3)) {
          var $x_17 = i$3;
          var x0$13 = $n(x6$1).get(i$3);
          ys$2.set($x_17, $uD(f$1(x0$13)));
          i$3 = ((1 + i$3) | 0);
        }
      } else if ((xs$6 instanceof $ac_C)) {
        var x7$1 = $asArrayOf_C(xs$6, 1);
        while ((i$3 < len$3)) {
          var $x_18 = i$3;
          var x0$14 = $n(x7$1).get(i$3);
          ys$2.set($x_18, $uD(f$1($bC(x0$14))));
          i$3 = ((1 + i$3) | 0);
        }
      } else if ((xs$6 instanceof $ac_B)) {
        var x8$1 = $asArrayOf_B(xs$6, 1);
        while ((i$3 < len$3)) {
          var $x_19 = i$3;
          var x0$15 = $n(x8$1).get(i$3);
          ys$2.set($x_19, $uD(f$1(x0$15)));
          i$3 = ((1 + i$3) | 0);
        }
      } else if ((xs$6 instanceof $ac_S)) {
        var x9$1 = $asArrayOf_S(xs$6, 1);
        while ((i$3 < len$3)) {
          var $x_20 = i$3;
          var x0$16 = $n(x9$1).get(i$3);
          ys$2.set($x_20, $uD(f$1(x0$16)));
          i$3 = ((1 + i$3) | 0);
        }
      } else if ((xs$6 instanceof $ac_Z)) {
        var x10$1 = $asArrayOf_Z(xs$6, 1);
        while ((i$3 < len$3)) {
          var $x_21 = i$3;
          var x0$17 = $n(x10$1).get(i$3);
          ys$2.set($x_21, $uD(f$1(x0$17)));
          i$3 = ((1 + i$3) | 0);
        }
      } else {
        throw new $c_s_MatchError(xs$6);
      }
    }
    var this$54 = $n($x_22.wrapDoubleArray__AD__scm_ArraySeq$ofDouble(ys$2));
    var ord$2 = $m_s_math_Ordering$DeprecatedDoubleOrdering$();
    var elem$3 = $f_sc_IterableOnceOps__max__s_math_Ordering__O(this$54, ord$2);
    this$55.addOne__O__scm_ArrayBuffer(elem$3);
  }
  var this$56 = $n(ms);
  if ((!$f_sc_SeqOps__isEmpty__Z(this$56))) {
    var \u03b41$ = newproblem;
    var this$57 = $n(ms);
    var ord$3 = $m_s_math_Ordering$DeprecatedDoubleOrdering$();
    var biggestvalue$1 = (10.0 * $uD($f_sc_IterableOnceOps__max__s_math_Ordering__O(this$57, ord$3)));
    var this$58 = $n(\u03b41$);
    var lhs$1 = this$58.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
    var this$59 = $n(\u03b41$);
    var rhs$1 = this$59.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
    var this$60 = $n(\u03b41$);
    var z$1 = this$60.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
    var this$61 = $n(\u03b41$);
    var opttype$1 = this$61.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
    var this$62 = $n(\u03b41$);
    var directions$1 = this$62.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
    var this$63 = $n(\u03b41$);
    var varnames$1 = this$63.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
    var this$64 = $n(\u03b41$);
    var slackvariableindices$1 = this$64.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
    var this$65 = $n(\u03b41$);
    var surplusvariableindices$1 = this$65.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
    var this$66 = $n(\u03b41$);
    var artificialvariableindices$1 = this$66.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
    var this$67 = $n(\u03b41$);
    var basicvariableindex$1 = this$67.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
    var this$68 = $n(\u03b41$);
    var isinstandardform$1 = this$68.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
    var this$69 = $n(\u03b41$);
    var converged$1 = this$69.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
    var this$70 = $n(\u03b41$);
    var objective_value$1 = this$70.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
    $n(\u03b41$);
    newproblem = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs$1, rhs$1, z$1, opttype$1, directions$1, varnames$1, slackvariableindices$1, surplusvariableindices$1, artificialvariableindices$1, basicvariableindex$1, biggestvalue$1, isinstandardform$1, converged$1, objective_value$1);
  } else {
    var \u03b42$ = newproblem;
    $n(\u03b42$);
    var this$72 = $n(\u03b42$);
    var lhs$2 = this$72.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
    var this$73 = $n(\u03b42$);
    var rhs$2 = this$73.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
    var this$74 = $n(\u03b42$);
    var z$2 = this$74.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
    var this$75 = $n(\u03b42$);
    var opttype$2 = this$75.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
    var this$76 = $n(\u03b42$);
    var directions$2 = this$76.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
    var this$77 = $n(\u03b42$);
    var varnames$2 = this$77.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
    var this$78 = $n(\u03b42$);
    var slackvariableindices$2 = this$78.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
    var this$79 = $n(\u03b42$);
    var surplusvariableindices$2 = this$79.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
    var this$80 = $n(\u03b42$);
    var artificialvariableindices$2 = this$80.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
    var this$81 = $n(\u03b42$);
    var basicvariableindex$2 = this$81.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
    var this$82 = $n(\u03b42$);
    var isinstandardform$2 = this$82.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
    var this$83 = $n(\u03b42$);
    var converged$2 = this$83.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
    var this$84 = $n(\u03b42$);
    var objective_value$2 = this$84.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
    newproblem = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs$2, rhs$2, z$2, opttype$2, directions$2, varnames$2, slackvariableindices$2, surplusvariableindices$2, artificialvariableindices$2, basicvariableindex$2, 0.0, isinstandardform$2, converged$2, objective_value$2);
  }
  return newproblem;
});
$c_Lorg_expr_simplex_Simplex$.prototype.setautomaticvarnames__Lorg_expr_simplex_Simplex$SimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem = (function(s) {
  var xs = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  if (($n(xs).u.length !== 0)) {
    var p = $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(0)).u.length;
  } else {
    var p = 0;
  }
  var newvarnames = new ($d_T.getArrayOf().constr)(p);
  var isEmpty = (p <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + p) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      newvarnames.set(x0, ("x" + ((1 + x0) | 0)));
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  $n(s);
  var this$7 = $n(s);
  var lhs = this$7.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$8 = $n(s);
  var rhs = this$8.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$9 = $n(s);
  var z = this$9.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$10 = $n(s);
  var opttype = this$10.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$11 = $n(s);
  var directions = this$11.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var this$12 = $n(s);
  var slackvariableindices = this$12.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$13 = $n(s);
  var surplusvariableindices = this$13.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$14 = $n(s);
  var artificialvariableindices = this$14.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$15 = $n(s);
  var basicvariableindex = this$15.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$16 = $n(s);
  var biggestvalue = this$16.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$17 = $n(s);
  var isinstandardform = this$17.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$18 = $n(s);
  var converged = this$18.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$19 = $n(s);
  var objective_value = this$19.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  return new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs, rhs, z, opttype, directions, newvarnames, slackvariableindices, surplusvariableindices, artificialvariableindices, basicvariableindex, biggestvalue, isinstandardform, converged, objective_value);
});
$c_Lorg_expr_simplex_Simplex$.prototype.addslackvariable__Lorg_expr_simplex_Simplex$SimplexProblem__I__Lorg_expr_simplex_Simplex$SimplexProblem = (function(s, constraintindex) {
  var n = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).u.length;
  var xs = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  if (($n(xs).u.length !== 0)) {
    var p = $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(0)).u.length;
  } else {
    var p = 0;
  }
  var requirement = (constraintindex < n);
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: Constraint index out of bounds");
  }
  var dimensions = new $ac_I(new Int32Array([n, ((1 + p) | 0)]));
  var newlhs = $asArrayOf_D($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_D.getClassOf(), dimensions), 2);
  var isEmpty = (n <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + n) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var isEmpty$1 = (p <= 0);
      var scala$collection$immutable$Range$$lastElement$1 = (((-1) + p) | 0);
      if ((!isEmpty$1)) {
        var i$1 = 0;
        while (true) {
          var x0$1 = i$1;
          $n($n(newlhs).get(x0)).set(x0$1, $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0)).get(x0$1));
          if ((i$1 === scala$collection$immutable$Range$$lastElement$1)) {
            break;
          }
          i$1 = ((1 + i$1) | 0);
        }
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  $n($n(newlhs).get(constraintindex)).set(p, 1.0);
  var xs$1 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$16 = $m_s_Array$();
  var newLength = ((1 + $n(xs$1).u.length) | 0);
  var this$17 = $n(xs$1);
  var this$18 = $objectGetClass(this$17);
  var that = this$18.data.getComponentType();
  if ($d_D.isAssignableFrom($n(that).data)) {
    var dest$1 = this$16.copyOf__O__I__O(xs$1, newLength);
  } else {
    var dest = new $ac_D(newLength);
    $m_s_Array$().copy__O__I__O__I__I__V(xs$1, 0, dest, 0, $n(xs$1).u.length);
    var dest$1 = dest;
  }
  $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest$1, $n(xs$1).u.length, 0.0);
  var newz = $asArrayOf_D(dest$1, 1);
  var xs$2 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$23 = $m_s_Array$();
  var newLength$1 = ((1 + $n(xs$2).u.length) | 0);
  var this$24 = $n(xs$2);
  var this$25 = $objectGetClass(this$24);
  var that$1 = this$25.data.getComponentType();
  if ($d_I.isAssignableFrom($n(that$1).data)) {
    var dest$3 = this$23.copyOf__O__I__O(xs$2, newLength$1);
  } else {
    var dest$2 = new $ac_I(newLength$1);
    $m_s_Array$().copy__O__I__O__I__I__V(xs$2, 0, dest$2, 0, $n(xs$2).u.length);
    var dest$3 = dest$2;
  }
  $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest$3, $n(xs$2).u.length, p);
  var newslackindices = $asArrayOf_I(dest$3, 1);
  var xs$3 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$30 = $m_s_Array$();
  var newLength$2 = ((1 + $n(xs$3).u.length) | 0);
  var this$31 = $n(xs$3);
  var this$32 = $objectGetClass(this$31);
  var that$2 = this$32.data.getComponentType();
  if ($d_I.isAssignableFrom($n(that$2).data)) {
    var dest$5 = this$30.copyOf__O__I__O(xs$3, newLength$2);
  } else {
    var dest$4 = new $ac_I(newLength$2);
    $m_s_Array$().copy__O__I__O__I__I__V(xs$3, 0, dest$4, 0, $n(xs$3).u.length);
    var dest$5 = dest$4;
  }
  $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest$5, $n(xs$3).u.length, p);
  var newbasicindices = $asArrayOf_I(dest$5, 1);
  var xs$4 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var x = ("x" + ((1 + p) | 0));
  var newLength$3 = ((1 + $n(xs$4).u.length) | 0);
  var this$38 = $n(xs$4);
  var this$39 = $objectGetClass(this$38);
  var that$3 = this$39.data.getComponentType();
  if ($d_T.isAssignableFrom($n(that$3).data)) {
    var dest$7 = $m_ju_Arrays$().copyOf__AO__I__jl_Class__AO(xs$4, newLength$3, $d_T.getArrayOf().getClassOf());
  } else {
    var dest$6 = new ($d_T.getArrayOf().constr)(newLength$3);
    $m_s_Array$().copy__O__I__O__I__I__V(xs$4, 0, dest$6, 0, $n(xs$4).u.length);
    var dest$7 = dest$6;
  }
  $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest$7, $n(xs$4).u.length, x);
  var newvarnames = $asArrayOf_T(dest$7, 1);
  var xs$5 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var elem = $s_Lorg_expr_simplex_Simplex$Direction$__EQ__Lorg_expr_simplex_Simplex$Direction();
  if (((constraintindex < 0) || (constraintindex >= $n(xs$5).u.length))) {
    throw $n($m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException(constraintindex, (((-1) + $n(xs$5).u.length) | 0)));
  }
  var len = $n(xs$5).u.length;
  var destination = new ($d_Lorg_expr_simplex_Simplex$Direction.getArrayOf().constr)(len);
  $m_sc_ArrayOps$().copyToArray$extension__O__O__I__I__I(xs$5, destination, 0, 2147483647);
  destination.set(constraintindex, elem);
  $n(s);
  var this$49 = $n(s);
  var rhs = this$49.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$50 = $n(s);
  var opttype = this$50.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$51 = $n(s);
  var surplusvariableindices = this$51.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$52 = $n(s);
  var artificialvariableindices = this$52.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$53 = $n(s);
  var biggestvalue = this$53.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$54 = $n(s);
  var isinstandardform = this$54.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$55 = $n(s);
  var converged = this$55.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$56 = $n(s);
  var objective_value = this$56.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  return new $c_Lorg_expr_simplex_Simplex$SimplexProblem(newlhs, rhs, newz, opttype, destination, newvarnames, newslackindices, surplusvariableindices, artificialvariableindices, newbasicindices, biggestvalue, isinstandardform, converged, objective_value);
});
$c_Lorg_expr_simplex_Simplex$.prototype.addsurplusvariable__Lorg_expr_simplex_Simplex$SimplexProblem__I__Lorg_expr_simplex_Simplex$SimplexProblem = (function(s, constraintindex) {
  var n = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).u.length;
  var xs = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  if (($n(xs).u.length !== 0)) {
    var p = $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(0)).u.length;
  } else {
    var p = 0;
  }
  var requirement = (constraintindex < n);
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: Constraint index out of bounds");
  }
  var dimensions = new $ac_I(new Int32Array([n, ((1 + p) | 0)]));
  var newlhs = $asArrayOf_D($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_D.getClassOf(), dimensions), 2);
  var isEmpty = (n <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + n) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var isEmpty$1 = (p <= 0);
      var scala$collection$immutable$Range$$lastElement$1 = (((-1) + p) | 0);
      if ((!isEmpty$1)) {
        var i$1 = 0;
        while (true) {
          var x0$1 = i$1;
          $n($n(newlhs).get(x0)).set(x0$1, $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0)).get(x0$1));
          if ((i$1 === scala$collection$immutable$Range$$lastElement$1)) {
            break;
          }
          i$1 = ((1 + i$1) | 0);
        }
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  $n($n(newlhs).get(constraintindex)).set(p, (-1.0));
  var xs$1 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$16 = $m_s_Array$();
  var newLength = ((1 + $n(xs$1).u.length) | 0);
  var this$17 = $n(xs$1);
  var this$18 = $objectGetClass(this$17);
  var that = this$18.data.getComponentType();
  if ($d_D.isAssignableFrom($n(that).data)) {
    var dest$1 = this$16.copyOf__O__I__O(xs$1, newLength);
  } else {
    var dest = new $ac_D(newLength);
    $m_s_Array$().copy__O__I__O__I__I__V(xs$1, 0, dest, 0, $n(xs$1).u.length);
    var dest$1 = dest;
  }
  $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest$1, $n(xs$1).u.length, 0.0);
  var newz = $asArrayOf_D(dest$1, 1);
  var xs$2 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$23 = $m_s_Array$();
  var newLength$1 = ((1 + $n(xs$2).u.length) | 0);
  var this$24 = $n(xs$2);
  var this$25 = $objectGetClass(this$24);
  var that$1 = this$25.data.getComponentType();
  if ($d_I.isAssignableFrom($n(that$1).data)) {
    var dest$3 = this$23.copyOf__O__I__O(xs$2, newLength$1);
  } else {
    var dest$2 = new $ac_I(newLength$1);
    $m_s_Array$().copy__O__I__O__I__I__V(xs$2, 0, dest$2, 0, $n(xs$2).u.length);
    var dest$3 = dest$2;
  }
  $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest$3, $n(xs$2).u.length, p);
  var newsurplusindices = $asArrayOf_I(dest$3, 1);
  var xs$3 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var x = ("x" + ((1 + p) | 0));
  var newLength$2 = ((1 + $n(xs$3).u.length) | 0);
  var this$31 = $n(xs$3);
  var this$32 = $objectGetClass(this$31);
  var that$2 = this$32.data.getComponentType();
  if ($d_T.isAssignableFrom($n(that$2).data)) {
    var dest$5 = $m_ju_Arrays$().copyOf__AO__I__jl_Class__AO(xs$3, newLength$2, $d_T.getArrayOf().getClassOf());
  } else {
    var dest$4 = new ($d_T.getArrayOf().constr)(newLength$2);
    $m_s_Array$().copy__O__I__O__I__I__V(xs$3, 0, dest$4, 0, $n(xs$3).u.length);
    var dest$5 = dest$4;
  }
  $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest$5, $n(xs$3).u.length, x);
  var newvarnames = $asArrayOf_T(dest$5, 1);
  var xs$4 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var elem = $s_Lorg_expr_simplex_Simplex$Direction$__EQ__Lorg_expr_simplex_Simplex$Direction();
  if (((constraintindex < 0) || (constraintindex >= $n(xs$4).u.length))) {
    throw $n($m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException(constraintindex, (((-1) + $n(xs$4).u.length) | 0)));
  }
  var len = $n(xs$4).u.length;
  var destination = new ($d_Lorg_expr_simplex_Simplex$Direction.getArrayOf().constr)(len);
  $m_sc_ArrayOps$().copyToArray$extension__O__O__I__I__I(xs$4, destination, 0, 2147483647);
  destination.set(constraintindex, elem);
  $n(s);
  var this$42 = $n(s);
  var rhs = this$42.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$43 = $n(s);
  var opttype = this$43.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$44 = $n(s);
  var slackvariableindices = this$44.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$45 = $n(s);
  var artificialvariableindices = this$45.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$46 = $n(s);
  var basicvariableindex = this$46.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$47 = $n(s);
  var biggestvalue = this$47.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$48 = $n(s);
  var isinstandardform = this$48.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$49 = $n(s);
  var converged = this$49.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$50 = $n(s);
  var objective_value = this$50.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  return new $c_Lorg_expr_simplex_Simplex$SimplexProblem(newlhs, rhs, newz, opttype, destination, newvarnames, slackvariableindices, newsurplusindices, artificialvariableindices, basicvariableindex, biggestvalue, isinstandardform, converged, objective_value);
});
$c_Lorg_expr_simplex_Simplex$.prototype.addartificialvariable__Lorg_expr_simplex_Simplex$SimplexProblem__I__Lorg_expr_simplex_Simplex$SimplexProblem = (function(s, constraintindex) {
  var M = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var n = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).u.length;
  var xs = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  if (($n(xs).u.length !== 0)) {
    var p = $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(0)).u.length;
  } else {
    var p = 0;
  }
  var requirement = (constraintindex < n);
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: Constraint index out of bounds");
  }
  var dimensions = new $ac_I(new Int32Array([n, ((1 + p) | 0)]));
  var newlhs = $asArrayOf_D($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_D.getClassOf(), dimensions), 2);
  var isEmpty = (n <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + n) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var isEmpty$1 = (p <= 0);
      var scala$collection$immutable$Range$$lastElement$1 = (((-1) + p) | 0);
      if ((!isEmpty$1)) {
        var i$1 = 0;
        while (true) {
          var x0$1 = i$1;
          $n($n(newlhs).get(x0)).set(x0$1, $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0)).get(x0$1));
          if ((i$1 === scala$collection$immutable$Range$$lastElement$1)) {
            break;
          }
          i$1 = ((1 + i$1) | 0);
        }
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  $n($n(newlhs).get(constraintindex)).set(p, 1.0);
  matchResult6: {
    var newz;
    var x7 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
    var x = $s_Lorg_expr_simplex_Simplex$OptimizationType$__Maximize__Lorg_expr_simplex_Simplex$OptimizationType();
    if ((x === null)) {
      var $x_1 = (x7 === null);
    } else {
      var this$12 = $n(x);
      var $x_1 = (this$12 === x7);
    }
    if ($x_1) {
      var xs$1 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
      var x$1 = (-M);
      var this$17 = $m_s_Array$();
      var newLength = ((1 + $n(xs$1).u.length) | 0);
      var this$18 = $n(xs$1);
      var this$19 = $objectGetClass(this$18);
      var that = this$19.data.getComponentType();
      if ($d_D.isAssignableFrom($n(that).data)) {
        var dest$1 = this$17.copyOf__O__I__O(xs$1, newLength);
      } else {
        var dest = new $ac_D(newLength);
        $m_s_Array$().copy__O__I__O__I__I__V(xs$1, 0, dest, 0, $n(xs$1).u.length);
        var dest$1 = dest;
      }
      $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest$1, $n(xs$1).u.length, x$1);
      var newz = $asArrayOf_D(dest$1, 1);
      break matchResult6;
    }
    var x$3 = $s_Lorg_expr_simplex_Simplex$OptimizationType$__Minimize__Lorg_expr_simplex_Simplex$OptimizationType();
    if ((x$3 === null)) {
      var $x_2 = (x7 === null);
    } else {
      var this$20 = $n(x$3);
      var $x_2 = (this$20 === x7);
    }
    if ($x_2) {
      var xs$2 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
      var this$25 = $m_s_Array$();
      var newLength$1 = ((1 + $n(xs$2).u.length) | 0);
      var this$26 = $n(xs$2);
      var this$27 = $objectGetClass(this$26);
      var that$1 = this$27.data.getComponentType();
      if ($d_D.isAssignableFrom($n(that$1).data)) {
        var dest$3 = this$25.copyOf__O__I__O(xs$2, newLength$1);
      } else {
        var dest$2 = new $ac_D(newLength$1);
        $m_s_Array$().copy__O__I__O__I__I__V(xs$2, 0, dest$2, 0, $n(xs$2).u.length);
        var dest$3 = dest$2;
      }
      $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest$3, $n(xs$2).u.length, M);
      var newz = $asArrayOf_D(dest$3, 1);
      break matchResult6;
    }
    throw new $c_s_MatchError(x7);
  }
  var xs$3 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$32 = $m_s_Array$();
  var newLength$2 = ((1 + $n(xs$3).u.length) | 0);
  var this$33 = $n(xs$3);
  var this$34 = $objectGetClass(this$33);
  var that$2 = this$34.data.getComponentType();
  if ($d_I.isAssignableFrom($n(that$2).data)) {
    var dest$5 = this$32.copyOf__O__I__O(xs$3, newLength$2);
  } else {
    var dest$4 = new $ac_I(newLength$2);
    $m_s_Array$().copy__O__I__O__I__I__V(xs$3, 0, dest$4, 0, $n(xs$3).u.length);
    var dest$5 = dest$4;
  }
  $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest$5, $n(xs$3).u.length, p);
  var newartificialindices = $asArrayOf_I(dest$5, 1);
  var xs$4 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$39 = $m_s_Array$();
  var newLength$3 = ((1 + $n(xs$4).u.length) | 0);
  var this$40 = $n(xs$4);
  var this$41 = $objectGetClass(this$40);
  var that$3 = this$41.data.getComponentType();
  if ($d_I.isAssignableFrom($n(that$3).data)) {
    var dest$7 = this$39.copyOf__O__I__O(xs$4, newLength$3);
  } else {
    var dest$6 = new $ac_I(newLength$3);
    $m_s_Array$().copy__O__I__O__I__I__V(xs$4, 0, dest$6, 0, $n(xs$4).u.length);
    var dest$7 = dest$6;
  }
  $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest$7, $n(xs$4).u.length, p);
  var newbasicindices = $asArrayOf_I(dest$7, 1);
  var xs$5 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var x$2 = ("x" + ((1 + p) | 0));
  var newLength$4 = ((1 + $n(xs$5).u.length) | 0);
  var this$47 = $n(xs$5);
  var this$48 = $objectGetClass(this$47);
  var that$4 = this$48.data.getComponentType();
  if ($d_T.isAssignableFrom($n(that$4).data)) {
    var dest$9 = $m_ju_Arrays$().copyOf__AO__I__jl_Class__AO(xs$5, newLength$4, $d_T.getArrayOf().getClassOf());
  } else {
    var dest$8 = new ($d_T.getArrayOf().constr)(newLength$4);
    $m_s_Array$().copy__O__I__O__I__I__V(xs$5, 0, dest$8, 0, $n(xs$5).u.length);
    var dest$9 = dest$8;
  }
  $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest$9, $n(xs$5).u.length, x$2);
  var newvarnames = $asArrayOf_T(dest$9, 1);
  var xs$6 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var elem = $s_Lorg_expr_simplex_Simplex$Direction$__EQ__Lorg_expr_simplex_Simplex$Direction();
  if (((constraintindex < 0) || (constraintindex >= $n(xs$6).u.length))) {
    throw $n($m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException(constraintindex, (((-1) + $n(xs$6).u.length) | 0)));
  }
  var len = $n(xs$6).u.length;
  var destination = new ($d_Lorg_expr_simplex_Simplex$Direction.getArrayOf().constr)(len);
  $m_sc_ArrayOps$().copyToArray$extension__O__O__I__I__I(xs$6, destination, 0, 2147483647);
  destination.set(constraintindex, elem);
  $n(s);
  var this$58 = $n(s);
  var rhs = this$58.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$59 = $n(s);
  var opttype = this$59.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$60 = $n(s);
  var slackvariableindices = this$60.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$61 = $n(s);
  var surplusvariableindices = this$61.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$62 = $n(s);
  var biggestvalue = this$62.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$63 = $n(s);
  var isinstandardform = this$63.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$64 = $n(s);
  var converged = this$64.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$65 = $n(s);
  var objective_value = this$65.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  return new $c_Lorg_expr_simplex_Simplex$SimplexProblem(newlhs, rhs, newz, opttype, destination, newvarnames, slackvariableindices, surplusvariableindices, newartificialindices, newbasicindices, biggestvalue, isinstandardform, converged, objective_value);
});
$c_Lorg_expr_simplex_Simplex$.prototype.invert__Lorg_expr_simplex_Simplex$Direction__Lorg_expr_simplex_Simplex$Direction = (function(d) {
  var x = $s_Lorg_expr_simplex_Simplex$Direction$__LE__Lorg_expr_simplex_Simplex$Direction();
  if ((x === null)) {
    var $x_1 = (d === null);
  } else {
    var this$1 = $n(x);
    var $x_1 = (this$1 === d);
  }
  if ($x_1) {
    return $s_Lorg_expr_simplex_Simplex$Direction$__GE__Lorg_expr_simplex_Simplex$Direction();
  }
  var x$3 = $s_Lorg_expr_simplex_Simplex$Direction$__GE__Lorg_expr_simplex_Simplex$Direction();
  if ((x$3 === null)) {
    var $x_2 = (d === null);
  } else {
    var this$2 = $n(x$3);
    var $x_2 = (this$2 === d);
  }
  if ($x_2) {
    return $s_Lorg_expr_simplex_Simplex$Direction$__LE__Lorg_expr_simplex_Simplex$Direction();
  }
  var x$5 = $s_Lorg_expr_simplex_Simplex$Direction$__EQ__Lorg_expr_simplex_Simplex$Direction();
  if ((x$5 === null)) {
    var $x_3 = (d === null);
  } else {
    var this$3 = $n(x$5);
    var $x_3 = (this$3 === d);
  }
  if ($x_3) {
    return $s_Lorg_expr_simplex_Simplex$Direction$__EQ__Lorg_expr_simplex_Simplex$Direction();
  }
  throw new $c_s_MatchError(d);
});
$c_Lorg_expr_simplex_Simplex$.prototype.makerhspositive__Lorg_expr_simplex_Simplex$SimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem = (function(s) {
  var n = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).u.length;
  $n(s);
  var this$1 = $n(s);
  var lhs = this$1.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$2 = $n(s);
  var rhs = this$2.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$3 = $n(s);
  var z = this$3.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$4 = $n(s);
  var opttype = this$4.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$5 = $n(s);
  var directions = this$5.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var this$6 = $n(s);
  var varnames = this$6.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var this$7 = $n(s);
  var slackvariableindices = this$7.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$8 = $n(s);
  var surplusvariableindices = this$8.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$9 = $n(s);
  var artificialvariableindices = this$9.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$10 = $n(s);
  var basicvariableindex = this$10.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$11 = $n(s);
  var biggestvalue = this$11.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$12 = $n(s);
  var isinstandardform = this$12.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$13 = $n(s);
  var converged = this$13.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$14 = $n(s);
  var objective_value = this$14.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  var elem = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs, rhs, z, opttype, directions, varnames, slackvariableindices, surplusvariableindices, artificialvariableindices, basicvariableindex, biggestvalue, isinstandardform, converged, objective_value);
  var elem$1 = null;
  elem$1 = elem;
  var isEmpty = (n <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + n) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      if (($n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).get(x0) < 0.0)) {
        var xs = $n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0);
        var this$22 = $n($m_sc_ArrayOps$().indices$extension__O__sci_Range(xs));
        if ((!this$22.sci_Range__f_isEmpty)) {
          var i$1 = this$22.sci_Range__f_start;
          while (true) {
            var x0$1 = i$1;
            $n($n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0)).set(x0$1, (-$n($n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0)).get(x0$1)));
            if ((i$1 === this$22.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
              break;
            }
            i$1 = ((i$1 + this$22.sci_Range__f_step) | 0);
          }
        }
        $n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).set(x0, (-$n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).get(x0)));
        var \u03b43$ = $as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1);
        var xs$1 = $n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
        var elem$2 = $m_Lorg_expr_simplex_Simplex$().invert__Lorg_expr_simplex_Simplex$Direction__Lorg_expr_simplex_Simplex$Direction($n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_directions).get(x0));
        if (((x0 < 0) || (x0 >= $n(xs$1).u.length))) {
          throw $n($m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException(x0, (((-1) + $n(xs$1).u.length) | 0)));
        }
        var len = $n(xs$1).u.length;
        var destination = new ($d_Lorg_expr_simplex_Simplex$Direction.getArrayOf().constr)(len);
        $m_sc_ArrayOps$().copyToArray$extension__O__O__I__I__I(xs$1, destination, 0, 2147483647);
        destination.set(x0, elem$2);
        var this$29 = $n(\u03b43$);
        var lhs$2 = this$29.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
        var this$30 = $n(\u03b43$);
        var rhs$2 = this$30.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
        var this$31 = $n(\u03b43$);
        var z$2 = this$31.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
        var this$32 = $n(\u03b43$);
        var opttype$2 = this$32.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
        var this$33 = $n(\u03b43$);
        var varnames$2 = this$33.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
        var this$34 = $n(\u03b43$);
        var slackvariableindices$2 = this$34.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
        var this$35 = $n(\u03b43$);
        var surplusvariableindices$2 = this$35.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
        var this$36 = $n(\u03b43$);
        var artificialvariableindices$2 = this$36.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
        var this$37 = $n(\u03b43$);
        var basicvariableindex$2 = this$37.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
        var this$38 = $n(\u03b43$);
        var biggestvalue$2 = this$38.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
        var this$39 = $n(\u03b43$);
        var isinstandardform$2 = this$39.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
        var this$40 = $n(\u03b43$);
        var converged$2 = this$40.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
        var this$41 = $n(\u03b43$);
        var objective_value$2 = this$41.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
        $n(\u03b43$);
        elem$1 = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs$2, rhs$2, z$2, opttype$2, destination, varnames$2, slackvariableindices$2, surplusvariableindices$2, artificialvariableindices$2, basicvariableindex$2, biggestvalue$2, isinstandardform$2, converged$2, objective_value$2);
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return $as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1);
});
$c_Lorg_expr_simplex_Simplex$.prototype.standardform__Lorg_expr_simplex_Simplex$SimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem = (function(s) {
  if ($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform) {
    var this$2 = $m_s_Console$();
    var this$3 = $n(this$2.out__Ljava_io_PrintStream());
    this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Warning: The problem is already in standard form\n");
    return s;
  }
  var elem = this.updatebiggestvalue__Lorg_expr_simplex_Simplex$SimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem(s);
  var elem$1 = null;
  elem$1 = elem;
  elem$1 = this.makerhspositive__Lorg_expr_simplex_Simplex$SimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1));
  var n = $n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).u.length;
  var isEmpty = (n <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + n) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var d = $n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_directions).get(x0);
      matchResult8: {
        var x = $s_Lorg_expr_simplex_Simplex$Direction$__LE__Lorg_expr_simplex_Simplex$Direction();
        if ((x === null)) {
          var $x_1 = (d === null);
        } else {
          var this$9 = $n(x);
          var $x_1 = (this$9 === d);
        }
        if ($x_1) {
          elem$1 = $m_Lorg_expr_simplex_Simplex$().addslackvariable__Lorg_expr_simplex_Simplex$SimplexProblem__I__Lorg_expr_simplex_Simplex$SimplexProblem($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1), x0);
          break matchResult8;
        }
        var x$3 = $s_Lorg_expr_simplex_Simplex$Direction$__GE__Lorg_expr_simplex_Simplex$Direction();
        if ((x$3 === null)) {
          var $x_2 = (d === null);
        } else {
          var this$10 = $n(x$3);
          var $x_2 = (this$10 === d);
        }
        if ($x_2) {
          elem$1 = $m_Lorg_expr_simplex_Simplex$().addsurplusvariable__Lorg_expr_simplex_Simplex$SimplexProblem__I__Lorg_expr_simplex_Simplex$SimplexProblem($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1), x0);
          elem$1 = $m_Lorg_expr_simplex_Simplex$().addartificialvariable__Lorg_expr_simplex_Simplex$SimplexProblem__I__Lorg_expr_simplex_Simplex$SimplexProblem($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1), x0);
          break matchResult8;
        }
        var x$5 = $s_Lorg_expr_simplex_Simplex$Direction$__EQ__Lorg_expr_simplex_Simplex$Direction();
        if ((x$5 === null)) {
          var $x_3 = (d === null);
        } else {
          var this$11 = $n(x$5);
          var $x_3 = (this$11 === d);
        }
        if ($x_3) {
          elem$1 = $m_Lorg_expr_simplex_Simplex$().addartificialvariable__Lorg_expr_simplex_Simplex$SimplexProblem__I__Lorg_expr_simplex_Simplex$SimplexProblem($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1), x0);
          break matchResult8;
        }
        throw new $c_s_MatchError(d);
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  var \u03b44$ = $as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1);
  $n(\u03b44$);
  var this$12 = $n(\u03b44$);
  var lhs = this$12.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$13 = $n(\u03b44$);
  var rhs = this$13.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$14 = $n(\u03b44$);
  var z = this$14.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$15 = $n(\u03b44$);
  var opttype = this$15.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$16 = $n(\u03b44$);
  var directions = this$16.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var this$17 = $n(\u03b44$);
  var varnames = this$17.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var this$18 = $n(\u03b44$);
  var slackvariableindices = this$18.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$19 = $n(\u03b44$);
  var surplusvariableindices = this$19.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$20 = $n(\u03b44$);
  var artificialvariableindices = this$20.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$21 = $n(\u03b44$);
  var basicvariableindex = this$21.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$22 = $n(\u03b44$);
  var biggestvalue = this$22.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$23 = $n(\u03b44$);
  var converged = this$23.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$24 = $n(\u03b44$);
  var objective_value = this$24.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  return new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs, rhs, z, opttype, directions, varnames, slackvariableindices, surplusvariableindices, artificialvariableindices, basicvariableindex, biggestvalue, true, converged, objective_value);
});
$c_Lorg_expr_simplex_Simplex$.prototype.mmethodcorrection__Lorg_expr_simplex_Simplex$SimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem = (function(s) {
  var M = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var n = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).u.length;
  $n(s);
  var this$1 = $n(s);
  var lhs = this$1.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$2 = $n(s);
  var rhs = this$2.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$3 = $n(s);
  var z = this$3.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$4 = $n(s);
  var opttype = this$4.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$5 = $n(s);
  var directions = this$5.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var this$6 = $n(s);
  var varnames = this$6.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var this$7 = $n(s);
  var slackvariableindices = this$7.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$8 = $n(s);
  var surplusvariableindices = this$8.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$9 = $n(s);
  var artificialvariableindices = this$9.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$10 = $n(s);
  var basicvariableindex = this$10.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$11 = $n(s);
  var biggestvalue = this$11.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$12 = $n(s);
  var isinstandardform = this$12.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$13 = $n(s);
  var converged = this$13.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$14 = $n(s);
  var objective_value = this$14.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  var elem = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs, rhs, z, opttype, directions, varnames, slackvariableindices, surplusvariableindices, artificialvariableindices, basicvariableindex, biggestvalue, isinstandardform, converged, objective_value);
  var elem$1 = null;
  elem$1 = elem;
  var isEmpty = (n <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + n) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var idx = $n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex).get(x0);
      var xs = $n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
      if ($m_sc_ArrayOps$().contains$extension__O__O__Z(xs, idx)) {
        matchResult9: {
          var x10 = $n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
          var x = $s_Lorg_expr_simplex_Simplex$OptimizationType$__Maximize__Lorg_expr_simplex_Simplex$OptimizationType();
          if ((x === null)) {
            var $x_1 = (x10 === null);
          } else {
            var this$22 = $n(x);
            var $x_1 = (this$22 === x10);
          }
          if ($x_1) {
            var xs$1 = $n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
            var this$24 = $n($m_sc_ArrayOps$().indices$extension__O__sci_Range(xs$1));
            if ((!this$24.sci_Range__f_isEmpty)) {
              var i$1 = this$24.sci_Range__f_start;
              while (true) {
                var x0$1 = i$1;
                var \u03b45$ = $n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
                $n(\u03b45$).set(x0$1, ($n(\u03b45$).get(x0$1) + (M * $n($n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0)).get(x0$1))));
                if ((i$1 === this$24.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
                  break;
                }
                i$1 = ((i$1 + this$24.sci_Range__f_step) | 0);
              }
            }
            var \u03b46$ = $as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1);
            var objective_value$3 = ($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value - (M * $n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).get(x0)));
            var this$25 = $n(\u03b46$);
            var lhs$3 = this$25.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
            var this$26 = $n(\u03b46$);
            var rhs$3 = this$26.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
            var this$27 = $n(\u03b46$);
            var z$3 = this$27.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
            var this$28 = $n(\u03b46$);
            var opttype$3 = this$28.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
            var this$29 = $n(\u03b46$);
            var directions$3 = this$29.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
            var this$30 = $n(\u03b46$);
            var varnames$3 = this$30.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
            var this$31 = $n(\u03b46$);
            var slackvariableindices$3 = this$31.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
            var this$32 = $n(\u03b46$);
            var surplusvariableindices$3 = this$32.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
            var this$33 = $n(\u03b46$);
            var artificialvariableindices$3 = this$33.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
            var this$34 = $n(\u03b46$);
            var basicvariableindex$3 = this$34.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
            var this$35 = $n(\u03b46$);
            var biggestvalue$3 = this$35.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
            var this$36 = $n(\u03b46$);
            var isinstandardform$3 = this$36.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
            var this$37 = $n(\u03b46$);
            var converged$3 = this$37.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
            $n(\u03b46$);
            elem$1 = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs$3, rhs$3, z$3, opttype$3, directions$3, varnames$3, slackvariableindices$3, surplusvariableindices$3, artificialvariableindices$3, basicvariableindex$3, biggestvalue$3, isinstandardform$3, converged$3, objective_value$3);
            break matchResult9;
          }
          var x$3 = $s_Lorg_expr_simplex_Simplex$OptimizationType$__Minimize__Lorg_expr_simplex_Simplex$OptimizationType();
          if ((x$3 === null)) {
            var $x_2 = (x10 === null);
          } else {
            var this$39 = $n(x$3);
            var $x_2 = (this$39 === x10);
          }
          if ($x_2) {
            var xs$2 = $n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
            var this$41 = $n($m_sc_ArrayOps$().indices$extension__O__sci_Range(xs$2));
            if ((!this$41.sci_Range__f_isEmpty)) {
              var i$2 = this$41.sci_Range__f_start;
              while (true) {
                var x0$2 = i$2;
                var \u03b47$ = $n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
                $n(\u03b47$).set(x0$2, ($n(\u03b47$).get(x0$2) - (M * $n($n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0)).get(x0$2))));
                if ((i$2 === this$41.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
                  break;
                }
                i$2 = ((i$2 + this$41.sci_Range__f_step) | 0);
              }
            }
            var \u03b48$ = $as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1);
            var objective_value$4 = ($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value + (M * $n($n($as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1)).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).get(x0)));
            var this$42 = $n(\u03b48$);
            var lhs$4 = this$42.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
            var this$43 = $n(\u03b48$);
            var rhs$4 = this$43.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
            var this$44 = $n(\u03b48$);
            var z$4 = this$44.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
            var this$45 = $n(\u03b48$);
            var opttype$4 = this$45.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
            var this$46 = $n(\u03b48$);
            var directions$4 = this$46.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
            var this$47 = $n(\u03b48$);
            var varnames$4 = this$47.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
            var this$48 = $n(\u03b48$);
            var slackvariableindices$4 = this$48.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
            var this$49 = $n(\u03b48$);
            var surplusvariableindices$4 = this$49.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
            var this$50 = $n(\u03b48$);
            var artificialvariableindices$4 = this$50.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
            var this$51 = $n(\u03b48$);
            var basicvariableindex$4 = this$51.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
            var this$52 = $n(\u03b48$);
            var biggestvalue$4 = this$52.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
            var this$53 = $n(\u03b48$);
            var isinstandardform$4 = this$53.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
            var this$54 = $n(\u03b48$);
            var converged$4 = this$54.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
            $n(\u03b48$);
            elem$1 = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs$4, rhs$4, z$4, opttype$4, directions$4, varnames$4, slackvariableindices$4, surplusvariableindices$4, artificialvariableindices$4, basicvariableindex$4, biggestvalue$4, isinstandardform$4, converged$4, objective_value$4);
            break matchResult9;
          }
          throw new $c_s_MatchError(x10);
        }
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return $as_Lorg_expr_simplex_Simplex$SimplexProblem(elem$1);
});
$c_Lorg_expr_simplex_Simplex$.prototype.update__Lorg_expr_simplex_Simplex$SimplexProblem__I__I__Lorg_expr_simplex_Simplex$SimplexProblem = (function(s, enteringvarindex, exitingvarindex) {
  var n = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).u.length;
  var xs = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  if (($n(xs).u.length !== 0)) {
    var p = $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(0)).u.length;
  } else {
    var p = 0;
  }
  var xs$1 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var rowindex = $m_sc_ArrayOps$().indexOf$extension__O__O__I__I(xs$1, exitingvarindex, 0);
  var requirement = (rowindex >= 0);
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: Exiting variable index not found in basic variable indices");
  }
  var pivot = $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(rowindex)).get(enteringvarindex);
  var isEmpty = (p <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + p) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var \u03b410$ = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(rowindex);
      $n(\u03b410$).set(x0, ($n(\u03b410$).get(x0) / pivot));
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).set(rowindex, ($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).get(rowindex) / pivot));
  var isEmpty$1 = (n <= 0);
  var scala$collection$immutable$Range$$lastElement$1 = (((-1) + n) | 0);
  if ((!isEmpty$1)) {
    var i$1 = 0;
    while (true) {
      var x0$1 = i$1;
      if ((x0$1 !== rowindex)) {
        var pp = $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0$1)).get(enteringvarindex);
        var isEmpty$2 = (p <= 0);
        var scala$collection$immutable$Range$$lastElement$2 = (((-1) + p) | 0);
        if ((!isEmpty$2)) {
          var i$2 = 0;
          while (true) {
            var x0$2 = i$2;
            var \u03b411$ = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0$1);
            $n(\u03b411$).set(x0$2, ($n(\u03b411$).get(x0$2) - (pp * $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(rowindex)).get(x0$2))));
            if ((i$2 === scala$collection$immutable$Range$$lastElement$2)) {
              break;
            }
            i$2 = ((1 + i$2) | 0);
          }
        }
        $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).set(x0$1, ($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).get(x0$1) - (pp * $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).get(rowindex))));
      }
      if ((i$1 === scala$collection$immutable$Range$$lastElement$1)) {
        break;
      }
      i$1 = ((1 + i$1) | 0);
    }
  }
  var pp$1 = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z).get(enteringvarindex);
  var isEmpty$3 = (p <= 0);
  var scala$collection$immutable$Range$$lastElement$3 = (((-1) + p) | 0);
  if ((!isEmpty$3)) {
    var i$3 = 0;
    while (true) {
      var x0$3 = i$3;
      $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z).set(x0$3, ($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z).get(x0$3) - (pp$1 * $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(rowindex)).get(x0$3))));
      if ((i$3 === scala$collection$immutable$Range$$lastElement$3)) {
        break;
      }
      i$3 = ((1 + i$3) | 0);
    }
  }
  var newobjectivevalue = ($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value + (pp$1 * $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).get(rowindex)));
  var xs$2 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  if (((rowindex < 0) || (rowindex >= $n(xs$2).u.length))) {
    throw $n($m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException(rowindex, (((-1) + $n(xs$2).u.length) | 0)));
  }
  var len = $n(xs$2).u.length;
  var destination = new $ac_I(len);
  $m_sc_ArrayOps$().copyToArray$extension__O__O__I__I__I(xs$2, destination, 0, 2147483647);
  destination.set(rowindex, enteringvarindex);
  $n(s);
  var this$26 = $n(s);
  var lhs = this$26.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$27 = $n(s);
  var rhs = this$27.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$28 = $n(s);
  var z = this$28.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$29 = $n(s);
  var opttype = this$29.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$30 = $n(s);
  var directions = this$30.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var this$31 = $n(s);
  var varnames = this$31.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var this$32 = $n(s);
  var slackvariableindices = this$32.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$33 = $n(s);
  var surplusvariableindices = this$33.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$34 = $n(s);
  var artificialvariableindices = this$34.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$35 = $n(s);
  var biggestvalue = this$35.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$36 = $n(s);
  var isinstandardform = this$36.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$37 = $n(s);
  var converged = this$37.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  return new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs, rhs, z, opttype, directions, varnames, slackvariableindices, surplusvariableindices, artificialvariableindices, destination, biggestvalue, isinstandardform, converged, newobjectivevalue);
});
$c_Lorg_expr_simplex_Simplex$.prototype.getenteringvariableindex__Lorg_expr_simplex_Simplex$SimplexProblem__s_Option = (function(s) {
  var x11 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var x = $s_Lorg_expr_simplex_Simplex$OptimizationType$__Maximize__Lorg_expr_simplex_Simplex$OptimizationType();
  if ((x === null)) {
    var $x_1 = (x11 === null);
  } else {
    var this$1 = $n(x);
    var $x_1 = (this$1 === x11);
  }
  if ($x_1) {
    var this$2 = $n($m_s_Predef$().wrapDoubleArray__AD__scm_ArraySeq$ofDouble($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z));
    var ord = $m_s_math_Ordering$DeprecatedDoubleOrdering$();
    var maxvalue = $uD($f_sc_IterableOnceOps__max__s_math_Ordering__O(this$2, ord));
    if ((maxvalue <= 0.0)) {
      return $m_s_None$();
    } else {
      var xs = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
      var value = $m_sc_ArrayOps$().indexOf$extension__O__O__I__I(xs, maxvalue, 0);
      return new $c_s_Some(value);
    }
  }
  var x$3 = $s_Lorg_expr_simplex_Simplex$OptimizationType$__Minimize__Lorg_expr_simplex_Simplex$OptimizationType();
  if ((x$3 === null)) {
    var $x_2 = (x11 === null);
  } else {
    var this$5 = $n(x$3);
    var $x_2 = (this$5 === x11);
  }
  if ($x_2) {
    var this$6 = $n($m_s_Predef$().wrapDoubleArray__AD__scm_ArraySeq$ofDouble($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z));
    var ord$1 = $m_s_math_Ordering$DeprecatedDoubleOrdering$();
    var minvalue = $uD($f_sc_IterableOnceOps__min__s_math_Ordering__O(this$6, ord$1));
    if ((minvalue >= 0.0)) {
      return $m_s_None$();
    } else {
      var xs$1 = $n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
      var value$1 = $m_sc_ArrayOps$().indexOf$extension__O__O__I__I(xs$1, minvalue, 0);
      return new $c_s_Some(value$1);
    }
  }
  throw new $c_s_MatchError(x11);
});
$c_Lorg_expr_simplex_Simplex$.prototype.getexitingvariableindex__Lorg_expr_simplex_Simplex$SimplexProblem__I__s_Option = (function(s, enteringvarindex) {
  var n = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).u.length;
  var elem = $m_s_None$();
  var elem$1 = null;
  elem$1 = elem;
  var elem$2 = 0.0;
  elem$2 = Infinity;
  var isEmpty = (n <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + n) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var therowvalue = $n($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs).get(x0)).get(enteringvarindex);
      if ((therowvalue > 0.0)) {
        var ratio = ($n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs).get(x0) / therowvalue);
        if ((ratio < elem$2)) {
          elem$2 = ratio;
          var value = $n($n(s).Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex).get(x0);
          elem$1 = new $c_s_Some(value);
        }
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return $as_s_Option(elem$1);
});
$c_Lorg_expr_simplex_Simplex$.prototype.singleiteration__Lorg_expr_simplex_Simplex$SimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem = (function(s) {
  var enteringvariableindexopt = this.getenteringvariableindex__Lorg_expr_simplex_Simplex$SimplexProblem__s_Option(s);
  var x = $m_s_None$();
  if ((x === enteringvariableindexopt)) {
    $n(s);
    var this$1 = $n(s);
    var lhs = this$1.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
    var this$2 = $n(s);
    var rhs = this$2.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
    var this$3 = $n(s);
    var z = this$3.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
    var this$4 = $n(s);
    var opttype = this$4.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
    var this$5 = $n(s);
    var directions = this$5.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
    var this$6 = $n(s);
    var varnames = this$6.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
    var this$7 = $n(s);
    var slackvariableindices = this$7.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
    var this$8 = $n(s);
    var surplusvariableindices = this$8.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
    var this$9 = $n(s);
    var artificialvariableindices = this$9.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
    var this$10 = $n(s);
    var basicvariableindex = this$10.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
    var this$11 = $n(s);
    var biggestvalue = this$11.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
    var this$12 = $n(s);
    var isinstandardform = this$12.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
    var this$13 = $n(s);
    var objective_value = this$13.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
    return new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs, rhs, z, opttype, directions, varnames, slackvariableindices, surplusvariableindices, artificialvariableindices, basicvariableindex, biggestvalue, isinstandardform, true, objective_value);
  }
  if ((enteringvariableindexopt instanceof $c_s_Some)) {
    var x16 = $as_s_Some(enteringvariableindexopt);
    var enteringvariableindex = $uI($n(x16).s_Some__f_value);
    var exitingvariableindexopt = this.getexitingvariableindex__Lorg_expr_simplex_Simplex$SimplexProblem__I__s_Option(s, enteringvariableindex);
    var x$3 = $m_s_None$();
    if ((x$3 === exitingvariableindexopt)) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "The problem is unbounded.");
    }
    if ((exitingvariableindexopt instanceof $c_s_Some)) {
      var x13 = $as_s_Some(exitingvariableindexopt);
      var exitingvariableindex = $uI($n(x13).s_Some__f_value);
      return this.update__Lorg_expr_simplex_Simplex$SimplexProblem__I__I__Lorg_expr_simplex_Simplex$SimplexProblem(s, enteringvariableindex, exitingvariableindex);
    }
    throw new $c_s_MatchError(exitingvariableindexopt);
  }
  throw new $c_s_MatchError(enteringvariableindexopt);
});
$c_Lorg_expr_simplex_Simplex$.prototype.simplexiterations__Lorg_expr_simplex_Simplex$SimplexProblem__ALorg_expr_simplex_Simplex$SimplexProblem = (function(s) {
  var this$1 = $m_scm_ArrayBuffer$();
  var elems = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lorg_expr_simplex_Simplex$SimplexProblem.getArrayOf().constr)([]));
  var iterations = this$1.from__sc_IterableOnce__scm_ArrayBuffer(elems);
  $n(s);
  var this$2 = $n(s);
  var lhs = this$2.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$3 = $n(s);
  var rhs = this$3.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$4 = $n(s);
  var z = this$4.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$5 = $n(s);
  var opttype = this$5.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$6 = $n(s);
  var directions = this$6.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var this$7 = $n(s);
  var varnames = this$7.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var this$8 = $n(s);
  var slackvariableindices = this$8.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$9 = $n(s);
  var surplusvariableindices = this$9.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$10 = $n(s);
  var artificialvariableindices = this$10.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$11 = $n(s);
  var basicvariableindex = this$11.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$12 = $n(s);
  var biggestvalue = this$12.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$13 = $n(s);
  var isinstandardform = this$13.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$14 = $n(s);
  var converged = this$14.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$15 = $n(s);
  var objective_value = this$15.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  var newproblem = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs, rhs, z, opttype, directions, varnames, slackvariableindices, surplusvariableindices, artificialvariableindices, basicvariableindex, biggestvalue, isinstandardform, converged, objective_value);
  newproblem = this.standardform__Lorg_expr_simplex_Simplex$SimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem(newproblem);
  var this$32 = $n(iterations);
  var source = newproblem;
  $n(source);
  var this$17 = $n(source);
  var lhs$1 = this$17.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$18 = $n(source);
  var rhs$1 = this$18.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$19 = $n(source);
  var z$1 = this$19.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$20 = $n(source);
  var opttype$1 = this$20.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$21 = $n(source);
  var directions$1 = this$21.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var this$22 = $n(source);
  var varnames$1 = this$22.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var this$23 = $n(source);
  var slackvariableindices$1 = this$23.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$24 = $n(source);
  var surplusvariableindices$1 = this$24.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$25 = $n(source);
  var artificialvariableindices$1 = this$25.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$26 = $n(source);
  var basicvariableindex$1 = this$26.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$27 = $n(source);
  var biggestvalue$1 = this$27.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$28 = $n(source);
  var isinstandardform$1 = this$28.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$29 = $n(source);
  var converged$1 = this$29.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$30 = $n(source);
  var objective_value$1 = this$30.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  var elem = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs$1, rhs$1, z$1, opttype$1, directions$1, varnames$1, slackvariableindices$1, surplusvariableindices$1, artificialvariableindices$1, basicvariableindex$1, biggestvalue$1, isinstandardform$1, converged$1, objective_value$1);
  this$32.addOne__O__scm_ArrayBuffer(elem);
  newproblem = this.mmethodcorrection__Lorg_expr_simplex_Simplex$SimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem(newproblem);
  var this$48 = $n(iterations);
  var source$1 = newproblem;
  $n(source$1);
  var this$33 = $n(source$1);
  var lhs$2 = this$33.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$34 = $n(source$1);
  var rhs$2 = this$34.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$35 = $n(source$1);
  var z$2 = this$35.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$36 = $n(source$1);
  var opttype$2 = this$36.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$37 = $n(source$1);
  var directions$2 = this$37.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var this$38 = $n(source$1);
  var varnames$2 = this$38.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var this$39 = $n(source$1);
  var slackvariableindices$2 = this$39.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$40 = $n(source$1);
  var surplusvariableindices$2 = this$40.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$41 = $n(source$1);
  var artificialvariableindices$2 = this$41.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$42 = $n(source$1);
  var basicvariableindex$2 = this$42.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$43 = $n(source$1);
  var biggestvalue$2 = this$43.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$44 = $n(source$1);
  var isinstandardform$2 = this$44.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$45 = $n(source$1);
  var converged$2 = this$45.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$46 = $n(source$1);
  var objective_value$2 = this$46.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  var elem$1 = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs$2, rhs$2, z$2, opttype$2, directions$2, varnames$2, slackvariableindices$2, surplusvariableindices$2, artificialvariableindices$2, basicvariableindex$2, biggestvalue$2, isinstandardform$2, converged$2, objective_value$2);
  this$48.addOne__O__scm_ArrayBuffer(elem$1);
  while ((!$n(newproblem).Lorg_expr_simplex_Simplex$SimplexProblem__f_converged)) {
    newproblem = this.singleiteration__Lorg_expr_simplex_Simplex$SimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem(newproblem);
    var this$64 = $n(iterations);
    var source$2 = newproblem;
    $n(source$2);
    var this$49 = $n(source$2);
    var lhs$3 = this$49.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
    var this$50 = $n(source$2);
    var rhs$3 = this$50.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
    var this$51 = $n(source$2);
    var z$3 = this$51.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
    var this$52 = $n(source$2);
    var opttype$3 = this$52.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
    var this$53 = $n(source$2);
    var directions$3 = this$53.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
    var this$54 = $n(source$2);
    var varnames$3 = this$54.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
    var this$55 = $n(source$2);
    var slackvariableindices$3 = this$55.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
    var this$56 = $n(source$2);
    var surplusvariableindices$3 = this$56.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
    var this$57 = $n(source$2);
    var artificialvariableindices$3 = this$57.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
    var this$58 = $n(source$2);
    var basicvariableindex$3 = this$58.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
    var this$59 = $n(source$2);
    var biggestvalue$3 = this$59.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
    var this$60 = $n(source$2);
    var isinstandardform$3 = this$60.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
    var this$61 = $n(source$2);
    var converged$3 = this$61.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
    var this$62 = $n(source$2);
    var objective_value$3 = this$62.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
    var elem$2 = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs$3, rhs$3, z$3, opttype$3, directions$3, varnames$3, slackvariableindices$3, surplusvariableindices$3, artificialvariableindices$3, basicvariableindex$3, biggestvalue$3, isinstandardform$3, converged$3, objective_value$3);
    this$64.addOne__O__scm_ArrayBuffer(elem$2);
  }
  var this$66 = $n(iterations);
  if ((this$66.scm_ArrayBuffer__f_size0 >= 0)) {
    var len = this$66.scm_ArrayBuffer__f_size0;
    var destination = new ($d_Lorg_expr_simplex_Simplex$SimplexProblem.getArrayOf().constr)(len);
    this$66.copyToArray__O__I__I__I(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    var it = $n(this$66.view__scm_ArrayBufferView()).iterator__sc_Iterator();
    while ($n(it).hasNext__Z()) {
      var elem$3 = $n(it).next__O();
      var unboxedElem = ((elem$3 === null) ? null : elem$3);
      jsElems.push(unboxedElem);
    }
    return new ($d_Lorg_expr_simplex_Simplex$SimplexProblem.getArrayOf().constr)(jsElems);
  }
});
$c_Lorg_expr_simplex_Simplex$.prototype.createsimplexproblem__AD__AAD__AD__ALorg_expr_simplex_Simplex$Direction__Lorg_expr_simplex_Simplex$OptimizationType__Lorg_expr_simplex_Simplex$SimplexProblem = (function(obj, amat, rhs, dir, opttype) {
  var s = this.createEmptySimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem();
  var s$1 = s;
  $n(s$1);
  var this$1 = $n(s$1);
  var lhs = this$1.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$2 = $n(s$1);
  var rhs$1 = this$2.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$3 = $n(s$1);
  var opttype$1 = this$3.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$4 = $n(s$1);
  var directions = this$4.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var this$5 = $n(s$1);
  var varnames = this$5.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var this$6 = $n(s$1);
  var slackvariableindices = this$6.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$7 = $n(s$1);
  var surplusvariableindices = this$7.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$8 = $n(s$1);
  var artificialvariableindices = this$8.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$9 = $n(s$1);
  var basicvariableindex = this$9.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$10 = $n(s$1);
  var biggestvalue = this$10.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$11 = $n(s$1);
  var isinstandardform = this$11.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$12 = $n(s$1);
  var converged = this$12.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$13 = $n(s$1);
  var objective_value = this$13.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  s = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs, rhs$1, obj, opttype$1, directions, varnames, slackvariableindices, surplusvariableindices, artificialvariableindices, basicvariableindex, biggestvalue, isinstandardform, converged, objective_value);
  var s$2 = s;
  $n(s$2);
  var this$15 = $n(s$2);
  var rhs$2 = this$15.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$16 = $n(s$2);
  var z = this$16.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$17 = $n(s$2);
  var opttype$2 = this$17.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$18 = $n(s$2);
  var directions$1 = this$18.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var this$19 = $n(s$2);
  var varnames$1 = this$19.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var this$20 = $n(s$2);
  var slackvariableindices$1 = this$20.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$21 = $n(s$2);
  var surplusvariableindices$1 = this$21.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$22 = $n(s$2);
  var artificialvariableindices$1 = this$22.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$23 = $n(s$2);
  var basicvariableindex$1 = this$23.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$24 = $n(s$2);
  var biggestvalue$1 = this$24.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$25 = $n(s$2);
  var isinstandardform$1 = this$25.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$26 = $n(s$2);
  var converged$1 = this$26.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$27 = $n(s$2);
  var objective_value$1 = this$27.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  s = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(amat, rhs$2, z, opttype$2, directions$1, varnames$1, slackvariableindices$1, surplusvariableindices$1, artificialvariableindices$1, basicvariableindex$1, biggestvalue$1, isinstandardform$1, converged$1, objective_value$1);
  var s$3 = s;
  $n(s$3);
  var this$29 = $n(s$3);
  var lhs$1 = this$29.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$30 = $n(s$3);
  var z$1 = this$30.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$31 = $n(s$3);
  var opttype$3 = this$31.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$32 = $n(s$3);
  var directions$2 = this$32.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var this$33 = $n(s$3);
  var varnames$2 = this$33.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var this$34 = $n(s$3);
  var slackvariableindices$2 = this$34.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$35 = $n(s$3);
  var surplusvariableindices$2 = this$35.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$36 = $n(s$3);
  var artificialvariableindices$2 = this$36.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$37 = $n(s$3);
  var basicvariableindex$2 = this$37.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$38 = $n(s$3);
  var biggestvalue$2 = this$38.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$39 = $n(s$3);
  var isinstandardform$2 = this$39.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$40 = $n(s$3);
  var converged$2 = this$40.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$41 = $n(s$3);
  var objective_value$2 = this$41.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  s = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs$1, rhs, z$1, opttype$3, directions$2, varnames$2, slackvariableindices$2, surplusvariableindices$2, artificialvariableindices$2, basicvariableindex$2, biggestvalue$2, isinstandardform$2, converged$2, objective_value$2);
  var s$4 = s;
  $n(s$4);
  var this$43 = $n(s$4);
  var lhs$2 = this$43.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$44 = $n(s$4);
  var rhs$3 = this$44.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$45 = $n(s$4);
  var z$2 = this$45.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$46 = $n(s$4);
  var opttype$4 = this$46.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var this$47 = $n(s$4);
  var varnames$3 = this$47.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var this$48 = $n(s$4);
  var slackvariableindices$3 = this$48.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$49 = $n(s$4);
  var surplusvariableindices$3 = this$49.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$50 = $n(s$4);
  var artificialvariableindices$3 = this$50.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$51 = $n(s$4);
  var basicvariableindex$3 = this$51.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$52 = $n(s$4);
  var biggestvalue$3 = this$52.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$53 = $n(s$4);
  var isinstandardform$3 = this$53.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$54 = $n(s$4);
  var converged$3 = this$54.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$55 = $n(s$4);
  var objective_value$3 = this$55.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  s = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs$2, rhs$3, z$2, opttype$4, dir, varnames$3, slackvariableindices$3, surplusvariableindices$3, artificialvariableindices$3, basicvariableindex$3, biggestvalue$3, isinstandardform$3, converged$3, objective_value$3);
  var s$5 = s;
  $n(s$5);
  var this$57 = $n(s$5);
  var lhs$3 = this$57.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var this$58 = $n(s$5);
  var rhs$4 = this$58.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var this$59 = $n(s$5);
  var z$3 = this$59.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var this$60 = $n(s$5);
  var directions$3 = this$60.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var this$61 = $n(s$5);
  var varnames$4 = this$61.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var this$62 = $n(s$5);
  var slackvariableindices$4 = this$62.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var this$63 = $n(s$5);
  var surplusvariableindices$4 = this$63.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var this$64 = $n(s$5);
  var artificialvariableindices$4 = this$64.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var this$65 = $n(s$5);
  var basicvariableindex$4 = this$65.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var this$66 = $n(s$5);
  var biggestvalue$4 = this$66.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var this$67 = $n(s$5);
  var isinstandardform$4 = this$67.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
  var this$68 = $n(s$5);
  var converged$4 = this$68.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
  var this$69 = $n(s$5);
  var objective_value$4 = this$69.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  s = new $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs$3, rhs$4, z$3, opttype, directions$3, varnames$4, slackvariableindices$4, surplusvariableindices$4, artificialvariableindices$4, basicvariableindex$4, biggestvalue$4, isinstandardform$4, converged$4, objective_value$4);
  s = this.setautomaticvarnames__Lorg_expr_simplex_Simplex$SimplexProblem__Lorg_expr_simplex_Simplex$SimplexProblem(s);
  return s;
});
var $d_Lorg_expr_simplex_Simplex$ = new $TypeData().initClass($c_Lorg_expr_simplex_Simplex$, "org.expr.simplex.Simplex$", ({
  Lorg_expr_simplex_Simplex$: 1
}));
var $n_Lorg_expr_simplex_Simplex$;
function $m_Lorg_expr_simplex_Simplex$() {
  if ((!$n_Lorg_expr_simplex_Simplex$)) {
    $n_Lorg_expr_simplex_Simplex$ = new $c_Lorg_expr_simplex_Simplex$();
  }
  return $n_Lorg_expr_simplex_Simplex$;
}
function $s_Lorg_expr_simplex_hello__main__AT__V(args) {
  try {
    $m_Lorg_expr_simplex_Main$package$().hello__V();
  } catch (e) {
    if (false) {
      var error = $as_s_util_CommandLineParser$ParseError(e);
      $m_s_util_CommandLineParser$().showError__s_util_CommandLineParser$ParseError__V(error);
    } else {
      throw e;
    }
  }
}
function $s_RTLong__remainderUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderUnsignedImpl__I__I__I__I__I($n(a).RTLong__f_lo, $n(a).RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__remainder__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I($n(a).RTLong__f_lo, $n(a).RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__divideUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideUnsignedImpl__I__I__I__I__I($n(a).RTLong__f_lo, $n(a).RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__divide__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I($n(a).RTLong__f_lo, $n(a).RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__fromDoubleBits__D__O__RTLong(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  return new $c_RTLong($uI(fpBitsDataView.getInt32(0, true)), $uI(fpBitsDataView.getInt32(4, true)));
}
function $s_RTLong__fromDouble__D__RTLong(value) {
  var this$1 = $m_RTLong$();
  var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
}
function $s_RTLong__fromUnsignedInt__I__RTLong(value) {
  return new $c_RTLong(value, 0);
}
function $s_RTLong__fromInt__I__RTLong(value) {
  return new $c_RTLong(value, (value >> 31));
}
function $s_RTLong__clz__RTLong__I(a) {
  var hi = $n(a).RTLong__f_hi;
  if ((hi !== 0)) {
    return Math.clz32(hi);
  } else {
    var i = $n(a).RTLong__f_lo;
    return ((32 + Math.clz32(i)) | 0);
  }
}
function $s_RTLong__toFloat__RTLong__F(a) {
  var lo = $n(a).RTLong__f_lo;
  var hi = $n(a).RTLong__f_hi;
  var compressedLo = (((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo)));
  return Math.fround(((4.294967296E9 * hi) + (compressedLo >>> 0.0)));
}
function $s_RTLong__toDouble__RTLong__D(a) {
  var lo = $n(a).RTLong__f_lo;
  var hi = $n(a).RTLong__f_hi;
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__RTLong__I(a) {
  return $n(a).RTLong__f_lo;
}
function $s_RTLong__bitsToDouble__RTLong__O__D(a, fpBitsDataView) {
  fpBitsDataView.setInt32(0, $n(a).RTLong__f_lo, true);
  fpBitsDataView.setInt32(4, $n(a).RTLong__f_hi, true);
  return $uD(fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__RTLong__RTLong__RTLong(a, b) {
  var alo = $n(a).RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, $n(b).RTLong__f_hi) + Math.imul($n(a).RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi);
}
function $s_RTLong__sub__RTLong__RTLong__RTLong(a, b) {
  var alo = $n(a).RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var lo = ((alo - blo) | 0);
  return new $c_RTLong(lo, (((($n(a).RTLong__f_hi - $n(b).RTLong__f_hi) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0));
}
function $s_RTLong__add__RTLong__RTLong__RTLong(a, b) {
  var alo = $n(a).RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var lo = ((alo + blo) | 0);
  return new $c_RTLong(lo, (((($n(a).RTLong__f_hi + $n(b).RTLong__f_hi) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0));
}
function $s_RTLong__sar__RTLong__I__RTLong(a, n) {
  var hi = $n(a).RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? ((($n(a).RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
}
function $s_RTLong__shr__RTLong__I__RTLong(a, n) {
  var hi = $n(a).RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? ((($n(a).RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
}
function $s_RTLong__shl__RTLong__I__RTLong(a, n) {
  var lo = $n(a).RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | ($n(a).RTLong__f_hi << n)) : (lo << n)));
}
function $s_RTLong__xor__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(($n(a).RTLong__f_lo ^ $n(b).RTLong__f_lo), ($n(a).RTLong__f_hi ^ $n(b).RTLong__f_hi));
}
function $s_RTLong__and__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(($n(a).RTLong__f_lo & $n(b).RTLong__f_lo), ($n(a).RTLong__f_hi & $n(b).RTLong__f_hi));
}
function $s_RTLong__or__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong(($n(a).RTLong__f_lo | $n(b).RTLong__f_lo), ($n(a).RTLong__f_hi | $n(b).RTLong__f_hi));
}
function $s_RTLong__geu__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) >= ($n(b).RTLong__f_lo >>> 0)) : ((ahi >>> 0) >= (bhi >>> 0)));
}
function $s_RTLong__gtu__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) > ($n(b).RTLong__f_lo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) <= ($n(b).RTLong__f_lo >>> 0)) : ((ahi >>> 0) <= (bhi >>> 0)));
}
function $s_RTLong__ltu__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) < ($n(b).RTLong__f_lo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) >= ($n(b).RTLong__f_lo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) > ($n(b).RTLong__f_lo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) <= ($n(b).RTLong__f_lo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__RTLong__RTLong__Z(a, b) {
  var ahi = $n(a).RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (($n(a).RTLong__f_lo >>> 0) < ($n(b).RTLong__f_lo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__RTLong__RTLong__Z(a, b) {
  return (!(($n(a).RTLong__f_lo === $n(b).RTLong__f_lo) && ($n(a).RTLong__f_hi === $n(b).RTLong__f_hi)));
}
function $s_RTLong__equals__RTLong__RTLong__Z(a, b) {
  return (($n(a).RTLong__f_lo === $n(b).RTLong__f_lo) && ($n(a).RTLong__f_hi === $n(b).RTLong__f_hi));
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi;
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === $n(x2).RTLong__f_lo) && (this.RTLong__f_hi === $n(x2).RTLong__f_hi));
  } else {
    return false;
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi);
});
$c_RTLong.prototype.toString__T = (function() {
  var this$1 = $m_RTLong$();
  return this$1.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24);
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16);
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo;
});
$c_RTLong.prototype.longValue__J = (function() {
  return this;
});
$c_RTLong.prototype.floatValue__F = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  var compressedLo = (((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo)));
  return Math.fround(((4.294967296E9 * hi) + (compressedLo >>> 0.0)));
});
$c_RTLong.prototype.doubleValue__D = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(that).RTLong__f_lo, $n(that).RTLong__f_hi);
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"));
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)));
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth));
}
var $d_RTLong = new $TypeData().initClass($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  RTLong: 1
}));
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (x | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - Math.clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - Math.clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0);
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, true);
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (x | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo;
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, false);
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, askQuotient) {
  var shift = ((((bhi !== 0) ? Math.clz32(bhi) : ((32 + Math.clz32(blo)) | 0)) - ((ahi !== 0) ? Math.clz32(ahi) : ((32 + Math.clz32(alo)) | 0))) | 0);
  var b = shift;
  var lo = (((32 & b) === 0) ? (blo << b) : 0);
  var hi = (((32 & b) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - b) | 0)) | 0) | (bhi << b)) : (blo << b));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? ((alo$1 >>> 0) >= (blo$1 >>> 0)) : ((ahi$1 >>> 0) >= (bhi$1 >>> 0)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((hi$1 - hi$2) | 0) + ((((~lo$1) & lo$2) | ((~(lo$1 ^ lo$2)) & lo$3)) >> 31)) | 0);
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift));
      } else {
        quotHi = (quotHi | (1 << shift));
      }
    }
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? ((alo$2 >>> 0) >= (blo >>> 0)) : ((ahi$2 >>> 0) >= (bhi >>> 0)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + (lo$6 >>> 0.0));
    var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
    if (askQuotient) {
      var x = (remDouble / bDouble);
      var lo$7 = (x | 0.0);
      var x$1 = (x / 4.294967296E9);
      var hi$7 = (x$1 | 0.0);
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((hi$8 + hi$7) | 0) + ((((lo$8 & lo$7) | ((lo$8 | lo$7) & (~lo$9))) >>> 31) | 0)) | 0);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = hi$9;
      return lo$9;
    } else {
      var rem_mod_bDouble = (remDouble % bDouble);
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (x$2 | 0.0);
      return (rem_mod_bDouble | 0.0);
    }
  } else if (askQuotient) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo;
  } else {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo;
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    var this$2 = ((4.294967296E9 * hi) + (lo >>> 0.0));
    return ("" + this$2);
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var approxNum = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var approxQuot = $uD(Math.floor((1.0E-9 * approxNum)));
    var x = approxQuot;
    var approxRem = ((rlo - Math.imul(1000000000, (x | 0.0))) | 0);
    if ((approxRem < 0)) {
      approxQuot = (approxQuot - 1.0);
      approxRem = ((1000000000 + approxRem) | 0);
    } else if ((approxRem >= 1000000000)) {
      approxQuot = (approxQuot + 1.0);
      approxRem = (((-1000000000) + approxRem) | 0);
    }
    var this$4 = approxRem;
    var remStr = ("" + this$4);
    var this$6 = approxQuot;
    var start = remStr.length;
    var s = ((("" + this$6) + $as_T("000000000".substring(start))) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1);
  } else {
    var rawLo = (value | 0.0);
    var x = (value / 4.294967296E9);
    var rawHi = (x | 0.0);
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : (((alo >>> 0) < (blo >>> 0)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648);
      } else {
        var lo = ((alo / $checkIntDivisor(blo)) | 0);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1);
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else {
    var sign = (ahi >> 31);
    var xlo = (alo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var sign$1 = (bhi >> 31);
    var xlo$1 = (blo ^ sign$1);
    var rlo$1 = ((xlo$1 - sign$1) | 0);
    var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, rlo, rhi, rlo$1, rhi$1);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo;
    } else {
      var hi = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = hi$1;
      return lo$1;
    }
  }
});
$c_RTLong$.prototype.divideUnsignedImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return (((alo >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else {
    return $p_RTLong$__unsigned_$div__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      var lo = ((alo % $checkIntDivisor(blo)) | 0);
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
      return lo;
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else {
    var sign = (ahi >> 31);
    var xlo = (alo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var sign$1 = (bhi >> 31);
    var xlo$1 = (blo ^ sign$1);
    var rlo$1 = ((xlo$1 - sign$1) | 0);
    var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, rlo, rhi, rlo$1, rhi$1);
    if ((ahi < 0)) {
      var hi = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = hi$1;
      return lo$1;
    } else {
      return absRLo;
    }
  }
});
$c_RTLong$.prototype.remainderUnsignedImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return (((alo >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else {
    return $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
var $d_RTLong$ = new $TypeData().initClass($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  RTLong$: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$c_s_LowPriorityImplicits2.prototype = new $h_O();
$c_s_LowPriorityImplicits2.prototype.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $c_s_LowPriorityImplicits2.prototype;
/** @constructor */
function $c_sc_ArrayOps$() {
  this.sc_ArrayOps$__f_fallback = null;
  $n_sc_ArrayOps$ = this;
  this.sc_ArrayOps$__f_fallback = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_ArrayOps$().sc_ArrayOps$__f_fallback));
}
$c_sc_ArrayOps$.prototype = new $h_O();
$c_sc_ArrayOps$.prototype.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $c_sc_ArrayOps$.prototype;
$c_sc_ArrayOps$.prototype.last$extension__O__O = (function(this$) {
  if (($m_jl_reflect_Array$().getLength__O__I(this$) !== 0)) {
    return $m_sr_ScalaRunTime$().array_apply__O__I__O(this$, (((-1) + $m_jl_reflect_Array$().getLength__O__I(this$)) | 0));
  } else {
    throw new $c_ju_NoSuchElementException("last of empty array");
  }
});
$c_sc_ArrayOps$.prototype.indexOf$extension__O__O__I__I = (function(this$, elem, from) {
  var i = from;
  while ((i < $m_jl_reflect_Array$().getLength__O__I(this$))) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, $m_sr_ScalaRunTime$().array_apply__O__I__O(this$, i))) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$c_sc_ArrayOps$.prototype.contains$extension__O__O__Z = (function(this$, elem) {
  _return: {
    var i = 0;
    while ((i < $m_jl_reflect_Array$().getLength__O__I(this$))) {
      var x0 = $m_sr_ScalaRunTime$().array_apply__O__I__O(this$, i);
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(x0, elem)) {
        var $x_1 = i;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = (-1);
  }
  return ($x_1 >= 0);
});
$c_sc_ArrayOps$.prototype.indices$extension__O__sci_Range = (function(this$) {
  var end = $m_jl_reflect_Array$().getLength__O__I(this$);
  return new $c_sci_Range$Exclusive(0, end, 1);
});
$c_sc_ArrayOps$.prototype.copyToArray$extension__O__O__I__I__I = (function(this$, xs, start, len) {
  var srcLen = $m_jl_reflect_Array$().getLength__O__I(this$);
  var destLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V(this$, 0, xs, start, copied);
  }
  return copied;
});
var $d_sc_ArrayOps$ = new $TypeData().initClass($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  sc_ArrayOps$: 1
}));
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$();
  }
  return $n_sc_ArrayOps$;
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)));
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"));
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)));
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth));
}
function $f_sc_IterableOnceOps__reduceLeft__F2__O($thiz, op) {
  if ($is_sc_IndexedSeq($thiz)) {
    var x2 = $as_sc_IndexedSeq($thiz);
    if (($n(x2).length__I() > 0)) {
      var z = $n(x2).apply__I__O(0);
      return $p_sc_IterableOnceOps__loop$1__I__I__O__F2__sc_IndexedSeq__O($thiz, 1, $n(x2).length__I(), z, op, x2);
    }
  }
  if (($n($as_sc_IterableOnce($thiz)).knownSize__I() === 0)) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var acc = $n(it).next__O();
    while ($n(it).hasNext__Z()) {
      acc = $n(op).apply__O__O__O(acc, $n(it).next__O());
    }
    return acc;
  } else {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  var i = start;
  var y = (($m_jl_reflect_Array$().getLength__O__I(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && $n(it).hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, $n(it).next__O());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__min__s_math_Ordering__O($thiz, ord) {
  var x1 = $n($as_sc_IterableOnce($thiz)).knownSize__I();
  switch (x1) {
    case (-1): {
      var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
      if ($n(it).hasNext__Z()) {
        var acc = $n(it).next__O();
        while ($n(it).hasNext__Z()) {
          var x0 = acc;
          var x1$1 = $n(it).next__O();
          var this$1 = $n(ord);
          acc = $f_s_math_Ordering__min__O__O__O(this$1, x0, x1$1);
        }
        return acc;
      } else {
        throw new $c_jl_UnsupportedOperationException("empty.min");
      }
      break;
    }
    case 0: {
      throw new $c_jl_UnsupportedOperationException("empty.min");
      break;
    }
    default: {
      return $thiz.reduceLeft__F2__O(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((x$2$2, y$2$2) => {
        var this$2 = $n(ord);
        return $f_s_math_Ordering__min__O__O__O(this$2, x$2$2, y$2$2);
      })));
    }
  }
}
function $f_sc_IterableOnceOps__max__s_math_Ordering__O($thiz, ord) {
  var x1 = $n($as_sc_IterableOnce($thiz)).knownSize__I();
  switch (x1) {
    case (-1): {
      var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
      if ($n(it).hasNext__Z()) {
        var acc = $n(it).next__O();
        while ($n(it).hasNext__Z()) {
          var x0 = acc;
          var x1$1 = $n(it).next__O();
          var this$1 = $n(ord);
          acc = $f_s_math_Ordering__max__O__O__O(this$1, x0, x1$1);
        }
        return acc;
      } else {
        throw new $c_jl_UnsupportedOperationException("empty.max");
      }
      break;
    }
    case 0: {
      throw new $c_jl_UnsupportedOperationException("empty.max");
      break;
    }
    default: {
      return $thiz.reduceLeft__F2__O(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((x$2$2, y$2$2) => {
        var this$2 = $n(ord);
        return $f_s_math_Ordering__max__O__O__O(this$2, x$2$2, y$2$2);
      })));
    }
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if (($n($as_sc_IterableOnce($thiz)).knownSize__I() === 0)) {
    return (("" + start) + end);
  } else {
    var this$1 = $n($thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end));
    return $n(this$1.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
  }
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = $n(b).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  }
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var this$3 = $n(jsb);
    var obj = $n(it).next__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while ($n(it).hasNext__Z()) {
      var this$4 = $n(jsb);
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      var this$5 = $n(jsb);
      var obj$1 = $n(it).next__O();
      this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
    }
  }
  var this$6 = $n(end);
  if ((this$6.length !== 0)) {
    var this$7 = $n(jsb);
    this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$2) {
  if (($n($as_sc_IterableOnce($thiz)).knownSize__I() >= 0)) {
    var destination = $n(evidence$2).newArray__I__O($n($as_sc_IterableOnce($thiz)).knownSize__I());
    $thiz.copyToArray__O__I__I__I(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = $n(evidence$2).runtimeClass__jl_Class();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.getClassOf());
    jsElems = [];
    var xs = $as_sc_IterableOnce($thiz);
    var it = $n(xs).iterator__sc_Iterator();
    while ($n(it).hasNext__Z()) {
      var elem = $n(it).next__O();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $n(elementClass).data.zero : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.getClassOf()) ? $d_jl_Void.getClassOf() : (((elementClass === $d_sr_Null$.getClassOf()) || (elementClass === $d_sr_Nothing$.getClassOf())) ? $d_O.getClassOf() : elementClass));
    return $n(elemRuntimeClass).data.getArrayOf().wrapArray(jsElems);
  }
}
function $p_sc_IterableOnceOps__loop$1__I__I__O__F2__sc_IndexedSeq__O($thiz, at, end, acc, op$1, seq$1) {
  while (true) {
    if ((at === end)) {
      return acc;
    } else {
      var temp$at = ((1 + at) | 0);
      var temp$acc = $n(op$1).apply__O__O__O(acc, $n(seq$1).apply__I__O(at));
      at = temp$at;
      acc = temp$acc;
    }
  }
}
function $is_sc_IterableOnceOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnceOps)));
}
function $as_sc_IterableOnceOps(obj) {
  return (($is_sc_IterableOnceOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnceOps"));
}
function $isArrayOf_sc_IterableOnceOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnceOps)));
}
function $asArrayOf_sc_IterableOnceOps(obj, depth) {
  return (($isArrayOf_sc_IterableOnceOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnceOps;", depth));
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.sc_Iterator$ConcatIteratorCell__f_head = null;
  this.sc_Iterator$ConcatIteratorCell__f_tail = null;
  this.sc_Iterator$ConcatIteratorCell__f_head = head;
  this.sc_Iterator$ConcatIteratorCell__f_tail = tail;
}
$c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$c_sc_Iterator$ConcatIteratorCell.prototype.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $c_sc_Iterator$ConcatIteratorCell.prototype;
$c_sc_Iterator$ConcatIteratorCell.prototype.headIterator__sc_Iterator = (function() {
  return $n($as_sc_IterableOnce($n(this.sc_Iterator$ConcatIteratorCell__f_head).apply__O())).iterator__sc_Iterator();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().initClass($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  sc_Iterator$ConcatIteratorCell: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.sc_StringOps$__f_fallback = null;
  $n_sc_StringOps$ = this;
  this.sc_StringOps$__f_fallback = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_StringOps$().sc_StringOps$__f_fallback));
}
$c_sc_StringOps$.prototype = new $h_O();
$c_sc_StringOps$.prototype.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $c_sc_StringOps$.prototype;
$c_sc_StringOps$.prototype.unwrapArg$extension__T__O__O = (function(this$, arg) {
  if (false) {
    var x2 = $as_s_math_ScalaNumber(arg);
    return $n(x2).underlying__O();
  } else {
    return arg;
  }
});
$c_sc_StringOps$.prototype.format$extension__T__sci_Seq__T = (function(this$, args) {
  var args$1 = $asArrayOf_O($n($as_sc_IterableOnceOps($n(args).map__F1__O(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((arg$2$2) => $m_sc_StringOps$().unwrapArg$extension__T__O__O(this$, arg$2$2)))))).toArray__s_reflect_ClassTag__O($m_s_reflect_ManifestFactory$ObjectManifest$()), 1);
  return $m_jl_String$().format__T__AO__T(this$, args$1);
});
var $d_sc_StringOps$ = new $TypeData().initClass($c_sc_StringOps$, "scala.collection.StringOps$", ({
  sc_StringOps$: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_scg_CommonErrors$() {
}
$c_scg_CommonErrors$.prototype = new $h_O();
$c_scg_CommonErrors$.prototype.constructor = $c_scg_CommonErrors$;
/** @constructor */
function $h_scg_CommonErrors$() {
}
$h_scg_CommonErrors$.prototype = $c_scg_CommonErrors$.prototype;
$c_scg_CommonErrors$.prototype.indexOutOfBounds__I__I__jl_IndexOutOfBoundsException = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().initClass($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  scg_CommonErrors$: 1
}));
var $n_scg_CommonErrors$;
function $m_scg_CommonErrors$() {
  if ((!$n_scg_CommonErrors$)) {
    $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
  }
  return $n_scg_CommonErrors$;
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.sci_VectorStatics$__f_empty1 = null;
  this.sci_VectorStatics$__f_empty2 = null;
  this.sci_VectorStatics$__f_empty3 = null;
  this.sci_VectorStatics$__f_empty4 = null;
  this.sci_VectorStatics$__f_empty5 = null;
  this.sci_VectorStatics$__f_empty6 = null;
  $n_sci_VectorStatics$ = this;
  this.sci_VectorStatics$__f_empty1 = new $ac_O(0);
  this.sci_VectorStatics$__f_empty2 = new ($d_O.getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
}
$c_sci_VectorStatics$.prototype = new $h_O();
$c_sci_VectorStatics$.prototype.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $c_sci_VectorStatics$.prototype;
$c_sci_VectorStatics$.prototype.copyPrepend__O__AO__AO = (function(elem, a) {
  var this$1 = $n(a);
  var this$2 = $objectGetClass(this$1);
  var componentType = this$2.data.getComponentType();
  var length = ((1 + $n(a).u.length) | 0);
  var ac = $asArrayOf_O($n(componentType).data.newArray(length), 1);
  var length$1 = $n(a).u.length;
  $systemArraycopyRefs($n(a), 0, $n(ac), 1, length$1);
  $n(ac).set(0, elem);
  return ac;
});
$c_sci_VectorStatics$.prototype.foreachRec__I__AO__F1__V = (function(level, a, f) {
  var i = 0;
  var len = $n(a).u.length;
  if ((level === 0)) {
    while ((i < len)) {
      $n(f).apply__O__O($n(a).get(i));
      i = ((1 + i) | 0);
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.foreachRec__I__AO__F1__V(l, $asArrayOf_O($n(a).get(i), 1), f);
      i = ((1 + i) | 0);
    }
  }
});
$c_sci_VectorStatics$.prototype.mapElems1__AO__F1__AO = (function(a, f) {
  var i = 0;
  while ((i < $n(a).u.length)) {
    var v1 = $n(a).get(i);
    var v2 = $n(f).apply__O__O(v1);
    if ((!Object.is(v1, v2))) {
      return this.mapElems1Rest__AO__F1__I__O__AO(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$c_sci_VectorStatics$.prototype.mapElems1Rest__AO__F1__I__O__AO = (function(a, f, at, v2) {
  var ac = new $ac_O($n(a).u.length);
  if ((at > 0)) {
    $systemArraycopyRefs($n(a), 0, ac, 0, at);
  }
  ac.set(at, v2);
  var i = ((1 + at) | 0);
  while ((i < $n(a).u.length)) {
    ac.set(i, $n(f).apply__O__O($n(a).get(i)));
    i = ((1 + i) | 0);
  }
  return ac;
});
$c_sci_VectorStatics$.prototype.mapElems__I__AO__F1__AO = (function(n, a, f) {
  if ((n === 1)) {
    return this.mapElems1__AO__F1__AO(a, f);
  } else {
    var i = 0;
    while ((i < $n(a).u.length)) {
      var v1 = $n(a).get(i);
      var v2 = this.mapElems__I__AO__F1__AO((((-1) + n) | 0), $asArrayOf_O(v1, 1), f);
      if ((v1 !== v2)) {
        return this.mapElemsRest__I__AO__F1__I__O__AO(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$c_sci_VectorStatics$.prototype.mapElemsRest__I__AO__F1__I__O__AO = (function(n, a, f, at, v2) {
  var this$1 = $n(a);
  var this$2 = $objectGetClass(this$1);
  var componentType = this$2.data.getComponentType();
  var length = $n(a).u.length;
  var ac = $asArrayOf_O($n(componentType).data.newArray(length), 1);
  if ((at > 0)) {
    $systemArraycopyRefs($n(a), 0, $n(ac), 0, at);
  }
  $n(ac).set(at, v2);
  var i = ((1 + at) | 0);
  while ((i < $n(a).u.length)) {
    $n(ac).set(i, this.mapElems__I__AO__F1__AO((((-1) + n) | 0), $asArrayOf_O($n(a).get(i), 1), f));
    i = ((1 + i) | 0);
  }
  return ac;
});
var $d_sci_VectorStatics$ = new $TypeData().initClass($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  sci_VectorStatics$: 1
}));
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$();
  }
  return $n_sci_VectorStatics$;
}
/** @constructor */
function $c_scm_MutationTracker$() {
}
$c_scm_MutationTracker$.prototype = new $h_O();
$c_scm_MutationTracker$.prototype.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
}
$h_scm_MutationTracker$.prototype = $c_scm_MutationTracker$.prototype;
$c_scm_MutationTracker$.prototype.checkMutations__I__I__T__V = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().initClass($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  scm_MutationTracker$: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true;
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y);
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y);
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z($n(x), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2);
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      var this$1 = $n(x3).c;
      return (x2$1 === this$1);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $n(x3).c;
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z($n(xn), x3));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z($n(xn), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2);
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === ((4.294967296E9 * hi) + (lo >>> 0.0)));
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return $n(x4).equals__O__Z(x2);
    } else {
      return false;
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return (((4.294967296E9 * hi$1) + (lo$1 >>> 0.0)) === x3$3);
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return $n(x4$2).equals__O__Z(new $c_RTLong(lo$1, hi$1));
    } else {
      return false;
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z($n(xn), yn));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    var this$1 = $n(xc).c;
    var this$2 = $n(x2).c;
    return (this$1 === this$2);
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      var this$3 = $n(xc).c;
      return (x2$1 === this$3);
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $n(xc).c;
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z($n(x3), xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  sr_BoxesRunTime$: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().initClass(0, "scala.runtime.Null$", ({
  sr_Null$: 1
}));
function $p_sr_ScalaRunTime$__isArrayClass__jl_Class__I__Z($thiz, clazz, atLevel) {
  while (true) {
    if ((clazz !== null)) {
      var this$1 = $n(clazz);
      var $x_1 = this$1.data.isArrayClass;
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      if ((atLevel === 1)) {
        return true;
      } else {
        var this$2 = $n(clazz);
        var temp$clazz = this$2.data.getComponentType();
        var temp$atLevel = (((-1) + atLevel) | 0);
        clazz = temp$clazz;
        atLevel = temp$atLevel;
      }
    } else {
      return false;
    }
  }
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.isArray__O__I__Z = (function(x, atLevel) {
  if ((x !== null)) {
    var this$1 = $n(x);
    return $p_sr_ScalaRunTime$__isArrayClass__jl_Class__I__Z(this, $objectGetClass(this$1), atLevel);
  } else {
    return false;
  }
});
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return $n(x2).get(idx);
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return $n(x3).get(idx);
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return $n(x4).get(idx);
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return $n(x5).get(idx);
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return $n(x6).get(idx);
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return $bC($n(x7).get(idx));
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return $n(x8).get(idx);
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return $n(x9).get(idx);
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return $n(x10).get(idx);
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    $n(x2).set(idx, value);
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    $n(x3).set(idx, $uI(value));
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    $n(x4).set(idx, $uD(value));
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    $n(x5).set(idx, $uJ(value));
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    $n(x6).set(idx, $uF(value));
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    $n(x7).set(idx, $uC(value));
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    $n(x8).set(idx, $uB(value));
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    $n(x9).set(idx, $uS(value));
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    $n(x10).set(idx, $uZ(value));
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = $n($n(x).productIterator__sc_Iterator());
  var start = ($n(x).productPrefix__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")");
});
$c_sr_ScalaRunTime$.prototype.genericWrapArray__O__sci_ArraySeq = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().unsafeWrapArray__O__sci_ArraySeq(xs));
});
$c_sr_ScalaRunTime$.prototype.wrapRefArray__AO__sci_ArraySeq = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if (($n(xs).u.length === 0)) {
    var this$1 = $m_sci_ArraySeq$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$1);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
$c_sr_ScalaRunTime$.prototype.wrapDoubleArray__AD__sci_ArraySeq = (function(xs) {
  return ((xs !== null) ? new $c_sci_ArraySeq$ofDouble(xs) : null);
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  sr_ScalaRunTime$: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$c_sr_Statics$.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$c_sr_Statics$.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.avalanche__I__I((hash ^ length));
});
$c_sr_Statics$.prototype.avalanche__I__I = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    if ((((4.294967296E9 * hi) + (lo >>> 0.0)) === dv)) {
      return (lo ^ hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        var lo$1 = $uI(fpBitsDataView.getInt32(0, true));
        var hi$1 = $uI(fpBitsDataView.getInt32(4, true));
        return (lo$1 ^ hi$1);
      }
    }
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3);
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi));
  } else {
    return $dp_hashCode__I($n(x));
  }
});
$c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().initClass($c_sr_Statics$, "scala.runtime.Statics$", ({
  sr_Statics$: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_s_util_CommandLineParser$() {
}
$c_s_util_CommandLineParser$.prototype = new $h_O();
$c_s_util_CommandLineParser$.prototype.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {
}
$h_s_util_CommandLineParser$.prototype = $c_s_util_CommandLineParser$.prototype;
$c_s_util_CommandLineParser$.prototype.showError__s_util_CommandLineParser$ParseError__V = (function(err) {
  var where = (($n(err).idx__I() === 0) ? "" : (($n(err).idx__I() === 1) ? " after first argument" : ((" after " + $n(err).idx__I()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + $n(err).msg__T());
  var this$2 = $m_s_Console$();
  var this$3 = $n(this$2.out__Ljava_io_PrintStream());
  this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().initClass($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  s_util_CommandLineParser$: 1
}));
var $n_s_util_CommandLineParser$;
function $m_s_util_CommandLineParser$() {
  if ((!$n_s_util_CommandLineParser$)) {
    $n_s_util_CommandLineParser$ = new $c_s_util_CommandLineParser$();
  }
  return $n_s_util_CommandLineParser$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.s_util_DynamicVariable__f_v = null;
  this.s_util_DynamicVariable__f_v = init;
}
$c_s_util_DynamicVariable.prototype = new $h_O();
$c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $c_s_util_DynamicVariable.prototype;
$c_s_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().initClass($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  s_util_DynamicVariable: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length));
});
$c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
  var arr = $n(x).productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I($n($n(x).productPrefix__T()));
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.mix__I__I__I(h, $f_T__hashCode__I($n($n(x).productPrefix__T())));
    }
    var i = 0;
    while ((i < arr)) {
      var $x_1 = h;
      var x$1 = $n(x).productElement__I__O(i);
      h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0);
    }
    return this.finalizeHash__I__I__I(h, arr);
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = $n(xs).iterator__sc_Iterator();
  while ($n(iterator).hasNext__Z()) {
    var x = $n(iterator).next__O();
    var h = $m_sr_Statics$().anyHash__O__I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.mix__I__I__I(h$2, a);
  h$2 = this.mix__I__I__I(h$2, b);
  h$2 = this.mixLast__I__I__I(h$2, c);
  return this.finalizeHash__I__I__I(h$2, n);
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var it = $n(xs).iterator__sc_Iterator();
  var h = seed;
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(h, 0);
  }
  var x0 = $n(it).next__O();
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1);
  }
  var x1 = $n(it).next__O();
  var initial = $m_sr_Statics$().anyHash__O__I(x0);
  h = this.mix__I__I__I(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().anyHash__O__I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while ($n(it).hasNext__Z()) {
    h = this.mix__I__I__I(h, prev);
    var x = $n(it).next__O();
    var hash = $m_sr_Statics$().anyHash__O__I(x);
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.mix__I__I__I(h, hash);
      i = ((1 + i) | 0);
      while ($n(it).hasNext__Z()) {
        var $x_1 = h;
        var x$1 = $n(it).next__O();
        h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0);
      }
      return this.finalizeHash__I__I__I(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash__O__I__I = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().getLength__O__I(a);
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var x = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break;
    }
    default: {
      var x$1 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last));
});
$c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).length__I();
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var x = $n(a).apply__I__O(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break;
    }
    default: {
      var x$1 = $n(a).apply__I__O(0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $n(a).apply__I__O(1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $n(a).apply__I__O(i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $n(a).apply__I__O(i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!$n(elems).isEmpty__Z())) {
    var head = $n(elems).head__O();
    var tail = $as_sci_List($n(elems).tail__O());
    var hash = $m_sr_Statics$().anyHash__O__I(head);
    h = this.mix__I__I__I(h, hash);
    var x1 = rangeState;
    switch (x1) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n));
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mZc$sp__AZ__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, ($n(a).get(0) ? 1231 : 1237)), 1);
      break;
    }
    default: {
      var initial = ($n(a).get(0) ? 1231 : 1237);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = ($n(a).get(1) ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = ($n(a).get(i) ? 1231 : 1237);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, ($n(a).get(i) ? 1231 : 1237));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mBc$sp__AB__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break;
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mCc$sp__AC__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break;
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mDc$sp__AD__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var dv = $n(a).get(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().doubleHash__D__I(dv)), 1);
      break;
    }
    default: {
      var dv$1 = $n(a).get(0);
      var initial = $m_sr_Statics$().doubleHash__D__I(dv$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var dv$2 = $n(a).get(1);
      var prev = $m_sr_Statics$().doubleHash__D__I(dv$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var dv$3 = $n(a).get(i);
        var hash = $m_sr_Statics$().doubleHash__D__I(dv$3);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var dv$4 = $n(a).get(i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().doubleHash__D__I(dv$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mFc$sp__AF__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var fv = $n(a).get(0);
      var this$1 = $m_sr_Statics$();
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, this$1.doubleHash__D__I(fv)), 1);
      break;
    }
    default: {
      var fv$1 = $n(a).get(0);
      var this$2 = $m_sr_Statics$();
      var initial = this$2.doubleHash__D__I(fv$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var fv$2 = $n(a).get(1);
      var this$3 = $m_sr_Statics$();
      var prev = this$3.doubleHash__D__I(fv$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var fv$3 = $n(a).get(i);
        var this$4 = $m_sr_Statics$();
        var hash = this$4.doubleHash__D__I(fv$3);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var fv$4 = $n(a).get(i);
            var this$5 = $m_sr_Statics$();
            h = this.mix__I__I__I($x_2, this$5.doubleHash__D__I(fv$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mIc$sp__AI__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break;
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mJc$sp__AJ__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var t = $n(a).get(0);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi))), 1);
      break;
    }
    default: {
      var t$1 = $n(a).get(0);
      var lo$1 = t$1.RTLong__f_lo;
      var hi$1 = t$1.RTLong__f_hi;
      var initial = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$1, hi$1));
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var t$2 = $n(a).get(1);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      var prev = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$2, hi$2));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var t$3 = $n(a).get(i);
        var lo$3 = t$3.RTLong__f_lo;
        var hi$3 = t$3.RTLong__f_hi;
        var hash = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$3, hi$3));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = $n(a).get(i);
            var lo$4 = t$4.RTLong__f_lo;
            var hi$4 = t$4.RTLong__f_hi;
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$4, hi$4)));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mSc$sp__AS__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break;
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mVc$sp__Ajl_Void__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, 0), 1);
      break;
    }
    default: {
      h = this.mix__I__I__I(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        if (((rangeDiff !== ((-prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, 0);
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.jl_Character$__f_bitmap$0 = (((32 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24);
  }
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints);
}
/** @constructor */
function $c_jl_Character$() {
  this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
  this.jl_Character$__f_bitmap$0 = 0;
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.toString__I__T = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return $as_T(String.fromCodePoint(codePoint));
});
$c_jl_Character$.prototype.digitWithValidRadix__I__I__I = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().binarySearch__AI__I__I($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - $n($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this)).get(zeroCodePointIndex)) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().initClass($c_jl_Character$, "java.lang.Character$", ({
  jl_Character$: 1,
  Ljava_io_Serializable: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
function $p_jl_Double$__doubleStrPat$lzycompute__O($thiz) {
  if (((((1 & $thiz.jl_Double$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Double$__f_doubleStrPat = new RegExp("^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$");
    $thiz.jl_Double$__f_bitmap$0 = (((1 | $thiz.jl_Double$__f_bitmap$0) << 24) >> 24);
  }
  return $thiz.jl_Double$__f_doubleStrPat;
}
function $p_jl_Double$__doubleStrPat__O($thiz) {
  return (((((1 & $thiz.jl_Double$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Double$__doubleStrPat$lzycompute__O($thiz) : $thiz.jl_Double$__f_doubleStrPat);
}
function $p_jl_Double$__doubleStrHexPat$lzycompute__O($thiz) {
  if (((((2 & $thiz.jl_Double$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Double$__f_doubleStrHexPat = new RegExp("^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$");
    $thiz.jl_Double$__f_bitmap$0 = (((2 | $thiz.jl_Double$__f_bitmap$0) << 24) >> 24);
  }
  return $thiz.jl_Double$__f_doubleStrHexPat;
}
function $p_jl_Double$__doubleStrHexPat__O($thiz) {
  return (((((2 & $thiz.jl_Double$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Double$__doubleStrHexPat$lzycompute__O($thiz) : $thiz.jl_Double$__f_doubleStrHexPat);
}
function $p_jl_Double$__parseDoubleSlowPath__T__D($thiz, s) {
  var groups = $p_jl_Double$__doubleStrHexPat__O($thiz).exec(s);
  if ((groups === null)) {
    $ps_jl_Double$__fail$1__T__E(s);
  }
  var x = groups[1];
  var signStr = $as_T(x);
  var x$1 = groups[2];
  var integralPartStr = $as_T(x$1);
  var x$2 = groups[3];
  var fractionalPartStr = $as_T(x$2);
  var x$3 = groups[4];
  var binaryExpStr = $as_T(x$3);
  if (((integralPartStr === "") && (fractionalPartStr === ""))) {
    $ps_jl_Double$__fail$1__T__E(s);
  }
  var absResult = $thiz.parseHexDoubleImpl__T__T__T__I__D(integralPartStr, fractionalPartStr, binaryExpStr, 15);
  return ((signStr === "-") ? (-absResult) : absResult);
}
function $ps_jl_Double$__fail$1__T__E(s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""));
}
/** @constructor */
function $c_jl_Double$() {
  this.jl_Double$__f_doubleStrPat = null;
  this.jl_Double$__f_doubleStrHexPat = null;
  this.jl_Double$__f_bitmap$0 = 0;
}
$c_jl_Double$.prototype = new $h_O();
$c_jl_Double$.prototype.constructor = $c_jl_Double$;
/** @constructor */
function $h_jl_Double$() {
}
$h_jl_Double$.prototype = $c_jl_Double$.prototype;
$c_jl_Double$.prototype.parseDouble__T__D = (function(s) {
  var groups = $p_jl_Double$__doubleStrPat__O(this).exec(s);
  if ((groups !== null)) {
    var $x_2 = parseFloat;
    var x = groups[1];
    var $x_1 = $x_2($as_T(x));
    return $uD($x_1);
  } else {
    return $p_jl_Double$__parseDoubleSlowPath__T__D(this, s);
  }
});
$c_jl_Double$.prototype.parseHexDoubleImpl__T__T__T__I__D = (function(integralPartStr, fractionalPartStr, binaryExpStr, maxPrecisionChars) {
  var mantissaStr0 = (("" + integralPartStr) + fractionalPartStr);
  var this$1 = $n(fractionalPartStr);
  var correction1 = ((-(this$1.length << 2)) | 0);
  var i = 0;
  while (true) {
    if ((i !== mantissaStr0.length)) {
      var index = i;
      var $x_1 = ($charAt(mantissaStr0, index) === 48);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      i = ((1 + i) | 0);
    } else {
      break;
    }
  }
  var beginIndex = i;
  if (((beginIndex < 0) || (beginIndex > mantissaStr0.length))) {
    $charAt(mantissaStr0, beginIndex);
  }
  var mantissaStr = $as_T(mantissaStr0.substring(beginIndex));
  if ((mantissaStr === "")) {
    return 0.0;
  }
  var this$2 = $n(mantissaStr);
  var mantissaStrLen = this$2.length;
  var needsCorrection2 = (mantissaStrLen > maxPrecisionChars);
  if (needsCorrection2) {
    var hasNonZeroChar = false;
    var j = maxPrecisionChars;
    while (((!hasNonZeroChar) && (j !== mantissaStrLen))) {
      var this$3 = $n(mantissaStr);
      var index$1 = j;
      if (($charAt(this$3, index$1) !== 48)) {
        hasNonZeroChar = true;
      }
      j = ((1 + j) | 0);
    }
    var compressedTail = (hasNonZeroChar ? "1" : "0");
    var this$4 = $n(mantissaStr);
    if ((maxPrecisionChars > this$4.length)) {
      $charAt(this$4, maxPrecisionChars);
    }
    if ((maxPrecisionChars < 0)) {
      $charAt(this$4, (-1));
    }
    var truncatedMantissaStr = ($as_T(this$4.substring(0, maxPrecisionChars)) + compressedTail);
  } else {
    var truncatedMantissaStr = mantissaStr;
  }
  if (needsCorrection2) {
    var this$5 = $n(mantissaStr);
    var correction2 = (((this$5.length - ((1 + maxPrecisionChars) | 0)) | 0) << 2);
  } else {
    var correction2 = 0;
  }
  var fullCorrection = ((correction1 + correction2) | 0);
  var mantissa = $uD(parseInt(truncatedMantissaStr, 16));
  var binaryExpDouble = $uD(parseInt(binaryExpStr, 10));
  var binaryExp = $doubleToInt(binaryExpDouble);
  var binExpAndCorrection = ((binaryExp + fullCorrection) | 0);
  var binExpAndCorrection_div_3 = ((binExpAndCorrection / 3) | 0);
  var b = binExpAndCorrection_div_3;
  var correctingPow = $uD(Math.pow(2.0, b));
  var b$1 = ((binExpAndCorrection - (binExpAndCorrection_div_3 << 1)) | 0);
  var correctingPow3 = $uD(Math.pow(2.0, b$1));
  return (((mantissa * correctingPow) * correctingPow) * correctingPow3);
});
$c_jl_Double$.prototype.compare__D__D__I = (function(a, b) {
  if ((a !== a)) {
    return ((b !== b) ? 0 : 1);
  } else if ((b !== b)) {
    return (-1);
  } else if ((a === b)) {
    if ((a === 0.0)) {
      var ainf = (1.0 / a);
      return ((ainf === (1.0 / b)) ? 0 : ((ainf < 0.0) ? (-1) : 1));
    } else {
      return 0;
    }
  } else {
    return ((a < b) ? (-1) : 1);
  }
});
var $d_jl_Double$ = new $TypeData().initClass($c_jl_Double$, "java.lang.Double$", ({
  jl_Double$: 1,
  Ljava_io_Serializable: 1
}));
var $n_jl_Double$;
function $m_jl_Double$() {
  if ((!$n_jl_Double$)) {
    $n_jl_Double$ = new $c_jl_Double$();
  }
  return $n_jl_Double$;
}
/** @constructor */
function $c_jl_Integer$() {
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.java$lang$Integer$$parseIntFail__T__E = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$c_jl_Integer$.prototype.java$lang$Integer$$parseIntImpl__T__I__I__I = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    this.java$lang$Integer$$parseIntFail__T__E(s);
  }
  var this$1 = $n(s);
  var len = this$1.length;
  if ((len === 0)) {
    this.java$lang$Integer$$parseIntFail__T__E(s);
  }
  var character = $m_jl_Character$();
  var this$2 = $n(s);
  var firstChar = $charAt(this$2, 0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    this.java$lang$Integer$$parseIntFail__T__E(s);
  }
  var result = 0;
  while ((i !== len)) {
    var this$3 = $n(s);
    var index = i;
    var digit = character.digitWithValidRadix__I__I__I($charAt(this$3, index), radix);
    if (((digit === (-1)) || ((result >>> 0) > (overflowBarrier >>> 0)))) {
      this.java$lang$Integer$$parseIntFail__T__E(s);
    }
    result = ((Math.imul(result, radix) + digit) | 0);
    i = ((1 + i) | 0);
  }
  if (((result >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    this.java$lang$Integer$$parseIntFail__T__E(s);
  }
  return (((result ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().initClass($c_jl_Integer$, "java.lang.Integer$", ({
  jl_Integer$: 1,
  Ljava_io_Serializable: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Long$() {
}
$c_jl_Long$.prototype = new $h_O();
$c_jl_Long$.prototype.constructor = $c_jl_Long$;
/** @constructor */
function $h_jl_Long$() {
}
$h_jl_Long$.prototype = $c_jl_Long$.prototype;
$c_jl_Long$.prototype.java$lang$Long$$toHexString__I__I__T = (function(lo, hi) {
  if ((hi !== 0)) {
    var $x_1 = $as_T((hi >>> 0.0).toString(16));
    var s = $as_T((lo >>> 0.0).toString(16));
    var this$7 = $n(s);
    var beginIndex = this$7.length;
    if (((beginIndex < 0) || (beginIndex > 8))) {
      $charAt("00000000", beginIndex);
    }
    return ($x_1 + (("" + $as_T("00000000".substring(beginIndex))) + s));
  } else {
    return $as_T((lo >>> 0.0).toString(16));
  }
});
$c_jl_Long$.prototype.java$lang$Long$$toOctalString__I__I__T = (function(lo, hi) {
  var lp = (1073741823 & lo);
  var mp = (1073741823 & ((((lo >>> 30) | 0) + (hi << 2)) | 0));
  var hp = ((hi >>> 28) | 0);
  if ((hp !== 0)) {
    var $x_2 = $as_T((hp >>> 0.0).toString(8));
    var s = $as_T((mp >>> 0.0).toString(8));
    var this$7 = $n(s);
    var beginIndex = this$7.length;
    if (((beginIndex < 0) || (beginIndex > 10))) {
      $charAt("0000000000", beginIndex);
    }
    var $x_1 = $as_T("0000000000".substring(beginIndex));
    var s$1 = $as_T((lp >>> 0.0).toString(8));
    var this$11 = $n(s$1);
    var beginIndex$1 = this$11.length;
    if (((beginIndex$1 < 0) || (beginIndex$1 > 10))) {
      $charAt("0000000000", beginIndex$1);
    }
    return (($x_2 + (("" + $x_1) + s)) + (("" + $as_T("0000000000".substring(beginIndex$1))) + s$1));
  } else if ((mp !== 0)) {
    var $x_3 = $as_T((mp >>> 0.0).toString(8));
    var s$2 = $as_T((lp >>> 0.0).toString(8));
    var this$18 = $n(s$2);
    var beginIndex$2 = this$18.length;
    if (((beginIndex$2 < 0) || (beginIndex$2 > 10))) {
      $charAt("0000000000", beginIndex$2);
    }
    return ($x_3 + (("" + $as_T("0000000000".substring(beginIndex$2))) + s$2));
  } else {
    return $as_T((lp >>> 0.0).toString(8));
  }
});
var $d_jl_Long$ = new $TypeData().initClass($c_jl_Long$, "java.lang.Long$", ({
  jl_Long$: 1,
  Ljava_io_Serializable: 1
}));
var $n_jl_Long$;
function $m_jl_Long$() {
  if ((!$n_jl_Long$)) {
    $n_jl_Long$ = new $c_jl_Long$();
  }
  return $n_jl_Long$;
}
/** @constructor */
function $c_jl_Number() {
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong));
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)));
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth));
}
/** @constructor */
function $c_jl_String$() {
}
$c_jl_String$.prototype = new $h_O();
$c_jl_String$.prototype.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
}
$h_jl_String$.prototype = $c_jl_String$.prototype;
$c_jl_String$.prototype.new__AC__I__I__T = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  if ((((offset < 0) || (end < offset)) || (end > $n(value).u.length))) {
    throw $ct_jl_StringIndexOutOfBoundsException__(new $c_jl_StringIndexOutOfBoundsException());
  }
  var result = "";
  var i = offset;
  while ((i !== end)) {
    var $x_1 = result;
    var this$1 = $n(value).get(i);
    result = ($x_1 + ("" + $cToS(this$1)));
    i = ((1 + i) | 0);
  }
  return result;
});
$c_jl_String$.prototype.format__T__AO__T = (function(format, args) {
  return $n($ct_ju_Formatter__(new $c_ju_Formatter()).format__T__AO__ju_Formatter(format, args)).toString__T();
});
var $d_jl_String$ = new $TypeData().initClass($c_jl_String$, "java.lang.String$", ({
  jl_String$: 1,
  Ljava_io_Serializable: 1
}));
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$();
  }
  return $n_jl_String$;
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
  }
  getMessage__T() {
    return this.jl_Throwable__f_s;
  }
  fillInStackTrace__jl_Throwable() {
    var reference = (false ? this.sjs_js_JavaScriptException__f_exception : this);
    var identifyingString = Object.prototype.toString.call(reference);
    if ((identifyingString !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || $uZ(Object.isSealed(this)))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this);
  }
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that);
  }
  get "message"() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.toString__T();
  }
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"));
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)));
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth));
}
/** @constructor */
function $c_ju_Formatter$RootLocaleInfo$() {
}
$c_ju_Formatter$RootLocaleInfo$.prototype = new $h_ju_Formatter$LocaleInfo();
$c_ju_Formatter$RootLocaleInfo$.prototype.constructor = $c_ju_Formatter$RootLocaleInfo$;
/** @constructor */
function $h_ju_Formatter$RootLocaleInfo$() {
}
$h_ju_Formatter$RootLocaleInfo$.prototype = $c_ju_Formatter$RootLocaleInfo$.prototype;
var $d_ju_Formatter$RootLocaleInfo$ = new $TypeData().initClass($c_ju_Formatter$RootLocaleInfo$, "java.util.Formatter$RootLocaleInfo$", ({
  ju_Formatter$RootLocaleInfo$: 1,
  ju_Formatter$LocaleInfo: 1
}));
var $n_ju_Formatter$RootLocaleInfo$;
function $m_ju_Formatter$RootLocaleInfo$() {
  if ((!$n_ju_Formatter$RootLocaleInfo$)) {
    $n_ju_Formatter$RootLocaleInfo$ = new $c_ju_Formatter$RootLocaleInfo$();
  }
  return $n_ju_Formatter$RootLocaleInfo$;
}
function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
  if (($thiz.ju_regex_Matcher__f_lastMatch === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "No match available");
  }
  return $thiz.ju_regex_Matcher__f_lastMatch;
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.ju_regex_Matcher__f_pattern0 = null;
  this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = null;
  this.ju_regex_Matcher__f_regionStart0 = 0;
  this.ju_regex_Matcher__f_inputstr = null;
  this.ju_regex_Matcher__f_position = 0;
  this.ju_regex_Matcher__f_lastMatch = null;
  this.ju_regex_Matcher__f_pattern0 = pattern0;
  this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = input0;
  this.ju_regex_Matcher__f_regionStart0 = 0;
  $n(this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0);
  this.ju_regex_Matcher__f_inputstr = this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0;
  this.ju_regex_Matcher__f_position = 0;
  this.ju_regex_Matcher__f_lastMatch = null;
}
$c_ju_regex_Matcher.prototype = new $h_O();
$c_ju_regex_Matcher.prototype.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $c_ju_regex_Matcher.prototype;
$c_ju_regex_Matcher.prototype.find__Z = (function() {
  var this$1 = $n(this.ju_regex_Matcher__f_pattern0);
  var input = this.ju_regex_Matcher__f_inputstr;
  var start = this.ju_regex_Matcher__f_position;
  var mtch = this$1.java$util$regex$Pattern$$execFindInternal__T__I__O(input, start);
  var end = $uI(this$1.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind.lastIndex);
  if ((mtch !== null)) {
    var $x_1 = ((end === $uI(mtch.index)) ? ((1 + end) | 0) : end);
  } else {
    var this$2 = $n(this.ju_regex_Matcher__f_inputstr);
    var $x_1 = ((1 + this$2.length) | 0);
  }
  this.ju_regex_Matcher__f_position = $x_1;
  this.ju_regex_Matcher__f_lastMatch = mtch;
  return (mtch !== null);
});
$c_ju_regex_Matcher.prototype.start__I = (function() {
  return (($uI($p_ju_regex_Matcher__ensureLastMatch__O(this).index) + this.ju_regex_Matcher__f_regionStart0) | 0);
});
$c_ju_regex_Matcher.prototype.end__I = (function() {
  var $x_1 = this.start__I();
  var this$1 = $n(this.group__T());
  return (($x_1 + this$1.length) | 0);
});
$c_ju_regex_Matcher.prototype.group__T = (function() {
  var x = $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
  return $as_T(x);
});
var $d_ju_regex_Matcher = new $TypeData().initClass($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  ju_regex_Matcher: 1,
  ju_regex_MatchResult: 1
}));
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.ju_regex_Pattern__f__pattern = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = false;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = null;
  this.ju_regex_Pattern__f__pattern = _pattern;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = jsFlags;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = sticky;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = new RegExp(jsPattern, (this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags + (this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky ? "gy" : "g")));
  new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
$c_ju_regex_Pattern.prototype = new $h_O();
$c_ju_regex_Pattern.prototype.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
$h_ju_regex_Pattern.prototype = $c_ju_regex_Pattern.prototype;
$c_ju_regex_Pattern.prototype.java$util$regex$Pattern$$execFindInternal__T__I__O = (function(input, start) {
  var regexp = this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$c_ju_regex_Pattern.prototype.toString__T = (function() {
  return this.ju_regex_Pattern__f__pattern;
});
$c_ju_regex_Pattern.prototype.java$util$regex$Pattern$$split__T__I__AT = (function(inputStr, limit) {
  if ((inputStr === "")) {
    return new ($d_T.getArrayOf().constr)([""]);
  } else {
    var lim = ((limit > 0) ? limit : 2147483647);
    var this$1 = $n(inputStr);
    var matcher = new $c_ju_regex_Matcher(this, this$1);
    var result = [];
    var prevEnd = 0;
    while ((($uI(result.length) < (((-1) + lim) | 0)) && matcher.find__Z())) {
      if ((matcher.end__I() !== 0)) {
        var this$2 = $n(inputStr);
        var beginIndex = prevEnd;
        var endIndex = matcher.start__I();
        if ((beginIndex < 0)) {
          $charAt(this$2, beginIndex);
        }
        if ((endIndex > this$2.length)) {
          $charAt(this$2, endIndex);
        }
        if ((endIndex < beginIndex)) {
          $charAt(this$2, (-1));
        }
        var $x_1 = result.push($as_T(this$2.substring(beginIndex, endIndex)));
        $uI($x_1);
      }
      prevEnd = matcher.end__I();
    }
    var this$3 = $n(inputStr);
    var beginIndex$1 = prevEnd;
    if (((beginIndex$1 < 0) || (beginIndex$1 > this$3.length))) {
      $charAt(this$3, beginIndex$1);
    }
    result.push($as_T(this$3.substring(beginIndex$1)));
    var actualLength = $uI(result.length);
    if ((limit === 0)) {
      while (true) {
        if ((actualLength !== 0)) {
          var x = result[(((-1) + actualLength) | 0)];
          var $x_2 = ((x !== null) && $dp_equals__O__Z($n(x), ""));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          actualLength = (((-1) + actualLength) | 0);
        } else {
          break;
        }
      }
    }
    var r = new ($d_T.getArrayOf().constr)(actualLength);
    var end = actualLength;
    var i = 0;
    while ((i < end)) {
      var value = i;
      r.set(value, $as_T(result[value]));
      i = ((1 + i) | 0);
    }
    return r;
  }
});
var $d_ju_regex_Pattern = new $TypeData().initClass($c_ju_regex_Pattern, "java.util.regex.Pattern", ({
  ju_regex_Pattern: 1,
  Ljava_io_Serializable: 1
}));
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
function $p_s_Array$__newUnitArray__I__Ajl_Void($thiz, len) {
  var result = new ($d_jl_Void.getArrayOf().constr)(len);
  $m_ju_Arrays$().fill__AO__O__V(result, (void 0));
  return result;
}
/** @constructor */
function $c_s_Array$() {
}
$c_s_Array$.prototype = new $h_O();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.from__sc_IterableOnce__s_reflect_ClassTag__O = (function(it, evidence$3) {
  var n = $n(it).knownSize__I();
  if ((n > (-1))) {
    var elements = $n(evidence$3).newArray__I__O(n);
    var iterator = $n(it).iterator__sc_Iterator();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().array_update__O__I__O__V(elements, i, $n(iterator).next__O());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = $n(evidence$3).runtimeClass__jl_Class();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.getClassOf());
    jsElems = [];
    var iterator$2 = $n(it).iterator__sc_Iterator();
    while ($n(iterator$2).hasNext__Z()) {
      var elem = $n(iterator$2).next__O();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $n(elementClass).data.zero : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.getClassOf()) ? $d_jl_Void.getClassOf() : (((elementClass === $d_sr_Null$.getClassOf()) || (elementClass === $d_sr_Nothing$.getClassOf())) ? $d_O.getClassOf() : elementClass));
    return $n(elemRuntimeClass).data.getArrayOf().wrapArray(jsElems);
  }
});
$c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var this$1 = $n(src);
  var srcClass = $objectGetClass(this$1);
  var this$2 = $n(srcClass);
  if (this$2.data.isArrayClass) {
    var this$3 = $n(dest);
    var this$4 = $n($objectGetClass(this$3));
    var $x_1 = this$4.data.isAssignableFrom($n(srcClass).data);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    $systemArraycopyFull($n(src), srcPos, $n(dest), destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$c_s_Array$.prototype.copyOf__O__I__O = (function(original, newLength) {
  if ($isArrayOf_jl_Void(original, 1)) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  } else if ((original instanceof $ac_O)) {
    var x3 = $asArrayOf_O(original, 1);
    return $m_ju_Arrays$().copyOf__AO__I__AO(x3, newLength);
  } else if ((original instanceof $ac_I)) {
    var x4 = $asArrayOf_I(original, 1);
    return $m_ju_Arrays$().copyOf__AI__I__AI(x4, newLength);
  } else if ((original instanceof $ac_D)) {
    var x5 = $asArrayOf_D(original, 1);
    return $m_ju_Arrays$().copyOf__AD__I__AD(x5, newLength);
  } else if ((original instanceof $ac_J)) {
    var x6 = $asArrayOf_J(original, 1);
    return $m_ju_Arrays$().copyOf__AJ__I__AJ(x6, newLength);
  } else if ((original instanceof $ac_F)) {
    var x7 = $asArrayOf_F(original, 1);
    return $m_ju_Arrays$().copyOf__AF__I__AF(x7, newLength);
  } else if ((original instanceof $ac_C)) {
    var x8 = $asArrayOf_C(original, 1);
    return $m_ju_Arrays$().copyOf__AC__I__AC(x8, newLength);
  } else if ((original instanceof $ac_B)) {
    var x9 = $asArrayOf_B(original, 1);
    return $m_ju_Arrays$().copyOf__AB__I__AB(x9, newLength);
  } else if ((original instanceof $ac_S)) {
    var x10 = $asArrayOf_S(original, 1);
    return $m_ju_Arrays$().copyOf__AS__I__AS(x10, newLength);
  } else if ((original instanceof $ac_Z)) {
    var x11 = $asArrayOf_Z(original, 1);
    return $m_ju_Arrays$().copyOf__AZ__I__AZ(x11, newLength);
  } else {
    throw new $c_s_MatchError(original);
  }
});
$c_s_Array$.prototype.equals__AO__AO__Z = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if (($n(xs).u.length !== $n(ys).u.length)) {
    return false;
  }
  var len = $n(xs).u.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($n(xs).get(i), $n(ys).get(i)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().initClass($c_s_Array$, "scala.Array$", ({
  s_Array$: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_Console$() {
  this.s_Console$__f_outVar = null;
  $n_s_Console$ = this;
  this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_out);
}
$c_s_Console$.prototype = new $h_O();
$c_s_Console$.prototype.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $c_s_Console$.prototype;
$c_s_Console$.prototype.out__Ljava_io_PrintStream = (function() {
  return $as_Ljava_io_PrintStream($n(this.s_Console$__f_outVar).s_util_DynamicVariable__f_v);
});
var $d_s_Console$ = new $TypeData().initClass($c_s_Console$, "scala.Console$", ({
  s_Console$: 1,
  s_io_AnsiColor: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$c_s_LowPriorityImplicits.prototype.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $c_s_LowPriorityImplicits.prototype;
$c_s_LowPriorityImplicits.prototype.wrapRefArray__AO__scm_ArraySeq$ofRef = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if (($n(xs).u.length === 0)) {
    var this$1 = $m_scm_ArraySeq$();
    return this$1.scm_ArraySeq$__f_EmptyArraySeq;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
$c_s_LowPriorityImplicits.prototype.wrapDoubleArray__AD__scm_ArraySeq$ofDouble = (function(xs) {
  return ((xs !== null) ? new $c_scm_ArraySeq$ofDouble(xs) : null);
});
function $p_sci_Range$__description__I__I__I__Z__T($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step);
}
/** @constructor */
function $c_sci_Range$() {
}
$c_sci_Range$.prototype = new $h_O();
$c_sci_Range$.prototype.constructor = $c_sci_Range$;
/** @constructor */
function $h_sci_Range$() {
}
$h_sci_Range$.prototype = $c_sci_Range$.prototype;
$c_sci_Range$.prototype.scala$collection$immutable$Range$$fail__I__I__I__Z__E = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."));
});
$c_sci_Range$.prototype.scala$collection$immutable$Range$$emptyRangeError__T__jl_Throwable = (function(what) {
  return new $c_ju_NoSuchElementException((what + " on empty Range"));
});
var $d_sci_Range$ = new $TypeData().initClass($c_sci_Range$, "scala.collection.immutable.Range$", ({
  sci_Range$: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_Range$;
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$();
  }
  return $n_sci_Range$;
}
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.addAll__sc_IterableOnce__scm_Growable($m_scm_Buffer$().from__sc_IterableOnce__sc_SeqOps(elems));
  } else {
    var it = $n(elems).iterator__sc_Iterator();
    while ($n(it).hasNext__Z()) {
      $thiz.addOne__O__scm_Growable($n(it).next__O());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.s_reflect_ClassTag$__f_Byte = null;
  this.s_reflect_ClassTag$__f_Short = null;
  this.s_reflect_ClassTag$__f_Char = null;
  this.s_reflect_ClassTag$__f_Int = null;
  this.s_reflect_ClassTag$__f_Long = null;
  this.s_reflect_ClassTag$__f_Float = null;
  this.s_reflect_ClassTag$__f_Double = null;
  this.s_reflect_ClassTag$__f_Boolean = null;
  this.s_reflect_ClassTag$__f_Unit = null;
  this.s_reflect_ClassTag$__f_Any = null;
  this.s_reflect_ClassTag$__f_Object = null;
  this.s_reflect_ClassTag$__f_AnyRef = null;
  this.s_reflect_ClassTag$__f_Nothing = null;
  this.s_reflect_ClassTag$__f_Null = null;
  $n_s_reflect_ClassTag$ = this;
  this.s_reflect_ClassTag$__f_Byte = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.s_reflect_ClassTag$__f_Short = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.s_reflect_ClassTag$__f_Char = $m_s_reflect_ManifestFactory$CharManifest$();
  this.s_reflect_ClassTag$__f_Int = $m_s_reflect_ManifestFactory$IntManifest$();
  this.s_reflect_ClassTag$__f_Long = $m_s_reflect_ManifestFactory$LongManifest$();
  this.s_reflect_ClassTag$__f_Float = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.s_reflect_ClassTag$__f_Double = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.s_reflect_ClassTag$__f_Boolean = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.s_reflect_ClassTag$__f_Unit = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.s_reflect_ClassTag$__f_Any = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.s_reflect_ClassTag$__f_Object = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.s_reflect_ClassTag$__f_AnyRef = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.s_reflect_ClassTag$__f_Nothing = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.s_reflect_ClassTag$__f_Null = $m_s_reflect_ManifestFactory$NullManifest$();
}
$c_s_reflect_ClassTag$.prototype = new $h_O();
$c_s_reflect_ClassTag$.prototype.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $c_s_reflect_ClassTag$.prototype;
$c_s_reflect_ClassTag$.prototype.apply__jl_Class__s_reflect_ClassTag = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.getClassOf()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.getClassOf()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.getClassOf()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.getClassOf()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.getClassOf()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.getClassOf()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.getClassOf()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.getClassOf()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.getClassOf()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.getClassOf()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.getClassOf()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.getClassOf()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().initClass($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  s_reflect_ClassTag$: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
  }
  return $n_s_reflect_ClassTag$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$c_sr_AbstractFunction2.prototype = new $h_O();
$c_sr_AbstractFunction2.prototype.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $c_sr_AbstractFunction2.prototype;
$c_sr_AbstractFunction2.prototype.toString__T = (function() {
  return "<function2>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
  this.unorderedHash__sc_IterableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed);
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sc_IndexedSeq(xs)) {
    var x2 = $as_sc_IndexedSeq(xs);
    return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else if ((xs instanceof $c_sci_List)) {
    var x3 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else {
    return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.data = $data;
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.data.isInterface ? "interface " : (this.data.isPrimitive ? "" : "class ")) + this.data.name);
});
var $d_jl_Class = new $TypeData().initClass($c_jl_Class, "java.lang.Class", ({
  jl_Class: 1,
  Ljava_io_Serializable: 1,
  jl_constant_Constable: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().initClass($c_jl_Exception, "java.lang.Exception", ({
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $s_Lorg_expr_simplex_Simplex$Direction$__LE__Lorg_expr_simplex_Simplex$Direction() {
  $m_Lorg_expr_simplex_Simplex$Direction$();
  return $t_Lorg_expr_simplex_Simplex$Direction$__LE;
}
function $s_Lorg_expr_simplex_Simplex$Direction$__GE__Lorg_expr_simplex_Simplex$Direction() {
  $m_Lorg_expr_simplex_Simplex$Direction$();
  return $t_Lorg_expr_simplex_Simplex$Direction$__GE;
}
function $s_Lorg_expr_simplex_Simplex$Direction$__EQ__Lorg_expr_simplex_Simplex$Direction() {
  $m_Lorg_expr_simplex_Simplex$Direction$();
  return $t_Lorg_expr_simplex_Simplex$Direction$__EQ;
}
/** @constructor */
function $c_Lorg_expr_simplex_Simplex$Direction$() {
  $n_Lorg_expr_simplex_Simplex$Direction$ = this;
  $t_Lorg_expr_simplex_Simplex$Direction$__LE = new $c_Lorg_expr_simplex_Simplex$Direction$$anon$2("LE", 0);
  $t_Lorg_expr_simplex_Simplex$Direction$__GE = new $c_Lorg_expr_simplex_Simplex$Direction$$anon$2("GE", 1);
  $t_Lorg_expr_simplex_Simplex$Direction$__EQ = new $c_Lorg_expr_simplex_Simplex$Direction$$anon$2("EQ", 2);
  $s_Lorg_expr_simplex_Simplex$Direction$__LE__Lorg_expr_simplex_Simplex$Direction();
  $s_Lorg_expr_simplex_Simplex$Direction$__GE__Lorg_expr_simplex_Simplex$Direction();
  $s_Lorg_expr_simplex_Simplex$Direction$__EQ__Lorg_expr_simplex_Simplex$Direction();
}
$c_Lorg_expr_simplex_Simplex$Direction$.prototype = new $h_O();
$c_Lorg_expr_simplex_Simplex$Direction$.prototype.constructor = $c_Lorg_expr_simplex_Simplex$Direction$;
/** @constructor */
function $h_Lorg_expr_simplex_Simplex$Direction$() {
}
$h_Lorg_expr_simplex_Simplex$Direction$.prototype = $c_Lorg_expr_simplex_Simplex$Direction$.prototype;
var $d_Lorg_expr_simplex_Simplex$Direction$ = new $TypeData().initClass($c_Lorg_expr_simplex_Simplex$Direction$, "org.expr.simplex.Simplex$Direction$", ({
  Lorg_expr_simplex_Simplex$Direction$: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Sum: 1
}));
var $n_Lorg_expr_simplex_Simplex$Direction$;
function $m_Lorg_expr_simplex_Simplex$Direction$() {
  if ((!$n_Lorg_expr_simplex_Simplex$Direction$)) {
    $n_Lorg_expr_simplex_Simplex$Direction$ = new $c_Lorg_expr_simplex_Simplex$Direction$();
  }
  return $n_Lorg_expr_simplex_Simplex$Direction$;
}
function $s_Lorg_expr_simplex_Simplex$OptimizationType$__Maximize__Lorg_expr_simplex_Simplex$OptimizationType() {
  $m_Lorg_expr_simplex_Simplex$OptimizationType$();
  return $t_Lorg_expr_simplex_Simplex$OptimizationType$__Maximize;
}
function $s_Lorg_expr_simplex_Simplex$OptimizationType$__Minimize__Lorg_expr_simplex_Simplex$OptimizationType() {
  $m_Lorg_expr_simplex_Simplex$OptimizationType$();
  return $t_Lorg_expr_simplex_Simplex$OptimizationType$__Minimize;
}
/** @constructor */
function $c_Lorg_expr_simplex_Simplex$OptimizationType$() {
  $n_Lorg_expr_simplex_Simplex$OptimizationType$ = this;
  $t_Lorg_expr_simplex_Simplex$OptimizationType$__Maximize = new $c_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1("Maximize", 0);
  $t_Lorg_expr_simplex_Simplex$OptimizationType$__Minimize = new $c_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1("Minimize", 1);
  $s_Lorg_expr_simplex_Simplex$OptimizationType$__Maximize__Lorg_expr_simplex_Simplex$OptimizationType();
  $s_Lorg_expr_simplex_Simplex$OptimizationType$__Minimize__Lorg_expr_simplex_Simplex$OptimizationType();
}
$c_Lorg_expr_simplex_Simplex$OptimizationType$.prototype = new $h_O();
$c_Lorg_expr_simplex_Simplex$OptimizationType$.prototype.constructor = $c_Lorg_expr_simplex_Simplex$OptimizationType$;
/** @constructor */
function $h_Lorg_expr_simplex_Simplex$OptimizationType$() {
}
$h_Lorg_expr_simplex_Simplex$OptimizationType$.prototype = $c_Lorg_expr_simplex_Simplex$OptimizationType$.prototype;
var $d_Lorg_expr_simplex_Simplex$OptimizationType$ = new $TypeData().initClass($c_Lorg_expr_simplex_Simplex$OptimizationType$, "org.expr.simplex.Simplex$OptimizationType$", ({
  Lorg_expr_simplex_Simplex$OptimizationType$: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Sum: 1
}));
var $n_Lorg_expr_simplex_Simplex$OptimizationType$;
function $m_Lorg_expr_simplex_Simplex$OptimizationType$() {
  if ((!$n_Lorg_expr_simplex_Simplex$OptimizationType$)) {
    $n_Lorg_expr_simplex_Simplex$OptimizationType$ = new $c_Lorg_expr_simplex_Simplex$OptimizationType$();
  }
  return $n_Lorg_expr_simplex_Simplex$OptimizationType$;
}
/** @constructor */
function $c_s_Predef$() {
}
$c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$c_s_Predef$.prototype.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $c_s_Predef$.prototype;
var $d_s_Predef$ = new $TypeData().initClass($c_s_Predef$, "scala.Predef$", ({
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  s_LowPriorityImplicits2: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null;
}
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype;
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.from__sc_IterableOnce__O = (function(it) {
  return $n(this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate).from__sc_IterableOnce__O__O(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.newBuilder__scm_Builder = (function() {
  var this$1 = $n(this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate);
  var x0 = $m_s_reflect_ManifestFactory$AnyManifest$();
  return this$1.newBuilder__s_reflect_ClassTag__scm_Builder(x0);
});
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.knownSize__I();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.iterator__sc_Iterator();
      while ($n(it).hasNext__Z()) {
        if ((i === otherSize)) {
          return 1;
        }
        $n(it).next__O();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).concat__F0__sc_Iterator(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = $n(that).iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && $n(those).hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), $n(those).next__O()))) {
      return false;
    }
  }
  return ($thiz.hasNext__Z() === $n(those).hasNext__Z());
}
function $is_sc_Iterator(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterator)));
}
function $as_sc_Iterator(obj) {
  return (($is_sc_Iterator(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator"));
}
function $isArrayOf_sc_Iterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator)));
}
function $asArrayOf_sc_Iterator(obj, depth) {
  return (($isArrayOf_sc_Iterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator;", depth));
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19();
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
$c_sc_Iterator$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sc_Iterator$$anon$21();
});
var $d_sc_Iterator$ = new $TypeData().initClass($c_sc_Iterator$, "scala.collection.Iterator$", ({
  sc_Iterator$: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)));
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"));
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)));
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth));
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"));
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)));
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f = null;
  this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f = f;
}
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype;
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype.apply__O = (function() {
  return $n(this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().initClass($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855: 1,
  sr_AbstractFunction0: 1,
  F0: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28__f_f = null;
  this.sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28__f_f = f;
}
$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype;
$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype.apply__O__O = (function(x0) {
  return $n(this.sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28__f_f)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().initClass($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28: 1,
  sr_AbstractFunction1: 1,
  F1: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(f) {
  this.sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc__f_f = null;
  this.sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc__f_f = f;
}
$c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = new $h_sr_AbstractFunction2();
$c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype.constructor = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc() {
}
$h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype;
$c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype.apply__O__O__O = (function(x0, x1) {
  return $n(this.sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc__f_f)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc = new $TypeData().initClass($c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc, "scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc", ({
  sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc: 1,
  sr_AbstractFunction2: 1,
  F2: 1
}));
var $d_sr_Nothing$ = new $TypeData().initClass(0, "scala.runtime.Nothing$", ({
  sr_Nothing$: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $as_Ljava_io_IOException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.IOException"));
}
function $isArrayOf_Ljava_io_IOException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_IOException)));
}
function $asArrayOf_Ljava_io_IOException(obj, depth) {
  return (($isArrayOf_Ljava_io_IOException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.IOException;", depth));
}
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$c_Ljava_io_OutputStream.prototype = new $h_O();
$c_Ljava_io_OutputStream.prototype.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $c_Ljava_io_OutputStream.prototype;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    var message = ("" + detailMessage);
    if ((detailMessage instanceof $c_jl_Throwable)) {
      var x2 = $as_jl_Throwable(detailMessage);
      var cause = x2;
    } else {
      var cause = null;
    }
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().initClass($c_jl_AssertionError, "java.lang.AssertionError", ({
  jl_AssertionError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().initClass(0, "java.lang.Boolean", ({
  jl_Boolean: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $n($as_jl_Character(that)).c;
    return ($thiz === this$1);
  } else {
    return false;
  }
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)));
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth));
}
var $d_jl_Character = new $TypeData().initClass(0, "java.lang.Character", ({
  jl_Character: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => (x instanceof $Char)));
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().initClass($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null;
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.append__AC__jl_StringBuilder = (function(str) {
  var this$1 = $m_jl_String$();
  var count = $n(str).u.length;
  var str$1 = this$1.new__AC__I__I__T(str, 0, count);
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
  return this;
});
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return this$1.length;
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return $charAt(this$1, index);
});
$c_jl_StringBuilder.prototype.getChars__I__I__AC__I__V = (function(srcBegin, srcEnd, dst, dstBegin) {
  $f_T__getChars__I__I__AC__I__V($n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content), srcBegin, srcEnd, dst, dstBegin);
});
$c_jl_StringBuilder.prototype.append__jl_CharSequence__jl_Appendable = (function(csq) {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + csq);
  return this;
});
var $d_jl_StringBuilder = new $TypeData().initClass($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  jl_StringBuilder: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $as_Ljava_math_BigDecimal(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.math.BigDecimal"));
}
function $isArrayOf_Ljava_math_BigDecimal(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_math_BigDecimal)));
}
function $asArrayOf_Ljava_math_BigDecimal(obj, depth) {
  return (($isArrayOf_Ljava_math_BigDecimal(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.math.BigDecimal;", depth));
}
function $as_Ljava_math_BigInteger(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.math.BigInteger"));
}
function $isArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_math_BigInteger)));
}
function $asArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (($isArrayOf_Ljava_math_BigInteger(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.math.BigInteger;", depth));
}
function $p_ju_Formatter__sendToDest__T__V($thiz, s) {
  if (($thiz.ju_Formatter__f_dest === null)) {
    $thiz.ju_Formatter__f_stringOutput = (("" + $thiz.ju_Formatter__f_stringOutput) + s);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__V($thiz, s1, s2) {
  if (($thiz.ju_Formatter__f_dest === null)) {
    $thiz.ju_Formatter__f_stringOutput = ((("" + $thiz.ju_Formatter__f_stringOutput) + s1) + s2);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__T__V($thiz, s1, s2, s3) {
  if (($thiz.ju_Formatter__f_dest === null)) {
    $thiz.ju_Formatter__f_stringOutput = (($thiz.ju_Formatter__f_stringOutput + (("" + s1) + s2)) + s3);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2, s3]);
  }
}
function $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, ss) {
  try {
    var len = $uI(ss.length);
    var i = 0;
    while ((i !== len)) {
      var t = ss[i];
      var t$1 = $as_T(t);
      $n($thiz.ju_Formatter__f_dest).append__jl_CharSequence__jl_Appendable(t$1);
      i = ((1 + i) | 0);
    }
  } catch (e) {
    if (false) {
      $as_Ljava_io_IOException(e);
    } else {
      throw e;
    }
  }
}
function $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter($thiz, localeInfo, format, args) {
  if ($thiz.ju_Formatter__f_java$util$Formatter$$closed) {
    throw new $c_ju_FormatterClosedException();
  }
  var lastImplicitArgIndex = 0;
  var lastArgIndex = 0;
  var this$1 = $n(format);
  var fmtLength = this$1.length;
  var fmtIndex = 0;
  while ((fmtIndex !== fmtLength)) {
    var this$2 = $n(format);
    var fromIndex = fmtIndex;
    var nextPercentIndex = $uI(this$2.indexOf("%", fromIndex));
    if ((nextPercentIndex < 0)) {
      var this$3 = $n(format);
      var beginIndex = fmtIndex;
      if (((beginIndex < 0) || (beginIndex > this$3.length))) {
        $charAt(this$3, beginIndex);
      }
      $p_ju_Formatter__sendToDest__T__V($thiz, $as_T(this$3.substring(beginIndex)));
      return $thiz;
    }
    var this$4 = $n(format);
    var beginIndex$1 = fmtIndex;
    if ((beginIndex$1 < 0)) {
      $charAt(this$4, beginIndex$1);
    }
    if ((nextPercentIndex > this$4.length)) {
      $charAt(this$4, nextPercentIndex);
    }
    if ((nextPercentIndex < beginIndex$1)) {
      $charAt(this$4, (-1));
    }
    $p_ju_Formatter__sendToDest__T__V($thiz, $as_T(this$4.substring(beginIndex$1, nextPercentIndex)));
    var formatSpecifierIndex = ((1 + nextPercentIndex) | 0);
    var re = $m_ju_Formatter$().ju_Formatter$__f_java$util$Formatter$$FormatSpecifier;
    re.lastIndex = formatSpecifierIndex;
    var execResult = re.exec(format);
    if (((execResult === null) || ($uI(execResult.index) !== formatSpecifierIndex))) {
      if ((formatSpecifierIndex === fmtLength)) {
        var conversion = 37;
      } else {
        var this$5 = $n(format);
        var conversion = $charAt(this$5, formatSpecifierIndex);
      }
      $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion);
    }
    fmtIndex = $uI(re.lastIndex);
    var this$6 = $n(format);
    var index = (((-1) + fmtIndex) | 0);
    var conversion$2 = $charAt(this$6, index);
    var flags = $p_ju_Formatter__parseFlags__T__C__I($thiz, $as_T(execResult[2]), conversion$2);
    var width = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[3]);
    var precision = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[4]);
    if ((width === (-2))) {
      $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, (-2147483648));
    }
    if ((precision === (-2))) {
      $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, (-2147483648));
    }
    if ((conversion$2 === 110)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((width !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, width);
      }
      if ((flags !== 0)) {
        $thiz.java$util$Formatter$$throwIllegalFormatFlagsException__I__E(flags);
      }
      $p_ju_Formatter__sendToDest__T__V($thiz, "\n");
    } else if ((conversion$2 === 37)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.java$util$Formatter$$throwIllegalFormatFlagsException__I__E(flags);
      }
      if ((((1 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((-2) & flags) !== 0)) {
        $thiz.java$util$Formatter$$throwFormatFlagsConversionMismatchException__C__I__I__E(37, flags, (-2));
      }
      $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, "%");
    } else {
      var conversionLower = (((256 & flags) !== 0) ? (65535 & ((32 + conversion$2) | 0)) : conversion$2);
      var illegalFlags = $n($m_ju_Formatter$().ju_Formatter$__f_java$util$Formatter$$ConversionsIllegalFlags).get((((-97) + conversionLower) | 0));
      if (((illegalFlags === (-1)) || (((256 & flags) & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion$2);
      }
      if ((((17 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.java$util$Formatter$$throwIllegalFormatFlagsException__I__E(flags);
      }
      if (((precision !== (-1)) && ((512 & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if (((flags & illegalFlags) !== 0)) {
        $thiz.java$util$Formatter$$throwFormatFlagsConversionMismatchException__C__I__I__E(conversionLower, flags, illegalFlags);
      }
      if (((128 & flags) !== 0)) {
        var argIndex = lastArgIndex;
      } else {
        var i = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[1]);
        if ((i === (-1))) {
          lastImplicitArgIndex = ((1 + lastImplicitArgIndex) | 0);
          var argIndex = lastImplicitArgIndex;
        } else {
          if ((i <= 0)) {
            $p_ju_Formatter__throwIllegalFormatArgumentIndexException__I__E($thiz, i);
          }
          var argIndex = i;
        }
      }
      if (((argIndex <= 0) || (argIndex > $n(args).u.length))) {
        $p_ju_Formatter__throwMissingFormatArgumentException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      lastArgIndex = argIndex;
      var arg = $n(args).get((((-1) + argIndex) | 0));
      if ((((arg === null) && (conversionLower !== 98)) && (conversionLower !== 115))) {
        $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, "null");
      } else {
        $p_ju_Formatter__formatArg__ju_Formatter$LocaleInfo__O__C__I__I__I__V($thiz, localeInfo, arg, conversionLower, flags, width, precision);
      }
    }
  }
  return $thiz;
}
function $p_ju_Formatter__parseFlags__T__C__I($thiz, flags, conversion) {
  var bits = (((conversion >= 65) && (conversion <= 90)) ? 256 : 0);
  var this$1 = $n(flags);
  var len = this$1.length;
  var i = 0;
  while ((i !== len)) {
    var this$2 = $n(flags);
    var index = i;
    var f = $charAt(this$2, index);
    switch (f) {
      case 45: {
        var bit = 1;
        break;
      }
      case 35: {
        var bit = 2;
        break;
      }
      case 43: {
        var bit = 4;
        break;
      }
      case 32: {
        var bit = 8;
        break;
      }
      case 48: {
        var bit = 16;
        break;
      }
      case 44: {
        var bit = 32;
        break;
      }
      case 40: {
        var bit = 64;
        break;
      }
      case 60: {
        var bit = 128;
        break;
      }
      default: {
        var bit;
        throw new $c_jl_AssertionError($bC(f));
      }
    }
    if (((bits & bit) !== 0)) {
      $p_ju_Formatter__throwDuplicateFormatFlagsException__C__E($thiz, f);
    }
    bits = (bits | bit);
    i = ((1 + i) | 0);
  }
  return bits;
}
function $p_ju_Formatter__parsePositiveInt__O__I($thiz, capture) {
  if ((capture !== (void 0))) {
    var t = $as_T(capture);
    var x = $uD(parseInt(t, 10));
    return ((x <= 2.147483647E9) ? $doubleToInt(x) : (-2));
  } else {
    return (-1);
  }
}
function $p_ju_Formatter__formatArg__ju_Formatter$LocaleInfo__O__C__I__I__I__V($thiz, localeInfo, arg, conversionLower, flags, width, precision) {
  switch (conversionLower) {
    case 98: {
      var str = (((arg === false) || (arg === null)) ? "false" : "true");
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, str);
      break;
    }
    case 104: {
      var i = $dp_hashCode__I($n(arg));
      var str$2 = $as_T((i >>> 0.0).toString(16));
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, str$2);
      break;
    }
    case 115: {
      if ($is_ju_Formattable(arg)) {
        var x2 = $as_ju_Formattable(arg);
        var formattableFlags = (((((1 & flags) !== 0) ? 1 : 0) | (((2 & flags) !== 0) ? 4 : 0)) | (((256 & flags) !== 0) ? 2 : 0));
        $n(x2).formatTo__ju_Formatter__I__I__I__V($thiz, formattableFlags, width, precision);
      } else {
        if (((2 & flags) !== 0)) {
          $thiz.java$util$Formatter$$throwFormatFlagsConversionMismatchException__C__I__I__E(conversionLower, flags, 2);
        }
        var str$3 = ("" + arg);
        $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, precision, str$3);
      }
      break;
    }
    case 99: {
      if ((arg instanceof $Char)) {
        var x2$2 = $uC(arg);
        var str$4 = ("" + $cToS(x2$2));
      } else {
        if ((!$isInt(arg))) {
          $thiz.java$util$Formatter$$throwIllegalFormatConversionException__C__O__E(conversionLower, arg);
        }
        var x3 = $uI(arg);
        if ((!((x3 >= 0) && (x3 <= 1114111)))) {
          $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, x3);
        }
        var str$4 = ((x3 < 65536) ? $as_T(String.fromCharCode(x3)) : $as_T(String.fromCharCode((55296 | (((-64) + (x3 >> 10)) | 0)), (56320 | (1023 & x3)))));
      }
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, (-1), str$4);
      break;
    }
    case 100: {
      if ($isInt(arg)) {
        var x2$3 = $uI(arg);
        var str$5 = ("" + x2$3);
      } else if ((arg instanceof $c_RTLong)) {
        var t = $uJ(arg);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        var this$12 = $m_RTLong$();
        var str$5 = this$12.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi);
      } else {
        if ((!false)) {
          $thiz.java$util$Formatter$$throwIllegalFormatConversionException__C__O__E(conversionLower, arg);
        }
        var x4 = $as_Ljava_math_BigInteger(arg);
        var str$5 = $n(x4).toString__T();
      }
      $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, str$5, "");
      break;
    }
    case 111:
    case 120: {
      var isOctal = (conversionLower === 111);
      var prefix = (((2 & flags) === 0) ? "" : (isOctal ? "0" : (((256 & flags) !== 0) ? "0X" : "0x")));
      if (false) {
        var x2$4 = $as_Ljava_math_BigInteger(arg);
        var radix = (isOctal ? 8 : 16);
        $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, $n(x2$4).toString__I__T(radix), prefix);
      } else {
        if ($isInt(arg)) {
          var x2$5 = $uI(arg);
          var str$6 = (isOctal ? $as_T((x2$5 >>> 0.0).toString(8)) : $as_T((x2$5 >>> 0.0).toString(16)));
        } else {
          if ((!(arg instanceof $c_RTLong))) {
            $thiz.java$util$Formatter$$throwIllegalFormatConversionException__C__O__E(conversionLower, arg);
          }
          var t$1 = $uJ(arg);
          var lo$1 = t$1.RTLong__f_lo;
          var hi$1 = t$1.RTLong__f_hi;
          if (isOctal) {
            var this$21 = $m_jl_Long$();
            var str$6 = this$21.java$lang$Long$$toOctalString__I__I__T(lo$1, hi$1);
          } else {
            var this$25 = $m_jl_Long$();
            var str$6 = this$25.java$lang$Long$$toHexString__I__I__T(lo$1, hi$1);
          }
        }
        if (((76 & flags) !== 0)) {
          $thiz.java$util$Formatter$$throwFormatFlagsConversionMismatchException__C__I__I__E(conversionLower, flags, 76);
        }
        $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, prefix, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str$6));
      }
      break;
    }
    case 101:
    case 102:
    case 103: {
      if (((typeof arg) === "number")) {
        var x2$6 = $uD(arg);
        if (((x2$6 !== x2$6) || ((x2$6 === Infinity) || (x2$6 === (-Infinity))))) {
          $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, x2$6);
        } else {
          $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().java$util$Formatter$$numberToDecimal__D__ju_Formatter$Decimal(x2$6), flags, precision, conversionLower, localeInfo, width);
        }
      } else if (false) {
        var x3$4 = $as_Ljava_math_BigDecimal(arg);
        $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().java$util$Formatter$$bigDecimalToDecimal__Ljava_math_BigDecimal__ju_Formatter$Decimal(x3$4), flags, precision, conversionLower, localeInfo, width);
      } else {
        $thiz.java$util$Formatter$$throwIllegalFormatConversionException__C__O__E(conversionLower, arg);
      }
      break;
    }
    case 97: {
      if (((typeof arg) === "number")) {
        var x2$7 = $uD(arg);
        $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, x2$7);
      } else {
        $thiz.java$util$Formatter$$throwIllegalFormatConversionException__C__O__E(conversionLower, arg);
      }
      break;
    }
    default: {
      throw new $c_jl_AssertionError((("Unknown conversion '" + $cToS(conversionLower)) + "' was not rejected earlier"));
    }
  }
}
function $p_ju_Formatter__flagsToString__I__T($thiz, flags) {
  return ((((((((((1 & flags) !== 0) ? "-" : "") + (((2 & flags) !== 0) ? "#" : "")) + (((4 & flags) !== 0) ? "+" : "")) + (((8 & flags) !== 0) ? " " : "")) + (((16 & flags) !== 0) ? "0" : "")) + (((32 & flags) !== 0) ? "," : "")) + (((64 & flags) !== 0) ? "(" : "")) + (((128 & flags) !== 0) ? "<" : ""));
}
function $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, digitsAfterDot, forceDecimalSep) {
  var rounded = $n(x).round__I__ju_Formatter$Decimal(((1 + digitsAfterDot) | 0));
  var signStr = ($n(rounded).ju_Formatter$Decimal__f_negative ? "-" : "");
  var intStr = $n(rounded).ju_Formatter$Decimal__f_unscaledValue;
  var this$1 = $n(intStr);
  var fractionalDigitCount = (((-1) + this$1.length) | 0);
  var missingZeros = ((digitsAfterDot - fractionalDigitCount) | 0);
  var this$2 = $n(intStr);
  if ((this$2.length < 1)) {
    $charAt(this$2, 1);
  }
  var integerPart = $as_T(this$2.substring(0, 1));
  var this$3 = $n(intStr);
  if ((this$3.length < 1)) {
    $charAt(this$3, 1);
  }
  var fractionalPart = (("" + $as_T(this$3.substring(1))) + $m_ju_Formatter$().java$util$Formatter$$strOfZeros__I__T(missingZeros));
  var significandStr = (((fractionalPart === "") && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + fractionalPart));
  var exponent = ((fractionalDigitCount - $n(rounded).ju_Formatter$Decimal__f_scale) | 0);
  var exponentSign = ((exponent < 0) ? "-" : "+");
  var sign = (exponent >> 31);
  var this$5 = (((exponent ^ sign) - sign) | 0);
  var exponentAbsStr0 = ("" + this$5);
  var exponentAbsStr = ((exponentAbsStr0.length === 1) ? ("0" + exponentAbsStr0) : exponentAbsStr0);
  return ((((signStr + significandStr) + "e") + exponentSign) + exponentAbsStr);
}
function $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, scale, forceDecimalSep) {
  var rounded = $n(x).setScale__I__ju_Formatter$Decimal(scale);
  var signStr = ($n(rounded).ju_Formatter$Decimal__f_negative ? "-" : "");
  var intStr = $n(rounded).ju_Formatter$Decimal__f_unscaledValue;
  var this$1 = $n(intStr);
  var intStrLen = this$1.length;
  var minDigits = ((1 + scale) | 0);
  var expandedIntStr = ((intStrLen >= minDigits) ? intStr : (("" + $m_ju_Formatter$().java$util$Formatter$$strOfZeros__I__T(((minDigits - intStrLen) | 0))) + intStr));
  var this$2 = $n(expandedIntStr);
  var dotPos = ((this$2.length - scale) | 0);
  var this$3 = $n(expandedIntStr);
  if ((dotPos > this$3.length)) {
    $charAt(this$3, dotPos);
  }
  if ((dotPos < 0)) {
    $charAt(this$3, (-1));
  }
  var integerPart = (signStr + $as_T(this$3.substring(0, dotPos)));
  if (((scale === 0) && (!forceDecimalSep))) {
    return integerPart;
  } else {
    var this$4 = $n(expandedIntStr);
    if (((dotPos < 0) || (dotPos > this$4.length))) {
      $charAt(this$4, dotPos);
    }
    return ((integerPart + ".") + $as_T(this$4.substring(dotPos)));
  }
}
function $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, precision, forceDecimalSep) {
  var p = ((precision === 0) ? 1 : precision);
  var rounded = $n(x).round__I__ju_Formatter$Decimal(p);
  var this$1 = $n(rounded);
  var this$2 = $n(this$1.ju_Formatter$Decimal__f_unscaledValue);
  var orderOfMagnitude = (((((-1) + this$2.length) | 0) - $n(rounded).ju_Formatter$Decimal__f_scale) | 0);
  if (((orderOfMagnitude >= (-4)) && (orderOfMagnitude < p))) {
    var b = (((-1) + ((p - orderOfMagnitude) | 0)) | 0);
    return $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, rounded, ((b < 0) ? 0 : b), forceDecimalSep);
  } else {
    return $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, rounded, (((-1) + p) | 0), forceDecimalSep);
  }
}
function $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, arg) {
  if (((arg !== arg) || ((arg === Infinity) || (arg === (-Infinity))))) {
    $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, arg);
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, arg, true);
    var lo = $uI(fpBitsDataView.getInt32(0, true));
    var hi = $uI(fpBitsDataView.getInt32(4, true));
    var negative = (hi < 0);
    var hi$1 = (1048575 & hi);
    var lo$1 = ((hi >>> 20) | 0);
    var biasedExponent = (2047 & lo$1);
    var actualPrecision = ((precision === 0) ? 1 : ((precision > 12) ? (-1) : precision));
    var signStr = (negative ? "-" : (((4 & flags) !== 0) ? "+" : (((8 & flags) !== 0) ? " " : "")));
    if ((biasedExponent === 0)) {
      if (((lo === 0) && (hi$1 === 0))) {
        var x1___1 = "0";
        var x1___2 = $L0;
        var x1___3 = 0;
      } else if ((actualPrecision === (-1))) {
        var x1___1 = "0";
        var x1___2 = new $c_RTLong(lo, hi$1);
        var x1___3 = (-1022);
      } else {
        var leadingZeros = ((hi$1 !== 0) ? Math.clz32(hi$1) : ((32 + Math.clz32(lo)) | 0));
        var shift = (((-11) + leadingZeros) | 0);
        var lo$2 = (((32 & shift) === 0) ? (lo << shift) : 0);
        var hi$2 = (((32 & shift) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - shift) | 0)) | 0) | (hi$1 << shift)) : (lo << shift));
        var hi$3 = (1048575 & hi$2);
        var normalizedExponent = (((-1022) - shift) | 0);
        var x1___1 = "1";
        var x1___2 = new $c_RTLong(lo$2, hi$3);
        var x1___3 = normalizedExponent;
      }
    } else {
      var _3 = (((-1023) + biasedExponent) | 0);
      var x1___1 = "1";
      var x1___2 = new $c_RTLong(lo, hi$1);
      var x1___3 = _3;
    }
    var implicitBitStr = $as_T(x1___1);
    var t = $uJ(x1___2);
    var lo$3 = t.RTLong__f_lo;
    var hi$4 = t.RTLong__f_hi;
    var exponent = $uI(x1___3);
    if ((actualPrecision === (-1))) {
      var roundedMantissa__lo = lo$3;
      var roundedMantissa__hi = hi$4;
    } else {
      var n = ((52 - (actualPrecision << 2)) | 0);
      var lo$4 = (((32 & n) === 0) ? (1 << n) : 0);
      var hi$5 = (((32 & n) === 0) ? 0 : (1 << n));
      var lo$5 = (((-1) + lo$4) | 0);
      var hi$6 = (((((-1) + hi$5) | 0) + (((lo$4 | (~lo$5)) >>> 31) | 0)) | 0);
      var lo$6 = (((lo$4 >>> 1) | 0) | (hi$5 << 31));
      var hi$7 = (hi$5 >> 1);
      var lo$7 = (~lo$5);
      var hi$8 = (~hi$6);
      var lo$8 = (lo$3 & lo$7);
      var hi$9 = (hi$4 & hi$8);
      var lo$9 = (lo$3 & lo$5);
      var hi$10 = (hi$4 & hi$6);
      if (((hi$10 === hi$7) ? ((lo$9 >>> 0) < (lo$6 >>> 0)) : (hi$10 < hi$7))) {
        var roundedMantissa__lo = lo$8;
        var roundedMantissa__hi = hi$9;
      } else if (((hi$10 === hi$7) ? ((lo$9 >>> 0) > (lo$6 >>> 0)) : (hi$10 > hi$7))) {
        var lo$10 = ((lo$8 + lo$4) | 0);
        var hi$11 = ((((hi$9 + hi$5) | 0) + ((((lo$8 & lo$4) | ((lo$8 | lo$4) & (~lo$10))) >>> 31) | 0)) | 0);
        var roundedMantissa__lo = lo$10;
        var roundedMantissa__hi = hi$11;
      } else {
        var lo$11 = (lo$8 & lo$4);
        var hi$12 = (hi$9 & hi$5);
        if (((lo$11 === 0) && (hi$12 === 0))) {
          var roundedMantissa__lo = lo$8;
          var roundedMantissa__hi = hi$9;
        } else {
          var lo$12 = ((lo$8 + lo$4) | 0);
          var hi$13 = ((((hi$9 + hi$5) | 0) + ((((lo$8 & lo$4) | ((lo$8 | lo$4) & (~lo$12))) >>> 31) | 0)) | 0);
          var roundedMantissa__lo = lo$12;
          var roundedMantissa__hi = hi$13;
        }
      }
    }
    var this$30 = $m_jl_Long$();
    var hi$14 = roundedMantissa__hi;
    var baseStr = this$30.java$lang$Long$$toHexString__I__I__T(roundedMantissa__lo, hi$14);
    var this$34 = $n(baseStr);
    var beginIndex = this$34.length;
    if (((beginIndex < 0) || (beginIndex > 13))) {
      $charAt("0000000000000", beginIndex);
    }
    var padded = (("" + $as_T("0000000000000".substring(beginIndex))) + baseStr);
    $m_ju_Formatter$();
    var condition = (padded.length === 13);
    if ((!condition)) {
      throw new $c_jl_AssertionError("padded mantissa does not have the right number of bits");
    }
    var minLength = ((actualPrecision < 1) ? 1 : actualPrecision);
    var len = padded.length;
    while (true) {
      if ((len > minLength)) {
        var index = (((-1) + len) | 0);
        var $x_1 = ($charAt(padded, index) === 48);
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        len = (((-1) + len) | 0);
      } else {
        break;
      }
    }
    var endIndex = len;
    if ((endIndex > padded.length)) {
      $charAt(padded, endIndex);
    }
    if ((endIndex < 0)) {
      $charAt(padded, (-1));
    }
    var mantissaStr = $as_T(padded.substring(0, endIndex));
    var exponentStr = ("" + exponent);
    var prefix = (signStr + (((256 & flags) !== 0) ? "0X" : "0x"));
    var rest = ((((implicitBitStr + ".") + mantissaStr) + "p") + exponentStr);
    $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, prefix, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, rest));
  }
}
function $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, precision, str) {
  if ((precision < 0)) {
    var $x_1 = true;
  } else {
    var this$1 = $n(str);
    var $x_1 = (precision >= this$1.length);
  }
  if ($x_1) {
    var truncatedStr = str;
  } else {
    var this$2 = $n(str);
    if ((precision > this$2.length)) {
      $charAt(this$2, precision);
    }
    if ((precision < 0)) {
      $charAt(this$2, (-1));
    }
    var truncatedStr = $as_T(this$2.substring(0, precision));
  }
  $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyUpperCase__ju_Formatter$LocaleInfo__I__T__T($thiz, localeInfo, flags, truncatedStr));
}
function $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, x) {
  var str = ((x !== x) ? "NaN" : ((x > 0.0) ? (((4 & flags) !== 0) ? "+Infinity" : (((8 & flags) !== 0) ? " Infinity" : "Infinity")) : (((64 & flags) !== 0) ? "(Infinity)" : "-Infinity")));
  $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str));
}
function $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, str, basePrefix) {
  var this$1 = $n(str);
  if (((this$1.length >= width) && ((110 & flags) === 0))) {
    $n(localeInfo);
    var str$1 = $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str);
    $p_ju_Formatter__sendToDest__T__V($thiz, str$1);
  } else if (((126 & flags) === 0)) {
    $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str));
  } else {
    var this$5 = $n(str);
    if (($charAt(this$5, 0) !== 45)) {
      if (((4 & flags) !== 0)) {
        var x1___1 = "+";
        var x1___2 = str;
      } else if (((8 & flags) !== 0)) {
        var x1___1 = " ";
        var x1___2 = str;
      } else {
        var x1___1 = "";
        var x1___2 = str;
      }
    } else if (((64 & flags) !== 0)) {
      var this$9 = $n(str);
      if ((this$9.length < 1)) {
        $charAt(this$9, 1);
      }
      var _2 = ($as_T(this$9.substring(1)) + ")");
      var x1___1 = "(";
      var x1___2 = _2;
    } else {
      var this$10 = $n(str);
      if ((this$10.length < 1)) {
        $charAt(this$10, 1);
      }
      var _2$1 = $as_T(this$10.substring(1));
      var x1___1 = "-";
      var x1___2 = _2$1;
    }
    var numberPrefix = $as_T(x1___1);
    var rest0 = $as_T(x1___2);
    var prefix = (("" + numberPrefix) + basePrefix);
    var rest = (((32 & flags) !== 0) ? $p_ju_Formatter__insertGroupingCommas__ju_Formatter$LocaleInfo__T__T($thiz, localeInfo, rest0) : rest0);
    $n(localeInfo);
    var str$2 = $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, rest);
    $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, prefix, str$2);
  }
}
function $p_ju_Formatter__insertGroupingCommas__ju_Formatter$LocaleInfo__T__T($thiz, localeInfo, s) {
  $n(localeInfo);
  var groupingSize = 3;
  var this$1 = $n(s);
  var len = this$1.length;
  var index = 0;
  while (true) {
    if ((index !== len)) {
      var this$2 = $n(s);
      var index$1 = index;
      var c = $charAt(this$2, index$1);
      var $x_1 = ((c >= 48) && (c <= 57));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      index = ((1 + index) | 0);
    } else {
      break;
    }
  }
  index = ((index - groupingSize) | 0);
  if ((index <= 0)) {
    return s;
  } else {
    var this$3 = $n(s);
    var beginIndex = index;
    if (((beginIndex < 0) || (beginIndex > this$3.length))) {
      $charAt(this$3, beginIndex);
    }
    var result = $as_T(this$3.substring(beginIndex));
    while ((index > groupingSize)) {
      var next = ((index - groupingSize) | 0);
      var this$4 = $n(s);
      var endIndex = index;
      if ((next < 0)) {
        $charAt(this$4, next);
      }
      if ((endIndex > this$4.length)) {
        $charAt(this$4, endIndex);
      }
      if ((endIndex < next)) {
        $charAt(this$4, (-1));
      }
      result = (($as_T(this$4.substring(next, endIndex)) + ",") + result);
      index = next;
    }
    var this$5 = $n(s);
    var endIndex$1 = index;
    if ((endIndex$1 > this$5.length)) {
      $charAt(this$5, endIndex$1);
    }
    if ((endIndex$1 < 0)) {
      $charAt(this$5, (-1));
    }
    return (($as_T(this$5.substring(0, endIndex$1)) + ",") + result);
  }
}
function $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str) {
  if (((256 & flags) !== 0)) {
    var this$2 = $n(str);
    return $as_T(this$2.toUpperCase());
  } else {
    return str;
  }
}
function $p_ju_Formatter__applyUpperCase__ju_Formatter$LocaleInfo__I__T__T($thiz, localeInfo, flags, str) {
  if (((256 & flags) !== 0)) {
    $n(localeInfo);
    var this$3 = $n(str);
    return $as_T(this$3.toUpperCase());
  } else {
    return str;
  }
}
function $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, str) {
  var this$1 = $n(str);
  var len = this$1.length;
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__V($thiz, str);
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)));
  } else {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), str);
  }
}
function $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, prefix, str) {
  var this$1 = $n(prefix);
  var this$2 = $n(str);
  var len = ((this$1.length + this$2.length) | 0);
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, prefix, str);
  } else if (((16 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, $p_ju_Formatter__strRepeat__T__I__T($thiz, ($n(localeInfo), "0"), ((width - len) | 0)), str);
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)));
  } else {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), prefix, str);
  }
}
function $p_ju_Formatter__strRepeat__T__I__T($thiz, s, times) {
  var result = "";
  var i = 0;
  while ((i !== times)) {
    result = (("" + result) + s);
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_ju_Formatter__throwDuplicateFormatFlagsException__C__E($thiz, flag) {
  throw new $c_ju_DuplicateFormatFlagsException(("" + $cToS(flag)));
}
function $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion) {
  throw new $c_ju_UnknownFormatConversionException(("" + $cToS(conversion)));
}
function $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision) {
  throw new $c_ju_IllegalFormatPrecisionException(precision);
}
function $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, width) {
  throw new $c_ju_IllegalFormatWidthException(width);
}
function $p_ju_Formatter__throwIllegalFormatArgumentIndexException__I__E($thiz, index) {
  var msg = ((index === 0) ? "Illegal format argument index = 0" : "Format argument index: (not representable as int)");
  throw new $c_ju_IllegalFormatArgumentIndexException(msg);
}
function $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, fullFormatSpecifier) {
  throw new $c_ju_MissingFormatWidthException(fullFormatSpecifier);
}
function $p_ju_Formatter__throwMissingFormatArgumentException__T__E($thiz, fullFormatSpecifier) {
  throw new $c_ju_MissingFormatArgumentException(fullFormatSpecifier);
}
function $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, arg) {
  throw new $c_ju_IllegalFormatCodePointException(arg);
}
function $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult$1) {
  return ("%" + execResult$1[0]);
}
function $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, x, flags$1, precision$1, conversionLower$1, localeInfo$1, width$1) {
  var forceDecimalSep = ((2 & flags$1) !== 0);
  var actualPrecision = ((precision$1 >= 0) ? precision$1 : 6);
  switch (conversionLower$1) {
    case 101: {
      var notation = $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
      break;
    }
    case 102: {
      var notation = $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
      break;
    }
    default: {
      var notation = $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
    }
  }
  $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo$1, flags$1, width$1, notation, "");
}
function $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, dest, formatterLocaleInfo) {
  $thiz.ju_Formatter__f_dest = dest;
  $thiz.ju_Formatter__f_formatterLocaleInfo = formatterLocaleInfo;
  $thiz.ju_Formatter__f_stringOutput = "";
  $thiz.ju_Formatter__f_java$util$Formatter$$closed = false;
  return $thiz;
}
function $ct_ju_Formatter__($thiz) {
  $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, null, $m_ju_Formatter$RootLocaleInfo$());
  return $thiz;
}
/** @constructor */
function $c_ju_Formatter() {
  this.ju_Formatter__f_dest = null;
  this.ju_Formatter__f_formatterLocaleInfo = null;
  this.ju_Formatter__f_stringOutput = null;
  this.ju_Formatter__f_java$util$Formatter$$closed = false;
}
$c_ju_Formatter.prototype = new $h_O();
$c_ju_Formatter.prototype.constructor = $c_ju_Formatter;
/** @constructor */
function $h_ju_Formatter() {
}
$h_ju_Formatter.prototype = $c_ju_Formatter.prototype;
$c_ju_Formatter.prototype.format__T__AO__ju_Formatter = (function(format, args) {
  return $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter(this, this.ju_Formatter__f_formatterLocaleInfo, format, args);
});
$c_ju_Formatter.prototype.toString__T = (function() {
  if (this.ju_Formatter__f_java$util$Formatter$$closed) {
    throw new $c_ju_FormatterClosedException();
  }
  return ((this.ju_Formatter__f_dest === null) ? this.ju_Formatter__f_stringOutput : $n(this.ju_Formatter__f_dest).toString__T());
});
$c_ju_Formatter.prototype.java$util$Formatter$$throwIllegalFormatFlagsException__I__E = (function(flags) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T(this, flags));
});
$c_ju_Formatter.prototype.java$util$Formatter$$throwFormatFlagsConversionMismatchException__C__I__I__E = (function(conversionLower, flags, illegalFlags) {
  throw new $c_ju_FormatFlagsConversionMismatchException($p_ju_Formatter__flagsToString__I__T(this, (flags & illegalFlags)), conversionLower);
});
$c_ju_Formatter.prototype.java$util$Formatter$$throwIllegalFormatConversionException__C__O__E = (function(conversionLower, arg) {
  var this$1 = $n(arg);
  throw new $c_ju_IllegalFormatConversionException(conversionLower, $objectGetClass(this$1));
});
var $d_ju_Formatter = new $TypeData().initClass($c_ju_Formatter, "java.util.Formatter", ({
  ju_Formatter: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
}));
/** @constructor */
function $c_Lorg_expr_simplex_Simplex$SimplexProblem(lhs, rhs, z, opttype, directions, varnames, slackvariableindices, surplusvariableindices, artificialvariableindices, basicvariableindex, biggestvalue, isinstandardform, converged, objective_value) {
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs = null;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs = null;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_z = null;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype = null;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions = null;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames = null;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices = null;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices = null;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices = null;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex = null;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue = 0.0;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform = false;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged = false;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value = 0.0;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs = lhs;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs = rhs;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_z = z;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype = opttype;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions = directions;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames = varnames;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices = slackvariableindices;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices = surplusvariableindices;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices = artificialvariableindices;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex = basicvariableindex;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue = biggestvalue;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform = isinstandardform;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged = converged;
  this.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value = objective_value;
}
$c_Lorg_expr_simplex_Simplex$SimplexProblem.prototype = new $h_O();
$c_Lorg_expr_simplex_Simplex$SimplexProblem.prototype.constructor = $c_Lorg_expr_simplex_Simplex$SimplexProblem;
/** @constructor */
function $h_Lorg_expr_simplex_Simplex$SimplexProblem() {
}
$h_Lorg_expr_simplex_Simplex$SimplexProblem.prototype = $c_Lorg_expr_simplex_Simplex$SimplexProblem.prototype;
$c_Lorg_expr_simplex_Simplex$SimplexProblem.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_expr_simplex_Simplex$SimplexProblem.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  acc = $m_sr_Statics$().mix__I__I__I(hash, 161844953);
  var hash$1 = acc;
  var x = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
  var data = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data);
  var hash$2 = acc;
  var x$1 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
  var data$1 = $m_sr_Statics$().anyHash__O__I(x$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$1);
  var hash$3 = acc;
  var x$2 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
  var data$2 = $m_sr_Statics$().anyHash__O__I(x$2);
  acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$2);
  var hash$4 = acc;
  var x$3 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
  var data$3 = $m_sr_Statics$().anyHash__O__I(x$3);
  acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$3);
  var hash$5 = acc;
  var x$4 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
  var data$4 = $m_sr_Statics$().anyHash__O__I(x$4);
  acc = $m_sr_Statics$().mix__I__I__I(hash$5, data$4);
  var hash$6 = acc;
  var x$5 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
  var data$5 = $m_sr_Statics$().anyHash__O__I(x$5);
  acc = $m_sr_Statics$().mix__I__I__I(hash$6, data$5);
  var hash$7 = acc;
  var x$6 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
  var data$6 = $m_sr_Statics$().anyHash__O__I(x$6);
  acc = $m_sr_Statics$().mix__I__I__I(hash$7, data$6);
  var hash$8 = acc;
  var x$7 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
  var data$7 = $m_sr_Statics$().anyHash__O__I(x$7);
  acc = $m_sr_Statics$().mix__I__I__I(hash$8, data$7);
  var hash$9 = acc;
  var x$8 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
  var data$8 = $m_sr_Statics$().anyHash__O__I(x$8);
  acc = $m_sr_Statics$().mix__I__I__I(hash$9, data$8);
  var hash$10 = acc;
  var x$9 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
  var data$9 = $m_sr_Statics$().anyHash__O__I(x$9);
  acc = $m_sr_Statics$().mix__I__I__I(hash$10, data$9);
  var hash$11 = acc;
  var dv = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
  var data$10 = $m_sr_Statics$().doubleHash__D__I(dv);
  acc = $m_sr_Statics$().mix__I__I__I(hash$11, data$10);
  var hash$12 = acc;
  var data$11 = (this.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform ? 1231 : 1237);
  acc = $m_sr_Statics$().mix__I__I__I(hash$12, data$11);
  var hash$13 = acc;
  var data$12 = (this.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged ? 1231 : 1237);
  acc = $m_sr_Statics$().mix__I__I__I(hash$13, data$12);
  var hash$14 = acc;
  var dv$1 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
  var data$13 = $m_sr_Statics$().doubleHash__D__I(dv$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$14, data$13);
  var hash$15 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$15, 14);
});
$c_Lorg_expr_simplex_Simplex$SimplexProblem.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_expr_simplex_Simplex$SimplexProblem)) {
    var x4 = $as_Lorg_expr_simplex_Simplex$SimplexProblem(x$0);
    if (((((this.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue === $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue) && (this.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform === $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform)) && (this.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged === $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_converged)) && (this.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value === $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value))) {
      var x = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
      var x$2 = $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
      if ((x === null)) {
        var $x_10 = (x$2 === null);
      } else {
        var this$1 = $n(x);
        var $x_10 = (this$1 === x$2);
      }
    } else {
      var $x_10 = false;
    }
    if ($x_10) {
      var x$3 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
      var x$4 = $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
      if ((x$3 === null)) {
        var $x_9 = (x$4 === null);
      } else {
        var this$2 = $n(x$3);
        var $x_9 = (this$2 === x$4);
      }
    } else {
      var $x_9 = false;
    }
    if ($x_9) {
      var x$5 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
      var x$6 = $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
      if ((x$5 === null)) {
        var $x_8 = (x$6 === null);
      } else {
        var this$3 = $n(x$5);
        var $x_8 = (this$3 === x$6);
      }
    } else {
      var $x_8 = false;
    }
    if ($x_8) {
      var x$7 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
      var x$8 = $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
      if ((x$7 === null)) {
        var $x_7 = (x$8 === null);
      } else {
        var this$4 = $n(x$7);
        var $x_7 = (this$4 === x$8);
      }
    } else {
      var $x_7 = false;
    }
    if ($x_7) {
      var x$9 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
      var x$10 = $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
      if ((x$9 === null)) {
        var $x_6 = (x$10 === null);
      } else {
        var this$5 = $n(x$9);
        var $x_6 = (this$5 === x$10);
      }
    } else {
      var $x_6 = false;
    }
    if ($x_6) {
      var x$11 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
      var x$12 = $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
      if ((x$11 === null)) {
        var $x_5 = (x$12 === null);
      } else {
        var this$6 = $n(x$11);
        var $x_5 = (this$6 === x$12);
      }
    } else {
      var $x_5 = false;
    }
    if ($x_5) {
      var x$13 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
      var x$14 = $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
      if ((x$13 === null)) {
        var $x_4 = (x$14 === null);
      } else {
        var this$7 = $n(x$13);
        var $x_4 = (this$7 === x$14);
      }
    } else {
      var $x_4 = false;
    }
    if ($x_4) {
      var x$15 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
      var x$16 = $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
      if ((x$15 === null)) {
        var $x_3 = (x$16 === null);
      } else {
        var this$8 = $n(x$15);
        var $x_3 = (this$8 === x$16);
      }
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$17 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
      var x$18 = $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
      if ((x$17 === null)) {
        var $x_2 = (x$18 === null);
      } else {
        var this$9 = $n(x$17);
        var $x_2 = (this$9 === x$18);
      }
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$19 = this.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
      var x$20 = $n(x4).Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
      if ((x$19 === null)) {
        var $x_1 = (x$20 === null);
      } else {
        var this$10 = $n(x$19);
        var $x_1 = (this$10 === x$20);
      }
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $n(x4);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lorg_expr_simplex_Simplex$SimplexProblem.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_expr_simplex_Simplex$SimplexProblem.prototype.productArity__I = (function() {
  return 14;
});
$c_Lorg_expr_simplex_Simplex$SimplexProblem.prototype.productPrefix__T = (function() {
  return "SimplexProblem";
});
$c_Lorg_expr_simplex_Simplex$SimplexProblem.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_lhs;
      break;
    }
    case 1: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_rhs;
      break;
    }
    case 2: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_z;
      break;
    }
    case 3: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_opttype;
      break;
    }
    case 4: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_directions;
      break;
    }
    case 5: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_varnames;
      break;
    }
    case 6: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_slackvariableindices;
      break;
    }
    case 7: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_surplusvariableindices;
      break;
    }
    case 8: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_artificialvariableindices;
      break;
    }
    case 9: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_basicvariableindex;
      break;
    }
    case 10: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_biggestvalue;
      break;
    }
    case 11: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_isinstandardform;
      break;
    }
    case 12: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_converged;
      break;
    }
    case 13: {
      return this.Lorg_expr_simplex_Simplex$SimplexProblem__f_objective_value;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $as_Lorg_expr_simplex_Simplex$SimplexProblem(obj) {
  return (((obj instanceof $c_Lorg_expr_simplex_Simplex$SimplexProblem) || (obj === null)) ? obj : $throwClassCastException(obj, "org.expr.simplex.Simplex$SimplexProblem"));
}
function $isArrayOf_Lorg_expr_simplex_Simplex$SimplexProblem(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_expr_simplex_Simplex$SimplexProblem)));
}
function $asArrayOf_Lorg_expr_simplex_Simplex$SimplexProblem(obj, depth) {
  return (($isArrayOf_Lorg_expr_simplex_Simplex$SimplexProblem(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.expr.simplex.Simplex$SimplexProblem;", depth));
}
var $d_Lorg_expr_simplex_Simplex$SimplexProblem = new $TypeData().initClass($c_Lorg_expr_simplex_Simplex$SimplexProblem, "org.expr.simplex.Simplex$SimplexProblem", ({
  Lorg_expr_simplex_Simplex$SimplexProblem: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
  return this;
});
$c_sc_AbstractIterator.prototype.concat__F0__sc_Iterator = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return this.sliceIterator__I__I__sc_Iterator(n, (-1));
});
$c_sc_AbstractIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>";
});
$c_sc_AbstractIterator.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$c_sc_AbstractIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sc_AbstractIterator.prototype.toArray__s_reflect_ClassTag__O = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$c_sc_AbstractIterator.prototype.knownSize__I = (function() {
  return (-1);
});
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
}
$c_sc_SeqFactory$Delegate.prototype = new $h_O();
$c_sc_SeqFactory$Delegate.prototype.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $c_sc_SeqFactory$Delegate.prototype;
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return $as_sc_SeqOps($n(this.sc_SeqFactory$Delegate__f_delegate).from__sc_IterableOnce__O(it));
});
$c_sc_SeqFactory$Delegate.prototype.newBuilder__scm_Builder = (function() {
  return $n(this.sc_SeqFactory$Delegate__f_delegate).newBuilder__scm_Builder();
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sc_SeqOps(source);
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.knownSize__I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = $n(that).knownSize__I();
    var knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
  } else {
    var knownSizeDifference = false;
  }
  if ((!knownSizeDifference)) {
    var this$1 = $n($thiz.iterator__sc_Iterator());
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that);
  } else {
    return false;
  }
}
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)));
}
function $as_sc_SeqOps(obj) {
  return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"));
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)));
}
function $asArrayOf_sc_SeqOps(obj, depth) {
  return (($isArrayOf_sc_SeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqOps;", depth));
}
function $f_sc_StrictOptimizedIterableOps__map__F1__O($thiz, f) {
  var b = $n($thiz.iterableFactory__sc_IterableFactory()).newBuilder__scm_Builder();
  var it = $thiz.iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    var this$1 = $n(b);
    var elem = $n(f).apply__O__O($n(it).next__O());
    this$1.addOne__O__scm_Growable(elem);
  }
  return $n(b).result__O();
}
/** @constructor */
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.scm_Builder$$anon$1__f_$outer = null;
  this.scm_Builder$$anon$1__f_f$1 = null;
  $n(outer);
  this.scm_Builder$$anon$1__f_$outer = outer;
  this.scm_Builder$$anon$1__f_f$1 = f$1;
}
$c_scm_Builder$$anon$1.prototype = new $h_O();
$c_scm_Builder$$anon$1.prototype.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $c_scm_Builder$$anon$1.prototype;
$c_scm_Builder$$anon$1.prototype.addOne__O__scm_Builder$$anon$1 = (function(x) {
  var this$1 = $n(this.scm_Builder$$anon$1__f_$outer);
  this$1.addOne__O__scm_Growable(x);
  return this;
});
$c_scm_Builder$$anon$1.prototype.addAll__sc_IterableOnce__scm_Builder$$anon$1 = (function(xs) {
  var this$1 = $n(this.scm_Builder$$anon$1__f_$outer);
  this$1.addAll__sc_IterableOnce__scm_Growable(xs);
  return this;
});
$c_scm_Builder$$anon$1.prototype.result__O = (function() {
  return $n(this.scm_Builder$$anon$1__f_f$1).apply__O__O($n(this.scm_Builder$$anon$1__f_$outer).result__O());
});
$c_scm_Builder$$anon$1.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__scm_Builder$$anon$1(elems);
});
$c_scm_Builder$$anon$1.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_Builder$$anon$1(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().initClass($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  scm_Builder$$anon$1: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.scm_GrowableBuilder__f_elems = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.scm_GrowableBuilder__f_elems = null;
}
$c_scm_GrowableBuilder.prototype = new $h_O();
$c_scm_GrowableBuilder.prototype.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $c_scm_GrowableBuilder.prototype;
$c_scm_GrowableBuilder.prototype.addOne__O__scm_GrowableBuilder = (function(elem) {
  var this$1 = $n(this.scm_GrowableBuilder__f_elems);
  this$1.addOne__O__scm_Growable(elem);
  return this;
});
$c_scm_GrowableBuilder.prototype.addAll__sc_IterableOnce__scm_GrowableBuilder = (function(xs) {
  $n(this.scm_GrowableBuilder__f_elems).addAll__sc_IterableOnce__scm_Growable(xs);
  return this;
});
$c_scm_GrowableBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__scm_GrowableBuilder(elems);
});
$c_scm_GrowableBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_GrowableBuilder(elem);
});
$c_scm_GrowableBuilder.prototype.result__O = (function() {
  return this.scm_GrowableBuilder__f_elems;
});
var $d_scm_GrowableBuilder = new $TypeData().initClass($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  scm_GrowableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
function $as_s_util_CommandLineParser$ParseError(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.CommandLineParser$ParseError"));
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_CommandLineParser$ParseError)));
}
function $asArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (($isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.CommandLineParser$ParseError;", depth));
}
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_Ljava_io_FilterOutputStream.prototype.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $c_Ljava_io_FilterOutputStream.prototype;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().initClass($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArrayStoreException = new $TypeData().initClass($c_jl_ArrayStoreException, "java.lang.ArrayStoreException", ({
  jl_ArrayStoreException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().initClass(0, "java.lang.Byte", ({
  jl_Byte: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ClassCastException = new $TypeData().initClass($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_IllegalStateException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalStateException = new $TypeData().initClass($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().initClass($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $as_jl_SecurityException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"));
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)));
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().initClass(0, "java.lang.Short", ({
  jl_Short: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().initClass($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  ju_ConcurrentModificationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().initClass($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_expr_simplex_Simplex$Direction() {
}
$c_Lorg_expr_simplex_Simplex$Direction.prototype = new $h_O();
$c_Lorg_expr_simplex_Simplex$Direction.prototype.constructor = $c_Lorg_expr_simplex_Simplex$Direction;
/** @constructor */
function $h_Lorg_expr_simplex_Simplex$Direction() {
}
$h_Lorg_expr_simplex_Simplex$Direction.prototype = $c_Lorg_expr_simplex_Simplex$Direction.prototype;
$c_Lorg_expr_simplex_Simplex$Direction.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $as_Lorg_expr_simplex_Simplex$Direction(obj) {
  return (((obj instanceof $c_Lorg_expr_simplex_Simplex$Direction) || (obj === null)) ? obj : $throwClassCastException(obj, "org.expr.simplex.Simplex$Direction"));
}
function $isArrayOf_Lorg_expr_simplex_Simplex$Direction(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_expr_simplex_Simplex$Direction)));
}
function $asArrayOf_Lorg_expr_simplex_Simplex$Direction(obj, depth) {
  return (($isArrayOf_Lorg_expr_simplex_Simplex$Direction(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.expr.simplex.Simplex$Direction;", depth));
}
var $d_Lorg_expr_simplex_Simplex$Direction = new $TypeData().initClass(0, "org.expr.simplex.Simplex$Direction", ({
  Lorg_expr_simplex_Simplex$Direction: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_reflect_Enum: 1
}));
/** @constructor */
function $c_Lorg_expr_simplex_Simplex$OptimizationType() {
}
$c_Lorg_expr_simplex_Simplex$OptimizationType.prototype = new $h_O();
$c_Lorg_expr_simplex_Simplex$OptimizationType.prototype.constructor = $c_Lorg_expr_simplex_Simplex$OptimizationType;
/** @constructor */
function $h_Lorg_expr_simplex_Simplex$OptimizationType() {
}
$h_Lorg_expr_simplex_Simplex$OptimizationType.prototype = $c_Lorg_expr_simplex_Simplex$OptimizationType.prototype;
$c_Lorg_expr_simplex_Simplex$OptimizationType.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : $n(cause).toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass($c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError, "org.scalajs.linker.runtime.UndefinedBehaviorError", ({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true;
  }
  return $thiz.s_MatchError__f_objString;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $n($thiz.s_MatchError__f_obj);
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.s_MatchError__f_obj + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().initClass($c_s_MatchError, "scala.MatchError", ({
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_Option() {
}
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $c_s_Option.prototype;
$c_s_Option.prototype.isEmpty__Z = (function() {
  return (this === $m_s_None$());
});
$c_s_Option.prototype.knownSize__I = (function() {
  return (this.isEmpty__Z() ? 0 : 1);
});
$c_s_Option.prototype.iterator__sc_Iterator = (function() {
  if (this.isEmpty__Z()) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  } else {
    var a = this.get__O();
    return new $c_sc_Iterator$$anon$20(a);
  }
});
function $as_s_Option(obj) {
  return (((obj instanceof $c_s_Option) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Option"));
}
function $isArrayOf_s_Option(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Option)));
}
function $asArrayOf_s_Option(obj, depth) {
  return (($isArrayOf_s_Option(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Option;", depth));
}
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = 0;
  this.s_Product$$anon$1__f_$outer = null;
  $n(outer);
  this.s_Product$$anon$1__f_$outer = outer;
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = $n(outer).productArity__I();
}
$c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_s_Product$$anon$1.prototype.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $c_s_Product$$anon$1.prototype;
$c_s_Product$$anon$1.prototype.hasNext__Z = (function() {
  return (this.s_Product$$anon$1__f_c < this.s_Product$$anon$1__f_cmax);
});
$c_s_Product$$anon$1.prototype.next__O = (function() {
  var result = $n(this.s_Product$$anon$1__f_$outer).productElement__I__O(this.s_Product$$anon$1__f_c);
  this.s_Product$$anon$1__f_c = ((1 + this.s_Product$$anon$1__f_c) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().initClass($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  s_Product$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().initClass($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  sc_ClassTagSeqFactory$AnySeqDelegate: 1,
  sc_ClassTagIterableFactory$AnyIterableDelegate: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1,
  sc_SeqFactory: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.className__T() + "("), ", ", ")");
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterable)));
}
function $as_sc_Iterable(obj) {
  return (($is_sc_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterable"));
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterable)));
}
function $asArrayOf_sc_Iterable(obj, depth) {
  return (($isArrayOf_sc_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterable;", depth));
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $c_sc_Iterator$$anon$19.prototype;
$c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  return false;
});
$c_sc_Iterator$$anon$19.prototype.next__E = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
  return 0;
});
$c_sc_Iterator$$anon$19.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return this;
});
$c_sc_Iterator$$anon$19.prototype.next__O = (function() {
  this.next__E();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().initClass($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.sc_Iterator$$anon$20__f_consumed = false;
  this.sc_Iterator$$anon$20__f_a$1 = null;
  this.sc_Iterator$$anon$20__f_a$1 = a$1;
  this.sc_Iterator$$anon$20__f_consumed = false;
}
$c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$20.prototype.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $c_sc_Iterator$$anon$20.prototype;
$c_sc_Iterator$$anon$20.prototype.hasNext__Z = (function() {
  return (!this.sc_Iterator$$anon$20__f_consumed);
});
$c_sc_Iterator$$anon$20.prototype.next__O = (function() {
  if (this.sc_Iterator$$anon$20__f_consumed) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  } else {
    this.sc_Iterator$$anon$20__f_consumed = true;
    return this.sc_Iterator$$anon$20__f_a$1;
  }
});
$c_sc_Iterator$$anon$20.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return (((this.sc_Iterator$$anon$20__f_consumed || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().initClass($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_current instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $as_sc_Iterator$ConcatIterator($thiz.sc_Iterator$ConcatIterator__f_current);
      $thiz.sc_Iterator$ConcatIterator__f_current = $n(c).sc_Iterator$ConcatIterator__f_current;
      $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = $n(c).sc_Iterator$ConcatIterator__f_currentHasNextChecked;
      if (($n(c).sc_Iterator$ConcatIterator__f_tail !== null)) {
        if (($thiz.sc_Iterator$ConcatIterator__f_last === null)) {
          $thiz.sc_Iterator$ConcatIterator__f_last = $n(c).sc_Iterator$ConcatIterator__f_last;
        }
        $n($n(c).sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail;
        $thiz.sc_Iterator$ConcatIterator__f_tail = $n(c).sc_Iterator$ConcatIterator__f_tail;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_tail === null)) {
      $thiz.sc_Iterator$ConcatIterator__f_current = null;
      $thiz.sc_Iterator$ConcatIterator__f_last = null;
      return false;
    } else {
      $thiz.sc_Iterator$ConcatIterator__f_current = $n($thiz.sc_Iterator$ConcatIterator__f_tail).headIterator__sc_Iterator();
      if (($thiz.sc_Iterator$ConcatIterator__f_last === $thiz.sc_Iterator$ConcatIterator__f_tail)) {
        $thiz.sc_Iterator$ConcatIterator__f_last = $n($thiz.sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail;
      }
      $thiz.sc_Iterator$ConcatIterator__f_tail = $n($thiz.sc_Iterator$ConcatIterator__f_tail).sc_Iterator$ConcatIteratorCell__f_tail;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
        return true;
      } else if ((($thiz.sc_Iterator$ConcatIterator__f_current !== null) && $n($thiz.sc_Iterator$ConcatIterator__f_current).hasNext__Z())) {
        $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.sc_Iterator$ConcatIterator__f_current = null;
  this.sc_Iterator$ConcatIterator__f_tail = null;
  this.sc_Iterator$ConcatIterator__f_last = null;
  this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
  this.sc_Iterator$ConcatIterator__f_current = current;
  this.sc_Iterator$ConcatIterator__f_tail = null;
  this.sc_Iterator$ConcatIterator__f_last = null;
  this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
}
$c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$ConcatIterator.prototype.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $c_sc_Iterator$ConcatIterator.prototype;
$c_sc_Iterator$ConcatIterator.prototype.hasNext__Z = (function() {
  if (this.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
    return true;
  } else if ((this.sc_Iterator$ConcatIterator__f_current !== null)) {
    if ($n(this.sc_Iterator$ConcatIterator__f_current).hasNext__Z()) {
      this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$c_sc_Iterator$ConcatIterator.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
    return $n(this.sc_Iterator$ConcatIterator__f_current).next__O();
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
});
$c_sc_Iterator$ConcatIterator.prototype.concat__F0__sc_Iterator = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.sc_Iterator$ConcatIterator__f_tail === null)) {
    this.sc_Iterator$ConcatIterator__f_tail = c;
    this.sc_Iterator$ConcatIterator__f_last = c;
  } else {
    $n(this.sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail = c;
    this.sc_Iterator$ConcatIterator__f_last = c;
  }
  if ((this.sc_Iterator$ConcatIterator__f_current === null)) {
    this.sc_Iterator$ConcatIterator__f_current = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  }
  return this;
});
function $as_sc_Iterator$ConcatIterator(obj) {
  return (((obj instanceof $c_sc_Iterator$ConcatIterator) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator$ConcatIterator"));
}
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator$ConcatIterator)));
}
function $asArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (($isArrayOf_sc_Iterator$ConcatIterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator$ConcatIterator;", depth));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().initClass($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  sc_Iterator$ConcatIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
    if ($n($thiz.sc_Iterator$SliceIterator__f_underlying).hasNext__Z()) {
      $n($thiz.sc_Iterator$SliceIterator__f_underlying).next__O();
      $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0);
    } else {
      $thiz.sc_Iterator$SliceIterator__f_dropping = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    return (-1);
  } else {
    var that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.sc_Iterator$SliceIterator__f_underlying = null;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
  this.sc_Iterator$SliceIterator__f_dropping = 0;
  this.sc_Iterator$SliceIterator__f_underlying = underlying;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
  this.sc_Iterator$SliceIterator__f_dropping = start;
}
$c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$SliceIterator.prototype.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $c_sc_Iterator$SliceIterator.prototype;
$c_sc_Iterator$SliceIterator.prototype.knownSize__I = (function() {
  var size = $n(this.sc_Iterator$SliceIterator__f_underlying).knownSize__I();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
      return dropSize;
    } else {
      var x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$c_sc_Iterator$SliceIterator.prototype.hasNext__Z = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && $n(this.sc_Iterator$SliceIterator__f_underlying).hasNext__Z());
});
$c_sc_Iterator$SliceIterator.prototype.next__O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
    return $n(this.sc_Iterator$SliceIterator__f_underlying).next__O();
  } else {
    return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? $n(this.sc_Iterator$SliceIterator__f_underlying).next__O() : $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O());
  }
});
$c_sc_Iterator$SliceIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  } else if ((sum < 0)) {
    this.sc_Iterator$SliceIterator__f_dropping = 2147483647;
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
    var xs = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.sc_Iterator$SliceIterator__f_underlying, (((-2147483647) + sum) | 0), rest)));
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
  } else {
    this.sc_Iterator$SliceIterator__f_dropping = sum;
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().initClass($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  sc_Iterator$SliceIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if ($n(skipped).isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return $n(skipped).head__O();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2);
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that);
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var this$1 = $n(a);
      if ((!this$1.isEmpty__Z())) {
        var this$2 = $n(b);
        var $x_1 = (!this$2.isEmpty__Z());
      } else {
        var $x_1 = false;
      }
      if (($x_1 && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sc_LinearSeq($n(a).tail__O());
        var temp$b = $as_sc_LinearSeq($n(b).tail__O());
        a = temp$a;
        b = temp$b;
      } else {
        return ($n(a).isEmpty__Z() && $n(b).isEmpty__Z());
      }
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer;
}
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype;
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.hasNext__Z = (function() {
  return (!$n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).isEmpty__Z());
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.next__O = (function() {
  var r = $n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).head__O();
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_StrictOptimizedLinearSeqOps($n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).tail__O());
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_IndexedSeq$.prototype.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $c_sci_IndexedSeq$.prototype;
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sci_IndexedSeq = (function(it) {
  if ($is_sci_IndexedSeq(it)) {
    var x2 = $as_sci_IndexedSeq(it);
    return x2;
  } else {
    return $as_sci_IndexedSeq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it));
  }
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(source);
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(it);
});
var $d_sci_IndexedSeq$ = new $TypeData().initClass($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$();
  }
  return $n_sci_IndexedSeq$;
}
/** @constructor */
function $c_sci_List$() {
}
$c_sci_List$.prototype = new $h_O();
$c_sci_List$.prototype.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $c_sci_List$.prototype;
$c_sci_List$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer();
});
$c_sci_List$.prototype.from__sc_IterableOnce__O = (function(source) {
  return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(source);
});
var $d_sci_List$ = new $TypeData().initClass($c_sci_List$, "scala.collection.immutable.List$", ({
  sci_List$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    var this$ = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250");
    var this$3 = $m_jl_Integer$();
    return this$3.java$lang$Integer$$parseIntImpl__T__I__I__I(this$, 10, 214748364);
  } catch (e) {
    if (false) {
      return 250;
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
  $n_sci_Vector$ = this;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $ps_sci_Vector$__liftedTree1$1__I();
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$c_sci_Vector$.prototype = new $h_O();
$c_sci_Vector$.prototype.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $c_sci_Vector$.prototype;
$c_sci_Vector$.prototype.from__sc_IterableOnce__sci_Vector = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(it);
    return x2;
  } else {
    var knownSize = $n(it).knownSize__I();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var a1$3;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x2$2 = $as_sci_ArraySeq$ofRef(it);
          var x = $n($n(x2$2).elemTag__s_reflect_ClassTag()).runtimeClass__jl_Class();
          if ((x !== null)) {
            var this$1 = $n(x);
            var $x_1 = (this$1 === $d_O.getClassOf());
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var a1$3 = $n(x2$2).sci_ArraySeq$ofRef__f_unsafeArray;
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var x3 = $as_sci_Iterable(it);
          var a1 = new $ac_O(knownSize);
          var this$2 = $n(x3);
          this$2.copyToArray__O__I__I__I(a1, 0, 2147483647);
          var a1$3 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        var this$3 = $n($n(it).iterator__sc_Iterator());
        this$3.copyToArray__O__I__I__I(a1$2, 0, 2147483647);
        var a1$3 = a1$2;
      }
      return new $c_sci_Vector1(a1$3);
    } else {
      var this$4 = new $c_sci_VectorBuilder();
      var this$5 = $n(this$4.addAll__sc_IterableOnce__sci_VectorBuilder(it));
      return this$5.result__sci_Vector();
    }
  }
});
$c_sci_Vector$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_VectorBuilder();
});
$c_sci_Vector$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_Vector(source);
});
var $d_sci_Vector$ = new $TypeData().initClass($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  sci_Vector$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$();
  }
  return $n_sci_Vector$;
}
function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
  var a = null;
  var aParent = null;
  if (($thiz.sci_VectorBuilder__f_depth >= 6)) {
    a = $thiz.sci_VectorBuilder__f_a6;
    var i = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      $systemArraycopyRefs($n(src), i, $n(dest), 0, length);
    }
    var newOffset = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 33554432) | 0);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset) | 0)) | 0);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset;
    if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 25) | 0) === 0)) {
      $thiz.sci_VectorBuilder__f_depth = 5;
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 5)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a5;
    }
    var i$2 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 20) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        $systemArraycopyRefs($n(src$1), i$2, $n(dest$1), 0, length$1);
      }
      $thiz.sci_VectorBuilder__f_a5 = $asArrayOf_O(a, 5);
      var newOffset$1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 1048576) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$1) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$1;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 20) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 4;
      }
    } else {
      if ((i$2 > 0)) {
        var original = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, i$2, 32);
      }
      $n(aParent).set(0, a);
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 4)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a4;
    }
    var i$3 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 15) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        $systemArraycopyRefs($n(src$2), i$3, $n(dest$2), 0, length$2);
      }
      $thiz.sci_VectorBuilder__f_a4 = $asArrayOf_O(a, 4);
      var newOffset$2 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 32768) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$2) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$2;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 15) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 3;
      }
    } else {
      if ((i$3 > 0)) {
        var original$1 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, i$3, 32);
      }
      $n(aParent).set(0, a);
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 3)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a3;
    }
    var i$4 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 10) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        $systemArraycopyRefs($n(src$3), i$4, $n(dest$3), 0, length$3);
      }
      $thiz.sci_VectorBuilder__f_a3 = $asArrayOf_O(a, 3);
      var newOffset$3 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 1024) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$3) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$3;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 10) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 2;
      }
    } else {
      if ((i$4 > 0)) {
        var original$2 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$2, i$4, 32);
      }
      $n(aParent).set(0, a);
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 2)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a2;
    }
    var i$5 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 5) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        $systemArraycopyRefs($n(src$4), i$5, $n(dest$4), 0, length$4);
      }
      $thiz.sci_VectorBuilder__f_a2 = $asArrayOf_O(a, 2);
      var newOffset$4 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 32) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$4) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$4;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 5) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 1;
      }
    } else {
      if ((i$5 > 0)) {
        var original$3 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$3, i$5, 32);
      }
      $n(aParent).set(0, a);
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 1)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a1;
    }
    var i$6 = (31 & $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset);
    if (($thiz.sci_VectorBuilder__f_depth === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        $systemArraycopyRefs($n(src$5), i$6, $n(dest$5), 0, length$5);
      }
      $thiz.sci_VectorBuilder__f_a1 = a;
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
    } else {
      if ((i$6 > 0)) {
        var original$4 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$4, i$6, 32);
      }
      $n(aParent).set(0, a);
    }
  }
  $thiz.sci_VectorBuilder__f_prefixIsRightAligned = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = $n(data).u.length;
  if ((dl > 0)) {
    if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.sci_VectorBuilder__f_a1;
    var destPos = $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1;
    $systemArraycopyRefs($n(data), 0, $n(dest), destPos, copy1);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.sci_VectorBuilder__f_a1;
      $systemArraycopyRefs($n(data), copy1, $n(dest$1), 0, copy2);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if (($n(slice).u.length === 0)) {
    return (void 0);
  }
  if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = $n(slice).u.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 5) | 0));
      var dest = $thiz.sci_VectorBuilder__f_a2;
      $systemArraycopyRefs($n(slice), 0, $n(dest), destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.sci_VectorBuilder__f_a2;
        $systemArraycopyRefs($n(slice), copy1, $n(dest$1), 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 1024) | 0) !== 0)) {
        var f = ((e$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2$2, 1), 2);
        });
        var len = $n(slice).u.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var x0 = $n(slice).get(i);
            f(x0);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          var x3 = $asArrayOf_I(slice, 1);
          while ((i < len)) {
            var x0$1 = $n(x3).get(i);
            f(x0$1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          var x4 = $asArrayOf_D(slice, 1);
          while ((i < len)) {
            var x0$2 = $n(x4).get(i);
            f(x0$2);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          var x5 = $asArrayOf_J(slice, 1);
          while ((i < len)) {
            var t = $n(x5).get(i);
            var lo = t.RTLong__f_lo;
            var hi = t.RTLong__f_hi;
            f(new $c_RTLong(lo, hi));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          var x6 = $asArrayOf_F(slice, 1);
          while ((i < len)) {
            var x0$3 = $n(x6).get(i);
            f(x0$3);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          var x7 = $asArrayOf_C(slice, 1);
          while ((i < len)) {
            var x0$4 = $n(x7).get(i);
            f($bC(x0$4));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          var x8 = $asArrayOf_B(slice, 1);
          while ((i < len)) {
            var x0$5 = $n(x8).get(i);
            f(x0$5);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          var x9 = $asArrayOf_S(slice, 1);
          while ((i < len)) {
            var x0$6 = $n(x9).get(i);
            f(x0$6);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10 = $asArrayOf_Z(slice, 1);
          while ((i < len)) {
            var x0$7 = $n(x10).get(i);
            f(x0$7);
            i = ((1 + i) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$1 = (31 & ((((32768 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 10) | 0));
      var dest$2 = $thiz.sci_VectorBuilder__f_a3;
      $systemArraycopyRefs($n(slice), 0, $n(dest$2), destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.sci_VectorBuilder__f_a3;
        $systemArraycopyRefs($n(slice), copy1$2, $n(dest$3), 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 32768) | 0) !== 0)) {
        var f$1 = ((e$2$2$1) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2$2$1, 1), 3);
        });
        var len$1 = $n(slice).u.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var x0$8 = $n(slice).get(i$1);
            f$1(x0$8);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$1 = $asArrayOf_I(slice, 1);
          while ((i$1 < len$1)) {
            var x0$9 = $n(x3$1).get(i$1);
            f$1(x0$9);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$1 = $asArrayOf_D(slice, 1);
          while ((i$1 < len$1)) {
            var x0$10 = $n(x4$1).get(i$1);
            f$1(x0$10);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$1 = $asArrayOf_J(slice, 1);
          while ((i$1 < len$1)) {
            var t$1 = $n(x5$1).get(i$1);
            var lo$1 = t$1.RTLong__f_lo;
            var hi$1 = t$1.RTLong__f_hi;
            f$1(new $c_RTLong(lo$1, hi$1));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$1 = $asArrayOf_F(slice, 1);
          while ((i$1 < len$1)) {
            var x0$11 = $n(x6$1).get(i$1);
            f$1(x0$11);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$1 = $asArrayOf_C(slice, 1);
          while ((i$1 < len$1)) {
            var x0$12 = $n(x7$1).get(i$1);
            f$1($bC(x0$12));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$1 = $asArrayOf_B(slice, 1);
          while ((i$1 < len$1)) {
            var x0$13 = $n(x8$1).get(i$1);
            f$1(x0$13);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$1 = $asArrayOf_S(slice, 1);
          while ((i$1 < len$1)) {
            var x0$14 = $n(x9$1).get(i$1);
            f$1(x0$14);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$1 = $asArrayOf_Z(slice, 1);
          while ((i$1 < len$1)) {
            var x0$15 = $n(x10$1).get(i$1);
            f$1(x0$15);
            i$1 = ((1 + i$1) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$2 = (31 & ((((1048576 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 15) | 0));
      var dest$4 = $thiz.sci_VectorBuilder__f_a4;
      $systemArraycopyRefs($n(slice), 0, $n(dest$4), destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.sci_VectorBuilder__f_a4;
        $systemArraycopyRefs($n(slice), copy1$3, $n(dest$5), 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 1048576) | 0) !== 0)) {
        var f$2 = ((e$2$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2$2$2, 1), 4);
        });
        var len$2 = $n(slice).u.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var x0$16 = $n(slice).get(i$2);
            f$2(x0$16);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$2 = $asArrayOf_I(slice, 1);
          while ((i$2 < len$2)) {
            var x0$17 = $n(x3$2).get(i$2);
            f$2(x0$17);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$2 = $asArrayOf_D(slice, 1);
          while ((i$2 < len$2)) {
            var x0$18 = $n(x4$2).get(i$2);
            f$2(x0$18);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$2 = $asArrayOf_J(slice, 1);
          while ((i$2 < len$2)) {
            var t$2 = $n(x5$2).get(i$2);
            var lo$2 = t$2.RTLong__f_lo;
            var hi$2 = t$2.RTLong__f_hi;
            f$2(new $c_RTLong(lo$2, hi$2));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$2 = $asArrayOf_F(slice, 1);
          while ((i$2 < len$2)) {
            var x0$19 = $n(x6$2).get(i$2);
            f$2(x0$19);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$2 = $asArrayOf_C(slice, 1);
          while ((i$2 < len$2)) {
            var x0$20 = $n(x7$2).get(i$2);
            f$2($bC(x0$20));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$2 = $asArrayOf_B(slice, 1);
          while ((i$2 < len$2)) {
            var x0$21 = $n(x8$2).get(i$2);
            f$2(x0$21);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$2 = $asArrayOf_S(slice, 1);
          while ((i$2 < len$2)) {
            var x0$22 = $n(x9$2).get(i$2);
            f$2(x0$22);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$2 = $asArrayOf_Z(slice, 1);
          while ((i$2 < len$2)) {
            var x0$23 = $n(x10$2).get(i$2);
            f$2(x0$23);
            i$2 = ((1 + i$2) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$3 = (31 & ((((33554432 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 20) | 0));
      var dest$6 = $thiz.sci_VectorBuilder__f_a5;
      $systemArraycopyRefs($n(slice), 0, $n(dest$6), destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.sci_VectorBuilder__f_a5;
        $systemArraycopyRefs($n(slice), copy1$4, $n(dest$7), 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 33554432) | 0) !== 0)) {
        var f$3 = ((e$2$2$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2$2$3, 1), 5);
        });
        var len$3 = $n(slice).u.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var x0$24 = $n(slice).get(i$3);
            f$3(x0$24);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$3 = $asArrayOf_I(slice, 1);
          while ((i$3 < len$3)) {
            var x0$25 = $n(x3$3).get(i$3);
            f$3(x0$25);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$3 = $asArrayOf_D(slice, 1);
          while ((i$3 < len$3)) {
            var x0$26 = $n(x4$3).get(i$3);
            f$3(x0$26);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$3 = $asArrayOf_J(slice, 1);
          while ((i$3 < len$3)) {
            var t$3 = $n(x5$3).get(i$3);
            var lo$3 = t$3.RTLong__f_lo;
            var hi$3 = t$3.RTLong__f_hi;
            f$3(new $c_RTLong(lo$3, hi$3));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$3 = $asArrayOf_F(slice, 1);
          while ((i$3 < len$3)) {
            var x0$27 = $n(x6$3).get(i$3);
            f$3(x0$27);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$3 = $asArrayOf_C(slice, 1);
          while ((i$3 < len$3)) {
            var x0$28 = $n(x7$3).get(i$3);
            f$3($bC(x0$28));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$3 = $asArrayOf_B(slice, 1);
          while ((i$3 < len$3)) {
            var x0$29 = $n(x8$3).get(i$3);
            f$3(x0$29);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$3 = $asArrayOf_S(slice, 1);
          while ((i$3 < len$3)) {
            var x0$30 = $n(x9$3).get(i$3);
            f$3(x0$30);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$3 = $asArrayOf_Z(slice, 1);
          while ((i$3 < len$3)) {
            var x0$31 = $n(x10$3).get(i$3);
            f$3(x0$31);
            i$3 = ((1 + i$3) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var destPos$5 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.sci_VectorBuilder__f_a6;
      $systemArraycopyRefs($n(slice), 0, $n(dest$8), destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = $n(xs).vectorSliceCount__I();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = $n(xs).vectorSlice__I__AO(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var sign = (a >> 31);
    var x1 = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32) || ($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().foreachRec__I__AO__F1__V((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
        var data$2 = $asArrayOf_O(data$2$2, 1);
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest + n) | 0);
    var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.sci_VectorBuilder__f_a1) + ", a2=") + $thiz.sci_VectorBuilder__f_a2) + ", a3=") + $thiz.sci_VectorBuilder__f_a3) + ", a4=") + $thiz.sci_VectorBuilder__f_a4) + ", a5=") + $thiz.sci_VectorBuilder__f_a5) + ", a6=") + $thiz.sci_VectorBuilder__f_a6) + ", depth=") + $thiz.sci_VectorBuilder__f_depth));
  } else if ((xor < 1024)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 1)) {
      $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a2).set(0, $thiz.sci_VectorBuilder__f_a1);
      $thiz.sci_VectorBuilder__f_depth = 2;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
  } else if ((xor < 32768)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 2)) {
      $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a3).set(0, $thiz.sci_VectorBuilder__f_a2);
      $thiz.sci_VectorBuilder__f_depth = 3;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
  } else if ((xor < 1048576)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 3)) {
      $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a4).set(0, $thiz.sci_VectorBuilder__f_a3);
      $thiz.sci_VectorBuilder__f_depth = 4;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
  } else if ((xor < 33554432)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 4)) {
      $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a5).set(0, $thiz.sci_VectorBuilder__f_a4);
      $thiz.sci_VectorBuilder__f_depth = 5;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
  } else {
    if (($thiz.sci_VectorBuilder__f_depth <= 5)) {
      $thiz.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
      $n($thiz.sci_VectorBuilder__f_a6).set(0, $thiz.sci_VectorBuilder__f_a5);
      $thiz.sci_VectorBuilder__f_depth = 6;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
    $n($thiz.sci_VectorBuilder__f_a6).set(((idx >>> 25) | 0), $thiz.sci_VectorBuilder__f_a5);
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.sci_VectorBuilder__f_a6 = null;
  this.sci_VectorBuilder__f_a5 = null;
  this.sci_VectorBuilder__f_a4 = null;
  this.sci_VectorBuilder__f_a3 = null;
  this.sci_VectorBuilder__f_a2 = null;
  this.sci_VectorBuilder__f_a1 = null;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
  this.sci_VectorBuilder__f_prefixIsRightAligned = false;
  this.sci_VectorBuilder__f_depth = 0;
  this.sci_VectorBuilder__f_a1 = new $ac_O(32);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
  this.sci_VectorBuilder__f_prefixIsRightAligned = false;
  this.sci_VectorBuilder__f_depth = 1;
}
$c_sci_VectorBuilder.prototype = new $h_O();
$c_sci_VectorBuilder.prototype.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $c_sci_VectorBuilder.prototype;
$c_sci_VectorBuilder.prototype.initFrom__sci_Vector__sci_VectorBuilder = (function(v) {
  var x1 = $n(v).vectorSliceCount__I();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      var v1 = $as_sci_Vector1(v);
      this.sci_VectorBuilder__f_depth = 1;
      var i = $n($n(v1).sci_Vector__f_prefix1).u.length;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      var a = $n(v1).sci_Vector__f_prefix1;
      this.sci_VectorBuilder__f_a1 = (($n(a).u.length === 32) ? a : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 0, 32));
      break;
    }
    case 3: {
      var v2 = $as_sci_Vector2(v);
      var d2 = $n(v2).sci_Vector2__f_data2;
      var a$1 = $n(v2).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$1).u.length === 32) ? a$1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 0, 32));
      this.sci_VectorBuilder__f_depth = 2;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((32 - $n(v2).sci_Vector2__f_len1) | 0);
      var i$1 = (($n(v2).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$1);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$1 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a2).set(0, $n(v2).sci_Vector__f_prefix1);
      var dest = this.sci_VectorBuilder__f_a2;
      var length = $n(d2).u.length;
      $systemArraycopyRefs($n(d2), 0, $n(dest), 1, length);
      $n(this.sci_VectorBuilder__f_a2).set(((1 + $n(d2).u.length) | 0), this.sci_VectorBuilder__f_a1);
      break;
    }
    case 5: {
      var v3 = $as_sci_Vector3(v);
      var d3 = $n(v3).sci_Vector3__f_data3;
      var s2 = $n(v3).sci_Vector3__f_suffix2;
      var a$2 = $n(v3).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$2).u.length === 32) ? a$2 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 0, 32));
      this.sci_VectorBuilder__f_depth = 3;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((1024 - $n(v3).sci_Vector3__f_len12) | 0);
      var i$2 = (($n(v3).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$2);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$2 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a3).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v3).sci_Vector__f_prefix1, $n(v3).sci_Vector3__f_prefix2), 2));
      var dest$1 = this.sci_VectorBuilder__f_a3;
      var length$1 = $n(d3).u.length;
      $systemArraycopyRefs($n(d3), 0, $n(dest$1), 1, length$1);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2, 32), 2);
      $n(this.sci_VectorBuilder__f_a3).set(((1 + $n(d3).u.length) | 0), this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2).u.length, this.sci_VectorBuilder__f_a1);
      break;
    }
    case 7: {
      var v4 = $as_sci_Vector4(v);
      var d4 = $n(v4).sci_Vector4__f_data4;
      var s3 = $n(v4).sci_Vector4__f_suffix3;
      var s2$2 = $n(v4).sci_Vector4__f_suffix2;
      var a$3 = $n(v4).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$3).u.length === 32) ? a$3 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 0, 32));
      this.sci_VectorBuilder__f_depth = 4;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((32768 - $n(v4).sci_Vector4__f_len123) | 0);
      var i$3 = (($n(v4).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$3);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$3 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a4).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v4).sci_Vector__f_prefix1, $n(v4).sci_Vector4__f_prefix2), $n(v4).sci_Vector4__f_prefix3), 3));
      var dest$2 = this.sci_VectorBuilder__f_a4;
      var length$2 = $n(d4).u.length;
      $systemArraycopyRefs($n(d4), 0, $n(dest$2), 1, length$2);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$2, 32), 2);
      $n(this.sci_VectorBuilder__f_a4).set(((1 + $n(d4).u.length) | 0), this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$2).u.length, this.sci_VectorBuilder__f_a1);
      break;
    }
    case 9: {
      var v5 = $as_sci_Vector5(v);
      var d5 = $n(v5).sci_Vector5__f_data5;
      var s4 = $n(v5).sci_Vector5__f_suffix4;
      var s3$2 = $n(v5).sci_Vector5__f_suffix3;
      var s2$3 = $n(v5).sci_Vector5__f_suffix2;
      var a$4 = $n(v5).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$4).u.length === 32) ? a$4 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 0, 32));
      this.sci_VectorBuilder__f_depth = 5;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((1048576 - $n(v5).sci_Vector5__f_len1234) | 0);
      var i$4 = (($n(v5).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$4);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$4 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a5).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v5).sci_Vector__f_prefix1, $n(v5).sci_Vector5__f_prefix2), $n(v5).sci_Vector5__f_prefix3), $n(v5).sci_Vector5__f_prefix4), 4));
      var dest$3 = this.sci_VectorBuilder__f_a5;
      var length$3 = $n(d5).u.length;
      $systemArraycopyRefs($n(d5), 0, $n(dest$3), 1, length$3);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$2, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$3, 32), 2);
      $n(this.sci_VectorBuilder__f_a5).set(((1 + $n(d5).u.length) | 0), this.sci_VectorBuilder__f_a4);
      $n(this.sci_VectorBuilder__f_a4).set($n(s4).u.length, this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3$2).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$3).u.length, this.sci_VectorBuilder__f_a1);
      break;
    }
    case 11: {
      var v6 = $as_sci_Vector6(v);
      var d6 = $n(v6).sci_Vector6__f_data6;
      var s5 = $n(v6).sci_Vector6__f_suffix5;
      var s4$2 = $n(v6).sci_Vector6__f_suffix4;
      var s3$3 = $n(v6).sci_Vector6__f_suffix3;
      var s2$4 = $n(v6).sci_Vector6__f_suffix2;
      var a$5 = $n(v6).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$5).u.length === 32) ? a$5 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 0, 32));
      this.sci_VectorBuilder__f_depth = 6;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((33554432 - $n(v6).sci_Vector6__f_len12345) | 0);
      var i$5 = (($n(v6).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$5);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$5 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
      $n(this.sci_VectorBuilder__f_a6).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v6).sci_Vector__f_prefix1, $n(v6).sci_Vector6__f_prefix2), $n(v6).sci_Vector6__f_prefix3), $n(v6).sci_Vector6__f_prefix4), $n(v6).sci_Vector6__f_prefix5), 5));
      var dest$4 = this.sci_VectorBuilder__f_a6;
      var length$4 = $n(d6).u.length;
      $systemArraycopyRefs($n(d6), 0, $n(dest$4), 1, length$4);
      this.sci_VectorBuilder__f_a5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s5, 32), 5);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4$2, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$4, 32), 2);
      $n(this.sci_VectorBuilder__f_a6).set(((1 + $n(d6).u.length) | 0), this.sci_VectorBuilder__f_a5);
      $n(this.sci_VectorBuilder__f_a5).set($n(s5).u.length, this.sci_VectorBuilder__f_a4);
      $n(this.sci_VectorBuilder__f_a4).set($n(s4$2).u.length, this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3$3).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$4).u.length, this.sci_VectorBuilder__f_a1);
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest > 0))) {
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 32;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (((-32) + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  }
  return this;
});
$c_sci_VectorBuilder.prototype.addOne__O__sci_VectorBuilder = (function(elem) {
  if ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  $n(this.sci_VectorBuilder__f_a1).set(this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1, elem);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = ((1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
  return this;
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__sci_VectorBuilder = (function(xs) {
  if ((xs instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(xs);
    return ((((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest === 0)) && (!this.sci_VectorBuilder__f_prefixIsRightAligned)) ? this.initFrom__sci_Vector__sci_VectorBuilder(x2) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, x2));
  } else {
    return $as_sci_VectorBuilder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
  }
});
$c_sci_VectorBuilder.prototype.result__sci_Vector = (function() {
  if (this.sci_VectorBuilder__f_prefixIsRightAligned) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var realLen = ((len - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.sci_VectorBuilder__f_a1;
    return new $c_sci_Vector1((($n(a).u.length === realLen) ? a : $m_ju_Arrays$().copyOf__AO__I__AO(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var original = this.sci_VectorBuilder__f_a2;
    var data = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, 1, i2), 2);
    var prefix1 = $n(this.sci_VectorBuilder__f_a2).get(0);
    var a$1 = $n(this.sci_VectorBuilder__f_a2).get(i2);
    var len$1 = ((1 + i1) | 0);
    var suffix1 = (($n(a$1).u.length === len$1) ? a$1 : $m_ju_Arrays$().copyOf__AO__I__AO(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var original$1 = this.sci_VectorBuilder__f_a3;
    var data$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, 1, i3), 3);
    var a$2 = $n(this.sci_VectorBuilder__f_a3).get(0);
    var to = $n(a$2).u.length;
    var prefix2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 1, to), 2);
    var prefix1$2 = $n($n(this.sci_VectorBuilder__f_a3).get(0)).get(0);
    var original$2 = $n(this.sci_VectorBuilder__f_a3).get(i3);
    var suffix2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$2, i2$2), 2);
    var a$3 = $n($n(this.sci_VectorBuilder__f_a3).get(i3)).get(i2$2);
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = (($n(a$3).u.length === len$2) ? a$3 : $m_ju_Arrays$().copyOf__AO__I__AO(a$3, len$2));
    var len1 = $n(prefix1$2).u.length;
    var len12 = ((len1 + ($n(prefix2).u.length << 5)) | 0);
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, len12, data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var original$3 = this.sci_VectorBuilder__f_a4;
    var data$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$3, 1, i4), 4);
    var a$4 = $n(this.sci_VectorBuilder__f_a4).get(0);
    var to$1 = $n(a$4).u.length;
    var prefix3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 1, to$1), 3);
    var a$5 = $n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0);
    var to$2 = $n(a$5).u.length;
    var prefix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 1, to$2), 2);
    var prefix1$3 = $n($n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0)).get(0);
    var original$4 = $n(this.sci_VectorBuilder__f_a4).get(i4);
    var suffix3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$4, i3$2), 3);
    var original$5 = $n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2);
    var suffix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$5, i2$3), 2);
    var a$6 = $n($n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2)).get(i2$3);
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = (($n(a$6).u.length === len$3) ? a$6 : $m_ju_Arrays$().copyOf__AO__I__AO(a$6, len$3));
    var len1$2 = $n(prefix1$3).u.length;
    var len12$2 = ((len1$2 + ($n(prefix2$2).u.length << 5)) | 0);
    var len123 = ((len12$2 + ($n(prefix3).u.length << 10)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, len123, data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var original$6 = this.sci_VectorBuilder__f_a5;
    var data$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$6, 1, i5), 5);
    var a$7 = $n(this.sci_VectorBuilder__f_a5).get(0);
    var to$3 = $n(a$7).u.length;
    var prefix4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$7, 1, to$3), 4);
    var a$8 = $n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0);
    var to$4 = $n(a$8).u.length;
    var prefix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$8, 1, to$4), 3);
    var a$9 = $n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0);
    var to$5 = $n(a$9).u.length;
    var prefix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$9, 1, to$5), 2);
    var prefix1$4 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0)).get(0);
    var original$7 = $n(this.sci_VectorBuilder__f_a5).get(i5);
    var suffix4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$7, i4$2), 4);
    var original$8 = $n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2);
    var suffix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$8, i3$3), 3);
    var original$9 = $n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3);
    var suffix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$9, i2$4), 2);
    var a$10 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3)).get(i2$4);
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = (($n(a$10).u.length === len$4) ? a$10 : $m_ju_Arrays$().copyOf__AO__I__AO(a$10, len$4));
    var len1$3 = $n(prefix1$4).u.length;
    var len12$3 = ((len1$3 + ($n(prefix2$3).u.length << 5)) | 0);
    var len123$2 = ((len12$3 + ($n(prefix3$2).u.length << 10)) | 0);
    var len1234 = ((len123$2 + ($n(prefix4).u.length << 15)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, len1234, data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
  } else {
    var i1$5 = (31 & (((-1) + len) | 0));
    var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
    var i6 = (((((-1) + len) | 0) >>> 25) | 0);
    var original$10 = this.sci_VectorBuilder__f_a6;
    var data$5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$10, 1, i6), 6);
    var a$11 = $n(this.sci_VectorBuilder__f_a6).get(0);
    var to$6 = $n(a$11).u.length;
    var prefix5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$11, 1, to$6), 5);
    var a$12 = $n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0);
    var to$7 = $n(a$12).u.length;
    var prefix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$12, 1, to$7), 4);
    var a$13 = $n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0);
    var to$8 = $n(a$13).u.length;
    var prefix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$13, 1, to$8), 3);
    var a$14 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0);
    var to$9 = $n(a$14).u.length;
    var prefix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$14, 1, to$9), 2);
    var prefix1$5 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0)).get(0);
    var original$11 = $n(this.sci_VectorBuilder__f_a6).get(i6);
    var suffix5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$11, i5$2), 5);
    var original$12 = $n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2);
    var suffix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$12, i4$3), 4);
    var original$13 = $n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3);
    var suffix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$13, i3$4), 3);
    var original$14 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4);
    var suffix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$14, i2$5), 2);
    var a$15 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4)).get(i2$5);
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = (($n(a$15).u.length === len$5) ? a$15 : $m_ju_Arrays$().copyOf__AO__I__AO(a$15, len$5));
    var len1$4 = $n(prefix1$5).u.length;
    var len12$4 = ((len1$4 + ($n(prefix2$4).u.length << 5)) | 0);
    var len123$3 = ((len12$4 + ($n(prefix3$3).u.length << 10)) | 0);
    var len1234$2 = ((len123$3 + ($n(prefix4$2).u.length << 15)) | 0);
    var len12345 = ((len1234$2 + ($n(prefix5).u.length << 20)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, len12345, data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$c_sci_VectorBuilder.prototype.toString__T = (function() {
  return (((((((("VectorBuilder(len1=" + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) + ", lenRest=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) + ", offset=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) + ", depth=") + this.sci_VectorBuilder__f_depth) + ")");
});
$c_sci_VectorBuilder.prototype.result__O = (function() {
  return this.result__sci_Vector();
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__sci_VectorBuilder(elems);
});
$c_sci_VectorBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sci_VectorBuilder(elem);
});
function $as_sci_VectorBuilder(obj) {
  return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"));
}
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)));
}
function $asArrayOf_sci_VectorBuilder(obj, depth) {
  return (($isArrayOf_sci_VectorBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth));
}
var $d_sci_VectorBuilder = new $TypeData().initClass($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  sci_VectorBuilder: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.scm_ArrayBuffer$__f_emptyArray = null;
  $n_scm_ArrayBuffer$ = this;
  this.scm_ArrayBuffer$__f_emptyArray = new $ac_O(0);
}
$c_scm_ArrayBuffer$.prototype = new $h_O();
$c_scm_ArrayBuffer$.prototype.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $c_scm_ArrayBuffer$.prototype;
$c_scm_ArrayBuffer$.prototype.from__sc_IterableOnce__scm_ArrayBuffer = (function(coll) {
  var k = $n(coll).knownSize__I();
  if ((k >= 0)) {
    var array = this.scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(this.scm_ArrayBuffer$__f_emptyArray, 0, k);
    if ($is_sc_Iterable(coll)) {
      var x2 = $as_sc_Iterable(coll);
      var actual = $n(x2).copyToArray__O__I__I__I(array, 0, 2147483647);
    } else {
      var actual = $n($n(coll).iterator__sc_Iterator()).copyToArray__O__I__I__I(array, 0, 2147483647);
    }
    if ((actual !== k)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    var this$2 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
    return this$2.addAll__sc_IterableOnce__scm_ArrayBuffer(coll);
  }
});
$c_scm_ArrayBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$c_scm_ArrayBuffer$.prototype.resizeUp__I__I__I = (function(arrayLen, targetLen) {
  if ((targetLen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((((("Overflow while resizing array of array-backed collection. Requested length: " + targetLen) + "; current length: ") + arrayLen) + "; increase: ") + ((targetLen - arrayLen) | 0)));
  } else if ((targetLen <= arrayLen)) {
    return (-1);
  } else if ((targetLen > 2147483639)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((("Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: " + targetLen) + "; current length: ") + arrayLen));
  } else if ((arrayLen > 1073741819)) {
    return 2147483639;
  } else {
    var x = (arrayLen << 1);
    var y = ((x > 16) ? x : 16);
    return ((targetLen > y) ? targetLen : y);
  }
});
$c_scm_ArrayBuffer$.prototype.scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO = (function(array, curSize, targetSize) {
  var newLen = this.resizeUp__I__I__I($n(array).u.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    $systemArraycopyRefs($n(array), 0, res, 0, curSize);
    return res;
  }
});
$c_scm_ArrayBuffer$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__scm_ArrayBuffer(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().initClass($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  scm_ArrayBuffer$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$();
  }
  return $n_scm_ArrayBuffer$;
}
/** @constructor */
function $c_scm_ArrayBuffer$$anon$1() {
  this.scm_GrowableBuilder__f_elems = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$c_scm_ArrayBuffer$$anon$1.prototype.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $c_scm_ArrayBuffer$$anon$1.prototype;
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().initClass($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  scm_ArrayBuffer$$anon$1: 1,
  scm_GrowableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$c_scm_Buffer$.prototype.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $c_scm_Buffer$.prototype;
var $d_scm_Buffer$ = new $TypeData().initClass($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  scm_Buffer$: 1,
  sc_SeqFactory$Delegate: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.scm_ImmutableBuilder__f_elems = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.scm_ImmutableBuilder__f_elems = null;
}
$c_scm_ImmutableBuilder.prototype = new $h_O();
$c_scm_ImmutableBuilder.prototype.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $c_scm_ImmutableBuilder.prototype;
$c_scm_ImmutableBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$c_scm_ImmutableBuilder.prototype.result__O = (function() {
  return this.scm_ImmutableBuilder__f_elems;
});
/** @constructor */
function $c_scm_ListBuffer$() {
}
$c_scm_ListBuffer$.prototype = new $h_O();
$c_scm_ListBuffer$.prototype.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
}
$h_scm_ListBuffer$.prototype = $c_scm_ListBuffer$.prototype;
$c_scm_ListBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$c_scm_ListBuffer$.prototype.from__sc_IterableOnce__O = (function(source) {
  return new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(source);
});
var $d_scm_ListBuffer$ = new $TypeData().initClass($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  scm_ListBuffer$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$();
  }
  return $n_scm_ListBuffer$;
}
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.scm_MutationTracker$CheckedIterator__f_underlying = null;
  this.scm_MutationTracker$CheckedIterator__f_mutationCount = null;
  this.scm_MutationTracker$CheckedIterator__f_expectedCount = 0;
  this.scm_MutationTracker$CheckedIterator__f_underlying = underlying;
  this.scm_MutationTracker$CheckedIterator__f_mutationCount = mutationCount;
  var this$1 = $n(mutationCount);
  this.scm_MutationTracker$CheckedIterator__f_expectedCount = $uI(this$1.apply__O());
}
$c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$c_scm_MutationTracker$CheckedIterator.prototype.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $c_scm_MutationTracker$CheckedIterator.prototype;
$c_scm_MutationTracker$CheckedIterator.prototype.hasNext__Z = (function() {
  var this$2 = $m_scm_MutationTracker$();
  var expectedCount = this.scm_MutationTracker$CheckedIterator__f_expectedCount;
  var this$1 = $n(this.scm_MutationTracker$CheckedIterator__f_mutationCount);
  var actualCount = $uI(this$1.apply__O());
  this$2.checkMutations__I__I__T__V(expectedCount, actualCount, "mutation occurred during iteration");
  return $n(this.scm_MutationTracker$CheckedIterator__f_underlying).hasNext__Z();
});
$c_scm_MutationTracker$CheckedIterator.prototype.next__O = (function() {
  return $n(this.scm_MutationTracker$CheckedIterator__f_underlying).next__O();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().initClass($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  scm_MutationTracker$CheckedIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $f_s_math_Ordering__lteq__O__O__Z($thiz, x, y) {
  var x$1 = $uD(x);
  var y$1 = $uD(y);
  return ($m_jl_Double$().compare__D__D__I(x$1, y$1) <= 0);
}
function $f_s_math_Ordering__gteq__O__O__Z($thiz, x, y) {
  var x$1 = $uD(x);
  var y$1 = $uD(y);
  return ($m_jl_Double$().compare__D__D__I(x$1, y$1) >= 0);
}
function $f_s_math_Ordering__max__O__O__O($thiz, x, y) {
  return ($f_s_math_Ordering__gteq__O__O__Z($thiz, x, y) ? x : y);
}
function $f_s_math_Ordering__min__O__O__O($thiz, x, y) {
  return ($f_s_math_Ordering__lteq__O__O__Z($thiz, x, y) ? x : y);
}
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.runtimeClass__jl_Class();
    var x$3 = $n($as_s_reflect_ClassTag(x)).runtimeClass__jl_Class();
    if ((x$2 === null)) {
      return (x$3 === null);
    } else {
      var this$1 = $n(x$2);
      return (this$1 === x$3);
    }
  } else {
    return false;
  }
}
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  var this$1 = $n(clazz);
  if (this$1.data.isArrayClass) {
    var this$2 = $n(clazz);
    return (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this$2.data.getComponentType())) + "]");
  } else {
    var this$3 = $n(clazz);
    return this$3.data.name;
  }
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_reflect_ClassTag)));
}
function $as_s_reflect_ClassTag(obj) {
  return (($is_s_reflect_ClassTag(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.reflect.ClassTag"));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_reflect_ClassTag)));
}
function $asArrayOf_s_reflect_ClassTag(obj, depth) {
  return (($isArrayOf_s_reflect_ClassTag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.reflect.ClassTag;", depth));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = $n(x$2).productArity__I();
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax);
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = $n(this.sr_ScalaRunTime$$anon$1__f_x$2).productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray$() {
}
$c_sjs_js_WrappedArray$.prototype = new $h_O();
$c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
}
$h_sjs_js_WrappedArray$.prototype = $c_sjs_js_WrappedArray$.prototype;
$c_sjs_js_WrappedArray$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__sjs_js_WrappedArray = (function(source) {
  var this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
  return $as_sjs_js_WrappedArray($n($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source))).result__O());
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().initClass($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  sjs_js_WrappedArray$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
  }
  return $n_sjs_js_WrappedArray$;
}
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    var lo = $uI(fpBitsDataView.getInt32(0, true));
    var hi = $uI(fpBitsDataView.getInt32(4, true));
    return (lo ^ hi);
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"));
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)));
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth));
}
var $d_jl_Double = new $TypeData().initClass(0, "java.lang.Double", ({
  jl_Double: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    var lo = $uI(fpBitsDataView.getInt32(0, true));
    var hi = $uI(fpBitsDataView.getInt32(4, true));
    return (lo ^ hi);
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().initClass(0, "java.lang.Float", ({
  jl_Float: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
function $as_jl_Integer(obj) {
  return (($isInt(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Integer"));
}
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Integer)));
}
function $asArrayOf_jl_Integer(obj, depth) {
  return (($isArrayOf_jl_Integer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Integer;", depth));
}
var $d_jl_Integer = new $TypeData().initClass(0, "java.lang.Integer", ({
  jl_Integer: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var this$1 = $n(x2);
    var b = $uJ(this$1);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi));
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var $x_1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($x_1 ^ hi);
}
function $f_jl_Long__toString__T($thiz) {
  var this$1 = $m_RTLong$();
  return this$1.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi);
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"));
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)));
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth));
}
var $d_jl_Long = new $TypeData().initClass(0, "java.lang.Long", ({
  jl_Long: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().initClass($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_T__codePointAt__I__I($thiz, index) {
  $charAt($thiz, index);
  return $uI($thiz.codePointAt(index));
}
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    var $x_2 = h;
    var $x_1 = h;
    var index = i;
    h = ((((($x_2 << 5) - $x_1) | 0) + $charAt($thiz, index)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__getChars__I__I__AC__I__V($thiz, srcBegin, srcEnd, dst, dstBegin) {
  if (((((srcEnd > $thiz.length) || (srcBegin < 0)) || (srcEnd < 0)) || (srcBegin > srcEnd))) {
    throw $ct_jl_StringIndexOutOfBoundsException__T__(new $c_jl_StringIndexOutOfBoundsException(), "Index out of Bound");
  }
  var offset = ((dstBegin - srcBegin) | 0);
  var i = srcBegin;
  while ((i < srcEnd)) {
    var $x_2 = $n(dst);
    var $x_1 = i;
    var index = i;
    $x_2.set((($x_1 + offset) | 0), $charAt($thiz, index));
    i = ((1 + i) | 0);
  }
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().toString__I__T(ch);
  return $uI($thiz.indexOf(str));
}
function $f_T__repeat__I__T($thiz, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  } else {
    return $as_T($thiz.repeat(count));
  }
}
function $f_T__split__T__I__AT($thiz, regex, limit) {
  var this$2 = $n($m_ju_regex_PatternCompiler$().compile__T__I__ju_regex_Pattern(regex, 0));
  return this$2.java$util$regex$Pattern$$split__T__I__AT($thiz, limit);
}
function $f_T__trim__T($thiz) {
  var len = $thiz.length;
  var start = 0;
  while (true) {
    if ((start !== len)) {
      var index = start;
      var $x_1 = ($charAt($thiz, index) <= 32);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      start = ((1 + start) | 0);
    } else {
      break;
    }
  }
  if ((start === len)) {
    return "";
  } else {
    var end = len;
    while (true) {
      var index$1 = (((-1) + end) | 0);
      if (($charAt($thiz, index$1) <= 32)) {
        end = (((-1) + end) | 0);
      } else {
        break;
      }
    }
    if (((start === 0) && (end === len))) {
      return $thiz;
    } else {
      var beginIndex = start;
      var endIndex = end;
      if ((beginIndex < 0)) {
        $charAt($thiz, beginIndex);
      }
      if ((endIndex > $thiz.length)) {
        $charAt($thiz, endIndex);
      }
      if ((endIndex < beginIndex)) {
        $charAt($thiz, (-1));
      }
      return $as_T($thiz.substring(beginIndex, endIndex));
    }
  }
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"));
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)));
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth));
}
var $d_T = new $TypeData().initClass(0, "java.lang.String", ({
  T: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "string")));
function $ct_jl_StringIndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_StringIndexOutOfBoundsException__I__($thiz, index) {
  var s = ("String index out of range: " + index);
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_StringIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_FormatterClosedException extends $c_jl_IllegalStateException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_ju_FormatterClosedException = new $TypeData().initClass($c_ju_FormatterClosedException, "java.util.FormatterClosedException", ({
  ju_FormatterClosedException: 1,
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_IllegalFormatException extends $c_jl_IllegalArgumentException {
}
class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
  constructor(desc, regex, index) {
    super();
    this.ju_regex_PatternSyntaxException__f_desc = null;
    this.ju_regex_PatternSyntaxException__f_regex = null;
    this.ju_regex_PatternSyntaxException__f_index = 0;
    this.ju_regex_PatternSyntaxException__f_desc = desc;
    this.ju_regex_PatternSyntaxException__f_regex = regex;
    this.ju_regex_PatternSyntaxException__f_index = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    var idx = this.ju_regex_PatternSyntaxException__f_index;
    var re = this.ju_regex_PatternSyntaxException__f_regex;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.ju_regex_PatternSyntaxException__f_desc + indexHint) + "\n") + re);
    if (((idx >= 0) && (re !== null))) {
      var this$1 = $n(re);
      var $x_1 = (idx < this$1.length);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      return (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^");
    } else {
      return base;
    }
  }
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().initClass($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  ju_regex_PatternSyntaxException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_None$() {
}
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.get__E = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None";
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0;
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1);
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880;
});
$c_s_None$.prototype.toString__T = (function() {
  return "None";
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E();
});
var $d_s_None$ = new $TypeData().initClass($c_s_None$, "scala.None$", ({
  s_None$: 1,
  s_Option: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.s_Some__f_value = null;
  this.s_Some__f_value = value;
}
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_value;
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some";
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1;
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1));
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = $as_s_Some(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, $n(Some$1).s_Some__f_value);
  } else {
    return false;
  }
});
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"));
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)));
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth));
}
var $d_s_Some = new $TypeData().initClass($c_s_Some, "scala.Some", ({
  s_Some: 1,
  s_Option: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$c_sc_AbstractIterable.prototype = new $h_O();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.className__T = (function() {
  return this.stringPrefix__T();
});
$c_sc_AbstractIterable.prototype.reduceLeft__F2__O = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$c_sc_AbstractIterable.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sc_AbstractIterable.prototype.toArray__s_reflect_ClassTag__O = (function(evidence$2) {
  return $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, evidence$2);
});
$c_sc_AbstractIterable.prototype.knownSize__I = (function() {
  return (-1);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.sc_ArrayOps$ArrayIterator__f_xs = xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  var xs$1 = $thiz.sc_ArrayOps$ArrayIterator__f_xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_len = $m_jl_reflect_Array$().getLength__O__I(xs$1);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
}
$c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_ArrayOps$ArrayIterator.prototype.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $c_sc_ArrayOps$ArrayIterator.prototype;
$c_sc_ArrayOps$ArrayIterator.prototype.knownSize__I = (function() {
  return ((this.sc_ArrayOps$ArrayIterator__f_len - this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
});
$c_sc_ArrayOps$ArrayIterator.prototype.hasNext__Z = (function() {
  return (this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos < this.sc_ArrayOps$ArrayIterator__f_len);
});
$c_sc_ArrayOps$ArrayIterator.prototype.next__O = (function() {
  var $x_1 = this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos;
  var xs = this.sc_ArrayOps$ArrayIterator__f_xs;
  if (($x_1 >= $m_jl_reflect_Array$().getLength__O__I(xs))) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $m_sr_ScalaRunTime$().array_apply__O__I__O(this.sc_ArrayOps$ArrayIterator__f_xs, this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.sc_ArrayOps$ArrayIterator__f_len;
    } else {
      var a = this.sc_ArrayOps$ArrayIterator__f_len;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
  $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = $n(self).length__I();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
}
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
  return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder;
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0);
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
    var r = $n(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
    return r;
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
    var b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder - n) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  }
  return this;
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.scm_ImmutableBuilder__f_elems = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty);
}
$c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$c_sc_Iterator$$anon$21.prototype.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $c_sc_Iterator$$anon$21.prototype;
$c_sc_Iterator$$anon$21.prototype.addOne__O__sc_Iterator$$anon$21 = (function(elem) {
  var this$2 = $n($as_sc_Iterator(this.scm_ImmutableBuilder__f_elems));
  var xs = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem)));
  this.scm_ImmutableBuilder__f_elems = this$2.concat__F0__sc_Iterator(xs);
  return this;
});
$c_sc_Iterator$$anon$21.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sc_Iterator$$anon$21(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().initClass($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  sc_Iterator$$anon$21: 1,
  scm_ImmutableBuilder: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.sci_ArraySeq$__f_bitmap$0)) {
    $thiz.sci_ArraySeq$__f_emptyImpl = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.sci_ArraySeq$__f_bitmap$0 = true;
  }
  return $thiz.sci_ArraySeq$__f_emptyImpl;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.sci_ArraySeq$__f_bitmap$0) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.sci_ArraySeq$__f_emptyImpl);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.sci_ArraySeq$__f_emptyImpl = null;
  this.sci_ArraySeq$__f_untagged = null;
  this.sci_ArraySeq$__f_bitmap$0 = false;
  $n_sci_ArraySeq$ = this;
  this.sci_ArraySeq$__f_untagged = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$c_sci_ArraySeq$.prototype = new $h_O();
$c_sci_ArraySeq$.prototype.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $c_sci_ArraySeq$.prototype;
$c_sci_ArraySeq$.prototype.from__sc_IterableOnce__s_reflect_ClassTag__sci_ArraySeq = (function(it, tag) {
  if ((it instanceof $c_sci_ArraySeq)) {
    var x2 = $as_sci_ArraySeq(it);
    return x2;
  } else {
    return this.unsafeWrapArray__O__sci_ArraySeq($m_s_Array$().from__sc_IterableOnce__s_reflect_ClassTag__O(it, tag));
  }
});
$c_sci_ArraySeq$.prototype.newBuilder__s_reflect_ClassTag__scm_Builder = (function(evidence$2) {
  $m_scm_ArrayBuffer$();
  var this$3 = new $c_scm_ArrayBuffer$$anon$1();
  var f = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((b$2$2) => {
    var b$2 = $as_scm_ArrayBuffer(b$2$2);
    var $x_1 = $m_sci_ArraySeq$();
    var this$2 = $n(b$2);
    return $x_1.unsafeWrapArray__O__sci_ArraySeq($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this$2, evidence$2));
  }));
  return new $c_scm_Builder$$anon$1(this$3, f);
});
$c_sci_ArraySeq$.prototype.unsafeWrapArray__O__sci_ArraySeq = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    var x3 = $asArrayOf_O(x, 1);
    return new $c_sci_ArraySeq$ofRef(x3);
  } else if ((x instanceof $ac_I)) {
    var x4 = $asArrayOf_I(x, 1);
    return new $c_sci_ArraySeq$ofInt(x4);
  } else if ((x instanceof $ac_D)) {
    var x5 = $asArrayOf_D(x, 1);
    return new $c_sci_ArraySeq$ofDouble(x5);
  } else if ((x instanceof $ac_J)) {
    var x6 = $asArrayOf_J(x, 1);
    return new $c_sci_ArraySeq$ofLong(x6);
  } else if ((x instanceof $ac_F)) {
    var x7 = $asArrayOf_F(x, 1);
    return new $c_sci_ArraySeq$ofFloat(x7);
  } else if ((x instanceof $ac_C)) {
    var x8 = $asArrayOf_C(x, 1);
    return new $c_sci_ArraySeq$ofChar(x8);
  } else if ((x instanceof $ac_B)) {
    var x9 = $asArrayOf_B(x, 1);
    return new $c_sci_ArraySeq$ofByte(x9);
  } else if ((x instanceof $ac_S)) {
    var x10 = $asArrayOf_S(x, 1);
    return new $c_sci_ArraySeq$ofShort(x10);
  } else if ((x instanceof $ac_Z)) {
    var x11 = $asArrayOf_Z(x, 1);
    return new $c_sci_ArraySeq$ofBoolean(x11);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    var x12 = $asArrayOf_jl_Void(x, 1);
    return new $c_sci_ArraySeq$ofUnit(x12);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$c_sci_ArraySeq$.prototype.from__sc_IterableOnce__O__O = (function(it, evidence$5) {
  return this.from__sc_IterableOnce__s_reflect_ClassTag__sci_ArraySeq(it, $as_s_reflect_ClassTag(evidence$5));
});
var $d_sci_ArraySeq$ = new $TypeData().initClass($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  sci_ArraySeq$: 1,
  sc_StrictOptimizedClassTagSeqFactory: 1,
  sc_ClassTagSeqFactory: 1,
  sc_ClassTagIterableFactory: 1,
  sc_EvidenceIterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)));
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)));
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth));
}
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
  var slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
  while (($n(slice).u.length === 0)) {
    $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
    slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
  }
  $thiz.sci_NewVectorIterator__f_sliceStart = $thiz.sci_NewVectorIterator__f_sliceEnd;
  var count = $thiz.sci_NewVectorIterator__f_sliceCount;
  var idx = $thiz.sci_NewVectorIterator__f_sliceIdx;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.sci_NewVectorIterator__f_sliceDim = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x1 = $thiz.sci_NewVectorIterator__f_sliceDim;
  switch (x1) {
    case 1: {
      $thiz.sci_NewVectorIterator__f_a1 = slice;
      break;
    }
    case 2: {
      $thiz.sci_NewVectorIterator__f_a2 = $asArrayOf_O(slice, 2);
      break;
    }
    case 3: {
      $thiz.sci_NewVectorIterator__f_a3 = $asArrayOf_O(slice, 3);
      break;
    }
    case 4: {
      $thiz.sci_NewVectorIterator__f_a4 = $asArrayOf_O(slice, 4);
      break;
    }
    case 5: {
      $thiz.sci_NewVectorIterator__f_a5 = $asArrayOf_O(slice, 5);
      break;
    }
    case 6: {
      $thiz.sci_NewVectorIterator__f_a6 = $asArrayOf_O(slice, 6);
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.sci_NewVectorIterator__f_sliceEnd = (($thiz.sci_NewVectorIterator__f_sliceStart + Math.imul($n(slice).u.length, (1 << Math.imul(5, (((-1) + $thiz.sci_NewVectorIterator__f_sliceDim) | 0))))) | 0);
  if (($thiz.sci_NewVectorIterator__f_sliceEnd > $thiz.sci_NewVectorIterator__f_totalLength)) {
    $thiz.sci_NewVectorIterator__f_sliceEnd = $thiz.sci_NewVectorIterator__f_totalLength;
  }
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    $thiz.sci_NewVectorIterator__f_oldPos = (((-1) + (1 << Math.imul(5, $thiz.sci_NewVectorIterator__f_sliceDim))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + $thiz.sci_NewVectorIterator__f_totalLength) | 0);
  if ((pos === $thiz.sci_NewVectorIterator__f_sliceEnd)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    var io = ((pos - $thiz.sci_NewVectorIterator__f_sliceStart) | 0);
    var xor = ($thiz.sci_NewVectorIterator__f_oldPos ^ io);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor);
    $thiz.sci_NewVectorIterator__f_oldPos = io;
  }
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var a = $n($thiz.sci_NewVectorIterator__f_a1).u.length;
  var b = $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
  $thiz.sci_NewVectorIterator__f_a1len = ((a < b) ? a : b);
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get(0);
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.sci_NewVectorIterator__f_v = null;
  this.sci_NewVectorIterator__f_totalLength = 0;
  this.sci_NewVectorIterator__f_sliceCount = 0;
  this.sci_NewVectorIterator__f_a1 = null;
  this.sci_NewVectorIterator__f_a2 = null;
  this.sci_NewVectorIterator__f_a3 = null;
  this.sci_NewVectorIterator__f_a4 = null;
  this.sci_NewVectorIterator__f_a5 = null;
  this.sci_NewVectorIterator__f_a6 = null;
  this.sci_NewVectorIterator__f_a1len = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 0;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = 0;
  this.sci_NewVectorIterator__f_v = v;
  this.sci_NewVectorIterator__f_totalLength = totalLength;
  this.sci_NewVectorIterator__f_sliceCount = sliceCount;
  this.sci_NewVectorIterator__f_a1 = $n(v).sci_Vector__f_prefix1;
  this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = this.sci_NewVectorIterator__f_totalLength;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 1;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = this.sci_NewVectorIterator__f_a1len;
}
$c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_NewVectorIterator.prototype.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $c_sci_NewVectorIterator.prototype;
$c_sci_NewVectorIterator.prototype.knownSize__I = (function() {
  return ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
});
$c_sci_NewVectorIterator.prototype.hasNext__Z = (function() {
  return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
});
$c_sci_NewVectorIterator.prototype.next__O = (function() {
  if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = $n(this.sci_NewVectorIterator__f_a1).get(this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((1 + this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  return r;
});
$c_sci_NewVectorIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + this.sci_NewVectorIterator__f_totalLength) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.sci_NewVectorIterator__f_totalLength;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.sci_NewVectorIterator__f_totalLength)) {
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
      this.sci_NewVectorIterator__f_a1len = 0;
    } else {
      while ((newpos >= this.sci_NewVectorIterator__f_sliceEnd)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.sci_NewVectorIterator__f_sliceStart) | 0);
      if ((this.sci_NewVectorIterator__f_sliceDim > 1)) {
        var xor = (this.sci_NewVectorIterator__f_oldPos ^ io);
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, xor);
        this.sci_NewVectorIterator__f_oldPos = io;
      }
      this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = (31 & io);
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + ((this.sci_NewVectorIterator__f_totalLength - newpos) | 0)) | 0);
      if ((this.sci_NewVectorIterator__f_a1len > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1)) {
        this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
      }
    }
  }
  return this;
});
$c_sci_NewVectorIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var srcLen = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = (($n(this.sci_NewVectorIterator__f_a1).u.length - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.sci_NewVectorIterator__f_a1;
      var srcPos = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1;
      var destPos = ((start + copied) | 0);
      $systemArraycopyFull($n(src), srcPos, $n(xs), destPos, count);
    } else {
      $m_s_Array$().copy__O__I__O__I__I__V(this.sci_NewVectorIterator__f_a1, this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1, xs, ((start + copied) | 0), count);
    }
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().initClass($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  sci_NewVectorIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  jl_Cloneable: 1
}));
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.sci_RangeIterator__f_step = 0;
  this.sci_RangeIterator__f_lastElement = 0;
  this.sci_RangeIterator__f__hasNext = false;
  this.sci_RangeIterator__f__next = 0;
  this.sci_RangeIterator__f_step = step;
  this.sci_RangeIterator__f_lastElement = lastElement;
  this.sci_RangeIterator__f__hasNext = (!initiallyEmpty);
  this.sci_RangeIterator__f__next = start;
}
$c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_RangeIterator.prototype.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $c_sci_RangeIterator.prototype;
$c_sci_RangeIterator.prototype.knownSize__I = (function() {
  return (this.sci_RangeIterator__f__hasNext ? ((1 + ((((this.sci_RangeIterator__f_lastElement - this.sci_RangeIterator__f__next) | 0) / $checkIntDivisor(this.sci_RangeIterator__f_step)) | 0)) | 0) : 0);
});
$c_sci_RangeIterator.prototype.hasNext__Z = (function() {
  return this.sci_RangeIterator__f__hasNext;
});
$c_sci_RangeIterator.prototype.next__I = (function() {
  if ((!this.sci_RangeIterator__f__hasNext)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var value = this.sci_RangeIterator__f__next;
  this.sci_RangeIterator__f__hasNext = (value !== this.sci_RangeIterator__f_lastElement);
  this.sci_RangeIterator__f__next = ((value + this.sci_RangeIterator__f_step) | 0);
  return value;
});
$c_sci_RangeIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var value = this.sci_RangeIterator__f__next;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.sci_RangeIterator__f_step, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((hi + hi$1) | 0) + ((((value & value$1) | ((value | value$1) & (~lo))) >>> 31) | 0)) | 0);
    if ((this.sci_RangeIterator__f_step > 0)) {
      var value$2 = this.sci_RangeIterator__f_lastElement;
      var hi$3 = (value$2 >> 31);
      if (((hi$3 === hi$2) ? ((value$2 >>> 0) < (lo >>> 0)) : (hi$3 < hi$2))) {
        var a__lo = value$2;
        var a__hi = hi$3;
      } else {
        var a__lo = lo;
        var a__hi = hi$2;
      }
      this.sci_RangeIterator__f__next = a__lo;
      var value$3 = this.sci_RangeIterator__f_lastElement;
      var hi$4 = (value$3 >> 31);
      this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$4) ? ((lo >>> 0) <= (value$3 >>> 0)) : (hi$2 < hi$4));
    } else if ((this.sci_RangeIterator__f_step < 0)) {
      var value$4 = this.sci_RangeIterator__f_lastElement;
      var hi$5 = (value$4 >> 31);
      if (((hi$5 === hi$2) ? ((value$4 >>> 0) > (lo >>> 0)) : (hi$5 > hi$2))) {
        var a$1__lo = value$4;
        var a$1__hi = hi$5;
      } else {
        var a$1__lo = lo;
        var a$1__hi = hi$2;
      }
      this.sci_RangeIterator__f__next = a$1__lo;
      var value$5 = this.sci_RangeIterator__f_lastElement;
      var hi$6 = (value$5 >> 31);
      this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$6) ? ((lo >>> 0) >= (value$5 >>> 0)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$c_sci_RangeIterator.prototype.next__O = (function() {
  return this.next__I();
});
var $d_sci_RangeIterator = new $TypeData().initClass($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  sci_RangeIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.scm_ArrayBuilder__f_capacity = 0;
  $thiz.scm_ArrayBuilder__f_size = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.scm_ArrayBuilder__f_capacity = 0;
  this.scm_ArrayBuilder__f_size = 0;
}
$c_scm_ArrayBuilder.prototype = new $h_O();
$c_scm_ArrayBuilder.prototype.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $c_scm_ArrayBuilder.prototype;
/** @constructor */
function $c_scm_ArraySeq$() {
  this.scm_ArraySeq$__f_untagged = null;
  this.scm_ArraySeq$__f_EmptyArraySeq = null;
  $n_scm_ArraySeq$ = this;
  this.scm_ArraySeq$__f_untagged = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.scm_ArraySeq$__f_EmptyArraySeq = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$c_scm_ArraySeq$.prototype = new $h_O();
$c_scm_ArraySeq$.prototype.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $c_scm_ArraySeq$.prototype;
$c_scm_ArraySeq$.prototype.from__sc_IterableOnce__s_reflect_ClassTag__scm_ArraySeq = (function(it, evidence$2) {
  return this.make__O__scm_ArraySeq($m_s_Array$().from__sc_IterableOnce__s_reflect_ClassTag__O(it, evidence$2));
});
$c_scm_ArraySeq$.prototype.newBuilder__s_reflect_ClassTag__scm_Builder = (function(evidence$3) {
  var this$3 = new $c_scm_ArrayBuilder$generic($n(evidence$3).runtimeClass__jl_Class());
  var f = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $m_scm_ArraySeq$().make__O__scm_ArraySeq(x$2$2)));
  return new $c_scm_Builder$$anon$1(this$3, f);
});
$c_scm_ArraySeq$.prototype.make__O__scm_ArraySeq = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    var x3 = $asArrayOf_O(x, 1);
    return new $c_scm_ArraySeq$ofRef(x3);
  } else if ((x instanceof $ac_I)) {
    var x4 = $asArrayOf_I(x, 1);
    return new $c_scm_ArraySeq$ofInt(x4);
  } else if ((x instanceof $ac_D)) {
    var x5 = $asArrayOf_D(x, 1);
    return new $c_scm_ArraySeq$ofDouble(x5);
  } else if ((x instanceof $ac_J)) {
    var x6 = $asArrayOf_J(x, 1);
    return new $c_scm_ArraySeq$ofLong(x6);
  } else if ((x instanceof $ac_F)) {
    var x7 = $asArrayOf_F(x, 1);
    return new $c_scm_ArraySeq$ofFloat(x7);
  } else if ((x instanceof $ac_C)) {
    var x8 = $asArrayOf_C(x, 1);
    return new $c_scm_ArraySeq$ofChar(x8);
  } else if ((x instanceof $ac_B)) {
    var x9 = $asArrayOf_B(x, 1);
    return new $c_scm_ArraySeq$ofByte(x9);
  } else if ((x instanceof $ac_S)) {
    var x10 = $asArrayOf_S(x, 1);
    return new $c_scm_ArraySeq$ofShort(x10);
  } else if ((x instanceof $ac_Z)) {
    var x11 = $asArrayOf_Z(x, 1);
    return new $c_scm_ArraySeq$ofBoolean(x11);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    var x12 = $asArrayOf_jl_Void(x, 1);
    return new $c_scm_ArraySeq$ofUnit(x12);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$c_scm_ArraySeq$.prototype.from__sc_IterableOnce__O__O = (function(it, evidence$5) {
  return this.from__sc_IterableOnce__s_reflect_ClassTag__scm_ArraySeq(it, $as_s_reflect_ClassTag(evidence$5));
});
var $d_scm_ArraySeq$ = new $TypeData().initClass($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  scm_ArraySeq$: 1,
  sc_StrictOptimizedClassTagSeqFactory: 1,
  sc_ClassTagSeqFactory: 1,
  sc_ClassTagIterableFactory: 1,
  sc_EvidenceIterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = null;
  this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = runtimeClass;
}
$c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$c_s_reflect_ClassTag$GenericClassTag.prototype.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $c_s_reflect_ClassTag$GenericClassTag.prototype;
$c_s_reflect_ClassTag$GenericClassTag.prototype.equals__O__Z = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.hashCode__I = (function() {
  var x = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
  return $m_sr_Statics$().anyHash__O__I(x);
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.toString__T = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass);
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.runtimeClass__jl_Class = (function() {
  return this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.newArray__I__O = (function(len) {
  var componentType = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
  return $n(componentType).data.newArray(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().initClass($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  s_reflect_ClassTag$GenericClassTag: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$c_Ljava_io_PrintStream.prototype.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $c_Ljava_io_PrintStream.prototype;
$c_Ljava_io_PrintStream.prototype.append__jl_CharSequence__Ljava_io_PrintStream = (function(csq) {
  this.print__T__V(((csq === null) ? "null" : $dp_toString__T($n(csq))));
  return this;
});
$c_Ljava_io_PrintStream.prototype.append__jl_CharSequence__jl_Appendable = (function(csq) {
  return this.append__jl_CharSequence__Ljava_io_PrintStream(csq);
});
function $as_Ljava_io_PrintStream(obj) {
  return (((obj instanceof $c_Ljava_io_PrintStream) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"));
}
function $isArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_PrintStream)));
}
function $asArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (($isArrayOf_Ljava_io_PrintStream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.PrintStream;", depth));
}
class $c_ju_DuplicateFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.ju_DuplicateFormatFlagsException__f_f = null;
    this.ju_DuplicateFormatFlagsException__f_f = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  getMessage__T() {
    return (("Flags = '" + this.ju_DuplicateFormatFlagsException__f_f) + "'");
  }
}
var $d_ju_DuplicateFormatFlagsException = new $TypeData().initClass($c_ju_DuplicateFormatFlagsException, "java.util.DuplicateFormatFlagsException", ({
  ju_DuplicateFormatFlagsException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_FormatFlagsConversionMismatchException extends $c_ju_IllegalFormatException {
  constructor(f, c) {
    super();
    this.ju_FormatFlagsConversionMismatchException__f_f = null;
    this.ju_FormatFlagsConversionMismatchException__f_c = 0;
    this.ju_FormatFlagsConversionMismatchException__f_f = f;
    this.ju_FormatFlagsConversionMismatchException__f_c = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  getMessage__T() {
    return ((("Conversion = " + $cToS(this.ju_FormatFlagsConversionMismatchException__f_c)) + ", Flags = ") + this.ju_FormatFlagsConversionMismatchException__f_f);
  }
}
var $d_ju_FormatFlagsConversionMismatchException = new $TypeData().initClass($c_ju_FormatFlagsConversionMismatchException, "java.util.FormatFlagsConversionMismatchException", ({
  ju_FormatFlagsConversionMismatchException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_IllegalFormatArgumentIndexException extends $c_ju_IllegalFormatException {
  constructor(msg) {
    super();
    this.ju_IllegalFormatArgumentIndexException__f_msg = null;
    this.ju_IllegalFormatArgumentIndexException__f_msg = msg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    return this.ju_IllegalFormatArgumentIndexException__f_msg;
  }
}
var $d_ju_IllegalFormatArgumentIndexException = new $TypeData().initClass($c_ju_IllegalFormatArgumentIndexException, "java.util.IllegalFormatArgumentIndexException", ({
  ju_IllegalFormatArgumentIndexException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_IllegalFormatCodePointException extends $c_ju_IllegalFormatException {
  constructor(c) {
    super();
    this.ju_IllegalFormatCodePointException__f_c = 0;
    this.ju_IllegalFormatCodePointException__f_c = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    var i = this.ju_IllegalFormatCodePointException__f_c;
    return ("Code point = 0x" + $as_T((i >>> 0.0).toString(16)));
  }
}
var $d_ju_IllegalFormatCodePointException = new $TypeData().initClass($c_ju_IllegalFormatCodePointException, "java.util.IllegalFormatCodePointException", ({
  ju_IllegalFormatCodePointException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_IllegalFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(c, arg) {
    super();
    this.ju_IllegalFormatConversionException__f_c = 0;
    this.ju_IllegalFormatConversionException__f_arg = null;
    this.ju_IllegalFormatConversionException__f_c = c;
    this.ju_IllegalFormatConversionException__f_arg = arg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((arg === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  getMessage__T() {
    var this$1 = this.ju_IllegalFormatConversionException__f_c;
    var this$3 = $n(this.ju_IllegalFormatConversionException__f_arg);
    return ((("" + $cToS(this$1)) + " != ") + this$3.data.name);
  }
}
var $d_ju_IllegalFormatConversionException = new $TypeData().initClass($c_ju_IllegalFormatConversionException, "java.util.IllegalFormatConversionException", ({
  ju_IllegalFormatConversionException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_IllegalFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.ju_IllegalFormatFlagsException__f_f = null;
    this.ju_IllegalFormatFlagsException__f_f = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  getMessage__T() {
    return (("Flags = '" + this.ju_IllegalFormatFlagsException__f_f) + "'");
  }
}
var $d_ju_IllegalFormatFlagsException = new $TypeData().initClass($c_ju_IllegalFormatFlagsException, "java.util.IllegalFormatFlagsException", ({
  ju_IllegalFormatFlagsException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_IllegalFormatPrecisionException extends $c_ju_IllegalFormatException {
  constructor(p) {
    super();
    this.ju_IllegalFormatPrecisionException__f_p = 0;
    this.ju_IllegalFormatPrecisionException__f_p = p;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    var i = this.ju_IllegalFormatPrecisionException__f_p;
    return ("" + i);
  }
}
var $d_ju_IllegalFormatPrecisionException = new $TypeData().initClass($c_ju_IllegalFormatPrecisionException, "java.util.IllegalFormatPrecisionException", ({
  ju_IllegalFormatPrecisionException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_IllegalFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(w) {
    super();
    this.ju_IllegalFormatWidthException__f_w = 0;
    this.ju_IllegalFormatWidthException__f_w = w;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    var i = this.ju_IllegalFormatWidthException__f_w;
    return ("" + i);
  }
}
var $d_ju_IllegalFormatWidthException = new $TypeData().initClass($c_ju_IllegalFormatWidthException, "java.util.IllegalFormatWidthException", ({
  ju_IllegalFormatWidthException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_MissingFormatArgumentException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.ju_MissingFormatArgumentException__f_s = null;
    this.ju_MissingFormatArgumentException__f_s = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  getMessage__T() {
    return (("Format specifier '" + this.ju_MissingFormatArgumentException__f_s) + "'");
  }
}
var $d_ju_MissingFormatArgumentException = new $TypeData().initClass($c_ju_MissingFormatArgumentException, "java.util.MissingFormatArgumentException", ({
  ju_MissingFormatArgumentException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_MissingFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.ju_MissingFormatWidthException__f_s = null;
    this.ju_MissingFormatWidthException__f_s = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  getMessage__T() {
    return this.ju_MissingFormatWidthException__f_s;
  }
}
var $d_ju_MissingFormatWidthException = new $TypeData().initClass($c_ju_MissingFormatWidthException, "java.util.MissingFormatWidthException", ({
  ju_MissingFormatWidthException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_UnknownFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.ju_UnknownFormatConversionException__f_s = null;
    this.ju_UnknownFormatConversionException__f_s = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException();
    }
  }
  getMessage__T() {
    return (("Conversion = '" + this.ju_UnknownFormatConversionException__f_s) + "'");
  }
}
var $d_ju_UnknownFormatConversionException = new $TypeData().initClass($c_ju_UnknownFormatConversionException, "java.util.UnknownFormatConversionException", ({
  ju_UnknownFormatConversionException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next$mcB$sp__B = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next__O = (function() {
  return this.next$mcB$sp__B();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  sc_ArrayOps$ArrayIterator$mcB$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next$mcC$sp__C = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next__O = (function() {
  return $bC(this.next$mcC$sp__C());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  sc_ArrayOps$ArrayIterator$mcC$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next$mcD$sp__D = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next__O = (function() {
  return this.next$mcD$sp__D();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  sc_ArrayOps$ArrayIterator$mcD$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next$mcF$sp__F = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next__O = (function() {
  return this.next$mcF$sp__F();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  sc_ArrayOps$ArrayIterator$mcF$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next$mcI$sp__I = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next__O = (function() {
  return this.next$mcI$sp__I();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  sc_ArrayOps$ArrayIterator$mcI$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next$mcJ$sp__J = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var t = $n(this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return new $c_RTLong(lo, hi);
});
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next__O = (function() {
  return this.next$mcJ$sp__J();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  sc_ArrayOps$ArrayIterator$mcJ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next$mcS$sp__S = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next__O = (function() {
  return this.next$mcS$sp__S();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  sc_ArrayOps$ArrayIterator$mcS$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next$mcV$sp__V = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  $n(this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
});
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next__O = (function() {
  this.next$mcV$sp__V();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  sc_ArrayOps$ArrayIterator$mcV$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next$mcZ$sp__Z = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next__O = (function() {
  return this.next$mcZ$sp__Z();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  sc_ArrayOps$ArrayIterator$mcZ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.className__T() + "(<not computed>)");
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.scm_ArrayBuilder__f_capacity = 0;
  this.scm_ArrayBuilder__f_size = 0;
  this.scm_ArrayBuilder$generic__f_elementClass = null;
  this.scm_ArrayBuilder$generic__f_isCharArrayBuilder = false;
  this.scm_ArrayBuilder$generic__f_jsElems = null;
  this.scm_ArrayBuilder$generic__f_elementClass = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.scm_ArrayBuilder$generic__f_isCharArrayBuilder = (elementClass === $d_C.getClassOf());
  this.scm_ArrayBuilder$generic__f_jsElems = [];
}
$c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$c_scm_ArrayBuilder$generic.prototype.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $c_scm_ArrayBuilder$generic.prototype;
$c_scm_ArrayBuilder$generic.prototype.addOne__O__scm_ArrayBuilder$generic = (function(elem) {
  var unboxedElem = (this.scm_ArrayBuilder$generic__f_isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $n(this.scm_ArrayBuilder$generic__f_elementClass).data.zero : elem));
  this.scm_ArrayBuilder$generic__f_jsElems.push(unboxedElem);
  return this;
});
$c_scm_ArrayBuilder$generic.prototype.addAll__sc_IterableOnce__scm_ArrayBuilder$generic = (function(xs) {
  var it = $n(xs).iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    var elem = $n(it).next__O();
    this.addOne__O__scm_ArrayBuilder$generic(elem);
  }
  return this;
});
$c_scm_ArrayBuilder$generic.prototype.result__O = (function() {
  var x$2 = this.scm_ArrayBuilder$generic__f_elementClass;
  if ((x$2 === $d_V.getClassOf())) {
    var elemRuntimeClass = $d_jl_Void.getClassOf();
  } else {
    var x$4 = this.scm_ArrayBuilder$generic__f_elementClass;
    if ((x$4 === $d_sr_Null$.getClassOf())) {
      var $x_1 = true;
    } else {
      var x$6 = this.scm_ArrayBuilder$generic__f_elementClass;
      var $x_1 = (x$6 === $d_sr_Nothing$.getClassOf());
    }
    if ($x_1) {
      var elemRuntimeClass = $d_O.getClassOf();
    } else {
      var elemRuntimeClass = this.scm_ArrayBuilder$generic__f_elementClass;
    }
  }
  return $n(elemRuntimeClass).data.getArrayOf().wrapArray(this.scm_ArrayBuilder$generic__f_jsElems);
});
$c_scm_ArrayBuilder$generic.prototype.toString__T = (function() {
  return "ArrayBuilder.generic";
});
$c_scm_ArrayBuilder$generic.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__scm_ArrayBuilder$generic(elems);
});
$c_scm_ArrayBuilder$generic.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_ArrayBuilder$generic(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().initClass($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  scm_ArrayBuilder$generic: 1,
  scm_ArrayBuilder: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_mutationCount = null;
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_expectedCount = 0;
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_mutationCount = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  var this$1 = $n(mutationCount);
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_expectedCount = $uI(this$1.apply__O());
}
$c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$c_scm_CheckedIndexedSeqView$CheckedIterator.prototype.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype;
$c_scm_CheckedIndexedSeqView$CheckedIterator.prototype.hasNext__Z = (function() {
  var this$2 = $m_scm_MutationTracker$();
  var expectedCount = this.scm_CheckedIndexedSeqView$CheckedIterator__f_expectedCount;
  var this$1 = $n(this.scm_CheckedIndexedSeqView$CheckedIterator__f_mutationCount);
  var actualCount = $uI(this$1.apply__O());
  this$2.checkMutations__I__I__T__V(expectedCount, actualCount, "mutation occurred during iteration");
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().initClass($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  scm_CheckedIndexedSeqView$CheckedIterator: 1,
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_math_Ordering$DeprecatedDoubleOrdering$() {
}
$c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype = new $h_O();
$c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype.constructor = $c_s_math_Ordering$DeprecatedDoubleOrdering$;
/** @constructor */
function $h_s_math_Ordering$DeprecatedDoubleOrdering$() {
}
$h_s_math_Ordering$DeprecatedDoubleOrdering$.prototype = $c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype;
var $d_s_math_Ordering$DeprecatedDoubleOrdering$ = new $TypeData().initClass($c_s_math_Ordering$DeprecatedDoubleOrdering$, "scala.math.Ordering$DeprecatedDoubleOrdering$", ({
  s_math_Ordering$DeprecatedDoubleOrdering$: 1,
  s_math_Ordering$Double$TotalOrdering: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_math_Ordering$DeprecatedDoubleOrdering$;
function $m_s_math_Ordering$DeprecatedDoubleOrdering$() {
  if ((!$n_s_math_Ordering$DeprecatedDoubleOrdering$)) {
    $n_s_math_Ordering$DeprecatedDoubleOrdering$ = new $c_s_math_Ordering$DeprecatedDoubleOrdering$();
  }
  return $n_s_math_Ordering$DeprecatedDoubleOrdering$;
}
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_AnyValManifest.prototype = new $h_O();
$c_s_reflect_AnyValManifest.prototype.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $c_s_reflect_AnyValManifest.prototype;
$c_s_reflect_AnyValManifest.prototype.toString__T = (function() {
  return this.s_reflect_AnyValManifest__f_toString;
});
$c_s_reflect_AnyValManifest.prototype.equals__O__Z = (function(that) {
  return (this === that);
});
$c_s_reflect_AnyValManifest.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype;
function $as_sjs_js_JavaScriptException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"));
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)));
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth));
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    if (($thiz.jl_JSConsoleBasedPrintStream__f_isErr && $uZ((!(!console.error))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.jl_JSConsoleBasedPrintStream__f_isErr = false;
  this.jl_JSConsoleBasedPrintStream__f_buffer = null;
  this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
  var out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, out, false, null);
  this.jl_JSConsoleBasedPrintStream__f_buffer = "";
}
$c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$c_jl_JSConsoleBasedPrintStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $c_jl_JSConsoleBasedPrintStream.prototype;
$c_jl_JSConsoleBasedPrintStream.prototype.print__T__V = (function(s) {
  this.java$lang$JSConsoleBasedPrintStream$$printString__T__V(((s === null) ? "null" : s));
});
$c_jl_JSConsoleBasedPrintStream.prototype.java$lang$JSConsoleBasedPrintStream$$printString__T__V = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = $n(rest);
    var nlPos = $uI(this$1.indexOf("\n"));
    if ((nlPos < 0)) {
      this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
      rest = "";
    } else {
      var $x_1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
      var this$2 = $n(rest);
      if ((nlPos > this$2.length)) {
        $charAt(this$2, nlPos);
      }
      if ((nlPos < 0)) {
        $charAt(this$2, (-1));
      }
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + $as_T(this$2.substring(0, nlPos))));
      this.jl_JSConsoleBasedPrintStream__f_buffer = "";
      var this$3 = $n(rest);
      var beginIndex = ((1 + nlPos) | 0);
      if (((beginIndex < 0) || (beginIndex > this$3.length))) {
        $charAt(this$3, beginIndex);
      }
      rest = $as_T(this$3.substring(beginIndex));
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || $n(s).isEmpty__Z())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = $as_sc_LinearSeq($n(s).tail__O());
      n = temp$n;
      s = temp$s;
    }
  }
}
function $is_sc_StrictOptimizedLinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_StrictOptimizedLinearSeqOps)));
}
function $as_sc_StrictOptimizedLinearSeqOps(obj) {
  return (($is_sc_StrictOptimizedLinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StrictOptimizedLinearSeqOps"));
}
function $isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StrictOptimizedLinearSeqOps)));
}
function $asArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (($isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StrictOptimizedLinearSeqOps;", depth));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$BooleanManifest.prototype.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $c_s_reflect_ManifestFactory$BooleanManifest.prototype;
$c_s_reflect_ManifestFactory$BooleanManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_Z.getClassOf();
});
$c_s_reflect_ManifestFactory$BooleanManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$ByteManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $c_s_reflect_ManifestFactory$ByteManifest.prototype;
$c_s_reflect_ManifestFactory$ByteManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_B.getClassOf();
});
$c_s_reflect_ManifestFactory$ByteManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$CharManifest.prototype.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $c_s_reflect_ManifestFactory$CharManifest.prototype;
$c_s_reflect_ManifestFactory$CharManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_C.getClassOf();
});
$c_s_reflect_ManifestFactory$CharManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$DoubleManifest.prototype.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $c_s_reflect_ManifestFactory$DoubleManifest.prototype;
$c_s_reflect_ManifestFactory$DoubleManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_D.getClassOf();
});
$c_s_reflect_ManifestFactory$DoubleManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$FloatManifest.prototype.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $c_s_reflect_ManifestFactory$FloatManifest.prototype;
$c_s_reflect_ManifestFactory$FloatManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_F.getClassOf();
});
$c_s_reflect_ManifestFactory$FloatManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$IntManifest.prototype.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $c_s_reflect_ManifestFactory$IntManifest.prototype;
$c_s_reflect_ManifestFactory$IntManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_I.getClassOf();
});
$c_s_reflect_ManifestFactory$IntManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$LongManifest.prototype.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $c_s_reflect_ManifestFactory$LongManifest.prototype;
$c_s_reflect_ManifestFactory$LongManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_J.getClassOf();
});
$c_s_reflect_ManifestFactory$LongManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $c_s_reflect_ManifestFactory$PhantomManifest.prototype;
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.toString__T = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_toString;
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.equals__O__Z = (function(that) {
  return (this === that);
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$ShortManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $c_s_reflect_ManifestFactory$ShortManifest.prototype;
$c_s_reflect_ManifestFactory$ShortManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_S.getClassOf();
});
$c_s_reflect_ManifestFactory$ShortManifest.prototype.newArray__I__O = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.s_reflect_AnyValManifest__f_toString = null;
}
$c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$c_s_reflect_ManifestFactory$UnitManifest.prototype.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $c_s_reflect_ManifestFactory$UnitManifest.prototype;
$c_s_reflect_ManifestFactory$UnitManifest.prototype.runtimeClass__jl_Class = (function() {
  return $d_V.getClassOf();
});
$c_s_reflect_ManifestFactory$UnitManifest.prototype.newArray__I__O = (function(len) {
  return new ($d_jl_Void.getArrayOf().constr)(len);
});
/** @constructor */
function $c_sc_AbstractView() {
}
$c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
$c_sc_AbstractView.prototype.toString__T = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
}
$c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $c_s_reflect_ManifestFactory$AnyManifest$.prototype;
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_O.getClassOf();
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.newArray__I__O = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$();
  }
  return $n_s_reflect_ManifestFactory$AnyManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Boolean";
}
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  s_reflect_ManifestFactory$BooleanManifest$: 1,
  s_reflect_ManifestFactory$BooleanManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$BooleanManifest$;
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$();
  }
  return $n_s_reflect_ManifestFactory$BooleanManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Byte";
}
$c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $c_s_reflect_ManifestFactory$ByteManifest$.prototype;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  s_reflect_ManifestFactory$ByteManifest$: 1,
  s_reflect_ManifestFactory$ByteManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$();
  }
  return $n_s_reflect_ManifestFactory$ByteManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Char";
}
$c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$c_s_reflect_ManifestFactory$CharManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $c_s_reflect_ManifestFactory$CharManifest$.prototype;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  s_reflect_ManifestFactory$CharManifest$: 1,
  s_reflect_ManifestFactory$CharManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$();
  }
  return $n_s_reflect_ManifestFactory$CharManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Double";
}
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  s_reflect_ManifestFactory$DoubleManifest$: 1,
  s_reflect_ManifestFactory$DoubleManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$();
  }
  return $n_s_reflect_ManifestFactory$DoubleManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Float";
}
$c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $c_s_reflect_ManifestFactory$FloatManifest$.prototype;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  s_reflect_ManifestFactory$FloatManifest$: 1,
  s_reflect_ManifestFactory$FloatManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$();
  }
  return $n_s_reflect_ManifestFactory$FloatManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Int";
}
$c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$c_s_reflect_ManifestFactory$IntManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $c_s_reflect_ManifestFactory$IntManifest$.prototype;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  s_reflect_ManifestFactory$IntManifest$: 1,
  s_reflect_ManifestFactory$IntManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
  }
  return $n_s_reflect_ManifestFactory$IntManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Long";
}
$c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$c_s_reflect_ManifestFactory$LongManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $c_s_reflect_ManifestFactory$LongManifest$.prototype;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  s_reflect_ManifestFactory$LongManifest$: 1,
  s_reflect_ManifestFactory$LongManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$();
  }
  return $n_s_reflect_ManifestFactory$LongManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing";
}
$c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $c_s_reflect_ManifestFactory$NothingManifest$.prototype;
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_sr_Nothing$.getClassOf();
});
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.newArray__I__O = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  s_reflect_ManifestFactory$NothingManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$();
  }
  return $n_s_reflect_ManifestFactory$NothingManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Null";
}
$c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$NullManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $c_s_reflect_ManifestFactory$NullManifest$.prototype;
$c_s_reflect_ManifestFactory$NullManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_sr_Null$.getClassOf();
});
$c_s_reflect_ManifestFactory$NullManifest$.prototype.newArray__I__O = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  s_reflect_ManifestFactory$NullManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$();
  }
  return $n_s_reflect_ManifestFactory$NullManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
}
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype;
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_O.getClassOf();
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.newArray__I__O = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Short";
}
$c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $c_s_reflect_ManifestFactory$ShortManifest$.prototype;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  s_reflect_ManifestFactory$ShortManifest$: 1,
  s_reflect_ManifestFactory$ShortManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$ShortManifest$;
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$();
  }
  return $n_s_reflect_ManifestFactory$ShortManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest$() {
  this.s_reflect_AnyValManifest__f_toString = null;
  this.s_reflect_AnyValManifest__f_toString = "Unit";
}
$c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $c_s_reflect_ManifestFactory$UnitManifest$.prototype;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().initClass($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  s_reflect_ManifestFactory$UnitManifest$: 1,
  s_reflect_ManifestFactory$UnitManifest: 1,
  s_reflect_AnyValManifest: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
}));
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$();
  }
  return $n_s_reflect_ManifestFactory$UnitManifest$;
}
/** @constructor */
function $c_Lorg_expr_simplex_Simplex$Direction$$anon$2(\u03b4name$4, _$ordinal$4) {
  this.Lorg_expr_simplex_Simplex$Direction$$anon$2__f_$name$2 = null;
  this.Lorg_expr_simplex_Simplex$Direction$$anon$2__f_$name$2 = \u03b4name$4;
}
$c_Lorg_expr_simplex_Simplex$Direction$$anon$2.prototype = new $h_Lorg_expr_simplex_Simplex$Direction();
$c_Lorg_expr_simplex_Simplex$Direction$$anon$2.prototype.constructor = $c_Lorg_expr_simplex_Simplex$Direction$$anon$2;
/** @constructor */
function $h_Lorg_expr_simplex_Simplex$Direction$$anon$2() {
}
$h_Lorg_expr_simplex_Simplex$Direction$$anon$2.prototype = $c_Lorg_expr_simplex_Simplex$Direction$$anon$2.prototype;
$c_Lorg_expr_simplex_Simplex$Direction$$anon$2.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_expr_simplex_Simplex$Direction$$anon$2.prototype.productElement__I__O = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$c_Lorg_expr_simplex_Simplex$Direction$$anon$2.prototype.productPrefix__T = (function() {
  return this.Lorg_expr_simplex_Simplex$Direction$$anon$2__f_$name$2;
});
$c_Lorg_expr_simplex_Simplex$Direction$$anon$2.prototype.toString__T = (function() {
  return this.Lorg_expr_simplex_Simplex$Direction$$anon$2__f_$name$2;
});
$c_Lorg_expr_simplex_Simplex$Direction$$anon$2.prototype.hashCode__I = (function() {
  return $f_T__hashCode__I($n(this.Lorg_expr_simplex_Simplex$Direction$$anon$2__f_$name$2));
});
var $d_Lorg_expr_simplex_Simplex$Direction$$anon$2 = new $TypeData().initClass($c_Lorg_expr_simplex_Simplex$Direction$$anon$2, "org.expr.simplex.Simplex$Direction$$anon$2", ({
  Lorg_expr_simplex_Simplex$Direction$$anon$2: 1,
  Lorg_expr_simplex_Simplex$Direction: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
/** @constructor */
function $c_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1(\u03b4name$3, _$ordinal$3) {
  this.Lorg_expr_simplex_Simplex$OptimizationType$$anon$1__f_$name$1 = null;
  this.Lorg_expr_simplex_Simplex$OptimizationType$$anon$1__f_$name$1 = \u03b4name$3;
}
$c_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1.prototype = new $h_Lorg_expr_simplex_Simplex$OptimizationType();
$c_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1.prototype.constructor = $c_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1;
/** @constructor */
function $h_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1() {
}
$h_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1.prototype = $c_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1.prototype;
$c_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1.prototype.productElement__I__O = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$c_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1.prototype.productPrefix__T = (function() {
  return this.Lorg_expr_simplex_Simplex$OptimizationType$$anon$1__f_$name$1;
});
$c_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1.prototype.toString__T = (function() {
  return this.Lorg_expr_simplex_Simplex$OptimizationType$$anon$1__f_$name$1;
});
$c_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1.prototype.hashCode__I = (function() {
  return $f_T__hashCode__I($n(this.Lorg_expr_simplex_Simplex$OptimizationType$$anon$1__f_$name$1));
});
var $d_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1 = new $TypeData().initClass($c_Lorg_expr_simplex_Simplex$OptimizationType$$anon$1, "org.expr.simplex.Simplex$OptimizationType$$anon$1", ({
  Lorg_expr_simplex_Simplex$OptimizationType$$anon$1: 1,
  Lorg_expr_simplex_Simplex$OptimizationType: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      var x2 = $as_sc_Seq(o);
      if ($n(x2).canEqual__O__Z($thiz)) {
        return $thiz.sameElements__sc_IterableOnce__Z(x2);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)));
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)));
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth));
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
  return true;
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this);
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$c_sc_AbstractSeq.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
$c_sc_AbstractSeqView.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)));
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)));
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)));
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)));
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.sc_SeqView$Id__f_underlying = null;
}
$c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
$c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
  return $n(this.sc_SeqView$Id__f_underlying).apply__I__O(idx);
});
$c_sc_SeqView$Id.prototype.length__I = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).length__I();
});
$c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).isEmpty__Z();
});
/** @constructor */
function $c_sc_AbstractIndexedSeqView() {
}
$c_sc_AbstractIndexedSeqView.prototype = new $h_sc_AbstractSeqView();
$c_sc_AbstractIndexedSeqView.prototype.constructor = $c_sc_AbstractIndexedSeqView;
/** @constructor */
function $h_sc_AbstractIndexedSeqView() {
}
$h_sc_AbstractIndexedSeqView.prototype = $c_sc_AbstractIndexedSeqView.prototype;
$c_sc_AbstractIndexedSeqView.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView";
});
$c_sc_AbstractIndexedSeqView.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sc_AbstractIndexedSeqView.prototype.knownSize__I = (function() {
  return this.length__I();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.sc_SeqView$Id__f_underlying = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $c_sc_IndexedSeqView$Id.prototype;
$c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView";
});
$c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
  return this.length__I();
});
var $d_sc_IndexedSeqView$Id = new $TypeData().initClass($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.scm_ArrayBufferView__f_underlying = null;
  this.scm_ArrayBufferView__f_mutationCount = null;
  this.scm_ArrayBufferView__f_underlying = underlying;
  this.scm_ArrayBufferView__f_mutationCount = mutationCount;
}
$c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$c_scm_ArrayBufferView.prototype.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $c_scm_ArrayBufferView.prototype;
$c_scm_ArrayBufferView.prototype.apply__I__O = (function(n) {
  return $n(this.scm_ArrayBufferView__f_underlying).apply__I__O(n);
});
$c_scm_ArrayBufferView.prototype.length__I = (function() {
  var this$1 = $n(this.scm_ArrayBufferView__f_underlying);
  return this$1.scm_ArrayBuffer__f_size0;
});
$c_scm_ArrayBufferView.prototype.className__T = (function() {
  return "ArrayBufferView";
});
$c_scm_ArrayBufferView.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.scm_ArrayBufferView__f_mutationCount);
});
var $d_scm_ArrayBufferView = new $TypeData().initClass($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  scm_ArrayBufferView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
}));
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true;
  } else {
    var x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === $n(x2).length__I());
  }
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    var x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true;
    } else {
      var length = $thiz.length__I();
      var equal = (length === $n(x2).length__I());
      if (equal) {
        var index = 0;
        var a = $thiz.applyPreferredMaxLength__I();
        var b = $n(x2).applyPreferredMaxLength__I();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), $n(x2).apply__I__O(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $n($thiz.iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          var thatIt = $n($n(x2).iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          while ((equal && $n(thisIt).hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z($n(thisIt).next__O(), $n(thatIt).next__O());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)));
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)));
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
$c_scm_AbstractBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $p_sci_Range__isInexact$1__Z($thiz) {
  return ((($thiz.sci_Range__f_scala$collection$immutable$Range$$lastElement + $thiz.sci_Range__f_step) | 0) !== $thiz.sci_Range__f_end);
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.sci_Range__f_start = start;
  $thiz.sci_Range__f_end = end;
  $thiz.sci_Range__f_step = step;
  $thiz.sci_Range__f_isEmpty = ((step >= 0) ? (start >= end) : (start <= end));
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.");
  }
  var stepSign = (step >> 31);
  var gap = (((((end - start) | 0) ^ stepSign) - stepSign) | 0);
  var absStep = (((step ^ stepSign) - stepSign) | 0);
  var div = (((gap >>> 0) / ($checkIntDivisor(absStep) >>> 0)) | 0);
  $thiz.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = ((Math.imul(absStep, div) !== gap) ? ((1 + div) | 0) : div);
  if ((((-3) & ((1 + step) | 0)) === 0)) {
    var $x_1 = ((end - step) | 0);
  } else {
    var n = (((-1) + $thiz.sci_Range__f_scala$collection$immutable$Range$$numRangeElements) | 0);
    var $x_1 = (($thiz.sci_Range__f_start + Math.imul($thiz.sci_Range__f_step, n)) | 0);
  }
  $thiz.sci_Range__f_scala$collection$immutable$Range$$lastElement = $x_1;
  return $thiz;
}
/** @constructor */
function $c_sci_Range() {
  this.sci_Range__f_start = 0;
  this.sci_Range__f_end = 0;
  this.sci_Range__f_step = 0;
  this.sci_Range__f_isEmpty = false;
  this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = 0;
  this.sci_Range__f_scala$collection$immutable$Range$$lastElement = 0;
}
$c_sci_Range.prototype = new $h_sci_AbstractSeq();
$c_sci_Range.prototype.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
}
$h_sci_Range.prototype = $c_sci_Range.prototype;
$c_sci_Range.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$c_sci_Range.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_sci_Range.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sci_Range.prototype.knownSize__I = (function() {
  return this.length__I();
});
$c_sci_Range.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_RangeIterator(this.sci_Range__f_start, this.sci_Range__f_step, this.sci_Range__f_scala$collection$immutable$Range$$lastElement, this.sci_Range__f_isEmpty);
});
$c_sci_Range.prototype.isEmpty__Z = (function() {
  return this.sci_Range__f_isEmpty;
});
$c_sci_Range.prototype.length__I = (function() {
  return (this.sci_Range__f_isEmpty ? 0 : ((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements > 0) ? this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements : $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, false)));
});
$c_sci_Range.prototype.last__I = (function() {
  if (this.sci_Range__f_isEmpty) {
    var $x_1 = $n($m_sci_Range$().scala$collection$immutable$Range$$emptyRangeError__T__jl_Throwable("last"));
    throw (false ? $x_1.sjs_js_JavaScriptException__f_exception : $x_1);
  } else {
    return this.sci_Range__f_scala$collection$immutable$Range$$lastElement;
  }
});
$c_sci_Range.prototype.map__F1__sci_IndexedSeq = (function(f) {
  this.scala$collection$immutable$Range$$validateMaxLength__V();
  return $as_sci_IndexedSeq($f_sc_StrictOptimizedIterableOps__map__F1__O(this, f));
});
$c_sci_Range.prototype.scala$collection$immutable$Range$$validateMaxLength__V = (function() {
  if (((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements <= 0) && (!this.sci_Range__f_isEmpty))) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, false);
  }
});
$c_sci_Range.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  if ((that instanceof $c_sci_Range)) {
    var x2 = $as_sci_Range(that);
    var x1$2 = this.length__I();
    switch (x1$2) {
      case 0: {
        return $n(x2).sci_Range__f_isEmpty;
        break;
      }
      case 1: {
        return (($n(x2).length__I() === 1) && (this.sci_Range__f_start === $n(x2).sci_Range__f_start));
        break;
      }
      default: {
        return (($n(x2).length__I() === x1$2) && ((this.sci_Range__f_start === $n(x2).sci_Range__f_start) && (this.sci_Range__f_step === $n(x2).sci_Range__f_step)));
      }
    }
  } else {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, that);
  }
});
$c_sci_Range.prototype.applyPreferredMaxLength__I = (function() {
  return 2147483647;
});
$c_sci_Range.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_sci_Range)) {
    var x2 = $as_sci_Range(other);
    if (this.sci_Range__f_isEmpty) {
      return $n(x2).sci_Range__f_isEmpty;
    } else {
      var this$1 = $n(x2);
      if (((!this$1.sci_Range__f_isEmpty) && (this.sci_Range__f_start === $n(x2).sci_Range__f_start))) {
        var l0 = this.last__I();
        return ((l0 === $n(x2).last__I()) && ((this.sci_Range__f_start === l0) || (this.sci_Range__f_step === $n(x2).sci_Range__f_step)));
      } else {
        return false;
      }
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, other);
  }
});
$c_sci_Range.prototype.hashCode__I = (function() {
  if ((this.length__I() >= 2)) {
    var this$1 = $m_s_util_hashing_MurmurHash3$();
    var start = this.sci_Range__f_start;
    var step = this.sci_Range__f_step;
    var last = this.sci_Range__f_scala$collection$immutable$Range$$lastElement;
    return this$1.rangeHash__I__I__I__I__I(start, step, last, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this);
  }
});
$c_sci_Range.prototype.toString__T = (function() {
  var stepped = ((this.sci_Range__f_step === 1) ? "" : (" by " + this.sci_Range__f_step));
  var prefix = (this.sci_Range__f_isEmpty ? "empty " : ($p_sci_Range__isInexact$1__Z(this) ? "inexact " : ""));
  return (((((prefix + "Range ") + this.sci_Range__f_start) + " until ") + this.sci_Range__f_end) + stepped);
});
$c_sci_Range.prototype.className__T = (function() {
  return "Range";
});
$c_sci_Range.prototype.apply$mcII$sp__I__I = (function(idx) {
  if ((((idx < 0) || (idx >= this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements)) || this.sci_Range__f_isEmpty)) {
    this.scala$collection$immutable$Range$$validateMaxLength__V();
    var max = (this.sci_Range__f_isEmpty ? (-1) : (((-1) + this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements) | 0));
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((idx + " is out of bounds (min 0, max ") + max) + ")"));
  } else {
    return ((this.sci_Range__f_start + Math.imul(this.sci_Range__f_step, idx)) | 0);
  }
});
$c_sci_Range.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sci_IndexedSeq$();
});
$c_sci_Range.prototype.apply__O__O = (function(v1) {
  var idx = $uI(v1);
  return this.apply$mcII$sp__I__I(idx);
});
$c_sci_Range.prototype.apply__I__O = (function(i) {
  return this.apply$mcII$sp__I__I(i);
});
$c_sci_Range.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_IndexedSeq(f);
});
function $as_sci_Range(obj) {
  return (((obj instanceof $c_sci_Range) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Range"));
}
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Range)));
}
function $asArrayOf_sci_Range(obj, depth) {
  return (($isArrayOf_sci_Range(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Range;", depth));
}
/** @constructor */
function $c_sci_ArraySeq() {
}
$c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$c_sci_ArraySeq.prototype.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $c_sci_ArraySeq.prototype;
$c_sci_ArraySeq.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$c_sci_ArraySeq.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$c_sci_ArraySeq.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_sci_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sci_ArraySeq.prototype.knownSize__I = (function() {
  return this.length__I();
});
$c_sci_ArraySeq.prototype.map__F1__sci_ArraySeq = (function(f) {
  var a = new $ac_O(this.length__I());
  var i = 0;
  while ((i < a.u.length)) {
    a.set(i, $n(f).apply__O__O(this.apply__I__O(i)));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().unsafeWrapArray__O__sci_ArraySeq(a);
});
$c_sci_ArraySeq.prototype.className__T = (function() {
  return "ArraySeq";
});
$c_sci_ArraySeq.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var srcLen = this.length__I();
  var destLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V(this.unsafeArray__O(), 0, xs, start, copied);
  }
  return copied;
});
$c_sci_ArraySeq.prototype.applyPreferredMaxLength__I = (function() {
  return 2147483647;
});
$c_sci_ArraySeq.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_ArraySeq(f);
});
$c_sci_ArraySeq.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sci_ArraySeq$().sci_ArraySeq$__f_untagged;
});
function $as_sci_ArraySeq(obj) {
  return (((obj instanceof $c_sci_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq"));
}
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq)));
}
function $asArrayOf_sci_ArraySeq(obj, depth) {
  return (($isArrayOf_sci_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq;", depth));
}
/** @constructor */
function $c_sci_Range$Exclusive(start, end, step) {
  this.sci_Range__f_start = 0;
  this.sci_Range__f_end = 0;
  this.sci_Range__f_step = 0;
  this.sci_Range__f_isEmpty = false;
  this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = 0;
  this.sci_Range__f_scala$collection$immutable$Range$$lastElement = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step);
}
$c_sci_Range$Exclusive.prototype = new $h_sci_Range();
$c_sci_Range$Exclusive.prototype.constructor = $c_sci_Range$Exclusive;
/** @constructor */
function $h_sci_Range$Exclusive() {
}
$h_sci_Range$Exclusive.prototype = $c_sci_Range$Exclusive.prototype;
var $d_sci_Range$Exclusive = new $TypeData().initClass($c_sci_Range$Exclusive, "scala.collection.immutable.Range$Exclusive", ({
  sci_Range$Exclusive: 1,
  sci_Range: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.sci_Vector__f_prefix1 = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.sci_Vector__f_prefix1 = null;
}
$c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$c_sci_Vector.prototype.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $c_sci_Vector.prototype;
$c_sci_Vector.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$c_sci_Vector.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$c_sci_Vector.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_sci_Vector.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sci_Vector.prototype.knownSize__I = (function() {
  return this.length__I();
});
$c_sci_Vector.prototype.length__I = (function() {
  return ((this instanceof $c_sci_BigVector) ? $n($as_sci_BigVector(this)).sci_BigVector__f_length0 : $n(this.sci_Vector__f_prefix1).u.length);
});
$c_sci_Vector.prototype.iterator__sc_Iterator = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator : new $c_sci_NewVectorIterator(this, this.length__I(), this.vectorSliceCount__I()));
});
$c_sci_Vector.prototype.className__T = (function() {
  return "Vector";
});
$c_sci_Vector.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $n(this.iterator__sc_Iterator()).copyToArray__O__I__I__I(xs, start, len);
});
$c_sci_Vector.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength;
});
$c_sci_Vector.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException(index, (((-1) + this.length__I()) | 0));
});
$c_sci_Vector.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sci_Vector$();
});
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"));
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)));
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth));
}
/** @constructor */
function $c_scm_ArraySeq() {
}
$c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$c_scm_ArraySeq.prototype.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $c_scm_ArraySeq.prototype;
$c_scm_ArraySeq.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_scm_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_scm_ArraySeq.prototype.knownSize__I = (function() {
  return this.length__I();
});
$c_scm_ArraySeq.prototype.className__T = (function() {
  return "ArraySeq";
});
$c_scm_ArraySeq.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var srcLen = this.length__I();
  var destLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V(this.array__O(), 0, xs, start, copied);
  }
  return copied;
});
$c_scm_ArraySeq.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    var x2 = $as_scm_ArraySeq(other);
    var xs = this.array__O();
    var $x_1 = $m_jl_reflect_Array$().getLength__O__I(xs);
    var xs$1 = $n(x2).array__O();
    if (($x_1 !== $m_jl_reflect_Array$().getLength__O__I(xs$1))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$c_scm_ArraySeq.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_scm_ArraySeq$().scm_ArraySeq$__f_untagged;
});
function $as_scm_ArraySeq(obj) {
  return (((obj instanceof $c_scm_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq"));
}
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq)));
}
function $asArrayOf_scm_ArraySeq(obj, depth) {
  return (($isArrayOf_scm_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq;", depth));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.sci_ArraySeq$ofBoolean__f_unsafeArray = null;
  this.sci_ArraySeq$ofBoolean__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofBoolean.prototype.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $c_sci_ArraySeq$ofBoolean.prototype;
$c_sci_ArraySeq$ofBoolean.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofBoolean__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofBoolean.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofBoolean__f_unsafeArray;
  return this$1.arrayHash$mZc$sp__AZ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofBoolean.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofBoolean)) {
    var x2 = $as_sci_ArraySeq$ofBoolean(that);
    var a = this.sci_ArraySeq$ofBoolean__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofBoolean__f_unsafeArray;
    return $m_ju_Arrays$().equals__AZ__AZ__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofBoolean.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.sci_ArraySeq$ofBoolean__f_unsafeArray);
});
$c_sci_ArraySeq$ofBoolean.prototype.apply$mcZI$sp__I__Z = (function(i) {
  return $n(this.sci_ArraySeq$ofBoolean__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofBoolean.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcZI$sp__I__Z(i);
});
$c_sci_ArraySeq$ofBoolean.prototype.apply__I__O = (function(i) {
  return this.apply$mcZI$sp__I__Z(i);
});
$c_sci_ArraySeq$ofBoolean.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofBoolean__f_unsafeArray;
});
function $as_sci_ArraySeq$ofBoolean(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofBoolean) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofBoolean"));
}
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofBoolean)));
}
function $asArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofBoolean;", depth));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().initClass($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  sci_ArraySeq$ofBoolean: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.sci_ArraySeq$ofByte__f_unsafeArray = null;
  this.sci_ArraySeq$ofByte__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofByte.prototype.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $c_sci_ArraySeq$ofByte.prototype;
$c_sci_ArraySeq$ofByte.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofByte__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofByte.prototype.apply__I__B = (function(i) {
  return $n(this.sci_ArraySeq$ofByte__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofByte.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofByte__f_unsafeArray;
  return this$1.arrayHash$mBc$sp__AB__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofByte.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofByte)) {
    var x2 = $as_sci_ArraySeq$ofByte(that);
    var a = this.sci_ArraySeq$ofByte__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofByte__f_unsafeArray;
    return $m_ju_Arrays$().equals__AB__AB__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofByte.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.sci_ArraySeq$ofByte__f_unsafeArray);
});
$c_sci_ArraySeq$ofByte.prototype.apply__O__O = (function(v1) {
  return this.apply__I__B($uI(v1));
});
$c_sci_ArraySeq$ofByte.prototype.apply__I__O = (function(i) {
  return this.apply__I__B(i);
});
$c_sci_ArraySeq$ofByte.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofByte__f_unsafeArray;
});
function $as_sci_ArraySeq$ofByte(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofByte) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofByte"));
}
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofByte)));
}
function $asArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofByte(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofByte;", depth));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().initClass($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  sci_ArraySeq$ofByte: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.sci_ArraySeq$ofChar__f_unsafeArray = null;
  this.sci_ArraySeq$ofChar__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofChar.prototype.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $c_sci_ArraySeq$ofChar.prototype;
$c_sci_ArraySeq$ofChar.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofChar__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofChar.prototype.apply__I__C = (function(i) {
  return $n(this.sci_ArraySeq$ofChar__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofChar.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofChar__f_unsafeArray;
  return this$1.arrayHash$mCc$sp__AC__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofChar.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofChar)) {
    var x2 = $as_sci_ArraySeq$ofChar(that);
    var a = this.sci_ArraySeq$ofChar__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofChar__f_unsafeArray;
    return $m_ju_Arrays$().equals__AC__AC__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofChar.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.sci_ArraySeq$ofChar__f_unsafeArray);
});
$c_sci_ArraySeq$ofChar.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.sci_ArraySeq$ofChar__f_unsafeArray).addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end);
});
$c_sci_ArraySeq$ofChar.prototype.apply__O__O = (function(v1) {
  return $bC(this.apply__I__C($uI(v1)));
});
$c_sci_ArraySeq$ofChar.prototype.apply__I__O = (function(i) {
  return $bC(this.apply__I__C(i));
});
$c_sci_ArraySeq$ofChar.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofChar__f_unsafeArray;
});
function $as_sci_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofChar"));
}
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofChar)));
}
function $asArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofChar;", depth));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().initClass($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  sci_ArraySeq$ofChar: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.sci_ArraySeq$ofDouble__f_unsafeArray = null;
  this.sci_ArraySeq$ofDouble__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofDouble.prototype.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $c_sci_ArraySeq$ofDouble.prototype;
$c_sci_ArraySeq$ofDouble.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofDouble__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofDouble.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofDouble__f_unsafeArray;
  return this$1.arrayHash$mDc$sp__AD__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofDouble.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofDouble)) {
    var x2 = $as_sci_ArraySeq$ofDouble(that);
    var a = this.sci_ArraySeq$ofDouble__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofDouble__f_unsafeArray;
    return $m_ju_Arrays$().equals__AD__AD__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofDouble.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.sci_ArraySeq$ofDouble__f_unsafeArray);
});
$c_sci_ArraySeq$ofDouble.prototype.apply$mcDI$sp__I__D = (function(i) {
  return $n(this.sci_ArraySeq$ofDouble__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofDouble.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcDI$sp__I__D(i);
});
$c_sci_ArraySeq$ofDouble.prototype.apply__I__O = (function(i) {
  return this.apply$mcDI$sp__I__D(i);
});
$c_sci_ArraySeq$ofDouble.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofDouble__f_unsafeArray;
});
function $as_sci_ArraySeq$ofDouble(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofDouble) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofDouble"));
}
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofDouble)));
}
function $asArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofDouble(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofDouble;", depth));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().initClass($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  sci_ArraySeq$ofDouble: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.sci_ArraySeq$ofFloat__f_unsafeArray = null;
  this.sci_ArraySeq$ofFloat__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofFloat.prototype.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $c_sci_ArraySeq$ofFloat.prototype;
$c_sci_ArraySeq$ofFloat.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofFloat__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofFloat.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofFloat__f_unsafeArray;
  return this$1.arrayHash$mFc$sp__AF__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofFloat.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofFloat)) {
    var x2 = $as_sci_ArraySeq$ofFloat(that);
    var a = this.sci_ArraySeq$ofFloat__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofFloat__f_unsafeArray;
    return $m_ju_Arrays$().equals__AF__AF__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofFloat.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.sci_ArraySeq$ofFloat__f_unsafeArray);
});
$c_sci_ArraySeq$ofFloat.prototype.apply$mcFI$sp__I__F = (function(i) {
  return $n(this.sci_ArraySeq$ofFloat__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofFloat.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcFI$sp__I__F(i);
});
$c_sci_ArraySeq$ofFloat.prototype.apply__I__O = (function(i) {
  return this.apply$mcFI$sp__I__F(i);
});
$c_sci_ArraySeq$ofFloat.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofFloat__f_unsafeArray;
});
function $as_sci_ArraySeq$ofFloat(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofFloat) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofFloat"));
}
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofFloat)));
}
function $asArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofFloat(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofFloat;", depth));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().initClass($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  sci_ArraySeq$ofFloat: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.sci_ArraySeq$ofInt__f_unsafeArray = null;
  this.sci_ArraySeq$ofInt__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofInt.prototype.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $c_sci_ArraySeq$ofInt.prototype;
$c_sci_ArraySeq$ofInt.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofInt__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofInt.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofInt__f_unsafeArray;
  return this$1.arrayHash$mIc$sp__AI__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofInt.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofInt)) {
    var x2 = $as_sci_ArraySeq$ofInt(that);
    var a = this.sci_ArraySeq$ofInt__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofInt__f_unsafeArray;
    return $m_ju_Arrays$().equals__AI__AI__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofInt.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.sci_ArraySeq$ofInt__f_unsafeArray);
});
$c_sci_ArraySeq$ofInt.prototype.apply$mcII$sp__I__I = (function(i) {
  return $n(this.sci_ArraySeq$ofInt__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofInt.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcII$sp__I__I(i);
});
$c_sci_ArraySeq$ofInt.prototype.apply__I__O = (function(i) {
  return this.apply$mcII$sp__I__I(i);
});
$c_sci_ArraySeq$ofInt.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofInt__f_unsafeArray;
});
function $as_sci_ArraySeq$ofInt(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofInt"));
}
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofInt)));
}
function $asArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofInt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofInt;", depth));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().initClass($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  sci_ArraySeq$ofInt: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.sci_ArraySeq$ofLong__f_unsafeArray = null;
  this.sci_ArraySeq$ofLong__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofLong.prototype.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $c_sci_ArraySeq$ofLong.prototype;
$c_sci_ArraySeq$ofLong.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofLong__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofLong.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofLong__f_unsafeArray;
  return this$1.arrayHash$mJc$sp__AJ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofLong)) {
    var x2 = $as_sci_ArraySeq$ofLong(that);
    var a = this.sci_ArraySeq$ofLong__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofLong__f_unsafeArray;
    return $m_ju_Arrays$().equals__AJ__AJ__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofLong.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.sci_ArraySeq$ofLong__f_unsafeArray);
});
$c_sci_ArraySeq$ofLong.prototype.apply$mcJI$sp__I__J = (function(i) {
  return $n(this.sci_ArraySeq$ofLong__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofLong.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return this.apply$mcJI$sp__I__J(i);
});
$c_sci_ArraySeq$ofLong.prototype.apply__I__O = (function(i) {
  return this.apply$mcJI$sp__I__J(i);
});
$c_sci_ArraySeq$ofLong.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofLong__f_unsafeArray;
});
function $as_sci_ArraySeq$ofLong(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofLong) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofLong"));
}
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofLong)));
}
function $asArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofLong;", depth));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().initClass($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  sci_ArraySeq$ofLong: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.sci_ArraySeq$ofRef__f_unsafeArray = null;
  this.sci_ArraySeq$ofRef__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofRef.prototype.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $c_sci_ArraySeq$ofRef.prototype;
$c_sci_ArraySeq$ofRef.prototype.elemTag__s_reflect_ClassTag = (function() {
  var $x_1 = $m_s_reflect_ClassTag$();
  var this$1 = $n(this.sci_ArraySeq$ofRef__f_unsafeArray);
  var this$2 = $objectGetClass(this$1);
  return $x_1.apply__jl_Class__s_reflect_ClassTag(this$2.data.getComponentType());
});
$c_sci_ArraySeq$ofRef.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofRef.prototype.apply__I__O = (function(i) {
  return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofRef.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofRef__f_unsafeArray;
  return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofRef.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofRef)) {
    var x2 = $as_sci_ArraySeq$ofRef(that);
    return $m_s_Array$().equals__AO__AO__Z(this.sci_ArraySeq$ofRef__f_unsafeArray, $n(x2).sci_ArraySeq$ofRef__f_unsafeArray);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofRef.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.sci_ArraySeq$ofRef__f_unsafeArray);
});
$c_sci_ArraySeq$ofRef.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1));
});
$c_sci_ArraySeq$ofRef.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofRef__f_unsafeArray;
});
function $as_sci_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofRef"));
}
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofRef)));
}
function $asArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofRef;", depth));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().initClass($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  sci_ArraySeq$ofRef: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.sci_ArraySeq$ofShort__f_unsafeArray = null;
  this.sci_ArraySeq$ofShort__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofShort.prototype.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $c_sci_ArraySeq$ofShort.prototype;
$c_sci_ArraySeq$ofShort.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofShort__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofShort.prototype.apply__I__S = (function(i) {
  return $n(this.sci_ArraySeq$ofShort__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofShort.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofShort__f_unsafeArray;
  return this$1.arrayHash$mSc$sp__AS__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofShort.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofShort)) {
    var x2 = $as_sci_ArraySeq$ofShort(that);
    var a = this.sci_ArraySeq$ofShort__f_unsafeArray;
    var b = $n(x2).sci_ArraySeq$ofShort__f_unsafeArray;
    return $m_ju_Arrays$().equals__AS__AS__Z(a, b);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofShort.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.sci_ArraySeq$ofShort__f_unsafeArray);
});
$c_sci_ArraySeq$ofShort.prototype.apply__O__O = (function(v1) {
  return this.apply__I__S($uI(v1));
});
$c_sci_ArraySeq$ofShort.prototype.apply__I__O = (function(i) {
  return this.apply__I__S(i);
});
$c_sci_ArraySeq$ofShort.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofShort__f_unsafeArray;
});
function $as_sci_ArraySeq$ofShort(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofShort) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofShort"));
}
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofShort)));
}
function $asArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofShort(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofShort;", depth));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().initClass($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  sci_ArraySeq$ofShort: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.sci_ArraySeq$ofUnit__f_unsafeArray = null;
  this.sci_ArraySeq$ofUnit__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofUnit.prototype.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $c_sci_ArraySeq$ofUnit.prototype;
$c_sci_ArraySeq$ofUnit.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofUnit__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofUnit.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofUnit__f_unsafeArray;
  return this$1.arrayHash$mVc$sp__Ajl_Void__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofUnit.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofUnit)) {
    var x2 = $as_sci_ArraySeq$ofUnit(that);
    return ($n(this.sci_ArraySeq$ofUnit__f_unsafeArray).u.length === $n($n(x2).sci_ArraySeq$ofUnit__f_unsafeArray).u.length);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofUnit.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.sci_ArraySeq$ofUnit__f_unsafeArray);
});
$c_sci_ArraySeq$ofUnit.prototype.apply$mcVI$sp__I__V = (function(i) {
  $n(this.sci_ArraySeq$ofUnit__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofUnit.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  this.apply$mcVI$sp__I__V(i);
});
$c_sci_ArraySeq$ofUnit.prototype.apply__I__O = (function(i) {
  this.apply$mcVI$sp__I__V(i);
});
$c_sci_ArraySeq$ofUnit.prototype.unsafeArray__O = (function() {
  return this.sci_ArraySeq$ofUnit__f_unsafeArray;
});
function $as_sci_ArraySeq$ofUnit(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofUnit) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofUnit"));
}
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofUnit)));
}
function $asArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofUnit(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofUnit;", depth));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().initClass($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  sci_ArraySeq$ofUnit: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1);
    } else if ($n(xs).isEmpty__Z()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sci_List($n(xs).tail__O());
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var aEmpty = $n(a).isEmpty__Z();
      var bEmpty = $n(b).isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sci_List($n(a).tail__O());
        var temp$b = $as_sci_List($n(b).tail__O());
        a = temp$a;
        b = temp$b;
      } else {
        return (aEmpty && bEmpty);
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$c_sci_List.prototype = new $h_sci_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "LinearSeq";
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$c_sci_List.prototype.$colon$colon$colon__sci_List__sci_List = (function(prefix) {
  if (this.isEmpty__Z()) {
    return prefix;
  } else if ($n(prefix).isEmpty__Z()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon($n(prefix).head__O(), this);
    var curr = result;
    var that = $as_sci_List($n(prefix).tail__O());
    while ((!$n(that).isEmpty__Z())) {
      var temp = new $c_sci_$colon$colon($n(that).head__O(), this);
      $n(curr).sci_$colon$colon__f_next = temp;
      curr = temp;
      that = $as_sci_List($n(that).tail__O());
    }
    return result;
  }
});
$c_sci_List.prototype.isEmpty__Z = (function() {
  return (this === $m_sci_Nil$());
});
$c_sci_List.prototype.prependedAll__sc_IterableOnce__sci_List = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    var x2 = $as_sci_List(prefix);
    return this.$colon$colon$colon__sci_List__sci_List(x2);
  }
  if (($n(prefix).knownSize__I() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    var x3 = $as_scm_ListBuffer(prefix);
    if (this.isEmpty__Z()) {
      return $n(x3).toList__sci_List();
    }
  }
  var iter = $n(prefix).iterator__sc_Iterator();
  if ($n(iter).hasNext__Z()) {
    var result = new $c_sci_$colon$colon($n(iter).next__O(), this);
    var curr = result;
    while ($n(iter).hasNext__Z()) {
      var temp = new $c_sci_$colon$colon($n(iter).next__O(), this);
      $n(curr).sci_$colon$colon__f_next = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$c_sci_List.prototype.map__F1__sci_List = (function(f) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon($n(f).apply__O__O(this.head__O()), $m_sci_Nil$());
    var t = h;
    var rest = $as_sci_List(this.tail__O());
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon($n(f).apply__O__O($n(rest).head__O()), $m_sci_Nil$());
      $n(t).sci_$colon$colon__f_next = nx;
      t = nx;
      rest = $as_sci_List($n(rest).tail__O());
    }
    return h;
  }
});
$c_sci_List.prototype.length__I = (function() {
  var these = this;
  var len = 0;
  while ((!$n(these).isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sci_List($n(these).tail__O());
  }
  return len;
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$c_sci_List.prototype.className__T = (function() {
  return "List";
});
$c_sci_List.prototype.equals__O__Z = (function(o) {
  if ((o instanceof $c_sci_List)) {
    var x2 = $as_sci_List(o);
    return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2);
  } else {
    return $f_sc_Seq__equals__O__Z(this, o);
  }
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$c_sci_List.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_List(f);
});
$c_sci_List.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sci_List$();
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"));
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)));
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.sci_Vector__f_prefix1 = null;
}
$c_sci_VectorImpl.prototype = new $h_sci_Vector();
$c_sci_VectorImpl.prototype.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $c_sci_VectorImpl.prototype;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.scm_ArraySeq$ofBoolean__f_array = null;
  this.scm_ArraySeq$ofBoolean__f_array = array;
}
$c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofBoolean.prototype.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $c_scm_ArraySeq$ofBoolean.prototype;
$c_scm_ArraySeq$ofBoolean.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofBoolean__f_array).u.length;
});
$c_scm_ArraySeq$ofBoolean.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofBoolean__f_array;
  return this$1.arrayHash$mZc$sp__AZ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofBoolean.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofBoolean)) {
    var x2 = $as_scm_ArraySeq$ofBoolean(that);
    var a = this.scm_ArraySeq$ofBoolean__f_array;
    var b = $n(x2).scm_ArraySeq$ofBoolean__f_array;
    return $m_ju_Arrays$().equals__AZ__AZ__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofBoolean.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.scm_ArraySeq$ofBoolean__f_array);
});
$c_scm_ArraySeq$ofBoolean.prototype.apply$mcZI$sp__I__Z = (function(index) {
  return $n(this.scm_ArraySeq$ofBoolean__f_array).get(index);
});
$c_scm_ArraySeq$ofBoolean.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcZI$sp__I__Z(index);
});
$c_scm_ArraySeq$ofBoolean.prototype.apply__I__O = (function(i) {
  return this.apply$mcZI$sp__I__Z(i);
});
$c_scm_ArraySeq$ofBoolean.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofBoolean__f_array;
});
function $as_scm_ArraySeq$ofBoolean(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofBoolean) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofBoolean"));
}
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofBoolean)));
}
function $asArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofBoolean;", depth));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().initClass($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  scm_ArraySeq$ofBoolean: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.scm_ArraySeq$ofByte__f_array = null;
  this.scm_ArraySeq$ofByte__f_array = array;
}
$c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofByte.prototype.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $c_scm_ArraySeq$ofByte.prototype;
$c_scm_ArraySeq$ofByte.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofByte__f_array).u.length;
});
$c_scm_ArraySeq$ofByte.prototype.apply__I__B = (function(index) {
  return $n(this.scm_ArraySeq$ofByte__f_array).get(index);
});
$c_scm_ArraySeq$ofByte.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofByte__f_array;
  return this$1.arrayHash$mBc$sp__AB__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofByte.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofByte)) {
    var x2 = $as_scm_ArraySeq$ofByte(that);
    var a = this.scm_ArraySeq$ofByte__f_array;
    var b = $n(x2).scm_ArraySeq$ofByte__f_array;
    return $m_ju_Arrays$().equals__AB__AB__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofByte.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.scm_ArraySeq$ofByte__f_array);
});
$c_scm_ArraySeq$ofByte.prototype.apply__O__O = (function(v1) {
  return this.apply__I__B($uI(v1));
});
$c_scm_ArraySeq$ofByte.prototype.apply__I__O = (function(i) {
  return this.apply__I__B(i);
});
$c_scm_ArraySeq$ofByte.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofByte__f_array;
});
function $as_scm_ArraySeq$ofByte(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofByte) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofByte"));
}
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofByte)));
}
function $asArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofByte(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofByte;", depth));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().initClass($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  scm_ArraySeq$ofByte: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.scm_ArraySeq$ofChar__f_array = null;
  this.scm_ArraySeq$ofChar__f_array = array;
}
$c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofChar.prototype.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $c_scm_ArraySeq$ofChar.prototype;
$c_scm_ArraySeq$ofChar.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofChar__f_array).u.length;
});
$c_scm_ArraySeq$ofChar.prototype.apply__I__C = (function(index) {
  return $n(this.scm_ArraySeq$ofChar__f_array).get(index);
});
$c_scm_ArraySeq$ofChar.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofChar__f_array;
  return this$1.arrayHash$mCc$sp__AC__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofChar.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofChar)) {
    var x2 = $as_scm_ArraySeq$ofChar(that);
    var a = this.scm_ArraySeq$ofChar__f_array;
    var b = $n(x2).scm_ArraySeq$ofChar__f_array;
    return $m_ju_Arrays$().equals__AC__AC__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofChar.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.scm_ArraySeq$ofChar__f_array);
});
$c_scm_ArraySeq$ofChar.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  var jsb = $n(sb).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  }
  var len = $n(this.scm_ArraySeq$ofChar__f_array).u.length;
  if ((len !== 0)) {
    var this$3 = $n(sep);
    if ((this$3 === "")) {
      $n(jsb).append__AC__jl_StringBuilder(this.scm_ArraySeq$ofChar__f_array);
    } else {
      $n(jsb);
      $n(jsb).length__I();
      $n(end);
      $n(sep);
      var this$6 = $n(jsb);
      var c = $n(this.scm_ArraySeq$ofChar__f_array).get(0);
      var str = ("" + $cToS(c));
      this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
      var i = 1;
      while ((i < len)) {
        var this$8 = $n(jsb);
        this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$9 = $n(jsb);
        var c$1 = $n(this.scm_ArraySeq$ofChar__f_array).get(i);
        var str$1 = ("" + $cToS(c$1));
        this$9.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$9.jl_StringBuilder__f_java$lang$StringBuilder$$content + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  var this$11 = $n(end);
  if ((this$11.length !== 0)) {
    var this$12 = $n(jsb);
    this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  }
  return sb;
});
$c_scm_ArraySeq$ofChar.prototype.apply__O__O = (function(v1) {
  return $bC(this.apply__I__C($uI(v1)));
});
$c_scm_ArraySeq$ofChar.prototype.apply__I__O = (function(i) {
  return $bC(this.apply__I__C(i));
});
$c_scm_ArraySeq$ofChar.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofChar__f_array;
});
function $as_scm_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofChar"));
}
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofChar)));
}
function $asArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofChar;", depth));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().initClass($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  scm_ArraySeq$ofChar: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.scm_ArraySeq$ofDouble__f_array = null;
  this.scm_ArraySeq$ofDouble__f_array = array;
}
$c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofDouble.prototype.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $c_scm_ArraySeq$ofDouble.prototype;
$c_scm_ArraySeq$ofDouble.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofDouble__f_array).u.length;
});
$c_scm_ArraySeq$ofDouble.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofDouble__f_array;
  return this$1.arrayHash$mDc$sp__AD__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofDouble.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
    var x2 = $as_scm_ArraySeq$ofDouble(that);
    var a = this.scm_ArraySeq$ofDouble__f_array;
    var b = $n(x2).scm_ArraySeq$ofDouble__f_array;
    return $m_ju_Arrays$().equals__AD__AD__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofDouble.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.scm_ArraySeq$ofDouble__f_array);
});
$c_scm_ArraySeq$ofDouble.prototype.apply$mcDI$sp__I__D = (function(index) {
  return $n(this.scm_ArraySeq$ofDouble__f_array).get(index);
});
$c_scm_ArraySeq$ofDouble.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcDI$sp__I__D(index);
});
$c_scm_ArraySeq$ofDouble.prototype.apply__I__O = (function(i) {
  return this.apply$mcDI$sp__I__D(i);
});
$c_scm_ArraySeq$ofDouble.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofDouble__f_array;
});
function $as_scm_ArraySeq$ofDouble(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofDouble) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofDouble"));
}
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofDouble)));
}
function $asArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofDouble(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofDouble;", depth));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().initClass($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  scm_ArraySeq$ofDouble: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.scm_ArraySeq$ofFloat__f_array = null;
  this.scm_ArraySeq$ofFloat__f_array = array;
}
$c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofFloat.prototype.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $c_scm_ArraySeq$ofFloat.prototype;
$c_scm_ArraySeq$ofFloat.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofFloat__f_array).u.length;
});
$c_scm_ArraySeq$ofFloat.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofFloat__f_array;
  return this$1.arrayHash$mFc$sp__AF__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofFloat.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
    var x2 = $as_scm_ArraySeq$ofFloat(that);
    var a = this.scm_ArraySeq$ofFloat__f_array;
    var b = $n(x2).scm_ArraySeq$ofFloat__f_array;
    return $m_ju_Arrays$().equals__AF__AF__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofFloat.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.scm_ArraySeq$ofFloat__f_array);
});
$c_scm_ArraySeq$ofFloat.prototype.apply$mcFI$sp__I__F = (function(index) {
  return $n(this.scm_ArraySeq$ofFloat__f_array).get(index);
});
$c_scm_ArraySeq$ofFloat.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcFI$sp__I__F(index);
});
$c_scm_ArraySeq$ofFloat.prototype.apply__I__O = (function(i) {
  return this.apply$mcFI$sp__I__F(i);
});
$c_scm_ArraySeq$ofFloat.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofFloat__f_array;
});
function $as_scm_ArraySeq$ofFloat(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofFloat) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofFloat"));
}
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofFloat)));
}
function $asArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofFloat(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofFloat;", depth));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().initClass($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  scm_ArraySeq$ofFloat: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.scm_ArraySeq$ofInt__f_array = null;
  this.scm_ArraySeq$ofInt__f_array = array;
}
$c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofInt.prototype.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $c_scm_ArraySeq$ofInt.prototype;
$c_scm_ArraySeq$ofInt.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofInt__f_array).u.length;
});
$c_scm_ArraySeq$ofInt.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofInt__f_array;
  return this$1.arrayHash$mIc$sp__AI__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofInt.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofInt)) {
    var x2 = $as_scm_ArraySeq$ofInt(that);
    var a = this.scm_ArraySeq$ofInt__f_array;
    var b = $n(x2).scm_ArraySeq$ofInt__f_array;
    return $m_ju_Arrays$().equals__AI__AI__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofInt.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.scm_ArraySeq$ofInt__f_array);
});
$c_scm_ArraySeq$ofInt.prototype.apply$mcII$sp__I__I = (function(index) {
  return $n(this.scm_ArraySeq$ofInt__f_array).get(index);
});
$c_scm_ArraySeq$ofInt.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcII$sp__I__I(index);
});
$c_scm_ArraySeq$ofInt.prototype.apply__I__O = (function(i) {
  return this.apply$mcII$sp__I__I(i);
});
$c_scm_ArraySeq$ofInt.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofInt__f_array;
});
function $as_scm_ArraySeq$ofInt(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofInt"));
}
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofInt)));
}
function $asArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofInt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofInt;", depth));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().initClass($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  scm_ArraySeq$ofInt: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.scm_ArraySeq$ofLong__f_array = null;
  this.scm_ArraySeq$ofLong__f_array = array;
}
$c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofLong.prototype.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $c_scm_ArraySeq$ofLong.prototype;
$c_scm_ArraySeq$ofLong.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofLong__f_array).u.length;
});
$c_scm_ArraySeq$ofLong.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofLong__f_array;
  return this$1.arrayHash$mJc$sp__AJ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofLong)) {
    var x2 = $as_scm_ArraySeq$ofLong(that);
    var a = this.scm_ArraySeq$ofLong__f_array;
    var b = $n(x2).scm_ArraySeq$ofLong__f_array;
    return $m_ju_Arrays$().equals__AJ__AJ__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofLong.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.scm_ArraySeq$ofLong__f_array);
});
$c_scm_ArraySeq$ofLong.prototype.apply$mcJI$sp__I__J = (function(index) {
  return $n(this.scm_ArraySeq$ofLong__f_array).get(index);
});
$c_scm_ArraySeq$ofLong.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcJI$sp__I__J(index);
});
$c_scm_ArraySeq$ofLong.prototype.apply__I__O = (function(i) {
  return this.apply$mcJI$sp__I__J(i);
});
$c_scm_ArraySeq$ofLong.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofLong__f_array;
});
function $as_scm_ArraySeq$ofLong(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofLong) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofLong"));
}
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofLong)));
}
function $asArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofLong;", depth));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().initClass($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  scm_ArraySeq$ofLong: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.scm_ArraySeq$ofRef__f_array = null;
  this.scm_ArraySeq$ofRef__f_array = array;
}
$c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofRef.prototype.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $c_scm_ArraySeq$ofRef.prototype;
$c_scm_ArraySeq$ofRef.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofRef__f_array).u.length;
});
$c_scm_ArraySeq$ofRef.prototype.apply__I__O = (function(index) {
  return $n(this.scm_ArraySeq$ofRef__f_array).get(index);
});
$c_scm_ArraySeq$ofRef.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofRef__f_array;
  return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofRef.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofRef)) {
    var x2 = $as_scm_ArraySeq$ofRef(that);
    return $m_s_Array$().equals__AO__AO__Z(this.scm_ArraySeq$ofRef__f_array, $n(x2).scm_ArraySeq$ofRef__f_array);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofRef.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.scm_ArraySeq$ofRef__f_array);
});
$c_scm_ArraySeq$ofRef.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1));
});
$c_scm_ArraySeq$ofRef.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofRef__f_array;
});
function $as_scm_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofRef"));
}
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofRef)));
}
function $asArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofRef;", depth));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().initClass($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  scm_ArraySeq$ofRef: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.scm_ArraySeq$ofShort__f_array = null;
  this.scm_ArraySeq$ofShort__f_array = array;
}
$c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofShort.prototype.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $c_scm_ArraySeq$ofShort.prototype;
$c_scm_ArraySeq$ofShort.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofShort__f_array).u.length;
});
$c_scm_ArraySeq$ofShort.prototype.apply__I__S = (function(index) {
  return $n(this.scm_ArraySeq$ofShort__f_array).get(index);
});
$c_scm_ArraySeq$ofShort.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofShort__f_array;
  return this$1.arrayHash$mSc$sp__AS__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofShort.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofShort)) {
    var x2 = $as_scm_ArraySeq$ofShort(that);
    var a = this.scm_ArraySeq$ofShort__f_array;
    var b = $n(x2).scm_ArraySeq$ofShort__f_array;
    return $m_ju_Arrays$().equals__AS__AS__Z(a, b);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofShort.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.scm_ArraySeq$ofShort__f_array);
});
$c_scm_ArraySeq$ofShort.prototype.apply__O__O = (function(v1) {
  return this.apply__I__S($uI(v1));
});
$c_scm_ArraySeq$ofShort.prototype.apply__I__O = (function(i) {
  return this.apply__I__S(i);
});
$c_scm_ArraySeq$ofShort.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofShort__f_array;
});
function $as_scm_ArraySeq$ofShort(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofShort) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofShort"));
}
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofShort)));
}
function $asArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofShort(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofShort;", depth));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().initClass($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  scm_ArraySeq$ofShort: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.scm_ArraySeq$ofUnit__f_array = null;
  this.scm_ArraySeq$ofUnit__f_array = array;
}
$c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofUnit.prototype.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $c_scm_ArraySeq$ofUnit.prototype;
$c_scm_ArraySeq$ofUnit.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofUnit__f_array).u.length;
});
$c_scm_ArraySeq$ofUnit.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofUnit__f_array;
  return this$1.arrayHash$mVc$sp__Ajl_Void__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_scm_ArraySeq$ofUnit.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofUnit)) {
    var x2 = $as_scm_ArraySeq$ofUnit(that);
    return ($n(this.scm_ArraySeq$ofUnit__f_array).u.length === $n($n(x2).scm_ArraySeq$ofUnit__f_array).u.length);
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
  }
});
$c_scm_ArraySeq$ofUnit.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.scm_ArraySeq$ofUnit__f_array);
});
$c_scm_ArraySeq$ofUnit.prototype.apply$mcVI$sp__I__V = (function(index) {
  $n(this.scm_ArraySeq$ofUnit__f_array).get(index);
});
$c_scm_ArraySeq$ofUnit.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  this.apply$mcVI$sp__I__V(index);
});
$c_scm_ArraySeq$ofUnit.prototype.apply__I__O = (function(i) {
  this.apply$mcVI$sp__I__V(i);
});
$c_scm_ArraySeq$ofUnit.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofUnit__f_array;
});
function $as_scm_ArraySeq$ofUnit(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofUnit) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofUnit"));
}
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofUnit)));
}
function $asArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofUnit(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofUnit;", depth));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().initClass($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  scm_ArraySeq$ofUnit: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.sci_BigVector__f_suffix1 = suffix1;
  $thiz.sci_BigVector__f_length0 = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
}
$c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$c_sci_BigVector.prototype.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $c_sci_BigVector.prototype;
function $as_sci_BigVector(obj) {
  return (((obj instanceof $c_sci_BigVector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BigVector"));
}
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BigVector)));
}
function $asArrayOf_sci_BigVector(obj, depth) {
  return (($isArrayOf_sci_BigVector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BigVector;", depth));
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.sci_Vector__f_prefix1 = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$c_sci_Vector1.prototype.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $c_sci_Vector1.prototype;
$c_sci_Vector1.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
    return $n(this.sci_Vector__f_prefix1).get(index);
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector1.prototype.map__F1__sci_Vector = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f));
});
$c_sci_Vector1.prototype.vectorSliceCount__I = (function() {
  return 1;
});
$c_sci_Vector1.prototype.vectorSlice__I__AO = (function(idx) {
  return this.sci_Vector__f_prefix1;
});
$c_sci_Vector1.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_Vector(f);
});
$c_sci_Vector1.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
    return $n(this.sci_Vector__f_prefix1).get(index);
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector1(obj) {
  return (((obj instanceof $c_sci_Vector1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector1"));
}
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector1)));
}
function $asArrayOf_sci_Vector1(obj, depth) {
  return (($isArrayOf_sci_Vector1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector1;", depth));
}
var $d_sci_Vector1 = new $TypeData().initClass($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  sci_Vector1: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.sci_$colon$colon__f_head = null;
  this.sci_$colon$colon__f_next = null;
  this.sci_$colon$colon__f_head = head;
  this.sci_$colon$colon__f_next = next;
}
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.sci_$colon$colon__f_head;
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::";
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2;
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.sci_$colon$colon__f_head;
      break;
    }
    case 1: {
      return this.sci_$colon$colon__f_next;
      break;
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1);
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.sci_$colon$colon__f_next;
});
var $d_sci_$colon$colon = new $TypeData().initClass($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
}));
/** @constructor */
function $c_sci_Nil$() {
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$c_sci_Nil$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$c_sci_Nil$.prototype.knownSize__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil";
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1);
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_sci_Nil$.prototype.tail__O = (function() {
  this.tail__E();
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E();
});
var $d_sci_Nil$ = new $TypeData().initClass($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
/** @constructor */
function $c_sci_Vector0$() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, 0);
}
$c_sci_Vector0$.prototype = new $h_sci_BigVector();
$c_sci_Vector0$.prototype.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $c_sci_Vector0$.prototype;
$c_sci_Vector0$.prototype.apply__I__E = (function(index) {
  throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
});
$c_sci_Vector0$.prototype.vectorSliceCount__I = (function() {
  return 0;
});
$c_sci_Vector0$.prototype.vectorSlice__I__AO = (function(idx) {
  return null;
});
$c_sci_Vector0$.prototype.equals__O__Z = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$c_sci_Vector0$.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$c_sci_Vector0$.prototype.map__F1__O = (function(f) {
  return this;
});
$c_sci_Vector0$.prototype.apply__O__O = (function(v1) {
  this.apply__I__E($uI(v1));
});
$c_sci_Vector0$.prototype.apply__I__O = (function(i) {
  this.apply__I__E(i);
});
var $d_sci_Vector0$ = new $TypeData().initClass($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  sci_Vector0$: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$();
  }
  return $n_sci_Vector0$;
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector2__f_len1 = 0;
  this.sci_Vector2__f_data2 = null;
  this.sci_Vector2__f_len1 = len1;
  this.sci_Vector2__f_data2 = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector2.prototype = new $h_sci_BigVector();
$c_sci_Vector2.prototype.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $c_sci_Vector2.prototype;
$c_sci_Vector2.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector2.prototype.map__F1__sci_Vector = (function(f) {
  var x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
  var x$2 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector2__f_data2, f), 2);
  var x$3 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
  var x$4 = this.sci_Vector2__f_len1;
  var x$5 = this.sci_BigVector__f_length0;
  return new $c_sci_Vector2(x$1, x$4, x$2, x$3, x$5);
});
$c_sci_Vector2.prototype.vectorSliceCount__I = (function() {
  return 3;
});
$c_sci_Vector2.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector2__f_data2;
      break;
    }
    case 2: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector2.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_Vector(f);
});
$c_sci_Vector2.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector2(obj) {
  return (((obj instanceof $c_sci_Vector2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector2"));
}
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector2)));
}
function $asArrayOf_sci_Vector2(obj, depth) {
  return (($isArrayOf_sci_Vector2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector2;", depth));
}
var $d_sci_Vector2 = new $TypeData().initClass($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  sci_Vector2: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector3__f_len1 = 0;
  this.sci_Vector3__f_prefix2 = null;
  this.sci_Vector3__f_len12 = 0;
  this.sci_Vector3__f_data3 = null;
  this.sci_Vector3__f_suffix2 = null;
  this.sci_Vector3__f_len1 = len1;
  this.sci_Vector3__f_prefix2 = prefix2;
  this.sci_Vector3__f_len12 = len12;
  this.sci_Vector3__f_data3 = data3;
  this.sci_Vector3__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector3.prototype = new $h_sci_BigVector();
$c_sci_Vector3.prototype.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $c_sci_Vector3.prototype;
$c_sci_Vector3.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)));
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector3.prototype.map__F1__sci_Vector = (function(f) {
  var x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
  var x$2 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector3__f_prefix2, f), 2);
  var x$3 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector3__f_data3, f), 3);
  var x$4 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector3__f_suffix2, f), 2);
  var x$5 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
  var x$6 = this.sci_Vector3__f_len1;
  var x$7 = this.sci_Vector3__f_len12;
  var x$8 = this.sci_BigVector__f_length0;
  return new $c_sci_Vector3(x$1, x$6, x$2, x$7, x$3, x$4, x$5, x$8);
});
$c_sci_Vector3.prototype.vectorSliceCount__I = (function() {
  return 5;
});
$c_sci_Vector3.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector3__f_prefix2;
      break;
    }
    case 2: {
      return this.sci_Vector3__f_data3;
      break;
    }
    case 3: {
      return this.sci_Vector3__f_suffix2;
      break;
    }
    case 4: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector3.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_Vector(f);
});
$c_sci_Vector3.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)));
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector3(obj) {
  return (((obj instanceof $c_sci_Vector3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector3"));
}
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector3)));
}
function $asArrayOf_sci_Vector3(obj, depth) {
  return (($isArrayOf_sci_Vector3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector3;", depth));
}
var $d_sci_Vector3 = new $TypeData().initClass($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  sci_Vector3: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector4__f_len1 = 0;
  this.sci_Vector4__f_prefix2 = null;
  this.sci_Vector4__f_len12 = 0;
  this.sci_Vector4__f_prefix3 = null;
  this.sci_Vector4__f_len123 = 0;
  this.sci_Vector4__f_data4 = null;
  this.sci_Vector4__f_suffix3 = null;
  this.sci_Vector4__f_suffix2 = null;
  this.sci_Vector4__f_len1 = len1;
  this.sci_Vector4__f_prefix2 = prefix2;
  this.sci_Vector4__f_len12 = len12;
  this.sci_Vector4__f_prefix3 = prefix3;
  this.sci_Vector4__f_len123 = len123;
  this.sci_Vector4__f_data4 = data4;
  this.sci_Vector4__f_suffix3 = suffix3;
  this.sci_Vector4__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector4.prototype = new $h_sci_BigVector();
$c_sci_Vector4.prototype.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $c_sci_Vector4.prototype;
$c_sci_Vector4.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))));
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector4.prototype.map__F1__sci_Vector = (function(f) {
  var x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
  var x$2 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector4__f_prefix2, f), 2);
  var x$3 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector4__f_prefix3, f), 3);
  var x$4 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector4__f_data4, f), 4);
  var x$5 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector4__f_suffix3, f), 3);
  var x$6 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector4__f_suffix2, f), 2);
  var x$7 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
  var x$8 = this.sci_Vector4__f_len1;
  var x$9 = this.sci_Vector4__f_len12;
  var x$10 = this.sci_Vector4__f_len123;
  var x$11 = this.sci_BigVector__f_length0;
  return new $c_sci_Vector4(x$1, x$8, x$2, x$9, x$3, x$10, x$4, x$5, x$6, x$7, x$11);
});
$c_sci_Vector4.prototype.vectorSliceCount__I = (function() {
  return 7;
});
$c_sci_Vector4.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector4__f_prefix2;
      break;
    }
    case 2: {
      return this.sci_Vector4__f_prefix3;
      break;
    }
    case 3: {
      return this.sci_Vector4__f_data4;
      break;
    }
    case 4: {
      return this.sci_Vector4__f_suffix3;
      break;
    }
    case 5: {
      return this.sci_Vector4__f_suffix2;
      break;
    }
    case 6: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector4.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_Vector(f);
});
$c_sci_Vector4.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))));
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector4(obj) {
  return (((obj instanceof $c_sci_Vector4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector4"));
}
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector4)));
}
function $asArrayOf_sci_Vector4(obj, depth) {
  return (($isArrayOf_sci_Vector4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector4;", depth));
}
var $d_sci_Vector4 = new $TypeData().initClass($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  sci_Vector4: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector5__f_len1 = 0;
  this.sci_Vector5__f_prefix2 = null;
  this.sci_Vector5__f_len12 = 0;
  this.sci_Vector5__f_prefix3 = null;
  this.sci_Vector5__f_len123 = 0;
  this.sci_Vector5__f_prefix4 = null;
  this.sci_Vector5__f_len1234 = 0;
  this.sci_Vector5__f_data5 = null;
  this.sci_Vector5__f_suffix4 = null;
  this.sci_Vector5__f_suffix3 = null;
  this.sci_Vector5__f_suffix2 = null;
  this.sci_Vector5__f_len1 = len1;
  this.sci_Vector5__f_prefix2 = prefix2;
  this.sci_Vector5__f_len12 = len12;
  this.sci_Vector5__f_prefix3 = prefix3;
  this.sci_Vector5__f_len123 = len123;
  this.sci_Vector5__f_prefix4 = prefix4;
  this.sci_Vector5__f_len1234 = len1234;
  this.sci_Vector5__f_data5 = data5;
  this.sci_Vector5__f_suffix4 = suffix4;
  this.sci_Vector5__f_suffix3 = suffix3;
  this.sci_Vector5__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector5.prototype = new $h_sci_BigVector();
$c_sci_Vector5.prototype.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $c_sci_Vector5.prototype;
$c_sci_Vector5.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))));
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector5.prototype.map__F1__sci_Vector = (function(f) {
  var x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
  var x$2 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector5__f_prefix2, f), 2);
  var x$3 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector5__f_prefix3, f), 3);
  var x$4 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector5__f_prefix4, f), 4);
  var x$5 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(5, this.sci_Vector5__f_data5, f), 5);
  var x$6 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector5__f_suffix4, f), 4);
  var x$7 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector5__f_suffix3, f), 3);
  var x$8 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector5__f_suffix2, f), 2);
  var x$9 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
  var x$10 = this.sci_Vector5__f_len1;
  var x$11 = this.sci_Vector5__f_len12;
  var x$12 = this.sci_Vector5__f_len123;
  var x$13 = this.sci_Vector5__f_len1234;
  var x$14 = this.sci_BigVector__f_length0;
  return new $c_sci_Vector5(x$1, x$10, x$2, x$11, x$3, x$12, x$4, x$13, x$5, x$6, x$7, x$8, x$9, x$14);
});
$c_sci_Vector5.prototype.vectorSliceCount__I = (function() {
  return 9;
});
$c_sci_Vector5.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector5__f_prefix2;
      break;
    }
    case 2: {
      return this.sci_Vector5__f_prefix3;
      break;
    }
    case 3: {
      return this.sci_Vector5__f_prefix4;
      break;
    }
    case 4: {
      return this.sci_Vector5__f_data5;
      break;
    }
    case 5: {
      return this.sci_Vector5__f_suffix4;
      break;
    }
    case 6: {
      return this.sci_Vector5__f_suffix3;
      break;
    }
    case 7: {
      return this.sci_Vector5__f_suffix2;
      break;
    }
    case 8: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector5.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_Vector(f);
});
$c_sci_Vector5.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))));
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector5(obj) {
  return (((obj instanceof $c_sci_Vector5) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector5"));
}
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector5)));
}
function $asArrayOf_sci_Vector5(obj, depth) {
  return (($isArrayOf_sci_Vector5(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector5;", depth));
}
var $d_sci_Vector5 = new $TypeData().initClass($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  sci_Vector5: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector6__f_len1 = 0;
  this.sci_Vector6__f_prefix2 = null;
  this.sci_Vector6__f_len12 = 0;
  this.sci_Vector6__f_prefix3 = null;
  this.sci_Vector6__f_len123 = 0;
  this.sci_Vector6__f_prefix4 = null;
  this.sci_Vector6__f_len1234 = 0;
  this.sci_Vector6__f_prefix5 = null;
  this.sci_Vector6__f_len12345 = 0;
  this.sci_Vector6__f_data6 = null;
  this.sci_Vector6__f_suffix5 = null;
  this.sci_Vector6__f_suffix4 = null;
  this.sci_Vector6__f_suffix3 = null;
  this.sci_Vector6__f_suffix2 = null;
  this.sci_Vector6__f_len1 = len1;
  this.sci_Vector6__f_prefix2 = prefix2;
  this.sci_Vector6__f_len12 = len12;
  this.sci_Vector6__f_prefix3 = prefix3;
  this.sci_Vector6__f_len123 = len123;
  this.sci_Vector6__f_prefix4 = prefix4;
  this.sci_Vector6__f_len1234 = len1234;
  this.sci_Vector6__f_prefix5 = prefix5;
  this.sci_Vector6__f_len12345 = len12345;
  this.sci_Vector6__f_data6 = data6;
  this.sci_Vector6__f_suffix5 = suffix5;
  this.sci_Vector6__f_suffix4 = suffix4;
  this.sci_Vector6__f_suffix3 = suffix3;
  this.sci_Vector6__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector6.prototype = new $h_sci_BigVector();
$c_sci_Vector6.prototype.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $c_sci_Vector6.prototype;
$c_sci_Vector6.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))));
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4));
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector6.prototype.map__F1__sci_Vector = (function(f) {
  var x$1 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_Vector__f_prefix1, f);
  var x$2 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector6__f_prefix2, f), 2);
  var x$3 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector6__f_prefix3, f), 3);
  var x$4 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector6__f_prefix4, f), 4);
  var x$5 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(5, this.sci_Vector6__f_prefix5, f), 5);
  var x$6 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(6, this.sci_Vector6__f_data6, f), 6);
  var x$7 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(5, this.sci_Vector6__f_suffix5, f), 5);
  var x$8 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(4, this.sci_Vector6__f_suffix4, f), 4);
  var x$9 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(3, this.sci_Vector6__f_suffix3, f), 3);
  var x$10 = $asArrayOf_O($m_sci_VectorStatics$().mapElems__I__AO__F1__AO(2, this.sci_Vector6__f_suffix2, f), 2);
  var x$11 = $m_sci_VectorStatics$().mapElems1__AO__F1__AO(this.sci_BigVector__f_suffix1, f);
  var x$12 = this.sci_Vector6__f_len1;
  var x$13 = this.sci_Vector6__f_len12;
  var x$14 = this.sci_Vector6__f_len123;
  var x$15 = this.sci_Vector6__f_len1234;
  var x$16 = this.sci_Vector6__f_len12345;
  var x$17 = this.sci_BigVector__f_length0;
  return new $c_sci_Vector6(x$1, x$12, x$2, x$13, x$3, x$14, x$4, x$15, x$5, x$16, x$6, x$7, x$8, x$9, x$10, x$11, x$17);
});
$c_sci_Vector6.prototype.vectorSliceCount__I = (function() {
  return 11;
});
$c_sci_Vector6.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector6__f_prefix2;
      break;
    }
    case 2: {
      return this.sci_Vector6__f_prefix3;
      break;
    }
    case 3: {
      return this.sci_Vector6__f_prefix4;
      break;
    }
    case 4: {
      return this.sci_Vector6__f_prefix5;
      break;
    }
    case 5: {
      return this.sci_Vector6__f_data6;
      break;
    }
    case 6: {
      return this.sci_Vector6__f_suffix5;
      break;
    }
    case 7: {
      return this.sci_Vector6__f_suffix4;
      break;
    }
    case 8: {
      return this.sci_Vector6__f_suffix3;
      break;
    }
    case 9: {
      return this.sci_Vector6__f_suffix2;
      break;
    }
    case 10: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector6.prototype.map__F1__O = (function(f) {
  return this.map__F1__sci_Vector(f);
});
$c_sci_Vector6.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))));
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4));
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector6(obj) {
  return (((obj instanceof $c_sci_Vector6) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector6"));
}
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector6)));
}
function $asArrayOf_sci_Vector6(obj, depth) {
  return (($isArrayOf_sci_Vector6(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector6;", depth));
}
var $d_sci_Vector6 = new $TypeData().initClass($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  sci_Vector6: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null;
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$1);
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  var x = $n(this.scm_StringBuilder__f_underlying).length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_scm_StringBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.knownSize__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.addOne__C__scm_StringBuilder = (function(x) {
  var this$1 = $n(this.scm_StringBuilder__f_underlying);
  var str = ("" + $cToS(x));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
  return this;
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_scm_StringBuilder.prototype.toArray__s_reflect_ClassTag__O = (function(ct) {
  var x1 = $n(ct).runtimeClass__jl_Class();
  return ((x1 === $d_C.getClassOf()) ? this.toCharArray__AC() : $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(this, ct));
});
$c_scm_StringBuilder.prototype.toCharArray__AC = (function() {
  var len = $n(this.scm_StringBuilder__f_underlying).length__I();
  var arr = new $ac_C(len);
  $n(this.scm_StringBuilder__f_underlying).getChars__I__I__AC__I__V(0, len, arr, 0);
  return arr;
});
$c_scm_StringBuilder.prototype.append__T__scm_StringBuilder = (function(s) {
  var this$1 = $n(this.scm_StringBuilder__f_underlying);
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s);
  return this;
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return ($n(this.scm_StringBuilder__f_underlying).length__I() === 0);
});
$c_scm_StringBuilder.prototype.result__O = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_scm_StringBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__C__scm_StringBuilder($uC(elem));
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
});
var $d_scm_StringBuilder = new $TypeData().initClass($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
}));
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer($thiz);
  $thiz.scm_ListBuffer__f_first = $n(buf).scm_ListBuffer__f_first;
  $thiz.scm_ListBuffer__f_last0 = $n(buf).scm_ListBuffer__f_last0;
  $thiz.scm_ListBuffer__f_aliased = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.scm_ListBuffer__f_mutationCount = ((1 + $thiz.scm_ListBuffer__f_mutationCount) | 0);
  if ($thiz.scm_ListBuffer__f_aliased) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.scm_ListBuffer__f_mutationCount = 0;
  this.scm_ListBuffer__f_first = null;
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_aliased = false;
  this.scm_ListBuffer__f_len = 0;
  this.scm_ListBuffer__f_mutationCount = 0;
  this.scm_ListBuffer__f_first = $m_sci_Nil$();
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_aliased = false;
  this.scm_ListBuffer__f_len = 0;
}
$c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ListBuffer.prototype.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $c_scm_ListBuffer.prototype;
$c_scm_ListBuffer.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_MutationTracker$CheckedIterator($n(this.scm_ListBuffer__f_first).iterator__sc_Iterator(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.scm_ListBuffer__f_mutationCount)));
});
$c_scm_ListBuffer.prototype.apply__I__O = (function(i) {
  var this$1 = $n(this.scm_ListBuffer__f_first);
  return $f_sc_LinearSeqOps__apply__I__O(this$1, i);
});
$c_scm_ListBuffer.prototype.length__I = (function() {
  return this.scm_ListBuffer__f_len;
});
$c_scm_ListBuffer.prototype.knownSize__I = (function() {
  return this.scm_ListBuffer__f_len;
});
$c_scm_ListBuffer.prototype.isEmpty__Z = (function() {
  return (this.scm_ListBuffer__f_len === 0);
});
$c_scm_ListBuffer.prototype.toList__sci_List = (function() {
  this.scm_ListBuffer__f_aliased = (!this.isEmpty__Z());
  return this.scm_ListBuffer__f_first;
});
$c_scm_ListBuffer.prototype.addOne__O__scm_ListBuffer = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.scm_ListBuffer__f_len === 0)) {
    this.scm_ListBuffer__f_first = last1;
  } else {
    $n(this.scm_ListBuffer__f_last0).sci_$colon$colon__f_next = last1;
  }
  this.scm_ListBuffer__f_last0 = last1;
  this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
  return this;
});
$c_scm_ListBuffer.prototype.scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer = (function(xs) {
  var it = $n(xs).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon($n(it).next__O(), $m_sci_Nil$());
    this.scm_ListBuffer__f_first = last0;
    while ($n(it).hasNext__Z()) {
      var last1 = new $c_sci_$colon$colon($n(it).next__O(), $m_sci_Nil$());
      $n(last0).sci_$colon$colon__f_next = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.scm_ListBuffer__f_len = len;
    this.scm_ListBuffer__f_last0 = last0;
  }
  return this;
});
$c_scm_ListBuffer.prototype.addAll__sc_IterableOnce__scm_ListBuffer = (function(xs) {
  var it = $n(xs).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var fresh = new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.scm_ListBuffer__f_len === 0)) {
      this.scm_ListBuffer__f_first = $n(fresh).scm_ListBuffer__f_first;
    } else {
      $n(this.scm_ListBuffer__f_last0).sci_$colon$colon__f_next = $n(fresh).scm_ListBuffer__f_first;
    }
    this.scm_ListBuffer__f_last0 = $n(fresh).scm_ListBuffer__f_last0;
    this.scm_ListBuffer__f_len = ((this.scm_ListBuffer__f_len + $n(fresh).scm_ListBuffer__f_len) | 0);
  }
  return this;
});
$c_scm_ListBuffer.prototype.stringPrefix__T = (function() {
  return "ListBuffer";
});
$c_scm_ListBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__scm_ListBuffer(elems);
});
$c_scm_ListBuffer.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_ListBuffer(elem);
});
$c_scm_ListBuffer.prototype.result__O = (function() {
  return this.toList__sci_List();
});
$c_scm_ListBuffer.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  var this$1 = $n(this.scm_ListBuffer__f_first);
  return $f_sc_LinearSeqOps__apply__I__O(this$1, i);
});
$c_scm_ListBuffer.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_scm_ListBuffer$();
});
function $as_scm_ListBuffer(obj) {
  return (((obj instanceof $c_scm_ListBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"));
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)));
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth));
}
var $d_scm_ListBuffer = new $TypeData().initClass($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
function $p_scm_ArrayBuffer__foldl__I__I__O__F2__O($thiz, start, end, z, op) {
  while (true) {
    if ((start === end)) {
      return z;
    } else {
      var temp$start = ((1 + start) | 0);
      var temp$z = $n(op).apply__O__O__O(z, $n($thiz.scm_ArrayBuffer__f_array).get(start));
      start = temp$start;
      z = temp$z;
    }
  }
}
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.scm_ArrayBuffer__f_mutationCount = 0;
  $thiz.scm_ArrayBuffer__f_array = initialElements;
  $thiz.scm_ArrayBuffer__f_size0 = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.scm_ArrayBuffer__f_mutationCount = 0;
  this.scm_ArrayBuffer__f_array = null;
  this.scm_ArrayBuffer__f_size0 = 0;
}
$c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ArrayBuffer.prototype.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $c_scm_ArrayBuffer.prototype;
$c_scm_ArrayBuffer.prototype.iterator__sc_Iterator = (function() {
  return $n(this.view__scm_ArrayBufferView()).iterator__sc_Iterator();
});
$c_scm_ArrayBuffer.prototype.lengthCompare__I__I = (function(len) {
  var x = this.scm_ArrayBuffer__f_size0;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_scm_ArrayBuffer.prototype.knownSize__I = (function() {
  return this.scm_ArrayBuffer__f_size0;
});
$c_scm_ArrayBuffer.prototype.ensureSize__I__V = (function(n) {
  this.scm_ArrayBuffer__f_array = $m_scm_ArrayBuffer$().scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n);
});
$c_scm_ArrayBuffer.prototype.apply__I__O = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $n($m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException(n, (((-1) + this.scm_ArrayBuffer__f_size0) | 0)));
  }
  if ((hi > this.scm_ArrayBuffer__f_size0)) {
    throw $n($m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException((((-1) + hi) | 0), (((-1) + this.scm_ArrayBuffer__f_size0) | 0)));
  }
  return $n(this.scm_ArrayBuffer__f_array).get(n);
});
$c_scm_ArrayBuffer.prototype.update__I__O__V = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $n($m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException(index, (((-1) + this.scm_ArrayBuffer__f_size0) | 0)));
  }
  if ((hi > this.scm_ArrayBuffer__f_size0)) {
    throw $n($m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException((((-1) + hi) | 0), (((-1) + this.scm_ArrayBuffer__f_size0) | 0)));
  }
  this.scm_ArrayBuffer__f_mutationCount = ((1 + this.scm_ArrayBuffer__f_mutationCount) | 0);
  $n(this.scm_ArrayBuffer__f_array).set(index, elem);
});
$c_scm_ArrayBuffer.prototype.length__I = (function() {
  return this.scm_ArrayBuffer__f_size0;
});
$c_scm_ArrayBuffer.prototype.view__scm_ArrayBufferView = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.scm_ArrayBuffer__f_mutationCount)));
});
$c_scm_ArrayBuffer.prototype.addOne__O__scm_ArrayBuffer = (function(elem) {
  this.scm_ArrayBuffer__f_mutationCount = ((1 + this.scm_ArrayBuffer__f_mutationCount) | 0);
  var newSize = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
  this.ensureSize__I__V(newSize);
  this.scm_ArrayBuffer__f_size0 = newSize;
  this.update__I__O__V((((-1) + this.scm_ArrayBuffer__f_size0) | 0), elem);
  return this;
});
$c_scm_ArrayBuffer.prototype.addAll__sc_IterableOnce__scm_ArrayBuffer = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var x2 = $as_scm_ArrayBuffer(elems);
    var elemsLength = $n(x2).scm_ArrayBuffer__f_size0;
    if ((elemsLength > 0)) {
      this.scm_ArrayBuffer__f_mutationCount = ((1 + this.scm_ArrayBuffer__f_mutationCount) | 0);
      this.ensureSize__I__V(((this.scm_ArrayBuffer__f_size0 + elemsLength) | 0));
      $m_s_Array$().copy__O__I__O__I__I__V($n(x2).scm_ArrayBuffer__f_array, 0, this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, elemsLength);
      this.scm_ArrayBuffer__f_size0 = ((this.scm_ArrayBuffer__f_size0 + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$c_scm_ArrayBuffer.prototype.stringPrefix__T = (function() {
  return "ArrayBuffer";
});
$c_scm_ArrayBuffer.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var srcLen = this.scm_ArrayBuffer__f_size0;
  var destLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V(this.scm_ArrayBuffer__f_array, 0, xs, start, copied);
  }
  return copied;
});
$c_scm_ArrayBuffer.prototype.reduceLeft__F2__O = (function(op) {
  return ((this.scm_ArrayBuffer__f_size0 > 0) ? $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 1, this.scm_ArrayBuffer__f_size0, $n(this.scm_ArrayBuffer__f_array).get(0), op) : $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op));
});
$c_scm_ArrayBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__scm_ArrayBuffer(elems);
});
$c_scm_ArrayBuffer.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_ArrayBuffer(elem);
});
$c_scm_ArrayBuffer.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_scm_ArrayBuffer$();
});
$c_scm_ArrayBuffer.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1));
});
function $as_scm_ArrayBuffer(obj) {
  return (((obj instanceof $c_scm_ArrayBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuffer"));
}
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuffer)));
}
function $asArrayOf_scm_ArrayBuffer(obj, depth) {
  return (($isArrayOf_scm_ArrayBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuffer;", depth));
}
var $d_scm_ArrayBuffer = new $TypeData().initClass($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  scm_IndexedBuffer: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null;
}
$c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $c_sjs_js_WrappedArray.prototype;
$c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$1);
});
$c_sjs_js_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
  var x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index];
});
$c_sjs_js_WrappedArray.prototype.length__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
});
$c_sjs_js_WrappedArray.prototype.knownSize__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
});
$c_sjs_js_WrappedArray.prototype.className__T = (function() {
  return "WrappedArray";
});
$c_sjs_js_WrappedArray.prototype.result__O = (function() {
  return this;
});
$c_sjs_js_WrappedArray.prototype.addOne__O__scm_Growable = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this;
});
$c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index];
});
$c_sjs_js_WrappedArray.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sjs_js_WrappedArray$();
});
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"));
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)));
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth));
}
var $d_sjs_js_WrappedArray = new $TypeData().initClass($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
var $t_Lorg_expr_simplex_Simplex$Direction$__LE = null;
var $t_Lorg_expr_simplex_Simplex$Direction$__GE = null;
var $t_Lorg_expr_simplex_Simplex$Direction$__EQ = null;
var $t_Lorg_expr_simplex_Simplex$OptimizationType$__Maximize = null;
var $t_Lorg_expr_simplex_Simplex$OptimizationType$__Minimize = null;
$s_Lorg_expr_simplex_hello__main__AT__V(new ($d_T.getArrayOf().constr)([]));
}).call(this);
//# sourceMappingURL=simplex-fastopt.js.map
