"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Fiji"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Fiji", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Fiji", { abbr: true }),

	"1915" : helpers.makeTestYear("Pacific/Fiji", [
		["1915-10-25T12:04:15+00:00", "23:59:59", "LMT", -42944 / 60],
		["1915-10-25T12:04:16+00:00", "00:04:16", "+12", -720]
	]),

	"1998" : helpers.makeTestYear("Pacific/Fiji", [
		["1998-10-31T13:59:59+00:00", "01:59:59", "+12", -720],
		["1998-10-31T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"1999" : helpers.makeTestYear("Pacific/Fiji", [
		["1999-02-27T13:59:59+00:00", "02:59:59", "+13", -780],
		["1999-02-27T14:00:00+00:00", "02:00:00", "+12", -720],
		["1999-11-06T13:59:59+00:00", "01:59:59", "+12", -720],
		["1999-11-06T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2000" : helpers.makeTestYear("Pacific/Fiji", [
		["2000-02-26T13:59:59+00:00", "02:59:59", "+13", -780],
		["2000-02-26T14:00:00+00:00", "02:00:00", "+12", -720]
	]),

	"2009" : helpers.makeTestYear("Pacific/Fiji", [
		["2009-11-28T13:59:59+00:00", "01:59:59", "+12", -720],
		["2009-11-28T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2010" : helpers.makeTestYear("Pacific/Fiji", [
		["2010-03-27T13:59:59+00:00", "02:59:59", "+13", -780],
		["2010-03-27T14:00:00+00:00", "02:00:00", "+12", -720],
		["2010-10-23T13:59:59+00:00", "01:59:59", "+12", -720],
		["2010-10-23T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2011" : helpers.makeTestYear("Pacific/Fiji", [
		["2011-03-05T13:59:59+00:00", "02:59:59", "+13", -780],
		["2011-03-05T14:00:00+00:00", "02:00:00", "+12", -720],
		["2011-10-22T13:59:59+00:00", "01:59:59", "+12", -720],
		["2011-10-22T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2012" : helpers.makeTestYear("Pacific/Fiji", [
		["2012-01-21T13:59:59+00:00", "02:59:59", "+13", -780],
		["2012-01-21T14:00:00+00:00", "02:00:00", "+12", -720],
		["2012-10-20T13:59:59+00:00", "01:59:59", "+12", -720],
		["2012-10-20T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2013" : helpers.makeTestYear("Pacific/Fiji", [
		["2013-01-19T13:59:59+00:00", "02:59:59", "+13", -780],
		["2013-01-19T14:00:00+00:00", "02:00:00", "+12", -720],
		["2013-10-26T13:59:59+00:00", "01:59:59", "+12", -720],
		["2013-10-26T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2014" : helpers.makeTestYear("Pacific/Fiji", [
		["2014-01-18T12:59:59+00:00", "01:59:59", "+13", -780],
		["2014-01-18T13:00:00+00:00", "01:00:00", "+12", -720],
		["2014-11-01T13:59:59+00:00", "01:59:59", "+12", -720],
		["2014-11-01T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2015" : helpers.makeTestYear("Pacific/Fiji", [
		["2015-01-17T13:59:59+00:00", "02:59:59", "+13", -780],
		["2015-01-17T14:00:00+00:00", "02:00:00", "+12", -720],
		["2015-10-31T13:59:59+00:00", "01:59:59", "+12", -720],
		["2015-10-31T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2016" : helpers.makeTestYear("Pacific/Fiji", [
		["2016-01-16T13:59:59+00:00", "02:59:59", "+13", -780],
		["2016-01-16T14:00:00+00:00", "02:00:00", "+12", -720],
		["2016-11-05T13:59:59+00:00", "01:59:59", "+12", -720],
		["2016-11-05T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2017" : helpers.makeTestYear("Pacific/Fiji", [
		["2017-01-14T13:59:59+00:00", "02:59:59", "+13", -780],
		["2017-01-14T14:00:00+00:00", "02:00:00", "+12", -720],
		["2017-11-04T13:59:59+00:00", "01:59:59", "+12", -720],
		["2017-11-04T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2018" : helpers.makeTestYear("Pacific/Fiji", [
		["2018-01-13T13:59:59+00:00", "02:59:59", "+13", -780],
		["2018-01-13T14:00:00+00:00", "02:00:00", "+12", -720],
		["2018-11-03T13:59:59+00:00", "01:59:59", "+12", -720],
		["2018-11-03T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2019" : helpers.makeTestYear("Pacific/Fiji", [
		["2019-01-12T13:59:59+00:00", "02:59:59", "+13", -780],
		["2019-01-12T14:00:00+00:00", "02:00:00", "+12", -720],
		["2019-11-09T13:59:59+00:00", "01:59:59", "+12", -720],
		["2019-11-09T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2020" : helpers.makeTestYear("Pacific/Fiji", [
		["2020-01-11T13:59:59+00:00", "02:59:59", "+13", -780],
		["2020-01-11T14:00:00+00:00", "02:00:00", "+12", -720],
		["2020-11-07T13:59:59+00:00", "01:59:59", "+12", -720],
		["2020-11-07T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2021" : helpers.makeTestYear("Pacific/Fiji", [
		["2021-01-16T13:59:59+00:00", "02:59:59", "+13", -780],
		["2021-01-16T14:00:00+00:00", "02:00:00", "+12", -720],
		["2021-11-13T13:59:59+00:00", "01:59:59", "+12", -720],
		["2021-11-13T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2022" : helpers.makeTestYear("Pacific/Fiji", [
		["2022-01-15T13:59:59+00:00", "02:59:59", "+13", -780],
		["2022-01-15T14:00:00+00:00", "02:00:00", "+12", -720],
		["2022-11-12T13:59:59+00:00", "01:59:59", "+12", -720],
		["2022-11-12T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2023" : helpers.makeTestYear("Pacific/Fiji", [
		["2023-01-14T13:59:59+00:00", "02:59:59", "+13", -780],
		["2023-01-14T14:00:00+00:00", "02:00:00", "+12", -720],
		["2023-11-11T13:59:59+00:00", "01:59:59", "+12", -720],
		["2023-11-11T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2024" : helpers.makeTestYear("Pacific/Fiji", [
		["2024-01-13T13:59:59+00:00", "02:59:59", "+13", -780],
		["2024-01-13T14:00:00+00:00", "02:00:00", "+12", -720],
		["2024-11-09T13:59:59+00:00", "01:59:59", "+12", -720],
		["2024-11-09T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2025" : helpers.makeTestYear("Pacific/Fiji", [
		["2025-01-11T13:59:59+00:00", "02:59:59", "+13", -780],
		["2025-01-11T14:00:00+00:00", "02:00:00", "+12", -720],
		["2025-11-08T13:59:59+00:00", "01:59:59", "+12", -720],
		["2025-11-08T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2026" : helpers.makeTestYear("Pacific/Fiji", [
		["2026-01-17T13:59:59+00:00", "02:59:59", "+13", -780],
		["2026-01-17T14:00:00+00:00", "02:00:00", "+12", -720],
		["2026-11-07T13:59:59+00:00", "01:59:59", "+12", -720],
		["2026-11-07T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2027" : helpers.makeTestYear("Pacific/Fiji", [
		["2027-01-16T13:59:59+00:00", "02:59:59", "+13", -780],
		["2027-01-16T14:00:00+00:00", "02:00:00", "+12", -720],
		["2027-11-13T13:59:59+00:00", "01:59:59", "+12", -720],
		["2027-11-13T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2028" : helpers.makeTestYear("Pacific/Fiji", [
		["2028-01-15T13:59:59+00:00", "02:59:59", "+13", -780],
		["2028-01-15T14:00:00+00:00", "02:00:00", "+12", -720],
		["2028-11-11T13:59:59+00:00", "01:59:59", "+12", -720],
		["2028-11-11T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2029" : helpers.makeTestYear("Pacific/Fiji", [
		["2029-01-13T13:59:59+00:00", "02:59:59", "+13", -780],
		["2029-01-13T14:00:00+00:00", "02:00:00", "+12", -720],
		["2029-11-10T13:59:59+00:00", "01:59:59", "+12", -720],
		["2029-11-10T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2030" : helpers.makeTestYear("Pacific/Fiji", [
		["2030-01-12T13:59:59+00:00", "02:59:59", "+13", -780],
		["2030-01-12T14:00:00+00:00", "02:00:00", "+12", -720],
		["2030-11-09T13:59:59+00:00", "01:59:59", "+12", -720],
		["2030-11-09T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2031" : helpers.makeTestYear("Pacific/Fiji", [
		["2031-01-11T13:59:59+00:00", "02:59:59", "+13", -780],
		["2031-01-11T14:00:00+00:00", "02:00:00", "+12", -720],
		["2031-11-08T13:59:59+00:00", "01:59:59", "+12", -720],
		["2031-11-08T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2032" : helpers.makeTestYear("Pacific/Fiji", [
		["2032-01-17T13:59:59+00:00", "02:59:59", "+13", -780],
		["2032-01-17T14:00:00+00:00", "02:00:00", "+12", -720],
		["2032-11-13T13:59:59+00:00", "01:59:59", "+12", -720],
		["2032-11-13T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2033" : helpers.makeTestYear("Pacific/Fiji", [
		["2033-01-15T13:59:59+00:00", "02:59:59", "+13", -780],
		["2033-01-15T14:00:00+00:00", "02:00:00", "+12", -720],
		["2033-11-12T13:59:59+00:00", "01:59:59", "+12", -720],
		["2033-11-12T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2034" : helpers.makeTestYear("Pacific/Fiji", [
		["2034-01-14T13:59:59+00:00", "02:59:59", "+13", -780],
		["2034-01-14T14:00:00+00:00", "02:00:00", "+12", -720],
		["2034-11-11T13:59:59+00:00", "01:59:59", "+12", -720],
		["2034-11-11T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2035" : helpers.makeTestYear("Pacific/Fiji", [
		["2035-01-13T13:59:59+00:00", "02:59:59", "+13", -780],
		["2035-01-13T14:00:00+00:00", "02:00:00", "+12", -720],
		["2035-11-10T13:59:59+00:00", "01:59:59", "+12", -720],
		["2035-11-10T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2036" : helpers.makeTestYear("Pacific/Fiji", [
		["2036-01-12T13:59:59+00:00", "02:59:59", "+13", -780],
		["2036-01-12T14:00:00+00:00", "02:00:00", "+12", -720],
		["2036-11-08T13:59:59+00:00", "01:59:59", "+12", -720],
		["2036-11-08T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2037" : helpers.makeTestYear("Pacific/Fiji", [
		["2037-01-17T13:59:59+00:00", "02:59:59", "+13", -780],
		["2037-01-17T14:00:00+00:00", "02:00:00", "+12", -720],
		["2037-11-07T13:59:59+00:00", "01:59:59", "+12", -720],
		["2037-11-07T14:00:00+00:00", "03:00:00", "+13", -780]
	]),

	"2038" : helpers.makeTestYear("Pacific/Fiji", [
		["2038-01-16T13:59:59+00:00", "02:59:59", "+13", -780],
		["2038-01-16T14:00:00+00:00", "02:00:00", "+12", -720]
	])
};