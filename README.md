# saucelabs + firefox error example

This repository it to provide a minimal reproducable example of an errorusing Firefox with saucelabs (illustrated by using `@wdio/sauce-service`).



The `setValue` method on input fields throws a `java.lang.NullPointerException` exception from the selenium server when using Firefox with saucelabs.



## Setup

### Requirements

* NodeJS LTS: `10.15`

* Saucelabs Account

#### Install Dependencies

```sh
npm i 
```

#### Run test

```sh
SAUCE_USERNAME="your saucelabs username" SAUCE_ACCESS_KEY="your saucelabs access key" npm t
```



## Results

### Expected Behavior

Test should pass, it opens `https://www.google.com` and types `test` into the search field.

### Actual Behavior

Test throws `java.lang.NullPointerException` when calling `setValue` on the input field element.

```sh
Error: java.lang.NullPointerException
     at getErrorFromResponseBody (/Users/hborawski/sandbox/wdio-sauce-nullpointer/node_modules/webdriver/build/utils.js:348:10)
     at Request._callback (/Users/hborawski/sandbox/wdio-sauce-nullpointer/node_modules/webdriver/build/request.js:121:64)
     at Request.self.callback (/Users/hborawski/sandbox/wdio-sauce-nullpointer/node_modules/request/request.js:185:22)
     at Request.emit (events.js:182:13)
     at Request.EventEmitter.emit (domain.js:441:20)
     at Request.<anonymous> (/Users/hborawski/sandbox/wdio-sauce-nullpointer/node_modules/request/request.js:1161:10)
     at Request.emit (events.js:182:13)
     at Request.EventEmitter.emit (domain.js:441:20)
     at IncomingMessage.<anonymous> (/Users/hborawski/sandbox/wdio-sauce-nullpointer/node_modules/request/request.js:1083:12)
     at Object.onceWrapper (events.js:273:13)
```



#### Example full test output

