import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import colors from "../../../tools/colors";
import AppButton from "../../../module/AppButton";
import {
  FontAwesome5,
  FontAwesome,
  AntDesign,
  Octicons,
} from "@expo/vector-icons";
import Accordion from "react-native-collapsible/Accordion";

const List = ({ setRoomLocation }) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Downtown Portsmouth",
      owner: "Dwesley15",
      users: 10,
      active: false,
      coords: {
        latitude: 43.1875,
        longitude: -70.8358,
      },
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "UNH",
      owner: "TSmith1542",
      users: 18,
      active: false,
      coords: {
        latitude: 43.1875,
        longitude: -71.1,
      },
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "GreatBayCC",
      owner: "JrodH2000",
      users: 24,
      active: true,
      coords: {
        latitude: 43.1175,
        longitude: -70.3358,
      },
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abdsf28ba",
      title: "Kittery Beaches",
      owner: "Dsad88",
      users: 13,
      active: false,
      coords: {
        latitude: 43.0175,
        longitude: -70.3358,
      },
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd9dszfaa97f63",
      title: "YHS",
      owner: "PrrY664C",
      users: 4,
      active: true,
      coords: {
        latitude: 43.1175,
        longitude: -70.3358,
      },
    },
    {
      id: "58s94a0f-3da1-471f-bd96-14557sd1e29d72",
      title: "Walmart",
      owner: "Red21",
      users: 6,
      active: true,
      coords: {
        latitude: 43.0875,
        longitude: -70.8358,
      },
    },
  ];
  const Item = ({ title, users, owner, active, coords, setRoomLocation }) => {
    return (
      <TouchableOpacity
        style={styles.room}
        onPress={() => setRoomLocation(coords)}
      >
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.rowTop}>
              <Text style={styles.text}>{title}</Text>
              <Octicons
                name="primitive-dot"
                size={24}
                color={active ? colors.start : colors.stop}
              />
            </View>
            <View style={styles.rowBottom}>
              <View style={styles.box}>
                <FontAwesome
                  style={{ marginHorizontal: 4 }}
                  name="user"
                  size={18}
                  color="black"
                />
                <Text style={styles.smallText}>{owner}</Text>
              </View>
              <View style={styles.box}>
                <FontAwesome5
                  style={{ marginHorizontal: 4 }}
                  name="users"
                  size={18}
                  color="black"
                />
                <Text style={styles.smallText}>{users}</Text>
              </View>
            </View>
          </View>
          <AppButton
            title={
              <AntDesign name="arrowright" size={24} color={colors.light} />
            }
          />
        </View>
      </TouchableOpacity>
    );
  };

  const bar = () => <View style={styles.bar} />;
  return (
    <>
      <Text style={styles.title}>Active Rooms Near You</Text>

      <FlatList
        style={styles.container}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            users={item.users}
            owner={item.owner}
            active={item.active}
            coords={item.coords}
            setRoomLocation={setRoomLocation}
          />
        )}
        data={DATA}
        style={styles.container}
        ItemSeparatorComponent={bar}
      >
        <Text>Hello</Text>
      </FlatList>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    marginTop: 10,
    marginBottom: 200,
  },
  title: {
    fontFamily: colors.font,
    fontSize: 24,
    borderBottomColor: "black",
    borderBottomWidth: 10,
    height: 25,
    marginTop: 6,
  },
  room: {
    width: "100%",
    borderColor: colors.text,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: colors.tint,
  },
  text: {
    color: colors.text,
    fontFamily: colors.font,
    fontSize: 24,
    marginHorizontal: 10,
  },
  bar: {
    height: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rowBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  column: {
    flexDirection: "column",
  },
  smallText: {
    color: colors.text,
    fontFamily: colors.font,
    fontSize: 18,
  },
  box: {
    flexDirection: "row",
    padding: 2,
    margin: 2,
    justifyContent: "center",
    fontFamily: colors.font,
    fontSize: 20,
    alignItems: "center",
  },
});

export default List;
