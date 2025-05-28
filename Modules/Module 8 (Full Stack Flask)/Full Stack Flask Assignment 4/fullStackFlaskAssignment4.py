from flask import Flask, render_template, request, redirect, url_for
import sqlite3
import os

app = Flask(__name__)
DATABASE = 'users.db'


def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    if not os.path.exists(DATABASE):
        conn = get_db_connection()
        conn.execute('''
            CREATE TABLE users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name TEXT NOT NULL,
                last_name TEXT NOT NULL,
                email TEXT NOT NULL,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        conn.commit()
        conn.close()


@app.route('/')
def home():
    return redirect(url_for('users_index'))


@app.route('/users')
def users_index():
    conn = get_db_connection()
    users = conn.execute('SELECT * FROM users').fetchall()
    conn.close()
    return render_template('users_index.html', users=users)


@app.route('/users/new')
def new_user():
    return render_template('users_new.html')


@app.route('/users/create', methods=['POST'])
def create_user():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    conn = get_db_connection()
    conn.execute('INSERT INTO users (first_name, last_name, email) VALUES (?, ?, ?)',
                 (first_name, last_name, email))
    conn.commit()
    conn.close()
    return redirect(url_for('users_index'))


@app.route('/users/<int:id>')
def show_user(id):
    conn = get_db_connection()
    user = conn.execute('SELECT * FROM users WHERE id = ?', (id,)).fetchone()
    conn.close()
    if user is None:
        return 'User not found', 404
    return render_template('users_show.html', user=user)


@app.route('/users/<int:id>/edit')
def edit_user(id):
    conn = get_db_connection()
    user = conn.execute('SELECT * FROM users WHERE id = ?', (id,)).fetchone()
    conn.close()
    if user is None:
        return 'User not found', 404
    return render_template('users_edit.html', user=user)


@app.route('/users/<int:id>', methods=['POST'])
def update_user(id):
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    conn = get_db_connection()
    conn.execute('UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE id = ?',
                 (first_name, last_name, email, id))
    conn.commit()
    conn.close()
    return redirect(url_for('show_user', id=id))


@app.route('/users/<int:id>/destroy')
def delete_user(id):
    conn = get_db_connection()
    conn.execute('DELETE FROM users WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    return redirect(url_for('users_index'))


if __name__ == '__main__':
    init_db()
    app.run(debug=True)
