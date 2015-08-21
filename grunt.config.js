/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
	/**
	 * The `build_dir` folder is where our projects are compiled during
	 * development and the `compile_dir` folder is where our app resides once it's
	 * completely built.
	 */
	build_dir: 'build',
	dist_dir: 'dist',



	/**
	 * This is a collection of file patterns that refer to our app code (the
	 * stuff in `src/`). These file paths are used in the configuration of
	 * build tasks. `js` is all project javascript, less tests. `ctpl` contains
	 * our reusable components' (`src/common`) template HTML files, while
	 * `atpl` contains the same, but for our app's code. `html` is just our
	 * main HTML file, `less` is our main stylesheet, and `unit` contains our
	 * app's unit tests.
	 */
	app_files: {
		js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js', '!src/app/advisor.environment.js', '!src/background.js' ],
		js_all: ['build/src/app_all.js'],
		jsunit: [ 'src/**/*.spec.js' ],

		atpl: [ 'src/app/**/*.tpl.html' ],
		ctpl: [ 'src/common/**/*.tpl.html' ],

		html: [ 'src/index.html' ],
		less: ['src/less/main.less'],
		env: ['src/app/advisor.environment.js'],
		chromeApp: ['src/background.js', 'src/manifest.json']
	},

	dist_files: {
		//js_all: ['build/app_all.js'], //Copying it directly here, until we get minification working for app_all
		vendor_all: ['build//vendor/vendor_all.min.js'],
		css: [ 'build/assets/vendApp-1.0.0.min.css' ],
		html: [ ' build/index.html' ],
		chromeApp: ['build/background.js', 'build/manifest.json'],
		images: ['build/assets/images/vend*.png']
	},

	/**
	 * This is a collection of files used during testing only.
	 */
	test_files: {
		js: [
			'vendor/angular-mocks/angular-mocks.js'
		]
	},
	/**
	 * This is the same as `app_files`, except it contains patterns that
	 * reference vendor code (`vendor/`) that we need to place into the build
	 * process somewhere. While the `app_files` property ensures all
	 * standardized files are collected for compilation, it is the user's job
	 * to ensure non-standardized (i.e. vendor-related) files are handled
	 * appropriately in `vendor_files.js`.
	 *
	 * The `vendor_files.js` property holds files to be automatically
	 * concatenated and minified with our project source files.
	 *
	 * The `vendor_files.css` property holds any CSS files to be automatically
	 * included in our app.
	 *
	 * The `vendor_files.assets` property holds any assets to be copied along
	 * with our app's assets. This structure is flattened, so it is not
	 * recommended that you use wildcards.
	 */
	vendor_files: {
		js: [
			'vendor/jquery/dist/jquery.min.js',
			'vendor/angular/angular.min.js',
			'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
			'vendor/bootstrap/js/modal.js',
			'vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
			'vendor/angular-ui-router/release/angular-ui-router.min.js',
			'vendor/angular-ui-utils/modules/route/route.js',
			'vendor/angular-rangeslider/angular.rangeSlider.js',
			'vendor/select2/select2.min.js',
			'vendor/angular-ui-select2/src/select2.js',
			'vendor/angular-ui-select/dist/select.js',
			'vendor/angular-sanitize/angular-sanitize.js'
		],
		css: [
			//'vendor/angular-ui-select/dist/select.css'
		],
		assets: [
			'vendor/bootstrap/fonts/glyphicons-halflings-regular.eot',
			'vendor/bootstrap/fonts/glyphicons-halflings-regular.svg',
			'vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf',
			'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff',
			'vendor/select2/select2.png',
			'vendor/select2/select2-spinner.gif',
			'vendor/font-awesome/fonts/fontawesome-webfont.eot',
			'vendor/font-awesome/fonts/fontawesome-webfont.svg',
			'vendor/font-awesome/fonts/fontawesome-webfont.ttf',
			'vendor/font-awesome/fonts/fontawesome-webfont.woff'
		]
	}
};
