from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/map')
def map():
    return render_template("path_route_display.html")


if __name__ == '__main__':
    app.run()