```sh
> wdio

2019-04-24T00:07:12.687Z DEBUG @wdio/utils:initialiseServices: initialise wdio service "sauce"
2019-04-24T00:07:12.743Z INFO @wdio/cli:Launcher: Run onPrepare hook
2019-04-24T00:07:52.692Z INFO @wdio/local-runner: Start worker 0-0 with arg:

RUNNING  0-0 in firefox - /test.js
Stdout:
[0-0] 2019-04-24T00:07:52.976Z INFO @wdio/local-runner: Run worker command: run
[0-0] 2019-04-24T00:07:53.107Z INFO webdriver: [POST] http://localhost:4445/wd/hub/session
[0-0] 2019-04-24T00:07:53.107Z INFO webdriver: DATA { capabilities:
    { alwaysMatch: { browserName: 'firefox', platform: 'macOS 10.13' },
      firstMatch: [ {} ] },
   desiredCapabilities: { browserName: 'firefox', platform: 'macOS 10.13' } }
[0-0] 2019-04-24T00:08:06.603Z INFO webdriver: COMMAND executeScript("sauce:context=sample test - should not fail", <object>)
[0-0] 2019-04-24T00:08:06.603Z INFO webdriver: [POST] http://localhost:4445/wd/hub/session/04f6666af0ab40bc9637a3d8e46888aa/execute/sync
[0-0] 2019-04-24T00:08:06.603Z INFO webdriver: DATA { script: 'sauce:context=sample test - should not fail',
   args: [] }
[0-0] 2019-04-24T00:08:06.607Z INFO webdriver: COMMAND navigateTo("https://google.com/")
[0-0] 2019-04-24T00:08:06.607Z INFO webdriver: [POST] http://localhost:4445/wd/hub/session/04f6666af0ab40bc9637a3d8e46888aa/url
[0-0] 2019-04-24T00:08:06.607Z INFO webdriver: DATA { url: 'https://google.com/' }
[0-0] 2019-04-24T00:08:06.806Z INFO webdriver: RESULT
[0-0] 2019-04-24T00:08:10.496Z INFO webdriver: COMMAND findElement("css selector", "[name="q"]")
[0-0] 2019-04-24T00:08:10.497Z INFO webdriver: [POST] http://localhost:4445/wd/hub/session/04f6666af0ab40bc9637a3d8e46888aa/element
[0-0] 2019-04-24T00:08:10.497Z INFO webdriver: DATA { using: 'css selector', value: '[name="q"]' }
[0-0] 2019-04-24T00:08:10.670Z INFO webdriver: RESULT { ELEMENT: '0' }
[0-0] 2019-04-24T00:08:10.693Z INFO webdriver: COMMAND elementClear("0")
[0-0] 2019-04-24T00:08:10.693Z INFO webdriver: [POST] http://localhost:4445/wd/hub/session/04f6666af0ab40bc9637a3d8e46888aa/element/0/clear
[0-0] 2019-04-24T00:08:11.023Z INFO webdriver: COMMAND elementSendKeys("0", "test")
[0-0] 2019-04-24T00:08:11.024Z INFO webdriver: [POST] http://localhost:4445/wd/hub/session/04f6666af0ab40bc9637a3d8e46888aa/element/0/value
[0-0] 2019-04-24T00:08:11.024Z INFO webdriver: DATA { text: 'test' }
[0-0] 2019-04-24T00:08:11.351Z INFO webdriver: Retrying 1/3
[0-0] 2019-04-24T00:08:11.351Z INFO webdriver: [POST] http://localhost:4445/wd/hub/session/04f6666af0ab40bc9637a3d8e46888aa/element/0/value
[0-0] 2019-04-24T00:08:11.351Z INFO webdriver: DATA { text: 'test' }
[0-0] 2019-04-24T00:08:11.647Z INFO webdriver: Retrying 2/3
[0-0] 2019-04-24T00:08:11.647Z INFO webdriver: [POST] http://localhost:4445/wd/hub/session/04f6666af0ab40bc9637a3d8e46888aa/element/0/value
[0-0] 2019-04-24T00:08:11.647Z INFO webdriver: DATA { text: 'test' }
[0-0] 2019-04-24T00:08:11.987Z INFO webdriver: Retrying 3/3
[0-0] 2019-04-24T00:08:11.987Z INFO webdriver: [POST] http://localhost:4445/wd/hub/session/04f6666af0ab40bc9637a3d8e46888aa/element/0/value
[0-0] 2019-04-24T00:08:11.987Z INFO webdriver: DATA { text: 'test' }
[0-0] 2019-04-24T00:08:12.364Z INFO @wdio/sauce-service: Update job with sessionId 04f6666af0ab40bc9637a3d8e46888aa, status: failing
[0-0] 2019-04-24T00:08:12.640Z INFO webdriver: COMMAND deleteSession()
[0-0] 2019-04-24T00:08:12.641Z INFO webdriver: [DELETE] http://localhost:4445/wd/hub/session/04f6666af0ab40bc9637a3d8e46888aa
[0-0] 2019-04-24T00:08:12.954Z INFO webdriver: RESULT

Stderr:
[0-0] 2019-04-24T00:08:11.350Z WARN webdriver: Request failed due to java.lang.NullPointerException
[0-0] 2019-04-24T00:08:11.646Z WARN webdriver: Request failed due to java.lang.NullPointerException
[0-0] 2019-04-24T00:08:11.987Z WARN webdriver: Request failed due to java.lang.NullPointerException
[0-0] 2019-04-24T00:08:12.359Z ERROR webdriver: Request failed due to Error: java.lang.NullPointerException
     at getErrorFromResponseBody (/Users/hborawski/sandbox/wdio-sauce-nullpointer/node_modules/webdriver/build/utils.js:348:10)
     at Request._callback (/Users/hborawski/sandbox/wdio-sauce-nullpointer/node_modules/webdriver/build/request.js:121:64)
     at Request.self.callback (/Users/hborawski/sandbox/wdio-sauce-nullpointer/node_modules/request/request.js:185:22)
     at Request.emit (events.js:182:13)
     at Request.EventEmitter.emit (domain.js:441:20)
     at Request.<anonymous> (/Users/hborawski/sandbox/wdio-sauce-nullpointer/node_modules/request/request.js:1161:10)
     at Request.emit (events.js:182:13)
     at Request.EventEmitter.emit (domain.js:441:20)
     at IncomingMessage.<anonymous> (/Users/hborawski/sandbox/wdio-sauce-nullpointer/node_modules/request/request.js:1083:12)
     at Object.onceWrapper (events.js:273:13)

```

