const play = document.getElementById("play")
const playText = ["Here, we provide fast and reliable services to our customers!", "No need to register!", "Just select items and speak to us directly!"]
const menuBar = document.getElementById("menubar")
const menu = document.getElementById("menu")
const linkList = document.querySelectorAll(".link")
const notificationPopup = document.querySelector(".notification")
const cart = document.getElementById("cart")
const itemsHidden = document.querySelector(".item--list--hidden")
// const logo = document.querySelector(".inactive")
const cartCloseButton = document.getElementById("cart--close--button")
const searchBar = document.getElementById("search")
const orderButtton = document.getElementById("order")
const itemList = document.querySelector(".items")
const selectedItemsPage = document.querySelector(".selected--item--page")
const clearCart = document.querySelector(".clear--cart")
const searchedList = document.getElementById("searchedList")
const counterDisplay = document.querySelectorAll("#counter")
const selectPricePage = document.getElementById("selectPrice")
const el = document.getElementById("price")
let counter = 0
let cartList = []
let searchList = []
let inCart = false
let startingAnimation = true
let prices = []

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
      "ItemName": "Netherlands Physical Sim\n",
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

// play.innerHTML = playText[counter]

// let textcounter = 0;
// for (let i = 0; i < playText.length; i++) {
//     const text = playText[i];
//     setTimeout(() => {
//         console.log(text);
//     }, 1000)
// }

if (startingAnimation) {
    play.innerHTML = playText[0]
}

setInterval(() => {
    if (counter < 2) {
        startingAnimation = false
        counter += 1
        // console.log(counter)
        play.innerHTML = playText[counter]
    } else {
        counter = 0
        // console.log(counter)
        play.innerHTML = playText[counter]
    }
}, 4000);

const sum = function(list) {
    let total = 0
    list.forEach(amount => {
        total += Number(amount)
    })

    document.querySelector(".total--price").innerHTML = `Total Price: ₵${total}`
}

cart.addEventListener("click", () => {
    sum(prices)
    itemsHidden.classList.add("item--list--show")
  })
  
const removeButton = document.querySelectorAll("#removeButton")
for (let index = 0; index < removeButton.length; index++) {
  removeButton[index].addEventListener("click", () => {
      removeItem(index)
      alert("Hi")
  })
      
}

menuBar.addEventListener("click", () => {
    menu.classList.toggle("item-show")
    menuBar.classList.toggle("actif")
})


linkList.forEach(element => {
    element.addEventListener("click", () => {
        menu.classList.remove("item-show")
        menuBar.classList.toggle("actif")

    }) 

});

cartCloseButton.addEventListener("click", () => {
    inCart = false
    itemsHidden.classList.remove("item--list--show")
})


orderButtton.addEventListener("click", () => {
    if (cartList.length === 0) {
        alert("No items have been selected!")
    }
})

const notify = (message) => {
    document.getElementById("message").innerHTML = `Added ${message}`

    notificationPopup.classList.add("show--notification")
    setTimeout(() => {
    notificationPopup.classList.remove("show--notification")
    }, 3000);
}

const updateCart = (productData) => {
    itemList.innerHTML = cartList.join("");
    localStorage.setItem("cartList", JSON.stringify(cartList));
    notify(productData.ItemName);
    updateCounterDisplay();
};

const addToCartSelect = (productData, productDataPrice) => {
  const newElement = `<li class="item">
  <div class="closee">
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px" stroke="#fff" stroke-width="1" id="removeButton""><path d="M 19.990234 2.9863281 A 1.0001 1.0001 0 0 0 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 A 1.0001 1.0001 0 0 0 3.9902344 2.9902344 A 1.0001 1.0001 0 0 0 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 A 1.0001 1.0001 0 1 0 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 A 1.0001 1.0001 0 1 0 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 A 1.0001 1.0001 0 0 0 19.990234 2.9863281 z"/></svg>
  </div>
  <div>
  <span class="item--name">${productData.ItemName}</span>
  <span class="item--price">₵${productDataPrice}</span>
  </div>
  </li>`;
  
  if  (selectedItemsPage.classList.contains("selected--item--page--show")) {
      selectedItemsPage.classList.remove("selected--item--page--show")
  }
  cartList.push(newElement);
  updateCart(productData)
  prices.push(productDataPrice)
}


