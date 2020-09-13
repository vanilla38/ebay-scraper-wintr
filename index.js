'use strict'

const axios = require('axios')

module.exports = class Ebay {
  constructor(apiKey) {
    this.productsOutputSchema = {
      list: {
        group: '#srp-river-results .s-item__wrapper',
        data: {
          name: {
            selector: '.s-item__info .s-item__link',
            attr: '*text*',
            modifier: [
              'totrimmed'
            ]
          },
          rating: {
            selector: '.s-item__info .b-starrating .clipped',
            attr: '*text*',
            replacer: [
              {
                search: ' out of 5 stars.',
                replace: ''
              }
            ],
            modifier: [
              'totrimmed'
            ]
          },
          price: {
            selector: '.s-item__details > div:first-child',
            attr: '*text*',
            modifier: [
              'totrimmed'
            ]
          },
          thumbnail: {
            selector: '.s-item__image-section img.s-item__image-img',
            attr: 'src',
            modifier: [
              'totrimmed'
            ]
          },
          link: {
            selector: '.s-item__info .s-item__link',
            attr: 'href',
            modifier: [
              'totrimmed'
            ]
          }
        }
      }
    }
    this.productDetailsSchema = {
      details: {
        group: 'html',
        data: {
          name: {
            selector: 'title',
            attr: '*text*',
            replacer: [
              {
                search: '| eBay',
                replace: ''
              }
            ],
            modifier: [
              'totrimmed'
            ]
          },
          rating: {
            selector: 'span[itemprop=\'aggregateRating\'] a.reviews-star-rating',
            attr: 'title',
            replacer: [
              {
                search: ', See all product reviews',
                replace: ''
              }
            ],
            modifier: [
              'totrimmed'
            ]
          },
          price: {
            selector: 'span[itemprop=\'price\']',
            attr: '*text*',
            replacer: [
              {
                'search': ' ',
                'replace': ' '
              }
            ],
            modifier: [
              'totrimmed'
            ]
          },
          thumbnail: {
            selector: 'meta[name=\'twitter:image\']',
            attr: 'content',
            modifier: [
              'totrimmed'
            ]
          },
          description: {
            selector: 'meta[name=\'description\']',
            attr: 'content',
            modifier: [
              'totrimmed'
            ]
          },
          link: {
            selector: 'link[rel=\'canonical\']',
            attr: 'href',
            modifier: [
              'totrimmed'
            ]
          },
          seller_name: {
            selector: '.si-content a[aria-label^=\'Member ID\']',
            attr: '*text*',
            modifier: [
              'totrimmed'
            ]
          },
          seller_link: {
            selector: '.si-content a[aria-label^=\'Member ID\']',
            attr: 'href',
            modifier: [
              'totrimmed'
            ]
          }
        }
      }
    }
    this.opts = {
      apikey: apiKey,
      jsrender: true,
      renderuntil: 'domloaded',
      headers: {
        'Accept-Language': 'en-US,en;q=0.9,es;q=0.8',
        'Referer': 'https://www.google.com'
      }
    }
  }

  getProducts(searchUrl) {
    return new Promise((resolve, reject) => {
      axios({
        url: 'https://api.wintr.com/fetch',
        method: 'post',
        responseType: 'json',
        data: {...this.opts, ...{ url: searchUrl, outputschema: this.productsOutputSchema } }
      })
      .then((result) => {
        resolve(result.data.content.list)
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error && err.response.data.error.message) {
          err = err.response.data.error.message
        }

        reject(err)
      })
    })
  }

  getProductDetails(productUrl) {
    return new Promise((resolve, reject) => {
      axios({
        url: 'https://api.wintr.com/fetch',
        method: 'post',
        responseType: 'json',
        data: {...this.opts, ...{ url: productUrl, outputschema: this.productDetailsSchema } }
      })
      .then((result) => {
        resolve(result.data.content.details[0])
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error && err.response.data.error.message) {
          err = err.response.data.error.message
        }

        reject(err)
      })
    })
  }
}