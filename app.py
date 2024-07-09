import os

from cs50 import SQL
from flask import Flask, render_template, request

from helpers import lookup_1, lookup_2, get_adjective

# Configure application
app = Flask(__name__)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///app_info.db")

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/by_region")
def continents():
    return render_template("by_region.html")

@app.route("/continent")
def continent():
    region = request.args.get('region')
    data = lookup_1(region)
    return render_template("continent.html", region=region, data=data)

@app.route("/country")
def country():
    country = request.args.get('country')
    data = lookup_2(country)
    adjective = get_adjective(country)
    return render_template("country.html", country=country, data=data, adjective=adjective)

@app.route("/by_dining_exp")
def dining():
    return render_template("by_dining_exp.html")


@app.route("/quote", methods=["GET", "POST"])
def quote():
        return render_template("quote.html")


@app.route("/register", methods=["GET", "POST"])
def register():
        return render_template("register.html")
