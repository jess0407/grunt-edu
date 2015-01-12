module.exports = function(grunt){
	//config tasks
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build:{
				src: 'app/js/*.js',
				dest: 'dist/script.min.js'
			},
			dev: {
				options:{
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				src: 'app/js/*.js',
				dest: 'dist/devpretty.js'
			}

		},
		watch: {
			js: {
				files: ['app/js/*.js'],
				tasks: ['uglify:dev']
			},
			css: {
				files: ['app/sass/style.scss'],
				tasks: ['sass:dev']
			}
		},
		sass: {
			dev: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'dist/style.css' : 'app/sass/style.scss'
				}
			},
			build: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'dist/style.min.css' : 'app/sass/style.scss'
				}
			}
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');



	// Register tasks
	grunt.registerTask('default', ['uglify:dev', 'sass:dev']);
	grunt.registerTask('build', ['uglify:build', 'sass:build']);

};