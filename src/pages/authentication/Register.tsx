import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  FormHelperText
} from "@mui/material";
import {
  TextFieldWrapper
} from "components/authentication/StyledComponents";
import FlexBox from "components/FlexBox";
import LightTextField from "components/LightTextField";
import { Small } from "components/Typography";
import { useFormik } from "formik";
import useAuth from "hooks/useAuth";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Register: FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    terms: true,
    submit: null,
  };
  // form field value validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password should be of minimum 10 characters length")
      .required("Password is required"),
  });

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values: any) => {
        setLoading(true);
        try {
          await register(values.email, values.password, values.name);
          setLoading(false);
          toast.success("You registered successfully");
          navigate("/dashboard");
        } catch (error: any) {
          setError(error?.message);
          setLoading(false);
        }
      },
    });

  return (
    <FlexBox
      sx={{
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: { sm: "100%" },
      }}
    >
      <Card sx={{ padding: 4, maxWidth: 600, boxShadow: 1 }}>
        <FlexBox
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          mb={5}
        >
          <Box
            width={38}
            mb={1}
            display="flex" // Ensure Box behaves like a flex container
            justifyContent="center" // Center the content horizontally
            alignItems="center" // Center the content vertically if needed
          >
            <img
              src="/static/logo/HB.jpg"
              width="150px" // Set the desired width
              height="auto"
              alt="Hopital Hbib Bourgiba"
            />
          </Box>
        </FlexBox>

        <FlexBox justifyContent="space-between" flexWrap="wrap" my="1rem">


          <form noValidate onSubmit={handleSubmit} style={{ width: "100%" }}>
            <FlexBox justifyContent="space-between" flexWrap="wrap">
              <TextFieldWrapper>
                <LightTextField
                  fullWidth
                  name="name"
                  type="text"
                  label="Nom"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name || ""}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.email && errors.email ? String(errors.email) : ""}
                />
              </TextFieldWrapper>

              <TextFieldWrapper>
                <LightTextField
                  fullWidth
                  name="email"
                  type="email"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email || ""}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email ? String(errors.email) : ""}
                />
              </TextFieldWrapper>
            </FlexBox>

            <TextFieldWrapper sx={{ mt: 2, width: "100%" }}>
              <LightTextField
                fullWidth
                name="password"
                type="password"
                label="mot de passe"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password || ""}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.email && errors.email ? String(errors.email) : ""}
              />
            </TextFieldWrapper>



            {error && (
              <FormHelperText
                error
                sx={{
                  mt: 2,
                  fontSize: 13,
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {error}
              </FormHelperText>
            )}

            <Box sx={{ mt: 4 }}>
              {loading ? (
                <LoadingButton loading fullWidth variant="contained">

                  S'inscrire
                </LoadingButton>
              ) : (
                <Button fullWidth type="submit" variant="contained">

                  S'inscrire
                </Button>
              )}
            </Box>
          </form>

          <Small margin="auto" mt={3} color="text.disabled">
            Avez-vous déjà un compte ? {" "}
            <Link to="/login">
              <Small color="primary.main">Se connecter?</Small>
            </Link>
          </Small>
        </FlexBox>
      </Card>
    </FlexBox>
  );
};

export default Register;
