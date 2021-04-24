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

/*
PRINTS: 
[
  {
    name: 'Samsung Galaxy Note 9 N960U 128/512 ATT T-Mobile Sprint Verizon Carrier Unlocked',
    rating: null,
    price: 'Open Box',
    thumbnail: 'https://i.ebayimg.com/thumbs/images/g/yZEAAOSwJWFgR~7k/s-l225.jpg',
    link: 'https://www.ebay.com/itm/254398277923?epid=23029856079&hash=item3b3b51a923:g:yZEAAOSwJWFgR~7k'
  },
  {
    name: 'Apple iPhone 11-128GB All Colors- GSM & CDMA Unlocked - Sealed- Factory Warranty',
    rating: null,
    price: 'Brand New',
    thumbnail: 'https://i.ebayimg.com/thumbs/images/g/l7QAAOSwHOVdeAJ8/s-l225.jpg',
    link: 'https://www.ebay.com/itm/153638834105?epid=5034224981&hash=item23c5968fb9:g:l7QAAOSwHOVdeAJ8'
  },
  {
    name: 'Brand New LG V60 ThinQ 5G LM-V600AM 128GB Blue GSM AT&T GSM Unlocked Smartphone',
    rating: null,
    price: 'Brand New',
    thumbnail: 'https://i.ebayimg.com/thumbs/images/g/vvAAAOSwZW5f1AHU/s-l225.jpg',
    link: 'https://www.ebay.com/itm/383853973992?epid=3038078071&hash=item595f7ad1e8:g:vvAAAOSwZW5f1AHU'
  },
  ...
]
*/
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

/*
PRINTS: 
{
  name: 'Samsung Galaxy Note 9 N960U 128/512 ATT T-Mobile Sprint Verizon Carrier Unlocked',
  rating: null,
  price: 'US $269.00/ea',
  thumbnail: 'https://i.ebayimg.com/images/g/yZEAAOSwJWFgR~7k/s-l400.jpg',
  description: 'Genuine, Tested, and Certified Samsung Galaxy Note 9. Tap "Show More" or "See Full Description" below for more details about these devices. If you have any questions at all, please feel free to send a message and ask!.',
  link: 'https://www.ebay.com/itm/254398277923',
  seller_name: null,
  seller_link: null
}
*/
```
