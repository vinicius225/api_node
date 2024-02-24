const { body } = require("express-validator");

const userCreateValidator = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatorio!!!")
      .isLength({ min: 3 })
      .withMessage("Quantidade minima de carcateres é 3"),
    body("email")
      .isString()
      .withMessage("E-mail é obrigátorio")
      .isEmail()
      .withMessage("o valor inserido não é um e-mail"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatoria")
      .isLength({ min: 6 })
      .withMessage("Quantidade minima de 6 caracteres"),
    body("confirmpassword")
      .isString()
      .withMessage("A confirmação de senha  é obrigatoria")
      .isLength({ min: 6 })
      .withMessage("Quantidade minima de 6 caracteres")
      .custom((value, { req }) => {
        if ((value != req, body.password)) {
          throw new Error("As Senhas não são iguais");
        }
        return true;
      }),
  ];
};

module.exports = {
  userCreateValidator,
};
