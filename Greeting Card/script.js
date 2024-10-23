let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsedvalues = JSON.parse(greeting);

let fromText = document.getElementById("fromText");
fromText.textContent = "From: " + parsedvalues.from;

let toText = document.getElementById("toText");
toText.textContent = "To: " + parsedvalues.to;

let greetText = document.getElementById("greetText");
greetText.textContent = parsedvalues.greetText;