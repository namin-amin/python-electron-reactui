# python-electron-reactui

Development:
1)create a virtualenv for python in pycode folder
pip install:
      *flask
      *flask-cors

start the development server

2)open ele-code install node dependencies using yarn and do "yarn start" to run the program in devel mode



Production:
1)in pycode "pip install pyinstaller"

run "pyintsaller -F app.py" to get single executable file

2)copy app.exe(for windows)/app executable file from pycode/dist to ele-code/public

open ele-code folder and run "yan build" electron builder will build installer for you(you can customize th build if u want)
