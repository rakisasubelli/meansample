'use strict'

module.exports = function(grunt) {
	grunt.initConfig({
	    useminPrepare:{
	      html:'index.ejs',
	      options:{
	        dest:'build'
	      }
	    },
	    usemin:{
	        html:['views/index.ejs']
	    }, 
	    
	    copy:{
		    task0 : {
		       src:'views/index.html' ,dest:'views/index.ejs'
		    }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-concat');'concat',
    //grunt.loadNpmTasks('grunt-contrib-uglify');'uglify',
    grunt.loadNpmTasks('grunt-usemin');
    //grunt.loadNpmTasks('grunt-cache-breaker');,'cachebreaker'

    grunt.registerTask('build',[
          'useminPrepare',    
          'copy:task0',
          'usemin'
          ]);
}