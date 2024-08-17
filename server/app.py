from Flask import Flask, jsonify

app = Flask(__name__)

@app.route("/feed", methods=['GET'])
def feed():
    return jsonify(
        {
            "comps": ['comp1', 'comp2', 'comp3']
        }
    )

if __name__ == "__main__":
    app.run(debug=True)