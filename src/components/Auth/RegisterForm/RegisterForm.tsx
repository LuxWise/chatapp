import { View } from "react-native";
import { styles } from "./RegisterForm.styles";
import { button, input } from "@/components/basics";
import { initialValue, validationSchema } from "./RegisterForm.form";
import { Formik } from "formik";
import { Auth } from "@/api/auth";
import { useNavigation } from "@react-navigation/native";

const AuthController = new Auth();

export const RegisterForm = () => {
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await AuthController.register(
            values.email,
            values.username,
            values.password
          );
          setSubmitting(false);
          navigation.goBack();
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
            <input.Input
              secure={false}
              placeholder="email"
              handleChange={handleChange("email")}
              handleBlur={handleBlur("email")}
              value={values.email}
              error={touched.email && errors.email ? true : false}
            />

            <input.Input
              secure={false}
              placeholder="username"
              handleChange={handleChange("username")}
              handleBlur={handleBlur("username")}
              value={values.username}
              error={touched.username && errors.username ? true : false}
            />
            <input.Input
              secure={true}
              placeholder="password"
              handleChange={handleChange("password")}
              handleBlur={handleBlur("password")}
              value={values.password}
              error={touched.password && errors.password ? true : false}
            />
          </View>
          <View style={styles.buttonView}>
            <button.Button
              color="#1498f2"
              text="create"
              loading={isSubmitting}
              onPress={handleSubmit}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
