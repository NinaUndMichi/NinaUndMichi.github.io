module.exports = function (grunt) {
    'use strict';
    // Automatically load npm tasks from package.json
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        clean: {
            build: ["build"]
        },
        /**************************************************************************************************
         * concat
         * Lädt alle Javscript Files aus frontend/src und backend/src.
         * Erstellt daraus eine .js File je Projekt
         **************************************************************************************************/
        concat: {
            options: {
                separator: ';\r\n \n'
            },
            frontend: {
                src: [
                    'dev_frontend/src/js/app.js',
                    'dev_frontend/src/js/**/*.js'
                ],
                dest: 'build/public/frontend.js'
            }
        },
        /**************************************************************************************************
         * copy
         * Kopiert alle für das Deployment nötigen Daten in das 'build' Verzeichnis
         **************************************************************************************************/
        //ToDo: Copy Tasks für Server Dateien zusammenfassen
        copy: {
            frontend_images: {
                cwd: 'dev_frontend/src/images',
                src: '**/*',
                dest: 'build/public/images',
                expand: true
            },
            libs: {
                cwd: 'libs/',
                src: '**/*',
                dest: 'build/public/libs/',
                expand: true
            },
        },
        /**************************************************************************************************
         * less
         * Kompiliert alle less Dateien in css Code.
         * Browser prefix werden automatisch gesetzt
         **************************************************************************************************/
        less: {
            options: {
                plugins: [new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})]
            },
            frontend: {
                options: {
                    paths: [""],
                    relative: true
                },
                files: {
                    "build/public/frontend.css": "dev_frontend/src/less/common.less"
                }
            }
        },
        /**************************************************************************************************
         * jshint
         * Erkennt Fehler und potentielle Problemen in .js Files
         **************************************************************************************************/
        jshint: {
            files: [
                'Gruntfile.js',
                'dev_frontend/src/**/*.js'
            ]
        },
        /**************************************************************************************************
         * watch
         * Erkennt bearbeitete Dateien und führt betroffenen
         * Grunt taskt automatisch aus
         **************************************************************************************************/
        watch: {
            frontjs: {
                files: ['dev_frontend/src/js/**/*.js'],
                tasks: ['concat:frontend', 'notify:watch']
            },
            less: {
                files: ['dev_frontend/src/less/*.less', 'dev_backend/src/less/*.less'],
                tasks: ['less', 'notify:watch']
            },
            hypertxt: {
                files: ['dev_frontend/src/html/**/*', 'dev_backend/src/html/**/*.html'],
                tasks: ['ngtemplates', 'notify:watch']
            }
        },
        /**************************************************************************************************
         * notify
         * Zeigt Nachricht an, wenn Grunt Tasks abgeschlossen wurden.
         **************************************************************************************************/
        notify: {
            watch: {
                options: {
                    title: 'Task Complete',
                    message: 'Sources compiled'
                }
            }
        }
    });

    grunt.registerTask('build', [
        'clean',
        'concat:frontend',
        'copy',
        'less:frontend',
    ]);

    grunt.registerTask('hint', ['jshint']);
    grunt.registerTask('dev', ['build', 'watch']);
    grunt.registerTask('default', ['build']);
};