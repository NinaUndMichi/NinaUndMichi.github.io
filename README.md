#  Documentation
### Installation
###### 1. Mit Terminal in  Projektordner navigieren
```sh
$ cd /*Pfad-zum-Projekt*
```
###### 2. Grunt Node Modules installieren
```sh
$ npm install
```
###### 3. Grunt starten
```sh
(läuft einmal durch)
$ grunt build
(startet, wenn sich Dateien ändern)
$ grunt dev
```
###### 4. Server Node Modules installieren
```sh
$ cd server
$ npm install
```
###### 5. Server starten
```sh
Server startet
$ node server.js
Server startet automatisch neu, wenn server Daten verändert werden.
$ nodemon server.js
```

###### Server Optionen
```sh
Startet mit lokaler Datenbank
$ node server.js local
Startet mit Test Datenbank (Development)
$ node server.js dev
Startet mit live Datenbank 
$ node server.js production
```
### Begriffserklärung
| Begriff  	| Erklärung                                      	|
|----------	|------------------------------------------------	|
| Server   	| Alles was Serverseitig läuft                   	|
| Client   	| Alles was Browserseitig läuft                  	|
| Frontend 	| Bereich im Client der die Hauptseite darstellt 	|
| Backend  	| User Interface zum steuern des Frontends       	|
| Common   	| Wird sowohl in Frontend und Backend verwendet  	|
### Dateien Prefix
##### Der Dateien Prefix setzt sich auch zwei Buchstaben zusammen. 
####### Die erste Position gibt an, ob sich die Datei in Client oder Server befindet. Optionen: [c,s]
####### Die zweite Stelle gibt an, von welcher Anwendung (Frontend, Backend o. Common) die Datei verwendet wird. Optionen: [f, b, c]

Beispiel: cfMainCtrl.js
Diese Datei läuft im Client (Browserseitig) und wird vom Frontend benötigt.

### Naming conventions
Hier kommt noch was ...
