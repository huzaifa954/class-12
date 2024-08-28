let user=prompt("Enter city name")
let cities=["karachi","lahore","islamabad"]
let city;
let isfound=false
for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    console.log(city,city===user)
    if (city===user) {
        isfound=true
        // alert("you are allowed")
        break;
    } else {
        isFound = false
        // alert("wait for your city"+ "  "+ user+" "+"current city="+" "+city)        
    }
}
    let users=confirm("are you confirm this is your city")
    if (users === cities) {
        alert("welcome")
        // alert("your train numbet is etc")
    }
    if (isfound) {
        alert("WELCOME")  
    }else{
        alert("not")
    }
let ab="array IS array IS array"
console.log(ab[0])
let cd=ab.slice(0,2)
console.log(ab.replace(/array/g, "NIAZI"))
let x=550
console.log(Math.fround(x))