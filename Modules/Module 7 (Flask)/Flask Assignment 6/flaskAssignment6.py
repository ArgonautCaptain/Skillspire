from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

app.secret_key = "mysecretkey"

@app.route('/')
def home():
    if 'number' not in session:
        session['number'] = 0
    return render_template('home.html')

@app.route('/addtwo', methods=['GET', 'POST'])
def addtwo():
    if request.method == 'POST':
        session['number'] += 2
    return redirect('/')

@app.route('/reset', methods=['GET', 'POST'])
def reset():
    if request.method == 'POST':
        session['number'] = 0
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)