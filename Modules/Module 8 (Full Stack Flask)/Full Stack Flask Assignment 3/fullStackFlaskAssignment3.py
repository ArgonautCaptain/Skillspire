from flask import Flask, render_template, request, redirect, session, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

db = SQLAlchemy(app)

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

app.secret_key = "mysecretkey"

@app.route('/courses')
def courses():
    courses = Course.query.all()
    return render_template('courses.html', courses=courses)

@app.route('/courses/add', methods=['POST'])
def add_course():
    name = request.form['name']
    description = request.form['description']
    
    if len(name) < 1 or len(description) < 1:
        flash("Name and description are required!")
        return redirect('/courses')
    
    new_course = Course(name=name, description=description)
    db.session.add(new_course)
    db.session.commit()
    
    return redirect('/courses')

@app.route('/courses/destroy/<int:course_id>')
def destroy_course(course_id):
    course = Course.query.get_or_404(course_id)
    return render_template('destroy_course.html', course=course)

@app.route('/courses/delete/<int:course_id>', methods=['POST'])
def delete_course(course_id):
    course = Course.query.get_or_404(course_id)
    db.session.delete(course)
    db.session.commit()
    return redirect('/courses')

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)