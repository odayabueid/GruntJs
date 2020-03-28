module.exports = function(grunt){

    grunt.initConfig({
        concat:{
            js:{
                src:['js/*.js'],
                dest:'build/scripts.js'
            },
            css:{
              src:['css/*.css'],
              dest:'build/styles.css'
            }
        }
    })

    //load plugins

    grunt.loadNpmTasks('grunt-contrib-concat')

    // Register Tasks

    grunt.registerTask('concat-js',['concat:js'])
    grunt.registerTask('concat-css',['concat:css'])

}