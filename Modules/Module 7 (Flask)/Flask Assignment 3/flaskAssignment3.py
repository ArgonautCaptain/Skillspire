from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return "<a href='/part1'>Part 1</a><br /><a href='/part2'>Part 2</a>"

@app.route('/part1')
def part1():
    return "<a href='/'>Home</a><h1>Part 1</h1>First Name: Jason <br />Last Name: Updegraff <br />Favorite Food: Sushi <br />Favorite Vacation Destination: Japan"

@app.route('/part2')
def part2():
    return render_template('part2.html', array=[1,2,3,4,5,6,7,8,9,10])

if __name__ == '__main__':
    app.run()