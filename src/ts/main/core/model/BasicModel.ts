import {CreatedAt, DeletedAt, Model, UpdatedAt} from "sequelize-typescript";

export default class ModelBase<T> extends Model<T> {
  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}