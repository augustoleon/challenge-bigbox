import parseLink from 'parse-link-header'

const pagination = () => {
  let linkHeader =
    '<http://json-biglifeapp.herokuapp.com/activity?_page=1&_limit=9>; rel="first", ' +
    '<http://json-biglifeapp.herokuapp.com/activity?_page=2&_limit=9>; rel="next", ' +
    '<http://json-biglifeapp.herokuapp.com/activity?_page=236&_limit=9>; rel="last"'

  let parsed = parseLink(linkHeader)

  return parsed
}

export default {
  pagination,
}
