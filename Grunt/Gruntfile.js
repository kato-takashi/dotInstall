//Gruntfile.js
module.exports = function(grunt){
	//config
	grunt.initConfig({
		less:{
			build:{
				src: 'src/style.less',
				dest: 'build/style.css'
			}
		}
	});

	//plugin
	grunt.loadNpmTasks('grunt-contrib-less');

	//tasks
	grunt.registerTask('default', 'less');
};
