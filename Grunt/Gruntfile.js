//Gruntfile.js
module.exports = function(grunt){
	grunt.initConfig({
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
		}
	});

	//plugin
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-csslint');

	//tasks
	grunt.registerTask('default', ['less', 'csslint']);
	//grunt.registerTask('task1', 'less:build');
	//grunt.registerTask('task2', 'less:build2');
};
