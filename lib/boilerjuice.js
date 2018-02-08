const request = require('request');

const url = days => {
  return `https://www.boilerjuice.com/includes/priceChart.inc.php?a=1&ot=1&d=${days}&c=0&va=1&ex=1`;
};

const map = body => {
  return body.rows.map(r => {
    return {
      date: Date.parse(r.c[0].v),
      value: r.c[1].v
    };
  });
};

const get = (days = 365) => {
  return new Promise((resolve, reject) => {
    request.get(url(days), {
      json: true
    }, (e, r, b) => {
      if (e) {
        reject(e);
      } else {
        resolve(map(b));
      }
    });
  });
}

module.exports = {
  get
}
