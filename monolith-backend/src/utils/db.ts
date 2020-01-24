import { Pool } from "pg"
import { SelectOption } from "query-builder"

export const database = new Pool()

class QueryBuilder {
  insert(table: string, column: string[]) {
    const parameter = this.getParametersFrom(column)
    const prettiedData = this.addSpaceAndBackquote(column)

    return `INSERT INTO ${table}(${prettiedData}) VALUES (${parameter})`
  }

  select(option: SelectOption) {
    const data = this.addSpaceAndBackquote(option.data)
    const from = this.addSpaceAndBackquote(option.from)
    const where = this.addSpaceAndBackquote(option.where)

    return `SELECT ${data} FROM ${from} WHERE ${where}`
  }

  private getParametersFrom<T>(data: T[]) {
    return data.map((_, index) => `$${index + 1}`)
  }

  private addSpaceAndBackquote(data: string[]) {
    const withSpace = this.withSpace
    const withoutSpace = this.withoutSpace

    return data.map((item, index) =>
      index == 0 ? withoutSpace(item) : withSpace(item)
    )
  }

  private withoutSpace(item: string) {
    return item
  }

  private withSpace(item: string) {
    return ` ${item}`
  }
}

export default new QueryBuilder()
