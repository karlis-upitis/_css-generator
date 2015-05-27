module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		//connect
		connect: {
			server: {
				options: {
					port: 9001,
					base: '',
					hostname:'*'
				}
			}
		},

		watch: {
			options: {
				livereload: true,
				port: 9000,
				nospawn: true
			},
			watch_sass: {
				files: ['scss/**/*.scss'],
				tasks: ['sass:dev','autoprefixer'],
			},
			configFiles: {
				files: ['Gruntfile.js'],
				options: {
					reload: true
				}
			}
		},

		/* POSTCSS */
		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer-core')
				]
			},
			dist: {
				src: 'css/*.css'
			}
		},

		// ({browsers: 'last 2 version'}).postcsss
		/*COMPILE SASS*/
		// sass: {
		// 	options: {
		// 		includePaths: [
		// 		require('node-bourbon').includePaths,
		// 		'node_modules/node-neat/node_modules/bourbon-neat/app/assets/stylesheets'
		// 		],
		// 		sourceComments: 'normal'
		// 	},
		// 	dev: {
		// 		files: {
		// 			'_tmp/style-unprefixed.css': 'scss/style.scss'
		// 		}
		// 	}
		// },


		// /*AUTOPREFIX CSS*/
		// autoprefixer: {
		// 	default: {
		// 		src: '_tmp/style-unprefixed.css',
		// 		dest: 'style.css'
		// 	}
		// }

		// browserSync: {
		// 	dev: {
		// 		bsFiles: {
		// 			src : '../style.css'
		// 		},
		// 		options: {
		// 			watchTask: true,
		// 			proxy: "http://192.168.1.118/anketas-aizpildisana/?uzniemums=7"
		// 		}
		// 	}
		// }
	});

require('load-grunt-tasks')(grunt);
grunt.registerTask('default', ['connect','postcss', 'watch']);
};