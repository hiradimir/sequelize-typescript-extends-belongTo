import {BelongsTo, Column, ForeignKey, Table} from "sequelize-typescript";
import BasicModel from "../core/model/BasicModel";

@Table
export default class User extends BasicModel<User> {

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  birthDay: Date;

}


