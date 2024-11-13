if (localStorage.penny) {
    penny = JSON.parse(localStorage.penny);
} else {
    penny = {
        pennyNum: 0,
        pennyTotal: 0,
    }
    localStorage.setItem("penny", JSON.stringify(penny))
}

if (localStorage.nickel) {
    nickel = JSON.parse(localStorage.nickel);
} else {
    nickel = {
        nickelNum: 0,
        nickelTotal: 0,
    }
    localStorage.setItem("nickel", JSON.stringify(nickel))
}

if (localStorage.dime) {
    dime = JSON.parse(localStorage.dime);
} else {
    dime = {
        dimeNum: 0,
        dimeTotal: 0,
    }
    localStorage.setItem("dime", JSON.stringify(dime))
}

if (localStorage.quarter) {
    quarter = JSON.parse(localStorage.quarter);
} else {
    quarter = {
        quarterNum: 0,
        quarterTotal: 0,
    }
    localStorage.setItem("quarter", JSON.stringify(quarter))
}

if (localStorage.halfDollar) {
    halfDollar = JSON.parse(localStorage.halfDollar);
} else {
    halfDollar = {
        halfDollarNum: 0,
        halfDollarTotal: 0,
    }
    localStorage.setItem("halfDollar", JSON.stringify(halfDollar))
}

if (localStorage.dollar) {
    dollar = JSON.parse(localStorage.dollar);
} else {
    dollar = {
        dollarNum: 0,
        dollarTotal: 0,
    }
    localStorage.setItem("dollar", JSON.stringify(dollar))
}

if (localStorage.totalMoney) {
    totalMoney = parseFloat(localStorage.totalMoney);
} else {
    totalMoney = 0;
    localStorage.setItem("totalMoney", JSON.stringify(totalMoney));
}

function updateScreen() {
    document.getElementById("pennyNum").innerHTML = "Number of Pennies: " +penny.pennyNum;
    document.getElementById("pennyTotal").innerHTML = "Total Value of Pennies: " + penny.pennyTotal;
    document.getElementById("nickelNum").innerHTML = "Number of Nickels: " + nickel.nickelNum;
    document.getElementById("nickelTotal").innerHTML = "Total Value of Nickels: " + nickel.nickelTotal;
    document.getElementById("dimeNum").innerHTML = "Number of Dimes: " + dime.dimeNum;
    document.getElementById("dimeTotal").innerHTML = "Total Value of Dimes: " + dime.dimeTotal;
    document.getElementById("quarterNum").innerHTML = "Number of Quarters: " + quarter.quarterNum;
    document.getElementById("quarterTotal").innerHTML = "Total Value of Quarter: " + quarter.quarterTotal;
    document.getElementById("halfDollarNum").innerHTML = "Number of Half Dollars: " + halfDollar.halfDollarNum;
    document.getElementById("halfDollarTotal").innerHTML = "Total Value of Half Dollars: " + halfDollar.halfDollarTotal;
    document.getElementById("dollarNum").innerHTML = "Number of Dollars: " + dollar.dollarNum;
    document.getElementById("dollarTotal").innerHTML = "Total Value of Dollars: " + dollar.dollarTotal;
    document.getElementById("totalMoney").innerHTML = "Total Money: " + totalMoney;
}

function addPenny() {
    penny.pennyNum++;
    localStorage.penny = JSON.stringify(penny);
    pennyCalc();
    totalCalc()
    updateScreen();
}

function subPenny() {
    if (penny.pennyNum >= 1) {
        penny.pennyNum--;
    }
    localStorage.penny = JSON.stringify(penny);
    pennyCalc();
    totalCalc()
    updateScreen();
}

function addHalfDollar() {
    halfDollar.halfDollarNum++;
    localStorage.halfDollar = JSON.stringify(halfDollar);
    halfDollarCalc();
    totalCalc()
    updateScreen();
}

function subHalfDollar() {
    if (halfDollar.halfDollarNum >= 1) {
        halfDollar.halfDollarNum--;
    }
    localStorage.halfDollar = JSON.stringify(halfDollar);
    halfDollarCalc();
    totalCalc()
    updateScreen();
}

function addDollar() {
    dollar.dollarNum++;
    localStorage.dollar = JSON.stringify(dollar);
    dollarCalc();
    totalCalc()
    updateScreen();
}

function subDollar() {
    if (dollar.dollarNum >= 1) {
        dollar.dollarNum--;
    }
    localStorage.dollar = JSON.stringify(dollar);
    dollarCalc();
    totalCalc()
    updateScreen();
}

function addNickel() {
    nickel.nickelNum++;
    localStorage.nickel = JSON.stringify(nickel);
    nickelCalc();
    totalCalc()
    updateScreen();
}

