import {BelongsTo, Column, DefaultScope, ForeignKey} from "sequelize-typescript";
import BasicModel from "./BasicModel";
import User from "../../models/User";

@DefaultScope({
  include: <any>{all: true}
})
export default class UserTransactionModel<T> extends BasicModel<T> {

  @ForeignKey(() => User)
  @Column
  createdById: number;

  @BelongsTo(() => User, 'createdById')
  createdBy: User;

  @ForeignKey(() => User)
  @Column
  updatedById: number;

  @BelongsTo(() => User, 'updatedById')
  updatedBy: User;

  @ForeignKey(() => User)
  @Column
  deletedById: number;

  @BelongsTo(() => User, 'deletedById')
  deletedBy: User;

}