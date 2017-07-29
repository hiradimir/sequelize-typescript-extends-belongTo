import {Column, HasMany, Model, Table} from "sequelize-typescript";
import Player from "./Player";
import UserOperateModel from "../core/model/UserOperateModel";
@Table
export default class Team extends UserOperateModel<Team> {

  @Column
  name: string;

  @HasMany(() => Player)
  players: Player[];
}