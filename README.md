# Ebay product scraper powered by WINTR API
> **Extract product data from Ebay search and product URLs**

### Get started

  - [Create an account](https://www.wintr.com/) on WINTR to get an API KEY
  - Visit your [WINTR account info dashboard](https://www.wintr.com/dashboard-account) and copy your API KEY

### Installation

```bash
$ npm install ebay-scraper-wintr
```

### Scrape products
```js
const Ebay = require('ebay-scraper-wintr')
const scraper = new Ebay('YOUR_WINTR_API_KEY')

scraper.getProducts('EBAY_SEARCH_URL') // Example: https://www.ebay.com/sch/i.html?_nkw=phone
.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.error(err)
})
```

### Scrape product details
```js
const Ebay = require('ebay-scraper-wintr')
const scraper = new Ebay('YOUR_WINTR_API_KEY')

scraper.getProductDetails('EBAY_PRODUCT_URL') // Example: https://www.ebay.com/itm/233697752117
.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.error(err)
})
```