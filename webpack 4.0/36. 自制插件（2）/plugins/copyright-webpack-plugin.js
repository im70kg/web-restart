class CopyrightWebpackPlugin {

	apply(compiler) {

		compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
			console.log('compiler');
		})

		compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
			debugger;
			compilation.assets['copyright.txt']= {
				source: function() {
					return 'copyright by dell lee'
				},
				size: function() {
					return 21;
				}
			};
			cb();
		})
	}

}

module.exports = CopyrightWebpackPlugin;