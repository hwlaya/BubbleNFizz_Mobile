import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { Divider, Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import InitialLoginScreen from "../Auth/InitialLoginScreen";
import LoginScreen from "../Auth/LoginScreen";
import RegisterScreen from "../Auth/RegisterScreen";
import PollScreen1 from "../Auth/PollScreen1";
import PollScreen2 from "../Auth/PollScreen2";
import PollScreen3 from "../Auth/PollScreen3";
import PollScreen4 from "../Auth/PollScreen4";
import PollScreen5 from "../Auth/PollScreen5";
import PollScreen6 from "../Auth/PollScreen6";
import PollScreen7 from "../Auth/PollScreen7";
import PollScreen10 from "../Auth/PollScreen10";
import PollScreen9 from "../Auth/PollScreen9";
import PollScreen8 from "../Auth/PollScreen8";
import PollProfileScreen from "../Auth/PollProfileScreen";
import IndexScreen from "../screens/IndexScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ProductScreen from "../screens/ProductScreen";
import AdminDashboardScreen from "../admin/AdminDashboardScreen";
import AdminAddProductScreen from "../admin/AdminAddProductScreen";
import AdminEditProductScreen from "../admin/AdminEditProductScreen";
import AdminDeleteProductScreen from "../admin/AdminDeleteProductScreen";
import AdminStoreCatalogScreen from "../admin/AdminStoreCatalogScreen";
import AllProductsPage from "../screens/AllProductsPage";
import EditProfile from "../profile/EditProfile";
import HomeHeader from "../components/HomeHeader";
import AdminHomeHeader from "../components/AdminHomeHeader";
import ProfileIndex from "../profile/ProfileIndex";

const AuthStack = createNativeStackNavigator();
const AdminStackNav = createDrawerNavigator();
const DrawerStackNav = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const [active, setActive] = React.useState("");
  const navigation = useNavigation();
  return (
    <View>
      <Drawer.Section style={{ paddingTop: 20 }}>
        <Divider style={{ marginTop: 20 }} />
        <Drawer.Item
          label="Home"
          active={active === "Home"}
          icon={() => <Icon name="home" size={30} color={"#E79E4F"} />}
          onPress={() => {
            navigation.navigate("IndexScreen");
          }}
        />
        <Drawer.Item
          label="Profile"
          active={active === "Profile"}
          icon={() => <Icon name="account" size={30} color={"#E79E4F"} />}
          onPress={() => {
            navigation.navigate("ProfileIndex");
          }}
        />
        <Drawer.Item
          label="Orders"
          active={active === "Orders"}
          icon={() => <Icon name="basket" size={30} color={"#E79E4F"} />}
          // onPress={() => {
          //   navigation.navigate("OrderScreen");
          // }}
        />
        <Drawer.Item
          label="Products"
          active={active === "Products"}
          icon={() => <Icon name="store" size={30} color={"#E79E4F"} />}
          onPress={() => {
            navigation.navigate("AllProductsPage");
          }}
        />
      </Drawer.Section>
      <Drawer.Item
        label="Logout"
        icon={() => <Icon name="logout" size={30} color={"#E79E4F"} />}
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      />
    </View>
  );
};
const CustomAdminDrawerContent = (props) => {
  const [active, setActive] = React.useState("");
  const navigation = useNavigation();
  return (
    <View>
      <Drawer.Section style={{ paddingTop: 20 }}>
        <Divider style={{ marginTop: 20 }} />
        <Drawer.Item
          label="Home"
          active={active === "Dashboard"}
          icon={() => (
            <Icon name="view-dashboard" size={30} color={"#E79E4F"} />
          )}
          onPress={() => {
            navigation.navigate("AdminDashboardScreen");
          }}
        />
        <Drawer.Item
          label="Store Catalog Management"
          active={active === "Store Catalog Management"}
          icon={() => <Icon name="store-cog" size={30} color={"#E79E4F"} />}
          onPress={() => {
            navigation.navigate("AdminStoreCatalogScreen");
          }}
        />
        <Drawer.Item
          label="POS"
          active={active === "POS"}
          icon={() => <Icon name="cash-register" size={30} color={"#E79E4F"} />}
          // onPress={() => {
          //   navigation.navigate("OrderScreen");
          // }}
        />
      </Drawer.Section>
      <Drawer.Item
        label="Logout"
        icon={() => <Icon name="logout" size={30} color={"#E79E4F"} />}
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      />
    </View>
  );
};

const Drawerstack = () => {
  return (
    <DrawerStackNav.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{ backgroundColor: "white" }}
    >
      <DrawerStackNav.Screen
        name="IndexScreen"
        component={IndexScreen}
        options={{
          header: () => <HomeHeader />,
        }}
      />
      <DrawerStackNav.Screen name="CartScreen" component={CartScreen} />
      <DrawerStackNav.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <DrawerStackNav.Screen name="ProductScreen" component={ProductScreen} />
      <DrawerStackNav.Screen
        name="AllProductsPage"
        component={AllProductsPage}
      />
      <DrawerStackNav.Screen name="EditProfile" component={EditProfile} />
    </DrawerStackNav.Navigator>
  );
};

const AdminStack = () => {
  return (
    <AdminStackNav.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomAdminDrawerContent {...props} />}
      drawerStyle={{ backgroundColor: "white" }}
    >
      <AdminStackNav.Screen
        name="AdminDashboardScreen"
        component={AdminDashboardScreen}
        options={{
          header: () => <AdminHomeHeader />,
        }}
      />
      <AdminStackNav.Screen
        name="AddScreen"
        component={AdminAddProductScreen}
        options={{
          header: () => <AdminHomeHeader />,
        }}
      />
      <AdminStackNav.Screen
        name="EditScreen"
        component={AdminEditProductScreen}
        options={{
          header: () => <AdminHomeHeader />,
        }}
      />
      <AdminStackNav.Screen
        name="DeleteScreen"
        component={AdminDeleteProductScreen}
        options={{
          header: () => <AdminHomeHeader />,
        }}
      />
      <AdminStackNav.Screen
        name="AdminStoreCatalogScreen"
        component={AdminStoreCatalogScreen}
        options={{
          header: () => <AdminHomeHeader />,
        }}
      />
    </AdminStackNav.Navigator>
  );
};

function MainNavigation() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen
          name="InitialLoginScreen"
          component={InitialLoginScreen}
        />
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
        <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <AuthStack.Screen name="PollScreen1" component={PollScreen1} />
        <AuthStack.Screen name="PollScreen2" component={PollScreen2} />
        <AuthStack.Screen name="PollScreen3" component={PollScreen3} />
        <AuthStack.Screen name="PollScreen4" component={PollScreen4} />
        <AuthStack.Screen name="PollScreen5" component={PollScreen5} />
        <AuthStack.Screen name="PollScreen6" component={PollScreen6} />
        <AuthStack.Screen name="PollScreen7" component={PollScreen7} />
        <AuthStack.Screen name="PollScreen8" component={PollScreen8} />
        <AuthStack.Screen name="PollScreen9" component={PollScreen9} />
        <AuthStack.Screen
          name="PollProfileScreen"
          component={PollProfileScreen}
        />
        <AuthStack.Screen name="PollScreen10" component={PollScreen10} />
        <AuthStack.Screen name="DrawerStack" component={Drawerstack} />
        <AuthStack.Screen name="AdminStack" component={AdminStack} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
