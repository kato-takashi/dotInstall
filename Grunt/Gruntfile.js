//Gruntfile.js
module.exports = function(grunt){
	/*task:{
		target1:{
			設定
		},
		target2:{
			設定
		}
	}*/
	//config
	grunt.initConfig({
		less:{
			build1:{
				src: 'src/style1.less',
				dest: 'build/style1.css'
			},
			build2:{
				src: 'src/style2.less',
				dest: 'build/style2.css'
			}
		}
	});

	//plugin
	grunt.loadNpmTasks('grunt-contrib-less');

	//tasks
	grunt.registerTask('default', 'less');
	grunt.registerTask('task1', 'less:build1');
	grunt.registerTask('task2', 'less:build2');
};
