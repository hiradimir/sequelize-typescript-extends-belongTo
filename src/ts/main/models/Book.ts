import {BelongsTo, Column, ForeignKey, Model, Table} from "sequelize-typescript";
import Person from "./Person";
import UserOperateModel from "../core/model/UserOperateModel";
@Table
export default class Book extends UserOperateModel<Book> {

  @ForeignKey(() => Person)
  @Column
  authorId: number;

  @BelongsTo(() => Person)
  author: Person;

  @ForeignKey(() => Person)
  @Column
  proofreaderId: number;

  @BelongsTo(() => Person)
  proofreader: Person;
}