const addToCart = (productData) => {
    if (productData.Price.split('').length > 3 && productData.Price.split('').length > 4) {
        openSelectPrice(productData)
        if  (selectedItemsPage.classList.contains("selected--item--page--show")) {
          selectedItemsPage.classList.remove("selected--item--page--show")
      }
    } else {
      const newElement = `<li class="item">
      <div class="closee">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px" stroke="#fff" stroke-width="1" id="removeButton""><path d="M 19.990234 2.9863281 A 1.0001 1.0001 0 0 0 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 A 1.0001 1.0001 0 0 0 3.9902344 2.9902344 A 1.0001 1.0001 0 0 0 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 A 1.0001 1.0001 0 1 0 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 A 1.0001 1.0001 0 1 0 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 A 1.0001 1.0001 0 0 0 19.990234 2.9863281 z"/></svg>
      </div>
      <div>
      <span class="item--name">${productData.ItemName}</span>
      <span class="item--price">₵${productData.Price}</span>
      </div>
      </li>`;
      
      if  (selectedItemsPage.classList.contains("selected--item--page--show")) {
          selectedItemsPage.classList.remove("selected--item--page--show")
      }
      cartList.push(newElement);
      updateCart(productData)
      prices.push(productData.Price)
    }
}

clearCart.addEventListener("click", () => {
    cartList = [];
    prices = []
    localStorage.setItem("cartList", JSON.stringify(cartList));
    itemList.innerHTML = ""
    updateCounterDisplay();
    sum(prices)
})

const removeItem = (item) => {
    cartList.splice(item, 1)
    itemList.innerHTML = cartList.join("")
    localStorage.setItem("cartList", JSON.stringify(cartList))
    updateCart(cartList)
    updateCounterDisplay()
}



const updateCounterDisplay = () => {
    let numberOfItems = itemList.getElementsByTagName("li").length;
    if (numberOfItems > 0) {
        counterDisplay.forEach((counter) => {
            counter.style.background = "red";
            counter.textContent = numberOfItems;

        })
    } else {
        counterDisplay.forEach((counter) => {
            counter.style.background = "#1F201F";
            counter.textContent = "0";
        })
    }
};

window.addEventListener("load", () => {
  let storedCartList = localStorage.getItem("cartList");
  if (storedCartList) {
      cartList = JSON.parse(storedCartList);
      itemList.innerHTML = cartList.join("");
      updateCounterDisplay();
  }
});




let data = []
let yourData = {"data": data}

let storedData = localStorage.getItem("productData");
if (storedData) {
    yourData.data = JSON.parse(storedData);
    initializeProducts();
    sum(prices)
    // initializeCart();
} else {
    // fetch("https://sheetdb.io/api/v1/5ayhpj0thqk3w")
    //     .then(response => response.json())
    //     .then(data => {
    //         yourData.data = data;
    //         localStorage.setItem("productData", JSON.stringify(data));
    //         initializeProducts();
    //         // initializeCart();
    //     })
    //     .catch(error => console.error('Error fetching data:', error));
    yourData.data = products
    localStorage.setItem("productData", JSON.stringify(yourData.data))
    initializeProducts()
    sum(prices)
}



