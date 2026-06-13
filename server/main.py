from flask import Flask, jsonify, request
from flask_cors import CORS

data = {
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
   
  ],
  "users": [
    {
      "id": "1",
      "name": "Jack",
      "email": "jack@example.com",
      "nationality": "Cameroonian",
      "password": "qwerty"
    },
    {
      "id": "2",
      "name": "Blessing",
      "email": "yembeblessing27@gmail.com",
      "nationality": "Cameroonian",
      "password": "qwerty"
    },
  ],

 "usersreviews":[
    {
       "id":"9",
      "comment": "hhshhsh"
    },
    {
        "comment":"hello"
    },
    
 ]
   
  }
reviews = [
    {
        "id": 1,
        "business_id": "1",
        "username": "Blessing",
        "comment": "Lovely business",
        "email": "yembeblessing27@gmail.com"
    },
    {
        "id": 2,
        "business_id": "1",
        "username": "Jack",
        "comment": "Good food",
        "email": "jack@example.com"
    },
    {
        "id": 3,
        "business_id": "2",
        "username": "Mary",
        "comment": "Nice cocoa products",
        "email": "mary@example.com"
    }
]



app = Flask(__name__)
cors = CORS(app, origins= "*")

@app.route("/api/businesses", methods=["GET"])


def getbusinesses(): 
    return jsonify(
        {
  "businesses" : data["businesses"]
}
)


@app.route("/api/businesses/<category>", methods=["GET"])
def getCategory(category):
   filter_business= []
   for business in data["businesses"]:
     if business["category"] == category: 
      filter_business.append(business) 
   return filter_business

@app.route("/api/businesses", methods=["POST"])

def createBusiness():
   newBusiness = request.json
   data["businesses"].append(newBusiness)
   return jsonify(newBusiness), 201
  
@app.route("/api/users", methods=["GET"])
def getUsers():
   return jsonify(
      {
         "users":data["users"]
      }
   )

@app.route("/api/users", methods=["POST"])

def createUser():
   newUser = request.json
   data["users"].append(newUser)
   return jsonify(newUser), 201

@app.route("/api/usersreview", methods=["GET"])
def getusersReview():
   return jsonify(
      {
      "usersreviews":data["usersreviews"]
      }
   )

@app.route("/api/reviews", methods=["POST"])
def writeReview():
   newcomment = request.json()
   for names in reviews:
    for business in data["businesses"]:
      if reviews[names] == business["name"]:
         reviews[names].append(newcomment)         
   return jsonify(newcomment), 201
   


if __name__ == "__main__":
    app.run(debug=True, port=7000)

            
   
    


    

    


#def getCategory(business):
 #   if business["category"] == catergory?