from flask import Flask
from flask import send_file
import os
import signal
from flask_cors import CORS
import numpy as np  
import matplotlib.pyplot as plt  
from PIL import ImageGrab




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


@app.route('/calc/draw/<a>/<b>')
def draw(a,b):
    anum= float(a)
    bnum = float(b)
    x = np.arange(anum, bnum)  
    y = x*x
    
    plt.title("Line graph")  
    plt.xlabel("X axis")  
    plt.ylabel("Y axis")  
    plt.plot(x, y, color ="red")  
    plt.show()
    

@app.route('/screenshot')
def shoot():
    image = ImageGrab.grab()
    image.save('sc.png')
    return 'sucess'


@app.route('/captured/<a>')
def shooted(a):
    return send_file('sc.png')


@app.route('/endapp')
def by():
    print("kill")
    os.kill(os.getpid(),signal.SIGKILL)


if __name__ == '__main__':
    app.run()
