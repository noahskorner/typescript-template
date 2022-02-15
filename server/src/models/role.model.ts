import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "role", underscored: true })
class Role extends Model {
  @Column(DataType.STRING)
  roleName!: string;
}

export { Role };
