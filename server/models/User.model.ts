import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { RefreshToken } from "./refreshToken.model";

@Table({ tableName: "user", underscored: true })
class User extends Model {
  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  password: string;

  @Column(DataType.BOOLEAN)
  isVerified: boolean = false;

  @Column(DataType.STRING)
  verificationToken: string;

  @HasMany(() => RefreshToken)
  refreshTokens: RefreshToken[];
}

export { User };
