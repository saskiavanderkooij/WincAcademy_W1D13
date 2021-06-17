const colors = ["yellow", "blue", "red", "orange"]
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
   i++;
}

for (index = 0; index < colors.length; index++) {
    console.log(colors[index]);
}
console.log("Alle kleuren zijn geprint");

colors.forEach(element => console.log(element));

// while loop 4 regels
// for loop 2 regels ( zonder de extra console.log("Alle kleuren zijn geprint");)
//forEach 1 regel
// de forEach vertelt in de regel code precies wat het gaat doen.


var MyCat = {
    geslacht: 'Kater',
    kleur: 'wit met zwart',
    leeftijd: 'twee',
    eten: 'veel',
    karakter:'slaapkop'
}

for (const item in MyCat) {
    console.log(item)
}
