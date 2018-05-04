export const simple_de = (rates) => {
  var myData = rates.map((r) => {
    return {
      rateId: r['Tarif-Nr.'].toString(),
      rateName: r['Tarif-Name'],
      chapterId: r['Kapitelziffer'].toString(),
      chapter: r['Kapitelbezeichung_D'],
      itemId: r['Positionsnummer'].toString(),
      item: r['Positions-Text D'],
      remark: r['Bemerkung'],
      validFrom: r['Gültig von'],
      validTo: r['Gültig bis'],
    }
  })
  return myData
}

export const simple_fr = (rates) => {
  var myData = rates.map((r) => {
    return {
      rateId: r['Tarif-Nr.'].toString(),
      rateName: r['Nom du tarif'],
      chapterId: r['Kapitelziffer'].toString(),
      chapter: r['Kapitelbezeichung_F'],
      itemId: r['Positionsnummer'].toString(),
      item: r['Positions-Text F'],
      remark: r['Remarque'],
      validFrom: r['Gültig von'],
      validTo: r['Gültig bis'],
    }
  })
  return myData
}

export const simple_it = (rates) => {
  var myData = rates.map((r) => {
    return {
      rateId: r['Tarif-Nr.'].toString(),
      rateName: r['Nome di tariffa'],
      chapterId: r['Kapitelziffer'].toString(),
      chapter: r['Kapitelbezeichung_I'],
      itemId: r['Positionsnummer'].toString(),
      item: r['Positions-Text I'],
      remark: r['commento'],
      validFrom: r['Gültig von'],
      validTo: r['Gültig bis'],
    }
  })
  return myData
}

export const filter_de = (rates) => {
  // filter DE rates
  let rates_de = []
  for (let r of rates) {
    let rte = []
    for (const [key, value] of Object.entries(r)) {
      //console.log(`${key} ${value}`)
      if (key.endsWith('D')) {
        rte.push({ [key]: value })
      }
      if (key.endsWith('Tarif-Nr.')) {
        rte.push({ [key]: value })
      }
      if (key.endsWith('Tarif-Name')) {
        rte.push({ [key]: value })
      }
      if (key.endsWith('Kapitelziffer')) {
        rte.push({ [key]: value })
      }
      if (key.startsWith('Positionsnummer')) {
        // all languages
        rte.push({
          [key]: value,
        })
      }
      if (key.startsWith('Bemerkung')) {
        rte.push({ [key]: value })
      }
      if (key.startsWith('Gültig')) {
        // all languages
        rte.push({ [key]: value })
      }
    }
    rates_de.push(rte)
  }
  //console.log('rates_de', rates_de)
  return [].concat.apply([], rates_de)
}

export const filter_fr = (rates) => {
  // filter FR rates
  let rates_de = []
  for (let r of rates) {
    let rte = []
    for (const [key, value] of Object.entries(r)) {
      //console.log(`${key} ${value}`)
      if (key.endsWith('F')) {
        rte.push({ [key]: value })
      }
      if (key.endsWith('Tarif-Nr.')) {
        rte.push({ [key]: value })
      }
      if (key.endsWith('Nom du tarif')) {
        rte.push({ [key]: value })
      }
      if (key.endsWith('Kapitelziffer')) {
        rte.push({ [key]: value })
      }
      if (key.startsWith('Positionsnummer')) {
        // all languages
        rte.push({
          [key]: value,
        })
      }
      if (key.startsWith('Remarque')) {
        rte.push({ [key]: value })
      }
      if (key.startsWith('Gültig')) {
        // all languages
        rte.push({ [key]: value })
      }
    }
    rates_de.push(rte)
  }
  //console.log('rates_de', rates_de)
  return rates_de
}

export const filter_it = (rates) => {
  // filter DE rates
  let rates_de = []
  for (let r of rates) {
    let rte = []
    for (const [key, value] of Object.entries(r)) {
      //console.log(`${key} ${value}`)
      if (key.endsWith('I')) {
        rte.push({ [key]: value })
      }
      if (key.endsWith('Tarif-Nr.')) {
        rte.push({ [key]: value })
      }
      if (key.endsWith('Nome di tariffa')) {
        rte.push({ [key]: value })
      }
      if (key.endsWith('Kapitelziffer')) {
        rte.push({ [key]: value })
      }
      if (key.startsWith('Positionsnummer')) {
        // all languages
        rte.push({
          [key]: value,
        })
      }
      if (key.startsWith('commento')) {
        rte.push({ [key]: value })
      }
      if (key.startsWith('Gültig')) {
        // all languages
        rte.push({ [key]: value })
      }
    }
    rates_de.push(rte)
  }
  //console.log('rates_de', rates_de)
  return rates_de
}
