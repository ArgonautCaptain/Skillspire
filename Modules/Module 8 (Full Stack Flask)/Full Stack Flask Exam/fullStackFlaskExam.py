from flask import Flask, render_template, request, redirect, session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

db = SQLAlchemy(app)

app.secret_key = "mysecretkey"

class Appointment(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  date = db.Column(db.String(100), nullable=False)
  time = db.Column(db.String(100), nullable=False)
  patient_name = db.Column(db.String(100), nullable=False)
  complaint = db.Column(db.String(100), nullable=False)

@app.route('/')
def home():
  appointments = Appointment.query.order_by(Appointment.date, Appointment.time).all()
  return render_template('home.html', appointments=appointments)

@app.route('/new_appointment')
def new_appointment():
  return render_template('new_appointment.html', today_date = datetime.now().strftime("%Y-%m-%d"))

@app.route('/create_appointment', methods=['POST'])
def create_appointment():
  date = request.form['date']
  time = request.form['time']
  patient_name = request.form['patient_name']
  complaint = request.form['complaint']
  print(date, time, patient_name, complaint)
  appointment = Appointment(date=date, time=time, patient_name=patient_name, complaint=complaint)
  try:
    db.session.add(appointment)
    db.session.commit()
    print("Appointment created")
  except Exception as e:
        print("Error:", e)
  return redirect('/')

@app.route('/delete_appointment/<int:id>')
def delete_appointment(id):
  appointment = Appointment.query.get(id)
  try:
    db.session.delete(appointment)
    db.session.commit()
    print("Appointment deleted")
  except Exception as e:
    print("Error:", e)
  return redirect('/')

if __name__ == '__main__':
  with app.app_context():
    db.create_all()
    app.run(debug=True)