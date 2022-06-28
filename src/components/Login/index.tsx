import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import { FormWrapper, Label } from "../input/style";
import FormInput from "../input";
import { BuyButton } from "./style";

export const Login = () => {
    return (
        <Form>
            <FormWrapper>
                <FormInput
                    placeholder="الإيميل أو كلمة المستخدم"
                    type="text"
                    name="email"
                />
                <FormInput placeholder="كلمة المرور" type="password" name="password" />
                <div style={{ marginBottom: "15px" }}>
                    <Label htmlFor="rememberMe">تذكّرني</Label>
                    <Field
                        id="rememberMe"
                        component="input"
                        type="checkbox"
                        name="rememberMe"
                    />
                </div>
                <div style={{ textAlign: "left" }}>
                    <Link
                        to={"/reset"}
                        style={{
                            fontSize: "16px",
                            color: "#848484",
                            textDecoration: "none",
                        }}
                    >
                        هل نسيت كلمة المرور ؟
                    </Link>
                </div>
                <div style={{ position: "relative", marginBottom: "50px" }}>
                    <BuyButton
                        variant="outlined"
                        size="large"
                        style={{ position: "absolute", right: "0" }}
                        type="submit"
                    >
                        تسجيل دخول
                    </BuyButton>
                </div>
            </FormWrapper>
        </Form>
    );
};
