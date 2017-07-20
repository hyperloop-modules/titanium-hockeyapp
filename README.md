# Ti.HockeyApp
Hyperloop-based version of HockeyApp for both Android and iOS


### Requirements
- [x] Titanium SDK 5.5.0.GA+
- [x] Hyperloop 1.2.8+
- [x] Xcode 8+
- [x] HockeyApp App ID.  One each per platform.  (referenced below as "APP_IDENTIFIER_KEY")
- [x] For Android, include the following in /tiapp.xml (replacing "APP_IDENTIFIER_KEY" with your HockeyApp App ID):
```xml
<meta-data android:name="net.hockeyapp.android.appIdentifier" android:value="APP_IDENTIFIER_KEY"/>
```
- [x] For iOS, include the following in /Podfile (replacing "APP_NAME" with your Titanium App Name):
```javascript
install! 'cocoapods',
         :integrate_targets => false
 
platform :ios, '8.0'
target 'APP_NAME' do
    pod 'HockeySDK', :subspecs => ['AllFeaturesLib']
end
```

### Usage
Copy /lib/ti.hockeyapp.js to your /lib folder


#### Add Module and initialize
```javascript
var TiHockeyApp = require('ti.hockeyapp');
TiHockeyApp.init("APP_IDENTIFIER_KEY");
```


#### Track Events
```javascript
TiHockeyApp.trackEventWithName("Event_Name");
```


> **NOTE**: This is the first implementation; there are still several more methods and additional configuration options to yet be implemented.


### Author
* Adam Armstrong ([@adamtarmstrong](https://twitter.com/adamtarmstrong))
* Hans Knoechel ([@hansemannnn](https://twitter.com/hansemannnn))


### License
Apache 2.0


### Contributing
Thanks to ([@hansemannnn](https://twitter.com/hansemannnn)) and ([@MichaelGangolf](https://twitter.com/MichaelGangolf)) for their assistance!

Code contributions are greatly appreciated, please submit a new [pull request](https://github.com/hyperloop-modules/ti.hockeyapp/pull/new/master)!
