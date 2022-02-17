import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import { User } from "./user.model";
import { UserRole } from "./userRole";

@Table({ tableName: "role", underscored: true, timestamps: false })
class Role extends Model {
  @Column(DataType.STRING)
  name!: "ADMIN" | "SUPERADMIN";

  @BelongsToMany(() => User, {
    through: () => UserRole,
  })
  users!: User[];

  @HasMany(() => UserRole, {
    onDelete: "CASECADE",
  })
  roleUsers!: UserRole[];
}

export { Role };
