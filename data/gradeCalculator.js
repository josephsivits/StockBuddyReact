
const date = '05-02-2022'

const threeDayBounce = require(`./${date}-JSON/stocks-screener-3-day-bounce-${date}.json`)
const fiftyTwoWeekHighTopPicks = require(`./${date}-JSON/stocks-screener-52-week-high-top-picks-${date}.json`)
const dividendProspects = require(`./${date}-JSON/stocks-screener-dividend-prospects-${date}.json`)
const fundamentallyFine = require(`./${date}-JSON/stocks-screener-fundamentally-fine-${date}.json`)
const goldenCross = require(`./${date}-JSON/stocks-screener-golden-cross-${date}.json`)
const hotProspects = require(`./${date}-JSON/stocks-screener-hot-prospects-${date}.json`)
const rsiOverbought = require(`./${date}-JSON/stocks-screener-rsi-overbought-${date}.json`)
const stocksNearing52WeekHigh = require(`./${date}-JSON/stocks-screener-stocks-nearing-52w-high-${date}.json`)
const strongVolumeGains = require(`./${date}-JSON/stocks-screener-strong-volume-gains-${date}.json`)
const jPattern = require(`./${date}-JSON/stocks-screener-j-pattern-${date}.json`)

const fullStocks = require(`./${date}-JSON/full-stocks-${date}.json`)


let stocks = new Map()

var stockProspects = [threeDayBounce, fiftyTwoWeekHighTopPicks, dividendProspects, fundamentallyFine, goldenCross, hotProspects, stocksNearing52WeekHigh, strongVolumeGains, jPattern]

var fullList = [fullStocks, threeDayBounce, fiftyTwoWeekHighTopPicks, dividendProspects, fundamentallyFine, goldenCross, hotProspects, stocksNearing52WeekHigh, strongVolumeGains, jPattern, rsiOverbought]

for(var i = 0; i < stockProspects.length; i++) {
    for(var item in stockProspects[i]) {
        if(stocks.has(stockProspects[i][item].Symbol)) {
            stocks.set(stockProspects[i][item].Symbol, stocks.get(stockProspects[i][item].Symbol) + 1)
            //console.log('stock already exists')
        } else {
            stocks.set(stockProspects[i][item].Symbol, 1)
        }
    }
}

for(var item in rsiOverbought) {
    if(stocks.has(rsiOverbought[item].Symbol)) {
        stocks.set(rsiOverbought[item].Symbol, stocks.get(rsiOverbought[item].Symbol) - 1)
    } else {
        stocks.set(rsiOverbought[item].Symbol, -1)
    }
}
            

for(var item in fullStocks) {
    if(!stocks.has(fullStocks[item].Symbol)) {
        stocks.set(fullStocks[item].Symbol, 0)
    }
}

const stockSortKey = new Map([...stocks.entries()].sort());
const stockSortValue = new Map([...stockSortKey.entries()].sort((a, b) => b[1] - a[1]));
JSON.stringify(stockSortValue)
//console.log(stockSortValue)

var counter = 0;

var stockList = []

// using the symbol, we will traverse the full list and add it to json object
for(var i = 0; i < fullList.length; i++) {
    for(var item in fullList[i]) {
        if(stockSortValue.has(fullList[i][item].Symbol)) {
            //console.log(counter)
            counter += 1;


            stockList.push(fullList[i][item] + ',' + stockSortValue.get(fullList[i][item].Symbol))`-`

        }
    }
}



const fs = require('fs');
fs.writeFileSync('stockData.json', JSON.stringify(stockList), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

/*
document.write(JSON.stringify(stockList))
console.log(stockList)
*/
console.log(counter)


// freeing memory
stocks.clear()
stockSortKey.clear()
stockSortValue.clear()