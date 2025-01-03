import { View, Text } from "react-native";
import { button, input } from "@/components/basics";
import { styles } from "./ChangeUserNameScreen.styles";
import { Formik } from "formik";
import { initialValue, validationSchema } from "./ChangeUserNameScreen.form";
import { User } from "@/api/user";
import { useAuth } from "@/hooks";
import { useNavigation } from "@react-navigation/native";

const userController = new User();

export const ChangeUserNameScreen = () => {
  const navigation = useNavigation();
  const { accesToken, updateUser } = useAuth();

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={async formValue => {
        try {
          if (!accesToken) {
            throw new Error("Access token is missing");
          }
          const dataUser = {
            username: formValue.userName,
            lastname: formValue.lastName,
          };
          await userController.updateUser(accesToken, dataUser);
          updateUser("username", formValue.userName);
          updateUser("lastname", formValue.lastName);
          navigation.goBack();
        } catch (error) {}
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <View style={styles.content}>
          <View>
            <Text style={styles.tittle}>Change username</Text>
            <input.InputChange
              secure={false}
              placeholder="username"
              handleChange={handleChange("userName")}
              handleBlur={handleBlur("userName")}
              value={values.userName}
              error={touched.userName && errors.userName ? true : false}
            />
          </View>
          <View>
            <Text style={styles.tittle}>Change Lastname</Text>
            <input.InputChange
              secure={false}
              placeholder="lastname"
              handleChange={handleChange("lastName")}
              handleBlur={handleBlur("lastName")}
              value={values.lastName}
              error={touched.lastName && errors.lastName ? true : false}
            />
          </View>
          <View style={styles.button}>
            <button.Button
              text="change"
              color="#6fedf5"
              loading={isSubmitting}
              onPress={handleSubmit}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
