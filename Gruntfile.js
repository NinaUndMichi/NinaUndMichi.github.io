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
            backend: {
                src: [
                    'dev_backend/src/js/**/*.js'
                ],
                dest: 'build/public/backend.js'
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
            srvconf: {
                cwd: 'server/configuration',
                src: '**/*',
                dest: 'build/configuration',
                expand: true
            },
            srvcont: {
                cwd: 'server/controllers',
                src: '**/*',
                dest: 'build/controllers',
                expand: true
            },
            helpers: {
                cwd: 'server/helpers',
                src: '**/*',
                dest: 'build/helpers',
                expand: true
            },
            models: {
                cwd: 'server/models',
                src: '**/*',
                dest: 'build/models',
                expand: true
            },
            passport: {
                cwd: 'server/passport',
                src: '**/*',
                dest: 'build/passport',
                expand: true
            },
            routes: {
                cwd: 'server/routes',
                src: '**/*',
                dest: 'build/routes',
                expand: true
            },
            views: {
                cwd: 'server/views',
                src: '**/*',
                dest: 'build/views',
                expand: true
            },
            serverJs: {
                cwd: 'server/',
                src: 'server.js',
                dest: 'build',
                expand: true
            },
            webconfig: {
                cwd: 'server/',
                src: 'web.config',
                dest: 'build',
                expand: true
            },
            packson: {
                cwd: 'server/',
                src: 'package.json',
                dest: 'build',
                expand: true
            }
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
            },
            backend: {
                options: {
                    paths: ["styles"],
                    relative: true
                },
                files: {
                    "build/public/backend.css": "dev_backend/src/less/common.less"
                }
            }
        },
        /**************************************************************************************************
         * ngtemplates
         * Erstellen einen Cache aus HTML Files
         *
         * WICHTIG!!!!!!!!!!
         * Der Name der Tasks in ngtemplates  muss mit dem Namen
         * des Root Moduls der Angular übereinstimmen.
         *
         * z.B.
         * * * Gruntfile.js
         * ngtemplates:{
         *      schnitzel:{}
         * }
         *
         * * * app.js
         *  angular.module('schnitzel',[]);
         **************************************************************************************************/
        ngtemplates: {
            eitec: {
                cwd: 'dev_frontend/src/html/',
                src: '**/*.html',
                dest: 'build/public/templates.js',
                options: {
                    prefix: 'html'
                }
            },
            backend: {
                cwd: 'dev_backend/src/html',
                src: '**/*.html',
                dest: 'build/public/backend_templates.js',
                options: {
                    prefix: 'html'
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
                'dev_frontend/src/**/*.js',
                'dev_backend/src/**/*.js',
                'server/configuration/**/*',
                'server/controllers/**/*',
                'server/helpers/**/*',
                'server/models/**/*',
                'server/routes/**/*'
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
            backjs: {
                files: ['dev_backend/src/js/**/*.js'],
                tasks: ['concat:backend', 'notify:watch']
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
        'concat:backend',
        'concat:frontend',
        'copy',
        'less:frontend',
        'less:backend',
        'ngtemplates'
    ]);

    grunt.registerTask('hint', ['jshint']);
    grunt.registerTask('dev', ['build', 'watch']);
    grunt.registerTask('default', ['build']);
};