function initializeProducts() {
    for (let product = 0; product < yourData.data.length; product++) {
        let productData = yourData.data[product]
        if (productData.ItemCategory === 'Foreign Sim Cards') {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in--stock" : "out--stock"}">${productData.Status}</p>
                                                <span tabindex="0" class="add--area" onclick='addToCart(${JSON.stringify(productData)})'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products").appendChild(newItem)
        } else if (productData.ItemCategory === "Gift Cards") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span tabindex="0" class="add--area" onclick='addToCart(${JSON.stringify(productData)})'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--giftcards").appendChild(newItem)
        } else if (productData.ItemCategory === "Telco Pre-paid cards") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span tabindex="0" class="add--area" onclick='addToCart(${JSON.stringify(productData)})'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--telco").appendChild(newItem)

        } else if (productData.ItemCategory === "Subscriptions") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span tabindex="0" class="add--area" onclick='addToCart(${JSON.stringify(productData)})'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--subscriptions").appendChild(newItem)

        } else if (productData.ItemCategory === "Virtual Credit Cards") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span tabindex="0" class="add--area" onclick='addToCart(${JSON.stringify(productData)})'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--virtual").appendChild(newItem)
        } else if (productData.ItemCategory === "Payment Cards") {
            let newItem = document.createElement("li")
            newItem.innerHTML = `<li class="product">
                                        <div id="content">
                                            <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag">
                                            <div class="control">
                                                <span class="item--name">${productData.ItemName}</span>
                                                <p class="item--price">₵${productData.Price}</p>
                                                <p class="${productData.InStock ? "in-stock" : "out-stock"}}">${productData.Status}</p>
                                                <span tabindex="0" class="add--area" onclick='addToCart(${JSON.stringify(productData)})'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>Add to Cart</span>
                                            </div>
                                        </div>
        
                                    </li>`
            document.querySelector(".products--payment").appendChild(newItem)
        }
    }
}

const pricesList = ["160", "260", "360", "1600"]

let firstClick = 0
const updatePrice = function(product, number) {
  const addPricee = document.getElementById("addPrice")
  addPricee.addEventListener("click", () => {
    addToCartSelect(product, pricesList[number])
  })
}

const openSelectPrice = (product) => {
  selectPricePage.innerHTML = `
 <div class="select--price--container">
            <div class="content">
                <h1>--Select Price--</h1>
                <div class="sp--item--name">
                    <h2>${product.ItemName}</h2>
                </div>
                <div id="price">
                    <button class="priceBtn" onclick='updatePrice(${JSON.stringify(product)}, 0)'>160</button>
                    <button class="priceBtn" onclick='updatePrice(${JSON.stringify(product)}, 1)'>260</button>
                    <button class="priceBtn" onclick='updatePrice(${JSON.stringify(product)}, 2)'>360</button>
                    <button class="priceBtn" onclick='updatePrice(${JSON.stringify(product)}, 3)'>1600</button>
                </div>
                <div class="buttons">
                    <button id="optionsSelectCancelButton">Cancel</button>
                    <button id="addPrice">Add to Cart</button>

                </div>
            </div>
        </div>
`
  selectPricePage.classList.add("select--price--show")
  const optionsSelectCancelButton = document.getElementById("optionsSelectCancelButton")
  
  optionsSelectCancelButton.addEventListener("click", () => {
    selectPricePage.classList.remove("select--price--show")
  })
  
}


for (let j = 0; j < searchedList.length; j++) {
    searchedList[j].addEventListener("click", () => {
        let productData = yourData.data.find(item => item.ItemName === searchedList[j].textContent);
        
        selectedItemsPage.getElementsByClassName("texts")[0].innerHTML = `
            <img src="./Images/Countries/${imageVerify(productData.ItemName)}" alt="${productData.ItemName.split(" ")[0]} flag" id="selected--item--image">
            <h1 class="selected--item--name">
            ${searchedList[j].textContent}
            </h1>
            <span class="selected--item--price">
            Price: ${productData.Price}
            </span>
            <span class="selected--item--quantity">
            Quantity: ${productData.Stock}
            </span>
        `;
        selectedItemsPage.getElementsByClassName("selected--items--buttons")[0].innerHTML = `
            <button class="cancel--selection" onclick='hideSelection()' id="selected--close--button">Cancel</button>
            <button class="add--selection" onclick='addToCart(${JSON.stringify(productData)})'>Add to Cart</button>
        `
        
        ;
        selectedItemsPage.classList.add("selected--item--page--show")
    })
}
const product = document.querySelectorAll(".product")

