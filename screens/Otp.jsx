import React from "react";
import { View, Text } from "react-native";
import { AuthLayout } from "../components";
import { COLORS, FONTS, SIZES } from "../constants";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const Otp = () => {
  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has been sent to byprogrammers@gmail.com"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
          <OTPInputView
            pinCount={4}
            style={{
                width: '100%',
                height: 50,
            }}
            codeInputFieldStyle={{
                width: 65,
                height: 65,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                color: COLORS.black,
                ...FONTS.h3
            }}
            onCodeFilled={(code) => {
                console.log(code)
            }}
          />
      </View>
    </AuthLayout>
  );
};

export default Otp;
