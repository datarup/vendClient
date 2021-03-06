# API data reader

A simple chrome extension to read and display data from a third party Rest API, with OAuth2.0 authentication.
The extension is now live on [Chrome Web Store] (https://chrome.google.com/webstore/detail/vend-client/lgiljbkccbplmikkcenfbhokofjpffob)
Visit the project page [here] (http://datarup.github.io/vendClient)
## Quick Start

Install Node.js and then:

```
$ from root of repo, run these commands.
$ npm install (references package.json and pulls the relevant libraries and installs them to node_modules folder)
$ bower install (references bower.json and installs relevant modules/libraries to vendor folder)
$ grunt play //build and watch any files that are being updated in the code and re-build them
$ grunt dist //creates distributable chrome extension with .crx and .zip formats
```

## Usage

The extension is currently configured to work with VendHq product list API only. Enter your domain and authorization token
 to read data from your authorized retailer's product list. Page number, Page size and Active (true/False)
 can be used to further filter down the results.See [Product API] (https://developers.vendhq.com/documentation/api/0.x/products.html)
  for more information

## TODO

1. Add complete end-to-end OAuth token generation
2. Support more APIs within VendHq initially and branch out to other APIs
3. Implement a better design for Navbar/Menu

## Contributing

Checkout the TODO list and/or issues.

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :)
6. Provide feedback/comments


## License

MIT License
