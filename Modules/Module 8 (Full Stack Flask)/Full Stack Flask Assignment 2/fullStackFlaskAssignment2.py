from flask import Flask, render_template, request, redirect, session, flash
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

db = SQLAlchemy(app)

app.secret_key = "mysecretkey"

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/create_user')
def create_user():
    return render_template('create_user.html')

@app.route('/users')
def users():
    users = User.query.all()
    return render_template('users.html', users=users)

@app.route('/add_user', methods=['POST'])
def add_user():
    firstName = request.form['first_name']
    lastName = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    user = User(first_name = firstName, last_name = lastName, email=email, password=password)
    try:
      db.session.add(user)
      db.session.commit()
      flash('User created successfully!', 'success')
    except:
      flash('Error creating user. Please try again.', 'error')
    return redirect('/')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/user_login', methods=['POST'])
def user_login():
    email = request.form['email']
    password = request.form['password']
    user = User.query.filter_by(email=email, password=password).first()
    if user:
        session['user'] = user.id
        flash(f'Welcome back, {user.first_name}!', 'success')
        return redirect('/welcome')
    else:
        flash('Invalid email or password. Please try again.', 'error')
        return redirect('/login')

@app.route('/welcome')
def welcome():
    if 'user' in session:
        user = User.query.filter_by(id=session['user']).first()
        return render_template('welcome.html', user=user)
    else:
        flash('Please login to access this page.', 'error')
        return redirect('/login')

@app.route('/logout')
def logout():
    session.pop('user', None)
    flash('You have been logged out successfully.', 'success')
    return redirect('/')

if __name__ == '__main__':
  with app.app_context():
    db.create_all()
    app.run(debug=True)