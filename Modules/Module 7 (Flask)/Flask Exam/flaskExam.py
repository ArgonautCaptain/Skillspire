from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

app.secret_key = "mysecretkey"

header = "<h1>Flask Exam</h1><a href='/'>Home</a><hr />"

users = {
    'admin': 'password',
}


@app.route('/')
def home():
    return render_template('home.html', header=header)


@app.route('/about')
def about():
    return render_template('about.html', header=header)

@app.route('/index')
def index():
    if 'name' not in session:
      session['name'] = 'user'
    return render_template('index.html', header=header)

@app.route('/greet_user', methods=['POST'])
def greet_user():
    session['name'] = request.form['name']
    return redirect('/index')

@app.route('/notyou')
def notyou():
    session.pop('name', None)
    return redirect('/index')


@app.route('/greet/<name>')
def greet(name):
    session['name'] = name
    return redirect('/index')

@app.route('/contact')
def contact():
    return render_template('contact.html', header=header)

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['phone_number'] = request.form['phone_number']
    session['home_address'] = request.form['home_address']
    session['city'] = request.form['city']
    session['state'] = request.form['state']
    session['zip_code'] = request.form['zip_code']
    return render_template('submit_contact.html', header=header)

@app.route('/login')
def login():
    return render_template('login.html', header=header)

@app.route('/admin', methods=['POST'])
def admin():
    username = request.form['username']
    password = request.form['password']
    if username in users and users[username] == password:
        session['username'] = username
    return render_template('admin.html', header=header)

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect('/login')

if __name__ == '__main__':
    app.run(debug=True)
