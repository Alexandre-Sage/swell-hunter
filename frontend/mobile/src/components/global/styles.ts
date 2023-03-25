import { StyleSheet } from "react-native";

export const BackGroundColor = "rgba(0, 0, 0, 0.89)";
export const BorderColor = "rgba(25, 214, 255, 0.89)";
export const ButtonBorderColor = "rgba(182, 182, 182, 0.89)";
export const TextColor = "rgba(228, 228, 228, 0.89)";
export const ModalBackgroundColor = "rgba(23, 23, 23, 0.95)"
export const Mixin = StyleSheet.create({
  border: {
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: BorderColor,
  },
  columnFullCenter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  columnSpacedAround: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  rowFullCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  rowFullCenterWraped: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  devBorder: {
    borderColor: "red",
    borderWidth: 2,
  },
});
export const devBorder = Mixin.devBorder;
export const borderMixin = Mixin.border;
export const columnFullCenterMixin = Mixin.columnFullCenter;
export const rowFullCenterMixin = Mixin.rowFullCenter;
export const rowFullCenterWrapedMixin = Mixin.rowFullCenterWraped;
export const columnSpacedAroundMixin = Mixin.columnSpacedAround;
