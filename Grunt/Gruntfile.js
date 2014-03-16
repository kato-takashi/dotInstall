//Gruntfile.js
module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less:{
			build:{
				/*src: 'src/style1.less',
				dest: 'build/style1.css'*/
					src: ['src/style1.less', 'src/style2.less'],
					dest:'build/style1.css' 				
			}
		},
		
		csslint: {
			check:{
				// src: 'build/style1.css' 
				src: '<%= less.build.dest %>'
			}
		},

		cssmin:{
			minimize:{
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd")%> */'
				},
			files:{
					'build/styles.min.css' : '<%= less.build.dest %>'
				}
			}
		},

		watch:{
			files: 'src/*.less',
			tasks: ['less', 'csslint', 'cssmin']	
		}
	});

	//plugin
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//tasks
	grunt.registerTask('default', ['less', 'csslint', 'cssmin', 'watch']);
	//grunt.registerTask('task1', 'less:build');
	//grunt.registerTask('task2', 'less:build2');
};
