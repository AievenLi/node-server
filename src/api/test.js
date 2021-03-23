class testdata {
  constructor() {}
  async test(ctx) {
    ctx.body = {
      name: '200',
      data:'asdadadad'
    }
  }
}

export default new testdata()