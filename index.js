var fs = require('fs')

var markdown = fs.readFileSync('talks.md')
var array = markdown.toString().split('\n')
commafyRows(array)

function commafyRows(data) {
  var newdata = []
  data.forEach(function(row) {
    var rowbits = row.split('|')
    newdata.push(rowbits)
  })
  cleanupRows(newdata)
}

function cleanupRows(data) {
  var cleanData = []

  data.forEach(function(dat) {
    var cleanRow = []
    dat.forEach(function(d, i) {
      if (i === 0 || i === dat.length - 1 && d === '') return
      return cleanRow.push('"' + d.trim() + '"')
    })
    return cleanData.push(cleanRow.join())
  })

var superclean = cleanData.join('\n')
fs.writeFileSync('test.csv', superclean)
}
