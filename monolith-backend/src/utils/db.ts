// Library
import { Pool } from "pg"

// Type and Interface
import {
  SelectOption,
  UpdateOption,
  GenericObject,
  DeleteOption,
} from "query-builder"

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

    if (option.where) {
      const where = this.addSpaceAndBackquote(option.where)

      return `SELECT ${data} FROM ${from} WHERE ${where}`
    }

    return `SELECT ${data} FROM ${from}`
  }

  update(option: UpdateOption) {
    const set = this.addSpaceAndBackquote(option.set)
    const where = this.addSpaceAndBackquote(option.where)

    return `UPDATE ${option.table} SET ${set} WHERE ${where}`
  }

  delete(option: DeleteOption) {
    return `DELETE FROM ${option.table} WHERE ${option.where}`
  }

  convertObjectToAssignment(option: GenericObject) {
    const keys = Object.keys(option)

    const assignmentQuery = keys.map(key => `${key}=${option[key]}`)
    const parameterizedQuery = keys.map((key, index) => `${key}=$${index + 1}`)

    return [assignmentQuery, parameterizedQuery]
  }

  private getParametersFrom<T>(data: T[]) {
    return data.map((_, index) => `$${index + 1}`)
  }

  // @todo change method's name
  private addSpaceAndBackquote(data: string[]) {
    const withSpace = this.withSpace
    const withoutSpace = this.withoutSpace

    return data.map((item, index) =>
      index == 0 ? withoutSpace(item) : withSpace(item)
    )
  }

  private withoutSpace(item: string) {
    return `${item}`
  }

  private withSpace(item: string) {
    return ` ${item}`
  }
}

export default new QueryBuilder()