const hideSelection = () => {
  selectedItemsPage.classList.remove("selected--item--page--show");
};



const selectItem = (productElement) => {
    let productData = yourData.data.find(item => item.ItemName === productElement.querySelector(".item--name").textContent);
    
    selectedItemsPage.getElementsByClassName("texts")[0].innerHTML = `
        <img src="./Images/Imagesss/${productData.ItemName}.png" alt="${productData.ItemName.split(" ")[0]} flag" id="selected--item--image">
        <h1 class="selected--item--name">
        ${productElement.querySelector(".item--name").textContent}
        </h1>
        <span class="selected--item--price">
        Price: ${productElement.querySelector(".item--price").textContent}
        </span>
        <span class="selected--item--quantity">
        Quantity: ${productData.Stock}
        </span>
    `;
    selectedItemsPage.getElementsByClassName("selected--items--buttons")[0].innerHTML = `
        <button class="cancel--selection" onclick='hideSelection()' id="selected--close--button">Cancel</button>
        <button class="add--selection" onclick='addToCart(${JSON.stringify(productData)})'>Add to Cart</button>
    `;
    selectedItemsPage.classList.add("selected--item--page--show");
};




for (let i = 0; i < product.length; i++) {
    product[i].getElementsByTagName("img")[0].addEventListener("click", () => {
        selectItem(product[i]);
    });
}


for (let j = 0; j < searchedList.length; j++) {
    searchedList[j].addEventListener("click", () => {
        let productData = yourData.data.find(item => item.ItemName === searchedList[j].textContent);
        
        selectedItemsPage.getElementsByClassName("texts")[0].innerHTML = `
            <img src="./Images/Countries/${imageVerify(productData.ItemName)}" alt="${productData.ItemName.split(" ")[0]} flag" id="selected--item--image">
            <h1 class="selected--item--name">
            ${searchedList[j].textContent}
            </h1>
            <span class="selected--item--price">
            Price: ${productData.Price}
            </span>
            <span class="selected--item--quantity">
            Quantity: ${productData.Stock}
            </span>
        `;
        selectedItemsPage.getElementsByClassName("selected--items--buttons")[0].innerHTML = `
            <button class="cancel--selection" onclick='hideSelection()' id="selected--close--button">Cancel</button>
            <button class="add--selection" onclick='addToCart(${JSON.stringify(productData)})'>Add to Cart</button>
        `
        
        ;
        selectedItemsPage.classList.add("selected--item--page--show")
    })
}

let numberOfItems= itemList.getElementsByTagName("li").length
if (numberOfItems > 0) {
    counterDisplay.forEach((counter) => {
        counter.style.background = "red";
        counter.textContent = numberOfItems;

    })
} else {
    counterDisplay.forEach((counter) => {
        counter.style.background = "#1F201F";
        counter.textContent = "0";
    })
}

searchBar.addEventListener("keyup", () => {
    if (searchBar.value === "" || searchBar.value === " ") {
        searchedList.style.display = "none";
        searchedList.innerHTML = "";
    } else {
        let searchValue = searchBar.value.toLowerCase();
        searchedList.innerHTML = "";
        let found = false;
        for (let i = 0; i < yourData.data.length; i++) {
            let productName = yourData.data[i].ItemName.toLowerCase();
            if (productName.includes(searchValue)) {
                found = true;
                let listItem = document.createElement("li");
                listItem.className = "searched--item";
                let itemName = document.createElement("span");
                itemName.className = "item--name";
                itemName.textContent = yourData.data[i].ItemName;
                let itemPrice = document.createElement("span");
                itemPrice.className = "item--price";
                itemPrice.textContent = `₵${yourData.data[i].Price}`;
                listItem.appendChild(itemName);
                listItem.appendChild(itemPrice);
                listItem.addEventListener("click", () => {
                    searchBar.value = itemName.textContent;
                    searchedList.style.display = "none";
                    selectItem(listItem);
                });
                searchedList.appendChild(listItem);
            }
        }
        searchedList.style.display = found ? "flex" : "none";
    }
})