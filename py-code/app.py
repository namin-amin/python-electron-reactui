from flask import Flask
from flask import send_file
import os
import signal
from flask_cors import CORS




app = Flask(__name__)
CORS(app)



@app.route('/calc/add/<a>/<b>')
def adder(a,b):
    anum= float(a)
    bnum = float(b)
    return str(anum+bnum)

@app.route('/calc/multiply/<a>/<b>')
def multiplier(a,b):
    anum= float(a)
    bnum = float(b)
    return str(anum*bnum)

@app.route('/calc/divide/<a>/<b>')
def devider(a,b):
    anum= float(a)
    bnum = float(b)
    if bnum==0:
        return "cannot devide from 0"
    else:
        return str(anum/bnum)





@app.route('/endapp')
def by():
    print("kill")
    os.kill(os.getpid(),signal.SIGKILL)


if __name__ == '__main__':
    app.run()
