from flask import Flask, render_template, request, session

app = Flask(__name__)

app.secret_key = "mysecretkey"

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['first_name'] = request.form['first_name']
        session['last_name'] = request.form['last_name']
        session['email'] = request.form['email']
        session['home_address'] = request.form['home_address']
        session['city'] = request.form['city']
        session['state'] = request.form['state']
        session['zip_code'] = request.form['zip_code']
        session['phone_number'] = request.form['phone_number']
    return render_template('login.html')


if __name__ == '__main__':
    app.run(debug=True)