// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: magic;
// Create a new widget
let widget = new ListWidget();

// Fetch weather data
const url = "https://themorehelp.com/exrate_calculator/?get=info";

// 데이터 가져오기
const req = new Request(url);
const response = await req.loadJSON().then(JSON);

// Extract relevant weather information
let usd_amount = response["USD"][0]["amount"];
let usd_won = response["USD"][0]["won"];
let cny_amount = response["CNY"][0]["amount"];
let cny_won = response["CNY"][0]["won"];
let myr_amount = response["MYR"][0]["amount"];
let myr_won = response["MYR"][0]["won"];
let sgd_amount = response["SGD"][0]["amount"];
let sgd_won = response["SGD"][0]["won"];

console.log(response["USD"][0]["won"])

// Add text to the widget
widget.addText(`🇺🇸 $${usd_amount}, ₩${usd_won}`);
widget.addText(`🇨🇳 ¥${cny_amount}, ₩${cny_won}`);
widget.addText(`🇲🇾 RM${myr_amount}, ₩${myr_won}`);
widget.addText(`🇸🇬 S$${sgd_amount}, ₩${sgd_won}`);

// Set widget background color
widget.backgroundColor = new Color("#000000");

// Present the widget
if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  widget.presentMedium();
}

// Complete the script
Script.complete();
