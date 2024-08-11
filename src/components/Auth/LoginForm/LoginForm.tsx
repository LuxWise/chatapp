import { View } from "react-native";
import { styles } from "./LoginForm.styles";
import { button, Input } from "@/components/basics";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LoginStackParamList } from "@/types";
import { Formik } from "formik";
import { initialValue, validationSchema } from "./LoginForm.form";
import { Auth } from "@/api/auth";
import { useAuth } from "@/hooks";

const authController = new Auth();

export const LoginForm = () => {
  const { login } = useAuth();
  const navigator = useNavigation<NavigationProp<LoginStackParamList>>();
  const goToRegister = () => {
    navigator.navigate("RegisterScreen");
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await authController.login(
            values.email,
            values.password
          );
          const { access, refresh } = response;

          await authController.setAccessToken(access);
          await authController.setRefreshToken(refresh);

          await login(access);
          setSubmitting(false);
        } catch (err) {
          console.log(err);
          setSubmitting(false);
        }
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
      }) => (
        <View style={styles.content}>
          <View style={styles.container}>
            <Input
              secure={false}
              placeholder="username"
              handleChange={handleChange("email")}
              handleBlur={handleBlur("email")}
              value={values.email}
              error={touched.email && errors.email ? true : false}
              keyboardType="email-address"
            />
            <Input
              secure={true}
              placeholder="password"
              handleChange={handleChange("password")}
              handleBlur={handleBlur("password")}
              value={values.password}
              error={touched.password && errors.password ? true : false}
              keyboardType="default"
            />
          </View>
          <View style={styles.buttonView}>
            <button.Button
              text="log in"
              color="#0df7fd"
              loading={isSubmitting}
              onPress={handleSubmit}
            />
            <button.Button
              text="Register"
              color="#1498f2"
              onPress={goToRegister}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
