import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import {auth} from '../../../firebase'
import firebase from '../../../firebase'



const SignupForm = ({ navigation }) => {
  //schmea for form validation
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().required('An email is required'),
    password: Yup.string()
      .required()
      .min(6, 'Passwords must be at least 8 characters long'),
    password_confirm: Yup.string()
      .required()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  })

  const onSignup = async(email, password, password_confirm) => {
    try {
      const authUser = await firebase 
      auth
        .createUserWithEmailAndPassword(email, password)
      console.log('Created user in firebase successfully!', email, password)
      navigation.navigate('HomeScreen')
    }
    catch(error) {
      Alert.alert(
        'Account creation error!',
        error.message
      )
    }
  }
  return (
    <Formik
      initialValues={{ email: '', password: '', password_confirm: '' }}
      onSubmit={(values) => {
        onSignup(values.email, values.password, values.password_confirm)
      }}
      validationSchema={SignupFormSchema}
      validateOnMount={true}
    >
      {/* anon fn that can wrap around one child */}
      {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
        <View>
          <View style={styles.wrapper}>
            <TextInput
              placeholderTextColor={'#444'}
              placeholder='Email'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
              autoFocus={true}
              style={[styles.inputField,
              { borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red' }
              ]}
              //formik stuff
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />

            {/*} Original Password {*/}
              <TextInput
              placeholderTextColor={'#444'}
              placeholder='Password'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              textContentType='password'
              autoFocus={true}
              style={[styles.inputField,
              { borderColor: 1 > values.password.length || values.password.length >= 6 ? '#ccc' : 'red' }
              ]}
              //formik stuff
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />


            {/*} Repeat Password TextInput, {*/}
            <TextInput
              placeholderTextColor={'#444'}
              placeholder='Confirm Password'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              textContentType='password'
              autoFocus={true}
              style={[styles.inputField,
              { borderColor: 1 > values.password_confirm.length || values.password_confirm.length >= 6 || values.password == values.password_confirm  ? '#ccc' : 'red' }
              ]}
              //formik stuff
              onChangeText={handleChange('password_confirm')}
              onBlur={handleBlur('password_confirm')}
              value={values.password_confirm}
            />

          </View>
          <Pressable
            titleSize={20}
            style={styles.button(isValid)}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
          <View style={styles.signupContainer}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: '#0096F6' }}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
    paddingBottom: 40,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
  },
  // turning into a dynamic style
  button: isValid => ({
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: '600',
    color: '#FFF',
    fontSize: 20,
  },
  signupContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
  },
})

export default SignupForm

// broken version