class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date()
  }
  yearsExperienceFromBeginningOf(endDate) {
    return(this.endDate.getFullYear() - this.startDate.getFullYear())
  }
}
