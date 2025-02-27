from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "First Name: Jason <br />Last Name: Updegraff <br />Favorite Food: Sushi <br />Favorite Vacation Destination: Japan"

if __name__ == '__main__':
    app.run()
