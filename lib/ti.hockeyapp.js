'use strict';

/***
 * @file Use Hockey App Crash Reporting and Event Telemetrics
 * @module ti.hockeyapp
 * @author Adam Armstrong <adam.t.armstrong@icloud.com>
 * @requires Hyperloop
 * @requires HockeySDK
 * @version 1.0.0
 * @since 1.0.0
 */
var BITHockeyManager;
var BITMetricsManager;
var CrashManager;
var Activity;
var activity;
var OSName = Ti.Platform.osname;

/**
 * @function initialize
 * @summary Creates an instance of HockeyApp
 * @param {string} appIdentifier - String to use for identifying iOS HockeyApp Applications
 * 	- Android App Identifier is set in tiapp.xml
 * 	<meta-data android:name="net.hockeyapp.android.appIdentifier" android:value="APP_IDENTIFIER_KEY_HERE"/>
 * @since 1.0.0
 */
exports.init = function(appIdentifier) {
	if (OSName === 'iphone') {
		BITHockeyManager = require('HockeySDK/BITHockeyManager');
	    	BITHockeyManager.sharedHockeyManager().configureWithIdentifier(appIdentifier);
	    	BITHockeyManager.sharedHockeyManager().startManager();
	    	BITHockeyManager.sharedHockeyManager().authenticator.authenticateInstallation(); // This line is obsolete in the crash only builds

	    	BITMetricsManager = BITHockeyManager.sharedHockeyManager().metricsManager;
	} else if (OSName === 'android') {
	    	CrashManager = require("net.hockeyapp.android.CrashManager");
	    	Activity = require('android.app.Activity');
	    	activity = new Activity(Ti.Android.currentActivity);
	    	BITMetricsManager = require("net.hockeyapp.android.metrics.MetricsManager");

	    	CrashManager.register(activity);
	    	BITMetricsManager.register(activity.getApplication());
	} else {
		Ti.API.error('The target platform (' + OSNAME + ') does not support \'trackEventWithName\', yet.');
	}
};

/**
 * @function trackEventWithName
 * @summary Submits a Telemetry Cusotm Event
 * @param {Object} - Object passed as either a single name or a set or properties
 * 
 * @since 1.0.0
 */
exports.trackEventWithName = function(eventObject) {
	if (OSName === 'iphone') {
		BITMetricsManager.trackEventWithName(eventObject);
	} else if (OSName === 'android') {
		BITMetricsManager.trackEvent(eventObject);
	} else {
		Ti.API.error('The target platform (' + OSNAME + ') does not support \'trackEventWithName\', yet.');
	}
};
