/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalRegistration } from "../../modules";
import { imgLogin } from "../../assets";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import Checkbox from "../Checkbox";
import { icEmail, icPassword, icAccount } from "../../assets";
import "./styles.css";

const DialogRegister = () => {
  const [formType, setFormType] = React.useState("LOGIN");
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (value, field) => {
    setForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const modal = useSelector((store) => store.modal.modalRegister);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModalRegistration(false));
  };

  const renderFormRegister = () => {
    return (
      <React.Fragment>
        <h2 className="dialog-register__title">
          {formType === "REGISTER" ? "Buat Akun" : "Masuk"}
        </h2>
        <div className="dialog-register__form">
          <div className="dialog-register__form-group">
            <Input
              icon={icAccount}
              placeholder="Name"
              value={form.name}
              onChange={(e) => handleChange(e.target.value, "name")}
            />
          </div>
          <div className="dialog-register__form-group">
            <Input
              icon={icEmail}
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange(e.target.value, "email")}
            />
          </div>
          <div className="dialog-register__form-group">
            <Input
              icon={icPassword}
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => handleChange(e.target.value, "password")}
            />
          </div>
          <div className="dialog-register__form-group">
            <Button block>Masuk</Button>
          </div>

          <div className="dialog-register__footer-text">
            Sudah punya akun?{" "}
            <a onClick={() => setFormType("LOGIN")} href="javascript:void(0)">
              Masuk
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  };
  const renderFormLogin = () => {
    return (
      <React.Fragment>
        <h2 className="dialog-register__title">Masuk</h2>
        <div className="dialog-register__form">
          <div className="dialog-register__form-group">
            <Input
              icon={icEmail}
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange(e.target.value, "email")}
            />
          </div>
          <div className="dialog-register__form-group">
            <Input
              icon={icPassword}
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => handleChange(e.target.value, "password")}
            />
          </div>
          <div className="dialog-register__form-group">
            <Checkbox>Ingat Saya</Checkbox>
          </div>
          <div className="dialog-register__form-group">
            <Button block>Masuk</Button>
          </div>
          <div className="dialog-register__footer-text">
            Belum punya akun?{" "}
            <a
              onClick={() => setFormType("REGISTER")}
              href="javascript:void(0)"
            >
              Daftar
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const renderForm = () => {
    if (formType === "REGISTER") {
      return renderFormRegister();
    }

    return renderFormLogin();
  };

  return (
    <Modal onClose={handleClose} show={modal.show}>
      <div className="dialog-register">
        <div className="dialog-register__content">
          <img
            className="dialog-register__image"
            src={imgLogin}
            alt=""
            title=""
          />
        </div>
        <div className="dialog-register__content">{renderForm()}</div>
      </div>
    </Modal>
  );
};

export default React.memo(DialogRegister);
