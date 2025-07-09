const middlewareOne = (req, res, next) => {
  console.log("In middleware One")
  next()
}

const middlewareTwo = (req, res, next) => {
  console.log("In middleware Two")
  next()
}

export {
  middlewareOne,
  middlewareTwo
}