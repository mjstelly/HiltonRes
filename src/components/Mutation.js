const submit = (values) => (e) => {
  e.preventDefault()
  alert(`Submit ${JSON.stringify(values, null, 4)}`)
}

export const Mutation = ({ children }) => {
  if (!children) return null
  return children(submit)
}
