'use strict';

/* eslint global-require: 0 */
// https://www.ecma-international.org/ecma-262/9.0/#sec-abstract-operations
var ES2018 = {
	'Abstract Equality Comparison': require('./2018/AbstractEqualityComparison'),
	'Abstract Relational Comparison': require('./2018/AbstractRelationalComparison'),
	'Strict Equality Comparison': require('./2018/StrictEqualityComparison'),
	AdvanceStringIndex: require('./2018/AdvanceStringIndex'),
	ArrayCreate: require('./2018/ArrayCreate'),
	ArraySetLength: require('./2018/ArraySetLength'),
	ArraySpeciesCreate: require('./2018/ArraySpeciesCreate'),
	Call: require('./2018/Call'),
	CanonicalNumericIndexString: require('./2018/CanonicalNumericIndexString'),
	CompletePropertyDescriptor: require('./2018/CompletePropertyDescriptor'),
	CopyDataProperties: require('./2018/CopyDataProperties'),
	CreateDataProperty: require('./2018/CreateDataProperty'),
	CreateDataPropertyOrThrow: require('./2018/CreateDataPropertyOrThrow'),
	CreateHTML: require('./2018/CreateHTML'),
	CreateIterResultObject: require('./2018/CreateIterResultObject'),
	CreateListFromArrayLike: require('./2018/CreateListFromArrayLike'),
	CreateMethodProperty: require('./2018/CreateMethodProperty'),
	DateFromTime: require('./2018/DateFromTime'),
	DateString: require('./2018/DateString'),
	Day: require('./2018/Day'),
	DayFromYear: require('./2018/DayFromYear'),
	DaysInYear: require('./2018/DaysInYear'),
	DayWithinYear: require('./2018/DayWithinYear'),
	DefinePropertyOrThrow: require('./2018/DefinePropertyOrThrow'),
	DeletePropertyOrThrow: require('./2018/DeletePropertyOrThrow'),
	EnumerableOwnPropertyNames: require('./2018/EnumerableOwnPropertyNames'),
	FromPropertyDescriptor: require('./2018/FromPropertyDescriptor'),
	Get: require('./2018/Get'),
	GetIterator: require('./2018/GetIterator'),
	GetMethod: require('./2018/GetMethod'),
	GetOwnPropertyKeys: require('./2018/GetOwnPropertyKeys'),
	GetPrototypeFromConstructor: require('./2018/GetPrototypeFromConstructor'),
	GetSubstitution: require('./2018/GetSubstitution'),
	GetV: require('./2018/GetV'),
	HasOwnProperty: require('./2018/HasOwnProperty'),
	HasProperty: require('./2018/HasProperty'),
	HourFromTime: require('./2018/HourFromTime'),
	InLeapYear: require('./2018/InLeapYear'),
	InstanceofOperator: require('./2018/InstanceofOperator'),
	Invoke: require('./2018/Invoke'),
	IsAccessorDescriptor: require('./2018/IsAccessorDescriptor'),
	IsArray: require('./2018/IsArray'),
	IsCallable: require('./2018/IsCallable'),
	IsConcatSpreadable: require('./2018/IsConcatSpreadable'),
	IsConstructor: require('./2018/IsConstructor'),
	IsDataDescriptor: require('./2018/IsDataDescriptor'),
	IsExtensible: require('./2018/IsExtensible'),
	IsGenericDescriptor: require('./2018/IsGenericDescriptor'),
	IsInteger: require('./2018/IsInteger'),
	IsPromise: require('./2018/IsPromise'),
	IsPropertyKey: require('./2018/IsPropertyKey'),
	IsRegExp: require('./2018/IsRegExp'),
	IsStringPrefix: require('./2018/IsStringPrefix'),
	IterableToList: require('./2018/IterableToList'),
	IteratorClose: require('./2018/IteratorClose'),
	IteratorComplete: require('./2018/IteratorComplete'),
	IteratorNext: require('./2018/IteratorNext'),
	IteratorStep: require('./2018/IteratorStep'),
	IteratorValue: require('./2018/IteratorValue'),
	MakeDate: require('./2018/MakeDate'),
	MakeDay: require('./2018/MakeDay'),
	MakeTime: require('./2018/MakeTime'),
	MinFromTime: require('./2018/MinFromTime'),
	modulo: require('./2018/modulo'),
	MonthFromTime: require('./2018/MonthFromTime'),
	msFromTime: require('./2018/msFromTime'),
	NumberToString: require('./2018/NumberToString'),
	ObjectCreate: require('./2018/ObjectCreate'),
	OrdinaryDefineOwnProperty: require('./2018/OrdinaryDefineOwnProperty'),
	OrdinaryGetOwnProperty: require('./2018/OrdinaryGetOwnProperty'),
	OrdinaryGetPrototypeOf: require('./2018/OrdinaryGetPrototypeOf'),
	OrdinarySetPrototypeOf: require('./2018/OrdinarySetPrototypeOf'),
	OrdinaryHasInstance: require('./2018/OrdinaryHasInstance'),
	OrdinaryHasProperty: require('./2018/OrdinaryHasProperty'),
	PromiseResolve: require('./2018/PromiseResolve'),
	RegExpExec: require('./2018/RegExpExec'),
	RequireObjectCoercible: require('./2018/RequireObjectCoercible'),
	SameValue: require('./2018/SameValue'),
	SameValueNonNumber: require('./2018/SameValueNonNumber'),
	SameValueZero: require('./2018/SameValueZero'),
	SecFromTime: require('./2018/SecFromTime'),
	Set: require('./2018/Set'),
	SetFunctionName: require('./2018/SetFunctionName'),
	SetIntegrityLevel: require('./2018/SetIntegrityLevel'),
	SpeciesConstructor: require('./2018/SpeciesConstructor'),
	SymbolDescriptiveString: require('./2018/SymbolDescriptiveString'),
	TestIntegrityLevel: require('./2018/TestIntegrityLevel'),
	thisBooleanValue: require('./2018/thisBooleanValue'),
	thisNumberValue: require('./2018/thisNumberValue'),
	thisStringValue: require('./2018/thisStringValue'),
	thisSymbolValue: require('./2018/thisSymbolValue'),
	thisTimeValue: require('./2018/thisTimeValue'),
	TimeClip: require('./2018/TimeClip'),
	TimeFromYear: require('./2018/TimeFromYear'),
	TimeString: require('./2018/TimeString'),
	TimeWithinDay: require('./2018/TimeWithinDay'),
	ToBoolean: require('./2018/ToBoolean'),
	ToDateString: require('./2018/ToDateString'),
	ToIndex: require('./2018/ToIndex'),
	ToInt16: require('./2018/ToInt16'),
	ToInt32: require('./2018/ToInt32'),
	ToInt8: require('./2018/ToInt8'),
	ToInteger: require('./2018/ToInteger'),
	ToLength: require('./2018/ToLength'),
	ToNumber: require('./2018/ToNumber'),
	ToObject: require('./2018/ToObject'),
	ToPrimitive: require('./2018/ToPrimitive'),
	ToPropertyDescriptor: require('./2018/ToPropertyDescriptor'),
	ToPropertyKey: require('./2018/ToPropertyKey'),
	ToString: require('./2018/ToString'),
	ToUint16: require('./2018/ToUint16'),
	ToUint32: require('./2018/ToUint32'),
	ToUint8: require('./2018/ToUint8'),
	ToUint8Clamp: require('./2018/ToUint8Clamp'),
	Type: require('./2018/Type'),
	ValidateAndApplyPropertyDescriptor: require('./2018/ValidateAndApplyPropertyDescriptor'),
	WeekDay: require('./2018/WeekDay'),
	YearFromTime: require('./2018/YearFromTime')
};

module.exports = ES2018;
