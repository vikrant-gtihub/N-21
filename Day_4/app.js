const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("this is slash page");
});
app.get("/profile", function (req, res) {
  res.send("this is profile page");
});
app.get("*", function (req, res) {
  res.send(
    "this is called wildcard route when any request does not match with any of url then this is executed"
  );
});
app.listen(3000);

/**undertanding the DNS and IP address */
/**
 * (1)DNS = DNS server ek mediator ka kaam karta hai ISP aur website ke actual server ke beech. Jab aap koi website request karte hain, to:

Aapka ISP DNS server se website ka IP address request karta hai.
DNS server domain name ko IP address mein convert karta hai, jo us website ke server ka hota hai.
Phir ISP, us IP address ka use karke aapki request ko us website ke server tak bhejta hai.
 * 
 * 
 * (2)Agar 10 phones ek hi website ke liye request karte hain, to DNS unhe same IP address dega, jo us website ke server ka hai. DNS ka kaam hai domain name (website ka naam) ko ek specific IP address mein convert karna.

Yeh IP address wo hi hota hai jo website ke server ka hai. To jab 10 phones DNS request karenge, un sabko wo same IP address milega, jo website ke server ko identify karta hai. Phir sabhi phones apni requests ko us IP address ke server tak bhejenge.

Agar website ka server multiple locations par hai (load balancing), to DNS system har phone ko sabse nearest aur suitable server ka IP address de sakta hai, lekin wo specific server ka IP address hi hota hai.
 * 
 * 
 * 
 * (3)
 * 1. IP Address as Device Identifier:
     IP address ek unique identifier hota hai jo har device (jaise aapka phone, computer, etc.) ko diya jata hai. Ye IP address alphanumeric hota hai (IPv4 format mein kuch is tarah: 192.168.1.1 ya IPv6 mein thoda complex format hota hai).
    Device-level IP address ka kaam hota hai aapke device ko network pe uniquely identify karna. Jab aap koi website request karte ho, to yeh device-level IP address aapke internet service provider (ISP) ko dikhayi deta hai, jisse wo aapka device identify karta hai.
   
  2. IP Address as Server Identifier:
    Jab hum website server ki baat karte hain, to wo bhi ek unique IP address rakhta hai. Yeh IP address server ke device ko identify karta hai jo website ko host kar raha hota hai.
    Har website ka apna ek server IP address hota hai, jisme DNS system kaam karta hai. Jab aap website ka URL type karte ho, DNS us URL ko resolve karke website ke server ka IP address de deta hai.

    In dono ka relation:
    Device-level IP (aapka phone, laptop, etc.) aur server IP (website ka server) dono alag hote hain, lekin dono ka kaam similar hota hai: har ek ko unique identify karna.
   DNS ka kaam yeh hai ki aap jo URL type karte ho, usse website ke server ka IP address resolve karke aapki request ko us server tak pahuchane ka kaam karta hai.

   Example:
   Aapka phone ka IP address 192.168.1.5 ho sakta hai.
   Google ka server ka IP address 172.217.5.110 ho sakta hai.
   Jab aap "google.com" type karte ho, DNS us domain name ko 172.217.5.110 mein convert kar deta hai. Phir aapka ISP request ko us server tak bhejta hai. Aapka phone (device) ka IP address (e.g., 192.168.1.5) sirf network pe aapko uniquely identify karta hai, jabki Google ka server ka IP address 172.217.5.110 us website ko uniquely identify karta hai.

Toh, dono IP addresses alag hote hain aur apna apna kaam karte hain: ek device ko aur ek server ko identify karta hai.
 */
