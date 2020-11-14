/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setModalRegistration } from "../../modules";
import { imgLogin } from "../../assets";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import Checkbox from "../Checkbox";
import { icEmail, icPassword, icAccount } from "../../assets";
import "./styles.css";

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const DialogRegister = () => {
  const history = useHistory();
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    remember: false,
  });

  const modal = useSelector((store) => store.modal.modalRegister);
  const dispatch = useDispatch();

  const handleChange = (value, field) => {
    const letters = /^[a-z\d\-_\s]+$/i;
    if (field === "name" && value !== "") {
      if (!value.match(letters)) {
        return null;
      }
    }

    setForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleClose = () => {
    dispatch(setModalRegistration({ show: false, formType: "LOGIN" }));
  };

  const handleChangeForm = (type) => {
    dispatch(setModalRegistration({ formType: type }));
  };

  const handleSubmit = () => {
    if (!validateEmail(form.email)) {
      return window.alert("Email harus valid");
    }
    if (
      (modal.formType === "REGISTER" && form.name.length <= 8) ||
      form.name.length >= 20
    ) {
      return window.alert(
        "Nama harus memiliki 8 karakter dan tidak boleh lebih dari 20 karakter"
      );
    }

    localStorage.setItem("user_data", JSON.stringify(form));

    dispatch(setModalRegistration({ show: false }));
    return history.push("/dashboard");
  };

  const renderFormRegister = () => {
    return (
      <React.Fragment>
        <h2 className="dialog-register__title">
          {modal.formType === "REGISTER" ? "Buat Akun" : "Masuk"}
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
            <Button onClick={handleSubmit} block>
              Daftar
            </Button>
          </div>

          <div className="dialog-register__footer-text">
            Sudah punya akun?{" "}
            <a
              onClick={() => handleChangeForm("LOGIN")}
              href="javascript:void(0)"
            >
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
            <Button block onClick={handleSubmit}>
              Masuk
            </Button>
          </div>
          <div className="dialog-register__footer-text">
            Belum punya akun?{" "}
            <a
              onClick={() => handleChangeForm("REGISTER")}
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
    if (modal.formType === "REGISTER") {
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
