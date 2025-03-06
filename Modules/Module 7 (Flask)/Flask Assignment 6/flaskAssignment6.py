from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

app.secret_key = "mysecretkey"

@app.route('/')
def home():
    if 'number' not in session:
        session['number'] = 0
    else:
        session['number'] += 1
    return render_template('home.html')

@app.route('/addtwo')
def addtwo():
    session['number'] += 1
    return redirect('/')

@app.route('/reset')
def reset():
    session['number'] = -1
    return redirect('/')

if __name__ == '__main__':
    app.run()