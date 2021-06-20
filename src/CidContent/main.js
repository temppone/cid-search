const contentful = require('contentful');

var client = contentful.createClient({
  space: 'ywud9dsun874',
  accessToken: 'I87mrsovpq_qe-AfWgraXMMAprbrqTCKU4vJVVp8Oa8',
});

client.getEntries().then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if (entry.fields.productName) {
      console.log(entry.fields.productName);
    }
  });
});
