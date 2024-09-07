//DOM (document object model): structured representation of html document. Allow JS
// to access html elements and styles to manipulate them


// something must be clarified
// DOM is not a part of JS, it actually a part of something called the web APIs
// (that allow JS to access and work with browser (chrome, edge, safari, firefox, etc..))
// web APIs (DOM, etc..) <-----> JS 
// more detail, web APIs (include DOM object, fetch, timers,..) is a library writren in JS
// jS -----> lib (web APIs, express.js, math....) ----> DOM (in web APIs library)

// const docs = document.querySelectorAll ('html')

// //console.log (docs)
// console.log (docs)

const alerting = () => {
    alert ("okokkekekee")
}

const a = document.querySelector ('.btn').addEventListener ('click', alerting)