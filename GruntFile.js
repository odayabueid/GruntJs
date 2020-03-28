module.exports = function(grunt){

    //Configration

    grunt.initConfig({
        // pass an option , ref to file
        concat:{
            js:{
                src:['js/*.js'],
                dest:'build/scripts.js'
            }
        }
    })

    //load plugins

    grunt.loadNpmTasks('grunt-contrib-concat')

    // Register Tasks

    // grunt.registerTask('run',function(){
    //     console.log('I am Running')
    // })

    // grunt.registerTask('sleep',function(){
    //     console.log('I am Sleeping')
    // })

    // grunt.registerTask('all',['run','sleep'])

}