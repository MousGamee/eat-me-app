import React, { useRef, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TextButton } from "../components";
import AuthLayout from "../components/AuthLayout";
import { COLORS, FONTS, SIZES } from "../constants";

const Otp = () => {
  const [otpNum, setOtpNum] = useState({ 1: "", 2: "", 3: "", 4: "" });
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const lastInput = useRef();

  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has been sent to moussa.sagna@hotmail.fr"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          flexDirection: "row",
        }}
      >
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType={"number-pad"}
            maxLength={1}
            ref={firstInput}
            onChangeText={(text) => {
              text && secondInput.current.focus()
              setOtpNum({...otpNum, 1 : text})
              console.log(otpNum)

            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType={"number-pad"}
            maxLength={1}
            ref={secondInput}
            onChangeText={(text) => {
              text ? thirdInput.current.focus() : firstInput.current.focus()
              setOtpNum({...otpNum, 2 : text})
              console.log(otpNum)

            }}

          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType={"number-pad"}
            maxLength={1}
            ref={thirdInput}
            onChangeText={(text) => {
              text ? lastInput.current.focus() : thirdInput.current.focus()
              setOtpNum({...otpNum, 3 : text})
              console.log(otpNum)

            }}

          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType={"number-pad"}
            maxLength={1}
            ref={lastInput}
            onChangeText={(text) => {
              !text && thirdInput.current.focus()
              setOtpNum({...otpNum, 4 : text})
              console.log(otpNum)
            }}
          />
        </View>
      </View>
      {/* Continue Button */}
      <View>
                <TextButton
                    label="Continue"
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={() => navigation.replace("Home")}
                />
                <View style={{ marginTop: SIZES.padding, alignItems: 'center' }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>By Signing up, you agree to our.</Text>
                    <TextButton
                        label="Terms and Conditions"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.body3
                        }}
                        onPress={() => console.log("tnc")}
                    />
                </View>
            </View>
    </AuthLayout>
  );
};

export default Otp;

const styles = StyleSheet.create({
  otpBox: {
    borderRadius: 5,
    borderColor: COLORS.darkGray,
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    paddingHorizontal: 18,
    paddingVertical: 10,
    color: COLORS.black,
    padding: 0,
  },
});