function subNickel() {
    if (nickel.nickelNum >= 1) {
        nickel.nickelNum--;
    }
    localStorage.nickel = JSON.stringify(nickel);
    nickelCalc();
    totalCalc()
    updateScreen();
}

function addDime() {
    dime.dimeNum++;
    localStorage.dime = JSON.stringify(dime);
    dimeCalc();
    totalCalc()
    updateScreen();
}

function subDime() {
    if (dime.dimeNum >= 1) {
        dime.dimeNum--;
    }
    localStorage.dime = JSON.stringify(dime);
    dimeCalc();
    totalCalc()
    updateScreen();
}

function addQuarter() {
    quarter.quarterNum++;
    localStorage.quarter = JSON.stringify(quarter);
    quarterCalc();
    totalCalc()
    updateScreen();
}

function subQuarter() {
    if (quarter.quarterNum >= 1) {
        quarter.quarterNum--;
    }
    localStorage.quarter = JSON.stringify(quarter);
    quarterCalc();
    totalCalc()
    updateScreen();
}

function pennyCalc() {
    penny.pennyTotal = (Math.round((0.01 * penny.pennyNum) * 100) / 100).toFixed(2);
    localStorage.penny = JSON.stringify(penny);
    totalCalc();
}

function halfDollarCalc() {
    halfDollar.halfDollarTotal = (Math.round((0.5 * halfDollar.halfDollarNum) * 100) / 100).toFixed(2);
    localStorage.halfDollar = JSON.stringify(halfDollar);
    totalCalc();
}

function dollarCalc() {
    dollar.dollarTotal = (Math.round((1 * dollar.dollarNum) * 100) / 100).toFixed(2);
    localStorage.dollar = JSON.stringify(dollar);
    totalCalc();
}

function dimeCalc() {
    dime.dimeTotal = (Math.round((0.10 * dime.dimeNum) * 100) / 100).toFixed(2);
    localStorage.dime = JSON.stringify(dime);
    totalCalc();
}

function nickelCalc() {
    nickel.nickelTotal = (Math.round((0.05 * nickel.nickelNum) * 100) / 100).toFixed(2);
    localStorage.nickel = JSON.stringify(nickel);
    totalCalc();
}

function quarterCalc() {
    quarter.quarterTotal = (Math.round((0.25 * quarter.quarterNum) * 100) / 100).toFixed(2);
    localStorage.quarter = JSON.stringify(quarter);
    totalCalc();
}

function totalCalc() {
    totalMoney = (Math.round((parseFloat(penny.pennyTotal) + parseFloat(dime.dimeTotal) + parseFloat(nickel.nickelTotal) + parseFloat(quarter.quarterTotal) + parseFloat(dollar.dollarTotal) + parseFloat(halfDollar.halfDollarTotal)) * 100) / 100).toFixed(2);
    localStorage.totalMoney = JSON.stringify(totalMoney);
}

function addFive() {
    penny.pennyNum += 5;
    localStorage.penny = JSON.stringify(penny);
    pennyCalc()
    nickel.nickelNum += 5;
    localStorage.nickel = JSON.stringify(nickel);
    nickelCalc()
    dime.dimeNum += 5;
    localStorage.dime = JSON.stringify(dime);
    dimeCalc()
    quarter.quarterNum += 5;
    localStorage.quarter = JSON.stringify(quarter);
    quarterCalc()
    halfDollar.halfDollarNum += 5;
    localStorage.halfDollar = JSON.stringify(halfDollar);
    halfDollarCalc()
    dollar.dollarNum += 5;
    localStorage.dollar = JSON.stringify(dollar);
    dollarCalc()
    totalCalc()
    updateScreen()
}

function subFive() {
    if (penny.pennyNum >= 5 && dime.dimeNum >= 5 && nickel.nickelNum >= 5 && quarter.quarterNum >= 5 && halfDollar.halfDollarNum >= 5 && dollar.dollarNum >= 5) {
        penny.pennyNum -= 5;
        localStorage.penny = JSON.stringify(penny);
        pennyCalc()
        nickel.nickelNum -= 5;
        localStorage.nickel = JSON.stringify(nickel);
        nickelCalc()
        dime.dimeNum -= 5;
        localStorage.dime = JSON.stringify(dime);
        dimeCalc()
        quarter.quarterNum -= 5;
        localStorage.quarter = JSON.stringify(quarter);
        quarterCalc()
        halfDollar.halfDollarNum -= 5;
        localStorage.halfDollar = JSON.stringify(halfDollar);
        halfDollarCalc()
        dollar.dollarNum -= 5;
        localStorage.dollar = JSON.stringify(dollar);
        dollarCalc()
        totalCalc()
        updateScreen()
    }
}



