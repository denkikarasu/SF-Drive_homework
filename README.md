# SF-Drive_homework
Homework for FJS

Вариант аккордеона с использованием js для выполнения задания по webpack.

Сборка с помощью webpack:

* JS собирается корректно.

* При попытке собрать стили с помощью webpack получаю ошибку: 
ModuleParseError: Module parse failed: Unexpected character ' ' (1:0)

* Проблема возникает при обработке раздела файла css с подключением шрифтов, без шрифтов файл обрабатывается корректно. В качестве временного решения для дальнейшей работы из скомпилированного препроцессором файла styles.css вручную сделан файл temp_fonts.css и подключен в html отдельно без обработки webpack.

== В случае удаления всех собранных файлов из dist для проверки корректности сборки в текущем состоянии проекта нужно оставлять файл dist/temp_fonts.css, т.к. он сборку не проходит и подключен в проект напрямую. Копия также лежит в папке src/css/temp_fonts.css. После устранении проблемы будут удалены файлы temp_*.css и в проект подключен единственный файл styles.css.

* Скриншот ошибки в случае попытки собрать файл со шрифтами: https://prnt.sc/vcl0xc (видно, что файл с остальными стилями обработан без ошибок).

* Исходное состояние проекта (без выделения шрифтов в отдельный файл) в ветке mod21-webpack-css-issue.


Плагины:

* Проблема с применением eslint-loader: при установке получено предупреждение "eslint-loader deprecated" (скриншот: https://prnt.sc/vdw012). Поэтому установлен рекомендуемый eslint-webpack-plugin, однако, похоже, не смогла корректно настроить по документации (https://www.npmjs.com/package/eslint-webpack-plugin), если возможно, прошу посмотреть и помочь исправить.

* Плагин eslint-loader, тем не менее, работает, настроила по мере сил под проверку файлов .ts. Интересно, что отсутствие точки с запятой в конце строки не отлавливает как ошибку, а самостоятельно добавляет точку с запятой в итоговый файл. С файлами js в случае их подключения работает полностью корректно.


* Плагин stylelint выдает многочисленные ошибки в файле css, сгенерированном из sass, выставила режим "fix: true", исходные файлы исправлены. Итоговый файл в dist при этом не меняется. Не исправляемая в автоматическом режиме ошибка остается одна, связана с иконочным шрифтом (скриншот https://prnt.sc/vdy0pu).