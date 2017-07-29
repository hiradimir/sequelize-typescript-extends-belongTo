import {HasMany, Model, Table} from "sequelize-typescript";
import Book from "./Book";
import UserOperateModel from "../core/model/UserOperateModel";
@Table
export default class Person extends UserOperateModel<Person> {

  @HasMany(() => Book)
  writtenBooks: Book[];

  // @HasMany(() => Book)
  // proofedBooks: Book[];
}