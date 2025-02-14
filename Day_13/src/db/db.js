const mongoose = require("mongoose");
function connect() {
  mongoose
    .connect("mongodb://localhost:27017/controllers")
    .then(function () {
      console.log("connected to mongodb");
    })
    .catch(function (err) {
      console.log(err);
    });
}
module.exports = connect;

/**
  * ..............module.exports Explanation Notes (Hindi-English Mix)..............
   module.exports initially ek khaali object hota hai:

   module.exports = {}; // Default behavior

Iska kaam hai data ya logic ko dusre modules/files tak export karna.
Do Tarike se module.exports ka use:

1. module.exports.property = "value";
Yahan hum module.exports ke existing object me ek property (field) add karte hain aur wahi export hoti hai.

Example:
module.exports.name = "Vikrant";
module.exports.age = 25;
Yahan:
module.exports = {
  name: "Vikrant",
  age: 25
};

Jab dusri file is module ko import karegi:

const example = require('./example');
console.log(example.name); // Output: Vikrant
console.log(example.age);  // Output: 25
Key Point:

Hum module.exports ke andar sirf nayi properties (fields) add karte hain.
module.exports object wahi ka wahi rehta hai, sirf usme cheezein (properties) add hoti hain.

2. module.exports = "something";
Yahan hum poore module.exports object ko replace kar dete hain.

Iska matlab hai ki:

module.exports = {}; // Initially khaali object
module.exports = "Hello"; // Ab pura replace ho gaya
Ab jo value module.exports ko assign ki gayi hai wahi export hogi.

Example:
module.exports = "Hello World";
Dusri file:
const example = require('./example');
console.log(example); // Output: Hello World
Key Point:

Is case me module.exports jo pehle ek object ko point kar raha tha, wo ab kisi aur value ko point karega (e.g., string, array, function, etc.).
Old object (default {}) ab scene se hat jata hai.
Samjho Isko Step-by-Step Example Se:
Case 1 (Property Add karna):


module.exports.property = "Vikrant";
console.log(module.exports); // Output: { property: "Vikrant" }
Case 2 (Replace karna):


module.exports = "Vikrant";
console.log(module.exports); // Output: "Vikrant"

Key Difference Between the Two:

Tarika	module.exports.property = "value";	module.exports = "value";
Kya hota hai?	Existing object ({}) ke andar ek property add hoti hai.	module.exports puri tarah replace ho jata hai.
Exported value?	Object ke andar wali sari properties export hoti hain.	Sirf wahi value export hoti hai jo assign ki gayi hai.
Default object?	Default object maintain rehta hai aur properties add hoti hain.	Default object delete/reassign ho jata hai.
Important Notes:
module.exports initially ek khaali object hota hai.
module.exports.property = "value"; ka matlab: Existing object me ek property add karna aur usse export karna.
module.exports = "value"; ka matlab: Pura module.exports ko kisi aur value se replace karna.
Jab module.exports replace hota hai (module.exports = something), to default object ({}) hat jata hai.
Analogy (Simple Example):
Socho module.exports tumhara ghar ka suitcase hai:

module.exports.property = "value";:
Tum suitcase ke andar nayi cheezein (properties) add karte ho.
Suitcase wahi ka wahi rehta hai, bas cheezein bharte ja rahe ho.
module.exports = "value";:
Tum pura suitcase hata kar ek naya item wahan rakh dete ho.
Jo cheezein pehle suitcase me thi, ab wo gayab ho jaati hain.

  */
