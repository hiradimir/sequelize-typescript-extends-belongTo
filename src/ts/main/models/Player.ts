import {BelongsTo, Column, ForeignKey, Model, Table} from "sequelize-typescript";
import Team from "./Team";
import UserOperateModel from "../core/model/UserOperateModel";
@Table
export default class Player extends UserOperateModel<Player> {

  @Column
  name: string;

  @Column
  num: number;

  @ForeignKey(() => Team)
  @Column
  teamId: number;

  @BelongsTo(() => Team)
  team: Team;
}