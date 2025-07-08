const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

const products = [
    {
      "ItemName": "Apple Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Amazon Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Xbox Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Playstation Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Nintendo Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Minecraft Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Play Store Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Steam Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Twitch Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Spotify Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Uber Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Air BnB Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Puma Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Adidas Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Ebay Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Tmall Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Walmart Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Nike Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Binance Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "TNG realod pin Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Seagm Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Razer Gold Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "QQ coin Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Bigo live Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "PUBG Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "IMVU Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Paypal Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Free Fire Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Ea Sports Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Riot Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Diablo Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Valorant Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Eset Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Battle.net Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Paysafe Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Apex legends Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Fortnite Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Nexon Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Spiderman Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Malice Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Starcraft Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Atomic heart Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Fifa Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Cyberpunk Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Forza Horizon Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Sims Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Residents evil Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Hitpoints Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Gash Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Gta Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Roblox Gift Card",
      "ItemCategory": "Gift Cards",
      "Price": "160-1600",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Snap Chat+ 1 month",
      "ItemCategory": "Subscriptions",
      "Price": "30",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Snap Chat+ 1 year",
      "ItemCategory": "Subscriptions",
      "Price": "100",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Telegram 1 month",
      "ItemCategory": "Subscriptions",
      "Price": "",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Telegram 1 year",
      "ItemCategory": "Subscriptions",
      "Price": "",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Hulu 1 month",
      "ItemCategory": "Subscriptions",
      "Price": "",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Netfllix with ads",
      "ItemCategory": "Subscriptions",
      "Price": "10",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Netfllix Standard",
      "ItemCategory": "Subscriptions",
      "Price": "45",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Netflix Premium",
      "ItemCategory": "Subscriptions",
      "Price": "75",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Skype",
      "ItemCategory": "Subscriptions",
      "Price": "",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Nord Vpn",
      "ItemCategory": "Subscriptions",
      "Price": "",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Disney Plus",
      "ItemCategory": "Subscriptions",
      "Price": "",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Amazon Prime",
      "ItemCategory": "Subscriptions",
      "Price": "",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Mcafee antivirus",
      "ItemCategory": "Subscriptions",
      "Price": "",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Terabox",
      "ItemCategory": "Subscriptions",
      "Price": "",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Surf shark",
      "ItemCategory": "Subscriptions",
      "Price": "",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Call Of Duty Mobile",
      "ItemCategory": "Subscriptions",
      "Price": "",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Five Carrd",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "100",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "ETISALAT",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Hello Card",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Airalo",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "02 Vodafone",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Lyca",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Smart buddy",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Redone",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Zain",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "T mobile",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Unifi Mobile",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Lebara",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Tune talk",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "1-2 call",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "mOBIFONE",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Viettel",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "U mobile",
      "ItemCategory": "Telco Pre-paid cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Netherlands Physical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "520",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "USA activated no airtimePhysical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "700",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "USA unactivated",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "250",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Switzerland Physical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "350",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Poland Physical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "350",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Ukraine Physical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "350",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "France Physical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "350",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Sweden Physical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "350",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Morocco Physical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "500",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Canada Physical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "350",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "UK Physical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "450",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "German Physical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "1150",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Lithuania Physical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "350",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Spain Physical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "850",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Australia Physical Sim",
      "ItemCategory": "Foreign Sim Cards",
      "Price": "",
      "Stock": "30",
      "Status": "Temporarily unavailable",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Paypal Neosurf",
      "ItemCategory": "Payment Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Skrill",
      "ItemCategory": "Payment Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Mifinity",
      "ItemCategory": "Payment Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Payeer",
      "ItemCategory": "Payment Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Webmoney",
      "ItemCategory": "Payment Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "AdvCash",
      "ItemCategory": "Payment Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Payz",
      "ItemCategory": "Payment Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Paysera",
      "ItemCategory": "Payment Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Venmo",
      "ItemCategory": "Payment Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Fasapay",
      "ItemCategory": "Payment Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Revolut",
      "ItemCategory": "Payment Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Toneo first",
      "ItemCategory": "Payment Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Vanilla visa Card ",
      "ItemCategory": "Virtual Credit Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Mastercard",
      "ItemCategory": "Virtual Credit Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "American Express",
      "ItemCategory": "Virtual Credit Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Visa card",
      "ItemCategory": "Virtual Credit Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Pds Mastercard",
      "ItemCategory": "Virtual Credit Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Mint prepaid card",
      "ItemCategory": "Virtual Credit Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    },
    {
      "ItemName": "Toneo first Mastercard",
      "ItemCategory": "Virtual Credit Cards",
      "Price": "",
      "Stock": "30",
      "Status": "In stock",
      "Notes": "",
      "InStock": "TRUE"
    }
  ]

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const formatted = products.map(p => ({
      ItemName: p.ItemName,
      ItemCategory: p.ItemCategory.toLowerCase(),
      Price: parseFloat(p.Price.split("-")[0]) || 0, // takes min price
      Stock: parseInt(p.Stock, 10) || 0,
      Status: p.Status.toLowerCase() === "in stock" ? "available" : "unavailable",
      Notes: p.Notes || "",
      InStock: p.InStock.toLowerCase() === "true"
    }));

    const res = await Product.insertMany(formatted);
    console.log(`✅ Inserted ${res.length} products`);

    process.exit();
  } catch (err) {
    console.error("❌ Failed:", err.message);
    process.exit(1);
  }
};

run();
