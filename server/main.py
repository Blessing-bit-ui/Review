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
    {
  "id": "4",
  "name": "KenteCraft Studio",
  "email": "info@kentecraft.example.com",
  "country": "Ghana",
  "city": "Accra",
  "category": "Fashion",
  "business creation date": "5/14/2021",
  "business classification": "Small",
  "description": "KenteCraft Studio creates handmade African clothing, accessories, and contemporary designs inspired by traditional Ghanaian textiles.",
  "password": "KENTE123"
},
{
  "id": "5",
  "name": "Savanna Beauty Hub",
  "email": "hello@savannabeauty.example.com",
  "country": "Kenya",
  "city": "Nairobi",
  "category": "Beauty and Cosmetics",
  "business creation date": "8/21/2022",
  "business classification": "Small",
  "description": "Savanna Beauty Hub produces natural skincare and beauty products using locally sourced African ingredients.",
  "password": "SAVANNA456"
},
{
  "id": "6",
  "name": "Lagos Creative Media",
  "email": "contact@lagoscreative.example.com",
  "country": "Nigeria",
  "city": "Lagos",
  "category": "Media and Entertainment",
  "business creation date": "3/10/2019",
  "business classification": "Big",
  "description": "Lagos Creative Media provides photography, video production, digital content creation, and creative marketing services for businesses.",
  "password": "LAGOS789"
},
{
  "id": "7",
  "name": "Ubuntu Learning Centre",
  "email": "info@ubuntulearning.example.com",
  "country": "South Africa",
  "city": "Johannesburg",
  "category": "Education",
  "business creation date": "9/5/2020",
  "business classification": "Medium",
  "description": "Ubuntu Learning Centre provides tutoring, professional training, and digital learning programs for students and working professionals.",
  "password": "UBUNTU321"
},
{
  "id": "8",
  "name": "CocoaBridge Exporters",
  "email": "sales@cocoabridge.example.com",
  "country": "Ivory Coast",
  "city": "Abidjan",
  "category": "Agriculture",
  "business creation date": "2/18/2018",
  "business classification": "Big",
  "description": "CocoaBridge Exporters sources and exports premium cocoa products while working with smallholder farmers across Ivory Coast.",
  "password": "COCOA654"
},
{
  "id": "9",
  "name": "Dakar Digital Agency",
  "email": "hello@dakardigital.example.com",
  "country": "Senegal",
  "city": "Dakar",
  "category": "Technology Services",
  "business creation date": "11/7/2021",
  "business classification": "Medium",
  "description": "Dakar Digital Agency helps African businesses build websites, manage social media, and develop digital marketing strategies.",
  "password": "DAKAR987"
},
{
  "id": "10",
  "name": "Nile Home Interiors",
  "email": "info@nileinteriors.example.com",
  "country": "Egypt",
  "city": "Cairo",
  "category": "Home and Interior",
  "business creation date": "6/22/2019",
  "business classification": "Medium",
  "description": "Nile Home Interiors designs and supplies modern furniture, home decorations, and interior styling solutions inspired by African aesthetics.",
  "password": "NILE159"
},
{
  "id": "11",
  "name": "Accra Fresh Delivery",
  "email": "orders@accrafresh.example.com",
  "country": "Ghana",
  "city": "Accra",
  "category": "Logistics and Delivery",
  "business creation date": "4/12/2023",
  "business classification": "Small",
  "description": "Accra Fresh Delivery provides same-day delivery services for groceries, food businesses, online stores, and local retailers.",
  "password": "ACCRA753"
},
{
  "id": "12",
  "name": "Kigali Solar Solutions",
  "email": "info@kigalisolar.example.com",
  "country": "Rwanda",
  "city": "Kigali",
  "category": "Energy",
  "business creation date": "10/3/2020",
  "business classification": "Medium",
  "description": "Kigali Solar Solutions provides affordable solar energy systems and installation services for homes and small businesses.",
  "password": "KIGALI852"
},
{
  "id": "13",
  "name": "Cameroon Print House",
  "email": "contact@camprint.example.com",
  "country": "Cameroon",
  "city": "Yaounde",
  "category": "Printing and Design",
  "business creation date": "1/25/2022",
  "business classification": "Small",
  "description": "Cameroon Print House provides graphic design, branding, printing, signage, and promotional materials for businesses and events.",
  "password": "PRINT246"
},
{
 "id": "14",
  "name": "Creamy Delight",
  "email": "courageyembe@gmail.com",
  "country": "Cameroon",
  "city": "Douala",
  "category": "Food Processing",
  "business creation date": "1/1/2022",
  "business classification": "Small",
  "description": "Creamy Delight produces and processes yogurt and other dairy food products, providing fresh and nutritious dairy products to customers in Cameroon.",
  "password": "CREAMY2022"
},
   {
  "id": "15",
  "name": "Golden Palm Foods",
  "email": "goldenpalm@example.com",
  "country": "Cameroon",
  "city": "Yaounde",
  "category": "Food Processing",
  "business creation date": "3/15/2021",
  "business classification": "Medium",
  "description": "Golden Palm Foods produces locally processed plantain chips, cassava products, and traditional African food ingredients.",
  "password": "GOLDEN123"
},
{
  "id": "16",
  "name": "Mama Africa Kitchen",
  "email": "mamaafrica@example.com",
  "country": "Nigeria",
  "city": "Abuja",
  "category": "Food Processing",
  "business creation date": "7/10/2020",
  "business classification": "Small",
  "description": "Mama Africa Kitchen processes and packages traditional Nigerian sauces, spices, and ready-to-cook meals.",
  "password": "MAMA456"
},
{
  "id": "17",
  "name": "Savanna Taste Foods",
  "email": "savannataste@example.com",
  "country": "Kenya",
  "city": "Nairobi",
  "category": "Food Processing",
  "business creation date": "2/8/2022",
  "business classification": "Small",
  "description": "Savanna Taste Foods produces packaged grains, sauces, snacks, and other locally sourced food products.",
  "password": "SAVANNA789"
},
{
  "id": "18",
  "name": "Abidjan Spice House",
  "email": "abidjanspice@example.com",
  "country": "Ivory Coast",
  "city": "Abidjan",
  "category": "Food Processing",
  "business creation date": "6/20/2019",
  "business classification": "Big",
  "description": "Abidjan Spice House processes and packages locally grown spices, seasoning blends, and cooking ingredients.",
  "password": "SPICE321"
},
{
  "id": "19",
  "name": "Nile Harvest Foods",
  "email": "nileharvest@example.com",
  "country": "Egypt",
  "city": "Cairo",
  "category": "Food Processing",
  "business creation date": "4/11/2021",
  "business classification": "Medium",
  "description": "Nile Harvest Foods produces packaged grains, traditional snacks, sauces, and processed food products.",
  "password": "NILE654"
},
{
  "id": "20",
  "name": "Kigali Kitchen Foods",
  "email": "kigalifoods@example.com",
  "country": "Rwanda",
  "city": "Kigali",
  "category": "Food Processing",
  "business creation date": "9/18/2022",
  "business classification": "Small",
  "description": "Kigali Kitchen Foods creates locally processed sauces, dried vegetables, snacks, and traditional food products.",
  "password": "KIGALI852"
},
{
  "id": "21",
  "name": "Accra Heritage Foods",
  "email": "accraheritage@example.com",
  "country": "Ghana",
  "city": "Accra",
  "category": "Food Processing",
  "business creation date": "1/25/2020",
  "business classification": "Medium",
  "description": "Accra Heritage Foods processes traditional Ghanaian food ingredients, sauces, spices, and snacks.",
  "password": "ACCRA753"
},
{
  "id": "22",
  "name": "Dakar Food Works",
  "email": "dakarfood@example.com",
  "country": "Senegal",
  "city": "Dakar",
  "category": "Food Processing",
  "business creation date": "5/6/2023",
  "business classification": "Small",
  "description": "Dakar Food Works produces packaged grains, sauces, snacks, and locally inspired ready-to-cook meals.",
  "password": "DAKAR951"
},
{
  "id": "23",
  "name": "Lusaka Fresh Foods",
  "email": "lusakafresh@example.com",
  "country": "Zambia",
  "city": "Lusaka",
  "category": "Food Processing",
  "business creation date": "8/12/2021",
  "business classification": "Medium",
  "description": "Lusaka Fresh Foods processes fruits, vegetables, sauces, and locally sourced food products for retail customers.",
  "password": "LUSAKA147"
},
{
  "id": "24",
  "name": "Maputo Food Creations",
  "email": "maputofoods@example.com",
  "country": "Mozambique",
  "city": "Maputo",
  "category": "Food Processing",
  "business creation date": "10/2/2020",
  "business classification": "Small",
  "description": "Maputo Food Creations produces traditional snacks, sauces, spices, and packaged food products.",
  "password": "MAPUTO258"
},
{
  "id": "25",
  "name": "GreenFields Farms",
  "email": "greenfields@example.com",
  "country": "Cameroon",
  "city": "Bamenda",
  "category": "Agriculture",
  "business creation date": "2/14/2019",
  "business classification": "Big",
  "description": "GreenFields Farms grows vegetables, maize, beans, and other agricultural products for local markets.",
  "password": "FIELDS123"
},
{
  "id": "26",
  "name": "Sunrise Cocoa Farms",
  "email": "sunrisecocoa@example.com",
  "country": "Ghana",
  "city": "Kumasi",
  "category": "Agriculture",
  "business creation date": "6/5/2020",
  "business classification": "Big",
  "description": "Sunrise Cocoa Farms produces high-quality cocoa while supporting smallholder farmers in surrounding communities.",
  "password": "COCOA456"
},
{
  "id": "27",
  "name": "Nairobi Green Growers",
  "email": "nairobigrowers@example.com",
  "country": "Kenya",
  "city": "Nairobi",
  "category": "Agriculture",
  "business creation date": "4/17/2022",
  "business classification": "Medium",
  "description": "Nairobi Green Growers produces fresh vegetables, herbs, and fruits using sustainable farming methods.",
  "password": "GREEN789"
},
{
  "id": "28",
  "name": "Savanna Livestock Farms",
  "email": "savannalivestock@example.com",
  "country": "Nigeria",
  "city": "Kaduna",
  "category": "Agriculture",
  "business creation date": "9/9/2018",
  "business classification": "Big",
  "description": "Savanna Livestock Farms raises cattle, goats, and poultry while supplying meat and livestock products to local markets.",
  "password": "SAVANNA321"
},
{
  "id": "29",
  "name": "Kigali Organic Farms",
  "email": "kigaliorganic@example.com",
  "country": "Rwanda",
  "city": "Kigali",
  "category": "Agriculture",
  "business creation date": "3/22/2021",
  "business classification": "Small",
  "description": "Kigali Organic Farms grows vegetables, fruits, and herbs using environmentally friendly agricultural practices.",
  "password": "ORGANIC654"
},
{
  "id": "30",
  "name": "Abidjan Palm Growers",
  "email": "palmgrowers@example.com",
  "country": "Ivory Coast",
  "city": "Abidjan",
  "category": "Agriculture",
  "business creation date": "7/13/2019",
  "business classification": "Big",
  "description": "Abidjan Palm Growers produces palm oil and other agricultural products while working with local farming communities.",
  "password": "PALM852"
},
{
  "id": "31",
  "name": "Addis Harvest Farms",
  "email": "addisharvest@example.com",
  "country": "Ethiopia",
  "city": "Addis Ababa",
  "category": "Agriculture",
  "business creation date": "11/4/2020",
  "business classification": "Medium",
  "description": "Addis Harvest Farms produces grains, vegetables, coffee, and other agricultural products for domestic markets.",
  "password": "ADDIS753"
},
{
  "id": "32",
  "name": "Lusaka Crop Solutions",
  "email": "lusakacrops@example.com",
  "country": "Zambia",
  "city": "Lusaka",
  "category": "Agriculture",
  "business creation date": "5/19/2022",
  "business classification": "Small",
  "description": "Lusaka Crop Solutions grows maize, soybeans, vegetables, and other crops while providing farming support services.",
  "password": "CROP951"
},
{
  "id": "33",
  "name": "Dakar Fresh Farms",
  "email": "dakarfresh@example.com",
  "country": "Senegal",
  "city": "Dakar",
  "category": "Agriculture",
  "business creation date": "8/8/2021",
  "business classification": "Medium",
  "description": "Dakar Fresh Farms supplies locally grown vegetables, fruits, and herbs to households and businesses.",
  "password": "FRESH147"
},
{
  "id": "34",
  "name": "Harare AgriWorks",
  "email": "harareagri@example.com",
  "country": "Zimbabwe",
  "city": "Harare",
  "category": "Agriculture",
  "business creation date": "1/16/2020",
  "business classification": "Medium",
  "description": "Harare AgriWorks produces grains, vegetables, poultry products, and other agricultural goods for local communities.",
  "password": "AGRI258"
},
{
  "id": "35",
  "name": "CodeBridge Africa",
  "email": "codebridge@example.com",
  "country": "Nigeria",
  "city": "Lagos",
  "category": "Technology Services",
  "business creation date": "2/12/2021",
  "business classification": "Medium",
  "description": "CodeBridge Africa develops websites, mobile applications, and software solutions for growing businesses.",
  "password": "CODE123"
},
{
  "id": "36",
  "name": "Yaounde Digital Labs",
  "email": "yaoundedigital@example.com",
  "country": "Cameroon",
  "city": "Yaounde",
  "category": "Technology Services",
  "business creation date": "5/20/2022",
  "business classification": "Small",
  "description": "Yaounde Digital Labs provides web development, software consulting, and digital transformation services.",
  "password": "DIGITAL456"
},
{
  "id": "37",
  "name": "Nairobi Cloud Systems",
  "email": "nairobicloud@example.com",
  "country": "Kenya",
  "city": "Nairobi",
  "category": "Technology Services",
  "business creation date": "8/14/2020",
  "business classification": "Big",
  "description": "Nairobi Cloud Systems provides cloud computing, data management, cybersecurity, and IT infrastructure services.",
  "password": "CLOUD789"
},
{
  "id": "38",
  "name": "Accra TechWorks",
  "email": "accratech@example.com",
  "country": "Ghana",
  "city": "Accra",
  "category": "Technology Services",
  "business creation date": "3/9/2019",
  "business classification": "Medium",
  "description": "Accra TechWorks provides software development, IT support, website development, and technology consulting.",
  "password": "TECH321"
},
{
  "id": "39",
  "name": "Kigali Software Hub",
  "email": "kigalisoftware@example.com",
  "country": "Rwanda",
  "city": "Kigali",
  "category": "Technology Services",
  "business creation date": "7/7/2021",
  "business classification": "Small",
  "description": "Kigali Software Hub builds business applications and provides digital solutions for startups and small businesses.",
  "password": "SOFTWARE654"
},
{
  "id": "40",
  "name": "Cairo IT Solutions",
  "email": "cairoitsolutions@example.com",
  "country": "Egypt",
  "city": "Cairo",
  "category": "Technology Services",
  "business creation date": "10/21/2018",
  "business classification": "Big",
  "description": "Cairo IT Solutions delivers enterprise software, network infrastructure, cybersecurity, and IT consulting services.",
  "password": "CAIRO852"
},
{
  "id": "41",
  "name": "Dakar Digital Works",
  "email": "dakardigitalworks@example.com",
  "country": "Senegal",
  "city": "Dakar",
  "category": "Technology Services",
  "business creation date": "4/16/2023",
  "business classification": "Small",
  "description": "Dakar Digital Works develops websites, online platforms, and digital tools for local businesses.",
  "password": "DAKAR753"
},
{
  "id": "42",
  "name": "CapeTech Solutions",
  "email": "capetech@example.com",
  "country": "South Africa",
  "city": "Cape Town",
  "category": "Technology Services",
  "business creation date": "9/11/2020",
  "business classification": "Medium",
  "description": "CapeTech Solutions provides software development, IT consulting, cloud services, and business automation.",
  "password": "CAPE951"
},
{
  "id": "43",
  "name": "Lusaka Innovation Hub",
  "email": "lusakainnovation@example.com",
  "country": "Zambia",
  "city": "Lusaka",
  "category": "Technology Services",
  "business creation date": "1/30/2022",
  "business classification": "Small",
  "description": "Lusaka Innovation Hub helps businesses adopt digital tools, websites, software, and online services.",
  "password": "INNOVATION147"
},
{
  "id": "44",
  "name": "Kampala Tech Group",
  "email": "kampalatech@example.com",
  "country": "Uganda",
  "city": "Kampala",
  "category": "Technology Services",
  "business creation date": "6/18/2019",
  "business classification": "Medium",
  "description": "Kampala Tech Group provides software development, IT support, digital consulting, and technology training.",
  "password": "KAMPALA258"
},
{
  "id": "45",
  "name": "KenteCraft Studio",
  "email": "kentecraft@example.com",
  "country": "Ghana",
  "city": "Accra",
  "category": "Fashion",
  "business creation date": "5/14/2021",
  "business classification": "Small",
  "description": "KenteCraft Studio creates handmade African clothing, accessories, and contemporary designs inspired by Ghanaian textiles.",
  "password": "KENTE123"
},
{
  "id": "46",
  "name": "Lagos Style House",
  "email": "lagosstyle@example.com",
  "country": "Nigeria",
  "city": "Lagos",
  "category": "Fashion",
  "business creation date": "2/8/2020",
  "business classification": "Medium",
  "description": "Lagos Style House creates contemporary African clothing, custom outfits, and fashion accessories.",
  "password": "STYLE456"
},
{
  "id": "47",
  "name": "Douala Heritage Wear",
  "email": "heritagewear@example.com",
  "country": "Cameroon",
  "city": "Douala",
  "category": "Fashion",
  "business creation date": "8/19/2022",
  "business classification": "Small",
  "description": "Douala Heritage Wear designs modern clothing inspired by Cameroonian fabrics and traditional styles.",
  "password": "HERITAGE789"
},
{
  "id": "48",
  "name": "Nairobi Street Fashion",
  "email": "nairobistyle@example.com",
  "country": "Kenya",
  "city": "Nairobi",
  "category": "Fashion",
  "business creation date": "4/11/2019",
  "business classification": "Medium",
  "description": "Nairobi Street Fashion produces modern African streetwear, casual clothing, and accessories for young customers.",
  "password": "STREET321"
},
{
  "id": "49",
  "name": "Abidjan Couture",
  "email": "abidjancouture@example.com",
  "country": "Ivory Coast",
  "city": "Abidjan",
  "category": "Fashion",
  "business creation date": "7/25/2020",
  "business classification": "Big",
  "description": "Abidjan Couture creates custom African-inspired clothing for weddings, celebrations, and special occasions.",
  "password": "COUTURE654"
},
{
  "id": "50",
  "name": "Dakar Textile House",
  "email": "dakartextile@example.com",
  "country": "Senegal",
  "city": "Dakar",
  "category": "Fashion",
  "business creation date": "10/3/2021",
  "business classification": "Medium",
  "description": "Dakar Textile House produces traditional and contemporary Senegalese clothing using locally sourced fabrics.",
  "password": "TEXTILE852"
},
{
  "id": "51",
  "name": "Kigali Fashion Studio",
  "email": "kigalifashion@example.com",
  "country": "Rwanda",
  "city": "Kigali",
  "category": "Fashion",
  "business creation date": "3/17/2023",
  "business classification": "Small",
  "description": "Kigali Fashion Studio creates contemporary African clothing, handmade accessories, and custom designs.",
  "password": "FASHION753"
},
{
  "id": "52",
  "name": "Cape African Wear",
  "email": "capeafrican@example.com",
  "country": "South Africa",
  "city": "Cape Town",
  "category": "Fashion",
  "business creation date": "6/9/2018",
  "business classification": "Big",
  "description": "Cape African Wear creates modern African-inspired clothing and accessories for local and international customers.",
  "password": "AFRICAN951"
},
{
  "id": "53",
  "name": "Addis Fashion Works",
  "email": "addisfashion@example.com",
  "country": "Ethiopia",
  "city": "Addis Ababa",
  "category": "Fashion",
  "business creation date": "11/12/2020",
  "business classification": "Medium",
  "description": "Addis Fashion Works produces handmade clothing and accessories inspired by Ethiopian fabrics and designs.",
  "password": "ADDIS147"
},
{
  "id": "54",
  "name": "Maputo Style Collective",
  "email": "maputostyle@example.com",
  "country": "Mozambique",
  "city": "Maputo",
  "category": "Fashion",
  "business creation date": "1/6/2022",
  "business classification": "Small",
  "description": "Maputo Style Collective creates colourful contemporary clothing and accessories inspired by Mozambican culture.",
  "password": "MAPUTO258"
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

#@app.route("/api/businesses/<category>", methods=["GET"]) . although i could leave it like 
# this after adjusting the name route i just improvise on it
#to make my codes more similar
@app.route("/api/businesses/category/<category>", methods=["GET"])
def getCategory(category):
   filter_business= []
   for business in data["businesses"]:
     if business["category"] == category: 
      filter_business.append(business) 
   return filter_business
#@app.route("/api/businesses/<name>", methods=["GET"])at first i had this rout but because my name flask runing the first route s
#similar to it which was the category route i had to add another /name to differientiate. 
@app.route("/api/businesses/name/<name>", methods=["GET"])
def getbusiness(name):
   for business in data["businesses"]:
      if business["name"] == name:
         return business
         
   return {"message": "Business not found"}, 404

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

@app.route("/api/usersreviews", methods=["GET"])
def getusersReview():
   return jsonify(
      {
      "usersreviews":reviews
      }
   )

#def writeReview():
 #  newcomment = request.json()
  # business_name = newcomment["name"]

   #if business_name in reviews:
    #  reviews[business_name].append(newcomment)
   #else:
    #  reviews[business_name] = newcomment  

    #id is better

@app.route("/api/usersreviews", methods=["POST"])
def writeReview():
   newcomment = request.get_json()
   reviews.append(newcomment)
   return jsonify(newcomment), 201
  
if __name__ == "__main__":
    app.run(debug=True, port=7000)

            
   
    


    
#Next working on the REview posting
    


#def getCategory(business):
 #   if business["category"] == catergory?