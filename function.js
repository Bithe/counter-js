function milesToKm(miles) {
    var km = miles * 1.60934;
    return km;
}
var cycleRun = milesToKm(45);
console.log('total km:', cycleRun);