/**
 * Mocking client-server processing
 */
import _links from "./links.json"

export default {
  getLinks: (cb)=> {return cb(_links)}
}
