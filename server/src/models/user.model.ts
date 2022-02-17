import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  BelongsToMany,
  DefaultScope,
} from "sequelize-typescript";
import { RefreshToken } from "./refreshToken.model";
import { Role } from "./role.model";
import { UserRole } from "./userRole";

@DefaultScope(() => ({
  include: [{ model: Role, attributes: ["name"], include: [] }],
}))
@Table({ tableName: "user", underscored: true })
class User extends Model {
  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.BOOLEAN)
  isVerified!: boolean;

  @Column(DataType.STRING)
  verificationToken!: string;

  @Column(DataType.STRING)
  passwordResetToken!: string;

  @HasMany(() => RefreshToken, {
    onDelete: "CASCADE",
  })
  refreshTokens!: RefreshToken[];

  @BelongsToMany(() => Role, {
    through: { model: () => UserRole },
  })
  roles!: Role[];

  @HasMany(() => UserRole, {
    onDelete: "CASCADE",
  })
  userRoles!: UserRole[];
}

export { User };
