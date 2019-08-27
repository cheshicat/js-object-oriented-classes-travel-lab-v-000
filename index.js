class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date()
  }
  yearsExperienceFromBeginningOf() {
    endDate = Date.now ()
    elapsed = endDate.getFullYear() - startDate.getFullYear()
  }
}
