from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/businesses", methods=["GET"])


def users():
    return(
        {
  "businesses": [
    {
      "id": "1",
      "name": "Mama Nkem Foods",
      "email": "jack7@example.com",
      "country": "Nigeria",
      "city": "Lagos",
      "category": "Food Processing",
      "business creation date": "1/12/2020",
      "business classification": "Big",
      "description": "Mama Nkem Foods specializes in packaged traditional Nigerian spices and ready-to-cook soup mixes for local and diaspora markets.",
      "password": "xxxxx"
    },
    {
      "id": "2",
      "name": "GreenHarvest Agro",
      "email": "jack@example.com",
      "country": "Ghana",
      "city": "Kumasi",
      "category": "Agriculture",
      "business creation date": "1/12/2020",
      "business classification": "Big",
      "description": "GreenHarvest Agro produces and exports organic cocoa and palm oil products while supporting small-scale farmers.",
      "password": "USYSTDT"
    },
    {
      "id": "3",
      "name": "BrightTech Solutions",
      "email": "jack27@example.com",
      "country": "Cameroon",
      "city": "Douala",
      "category": "Technology Services",
      "business creation date": "1/12/2020",
      "business classification": "Small",
      "description": "BrightTech Solutions provides software development, IT consulting, and digital transformation services for SMEs.",
      "password": "HSHSHH"
    },
    {
      "businessName": "",
      "email": "",
      "country": "",
      "city": "",
      "category": "",
      "date": "",
      "classification": "",
      "notes": "",
      "password": "",
      "id": "5cIRMAiv6IM"
    },
    {
      "businessName": "",
      "email": "",
      "country": "",
      "city": "",
      "category": "",
      "date": "",
      "classification": "",
      "notes": "",
      "password": "",
      "id": "fI8JVIjRCWE"
    },
    {
      "businessName": "Teaching personnel",
      "email": "yembeblessing27@gmail.com",
      "country": "United Kingdom",
      "city": "Welwyn Garden City",
      "category": "",
      "date": "ggggg",
      "classification": "",
      "notes": "ggg",
      "password": "0iiiii",
      "id": "sVsAoeTSz4w"
    },
    {
      "businessName": "fffdf",
      "email": "yembeblessing27@gmail.com",
      "country": "United Kingdom",
      "city": "Welwyn Garden City",
      "category": "",
      "date": "ffddfdff",
      "classification": "",
      "notes": "dfffffffffs",
      "password": "ssss",
      "id": "G-mZgXlXUNk"
    }
  ],
}
)

if __name__ == "__main__":
    app.run(debug=True, port=7000)