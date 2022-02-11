class AuthController {
  public login = async (req, res) => {
    return res.sendStatus(200);
  };
  public refreshToken = async (req, res) => {
    return res.sendStatus(200);
  };
  public logout = async (req, res) => {
    return res.sendStatus(200);
  };
}
const authController = new AuthController();

export { authController };
