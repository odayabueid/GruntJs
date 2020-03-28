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
        },

        sass:{
          build:{
             files:[{
               src:'css/sass/styles.scss',
               dest:'css/styles.css'
             }]
          }
        },
        uglify:{
          build:{
            files:[{
              src:'build/scripts.js',
              dest:'build/scripts.js'
            }]
          }
        }
    })

    //load plugins

    grunt.loadNpmTasks('grunt-contrib-concat')

    // grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register Tasks

    grunt.registerTask('concat-js',['concat:js'])
    grunt.registerTask('concat-css',['concat:css'])

}