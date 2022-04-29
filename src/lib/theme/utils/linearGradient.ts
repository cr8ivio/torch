const LinearGradient = {
  // A property to apply linear gradient
  // TODO: is there a clean way to type the linear-gradient function???
  linearGradient: (value: string) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
}
export default LinearGradient
