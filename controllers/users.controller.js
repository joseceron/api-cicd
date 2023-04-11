
const get = (req, res, next) => {
  const user = {id: 1, name: 'Jose Luis Cerón'}
  return res.status(200).json(user)
}
 
module.exports = {
  get
}