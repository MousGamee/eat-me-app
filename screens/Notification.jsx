import React from "react";
import { View, Image, TouchableOpacity, SectionList, Text } from "react-native";

import { Header, IconButton, NotificationCard } from "../components";
import { COLORS, SIZES, FONTS, icons, images, dummyData } from "../constants";

const Notification = ({ navigation }) => {

    function renderHeader() {
        return (
            <Header
                title="NOTIFICATIONS"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    <IconButton
                        icon={icons.menu}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2,
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.openDrawer()}
                    />
                }
                rightComponent={
                    <View
                        style={{
                            width: 40
                        }}
                    />
                }
            />
        )
    }
    function renderNotifications() {
        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                <SectionList
                    sections={dummyData.notifications}
                    keyExtractor={(item) => item.id}
                    stickySectionHeadersEnabled={false}
                    showsVerticalScrollIndicator={false}
                    style={{
                        marginBottom: 200,
                        paddingHorizontal: SIZES.padding
                    }}
                    renderItem={({ item }) => (
                        <NotificationCard notificationItem={item} />
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View
                            style={{
                                marginTop: SIZES.radius,
                                marginBottom: SIZES.base
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.body3,
                                }}
                            >
                                {title}
                            </Text>
                        </View>
                    )}
                />
            </View>

        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {renderHeader()}
            {renderNotifications()}
        </View>
    )
}

export default Notification;

