//Gruntfile.js
module.exports = function(grunt){
	/*task:{ //書き方1
		option{
			compress: true
		},
		target1:{
			src:...,
			dest:...
		},
		target2:{
			設定
		}
	}

	task:{ //書き方2
		target2:{
			target:{
				files:{
					des: src
				}
			}
		}
	}*/
	//config
	grunt.initConfig({
		less:{
			options:{
				compress: true
			},
			build1:{
				/*src: 'src/style1.less',
				dest: 'build/style1.css'*/
				files:{
					'build/style1.css' : 'src/style1.less' 
					//'build/style1.css' : ['src/style1.less', 'src/style2.less']
					// 'build/style1.css' : 'src/*.less'
					//'build/style1.css' : 'src/**/*.less' //lessファイルの上のディレクトリフォルダが有る場合
				}
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
